<template>
  <h1 class="text-2xl font-bold mb-4">Add Form</h1>
  <form @submit.prevent="addRecipe" class="space-y-4">
    <div>
      <input
        type="text"
        v-model="name"
        placeholder="Recipe name"
        class="p-2 border rounded w-full"
        required
      />
    </div>
    <div>
      <input
        type="text"
        v-model="description"
        placeholder="Recipe description"
        class="p-2 border rounded w-full"
        required
      />
    </div>
    <button type="submit" class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
      Add
    </button>
  </form>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const recipeStore = useRecipeStore();

const name = ref('');
const description = ref('');
const router = useRouter();
const addRecipe = () => {
  const recipe = recipeStore.addRecipe({
    name: name.value,
    description: description.value,
  });

  router.push({
    name: 'recipe',
    params: {
      id: recipe.id,
    },
  });
};
</script>
