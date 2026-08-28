<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import ButtonPrimary from '../components/ui/ButtonPrimary.vue';
import Modal from '../components/Modal.vue';
import ButtonDnger from '../components/ui/ButtonDnger.vue';

const isOpen = ref(false);

const projects = ref([
    {
        icon: "🚍",
        name: "SOS-VOITURE",
        desc: "Gérer une garage automobile"
    },
    
    {
        icon: "🌾",
        name: "Multi-Resto",
        desc: "Gérer plusieurs restaurants"
    },

    {
        icon: "📱",
        name: "Social-App",
        desc: "Application web"
    }
]);



</script>

<template>

    <header class="flex justify-between align-center pt-[88px] pl-[10%] pb-[88px] pr-[10%] border-b-[#80808050] border-b-[.5px]">

        <div class="flex-1">
            
            <h2 class="font-800 font-stretch-semi-condensed" style="font-size: 1.5rem;">Bonjour, Je suis</h2>
            <h1 class="font-bold mt-3" style="font-size: 2rem;">RAFIDINIRINA Maminiaina Fenosoa</h1>
            <h2 class="text-blue-600 mt-3 font-bold" style="font-size: 2rem;">Developpeur Web</h2>
            
            <p class="mt-3">
                Je maîtrise la responsive et le site web moderne en utilisant HTML, CSS, PHP et  JavaScripit.
            </p>
            
            <RouterLink to="/projects">
                <ButtonPrimary class="mt-6" >
                    voir projets
                </ButtonPrimary>
            </RouterLink>

            <div class="flex gap-3 mt-6">
                <RouterLink to="">
                    📳
                </RouterLink>

                <RouterLink to="">
                    📳
                </RouterLink>
            </div>
        </div>

        <div class="flex-1 relative">
            
            <!-- <div class="absolute bg-blue-400 rounded-[50%] m-auto z-[-1]" style="width: 20rem;height: 20rem;"></div> -->

            <div class=" w-73 h-80 left-40 m-auto">
                <img src="../assets/images/profil1.jpg" alt="">
            </div>

        </div>

    </header>

    <section class="grid gap-10 grid-cols-2 pt-[88px] pl-[10%] pb-[88px] pr-[10%] border-b-[#80808050] border-b-[.5px]">

        <div class="">
            <div class="flex gap-2">
                <span class="bg-blue-300 w-8 h-8 flex justify-center pt-1 rounded-[50%]">
                    👨‍🎓
                </span>
                <strong class="capitalize">à propos</strong>
            </div>
            <p class="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse est porro tenetur quod adipisci eaque veniam illo doloremque molestias.
            </p>
        </div>

        <div class="">
            <div class="flex gap-2">
                <span class="bg-blue-300 w-8 h-8 flex justify-center pt-1 rounded-[50%]">
                    👨‍🎓
                </span>
                <strong class="capitalize">mes compétances</strong>
            </div>
            <div class="grid gap-3 grid-cols-3 mt-3">
                <div class="bg-red-500 text-white p-3 text-center rounded-[10px]">
                    HTML
                </div>
                <div class="bg-blue-800 text-white p-3 text-center rounded-[10px]">
                    CSS
                </div>
                <div class="bg-yellow-500 text-white p-3 text-center rounded-[10px]">
                    JS
                </div>
                <div class="bg-blue-500 text-white p-3 text-center rounded-[10px]">
                    PHP
                </div>
                <div class="bg-green-800 text-white p-3 text-center rounded-[10px]">
                    LARAVEL
                </div>
                <div class="bg-green-500 text-white p-3 text-center rounded-[10px]">
                    VUE JS
                </div>
            </div>
        </div>

    </section>

    <section class="pt-[88px] pl-[10%] pb-[88px] pr-[10%] border-b-[#80808050] border-b-[.5px]">
        
        <div class="flex gap-2">
            
            <span class="bg-blue-300 w-8 h-8 flex justify-center pt-1 rounded-[50%]">
                👨‍🎓
            </span>
            <strong class="capitalize">mes projets</strong>
            
        </div>
        
        <div class="mt-3 grid grid-cols-4 gap-4">

            
            <div v-for="project in projects" class="p-3 text-center rounded-[5px]" style="box-shadow: 0 0 2px black;">
                
                <span class="" style="font-size: 2rem;">
                    {{ project.icon }}
                </span>
                <h1 class="text-blue-600 font-bold mt-3">
                    {{ project.name }}
                </h1>
                <p class="mt-3" style="font-size: .7rem;">
                    {{ project.desc }}
                </p>

                <div class="mt-4">
                        
                    <ButtonPrimary @click="isOpen = true">
                        Voir plus
                    </ButtonPrimary>
                        
                </div>

            </div>

        </div>


    </section>


    <section class="pt-[88px] pl-[10%] pb-[88px] pr-[10%] border-b-[#80808050] border-b-[.5px]">
        <div class="flex gap-2">
            
            <span class="bg-blue-300 w-8 h-8 flex justify-center pt-1 rounded-[50%]">
                👨‍🎓
            </span>
            <strong class="capitalize">contactez moi</strong>
            
        </div>

        <div class="grid grid-cols-2">
            <div class="grid mt-4">
                <div class="mt-2">
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Votre nom"
                        class="border-[1px] *:border-black p-1 rounded-[4px] outline-0"
                        style="box-shadow: 0 0 4px black;"
                    >
                </div>
    
                <div class="mt-2">
                    <input 
                        type="email" 
                        name="" 
                        id=""
                        placeholder="Votre email"
                        class="border-[1px] *:border-black p-1 rounded-[4px] outline-0"
                        style="box-shadow: 0 0 4px black;"
                    >
                </div>
    
                <div class="mt-2">
                    <textarea name="" id="" rows="3" cols="23" placeholder="Votre message" class="border-[1px] *:border-black p-1 rounded-[4px] outline-0" style="box-shadow: 0 0 4px black;"></textarea>
                </div>
    
                <div class="">
                    <ButtonPrimary>
                        Envoyer
                    </ButtonPrimary>
                </div>
    
            </div>

            <div class="rounded-[4px] p-3 pt-10" style="box-shadow: 0 0 2px black;">
                <div class="flex gap-2">
                    <span>
                        📞
                    </span>
                    <div class="flex gap-4">
                        <h2 class="text-blue-600 font-bold">Téléphone :</h2>
                        <strong>+261 38 87 977 29</strong>
                    </div>
                </div>

                <div class="flex gap-2 mt-3">
                    <span>
                        ✉
                    </span>
                    <div class="flex gap-4">
                        <h2 class="text-blue-600 font-bold">Email :</h2>
                        <strong>fenosoarafidinirina@gmail.com</strong>
                    </div>
                </div>

                <div class="flex gap-2 mt-3">
                    <span>
                        🏚
                    </span>
                    <div class="flex gap-4">
                        <h2 class="text-blue-600 font-bold">Adresse :</h2>
                        <strong>FVR07bis, Tsarahonenana, Antananarivo Atsimondrano</strong>
                    </div>
                </div>

                <div class="flex gap-2 mt-3">
                    <span>
                        🌏
                    </span>
                    <div class="flex gap-4">
                        <h2 class="text-blue-600 font-bold">Pays :</h2>
                        <strong>Madagascar</strong>
                    </div>
                </div>
            </div>

        </div>


    </section>

    <Modal v-if="isOpen">
        <div class="flex justify-between items-center">
            <h1>DETAIL PROJET</h1>
            <ButtonDnger @click="isOpen = false">
                Fermer
            </ButtonDnger>
        </div>
    </Modal>

</template>

<style scoped>
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
    }
</style>