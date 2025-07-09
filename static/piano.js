function playNote(note, keyDiv) {
    const audio = new Audio(`/static/sounds/${note}.wav`);
    
    // Handle missing audio files
    audio.onerror = () => {
        console.error(`Audio file for note "${note}" not found.`);
    };

    audio.play().catch(err => console.error("Playback failed:", err));

    // Add active class for visual feedback
    if (keyDiv) {
        keyDiv.classList.add('active');
        setTimeout(() => keyDiv.classList.remove('active'), 150);
    }
}

// Handle mouse clicks
document.querySelectorAll('.white-key, .black-key').forEach(key => {
    key.addEventListener('click', () => {
        playNote(key.dataset.note, key);
    });
});

// Handle keyboard input
document.addEventListener('keydown', e => {
    const pressedKey = e.key.toUpperCase();
    const keyDiv = document.querySelector(`[data-key="${pressedKey}"]`);
    if (keyDiv) {
        playNote(keyDiv.dataset.note, keyDiv);
    }
});
