<template>
    <div class="animate-fade-down">
        <!-- Sección de inicio -->
        <div class="relative h-screen w-full bg-cover bg-center"
            :style="{ backgroundImage: `url(${backgroundImage})` }">
            <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <!-- Título -->
                <h1
                    class="text-6xl sm:text-7xl font-extrabold font-cursive text-outline-plata leading-tight text-center">
                    <span
                        class="inline-block font-bold text-[#CFAF5A] script-font shadow-md animate-fade-down">Michel</span>

                    <!-- Para móviles: & en una línea separada -->
                    <span class="block sm:hidden text-boda-dorado text-5xl">&</span>

                    <!-- Para pantallas grandes: & en la misma línea -->
                    <span class="hidden sm:inline text-boda-dorado">&</span>

                    <span class="inline-block font-bold text-[#CFAF5A] script-font shadow-md">Daniel</span>
                </h1>

                <p class="text-3xl sm:text-4xl mt-2 text-boda-verde_pino font-lovedbytheking text-outline-plata">¡Nos
                    Casamos!</p>

                <!-- Imagen Circular -->
                <div class="w-36 h-36 sm:w-48 sm:h-48 mt-6 rounded-full overflow-hidden border-4 border-[#f4e0d6]">
                    <img :src="imageUrl" alt="Boda" class="w-full h-full object-cover">
                </div>

                <!-- Sección de Fecha -->
                <div class="max-w-xs w-full mt-4 bg-[#f4e0d6] py-3 px-6 rounded-lg text-center shadow-lg">
                    <p class="text-sm font-semibold text-gray-700 tracking-wide">SÁBADO</p>
                    <p class="text-4xl font-bold text-[#6c4f4b]">26</p>
                    <p class="text-sm text-gray-700 uppercase">ABRIL</p>
                    <p class="text-sm text-gray-700">A LAS 04:00 PM</p>
                </div>

                <p class="mt-6 text-lg font-semibold">Faltan</p>

                <!-- Contador -->
                <div class="flex space-x-3 mt-4">
                    <div v-for="(time, label) in countdown" :key="label"
                        class="bg-[#f4e0d6] px-4 py-2 rounded-lg text-center text-[#6c4f4b] shadow-md">
                        <p class="text-2xl font-bold">{{ time }}</p>
                        <p class="text-xs uppercase">{{ label }}</p>
                    </div>
                </div>

                <!-- Reproductor de audio debajo del contador -->
                <div class="audio-player mt-6">
                    <audio ref="audio" :src="audioSrc" controls></audio>
                </div>
            </div>
        </div>


        <!--  -->
        <!-- section padres  -->
        <div class="bg-pink-50 flex items-center justify-center p-6">
            <div class="bg-white shadow-lg p-8 rounded-lg w-full text-center relative">
                <!-- Decoración superior -->
                <div class="absolute top-0 left-0 w-16 h-18">
                    <img src="/images/rosas-sin-fondo.png" alt="decoración" class="w-full">
                </div>

                <!-- Texto principal -->
                <h2 class="text-sm uppercase tracking-widest text-pink-400 font-semibold mt-4">
                    Con la bendición de nuestros padres
                </h2>

                <!-- Padres de la novia -->
                <div class="mt-2 ml-2">
                    <h3 class="text-lg font-semibold">PADRES DE LA NOVIA</h3>
                    <p class="italic text-xl font-light">
                        <span class="font-cursive">M. Isabel </span>
                    </p>
                    <p class="italic text-xl font-light flex items-center justify-center gap-2 mt-2 ml-2">
                        <span class="text-black">&</span>
                        <span class="font-cursive">Jose E.</span>
                    </p>
                </div>

                <!-- Separador con texto -->
                <div class="my-26 w-full h-auto bg-gray-200 rounded-md flex items-center justify-center mt-2 ml-2">
                    <span class="text-1xl font-semibold uppercase text-pink-600 font-lovedbytheking text-center">
                        El amor nunca se da por vencido, jamás pierde la fe, siempre tiene esperanzas y se mantiene
                        firme en toda circunstancia. 🕊️
                    </span>
                </div>
                <!-- Padres del novio -->
                <div class="mt-2">
                    <h3 class="text-lg font-semibold">PADRES DEL NOVIO</h3>
                    <p class="italic text-xl font-light">
                        <span class="font-cursive">M. de Jesús</span>
                    </p>
                    <p class="italic text-xl font-light flex items-center justify-center gap-2">
                        <span class="text-black">&</span>
                        <span class="font-cursive">Hipólito</span>
                    </p>
                </div>

                <!-- Decoración inferior -->
                <div class="absolute bottom-0 right-0 w-16 h-16">
                    <img src="/images/rosas-sin-fondo.png" alt="decoración" class="w-full">
                </div>
            </div>
        </div>
        <!--  -->
        <!-- card fotografies -->
        <!-- <div class="grid gap-4 mx-4 bg-pink-50 mt-4">
            <div
                class="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1609151162377-794faf68b02f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-boda-champagne font-lovedbytheking">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1
                        class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-boda-terracota md:text-3xl lg:text-6xl text-outline-blue">
                        "Momentos Especiales"</h1>
                    <h2
                        class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-boda-terracota md:text-3xl lg:text-6xl text-outline-blue">
                        "Cada foto, un recuerdo eterno 💍"
                    </h2>
                </div>
            </div>
            <div class="pink-50 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
                <div v-for="(image, index) in images" :key="index">
                    <img :src="image.src" :alt="image.alt" class="h-auto max-w-full rounded-lg">
                </div>
            </div>
        </div> -->
        <!-- card ubication -->

        <!--  -->
        <!-- section code vestimenta -->
        <div class="bg-white flex flex-col items-center justify-center px-4 py-10">
            <div class="max-w-4xl text-center">
                <h2 class="text-4xl font-semibold text-pink-600 mb-4 font-lovedbytheking">Código de Vestimenta</h2>
                <p class="text-lg text-gray-700 mb-8">
                    La novia ha estado esperando toda su vida para usar blanco en su boda, así que por favor, elige
                    cualquier otro color para nuestro día especial.
                </p>
                <h3 class="mt-2"><strong>¡Por favor evita negro y blanco!</strong></h3>
            </div>
            <h3 class="mt-4"><strong>Recomendación:</strong></h3>

            <div class="flex flex-col md:flex-row items-center justify-center gap-10 mt-4">
                <div class="text-center">
                    <img src="https://invitacionesdigitales.io/storage/customers/1f61fd3d-f0bd-43ab-884c-1f85eeb3aa30/mujeres-dresscode.png"
                        alt="Mujeres" class="w-24 h-24 mx-auto" />
                    <p class="text-lg text-brown-700 font-semibold mt-2">Mujeres</p>
                </div>
                <div class="text-center">
                    <img src="https://invitacionesdigitales.io/storage/customers/1f61fd3d-f0bd-43ab-884c-1f85eeb3aa30/hombres-dresscode.png"
                        alt="Hombres" class="w-24 h-24 mx-auto" />
                    <p class="text-lg text-brown-700 font-semibold mt-2">Hombres</p>
                </div>
            </div>
        </div>
        <!--  -->

        <!-- luegares -->
        <div class="min-h-screen bg-pink-50 p-6">
            <h2 class="text-4xl font-semibold text-center text-pink-600 mb-4 font-lovedbytheking">
                El día de la boda
            </h2>
            <div class="space-y-10">
                <!-- Ceremonia Religiosa -->
                <div class="flex flex-col md:flex-row items-center md:items-start">
                    <div class="text-center md:text-left md:w-1/3">
                        <h3 class="italic text-pink-700 text-xl font-semibold">Ceremonia religiosa</h3>
                        <p class="text-gray-600">14:00 PM - 15:00 PM</p>
                        <img src="/images/calvario.png" alt="Calvario de Metepec"
                            class="w-40 h-40 rounded-full mx-auto md:mx-0 mt-4" />
                    </div>
                    <div class="md:w-2/3 md:pl-10">
                        <h4 class="text-lg font-semibold">Calvario de Metepec</h4>
                        <p class="text-gray-600">Manzana 011, Espiritu Santo, 52140 Metepec, Méx. </p>
                        <div class="mt-4 space-y-2">
                            <a href="https://maps.app.goo.gl/9yFxeAfr28whpTcB7" target="_blank"
                                class="w-full md:w-auto px-4 py-2 border border-gray-400 rounded-lg text-center inline-block">
                                Usar Google Maps
                            </a>
                            <a href="https://ul.waze.com/ul?place=ChIJo1Xe9buLzYUR-aX3C8RGLmc&ll=19.25023530%2C-99.60523280&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                                target="_blank"
                                class="w-full md:w-auto px-4 py-2 border border-gray-400 rounded-lg text-center inline-block">
                                Usar Waze
                            </a>
                        </div>
                    </div>
                </div>

                <hr class="border-gray-300 my-4" />

                <!-- Fiesta -->
                <div class="flex flex-col md:flex-row items-center md:items-start">
                    <div class="text-center md:text-left md:w-1/3">
                        <h3 class="italic text-pink-700 text-xl font-semibold">Fiesta</h3>
                        <p class="text-gray-600">16:00 PM - 05:00 AM</p>
                        <img src="/images/salon-alvarado.png" alt="Banquete"
                            class="w-40 h-40 rounded-full mx-auto md:mx-0 mt-4" />
                    </div>
                    <div class="md:w-2/3 md:pl-10">
                        <h4 class="text-lg font-semibold">Salón Alvarado</h4>
                        <p class="text-gray-600">Priv. Altamirano 132, 51355 San Luis Mextepec, Méx.
                        </p>
                        <div class="mt-4 space-y-2">
                            <a href="https://maps.app.goo.gl/oMhydRM8qhDbSmPY7" target="_blank"
                                class="w-full md:w-auto px-4 py-2 border border-gray-400 rounded-lg text-center inline-block">
                                Usar Google Maps
                            </a>
                            <a href="https://ul.waze.com/ul?place=ChIJV2WlYACHzYURg-VuYvD4v-o&ll=19.30076300%2C-99.72713820&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                                target="_blank"
                                class="w-full md:w-auto px-4 py-2 border border-gray-400 rounded-lg text-center inline-block">
                                Usar Waze
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--  -->
        <!-- section questions  -->
        <div class="bg-white text-dark py-10 px-6 md:px-20">
            <div class="text-center mb-8">
                <div class="flex justify-center mb-4">
                    <img src="https://invitacionesdigitales.io/storage/invitation-types/demos/boda/primer-baile.svg"
                        alt="Icono" class="h-20">
                </div>
                <h2 class="text-3xl font-semibold uppercase tracking-widest font-lovedbytheking text-pink-600">Preguntas
                    Comunes</h2>
            </div>
            <div class="max-w-3xl mx-auto space-y-6 ">
                <div v-for="(faq, index) in faqs" :key="index">
                    <h3 class="text-lg font-semibold">{{ index + 1 }}. {{ faq.question }}</h3>
                    <p v-html="faq.answer" class="text-dark"></p>
                </div>
            </div>
        </div>
    </div>
    <!--  -->
