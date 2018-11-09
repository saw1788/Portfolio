var menu = document.getElementById("menuCollapse"); //Gets the menu container element 

//Check the viewport size and close the menu if it's less than 321px
function closeMenu() {
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth);
    console.log(width);
    if (width < 321){
        menu.style.display = 'none';
    }
}

//Toggle the menu open and close when the btn it pressed
function openMenu() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}