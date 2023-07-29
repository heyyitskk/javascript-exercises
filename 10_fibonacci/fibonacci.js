const fibonacci = function fib(n) {
    n = parseInt(n);
    if (n < 0)
        return "OOPS";
    if (n < 2)
        return n;
    return (fib(n-1) + fib(n-2));
};

// Do not edit below this line
module.exports = fibonacci;
