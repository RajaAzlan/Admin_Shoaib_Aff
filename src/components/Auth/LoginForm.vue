<template>
  <form class="custom-form my-4" @submit.stop.prevent>
    <div class="col-12">
      <div class="position-relative mb-3">
        <BaseInput label="Email" placeHolder="Type Email" v-model="email" />
        <p v-if="emailValidation == true" class="invalid-message mb-0 pt-2">
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
        <p v-if="passwordValidation == true" class="invalid-message mb-0 pt-2">
          Please Enter Password
        </p>
      </div>
    </div>
    <button
      class="btn btn-primary w-100"
      @click.prevent="loginAuth()"
      :disabled="Loading == true"
    >
      <ButtonLoader v-if="Loading == true" />
      <span v-show="Loading == false">Login</span>
    </button>
  </form>
</template>

<script>
import BaseInput from '@/components/FormFields/BaseInput.vue';
import ButtonLoader from '@/components/ButtonLoader.vue';
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
export default {
  components: {
    BaseInput,
    ButtonLoader,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const emailValidation = ref('');
    const passwordValidation = ref('');
    const router = useRouter();
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
        Loading.value = true;
        router.push({ path: '/support' });
      }
    };
    return {
      email,
      password,
      emailValidation,
      passwordValidation,
      loginAuth,
      Loading,
    };
  },
};
</script>
