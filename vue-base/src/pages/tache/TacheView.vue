<script setup>
import { ref } from 'vue';
import ButtonPrimary from '../../components/ui/ButtonPrimary.vue';
import { statusData, totoData } from '../../data/todo.js';
import Modal from '../../components/Modal.vue';
import ButtonDnger from '../../components/ui/ButtonDnger.vue';
import Swal from 'sweetalert2';

const todos = ref(totoData);
const isOpen = ref(false);

const titleInput = ref('');
const statusInput = ref('');
const errors = ref({
    title: null,
    status: null
});

const hanleOpenModal = () => {
    isOpen.value = true;
}
const hanleCloseModal = () => {
    isOpen.value = false;
}

const status = ref(statusData);

const onSubmit = () => {

    const title = titleInput.value;
    const status = statusInput.value;

    if (status.trim() == '') {
        errors.value.status = "le status est requis";
        return;
    }

    if (title.trim() == '') {
        errors.value.title = "Le titre est requis";
        return;
    }

    // reinitialisation erreur
    errors.value = {
        title: null,
        status: null,
    }

    const newTask = {
        // momorona id aléatoire
        id: crypto.randomUUID(),
        title,
        status,
    }

    todos.value.push(newTask);
    isOpen.value = false;
    titleInput.value = '';
    statusInput.value = '';
    Swal.fire({
        title: "Ajout avec succe",
        icon: "success",
        draggable: true
    });
}


</script>


<template>
    <div class="mt-5 bg-blue-50 p-8 rounded-2xl">
        <div class="flex justify-between items-center w-[50%] m-auto">
            <h1>
                Lite des tâches
            </h1>
            <div class="">
                <ButtonPrimary @click="hanleOpenModal">
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
        
            <Modal v-if="isOpen">
                <div class="flex items-center justify-between">
                    <h1 class="text-blue-600 font-bold text-2xl">MODAL</h1>
                    <ButtonDnger @click="hanleCloseModal">
                        Fermer
                    </ButtonDnger>
                </div>

                <form @submit.prevent="onSubmit">
                    <input
                        v-model="titleInput" 
                        type="text" 
                        class="w-full h-full 
                            py-3 px-6 
                            border-2 border-blue-500 
                            rounded-[10px] 
                            text-gray font-500 
                            mt-3 outline-none"
                    >

                    <span v-if="errors.title" class="text-red-600">
                        {{ errors.title }}
                    </span>

                    <select
                        v-model="statusInput" 
                        name="" 
                        id="" 
                        class="w-full h-full 
                            py-3 px-6 
                            border-2 border-blue-500 
                            rounded-[10px] text-gray 
                            font-500 mt-3 outline-none
                            mb-3"
                        >

                        <option value="" selected disabled>status</option>
                        <option :value="statut.value" v-for="statut in status">
                            {{ statut.title }}
                        </option>

                    </select>

                    <span v-if="errors.status" class="text-red-600">
                        {{ errors.status }}
                    </span>

                    <div class="">
                        <ButtonPrimary>
                            Ajouter
                        </ButtonPrimary>
                    </div>

                </form>

            </Modal>

    </div>

</template>

