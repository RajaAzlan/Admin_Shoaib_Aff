<template>
  <label v-if="props.label">{{ label }}</label>
  <input
    class="w-100"
    type="text"
    v-bind="$attrs"
    :placeholder="props.placeHolder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
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
});
</script>
<style lang="scss" scoped>
@import '@/assets/scss/layout/_form.scss';
</style>
