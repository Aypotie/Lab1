function perimeter(a, b, c) {
    return a + b + c;
}
function area(a, b, c) {
    let p = perimeter(a, b, c) / 2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}
function isosceles(a, b, c) { 
    if (a == b || a == c || b == c){
        return true;
    } else {
        return false;
    }
}
module.exports.perimeter = perimeter;
module.exports.area = area;
module.exports.isosceles = isosceles;