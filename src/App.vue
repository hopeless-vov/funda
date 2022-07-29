<template>
  <div class="app">
    <component
      :is="layout" />
  </div>
</template>
<script>
import MainLayout from '@/views/main-layout';

export default {
  components: {
    MainLayout,
  },
  computed: {
    layout() {
      return (this.$route?.meta?.layout || 'main') + '-layout';
    },
  },
};
</script>
<style lang="scss" src="./app.scss">
</style>
