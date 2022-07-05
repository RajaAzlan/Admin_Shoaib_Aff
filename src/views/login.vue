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
            <form class="custom-form my-4" @submit.stop.prevent>
              <div class="col-12">
                <div class="position-relative mb-3">
                  <BaseInput
                    label="Email"
                    placeHolder="Type Email"
                    v-model="email"
                  />
                  <p
                    v-if="emailValidation == true"
                    class="invalid-message mb-0 pt-2"
                  >
                    Please Enter Email
                  </p>
                </div>
              </div>
              <div class="col-12">
                <div class="position-relative mb-3">
                  <BaseInput
                    label="Password"
                    placeHolder="Type Password"
                    v-model="password"
                  />
                  <p
                    v-if="passwordValidation == true"
                    class="invalid-message mb-0 pt-2"
                  >
                    Please Enter Password
                  </p>
                </div>
              </div>
              <button
                class="btn btn-primary w-100"
                @click.prevent="loginAuth(), (Loading = !Loading)"
                :disabled="Loading == true"
              >
                <ButtonLoader v-if="Loading == true" />
                <span v-show="Loading == false">Login</span>
              </button>
            </form>
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
<script setup>
import { useRouter } from 'vue-router';
import BaseInput from '@/components/FormFields/BaseInput.vue';
import ButtonLoader from '../components/ButtonLoader.vue';
import { ref } from 'vue';
const email = ref('');
const password = ref('');
const emailValidation = ref('');
const passwordValidation = ref('');
const router = useRouter();
const year = new Date().getFullYear();
const Loading = ref(false);
const loginAuth = () => {
  if (email.value.length == 0 && password.value.length == 0) {
    emailValidation.value = true;
    passwordValidation.value = true;
  } else if (email.value.length == 0) {
    emailValidation.value = true;
  } else if (password.value.length == 0) {
    emailValidation.value = false;
    passwordValidation.value = true;
  } else {
    emailValidation.value = false;
    passwordValidation.value = false;
    router.push({ path: '/form' });
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/pages/_auth.scss';
</style>
