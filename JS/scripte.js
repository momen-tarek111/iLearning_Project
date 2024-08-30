// window.onload = function() {
//     window.scrollTo(0, 0);
// };

// document.addEventListener("DOMContentLoaded", function() {
//     const counters = document.querySelectorAll('.counter');
//     let started = false; // Flag to ensure the animation only happens once
  
//     function isElementInViewport(el) {
//         const rect = el.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }
  
//     function startCounter() {
//         if (started) return; // Prevent the function from running multiple times
//         if (isElementInViewport(counters[0])) {
//             started = true;
//             counters.forEach(counter => {
//                 const updateCount = () => {
//                     const target = +counter.getAttribute('data-target');
//                     const count = +counter.innerText;
  
//                     const increment = target / 200;
  
//                     if (count < target) {
//                         counter.innerText = Math.ceil(count + increment);
//                         setTimeout(updateCount,15);
//                     } else {
//                         counter.innerText = target;
//                     }
//                 };
//                 updateCount();
//             });
            
//         }
//     }
  
//     // Event listeners
//     window.addEventListener('scroll', startCounter);
//   });

document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counter');

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
  // Function to add or remove the 'scrolled' class
  function changeHeaderBackground() {
    if (window.scrollY > 200) { // Change 50 to the scroll position you want
        header.classList.add('sticky');
        respnone.classList.add("scroll-none")
    }
    else if(window.screenY==0){
        header.classList.remove("sticky")
        respnone.classList.remove("scroll-none")
    } 
    else {
        header.classList.remove('sticky');
        respnone.classList.remove("scroll-none")
    }
  }

  // Listen to the scroll event
  window.addEventListener('scroll', changeHeaderBackground);






//   document.addEventListener("DOMContentLoaded", function() {
//     inst=document.querySelectorAll(".single-expert").length;
//     dots=document.querySelectorAll(".dot");
    
//     // console.log(dots)
//     var i =inst-4;
//     // console.log(dots)
//     var j=0;
//     dots.forEach(m=>{
//         if(j>i&&j<inst){
//             m.remove();
//             // console.log(m)
//         }
//         j=j+1;
//     })
// })
// document.addEventListener("DOMContentLoaded", function() {
// ifd=document.querySelectorAll(".single-expert").length;
// ifd=ifd-3;
// inst=document.querySelectorAll(".single-testimonial").length;
// dots=document.querySelectorAll(".dot");
// var i=inst-3;
// var j=0;
// dots.forEach(m=>{
//     if(ifd<=0){
//         if(j>i){
//             m.remove();
//             // console.log(m)
//         }
//         j=j+1;
//     }
//     else{
//         ifd=ifd-1
//     }
//     // console.log(ifd+" "+j)
// })
// })
