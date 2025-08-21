<script setup >
import Header from './components/Header.vue';
</script>

<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style scoped>

.app {
  height: 100dvh;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  overflow: hidden; 
}

.main {
  min-height: 0;
  overflow: auto; 
}

</style>