document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener("click",()=>{
            
        const isExpand =card.classList.contains('active');
        const role=document.querySelectorAll('.heading');
        const head=card.firstElementChild;
       role.forEach(d=>{
        d.classList.remove("non-active");
       });
       head.classList.add("non-active")
        console.log(head);
        console.log("vishu")
        
        
        
        
        document.querySelectorAll('.card').forEach(c=>{
            c.classList.remove('active');
        });
   

    if(!isExpand)
    {
        card.classList.add('active');
    }

    else
    {
        head.classList.remove("non-active");
    }

    
});

});







