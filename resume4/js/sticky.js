!function(){
    var view = document.querySelector('#topNavBar')
    window.addEventListener('scroll',function(x){
        if(window.scrollY > 0){
            view.classList.add('sticky')
        }else{
            view.classList.remove('sticky')
        }
    })
}.call()

