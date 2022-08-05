let username = prompt("Adınızı Giriniz")

if(username.length > 0){
    document.querySelector("#myName").innerHTML = username
}
else{
    alert("Lütfen Kullanıcı Adınızı Giriniz")
    location.reload()
}

function showTime(){
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    h = setTwoDigit(h)
    m = setTwoDigit(m)
    s = setTwoDigit(s)
    
    var days = ['Pazar','Pzartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    
    document.querySelector("#myClock").innerHTML = h + ":" +  m + ":" + s + " " + days[today.getDay()]
    setTimeout(showTime, 1000);
}

function setTwoDigit(value){
    if(value < 10){
        value = "0"+value
    }
    return value
}
showTime()