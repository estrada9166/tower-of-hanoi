var tower1 = [1, 2, 3, 4, 5, 6];
var tower2 = [];
var tower3 = [];


var solve = function(discs, src, aux, dest, count) {
    
    console.log(count)
    console.log(`the tower 1 is ${tower1}`);
    console.log(`the tower 2 is ${tower2}`);
    console.log(`the tower 3 is ${tower3}`);
    
    if(tower3.length === discs){
        return dest;
    }
    if(discs % 2 !== 0) {
        if(src[0] < dest[0] || !dest[0]) {
            dest.unshift(src[0]);
            src.splice(0, 1);
            count ++;
            return aux[0]? solve(discs, aux, dest, src, count) : solve(discs, src, aux, dest, count);
        } else if (src[0] < aux[0] || !aux[0]) {
            aux.unshift(src[0]);
            src.splice(0, 1);
            count ++;
            return dest[0]? solve(discs, dest, src, aux, count) : solve(discs, src, aux, dest, count);
        } else {
            return solve(discs, dest, src, aux, count)
        }  
    } else {
        if (src[0] < aux[0] || !aux[0]) {
            aux.unshift(src[0]);
            src.splice(0, 1);
            count ++;
            return dest[0]? solve(discs, dest, src, aux, count) : solve(discs, src, aux, dest, count);
        } else if(src[0] < dest[0] || !dest[0]) {
            dest.unshift(src[0]);
            src.splice(0, 1);
            count ++;
            return aux[0]? solve(discs, aux, dest, src, count) : solve(discs, src, aux, dest, count);
        } else {
            return solve(discs, aux, dest, src, count)
        }
    }
};

console.log(solve(6, tower1, tower2, tower3, 0))

//console.log(`the tower 1 is ${tower1}`);
//console.log(`the tower 2 is ${tower2}`);
//console.log(`the tower 3 is ${tower3}`);

