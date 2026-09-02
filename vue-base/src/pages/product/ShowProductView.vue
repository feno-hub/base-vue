
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { fetchProductByIdApi } from '../../services/product.service';
import { onMounted } from 'vue';
import Loader from '../../components/Loader.vue';

    const route =useRoute();
    const isLoading = ref(false);
    const product = ref({});
    const error = ref(false);

async function getProductById() {
    
    try {
        isLoading.value = true;
        error.value = null
        const data = await fetchProductByIdApi(route.params.id);
    
        product.value = data;
        isLoading.value = false;
        console.log(data);

    }catch(err) {
        error.value = err;
        isLoading.value = false;
    }

}

onMounted(() => {
    getProductById();
});

</script>


<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">

        <div v-if="isLoading" class="">
            <Loader />
        </div>

        <div v-else class="">
            <div class="grid grid-cols-1 gap-10 rounded-3xl bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-10">
      
              <!-- Galerie -->
              <div>
                <div class="flex h-[450px] items-center justify-center rounded-2xl bg-gray-50 p-8">
                  <img
                    :src="product.thumbnail"
                    :alt="product.title"
                    class="h-full w-full object-contain"
                  />
                </div>
      
                <div class="mt-5 flex gap-3">
                  <div v-for="image in product.images"
                    class="flex h-20 w-20 items-center justify-center rounded-xl border-2 border-gray-900 bg-white p-2"
                  >
                    <img
                      :src="image"
                      :alt="product.title"
                      class="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
      
              <!-- Informations produit -->
              <div class="flex flex-col">
      
                <!-- Catégorie + disponibilité -->
                <div class="flex items-center justify-between gap-4">
                  <span
                    class="text-sm font-semibold uppercase tracking-wider text-gray-500"
                  >
                    {{ product.category }}
                  </span>
      
                  <span
                    class="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"
                  >
                    {{ product.availabilityStatus }}
                  </span>
                </div>
      
                <!-- Titre -->
                <h1
                  class="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  {{ product.title }}
                </h1>
      
                <!-- Marque -->
                <p class="mt-3 text-gray-500">
                  Marque :
                  <span class="font-semibold text-gray-900">
                    {{ product.brand }}
                  </span>
                </p>
      
                <!-- Rating -->
                <div class="mt-5 flex items-center gap-3">
                  <div class="flex text-yellow-400">
                    <span
                      v-for="star in 5"
                      :key="star"
                      class="text-xl"
                    >
                      ★
                    </span>
                  </div>
      
                  <span class="text-sm text-gray-500">
                    {{ product.rating }} / 5
                  </span>
                </div>
      
                <!-- Prix -->
                <div class="mt-6 flex items-center gap-4">
                  <span class="text-3xl font-bold text-gray-900">
                    ${{ product.price }}
                  </span>
      
                  <span
                    class="rounded-lg bg-red-100 px-3 py-1.5 text-sm font-bold text-red-600"
                  >
                    -{{ product.discountPercentage }}%
                  </span>
                </div>
      
                <!-- Description -->
                <p class="mt-6 leading-7 text-gray-600">
                  {{ product.description }}
                </p>
      
                <!-- Stock -->
                <div class="mt-7 grid grid-cols-2 gap-4">
      
                  <div class="rounded-xl bg-gray-50 p-5">
                    <p class="text-sm text-gray-500">
                      Stock disponible
                    </p>
      
                    <p class="mt-2 font-bold text-gray-900">
                      {{ product.stock }} unités
                    </p>
                  </div>
      
                  <div class="rounded-xl bg-gray-50 p-5">
                    <p class="text-sm text-gray-500">
                      Commande minimum
                    </p>
      
                    <p class="mt-2 font-bold text-gray-900">
                      {{ product.minimumOrderQuantity }}
                    </p>
                  </div>
      
                </div>
      
                <!-- Quantité -->
                <div class="mt-7 flex items-center justify-between">
                  <span class="font-semibold text-gray-900">
                    Quantité
                  </span>
      
                  <div class="flex items-center overflow-hidden rounded-lg border border-gray-300">
      
                    <button
                      @click="decreaseQuantity"
                      class="flex h-10 w-10 items-center justify-center bg-gray-100 text-xl text-gray-700 transition hover:bg-gray-200"
                    >
                      −
                    </button>
      
                    <span
                      class="flex h-10 w-12 items-center justify-center font-semibold"
                    >
                      {{ quantity }}
                    </span>
      
                    <button
                      @click="increaseQuantity"
                      class="flex h-10 w-10 items-center justify-center bg-gray-100 text-xl text-gray-700 transition hover:bg-gray-200"
                    >
                      +
                    </button>
      
                  </div>
                </div>
      
                <!-- Bouton panier -->
                <button
                  class="mt-6 w-full rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white transition hover:bg-gray-700"
                >
                  Ajouter au panier
                </button>
      
                <!-- Livraison -->
                <div class="mt-8 divide-y divide-gray-200 border-t border-gray-200">
      
                  <div class="flex justify-between gap-5 py-4">
                    <span class="font-semibold text-gray-900">
                      Livraison
                    </span>
      
                    <span class="text-right text-gray-500">
                      {{ product.shippingInformation }}
                    </span>
                  </div>
      
                  <div class="flex justify-between gap-5 py-4">
                    <span class="font-semibold text-gray-900">
                      Garantie
                    </span>
      
                    <span class="text-right text-gray-500">
                      {{ product.warrantyInformation }}
                    </span>
                  </div>
      
                  <div class="flex justify-between gap-5 py-4">
                    <span class="font-semibold text-gray-900">
                      Retour
                    </span>
      
                    <span class="text-right text-gray-500">
                      {{ product.returnPolicy }}
                    </span>
                  </div>
      
                </div>
      
              </div>
            </div>
      
            <!-- Informations détaillées -->
            <section class="mt-8 rounded-3xl bg-white p-6 shadow-sm lg:p-10">
      
              <h2 class="text-2xl font-bold text-gray-900">
                Informations sur le produit
              </h2>
      
              <div class="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      
                <div
                  v-for="detail in productDetails"
                  :key="detail.label"
                  class="rounded-xl bg-gray-50 p-5"
                >
                  <p class="text-sm text-gray-500">
                    {{ detail.label }}
                  </p>
      
                  <p class="mt-2 font-semibold text-gray-900">
                    {{ detail.value }}
                  </p>
                </div>
      
              </div>
            </section>
      
            <!-- Tags -->
            <section class="mt-8 rounded-3xl bg-white p-6 shadow-sm lg:p-10">
      
              <h2 class="text-2xl font-bold text-gray-900">
                Tags
              </h2>
      
              <div class="mt-5 flex flex-wrap gap-3">
                <span
                  v-for="tag in product.tags"
                  :key="tag"
                  class="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  #{{ tag }}
                </span>
              </div>
      
            </section>
      
            <!-- Avis -->
            <section class="mt-8 rounded-3xl bg-white p-6 shadow-sm lg:p-10">
      
              <div class="flex items-center justify-between">
                <h2 class="text-2xl font-bold text-gray-900">
                  Avis clients
                </h2>
      
                <span class="text-sm text-gray-500">
                   avis
                </span>
              </div>
      
              <div class="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
      
                <article
                  v-for="(review, index) in product.reviews"
                  :key="index"
                  class="rounded-xl border border-gray-200 p-5"
                >
      
                  <div class="flex items-center justify-between gap-3">
      
                    <h3 class="font-semibold text-gray-900">
                      {{ review.reviewerName }}
                    </h3>
      
                    <span class="text-sm font-semibold text-yellow-500">
                      {{ review.rating }} ★
                    </span>
      
                  </div>
      
                  <p class="mt-4 leading-6 text-gray-600">
                    {{ review.comment }}
                  </p>
      
                  <p class="mt-4 text-xs text-gray-400">
                    {{ review.date }}
                  </p>
      
                </article>
      
              </div>
      
            </section>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",

  data() {
    return {
      quantity: 1,

      product: {
        availabilityStatus: "In Stock",

        brand: "Essence",

        category: "beauty",

        description:
          "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",

        dimensions: {
          width: 15.14,
          height: 13.08,
          depth: 22.99
        },

        discountPercentage: 10.48,

        id: 1,

        images: [
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
        ],

        meta: {
          barcode: "5784719087687",
          createdAt: "2025-04-30T09:41:02.053Z",
          qrCode:
            "https://cdn.dummyjson.com/public/qr-code.png",
          updatedAt: "2025-04-30T09:41:02.053Z"
        },

        minimumOrderQuantity: 48,

        price: 9.99,

        rating: 2.56,

        returnPolicy: "No return policy",

        reviews: [
          {
            rating: 5,
            comment: "Excellent produit, je recommande.",
            date: "2025-05-01",
            reviewerName: "Alice"
          },
          {
            rating: 4,
            comment: "Bon mascara et bonne qualité.",
            date: "2025-05-03",
            reviewerName: "Sarah"
          },
          {
            rating: 3,
            comment: "Le produit est correct.",
            date: "2025-05-05",
            reviewerName: "Emma"
          }
        ],

        shippingInformation: "Ships in 3-5 business days",

        sku: "BEA-ESS-ESS-001",

        stock: 99,

        tags: [
          "beauty",
          "mascara"
        ],

        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",

        title: "Essence Mascara Lash Princess",

        warrantyInformation: "1 week warranty",

        weight: 4
      }
    };
  },

  computed: {
    productDetails() {
      return [
        {
          label: "SKU",
          value: this.product.sku
        },
        {
          label: "Marque",
          value: this.product.brand
        },
        {
          label: "Catégorie",
          value: this.product.category
        },
        {
          label: "Poids",
          value: `${this.product.weight} kg`
        },
        {
          label: "Largeur",
          value: `${this.product.dimensions.width} cm`
        },
        {
          label: "Hauteur",
          value: `${this.product.dimensions.height} cm`
        },
        {
          label: "Profondeur",
          value: `${this.product.dimensions.depth} cm`
        },
        {
          label: "Code-barres",
          value: this.product.meta.barcode
        }
      ];
    }
  },

  methods: {
    increaseQuantity() {
      if (this.quantity < this.product.stock) {
        this.quantity++;
      }
    },

    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    }
  }
};
</script>