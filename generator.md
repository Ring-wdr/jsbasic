# generator

### stackQ generator 풀이

나의 풀이

```js
  *[Symbol.iterator]() {
    let idx = 0;
    while (this.#arr[idx]) {
      yield this.#arr[idx];
      idx += 1;
    }
  }
```

선생님 풀이

```js
  *[Symbol.iterator]() {
    for (let idx = 0; idx < this.#arr.length; idx += 1){
        yield this.#arr[idx];
    }
  }
```