</template>




<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        const targetDate = new Date('2025-04-26T02:00:00');
        const backgroundImage = ref('https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        const countdown = ref({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
        let interval;

        let audio = null;
        let hasPlayed = false;


        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate - now;
            if (difference > 0) {
                countdown.value = {
                    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    horas: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                    minutos: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
                    segundos: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
                };
            }
        };

        // Función para reproducir la música al hacer scroll
        const playMusic = () => {
            if (!hasPlayed) {
                audio = new Audio('/music/trimmed_audio.mp3');
                audio.loop = true;
                audio.play().catch(error => {
                    console.error('Error al reproducir:', error);
                });
                hasPlayed = true;
                window.removeEventListener('scroll', playMusic); // Remover el evento después de activarlo
            }
        };

        onMounted(() => {
            updateCountdown();
            interval = setInterval(updateCountdown, 1000);
            window.addEventListener('scroll', playMusic); // Detectar scroll

        });

        onUnmounted(() => {
            clearInterval(interval);
            window.removeEventListener('scroll', playMusic);
        });

        return { countdown, backgroundImage, playMusic };

    },
    data() {
        return {
            audio: null,
            isPlaying: false,
            audioSrc: '/music/trimmed_audio.mp3', // Ruta del archivo de audio

            imageUrl: '/images/WhatsApp Image 2025-02-04 at 23.13.36 (1).jpeg', // Reemplaza con la URL correcta de la imagen de la pareja

            images: [
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.37.jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.33.jpeg', alt: 'Image 2', title: 'Image 2', description: 'Description for image 2' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.36 (1).jpeg', alt: 'Image 2', title: 'Image 2', description: 'Description for image 2' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.37 (5).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.35 (1).jpeg', alt: 'Image 3', title: 'Image 3', description: 'Description for image 3' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.37 (6).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.34 (3).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.38 (2).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
                { src: '/images/WhatsApp Image 2025-02-04 at 23.13.33 (1).jpeg', alt: 'Image 1', title: 'Image 1', description: 'Description for image 1' },
            ],
            faqs: [
                {
                    question: "¿Cómo debo de vestirme para la ocasión?",
                    answer: "La ceremonia se celebrará en el calvario de metepec y el código de vestimenta puede ser formal, semi-formal o casual, según su preferencia."
                },
                {
                    question: "¿Existe disponibilidad de estacionamiento en el lugar del evento?",
                    answer: "Si, la iglesia cuenta con un estacionamiento externo con un costo adicional, así como el salón con costo de $40 pesos tiempo libre.",
                },
                {
                    question: "¿Es posible asistir con niños?",
                    answer: "Por supuesto! Los niños son bienvenidos a nuestra celebración."
                },
                {
                    question: "¿Cómo será la asignación de asientos durante el evento?",
                    answer: "A su llegada, serán recibidos por un anfitrión que les indicará sus lugares asignados."
                },
                {
                    question: "¿Cuál es el clima del evento?",
                    answer: "El clima puede ser fresco durante la noche, por lo que recomendamos llevar algo abrigador para mantenerse cómodo."
                }
            ]
        };
    },
    methods: {
        openLink(url) {
            window.open(url, "_blank");
        },
        playMusic() {
            const audioElement = this.$refs.audio;
            if (audioElement.paused) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        },
    },
};
</script>

