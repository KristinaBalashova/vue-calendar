<script setup>
import { ref, computed } from 'vue';
import Calendar from '../components/Calendar/Calendar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const date = computed(() => {
  router.currentRoute.value.params.date
});


</script>

<template>
  <div class="calendar-container">
    <Calendar :date="date"  />
  </div>
</template>

<style scoped>

.calendar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>