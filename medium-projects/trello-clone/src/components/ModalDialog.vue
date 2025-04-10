<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';

const props = defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  (e: 'close'): void;
}>();

const titleInput = ref<HTMLInputElement | null>(null);

watch(
  () => props.isOpen,
  async (isOpen) => {
    if (isOpen) {
      await nextTick();
      titleInput.value?.focus();
      activate();
    } else {
      deactivate();
    }
  },
);

const modalElement = ref<HTMLDivElement | null>(null);
const { activate, deactivate } = useFocusTrap(modalElement);
</script>
<template>
  <div
    v-if="isOpen"
    ref="modalElement"
    class="flex items-center justify-center fixed inset-0 bg-black/30 backdrop-opacity-50"
    role="dialog"
    aria-modal="true"
    @keydown.esc="$emit('close')"
  >
    <div class="bg-white p-5 rounded max-w-md w-full">
      <h2 class="text-xl font-bold mb-4">Add New Card</h2>
      <input
        ref="titleInput"
        type="text"
        placeholder="Card Title"
        aria-label="Card Title"
        class="w-full p-2 mb-4 border rounded"
      />
      <textarea
        placeholder="Description"
        aria-label="Card Description"
        class="w-full p-2 mb-4 border rounded"
      ></textarea>

      <div class="flex justify-end gap-2">
        <button class="bg-gray-300 hover:bg-ray-200 px-4 py-2 rounded" @click="$emit('close')">
          Cancel
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
          @click="$emit('close')"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
