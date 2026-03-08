async function signup(){

let name=document.getElementById("name").value
let id=document.getElementById("collegeId").value
let password=document.getElementById("password").value

if(!name || !id || !password){

alert("Fill all fields")

return

}

let userRef=db.collection("users").doc(id)

let doc=await userRef.get()

if(doc.exists){

alert("Account already exists")

return

}

await userRef.set({

name:name,
password:password

})

alert("Account created")

window.location="login.html"

}



async function login(){

let id=document.getElementById("collegeId").value
let password=document.getElementById("password").value

let doc=await db.collection("users").doc(id).get()

if(!doc.exists){

alert("User not found")

return

}

let data=doc.data()

if(data.password==password){

localStorage.setItem("userId",id)

alert("Login success")

window.location="index.html"

}

else{

alert("Wrong password")

}

}