var com = document.querySelector("h5") 

var btn = document.querySelector("#add")

var flag = 0

btn.addEventListener("click",function(){
    if(flag==0){
        com.innerHTML = "Friends"
        com.style.color="green"
        btn.innerHTML="Remove Friend"
        flag=1
    }
    else{
        com.innerHTML = "Stranger"
        com.style.color="red"
        btn.innerHTML="Add Friend"
        flag=0
    }


})
