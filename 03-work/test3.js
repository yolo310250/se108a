var fibonacci = function() {
    var fib = [0, 1];
    return function(n) {
        if(n >= fib.length) for(var i = fib.length; i <= n; i++) {
            fib[i] = 3*(fib[i - 1]) + 2*(fib[i - 2]);
        }
        return fib[n];
    };
}();
    
for(var i = 0; i < 10; i++) {
    console.log('fibonacci(i)=', fibonacci(i));
 }