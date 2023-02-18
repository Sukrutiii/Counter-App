
var data=0;

document.getElementById("count").innerText=data;

function increment() {
    data = data + 1;
    data = data < 0 ? 0 : data;

    if(data < 0) {
        data=0;
    }else{
        data;
    }
    document.getElementById("count").innerHTML=data;
}

function decrement() {
    data = data-1;
    data = data < 0 ? 0 : data;
    document.getElementById("count").innerHTML=data;
}

function reset() {
    data=0;
    document.getElementById("count").innerHTML=data;
}