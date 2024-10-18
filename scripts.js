document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript to toggle additional information when button is clicked
document.getElementById('learn-more-btn').addEventListener('click', function() {
    const additionalInfo = document.getElementById('additional-info');
    
    if (additionalInfo.style.display === "none") {
        additionalInfo.style.display = "block";
    } else {
        additionalInfo.style.display = "none";
    }
});

// Placeholder for any JavaScript functionality 
console.log("Project 1 page loaded.");

