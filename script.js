let time=document.getElementById('main')
let cont=60

let min=4
setInterval(function(){
    let sec1=document.createElement('p')
    sec1.textContent=min--;
    time.append(sec1)
},60000)
setInterval(function(){

    time.textContent= min+''
    let sec=document.createElement('p')
    sec.textContent=cont--;
    time.append(sec)
    console.log(sec)
},1000)