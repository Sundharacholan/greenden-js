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

// search

var productc = document.getElementById("productcontainer")
var search = document.getElementById("search")
var list = document.querySelectorAll("div")

    search.addEventListener("keyup",function(){
        var enteredvalue = event.target.value.toUpperCase()
        for(count=0; count<list.length; count=count+1)
        {
            var name = list[count].querySelector("h1").textContent

            if(name.toUpperCase().indexOf(enteredvalue)<0)
            {
                list[count].style.display="none"
            }
            else{
                list[count].style.display="block"
            }
        }
    }
)