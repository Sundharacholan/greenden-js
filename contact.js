var menubtn = document.getElementById("menubtn")
var navbar = document.getElementById("navbar")
var backbtn = document.getElementById("backbtn")

menubtn.addEventListener("click",function()
    {
        navbar.style.right=0
    }
)

backbtn.addEventListener("click",function()
    {
        navbar.style.right="-70%"
    }
)