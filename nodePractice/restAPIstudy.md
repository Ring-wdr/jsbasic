# Rest API

apache HTTP 서버 프로젝트의 공동 설립자인 로이 필딩[Roy Fielding]이 논문에 HTTP의 장점을 최대한 활용할 수 있는 아키텍처로서 REST를 소개했고 이는 HTTP 프로토콜을 의도에 맞게 디자인하도록 유도하고 있다. RESTful은 REST의 기본 원칙을 지킨 서비스 디자인을 의미한다.<br>
즉 REST는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처고, REST API는 REST기반으로 구현된 서비스 API를 의미한다.<br>

#### API란 무엇인가?

<p>
API는 정의 및 프로토콜 집합을 사용하여 두 소프트웨어 구성 요소가 서로 통신할 수 있게 하는 메커니즘입니다. 예를 들어, 기상청의 소프트웨어 시스템에는 일일 기상 데이터가 들어 있습니다. 휴대폰의 날씨 앱은 API를 통해 이 시스템과 "대화"하고 휴대폰에 매일 최신 날씨 정보를 표시합니다.(https://aws.amazon.com/ko/what-is/api/)
</p>

### 1. REST API의 구성

REST API는 자원, 행위, 표현의 3가지 요소로 구성된다. REST는 자체 표현 구조로 구성되어 REST API만으로 HTTP 요청의 내용을 이해할 수 있다.

| 구성 요소 | 내용                           | 표현 방법        |
| --------- | ------------------------------ | ---------------- |
| 자원      | 자원                           | URI(endpoint)    |
| 행위      | 자원에 대한 행위               | HTTP 요청 메서드 |
| 표현      | 자원에 대한 행위의 구체적 내용 | 페이로드         |

### 2. REST API 설계 원칙

REST에서 가장 중요한 기본적인 원칙은 두 가지로 하나는 URI로 리소스를 표현해야 한다는 것이고, 다른 하나는 행위에 대한 정의는 HTTP 요청 메서드를 통해 하는 것이다.

1)URI는 리소스를 표현해야 한다.<br>
리소스 식별 이름을 정할 때동사보다는 명사를 사용한다.

```
#bad
GET /getTodos/1
GET /todos/show/1

# good
GET /todos/1
```

2)리소스에 대한 행위는 HTTP 요청 메서드로 표현한다.

리소스에 대한 행위는 URI에 표현하지 말고 HTTP 요청 메서드를 통해 표현해야한다.

| HTTP 요청 메서드 | 종류           | 모든/특정 리소스 취득 | 페이로드 |
| ---------------- | -------------- | --------------------- | -------- |
| GET              | index/retrieve | 모든/특정 리소스 취득 | x        |
| POST             | create         | 리소스 생성           | o        |
| PUT              | replace        | 리소스의 전체 교체    | o        |
| PATCH            | modify         | 리소스의 일부 수정    | o        |
| DELETE           | delete         | 모든/특정 리소스 삭제 | x        |

```
# bad
GET /todos/delete/1

# good
DELETE /todos/1
```

### 3. JSON Server를 이용한 REST API 실습

이번 실습은 windows 11 기반으로 진행되는 실습으로 이후에 다시 볼 때를 대비해서 발생하는 모든 오류를 기록하였습니다.<br>

| 항목     | 내용               |
| -------- | ------------------ |
| 사용 IDE | WebStorm (2022.02) |
| OS       | Windows 11         |
| 실습일자 | 2022.08.17         |

#### 1) Json Server 설치

WebStorm에서 새 프로젝트를 열어서 진행하였습니다

```powershell
npm install json-server --save-dev
```

#### 2) db.json 파일 생성

프로젝트의 로컬 폴더에 아래 내용을 담은 db.json 파일을 생성합니다

```json
{
  "todos": [
    {
      "id": 1,
      "content": "HTML",
      "completed": true
    },
    {
      "id": 2,
      "content": "CSS",
      "completed": false
    },
    {
      "id": 1,
      "content": "JavaScript",
      "completed": true
    }
  ]
}
```

#### 3) JSON server 실행

딥다이브 교재에 있는 JSON server 실행 명령어를 바로 실행하게 되면 에러가 뜨게 되는데 windows를 사용하는 경우 powershell의 실행 정책 관련 설정을 바꿔줘야합니다.

<에러 메세지>

```powershell
json-server --watch db.json
# json-server : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\restapi\node_modules\.bin\json-server.ps1 파일을 로드할 수 없습니다. 자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)를 참조하십시
# 오.
# 위치 줄:1 문자:1
# + json-server --watch db.json
# + ~~~~~~~~~~~
#     + CategoryInfo          : 보안 오류: (:) [], PSSecurityException
#     + FullyQualifiedErrorId : UnauthorizedAccess
```

<해결 방법>

```powershell
PS C:\restapi> executionpolicy
Restricted
PS C:\restapi> set-executionpolicy unrestricted
PS C:\restapi> executionpolicy
Unrestricted
PS C:\restapi> json-server --watch db.json

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/todos

  Home
  http://localhost:3000

```

package.json 파일에서 아래 scripts 부분만 수정하게 되면 npm start를 할 때 db.json보기가 자동으로 실행된다.

```json
  "scripts": {
    "start": "json-server --watch db.json"
  },
```

#### 4) GET 요청

