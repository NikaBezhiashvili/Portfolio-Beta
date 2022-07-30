let button = document.getElementById('btn')
let main_text = document.getElementById('main_text')

window.addEventListener('scroll', function(){
    value = window.scrollY;
    button.style.marginTop = value + 'px';
    main_text.style.paddingTop = value + 'px';

})