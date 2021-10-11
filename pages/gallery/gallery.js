let btns=document.querySelectorAll(".navitem");
let galleryItems=document.querySelectorAll(".gallery-item");
 
   
btns.forEach((btn)=> { 
    btn.addEventListener('click',()=>{
         
        galleryItems.forEach((galleryItem)=>{
            
            if((galleryItem.classList.contains(btn.classList[1])))
            { 
                galleryItem.style.display="flex";
            }
            else{
                galleryItem.style.display="none";
            }
         
        })
    })
    
});