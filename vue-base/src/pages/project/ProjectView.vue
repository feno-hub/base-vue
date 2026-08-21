<script setup>
import { RouterLink } from 'vue-router';
import ButtonPrimary from '../../components/ui/ButtonPrimary.vue';

</script>

<template>

    <header class="pt-[88px]">
        
        <h1 class="font-bold text-center" style="font-size: 2rem;">Mes projets</h1>
                
        <p class="w-[30rem] m-auto text-center mt-3">
            Je fais les projets comme site web ou appmication web plus sécurisé et plus performant  
        </p>
        
    </header>
    
    <section class="grid gap-5 grid-cols-3 pt-[88px] pl-[10%] pb-[88px] pr-[10%] border-b-[#80808050] border-b[.5px]">
        
        <div class="text-center rounded-[10px] overflow-hidden" style="box-shadow: 0 2px 6px black;">
            <div class="" style="width: 100%; height: 30vh;">
                <img src="../../assets/images/car1.jpg" alt="" class="" style="object-fit: cover; width: 100%; height: 100%;">
            </div>

            <h2 class="mt-3 font-bold text-blue-600 text-2xl">SOS-VOITURE</h2>

            <p class="p-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit eos corrupti quis doloribus repellendus dolores repellat hic aut, iusto et voluptates officia iure! Hic quidem porro exercitationem suscipit assumenda!
            </p>

            <RouterLink>
                <div class="mb-3">
                    <ButtonPrimary>
                        Voir Plus
                    </ButtonPrimary>
                </div>
            </RouterLink>

        </div>

        <div class="text-center rounded-[10px] overflow-hidden" style="box-shadow: 0 2px 6px black;">
            <div class="" style="width: 100%; height: 30vh;">
                <img src="../../assets/images/resto1.jpg" alt="" class="" style="object-fit: cover; width: 100%; height: 100%;">
            </div>

            <h2 class="mt-3 font-bold text-blue-600 text-2xl">Multi-Resto</h2>

            <p class="p-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit eos corrupti quis doloribus repellendus dolores repellat hic aut, iusto et voluptates officia iure! Hic quidem porro exercitationem suscipit assumenda!
            </p>

            <RouterLink>
                <div class="mb-3">
                    <ButtonPrimary>
                        Voir Plus
                    </ButtonPrimary>
                </div>
            </RouterLink>

        </div>

    </section>

</template>
