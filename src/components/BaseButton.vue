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
}
</style>
