// Preload all audio files into AudioBuffers using Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioMap = {};
const notes = [
    "C", "C_s", "D", "D_s", "E", "F", "F_s",
    "G", "G_s", "A", "Bb", "B", "C1", "C_s1",
    "D1", "D_s1", "E1", "F1"
];

// Load and decode all audio files
notes.forEach(note => {
    fetch(`/static/sounds/${note}.wav`)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(decodedData => {
            audioMap[note] = decodedData;
        })
        .catch(err => console.error(`Error loading ${note}:`, err));
});

// Play note from buffer instantly
function playNote(note, keyDiv) {
    const buffer = audioMap[note];
    if (!buffer) {
        console.error(`Buffer for note "${note}" not loaded.`);
        return;
    }

    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0); // Play immediately

    // Visual feedback
    if (keyDiv) {
        keyDiv.classList.add('active');
        setTimeout(() => keyDiv.classList.remove('active'), 150);
    }
}

// Mouse support
document.querySelectorAll('.white-key, .black-key').forEach(key => {
    key.addEventListener('click', () => {
        playNote(key.dataset.note, key);
    });
});

// Keyboard support
document.addEventListener('keydown', e => {
    const pressedKey = e.key.toUpperCase();
    const keyDiv = document.querySelector(`[data-key="${pressedKey}"]`);
    if (keyDiv) {
        playNote(keyDiv.dataset.note, keyDiv);
    }
});
