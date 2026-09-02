<script setup lang="ts">
import ButtonPrimary from '../components/ui/ButtonPrimary.vue';

</script>

<template>

    <header class="flex justify-center items-center min-h-[85vh]">

        <div class="text-center shadow-2xl shadow-black p-8 rounded-2xl">
            <h1 class="text-[3rem]">
                ⚡
            </h1>
            <h1 class="capitalize font-bold title" style="font-size: 3rem;">
                apprendre vue js
            </h1>
            <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, veniam.</p>
            <div class="mt-8">
                <RouterLink to="">
                    <ButtonPrimary>
                        Voir doc
                    </ButtonPrimary>
                </RouterLink>
            </div>
        </div>

    </header>

</template>

<style>

.title {
    background-image: linear-gradient( rgb(3, 3, 218), black);
    background-clip: text;
    -webkit-background-clip: text();
    transition: all 0.25s ease;
    color: transparent;
    letter-spacing: -0.02em;
    animation: shimmer 1s linear infinite alternate;
}

@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

</style>
