<template>
  <div class="row">
    <form action="" class="custom-form py-2">
      <div class="col-12 mb-4">
        <div class="position-relative form-group row mx-0">
          <label
            class="col-lg-4 col-md-4 col-sm-4 col-12 mb-lg-0 mb-md-0 mb-sm-0 mb-1 ps-0 align-self-center"
          >
            Enter Name
          </label>
          <input
            class="col-lg-8 col-md-8 col-sm-8 col-12 mt-0"
            type="text"
            placeholder="Type Name"
          />
        </div>
      </div>
      <div class="col-12 mb-4">
        <div class="position-relative form-group row mx-0">
          <label
            class="col-lg-4 col-md-4 col-sm-4 col-12  mb-lg-0 mb-md-0 mb-sm-0 mb-1 ps-0 align-self-center"
          >
            Type Email
          </label>
          <input
            class="col-lg-8 col-md-8 col-sm-8 col-12 mt-0"
            type="email"
            placeholder="Type Email"
          />
        </div>
      </div>
      <div class="col-12">
        <div class="position-relative form-group row mx-0">
          <label
            class="col-lg-4 col-md-4 col-sm-4 col-12  mb-lg-0 mb-md-0 mb-sm-0 mb-1 ps-0 align-self-center"
          >
            Select Type
          </label>
          <div class="col-lg-8 col-md-8 col-sm-8 col-12 px-0">
            <select
              class="form-select shadow-none mt-0"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">Admin</option>
              <option value="2">Client</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/layout/_form.scss';
</style>
