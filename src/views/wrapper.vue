<template>
  <div>
    <SideBar />
    <div class="main-content">
      <NavBar />
      <div class="inner-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    SideBar,
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_auth.scss';
@import '@/assets/scss/layout/_wrapper.scss';
</style>
