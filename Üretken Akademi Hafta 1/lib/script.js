// Add your code here

var nav = document.getElementById('nav');
var ctx = nav.getContext('2d');
ctx.font = '30px Arial';
ctx.fillText('Hesap Makinesi', 40, 35);

var result = document.getElementById('value');

var arr =[]
var num = ""

function Process() {
  if (arr[1] == '+') {
    var returnValue = parseInt(arr[0]) + parseInt(arr[2]);
    result.innerText = ' ';
    result.innerText = returnValue;
    console.log(returnValue)
    
  } else if (arr[1] == '-') {
    var returnValue = parseInt(arr[0]) - parseInt(arr[2]);
    result.innerText = ' ';
    result.innerText = returnValue;
  } else if (arr[1] == '/'){
    var returnValue = parseInt(arr[0]) / parseInt(arr[2]);
    result.innerText = ' ';
    result.innerText = returnValue;
  } else if (arr[1] == '*'){
    var returnValue = parseInt(arr[0]) * parseInt(arr[2]);
    result.innerText = ' ';
    result.innerText = returnValue;
  }

  arr = []
  //console.log(arr)
}

function buttonClicked(id) {
  var btn = document.getElementById(id)
  let value = btn.value
  
  if(value == '+' || value == '-' || value == '/' || value == '*'){
    //console.log(arr)
    if(arr.length < 3){
      arr.push(num);
      if(!arr[1]){
        arr.push(value)
        result.innerText += value
      }
    }
    num = ""
  }else if(value == '='){
    if(arr.length <3){
      arr.push(num)
      Process()
      num=""
    }
    console.log(arr)
    
  }else{
    num = num + value
    result.innerText += value;
  }
}

function clearResult() {
  result.innerText = '';
  arr = []
  num = ""
  console.log(arr)
}
