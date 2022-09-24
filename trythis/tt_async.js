/*
const afterTime = (sec) => {
  if (sec < 1 || sec > 3)
    return Promise.reject(new Error("Not valid sec range!!"));
  return new Promise((resolve) => setTimeout(resolve, sec * 1000, sec));
};

try {
  const x = afterTime(1);
  console.log("x=", x);
  console.log(await x);
  console.log(await afterTime(0.1));
} catch (err) {
  console.log("eeeeeeeeeeeeeeeeeeeee>>", err);
}
*/
const getUser = async () => {
  const response = await fetch(sampleUrl);
  return await response.json(); // await은 과연 필요한가?
};
