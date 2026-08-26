<template>
  <ClientOnly>
    <Transition name="schedule-fade" appear>
      <ClassSchedule />
    </Transition>
  </ClientOnly>
</template>

<script setup>
import ClassSchedule from '../pages/ClassSchedule.vue'
</script>

<style>
.schedule-fade-enter-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.schedule-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>
