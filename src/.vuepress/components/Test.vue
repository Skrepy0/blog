<script setup lang="ts">
import { ref } from 'vue'
const counter = ref(0)
</script>
<template>
  <button class="test-button" @click="counter++">{{ counter }}</button>
</template>
<style lang="scss">
@import '../styles/palette.scss';
.test-button {
  height: 30px;
  width: 50px;
  background-color: var(--cp-test-btn);
  border-radius: 12px;
  border: none;
  font-size: 14.4px;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-5px);
    background-color: #19ffd5;
  }
  &:active {
    transform: scale(0.9);
  }
}
</style>
