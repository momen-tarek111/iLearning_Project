document.addEventListener("DOMContentLoaded", function() {

    const counters = document.querySelectorAll('.counter');
    
    // console.log(headerimg.getAttribute("src"))
    // headerimg.setAttribute("src","./images/logo.svg")
    // console.log(headerimg.getAttribute("src"))
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function startCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => startCounter(counter), 10);
        } else {
            counter.innerText = target;
        }
    }

    function handleScroll() {
        counters.forEach(counter => {
            if (isElementInViewport(counter)) {
                if (counter.innerText == "0") { // Only start counting if the number is at 0
                    startCounter(counter);
                }
            } else {
                counter.innerText = "0"; // Reset the counter when out of view
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
});

const header = document.getElementById('header');
const respnone=document.querySelector(".resp-none");
console.log(header)
  // Function to add or remove the 'scrolled' class
  function changeHeaderBackground() {
    const headerimg=document.querySelector("#header-logo");
    if (window.scrollY > 150) { // Change 50 to the scroll position you want
        header.classList.add('sticky');
        respnone.classList.add("scroll-none")
        headerimg.setAttribute("src","./images/logo.svg")
    }
    else if(window.screenY==0){
        header.classList.remove("sticky")
        respnone.classList.remove("scroll-none")
        headerimg.setAttribute("src","./images/logo-dark.svg")
    } 
    else {
        headerimg.setAttribute("src","./images/logo-dark.svg")
        header.classList.remove('sticky');
        respnone.classList.remove("scroll-none")
    }
  }
  window.addEventListener('scroll', changeHeaderBackground);