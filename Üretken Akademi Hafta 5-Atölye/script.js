var count = document.getElementById("count");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var timer = false;

startBtn.addEventListener('click',function(){
    timer = true;
    increment();
})

stopBtn.addEventListener('click',function(){
    timer = false;
    count.innerHTML = 0;
})

function increment() {
    if(timer){
        count.innerHTML = parseInt(count.innerHTML) + 1;
        setTimeout(increment,1000);
    }
}