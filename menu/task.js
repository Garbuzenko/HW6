function getClickOpen(el){
    return function(){
        //Ближайший элемент menu_sub
        const menu_sub = el.closest('.menu__item').querySelector('.menu_sub')

        //Уберём у всех других признак
        document.querySelectorAll('.menu_sub').forEach(element => {
            if ( element != menu_sub ){
                element.classList.remove("menu_active")
            }
        }); 

        //Если признак не стоит - проставим
        if ( menu_sub.classList.contains("menu_active") == true ) {
            menu_sub.classList.remove("menu_active")
        }else{
            menu_sub.classList.add("menu_active")
        }

        return false;

    }
}

const menu_sub = document.querySelectorAll('.menu__link')

menu_sub.forEach(el => {
    el.onclick = getClickOpen(el)
}); 

