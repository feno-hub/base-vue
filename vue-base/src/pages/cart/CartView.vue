<script setup lang="ts">
import ButtonDnger from '../../components/ui/ButtonDnger.vue';

</script>

<template>

    <h1 class="text-center font-bold mt-3" style="font-size: 3rem;">🛒 Mon panier</h1>

    <div class="flex items-start gap-5 w-[90%] p-3 mt-3  m-auto mb-3 min-h-[90vh]">

        <div class="">
            
            <div class="flex-2 p-3 bg-gray-300 rounded-2xl shadow-2xl shadow-black mt-3">
                
                <div class="grid grid-cols-2">
                    
                    <div class="flex gap-5 items-start">
                        
                        <div class="">
                            <img src="../../assets/images/colection1.jpg" alt="" class="fit-cover shadow-black shadow-2xl w-[12rem] h-[10rem] rounded-2xl">
                            <h2 class="text-blue-500 font-bold capitalize mb-4 mt-4" style="font-size: 1.5rem;">produit 1</h2>
                        </div>
                        
                        <div class="">
                            <div class="mt-5 mb-8 flex gap-3">
                                
                                <strong class="cursor-pointer bg-red-600 px-5 rounded-[10px] text-white">-</strong>
        
                                <input type="number" name="" id="" placeholder="2" class="px-1 outline-0 rounded-[4px] w-18 border-2 border-black">
                                
                                <strong class="bg-green-600 px-5 rounded-[10px] text-white cursor-pointer">+</strong>
        
                            </div>
                            <span class="capitalize font-bold" style="font-size: 1.5rem;">150 ar</span>
                            
                        </div>
                    </div>

                    <div class="relative">
                        <div class="absolute top-3 right-3">
                            <ButtonDnger>
                                Supprimer
                            </ButtonDnger>
                        </div>
                    </div>
                    
                </div>

            </div>

            <div class="flex-2 p-3 bg-gray-300 rounded-2xl shadow-2xl shadow-black mt-8">
                
                <div class="grid grid-cols-2">
                    
                    <div class="flex gap-5 items-start">
                        
                        <div class="">
                            <img src="../../assets/images/jean7.jpg" alt="" class="fit-cover shadow-black shadow-2xl w-[12rem] h-[10rem] rounded-2xl">
                            <h2 class="text-blue-500 font-bold capitalize mb-4 mt-4" style="font-size: 1.5rem;">produit 1</h2>
                        </div>
                        
                        <div class="">
                            <div class="mt-5 mb-8 flex gap-3">
                                
                                <strong class="cursor-pointer bg-red-600 px-5 rounded-[10px] text-white">-</strong>
        
                                <input type="number" name="" id="" placeholder="2" class="px-1 outline-0 rounded-[4px] w-18 border-2 border-black">
                                
                                <strong class="bg-green-600 px-5 rounded-[10px] text-white cursor-pointer">+</strong>
        
                            </div>
                            <span class="capitalize font-bold" style="font-size: 1.5rem;">150 ar</span>
                            
                        </div>
                    </div>

                    <div class="relative">
                        <div class="absolute top-3 right-3">
                            <ButtonDnger>
                                Supprimer
                            </ButtonDnger>
                        </div>
                    </div>
                    
                </div>

            </div>

            
        </div>
    
        <div class="flex-1 bg-gray-300 rounded-2xl shadow-2xl shadow-black p-3">
            <h2 class="text-center font-bold text-blue-500" style="font-size: 1.5rem;">Résumer</h2>
            <div class="mt-5">
                <div class="flex justify-between mt-3 border-b-2 border-white">
                    <strong>Sous total :</strong>
                    <span>15000 Ar</span>
                </div>
                <div class="flex justify-between mt-3 border-b-2 border-white">
                    <strong>Livraison :</strong>
                    <span>0</span>
                </div>
                <div class="flex justify-between mt-3 border-b-2 border-white">
                    <strong>Total :</strong>
                    <span>15000 Ar</span>
                </div>
                <div class="mt-8">
                    <button class="w-full cursor-pointer text-center py-3 bg-amber-950 rounded-2xl text-white">
                        Passer à la commande
                    </button>
                </div>
            </div>
        </div>

    </div>

</template>