<style scoped>
/* Fuente personalizada para los nombres */
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.font-cursive {
    font-family: 'Dancing Script', cursive;
}

.script-font {
    font-family: 'Great Vibes', cursive;
}

body {
    background-color: #fbedff;
}

.font-cursive {
    font-family: 'Dancing Script', cursive;
}

.text-brown-700 {
    color: #8B4513;
}

.text-outline-blue {
    text-shadow: 1px 1px 0 #FAFAFA, -1px -1px 0 #FAFAFA, 1px -1px 0 #FAFAFA, -1px 1px 0 #FAFAFA;
}

.text-outline-plata {
    text-shadow: 1px 1px 0 #FAFAFA, -1px -1px 0 #FAFAFA, 1px -1px 0 #FAFAFA, -1px 1px 0 #FAFAFA;
}

.glow-text-outline {
    font-size: 2rem;
    color: white;
    text-shadow: 0 0 10px #E2725B, 0 0 20px #E2725B, 0 0 30px #E2725B, 0 0 40px #E2725B;
}

.glow-text {
    font-size: 2rem;
    color: white;
    text-shadow: 0 0 10px rgb(240, 240, 255), 0 0 20px rgb(213, 213, 237), 0 0 30px rgb(213, 213, 237), 0 0 40px rgb(213, 213, 237);
}
</style>