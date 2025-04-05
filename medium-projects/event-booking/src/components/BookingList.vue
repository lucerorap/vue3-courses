<template>
  <section class="grid grid-cols-1 gap-4">
    <template v-if="!loading">
      <BookingItem
        v-for="booking in bookings"
        :key="booking.id"
        :title="booking.eventTitle"
        :status="booking.status"
        @cancelled="cancelBooking(booking.id)"
      />
    </template>
    <template v-else>
      <LoadingBookingCard v-for="i in 3" :key="i" />
    </template>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import BookingItem from '@/components/BookingItem.vue'
import LoadingBookingCard from '@/components/LoadingBookingCard.vue'
import useBookings from '@/composables/useBookings'

const { bookings, loading, fetchBookings, cancelBooking } = useBookings()

onMounted(() => {
  fetchBookings()
})
</script>
