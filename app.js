const toogle = document.querySelector('.toogle');
const navList = document.querySelectorAll('.navlist li');
const navli = document.querySelector('.navlist');
const exit = document.querySelector('.backend');
const mediaQuery = window.matchMedia('(max-width: 676px)');


function touch() {
    toogle.addEventListener('click', (e) => {
        if (mediaQuery.matches) {
            for (var i = 0; i < navList.length; i += 1) {
                navList[i].style.display = 'block';
                navList[i].style.textAlign = 'center';
                navList[i].style.paddingTop = '15px';
            } navli.classList.add('active');
            toogle.style.visibility = 'hidden';
            exit.style.background = "url(images/icon-close.svg)";
            exit.style.backgroundRepeat = 'no-repeat';
            exit.style.backgroundSize = '25px';
            e.stopPropagation();
        }

    })
}
touch();

function close() {
    exit.addEventListener('click', () => {
        navli.classList.remove('active');
        for (var i = 0; i < navList.length; i += 1) {
            navList[i].style.display = 'none';
        } toogle.style.visibility = 'visible';
        exit.style.background = 'none';

    })
}

close();
