/**
 * KARAOKE EXPERIMENTAL LOGIC
 */

const lyricsData = {
    'me-da-igual': [
        { time: 0, text: "Vivimos corriendo detrás de la meta," },
        { time: 3.5, text: "siempre a contrarreloj." },
        { time: 7, text: "Huyendo del tiempo bajo una careta," },
        { time: 10.5, text: "perdiéndonos lo mejor." },
        { time: 14, text: "Sintiendo un miedo brutal" },
        { time: 16.5, text: "a no conseguir llegar." },
        { time: 19, text: "Y me da igual lo que nos digan," },
        { time: 22.5, text: "me da igual." },
        { time: 26, text: "Seguimos buscando la vida perfecta," },
        { time: 29.5, text: "siempre a contrarreloj." },
        { time: 33, text: "Viendo el futuro al final de la recta," },
        { time: 36.5, text: "perdiéndonos lo mejor." },
        { time: 40, text: "Sintiendo un miedo brutal" },
        { time: 42.5, text: "a no conseguir llegar." },
        { time: 45, text: "Y me da igual lo que nos digan," },
        { time: 48, text: "me da igual." },
        { time: 51, text: "Me da igual si voy o vuelvo," },
        { time: 54, text: "me da igual si me entretengo." },
        { time: 58, text: "Me da igual si llego tarde," },
        { time: 61, text: "me da igual si llego a tiempo." },
        { time: 65, text: "Me da igual si a ti no te da igual," },
        { time: 68, text: "me da igual si estás de acuerdo." },
        { time: 71, text: "Me da igual." },
        { time: 73, text: "Me da igual." },
        { time: 84, text: "Pasamos la vida soñando que un día" },
        { time: 87.5, text: "tendremos tranquilidad." },
        { time: 91, text: "Ese día será al que" },
        { time: 94, text: "todos llamamos día final." },
        { time: 97, text: "Mejor si frenamos aquí" },
        { time: 100, text: "y gritamos una vez más." },
        { time: 103, text: "Me da igual lo que nos digan," },
        { time: 106, text: "me da igual." },
        { time: 109, text: "Me da igual si voy o vuelvo," },
        { time: 112, text: "me da igual si me entretengo." },
        { time: 116, text: "Me da igual si llego tarde," },
        { time: 119, text: "me da igual si llego a tiempo." },
        { time: 122, text: "Me da igual si a ti no te da igual," },
        { time: 125.5, text: "me da igual si estás de acuerdo." },
        { time: 129, text: "Me da igual." },
        { time: 131, text: "Me da igual." },
        { time: 135, text: "Me da igual si en unos años" },
        { time: 138, text: "una piedra del espacio nos quisiera..." },
        { time: 141, text: "...poner punto final." },
        { time: 144, text: "Si nos sigue haciendo ritmo" },
        { time: 146, text: "encima de algún escenario..." },
        { time: 148, text: "...y gritando que nos da igual." },
        { time: 151, text: "Me da igual si se me olvida la letra." }
    ],
    'que-suba-el-hielo': [
        { time: 21, text: "Dani, ¿qué pasa?" },
        { time: 43, text: "No sé cómo acabé metido en tremenda tormenta," },
        { time: 47, text: "el miedo se me fue comiendo por los pies." },
        { time: 52, text: "No sé si fuiste tú o me vi un poco más de la cuenta" },
        { time: 56, text: "de aquella preciosa botella que" },
        { time: 58, text: "me suplicó que acabara con ella." },
        { time: 61, text: "Glu, glu, mombasa, club, chin, chin," },
        { time: 64, text: "me perdí entre tus piernas." },
        { time: 66, text: "Glu, glu, mombasa, club, toc, toc," },
        { time: 68, text: "no abrí la puerta a la razón." },
        { time: 70, text: "Glu, glu, mombasa, club, tic, tac," },
        { time: 73, text: "hora de otra ginebra." },
        { time: 75, text: "Glu, glu, mombasa, club, boom, boom," },
        { time: 78, text: "volvió a latir mi corazón." },
        { time: 89, text: "Por culpa de esa copa no recuerdo nada más." },
        { time: 91, text: "Ni el cielo de tu boca, ni el infierno en tu sofá." },
        { time: 93, text: "Ni el frío de tus manos, ni el calor de tus abrazos." },
        { time: 96, text: "No recuerdo ni tu culo, ¿pero qué más da?" },
        { time: 98, text: "Buscamos una solución a los problemas." },
        { time: 103, text: "La vida pasa en un plis plas," },
        { time: 105, text: "por eso solo quiero" },
        { time: 107, text: "flotar desnudo en tu ginebra y que suba el hielo." },
        { time: 116, text: "Glu, glu, mombasa, club, chin, chin," },
        { time: 119, text: "me perdí entre tus piernas." },
        { time: 121, text: "Glu, glu, mombasa, club, toc, toc," },
        { time: 124, text: "no abrí la puerta a la razón." },
        { time: 125, text: "Glu, glu, mombasa, club, tic, tac," },
        { time: 128, text: "hora de otra ginebra." },
        { time: 130, text: "Glu, glu, mombasa, club, boom, boom," },
        { time: 133, text: "volvió a latir mi corazón." },
        { time: 135, text: "Dame un sorbito de esa copa y que suba el hielo." },
        { time: 137, text: "No me hace falta nada más, ya es todo lo que quiero." },
        { time: 139, text: "De pronto empieza a flotar, lo malo empieza a pasar," },
        { time: 141, text: "lo bueno viene." },
        { time: 142, text: "Mira que contento el nene y todos se preguntan," },
        { time: 145, text: "¿Dani, qué pasa?" },
        { time: 146, text: "Y yo mientras cantando la de mombasa." },
        { time: 148, text: "Que suba, que suba, que suba el hielo" },
        { time: 151, text: "hasta tocar el cielo." },
        { time: 153, text: "Glu, glu, mombasa, club, chin, chin," },
        { time: 155, text: "me perdí entre tus piernas." },
        { time: 157, text: "Glu, glu, mombasa, club, toc, toc," },
        { time: 160, text: "no abrí la puerta a la razón." },
        { time: 162, text: "Glu, glu, mombasa, club, tic, tac," },
        { time: 165, text: "hora de otra ginebra." },
        { time: 167, text: "Glu, glu, mombasa, club, boom, boom," },
        { time: 170, text: "volvió a latir mi corazón." },
        { time: 182, text: "Glu, glu, mombasa, club, chin, chin," },
        { time: 185, text: "me perdí entre tus piernas." },
        { time: 188, text: "Glu, glu, mombasa, club, tic, tac," },
        { time: 191, text: "hora de otra ginebra." }
    ],
    'se-prometieron-el-mar': [
        { time: 0, text: "Se prometieron el mar" },
        { time: 8, text: "En una tarde de invierno" },
        { time: 16, text: "Juraron no olvidar" },
        { time: 24, text: "Este amor que es eterno" },
        { time: 32, text: "Olas que vienen y van" }
    ],
    'ovejas-negras': [
        { time: 8, text: "Cómo olvidar aquella noche de febrero" },
        { time: 13, text: "Tú de esmeralda y Cádiz tan de carnaval" },
        { time: 18, text: "Quise probar a volar a ras del suelo" },
        { time: 21, text: "Cuando tu luz me cegó al pasar" },
        { time: 26, text: "Como dos gorriones por la carretera" },
        { time: 30, text: "Jugando con el viento hacia el mismo lugar" },
        { time: 35, text: "Yo te dije guapa pa que me siguieras" },
        { time: 38, text: "Y tu me disparaste sin piedad" },
        { time: 43, text: "Bebí alguna de más contando ovejas negras" },
        { time: 46, text: "Me perdí buscando una señal de stop entre tus piernas" },
        { time: 51, text: "Salté desnudo en mar la sal volvió a curar mi cicatriz" },
        { time: 56, text: "Y me ahogué un trago de ginebra" },
        { time: 100, text: "No me puedo acordar de ti, no me puedo acordar de ti" },
        { time: 105, text: "No me puedo acordar de ti, vuelve a mi cabeza" },
        { time: 108, text: "No me puedo acordar de ti, no me puedo acordar de ti" },
        { time: 113, text: "No me puedo acordar de ti, vuelve a mi cabeza" },
        { time: 119, text: "Cuando te vi bajar del coche pude oír" },
        { time: 124, text: "Dentro de mí latir con fuerza el corazón" },
        { time: 128, text: "Y me atreví a decirte que me puso a mil" },
        { time: 133, text: "Tu traje verde como Izal en su canción" },
        { time: 137, text: "Mientras me esposabas yo te dije nena" },
        { time: 141, text: "¿Por qué tanta prisa vamos a jugar?" },
        { time: 146, text: "Yo salí corriendo pa' que me siguieras" },
        { time: 149, text: "Y tu me disparaste sin piedad" },
        { time: 154, text: "Bebí alguna de más contando ovejas negras" },
        { time: 157, text: "Me perdí buscando una señal de stop entre tus piernas" },
        { time: 162, text: "Salté desnuda en mar la sal volvió a curar mi cicatriz" },
        { time: 167, text: "Y me ahogué un trago de ginebra" },
        { time: 211, text: "Quizás hiciste bien en dispararme" },
        { time: 218, text: "Aún guardo aquella bala en el desván" },
        { time: 227, text: "Ahora sé que no vas a olvidarme" },
        { time: 236, text: "Y yo ya no te puedo recordar" },
        { time: 246, text: "No me puedo acordar de ti" },
        { time: 253, text: "Bebí alguna de más contando ovejas negras" },
        { time: 258, text: "Me perdí buscando una señal de stop entre tus piernas" },
        { time: 303, text: "Salté desnuda en mar la sal volvió a curar mi cicatriz" },
        { time: 308, text: "Y me ahogué un trago de ginebra" },
        { time: 312, text: "No me puedo acordar de ti" },
        { time: 319, text: "Vuelve a mi cabeza" },
        { time: 321, text: "No me puedo acordar de ti" },
    ]
};

