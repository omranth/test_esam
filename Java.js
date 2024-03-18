let start = ["{", "(", "["];
let end = ["}", ")", "]"];
let newArray = []

function str(str = "") {
  let bool = true;
  let arr = str.split("");

  let filter = arr.filter(function (item) {
    for (let i = 0; i < 3; i++)
      if (item == start[i] || item == end[i]) {
        return item;
      }
  })
  for (let i = 0; i < filter.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (filter[i] === end[j]) { //نهاية 
        if (filter[i - 1] === start[j]) { // بداية
          filter.splice(i - 1, 2)
          i = 0
        }
      }
    }
  }
  console.log(filter)
  if (filter.length !== 0) {
    bool = false
  }
  console.log(bool)
}
str("[({()}){()}]")