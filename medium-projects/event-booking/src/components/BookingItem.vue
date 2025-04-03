<template>
  <SectionCard>
    <div class="flex justify-between">
      <div><slot></slot></div>
      <RoundedButton variant="danger">Cancel</RoundedButton>
    </div>
  </SectionCard>
</template>

<script setup>
import SectionCard from '@/components/SectionCard.vue'
import RoundedButton from '@/components/RoundedButton.vue'
</script>
