const deepCopy = (arrobj) => {
  const copyObj = Array.isArray(arrobj) ? [] : {};
  for (let k in arrobj) {
    const tmpObj = arrobj[k];
    if (typeof tmpObj === "object") copyObj[k] = deepCopy(tmpObj);
    else copyObj[k] = arrobj[k];
  }

  return copyObj;
};

export { deepCopy };
