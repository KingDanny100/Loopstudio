function onMenuClick() {
    var navbar = document.getElementById('hidden');
    var responsive_class_name = 'hide'
    if(navbar.classList.contains('menu')){
        navbar.classList.remove('menu')
    }
    navbar.classList.toggle(responsive_class_name)
}

function onBarClick(){
    var navbar = document.getElementById('hidden');
    var responsive_class_name = 'menu'
    if(navbar.classList.contains('hide')){
        navbar.classList.remove('hide')
    }
    navbar.classList.toggle(responsive_class_name)
}



