// Can be declared like this, but it's not the usual way to do it.
// const mArray = new Array();

//This is the usual way to declare an array:
const mArray = [1, 2, 3, 4];

//to add values to the array:
//mArray.push(3);
//but push is not the best way to do it, since it modifies the array object.
//Instead,

let nArray = [...mArray, 5];

//map requires
const zArray = nArray.map(function (x) {
  return x * 2;
});
console.log(zArray);
