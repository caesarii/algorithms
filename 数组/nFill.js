
function nFill(atom, n) {
    var result = [];
    function untilPush(atom, n) {
        if(n === 0) {
            return;
        }
        result.push(atom);
        untilPush(atom, n - 1);
    }
    untilPush(atom, n)
    return result;
}
console.log(nFill(22, 1));
