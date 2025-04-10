<template>
  <div>
    <h1>Favorite Recipes</h1>
    <RecipeList :recipes="recipeStore.favoriteRecipes" />
  </div>
</template>

<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue';
import { useRecipeStore } from '@/stores/recipe';

const recipeStore = useRecipeStore();
</script>
