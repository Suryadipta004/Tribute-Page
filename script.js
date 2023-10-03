const events = document.querySelectorAll('.event');

gsap.to(events, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.5,
    ease: 'power2.out',
});

// You can add more animations or interactions as needed.
var div = document.getElementById("myDiv");

// Define the URL you want to navigate to
var externalLink = "https://en.wikipedia.org/wiki/Albert_Einstein";

// Add a click event listener to the div
div.addEventListener("click", function() {
    // Navigate to the external link
    window.location.href = externalLink;
});