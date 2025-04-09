<template>
  <div>Add Form</div>
  <form @submit.prevent="addRecipe">
    <div>
      <input type="text" v-model="name" placeholder="Recipe name" required />
    </div>
    <div>
      <input type="text" v-model="description" placeholder="Recipe description" required />
    </div>
    <button type="submit">Add</button>
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
