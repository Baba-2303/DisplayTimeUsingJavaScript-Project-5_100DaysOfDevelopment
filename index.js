const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(function currenttime(){
    
    let time = new Date();
    document.getElementById('time').innerHTML =  `${time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()}<br> On ${time.toLocaleDateString(undefined,options)}`;
    console.log("jaishreeram")
}, 1000);
