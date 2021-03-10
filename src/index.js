module.exports = function reverse (n) {
    let reversed =  String(n).split('').reverse().join('');
    reversed = parseInt(reversed); 
    return reversed;
}
