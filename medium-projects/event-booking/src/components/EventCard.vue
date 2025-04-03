<template>
  <SectionCard>
    <template #header>
      {{ title }}
    </template>
    {{ when }}
    <template #footer>
      <div class="space-y-4">
        <p class="">{{ description }}</p>
        <section class="flex justify-end">
          <RoundedButton @click="$emit('register')">Register</RoundedButton>
        </section>
      </div>
    </template>
  </SectionCard>
</template>

<script setup>
import RoundedButton from '@/components/RoundedButton.vue'
import SectionCard from '@/components/SectionCard.vue'

defineProps({
  title: String,
  when: String,
  description: String
})

defineEmits(['register'])
</script>
