{let container = document.querySelector(".min-search-form__progress-container");
            let itemTitle = document.querySelectorAll(".progress-container__item-title");
            container.addEventListener("pointerdown",function(e){
                if(e.target.classList.contains("progress-container__item-title")){
                if(!e.target.closest(".active")){
                   itemTitle.forEach(function(item){
                                     if(item.classList.contains("active"))
                                         item.classList.remove("active");
                                     }) 
                    e.target.classList.add("active");
                }
                }
            })
            
}