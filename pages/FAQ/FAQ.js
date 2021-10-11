
  let btns=document.querySelectorAll(".icon");
  let ans=document.querySelectorAll(".ans"); 
  console.log(ans);
  btns.forEach((btn,index) => {
      btn.addEventListener("click",()=>
      {
           
          ans[index].classList.toggle("opened");
          console.log(ans[index].classList.contains("opened"));
          if( ans[index].classList.contains("opened"))
          {
              btn.innerHTML="-";
          }
          else{
              btn.innerHTML="+";
          }
      })
  });

   

 