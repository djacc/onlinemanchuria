
function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    var isOpen = content.style.width !== "0px"; // Check if already open by width

    // Close all content divs
    document.querySelectorAll('.content').forEach(function(div) {
        if (div !== content) {
            div.style.width = '0'; // Close other divs
            div.querySelector('ul').style.opacity = '0'; // Hide other contents
        }
    });

    if (isOpen) {
        content.style.width = '0'; // Close this div
        content.querySelector('ul').style.opacity = '0'; // Hide content
    } else {
        content.style.width = '200px'; // Open this div
        content.querySelector('ul').style.opacity = '1'; // Show content
    }
}


function playAudio(audioId) {
    // Pause any currently playing audio
    document.querySelectorAll('audio').forEach(audio => {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0; // Reset audio to start
        }
    });

    // Play the selected audio
    var audio = document.getElementById(audioId);
    if (audio) {
        audio.play();
    }
}
