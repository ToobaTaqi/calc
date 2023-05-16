function getn(num){
   document.getElementById('result').value += num
   return num
}




function clr(){
    document.getElementById('result').value=" "
}

function rmv(){
    var res = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length-1)
}

function fact() {
    var num = parseInt(document.getElementById('result').value);
    var factorial = 1;
  
    if (num === 0 || num === 1) {
      return 1;
    } else {
      for (var i = 2; i <= num; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  

 

//   function fact(num) {
//     var num = document.getElementById('result').value
//     if (num === 0 || num === 1) {
//       return 1;
//     } else {
//       return num * fact(num - 1);
//     }
//   }



function Cosn() {
    var n = document.getElementById('result').value;
    var d = (n * Math.PI) / 180;
    var cosine = Math.cos(d);
    document.getElementById('result').value = cosine
    return cosine;
  }

 function Sinn(){
    var n = document.getElementById('result').value;
    var d = (n * Math.PI) / 180;
    var sin = Math.sin(d);
    document.getElementById('result').value = sin
    return sin;
 } 

 function Tann(){
    var n = document.getElementById('result').value;
    var d = (n * Math.PI) / 180;
    var tan = Math.sin(d);
    document.getElementById('result').value = tan
    return tan;
 }


  function getr() {
    var ans = document.getElementById('result').value;
  
    
      document.getElementById('result').value = eval(ans);
    
  }
  