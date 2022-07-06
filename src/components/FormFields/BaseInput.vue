<template>
  <label v-if="label">{{ label }}</label>
  <input
    class="w-100"
    type="text"
    v-bind="$attrs"
    :placeholder="placeHolder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    placeHolder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/layout/_form.scss';
</style>
