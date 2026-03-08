let user = localStorage.getItem("userId")

let urlParams = new URLSearchParams(window.location.search)

let other = urlParams.get("user")

function sendMessage(){

let text=document.getElementById("msg").value

if(!text)return

db.collection("messages").add({

sender:user,
receiver:other,
text:text,
time:Date.now()

})

document.getElementById("msg").value=""

}


db.collection("messages")
.orderBy("time")
.onSnapshot(snapshot=>{

let html=""

snapshot.forEach(doc=>{

let m=doc.data()

if(
(m.sender==user && m.receiver==other) ||
(m.sender==other && m.receiver==user)
){

html+=`<p><b>${m.sender}</b>: ${m.text}</p>`

}

})

document.getElementById("messages").innerHTML=html

})