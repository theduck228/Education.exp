//кнопки открытия
document.getElementById("head__sign-up__btn").addEventListener("click",function (){
    document.getElementById("only_modal").classList.add("open")
})
document.getElementById("stats__consult__btn").addEventListener("click",function (){
    document.getElementById("only_modal").classList.add("open")
})
document.getElementById("schedule__school__record_btn").addEventListener("click",function (){
    document.getElementById("only_modal").classList.add("open")
})
document.getElementById("recommends__consult__btn").addEventListener("click",function (){
    document.getElementById("only_modal").classList.add("open")
})
document.getElementById("curator__consult__btn").addEventListener("click",function (){
    document.getElementById("only_modal").classList.add("open")
})
document.getElementById("btn-modal-head").addEventListener("click",function (){
    document.getElementById("only_modal").classList.add("open")
})
document.getElementById("btn-modal-intro").addEventListener("click",function (){
    document.getElementById("only_modal").classList.add("open")
})

//закрытие при нажатии на кнопку
document.getElementById("modal__box__close__btn").addEventListener("click",function (){
    document.getElementById("only_modal").classList.remove("open")
})


//закрытие при нажатии на область вне модального окна
document.querySelector("#only_modal .modal__box").addEventListener('click', event => {
    event._isClickWithModal = true
})
document.querySelector("#only_modal").addEventListener('click', event => {
    if (event._isClickWithModal) return;
    event.currentTarget.classList.remove('open')
})

//прибивает страницу к верху
document.ready(function(){
    setTimeout(function(){
        window.scrollTo(0, 0);
    }, 1);
});


