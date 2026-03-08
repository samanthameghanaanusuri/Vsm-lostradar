let user = localStorage.getItem("userId")

db.collection("items")
.orderBy("time","desc")
.onSnapshot(snapshot=>{

let html=""

snapshot.forEach(doc=>{

let item=doc.data()

html += `

<div class="card">

<img src="${item.image}">

<div class="card-body">

<h3>${item.name}</h3>

<p class="${item.type.toLowerCase()}">${item.type}</p>

<p>📍 ${item.location}</p>

<button onclick="openChat('${item.user}')">Chat</button>

</div>

</div>

`

})

document.getElementById("items").innerHTML = html

})



function openChat(otherUser){

if(!otherUser){
alert("User not available")
return
}

if(otherUser === user){
alert("This is your item")
return
}

window.location = "chat.html?user=" + otherUser

}