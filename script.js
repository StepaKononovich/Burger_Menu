var burger = document.querySelector('.burger');
var num = 1;
var menu = document.querySelector('.list a:nth-child('+ num +')');
var chek = true;
console.log(menu);

function time_menu() {
    setTimeout(() => {
        menu = document.querySelector('.list a:nth-child('+ num +')');
        menu.classList.toggle('menu_activ');
        if (chek) {num = num + 1};
        if (!chek){num = num - 1};
        if(num == 6){num = num - 1; return chek = false;};
        if(num == 0){num = num + 1 ; return chek = true};
        time_menu();
        console.log(num);
    }, 100);
}

burger.addEventListener('click', function() {
    burger.classList.toggle('burger_menu_acriv');
    menu = document.querySelector('.list a:nth-child('+ num +')');
    menu.classList.toggle('menu_activ');
    console.log(num);
    if (chek) {num = num + 1};
    if (!chek){num = num - 1};
    time_menu();
});

// let animationDelay = 0;
// const aciveClass = 'menu_activ';

// let startAnimation = () => {
//     let indexItem = 0;

//     return () => {
//         const listMenuItem = document.querySelectorAll('.link');
   
//         const idInterval = setInterval(() => {
//             const item = listMenuItem[indexItem];
//             const vector = item.classList.contains(aciveClass) ? -1 : 1;
    
//             item.classList.toggle(aciveClass);
    
//             if ((indexItem + vector) >= 0 
//             && (indexItem + vector < listMenuItem.length - 1)) {
//                 indexItem += vector;
//             } else {
//                 clearInterval(idInterval);
//             }
//         }, animationDelay);
//     }
// }

// startAnimation = startAnimation();

// burger.addEventListener('click', startAnimation);
// burger.addEventListener('touch', startAnimation);


