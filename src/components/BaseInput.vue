<template>
  <input
    :id="uniqueId"
    v-bind="$attrs"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script>
import shortId from 'shortid';

export default {
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const uniqueId = shortId.generate();
    const handleInput = (event) => {
      emit('update:modelValue', event.target.value);
    };
    return { handleInput, uniqueId };
  },
};
</script>

<style lang="scss" scoped>
.create-resource__input {
  font-size: $font-size-regular;
  padding: 1rem 1.5rem;
  border-radius: $border-radius-sm;
  border: 1px solid $light-grey-1;
}
</style>
