async function postItem(){

let name=document.getElementById("name").value
let type=document.getElementById("type").value
let location=document.getElementById("location").value
let file=document.getElementById("image").files[0]

let user=localStorage.getItem("userId")

if(!name || !location || !file){
alert("Please fill all fields")
return
}

try{

let data=new FormData()
data.append("file",file)
data.append("upload_preset","lostradar")

let res=await fetch("https://api.cloudinary.com/v1_1/dt5sxaybt/image/upload",{
method:"POST",
body:data
})

let result=await res.json()

console.log(result)

if(!result.secure_url){
alert("Image upload failed")
return
}

let imageUrl=result.secure_url

await db.collection("items").add({

name:name,
type:type,
location:location,
image:imageUrl,
user:user,
time:Date.now()

})

alert("Item posted successfully")

window.location="index.html"

}catch(err){

console.error(err)

alert("Upload error")

}

}