todos 리소스에서 모든 todo를 취득한다. 로컬에 public 폴더를 만들고 get_index.html 생성 후 localhost:3000/get_index.html로 접속한다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>test</title>
  </head>
  <body>
    <pre></pre>
    <script>
      //HTTP 요청 초기화
      const xhr = new XMLHttpRequest();
      // todos리소스에서 모든 todos를 취득
      xhr.open("GET", "/todos");

      //HTTP 요청 전송
      xhr.send();

      // load 이벤트틑 요청이 성공적으로 완료된 경우 발생한다.
      xhr.onload = () => {
        if (xhr.status === 200) {
          document.querySelector("pre").textContent = xhr.response;
        } else {
          console.error("Error", xhr.status, xhr.statusText);
        }
      };
    </script>
  </body>
</html>
```

다음은 id를 사용하여 특정 todo를 취득한다. 아까 만든 public 폴더에 get_retrieve.html을 생성 후 브라우저에서 들어가본다. get_index.html에서 아래 부분만 바꿔준다.

```js
// todos리소스에서 모든 todos를 취득
xhr.open("GET", "/todos/1");
```

```
{
  "id": 1,
  "content": "HTML",
  "completed": true
}
```

#### POST 요청

todos 리소스에 새로운 todo를 생성한다. POST 요청 시에 setRequestHeader 메서드를 사용하여 요청 몸체에 담아 서버로 전송할 페이로드의 MIME 타입을 지정해야한다. 기존 형식 그대로 script부분만 아래로 바꿔서 post.html을 생성 후 브라우저를 통해 들어간다

```js
//HTTP 요청 초기화
const xhr = new XMLHttpRequest();
// todos리소스에서 모든 todos를 취득
xhr.open("GET", "/todos");

//HTTP 요청 전송
xhr.send();

// load 이벤트틑 요청이 성공적으로 완료된 경우 발생한다.
xhr.onload = () => {
  if (xhr.status === 200) {
    document.querySelector("pre").textContent = xhr.response;
  } else {
    console.error("Error", xhr.status, xhr.statusText);
  }
};
```

post.html로 들어가면 터미널에도 아래와 같이 뜨는 것을 확인할 수 있고

```powershell
GET /todos 304 27.966 ms - -
POST /todos 201 144.124 ms - 59 #Post
```

db.json파일도 아래 내용이 추가된 것을 확인할 수 있다.

```json
{
  "id": 4,
  "content": "Angular",
  "completed": false
}
```

### PUT 요청

특정 리소스 전체를 교체할 때 사용한다. 아래 예제에서는 id로 todo를 특정하여 id를 제외한 모든 내용을 교체한다.<br>
마찬가지로 public 폴더에 put.html 생성 후 브라우저로 접속한다.

<put.html>

```js
//HTTP 요청 초기화
const xhr = new XMLHttpRequest();
// todos 리소스에서 todos를 취득
xhr.open("PUT", "/todos/4");

xhr.setRequestHeader("content-type", "application/json");

//HTTP 요청 전송
xhr.send(
  JSON.stringify({
    id: 4,
    content: "React",
    completed: true,
  })
);

// load 이벤트틑 요청이 성공적으로 완료된 경우 발생한다.
xhr.onload = () => {
  if (xhr.status === 200) {
    document.querySelector("pre").textContent = xhr.response;
  } else {
    console.error("Error", xhr.status, xhr.statusText);
  }
};
```

db.json으로 가보면 위에서 POST에서 넣었던 id = 4인 부분이 새로 입력한 내용으로 변한 것을 확인 할 수 있다.

```powershell
PUT /todos/4 200 22.732 ms - 56
```

```json
{
  "id": 4,
  "content": "React",
  "completed": true
}
```

### PATCH 요청

특정 리소스의 일부를 수정할 때 사용한다. PUT과 비슷하면서도 수정 범위에 있어서 차이가 있다. 마찬가지로 patch.html을 만들어서 테스트 해보면 된다.<br>

<patch.html>

```js
//HTTP 요청 초기화
const xhr = new XMLHttpRequest();
// todos리소스에서 todos를 취득
xhr.open("PATCH", "/todos/4");

xhr.setRequestHeader("content-type", "application/json");

//HTTP 요청 전송
xhr.send(
  JSON.stringify({
    completed: false,
  })
);

xhr.onload = () => {
  if (xhr.status === 200) {
    document.querySelector("pre").textContent = xhr.response;
  } else {
    console.error("Error", xhr.status, xhr.statusText);
  }
};
```

터미널에도 다음과 같이 뜸을 확인할 수 있고

```powershell
PATCH /todos/4 200 24.611 ms - 57
```

db.json에서도 completed 부분만 바뀐 것을 확인할 수 있다.

```json
{
  "id": 4,
  "content": "React",
  "completed": false
}
```

### DELETE 요청

todos에서 id를 사용하여 todo를 삭제한다.

<delete.html>

```js
//HTTP 요청 초기화
const xhr = new XMLHttpRequest();
// todos리소스에서 모든 todos를 취득
xhr.open("DELETE", "/todos/4");

//HTTP 요청 전송
xhr.send();

// load 이벤트틑 요청이 성공적으로 완료된 경우 발생한다.
xhr.onload = () => {
  if (xhr.status === 200) {
    document.querySelector("pre").textContent = xhr.response;
  } else {
    console.error("Error", xhr.status, xhr.statusText);
  }
};
```

터미널에서는 아래처럼 뜨며

```powershell

DELETE /todos/4 200 25.293 ms - 2
```

db.json에 id = 4인 todo가 사라진 것을 확인할 수 있다.
