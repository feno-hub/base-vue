<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>

    <nav class="flex justify-between p-5 border-b-[#80808050] border-b-[.5px] font-stretch-semi-condensed sticky top-0 left-0 w-[100%] z-30 backdrop-blur-2xl bg-[#5e5b5b60]">
        
        <RouterLink to="/">
            <h1 class="text-blue-600 font-bold" style="font-size: 1.7rem;">Vue-Js</h1>
        </RouterLink>

        <ul class="text-black flex gap-5 capitalize font-bold">
            
            <li>
                <RouterLink to="/">
                    acceuil
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/product">
                    produits
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/counter">
                    counter
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/tache">
                    taches
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/cart">
                    🛒
                </RouterLink>
            </li>

        </ul>

    </nav>

</template>