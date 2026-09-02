
<script setup>
import { onMounted, ref, watch } from 'vue';
import { fetchProductApi } from '../../services/product.service';
import Loader from '../../components/Loader.vue';
import ButtonPrimary from '../../components/ui/ButtonPrimary.vue';
import ButtonDnger from '../../components/ui/ButtonDnger.vue';
import { useRoute } from 'vue-router';

const products = ref([]);
const isLoading = ref(false);
const error = ref(null);

async function getProducts() {
    
    try {
        error.value = null
        isLoading.value = true;
        const data = await fetchProductApi();
    
        products.value = data.products;
        isLoading.value = false;
        console.log(products);
    }catch(err) {
        error.value = err;
        isLoading.value = false;
    }

}

const handleRefresh = () => {
    getProducts();
    console.log('Refetch...');
}

onMounted( () => {
    getProducts();
});

const route = useRoute()


</script>

<template>

    <section class="
        pt-[88px] 
        pl-[10%] pb-[88px] 
        pr-[10%] 
        border-b-[#80808050] 
        border-b-[.5px]
    ">

        <h1 class="text-center font-bold title" style="font-size: 3rem;">Liste des produits</h1>

        <div v-if="error" class="text-center bg-red-100 p-15 rounded-xl w-full border-red-600 border-4 mt-15">
            <h2 class="text-red-600 text-center font-bold text-2xl mb-5">
                {{ error.message }}
            </h2>
            <ButtonDnger @click="handleRefresh">
                Réessayer
            </ButtonDnger>
        </div>

        <div v-else class="">
            <div v-if="isLoading" class="flex justify-center mt-40">
                <Loader />
            </div>
    
            <div class="
                w-[100%] 
                mt-8 
                grid grid-cols-4 
                gap-3
            ">
                
                <div v-for="product in products" class="
                        flex-1 bg-[#ffffff] 
                        shadow-2xl 
                        shadow-black 
                        rounded-2xl p-3
                        overflow-hidden
                        relative
                        min-h-[50vh]
                ">
                    
                    <img :src="product.images[0]" alt="" class="w-[100%] h-[30vh] object-cover">
                    
                    <h2 class="
                        text-center 
                        text-black 
                        font-bold 
                        text-1xl 
                        capitalize
                        mt-3
                    ">
                        {{ product.title }}
                    </h2>
                    
                    <h3 class="
                        p-[5px] 
                        text-white 
                        rounded-[10px] 
                        bg-[red] 
                        absolute 
                        top-4 
                        right-4
    
                    ">
                        prix: {{ product.price }}
                    </h3>
    
                    <div  class="flex justify-center items-center mt-3 absolute bottom-3">
    
                        <RouterLink :to="`/product/show/${product.id}`" class="">
                            <ButtonPrimary>
                                voir détail
                            </ButtonPrimary>
                        </RouterLink>
    
                        <div class="">
                            <RouterLink to="/cart" class="text-blue-900 ml-[100%] cursor-pointer hover:scale-50" style="font-size: 2rem;">
                                🛒
                            </RouterLink>
                        </div>
    
                    </div>
    
                </div>
                
            </div>

        </div>

    </section>

</template>