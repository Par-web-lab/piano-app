// Preload all audio files and store in a dictionary
const audioMap = {};
const notes = [
    "C", "C_s", "D", "D_s", "E", "F", "F_s",
    "G", "G_s", "A", "Bb", "B", "C1", "C_s1",
    "D1", "D_s1", "E1", "F1"
];

notes.forEach(note => {
    const audio = new Audio(`/static/sounds/${note}.wav`);
    audio.load();  // Preload
    audioMap[note] = audio;
});

// Function to play the note with visual feedback
function playNote(note, keyDiv) {
    const originalAudio = audioMap[note];

    if (!originalAudio) {
        console.error(`Audio for note "${note}" not preloaded.`);
        return;
    }

    const clone = originalAudio.cloneNode(); // Allow overlapping sounds
    clone.play().catch(err => console.error("Playback failed:", err));

    // Visual key press
    if (keyDiv) {
        keyDiv.classList.add('active');
        setTimeout(() => keyDiv.classList.remove('active'), 150);
    }
}

// Mouse click support
document.querySelectorAll('.white-key, .black-key').forEach(key => {
    key.addEventListener('click', () => {
        playNote(key.dataset.note, key);
    });
});

// Keyboard input support
document.addEventListener('keydown', e => {
    const pressedKey = e.key.toUpperCase();
    const keyDiv = document.querySelector(`[data-key="${pressedKey}"]`);
    if (keyDiv) {
        playNote(keyDiv.dataset.note, keyDiv);
    }
});
