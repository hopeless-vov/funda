<template>
  <div class="main-layout">
    <navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar/Navbar.vue';
export default {
  name: 'MainLayout',
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
</style>
