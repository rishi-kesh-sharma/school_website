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



//script for carousel

const carouselContainer=document.querySelector(".carousel-container");
const carouselImage1=document.querySelector(".carousel-image1");
const carouselImage2=document.querySelector(".carousel-image2");
const slideLeftButton=document.querySelector(".slide-left-btn")
const slideRightButton=document.querySelector(".slide-right-btn")
// const slideLeftButton;
// console.log(cauouselImage);

var currentIndexOfCarouselImage=1;
var presentTime=0;
const intervalFunction=()=>{
  

        // carouselImage.classList.toggle("carousel-image");
    
        if(currentIndexOfCarouselImage<12)
        {
    
            currentIndexOfCarouselImage+=1;
        }
        else{
            currentIndexOfCarouselImage=1;
        }
    
        if(currentIndexOfCarouselImage%2==0)
        
        {
    
            carouselImage1.setAttribute("src",`../../images/image${currentIndexOfCarouselImage}.png`);
        }
    //    else{
    
    //        carouselImage2.setAttribute("src",`./images/image${currentIndexOfCarouselImage}.png`);
    //    }
}
const carouselSlideInterval=setInterval(intervalFunction,10000);
    // console.log(currentIndexOfCarouselImage); 

// setInterval(() => {
//     carouselImage.classList.toggle("carousel-image");
    
// }, 2000);

slideLeftButton.addEventListener("click",(e)=>{
    console.log(e.target.classList); 
    clearInterval(carouselSlideInterval);
    if(currentIndexOfCarouselImage>1)
    {

        currentIndexOfCarouselImage-=1;
    }
    else{
        currentIndexOfCarouselImage=12;
    }
    carouselImage1.setAttribute("src",`../../images/image${currentIndexOfCarouselImage}.png`);


})

slideRightButton.addEventListener("click",(e)=>{
    console.log(e.target.classList);
    clearInterval(carouselSlideInterval);
    if(currentIndexOfCarouselImage<12)
    {

        currentIndexOfCarouselImage+=1;
    }
    else{
        currentIndexOfCarouselImage=1;
    }
    carouselImage1.setAttribute("src",`../../images/image${currentIndexOfCarouselImage}.png`);

    


})


