document.addEventListener("DOMContentLoaded", () => {
    
    fetch('config.json')
        .then(response => response.json())
        .then(data => {
            iniciarSite(data);
        })
        .catch(error => console.error('Erro ao carregar dados:', error));

    function iniciarSite(config) {
        
        const titlePageElement = document.getElementById("title-page");
        titlePageElement.textContent = config.titlePage;

        const titleElement = document.querySelector("title");
        titleElement.textContent = config.title;

        const destinyElement = document.getElementById("destiny");
        destinyElement.textContent = config.destinatario;
        
        const cartaTextoElement = document.getElementById("carta-texto");
        cartaTextoElement.innerHTML = config.cartaTexto;

        const signatureElement = document.getElementById("signature");
        signatureElement.textContent = config.assinatura;

        const audio = document.getElementById("bg-music");
        const audioSource = document.getElementById("audio-source");
        audioSource.src = config.audioSrc;
        audioSource.type = config.musicType;
        audio.load(); 
        audio.volume = config.initialVolume;

        const imageStrip = document.getElementById("images-fheart");
        imageStrip.innerHTML = ''; 
        config.imagens.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            imageStrip.appendChild(img);
        });

        const imagespotify = document.getElementById("spotify-image");
        imagespotify.src = config.spotifyImage;

        const dataInicio = new Date(config.dataInicio);
        const tempoInicial = config.tempoInicial;
        const imgWidth = config.imgWidth;
        const particleCount = config.particleCount;
        const motivos = config.motivos;
        const tituloTexto = config.tituloTexto;

        if (history.scrollRestoration) {
            history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);

        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".heart-wrapper", {
            duration: 1.5,
            scale: 0,
            opacity: 0,
            ease: "elastic.out(1, 0.5)"
        });

        const scrollConfig = {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "power3.out"
        };

        gsap.to(".timer-container", {
            ...scrollConfig,
            scrollTrigger: {
                trigger: ".timer-container",
                start: "top 100%",
            }
        });

        gsap.to(".music-section", {
            ...scrollConfig,
            scrollTrigger: {
                trigger: ".music-section",
                start: "top 85%",
            }
        });

        gsap.to(".content", {
            ...scrollConfig,
            scrollTrigger: {
                trigger: ".content",
                start: "top 80%",
            },
            onStart: () => typeWriter(tituloTexto, "typing-title")
        });

        const originalImages = document.querySelectorAll('.image-strip img');
        
        setTimeout(() => {
             const strip = document.querySelector('.image-strip');
             strip.innerHTML += strip.innerHTML;
             
             const totalWidth = config.imagens.length * imgWidth;
            
             gsap.to(".image-strip", {
                x: -totalWidth,
                duration: config.imagens.length * 3,
                ease: "none",
                repeat: -1
            });
        }, 100);

        gsap.to(".heart-window", {
            scale: 1.05,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        const heartWrapper = document.getElementById('tilt-heart');

        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth < 768) return;

            const x = (window.innerWidth / 2 - e.pageX) / 20;
            const y = (window.innerHeight / 2 - e.pageY) / 20;

            gsap.to(heartWrapper, {
                rotationY: -x,
                rotationX: y,
                duration: 0.5,
                ease: "power1.out"
            });
        });

        heartWrapper.addEventListener('click', (e) => {
            const rect = heartWrapper.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            for (let i = 0; i < 5; i++) {
                const heart = document.createElement('div');
                heart.classList.add('mini-heart');
                heart.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" style="fill: #ff4d6d; filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
                document.body.appendChild(heart);

                const offsetX = (Math.random() - 0.5) * 50;
                const offsetY = (Math.random() - 0.5) * 50;

                gsap.set(heart, {
                    x: centerX + offsetX,
                    y: centerY + offsetY,
                    scale: 0
                });
                gsap.to(heart, {
                    x: centerX + (Math.random() - 0.8) * 200,
                    y: centerY - 700 - Math.random() * 100,
                    scale: Math.random() * 1.5 + 0.5,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power1.out",
                    onComplete: () => heart.remove()
                });
            }
        });

        let motivoIndex = 0;
        const reasonElement = document.getElementById("reason-text");
        
        if(motivos.length > 0) reasonElement.textContent = motivos[0];

        setInterval(() => {
            gsap.to(reasonElement, {
                opacity: 0,
                y: -10,
                duration: 0.5,
                onComplete: () => {
                    motivoIndex = (motivoIndex + 1) % motivos.length;
                    reasonElement.textContent = motivos[motivoIndex];
                    gsap.fromTo(reasonElement, {
                        opacity: 0,
                        y: 10
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5
                    });
                }
            });
        }, 4000);

        document.addEventListener('mousemove', (e) => {
            criarRastro(e.clientX, e.clientY);
        });

        function criarRastro(x, y) {
            const el = document.createElement('div');
            el.className = 'mouse-trail';
            document.body.appendChild(el);

            el.style.left = x + 'px';
            el.style.top = y + 'px';

            gsap.to(el, {
                duration: 0.6,
                scale: 0,
                opacity: 0,
                x: "random(-20, 20)",
                y: "random(-20, 20)",
                onComplete: () => el.remove()
            });
        }

        function atualizarContador() {
            const agora = new Date();
            const diferenca = agora - dataInicio;

            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
            const minutos = Math.floor((diferenca / 1000 / 60) % 60);
            const segundos = Math.floor((diferenca / 1000) % 60);

            const html = `
                <div class="time-box"><span class="time-val">${dias}</span><span class="time-label">Dias</span></div>
                <div class="time-box"><span class="time-val">${horas}</span><span class="time-label">Horas</span></div>
                <div class="time-box"><span class="time-val">${minutos}</span><span class="time-label">Min</span></div>
                <div class="time-box"><span class="time-val">${segundos}</span><span class="time-label">Seg</span></div>
            `;
            const timerEl = document.getElementById("timer");
            if(timerEl) timerEl.innerHTML = html;
        }
        setInterval(atualizarContador, 1000);
        atualizarContador();

        function typeWriter(text, elementId) {
            const element = document.getElementById(elementId);
            element.innerHTML = "";
            let i = 0;

            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, 100);
                }
            }
            type();
        }

        const musicBtn = document.getElementById("music-btn");
        const volumeSlider = document.getElementById("volume-slider");
        let isPlaying = false;

        function updateVolumeBar(val) {
            const percentage = val * 100;
            volumeSlider.style.background = `linear-gradient(to right, var(--cor-primaria) ${percentage}%, rgba(255, 255, 255, 0.3) ${percentage}%)`;
        }
        updateVolumeBar(audio.volume);

        musicBtn.addEventListener("click", toggleMusic);

        volumeSlider.addEventListener("input", (e) => {
            const value = e.target.value;
            audio.volume = value;
            updateVolumeBar(value);
        });

        function toggleMusic() {
        if (isPlaying) {
            audio.pause();
            musicBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            musicBtn.style.background = "rgba(255, 255, 255, 0.1)";
        } else {
            if (audio.currentTime === 0) {
                audio.currentTime = tempoInicial;
            }
            audio.play();
            musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            musicBtn.style.background = "#ff4d6d";
            musicBtn.style.display = "flex";
        }
        isPlaying = !isPlaying;
    }

        function criarParticulas() {
            const container = document.getElementById("particles-container");
            container.innerHTML = "";

            for (let i = 0; i < particleCount; i++) {
                const el = document.createElement("div");
                el.classList.add("floating-heart");
                el.innerHTML = '<svg viewBox="0 0 24 24" style="fill: #ff4d6d; opacity: 0.3;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
                el.style.left = Math.random() * 100 + "vw";
                el.style.top = Math.random() * 100 + "vh";
                const size = Math.random() * 30 + 10;
                el.style.width = size + "px";
                el.style.height = size + "px";
                container.appendChild(el);

                gsap.to(el, {
                    y: -100,
                    x: "random(-50, 50)",
                    rotation: "random(-45, 45)",
                    duration: "random(3, 6)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }
        }
        criarParticulas();

        const modal = document.getElementById('modal-carta');
        const btnFechar = document.querySelector('.modal-close');

        document.getElementById('btn-surpresa').addEventListener('click', () => {
            if (!isPlaying) toggleMusic();

            const end = Date.now() + 3000;
            const colors = ['#ff4d6d', '#ffffff'];

            (function frame() {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: {
                        x: 0
                    },
                    colors: colors
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: {
                        x: 1
                    },
                    colors: colors
                });
                if (Date.now() < end) requestAnimationFrame(frame);
            }());

            const btn = document.getElementById('btn-surpresa');
            btn.innerHTML = "Te amo! ❤️";
            btn.style.background = "#fff";
            btn.style.color = "#ff4d6d";

            setTimeout(() => {
                modal.classList.add('active');
            }, 1000);
        });

        btnFechar.addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }
});