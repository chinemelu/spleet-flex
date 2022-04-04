<template>
  <div>
    <textarea
      v-bind="$attrs"
      :value="modelValue"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
    },
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
.input-label {
  display: block;
  font-size: $font-size-regular;
}
.create-resource__text-area {
  min-width: 100%;
  height: 10rem;
  padding: 1rem 1.5rem;
  border: 1px solid $light-grey-1;
  border-radius: $border-radius-sm
}
</style>
