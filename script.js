var btn = document.querySelector("button");
var h5 = document.querySelector("h5");
var h1 = document.querySelector("h1");


var flag = 0;


btn.addEventListener("click",function()
{
   if(flag == 0)
   {
    h5.innerHTML = "Friends";
    h5.style.color ="green";
    h1.style.color ="purple";
    btn.innerHTML ="Remove Friend ";
    flag = 1;

   }
   else{
    h5.innerHTML = "Stranger";
    h5.style.color ="red";
    h1.style.color ="black";
    btn.innerHTML =" Add Friend ";
    flag = 0;
   }
})
