var tower1 = [1, 2, 3, 4, 5];
var tower2 = [];
var tower3 = [];


var solve = function(discs, src, aux, dest) {
    if(dest.length === discs){
        return dest;
    }
    if(src[0] < dest[0] || !dest[0]) {
        dest.unshift(src[0]);
        src.splice(0, 1);
        return aux[0]? solve(discs, aux, dest, src) : solve(discs, src, aux, dest);
    } else if (src[0] < aux[0] || !aux[0]) {
        aux.unshift(src[0]);
        src.splice(0, 1);
        return dest[0]? solve(discs, dest, src, aux) : solve(discs, src, aux, dest);
    } else {
        return solve(discs, dest, src, aux)
    }  
};

console.log(solve(5, tower1, tower2, tower3))

console.log(`the tower 1 is ${tower1}`);
console.log(`the tower 2 is ${tower2}`);
console.log(`the tower 3 is ${tower3}`);

