<script setup>
import { ref } from 'vue';

const count = ref(0);

// function déclaré
function increment() {
    count.value++;
}

// function fléché
const decrement = () => {
    if(count.value <1) return;
    count.value--;
}


</script>

<template>

    <div class="flex gap-5 items-center justify-center text-center p-[88px] min-h-[85vh]">
        <button @click="decrement()" class="bg-red-600 p-[10px] rounded-[10px] text-white">
            remove
        </button>
        
        <h1 class="text-[1.5rem]">
            {{ count }}
        </h1>
        
        <button v-if="count < 10" @click="increment()" class="bg-green-600 pt-[10px] pl-[20px] pb-[10px] pr-[20px] rounded-[10px] text-white">
            add
        </button>
    </div>


</template>