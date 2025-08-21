<script setup>

</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 10px 20px;
  background-color: #8C1007;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;
}
.button:hover {
  background-color: #660B05;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
