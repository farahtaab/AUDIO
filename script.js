const audio = document.getElementById('audio');
const playStopButton = document.getElementById('play-stop-button');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const volumeSlider = document.getElementById('volume-slider');
const musicNotesContainer = document.getElementById('music-notes-container');

let isPlaying = false;

// SVG Nota Musical
const noteSVG = `
    <?xml version="1.0" encoding="utf-8"?>
<svg viewBox="13 -4 461 455" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://www.boxy-svg.com/bx">
  <g>
    <g transform="matrix(1.013029, -2.172449, 0.805123, 0.375435, -239.771591, 474.13916)">
      <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgba(222, 45, 94, 0.74902);" bx:origin="0.265 0.5"/>
      <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgba(222, 45, 94, 0.74902);" bx:origin="0.729 0.5"/>
    </g>
    <g transform="matrix(-1.013029, 2.172449, -0.805123, -0.375435, 723.009949, -31.281298)">
      <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgba(222, 44, 94, 0.74902);" bx:origin="0.265 0.5"/>
      <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgba(222, 44, 94, 0.74902);" bx:origin="0.729 0.5"/>
    </g>
    <g transform="matrix(-2.172449, 1.01303, -0.375434, -0.805124, 764.117188, 339.656342)">
      <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgba(105, 191, 237, 0.74902);" bx:origin="0.265 0.5"/>
      <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgba(105, 191, 237, 0.74902);" bx:origin="0.729 0.5"/>
    </g>
    <g transform="matrix(2.252473, -0.819834, 0.303835, 0.834781, -276.796417, 66.121117)">
      <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgba(105, 191, 237, 0.74902);" bx:origin="0.265 0.5"/>
      <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgba(105, 191, 237, 0.74902);" bx:origin="0.729 0.5"/>
    </g>
    <g transform="matrix(-0.819834, -2.252474, 0.834782, -0.303835, 84.025528, 743.653931)">
      <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgba(105, 191, 237, 0.74902);" bx:origin="0.265 0.5"/>
      <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgba(105, 191, 237, 0.74902);" bx:origin="0.729 0.5"/>
    </g>
    <g transform="matrix(0.819834, 2.252473, -0.834781, 0.303835, 405.30777, -296.224701)">
      <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgba(105, 191, 237, 0.74902);" bx:origin="0.265 0.5"/>
      <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgba(105, 191, 237, 0.74902);" bx:origin="0.729 0.5"/>
    </g>
    <g transform="matrix(-2.172449, -1.013029, 0.375435, -0.805123, 494.329376, 705.10553)">
      <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgba(168, 66, 171, 0.74902);" bx:origin="0.265 0.5"/>
      <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgba(168, 66, 171, 0.74902);" bx:origin="0.729 0.5"/>
    </g>
    <g transform="matrix(2.172449, 1.013029, -0.375435, 0.805123, -10.540039, -257.099365)">
      <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgba(168, 66, 171, 0.74902);" bx:origin="0.265 0.5"/>
      <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgba(168, 66, 171, 0.74902);" bx:origin="0.729 0.5"/>
    </g>
    <g>
      <g transform="matrix(0.678571, 0, 0, 0.717326, 121.009552, -24.106068)">
        <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.265 0.5"/>
        <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.729 0.5"/>
      </g>
      <g transform="matrix(0, 0.678571, -0.717326, 0, 492.233185, 101.835365)">
        <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.265 0.5"/>
        <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.729 0.5"/>
      </g>
      <g transform="matrix(0, 0.678571, -0.717326, 0, 314.712097, 103.359146)">
        <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.265 0.5"/>
        <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.729 0.5"/>
      </g>
      <g transform="matrix(0.678571, 0, 0, 0.717326, 122.53334, 153.415024)">
        <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.265 0.5"/>
        <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.729 0.5"/>
      </g>
      <g transform="matrix(0.479822, 0.479822, -0.507226, 0.507226, 338.366028, -43.240444)">
        <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.265 0.5"/>
        <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.729 0.5"/>
      </g>
      <g transform="matrix(-0.479822, -0.479822, 0.507226, -0.507226, 148.681854, 489.907806)">
        <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.265 0.5"/>
        <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.729 0.5"/>
      </g>
      <g transform="matrix(0.479822, -0.479822, 0.507226, 0.507226, -23.812111, 129.253433)">
        <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.265 0.5"/>
        <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.729 0.5"/>
      </g>
      <g transform="matrix(-0.479822, 0.479822, -0.507226, -0.507226, 509.336121, 317.41394)">
        <path d="M 177.62 98.002 C 141.811 170.89 142.573 254.444 179.906 348.665" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.265 0.5"/>
        <path d="M 176.858 98.002 C 211.905 173.175 212.921 256.476 179.906 347.903" style="stroke: none; fill: rgb(229, 241, 50);" bx:origin="0.729 0.5"/>
      </g>
      <ellipse style="fill: rgb(222, 141, 20);" cx="242.767" cy="223.713" rx="26.285" ry="25.904"/>
    </g>
  </g>
</svg>`;

// Generar notas musicales SVG dinámicamente
function generateNotes() {
    musicNotesContainer.innerHTML = ''; // Limpia las notas previas
    for (let i = 0; i < 40; i++) {
        const noteWrapper = document.createElement('div');
        noteWrapper.classList.add('music-note');
        noteWrapper.innerHTML = noteSVG;
        noteWrapper.style.left = `${Math.random() * 100}%`;
        noteWrapper.style.top = `${Math.random() * 100}%`;
        noteWrapper.style.animationDelay = `${Math.random() * 2}s`;
        musicNotesContainer.appendChild(noteWrapper);
    }
}

// Control de Play/Stop
playStopButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        musicNotesContainer.style.display = 'none';
    } else {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        musicNotesContainer.style.display = 'block';
        generateNotes();
    }
    isPlaying = !isPlaying;
});

// Control de volumen
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});
