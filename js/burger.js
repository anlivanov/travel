{
    function openBurger(){
        document.querySelector(".header__icon").classList.toggle("open-menu");
        document.querySelector("body").classList.toggle("block-body");
        document.querySelector(".header__menu-list").classList.toggle("open-menu");
        
    }
    document.querySelector(".header__icon").addEventListener("pointerdown",function(e){
        openBurger();
        
    });
}