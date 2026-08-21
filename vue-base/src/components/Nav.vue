<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>

    <nav class="flex justify-between p-5 border-b-[#80808050] border-b-[.5px] font-stretch-semi-condensed">
        
        <RouterLink to="/">
            <h1 class="text-blue-600 font-bold" style="font-size: 1.7rem;">M-PortFolio</h1>
        </RouterLink>

        <ul class="text-black flex gap-5 capitalize font-bold">
            
            <li>
                <RouterLink to="/">
                    acceuil
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/about">
                    à propos
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/skills">
                    compétances
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/projects">
                    projets
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/contact">
                    contact
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

        </ul>

    </nav>

</template>