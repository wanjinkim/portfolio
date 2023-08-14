/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 



window.addEventListener('DOMContentLoaded', event => {

    //스크롤이 맨 위에 위치할 때는 일반적인 네비게이션 바 스타일을 유지하고, 스크롤이 내려갈 때는 축소된 스타일로 변경하는 기능
    const navbarStyle = function () {
        const mainNav = document.body.querySelector('#mainNav');
        if (window.scrollY === 0) {
            mainNav.classList.remove('showNav')
        } else {
            //사용자의 입장에서 페이지의 최상단에 위치해있을때 오리지널 메뉴 보여주기
            mainNav.classList.add('showNav')
        }

    };

    // Shrink the navbar 
    navbarStyle();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarStyle);

    //  Activate Bootstrap scrollspy on the main nav element
    // 스크롤 했을시 각 메뉴에 진입하면 상단의 텍스트색 주황색으로 바뀐다.
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const fixedButton = document.getElementById("topbutton");
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 480) {
        fixedButton.style.display = "block";
    } else {
        fixedButton.style.display = "none";
    }
});
