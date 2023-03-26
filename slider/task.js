
const items = document.getElementsByClassName('slider__item')

function getClick(name){
    return function(){

        const active = document.getElementsByClassName('slider__item_active')[0]
        active.classList.remove('slider__item_active')

        // alert(name)
        
        if ( name == 'prev' ){
            prev(active).classList.add('slider__item_active') 
        }else
            next(active).classList.add('slider__item_active') 
        }

}

function get(act){
    // alert(items.length)
    let i = 0
    while ( items[i].isEqualNode(act) == false && i < items.length ) {
        i++
    }
    // alert(i)
    return i
}

function next(act){
    let i = get(act)
    if ( i == items.length - 1 ){
        i = 0
    }else{
        i++
    }
    // alert(i)
    return items[i]
}

function prev(act){
    let i = get(act)
    if ( i == 0 ){
        i = items.length - 1
    }else{
        i = i-1
    }
    // alert(i)
    return items[i]
}

document.getElementsByClassName('slider__arrow_prev')[0].onclick = getClick('prev')
document.getElementsByClassName('slider__arrow_next')[0].onclick = getClick('next')