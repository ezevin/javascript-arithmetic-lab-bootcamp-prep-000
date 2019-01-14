function add(a, b) {
  return a+b
}
function subtract(a, b) {
  return a-b
}
function multiply(a, b) {
  return a*b
}
function divide(a, b) {
  return a/b
}

function inc(n) {
  var number = n
  return n+1
}
function dec(n) {
  var number = n
  return n-1
}
function makeInt(n, base){
  base = 10
 var parsed = parseInt(n, base)
 if (isNaN(parsed)) { return 0 }
  return parsed * 100
}
function preserveDecimal(n) {
  var number = n
 return parseFloat(n)
}