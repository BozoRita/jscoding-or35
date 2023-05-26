function or35(n){
 
    
    if (0 === n % 3 || 0 === n % 5) {
        let result = true
        return result
    }
    
    else (0 !== n % 5 || 0 !== n % 3) {
        let result = false
        return result
    }
  }