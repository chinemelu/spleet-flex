<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    const handleInput = (event) => {
      emit('update:modelValue', event.target.value);
    };
    return { handleInput };
  },
};
</script>

<style lang="scss" scoped>

</style>
