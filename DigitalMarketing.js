document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const sidebarImages = document.querySelector('.sidebar-images');
    const totalImages = document.querySelectorAll('.sidebar-images img').length;
    const imageWidth = document.querySelector('.sidebar-images img').offsetWidth;

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const translateValue = -index * imageWidth;

            sidebarImages.style.transform = `translateX(${translateValue}px)`;
        });
    });
});
const imageContainers = document.querySelectorAll('.hover-img-wrapper');

// Get all the dots
const dots = document.querySelectorAll('.dot');

// Iterate over each image container
imageContainers.forEach((container, index) => {
    // Add click event listener to each image container
    container.addEventListener('click', () => {
        // Remove active class from all dots
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to the corresponding dot
        dots[index].classList.add('active');
    });
});
 // Form submission handling
 document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(this);

        fetch(this.action, {
            method: this.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Form submitted successfully!");
                // Optionally, you can reset the form here
                // this.reset();
            } else {
                throw new Error("Form submission failed!");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Form submission failed!");
        });
    });
});