const audioSources = {
    'me-da-igual': 'assets/estrenos/audio/me-da-igual.mp3', // Note: User needs to upload these
    'que-suba-el-hielo': 'assets/estrenos/audio/que-suba-el-hielo.mp3',
    'se-prometieron-el-mar': 'assets/estrenos/audio/se-prometieron-el-mar.mp3',
    'ovejas-negras': 'assets/estrenos/audio/ovejas-negras.mp3'
};

const songCovers = {
    'me-da-igual': 'images/portadas/medaigual.jpg',
    'que-suba-el-hielo': 'images/portadas/quesubaelhielo.jpg',
    'se-prometieron-el-mar': 'assets/estrenos/logo color portada.png',
    'ovejas-negras': 'images/portadas/ovejasnegras.jpg'
};

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('karaoke-audio');
    const vinyl = document.getElementById('vinyl-record');
    const playIndicator = document.querySelector('.play-indicator i');
    const progressBar = document.getElementById('progress-bar');
    const lyricsContainer = document.getElementById('lyrics-container');
    const songItems = document.querySelectorAll('.song-item');
    const songCover = document.getElementById('song-cover');
    const displayTitle = document.getElementById('display-song-title');
    const volumeSlider = document.getElementById('volume-slider');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    let currentSong = 'me-da-igual';
    let currentLyrics = lyricsData[currentSong];

    function loadSong(songId) {
        currentSong = songId;

        // Check for locked/scheduled songs
        if (songId === 'se-prometieron-el-mar') {
            displayTitle.innerText = "SE_PROMETIERON_EL_MAR";
            displayTitle.dataset.text = displayTitle.innerText;
            lyricsContainer.innerHTML = `
                <div class="release-notice">
                    <i class="fas fa-lock"></i>
                    <p>DISPONIBLE EL DÍA</p>
                    <h2 class="glitch" data-text="13/03 - 19:00H">13/03 - 19:00H</h2>
                    <p>¡Prepárate para el estreno!</p>
                </div>
            `;
            if (songCover) songCover.src = songCovers[songId];
            resetPlayback();
            return;
        }

        currentLyrics = lyricsData[songId];
        audio.src = audioSources[songId];
        audio.load(); // Force load on src change for mobile reliability

        // Sync Cover
        if (songCover) {
            songCover.src = songCovers[songId] || 'images/miniatura2.jpg';
        }

        // Update UI
        lyricsContainer.innerHTML = '';
        displayTitle.innerText = songId.replace(/-/g, '_').toUpperCase();
        displayTitle.dataset.text = displayTitle.innerText;

        currentLyrics.forEach((line, index) => {
            const p = document.createElement('p');
            p.className = 'lyric-line';
            p.innerText = line.text;
            p.dataset.time = line.time;
            lyricsContainer.appendChild(p);
        });

        resetPlayback();
    }

    function resetPlayback() {
        audio.pause();
        audio.currentTime = 0;
        if (playIndicator) playIndicator.className = 'fas fa-play';
        vinyl.classList.remove('playing');
        progressBar.value = 0;
        updateLyrics(0);
    }

    vinyl.addEventListener('click', () => {
        if (audio.paused) {
            // Wait for play promise to update UI
            audio.play()
                .then(() => {
                    if (playIndicator) playIndicator.className = 'fas fa-pause';
                    vinyl.classList.add('playing');
                })
                .catch(e => {
                    // Ignore AbortError (often caused by navigation or rapid clicking)
                    if (e.name === 'AbortError') return;

                    console.error("Playback failed:", e);
                    alert("Error al cargar música. ID: " + currentSong +
                        "\nArchivo esperado: " + audio.src +
                        "\n\nError: " + e.message);
                });
        } else {
            audio.pause();
            if (playIndicator) playIndicator.className = 'fas fa-play';
            vinyl.classList.remove('playing');
        }
    });

    audio.addEventListener('timeupdate', () => {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.value = percent || 0;
        document.getElementById('current-time').innerText = formatTime(audio.currentTime);
        document.getElementById('duration').innerText = formatTime(audio.duration || 0);

        updateLyrics(audio.currentTime);
    });

    function updateLyrics(time) {
        const lines = document.querySelectorAll('.lyric-line');
        let activeIndex = -1;

        lines.forEach((line, index) => {
            const lineTime = parseFloat(line.dataset.time);
            line.classList.remove('active', 'passed');

            if (time >= lineTime) {
                activeIndex = index;
            }
        });

        if (activeIndex !== -1) {
            lines[activeIndex].classList.add('active');
            for (let i = 0; i < activeIndex; i++) lines[i].classList.add('passed');

            // Scroll to center
            const containerHeight = document.querySelector('.lyrics-view').offsetHeight;
            const activeTop = lines[activeIndex].offsetTop;
            const scrollOffset = activeTop - (containerHeight / 2);
            lyricsContainer.style.transform = `translateY(-${scrollOffset}px)`;
        } else {
            lyricsContainer.style.transform = `translateY(0)`;
        }
    }

    progressBar.addEventListener('input', () => {
        const time = (progressBar.value / 100) * audio.duration;
        audio.currentTime = time;
    });

    songItems.forEach(item => {
        item.addEventListener('click', () => {
            songItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            loadSong(item.dataset.song);
        });
    });

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Volume Control
    if (volumeSlider) {
        audio.volume = volumeSlider.value;
        volumeSlider.addEventListener('input', () => {
            audio.volume = volumeSlider.value;
        });
    }

    // Mobile Nav Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') ?
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // Initial load
    loadSong('me-da-igual');

    // Ambient Effects: Rain
    (function () {
        const canvas = document.getElementById('rain-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let W = 0, H = 0, dpr = Math.max(1, window.devicePixelRatio || 1);
        const raindrops = [];
        let lastTime = performance.now();

        function resize() {
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = Math.floor(W * dpr);
            canvas.height = Math.floor(H * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function makeRaindrop() {
            return {
                x: Math.random() * W,
                y: Math.random() * -H,
                vy: Math.random() * 100 + 100, // Faster for "cañero" feel
                size: Math.random() * 1 + 0.5,
                alpha: Math.random() * 0.3 + 0.1
            };
        }

        for (let i = 0; i < 150; i++) raindrops.push(makeRaindrop());

        function loop(now) {
            const dt = Math.min(50, now - lastTime) / 1000;
            lastTime = now;
            ctx.clearRect(0, 0, W, H);

            ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
            for (let r of raindrops) {
                r.y += r.vy * dt;
                if (r.y > H) r.y = -10;
                ctx.fillRect(r.x, r.y, r.size, r.size * 5); // Rectangular drops for speed look
            }
            requestAnimationFrame(loop);
        }

        resize();
        window.addEventListener('resize', resize);
        requestAnimationFrame(loop);
    })();

    // Parallax Lights
    document.addEventListener('mousemove', (e) => {
        const lights = document.querySelectorAll('.ambient-light');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        lights.forEach((light, index) => {
            const speed = (index + 1) * 20;
            light.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
});
