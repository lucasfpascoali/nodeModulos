const PI = Math.PI;

function circleArea(radius) {
    return PI * radius * radius;
}
module.exports.circleArea = circleArea;

function squareArea(sideLength) {
    return sideLength ** 2;
}
module.exports.squareArea = squareArea;