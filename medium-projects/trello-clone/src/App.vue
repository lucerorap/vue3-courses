<template>
  <main class="pd-5 font-sans">
    <div class="flex gap-5 py-5 overflow-x-auto">
      <div class="flex flex-col bg-gray-100 p-3 rounded-lg min-w-[250px]">
        <h2 class="font-medium mb-2">The List</h2>
        <div class="bg-white p-2 my-2 ounded shadow-cursor-pointer">
          <span class="text-sm font-medium">Title Card</span>
          <p class="text-xs text-gray-400">Card Description</p>
        </div>

        <div class="bg-white p-2 my-2 ounded shadow-cursor-pointer">
          <span class="text-sm font-medium">Title Card</span>
          <p class="text-xs text-gray-400">Card Description</p>
        </div>

        <div class="bg-white p-2 my-2 ounded shadow-cursor-pointer">
          <span class="text-sm font-medium">Title Card</span>
          <p class="text-xs text-gray-400">Card Description</p>
        </div>

        <button
          class="w-full bg-transparent rounded hover:bg-white text-gray-500 p-2 text-left mt-2 text-sm font-medium"
        >
          + Add Card
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>
