"use strict";

// Function to handle form submission and confirmation message display
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const confirmationBox = document.getElementById('confirmationBox');

    if (contactForm && confirmationBox) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send this data to a server (e.g., using fetch)
            // For now, we simulate a successful submission.

            // 1. Basic Validation Check (Input 'required' handles most of this, but good practice)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                console.error("Please fill in all fields.");
                // In a real app, show an inline error message here instead of just logging.
                return;
            }

            // 2. Clear the form and hide it
            contactForm.reset();
            contactForm.classList.add('hidden');
            
            // 3. Show the confirmation message
            confirmationBox.classList.remove('hidden');

            // Log the "submitted" data to the console for demonstration
            console.log("Contact form submitted (Simulated):", { name, email, message });
        });
    }
});

// Function to hide the confirmation box and show the form again
// This function needs to be globally accessible because it is called directly from the HTML's onclick attribute.
function hideConfirmation() {
    const confirmationBox = document.getElementById('confirmationBox');
    const contactForm = document.getElementById('contactForm');
    
    if (confirmationBox && contactForm) {
        confirmationBox.classList.add('hidden');
        contactForm.classList.remove('hidden');
    }
}



//Animation controls for the branding case study video
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Elements
    const video = document.getElementById('boldAnimation');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');

    if (!video || !playPauseBtn || !muteBtn) {
        return; 
    }

    const playPauseIcon = playPauseBtn.querySelector('i');
    const muteIcon = muteBtn.querySelector('i');

    // Initial Setup: Set video to first frame and paused
    video.currentTime = 0;
    video.pause();
    
    // Set initial icons to 'play' and 'mute'
    playPauseIcon.classList.remove('fa-pause');
    playPauseIcon.classList.add('fa-play');
    muteIcon.classList.remove('fa-volume-up');
    muteIcon.classList.add('fa-volume-mute');

    // 2. Play/Pause Functionality
    playPauseBtn.addEventListener('click', () => {
        if (video.paused || video.ended) {
            video.play().then(() => {
                playPauseIcon.classList.remove('fa-play');
                playPauseIcon.classList.add('fa-pause');
            }).catch(error => {
                console.error("Playback failed:", error);
            });
        } else {
            video.pause();
            playPauseIcon.classList.remove('fa-pause');
            playPauseIcon.classList.add('fa-play');
        }
    });

    // 3. Mute/Unmute Functionality
    muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;

        if (video.muted) {
            muteIcon.classList.remove('fa-volume-up');
            muteIcon.classList.add('fa-volume-mute');
        } else {
            muteIcon.classList.remove('fa-volume-mute');
            muteIcon.classList.add('fa-volume-up');
        }
    });
});