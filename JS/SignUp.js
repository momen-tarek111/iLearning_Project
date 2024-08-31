window.onscroll = function() {
    var scrollToTopBtn = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Optional: smooth scrolling
    });
}