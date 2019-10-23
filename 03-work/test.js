function fibonacci (n) {
    if (n < 0) throw Error('fibonacci:n < 0')
    if (n === 0) return 0
    if (n === 1) return 1
    return 3*(fibonacci(n - 1)) + 2*(fibonacci(n - 2))
  }
  
  var startTime = Date.now()
  console.log('fibonacci(4)=', fibonacci(4))
  var endTime = Date.now()
  var milliSeconds = endTime - startTime
  console.log('time:%dms', milliSeconds)