<template>
  <aside class="sidebar position-fixed">
    <div class="logo position-relative d-lg-block d-md-none d-sm-none d-none">
      <router-link to="/" class="d-block mx-auto py-3">
        <img
          src="@/assets/images/Logo-Affweb-white.png"
          class="w-100 h-100"
          alt="affwebs-logo"
        />
        <img
          src="@/assets/images/favicon.ico.png"
          class="w-100 h-100"
          alt="affwebs-favicon"
        />
      </router-link>
    </div>
    <div class="sidelinks-wrapper">
      <ul class="list-unstyled p-0">
        <li>
          <router-link to="/support" class="d-flex align-items-center">
            <span
              class="d-flex justify-content-center align-items-center icon-box"
            >
              <img
                src="@/assets/images/admin-panel/support.png"
                alt="credit-card"
              />
            </span>
            <p class="mb-0">Support</p>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/_sidebar.scss';
</style>
