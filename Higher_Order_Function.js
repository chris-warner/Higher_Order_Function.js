
var array = [1,2,3,4]

var answer = array.map(function(item){
  if (item%2 === 0){
    return item;
  }
})

console.log(answer);

var filtered = array.filter(function(item){
  if (item%2 === 0){
    return item;
  }
})

console.log(filtered);

var array = [1,2,3,4]


var sum = array.reduce(function(a,b){
  return a + b;
}, 10)

console.log(sum);

var array = [1,2,3,4]

array.forEach(function(item){
  console.log(item + 2);
})

// console.log(forEach);