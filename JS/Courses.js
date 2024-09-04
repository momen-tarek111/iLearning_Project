const categoryButtons = document.querySelectorAll('.filter-item-2');
const courseItems = document.querySelectorAll('.course-item');
const toppp=570


categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('is-checked'));
        // courseItems.forEach(item=>{
        //     item.style.display='none'
        // })
        // Add 'active' class to the clicked button
        button.classList.add('is-checked');

        // Get the selected category
        const selectedCategory = button.getAttribute('data-Categ');
        let i=0;
        let j=0;
        // courseItems.forEach(item => {

        //     item.style.display='none'
        // })
        // Filter and animate courses
        courseItems.forEach(item => {
            const itemCategory = item.getAttribute('data-Categ');
            
            if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                // item.classList.remove('animate__fadeOut');
                // item.classList.add('animate__fadeIn'); // Use any animate.css class
                
                h=toppp*j;
                item.style.top= h+'px'
                if(i%3==2){
                    j+=1
                    item.style.left='879.974px'
                }
                else if(i%3==1){
                    item.style.left='439.987px'
                }
                else{
                    item.style.left='0px'
                }
                item.style.opacity=1;
                item.style.transform = 'scale(1)';
                item.style.transitionProperty = 'opacity, transform,top,left';
                item.style.transitionDuration = '0.8s';
                item.style.transitionDelay = '0ms';
                i+=1;
                item.style.display = 'block'; // Show course
            }
             else {
                item.style.opacity=0;
                item.style.transform = 'scale(0.001)';
                item.style.transitionProperty = 'opacity, transform';
                item.style.transitionDuration = '0.8s';
                item.style.transitionDelay = '0ms';
                
                // item.classList.remove('animate__fadeIn');
                // item.classList.add('animate__fadeOut'); // Use any animate.css class
                // setTimeout(() => {
                //     item.style.display = 'none'; // Hide course after animation
                // }, 10); // Duration of fadeOut animation
            }
        });
    });
});