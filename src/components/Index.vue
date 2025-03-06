<template>
    <div class="flex items-center justify-center h-screen bg-gray-100 relative">
        <!-- Fondo de la pantalla -->
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/hero2.jpg');"></div>

        <!-- Imagen centrada -->
        <div class="relative">
            <img src="/images/image_carta.png" alt="Imagen de la boda"
                class="max-w-full max-h-full object-contain mx-auto" />
        </div>

        <!-- Botón de más info -->
        <button @click="showMoreInfo"
            class="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Más info
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        showMoreInfo() {
            alert('Aquí puedes mostrar más información sobre la boda.');
        }
    }
};
</script>

<style scoped>
/* Fondo animado (si es necesario) */
@keyframes floating {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.card {
    animation: floating 3s ease-in-out infinite;
}
</style>
