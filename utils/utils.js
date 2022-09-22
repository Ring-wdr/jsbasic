const deepCopy = (arrobj) => {
  const copyObj = Array.isArray(arrobj) ? [] : {};
  for (let k in arrobj) {
    const tmpObj = arrobj[k];
    if (typeof tmpObj === "object") copyObj[k] = deepCopy(tmpObj);
    else copyObj[k] = arrobj[k];
  }

  return copyObj;
};

const promiseFn = (id = 1) =>
  new Promise((resolve, reject) => {
    console.log("id>>", id);
    if (id < 7) resolve(id + 1);
    else reject(new Error("어디로?" + id));
  });

export { deepCopy, promiseFn };
