function getClickOpen(el){
    return function(){
        //Ближайший элемент menuSub
        const menuSub = el.closest('.menu__item').querySelector('.menu_sub')

        //Уберём у всех других элементов подменю признак активности
        document.querySelectorAll('.menu_sub').forEach(element => {
            if ( element != menuSub ){
                element.classList.remove("menu_active")
            }
        }); 

        //Если признак не стоит - проставим
        if ( menuSub  != null ) {
            if  (menuSub.classList.contains("menu_active") == true ) {
                menuSub.classList.remove("menu_active")
            }else{
                menuSub.classList.add("menu_active")
            }
           
        } else{
            return true
        } 

        return false;

    }
}

const menuSub = document.querySelectorAll('.menu__link')

menuSub.forEach(el => {
    el.onclick = getClickOpen(el)
}); 

