
<script setup></script>

<template>

    <div class="bg-white
            w-[40%]
            absolute
            top-[20%]
            left-[50%]
            translate-x-[-50%]
            p-3
            rounded-md
            shadow-md
            z-10"
    >

        <slot />

    </div>

    <div class="bg-[#00000038] w-full h-full z-5 absolute top-0 left-0 backdrop-blur-xs"></div>

</template>