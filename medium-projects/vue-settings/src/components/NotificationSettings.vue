<template>
  <div>
    <h2 class="text-2xl mb-4">Notifications</h2>
    <form class="space-y-4 mx-auto">
      <div class="flex items-center gap-1">
        <input type="checkbox" name="emailNotifications" v-model="notifications.email" />
        <label>Email Notifications</label>
      </div>
      <div class="flex items-center gap-1">
        <input type="checkbox" name="smsNotifications" v-model="notifications.sms" />
        <label>SMS Notifications</label>
      </div>

      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';

const { notifications } = useSettings();
</script>
