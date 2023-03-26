    function getClickOpen(name){
            return function(){
                // alert('getClickOpen')
                document.getElementById(name).classList.add('modal_active'); 
            }
        }

    function getClickClose(name){
        return function(){
            // alert('getClickClose')
            document.getElementById(name).classList.remove('modal_active'); 
        }
    }


    function getClickDanger(){
        return function(){
            document.getElementById('modal_main').classList.remove('modal_active'); 
            document.getElementById('modal_success').classList.add('modal_active'); 
        }
    }

   const btn1 = document.getElementById("btn_modal_main")
   btn1.onclick = getClickOpen('modal_main')
// Закрыть modal_main
   document.getElementById('modal_main').querySelector('.modal__close').onclick = getClickClose('modal_main')

// Открыть по кнопке
   document.getElementById('modal_main').querySelector('.show-success').onclick = getClickDanger()

// Закрыть modal_success
document.getElementById('modal_success').querySelector('.modal__close').onclick = getClickClose('modal_success')


// Закрыть по кнопке
document.getElementById('modal_success').querySelector('.btn_success').onclick = getClickClose('modal_success')
