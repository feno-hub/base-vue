<script setup>
import { ref } from 'vue';
import ButtonPrimary from '../../components/ui/ButtonPrimary.vue';
import { totoData } from '../../data/todo.js';

    const todos = ref(totoData);

</script>


<template>
    <div class="mt-5 bg-blue-50 p-8 rounded-2xl">
        <div class="flex justify-between items-center w-[50%] m-auto">
            <h1>
                Lite des tâches
            </h1>
            <div class="">
                <ButtonPrimary>
                    Nouveau
                </ButtonPrimary>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-3 mt-5">
            <div v-for="todo in todos" class="bg-amber-200 p-3 rounded-[1rem]">
                <div class="my-5 mx-0">
                    <span class="bg-green-500 p-3 rounded-2xl">
                        {{ todo.status }}
                    </span>
                </div>
                <p>
                    {{ todo.title }}
                </p>
            </div>
        </div>

    </div>
</template>

