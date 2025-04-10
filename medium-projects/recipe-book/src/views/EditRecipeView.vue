<template>
  <div>Edit Form</div>
  <form @submit.prevent="updateRecipe">
    <div>
      <input type="text" v-model="name" placeholder="Recipe name" required />
    </div>
    <div>
      <input type="text" v-model="description" placeholder="Recipe description" required />
    </div>
    <button type="submit">Edit</button>
  </form>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const recipeStore = useRecipeStore();

const name = ref('');
const description = ref('');
const router = useRouter();
const route = useRoute();

const fetchRecipe = () => {
  const id = route.params.id as string;
  const recipe = recipeStore.getRecipeById(id);

  if (recipe) {
    name.value = recipe.name;
    description.value = recipe.description;
  } else {
    router.push({ name: 'not-found' });
  }
};

const updateRecipe = () => {
  recipeStore.editRecipe({
    id: route.params.id as string,
    name: name.value,
    description: description.value,
  });

  router.push({
    name: 'recipe',
    params: {
      id: route.params.id as string,
    },
  });
};

onMounted(fetchRecipe);
</script>
