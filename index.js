const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  newArray = [...kittens, name]
  return newArray
}
function prependKitten(name) {
  newArray = [name, ...kittens]
  return newArray
}
function removeLastKitten() {
  newArray = kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten() {
  newArray = kittens.slice(1, kittens.length)
}