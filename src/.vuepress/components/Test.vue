<script setup lang="ts">
import { ref } from "vue";
const counter = ref(0);
</script>
<template>
  <button class="test-button" @click="counter++">{{ counter }}</button>
</template>
<style lang="scss">
@import url("../styles/index.scss");
.test-button {
  height: 30px;
  width: 50px;
  background-color: rgba(4, 41, 41);
  border-radius: 12px;
  border: none;
  font-size: 14.4px;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-5px);
    background-color: rgba(25, 255, 213);
  }
  &:active{
    transform:scale(0.9);
  }
}
</style>
