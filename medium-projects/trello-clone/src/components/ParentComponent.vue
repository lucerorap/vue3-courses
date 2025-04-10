<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from '@/components/ChildComponent.vue';

const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
]);
</script>

<template>
  <div>
    <h1>Item List</h1>
    <ChildComponent :items="items">
      <template #item="{ item }">
        <strong>{{ item.name }}</strong>
      </template>
    </ChildComponent>
  </div>
</template>
