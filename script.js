const hamburger=document.querySelector(".hamburger-container");
const navItems=document.querySelectorAll(".nav-item");
const navBar=document.querySelector(".navbar");
const mainHeader=document.querySelector(".main-header");
navItems.forEach((navItem)=>{
    
    
navItem.addEventListener("click",(e)=>{

    navItems.forEach((item)=>{
        item.classList.remove("active-nav-item");
    })
    e.target.parentNode.classList.add("active-nav-item")
   })
})
hamburger.addEventListener("click",()=>{
    if(mainHeader.classList.contains("show-navbar-in-mobile"))
    {

    } 
    mainHeader.classList.toggle("show-navbar-in-mobile");
     
})
