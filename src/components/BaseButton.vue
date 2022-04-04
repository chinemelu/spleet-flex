<template>
  <button class="base-button" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  border: none;
  transition: 250ms opacity ease-in;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: $light-grey-1;
    color: $primary-white;
  }
}
</style>
