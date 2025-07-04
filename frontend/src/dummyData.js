// dummy data :

const store = [
  {
    category: "bag",
    brand: "WildCraft",
    size: ["XL", "X", "S"],
  },
];

const obj = store.map((value) => {
  if (typeof value === "object") {
    value.size.forEach((elm) => {
      console.log(elm);
    });

    console.log(value);
    return value.size;
  }

  return [];
});
console.log(obj);
