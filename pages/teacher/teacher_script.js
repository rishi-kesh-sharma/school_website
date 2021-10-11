const teacherData=[
   [
       {

           type:"name",
           value:"rishikesh sharma",
       },
       {
           
        value:20,
           type:"age",
       },
       {

        value:"wrongdirection@gmail.com",
           type:"email",
       },

       {
        value:"987654321",
           type:"phone",

       },
        {

            type:"department",
            value:"science",
        },
       {
           type:"address",
    
           value:"lalitpur.",

       }



    ]
]

const icons=document.querySelectorAll(".icon");
const infoDisplayer=document.querySelectorAll(".info-displayer");
// console.log(infoDisplayer);
// console.log(icons[0])

icons.forEach((icon)=>{
  icon.addEventListener("mouseover",(e)=>{
      var currentDisplayer;
 
    teacherData[0].forEach((teacher)=>{
        if(teacher.type==e.target.classList[3]){
            currentDisplayer=e.target.parentNode.parentNode.querySelector(".info-displayer");
            // console.log(currentDisplayer);
            currentDisplayer.innerHTML=teacher.value;


            // infoDisplayer[1].innerHTML=teacher.value;
             
        }
    })
      
  })
})