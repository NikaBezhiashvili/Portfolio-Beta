let button = document.getElementById('btn')
let main_text = document.getElementById('main_text')
let stars = document.getElementById('backstars')
window.addEventListener('scroll', function(){
    value = window.scrollY;
    button.style.marginTop = value + 'px';
    main_text.style.paddingTop = value + 'px';
    stars.style.top = value + 'px';
    stars.style.left = value * 0.1 + 'px';

})