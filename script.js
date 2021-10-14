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


// script for announcement

const announcementLink=document.querySelector(".announcement a");
const announcement=document.querySelector(".announcement");

const announcementContent=document.querySelector(".announcement ul");
console.log(announcementContent);

announcement.addEventListener("mouseover",(e)=>{
announcementContent.style.display="block";
})

//   announcementContent.addEventListener("mouseout",(e)=>{
//     announcementContent.style.display="none";
// })
  announcement.addEventListener("mouseout",(e)=>{
    announcementContent.style.display="none";
})


//notice silder

// const noticeCardContainer=document.querySelector(".notice-card-container");
// const noticeCards=document.querySelectorAll(".notice-card");
// var dx=0.0001;
// var noticeCardWidth=0;
// var noticeCardMargin=10;
// var totalDisplaceMent=0;


// const intervalToslideNotice=()=>{
    
//     var currentNoticeContainerWidth=noticeCardContainer.getBoundingClientRect().width;
//     var currentWindowWidth=window.innerWidth;
//     noticeCards.forEach((noticeCard)=>{
//         console.log(noticeCard)
//         noticeCard.style.position="absolute";
//     var  noticeCardWidth=noticeCard.getBoundingClientRect().width;

//         console.log(dx);
//         console.log(noticeCardWidth);
        
        
//         var currentXPos=noticeCard.getBoundingClientRect().x;
//             console.log(currentXPos);
//             console.log(currentNoticeContainerWidth);
//             if(currentXPos+noticeCardWidth>currentNoticeContainerWidth)
//             {
//                 console.log()
//                currentXPos=0;
//             }
//             console.log(currentXPos)
//             else{
//                  currentXPos=noticeCard.getBoundingClientRect().x;

//                  currentXPos+=-noticeCardWidth;
//                  }
//         console.log(currentXPos);
//         console.log(currentXPos);
//         console.log(currentXPos);

//         noticeCard.style.left=currentXPos+"px";
         
//         ((currentXPos>currentWindowWidth)&&(currentXPos<0))?noticeCard.style.display="none":noticeCard.style.display="block";
//     })
// }
// noticeCards.forEach((noticeCard)=>{

//     noticeCard.style.position="absolute";
//      totalDisplaceMent+=noticeCardWidth+noticeCardMargin;
//     noticeCard.style.left=totalDisplaceMent+"px";
//     console.log(noticeCard.style.left);
//     noticeCard.style.top="0px"
//      noticeCardWidth=noticeCard.getBoundingClientRect().width;
     
     
     
//     })
    
//     setInterval(intervalToslideNotice,100);
