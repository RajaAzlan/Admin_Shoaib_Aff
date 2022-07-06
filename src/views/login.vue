<template>
  <section class="authorization bg-white">
    <div class="container-fluid px-0 h-100">
      <div class="row h-100 m-0">
        <div
          class="
            d-lg-block d-md-block d-sm-none d-none
            col-12 col-sm-12 col-md-6 col-lg-6 col-xl-8
            h-100
            p-0
            position-relative
          "
        >
          <div class="image-wrapper position-absolute"></div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 p-0">
          <div class="custom-auto">
            <div class="text-center">
              <router-link to="/" class="logo clearfix text-center">
                <img
                  src="@/assets/images/Logo-Affweb-white.png"
                  alt="logo_image"
                />
              </router-link>
              <p class="mb-1 mt-3 font-16">Hi There!</p>
              <p class="mb-0 font-16">Log in to your dashboard.</p>
            </div>
            <LoginForm />
            <a href="#" class="primary-color">
              <i class="bi bi-shield-lock"></i> Forget Password
            </a>
            <p class="text-center mt-5 font-login mb-0">
              Copyright @ {{ year }} by Mangocoders
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import LoginForm from '@/components/Auth/LoginForm.vue';
export default {
  components: {
    LoginForm,
  },
  setup() {
    const year = new Date().getFullYear();
    return {
      year,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/_auth.scss';
</style>
