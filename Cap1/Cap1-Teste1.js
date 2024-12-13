var points = [
    { x: 0, y: 0 },
    { x: 3, y: 4 }
];

points.dist = function () {

    var p1 = this[0]
    var p2 = this[1]
    var a = p2.x - p1.x
    var b = p2.y - p1.y

    return Math.sqrt(a * a + b * b)
}

console.log(points.dist())