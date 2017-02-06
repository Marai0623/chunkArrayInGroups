//1
function chunkArrayInGroups(arr, size) {
  var newArray = [];
  for(var i = 0; i<arr.length; i+=size){
    var j = arr.slice(i,i+size);
    newArray.push(j);
  }
  return newArray;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
//2
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}
//3
function chunkArrayInGroups(arr, size) {
  return [...Array(Math.ceil(arr.length/size))]
    .map(_=> arr.splice(0, size));
}