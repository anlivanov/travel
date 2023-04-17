document.querySelectorAll(".filter-duration__select-wrapper").forEach(function(select){
    let selectButton = select.querySelector(".filter__select");
let selectList = select.querySelector(".filter__select-list");
let listItems = selectList.querySelectorAll(".filter__select-item");
let hiddenInput = select.querySelector(".filter__select_hidden");

selectButton.addEventListener("pointerdown", function(e){
    selectList.classList.toggle("filter__select-list_visible");
})
listItems.forEach(function(listItem){
    listItem.addEventListener("pointerdown", function(e){
        e.preventDefault();
        e.stopPropagation();
        selectButton.innerText=this.innerText;
       selectButton.focus();
        hiddenInput.value=e.target.dataset.value;
        selectList.classList.remove("filter__select-list_visible");
        selectButton.blur();
    });
});
document.addEventListener("pointerdown",function(e){
    if(e.target != selectButton ){
         selectList.classList.remove("filter__select-list_visible");
    }
});

document.addEventListener("keydown",function(e){
    if(e.key === "Tab" || e.key === "Escape" ){
         selectList.classList.remove("filter__select-list_visible");
    }
});
});