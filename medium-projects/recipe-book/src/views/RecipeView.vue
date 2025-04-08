<template>
  <div>Recipe {{ $route.params.id }}</div>
  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 1 } }">Recipe 1</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 3 } }">Recipe 3</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();

console.log(route.params.id);

watch(
  () => route.params.id,
  () => console.log('Fetching inside watch'),
  { immediate: true },
);
</script>
