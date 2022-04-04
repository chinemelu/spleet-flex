<template>
  <div :class="[showLoader ? 'show' : 'hide', 'loader-overlay']">
    <div class="loader-icon">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showLoader: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.loader-overlay {
  position: fixed;
  background-color: rgba(0,0,0,.5);
  z-index: 20;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &.hide {
    display: none
  }
  &.show {
    display: block;
  }
}
.loader-icon {
  border: 1.6rem solid $color-primary;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50% -50%);
  border-radius: 50%;
  border-top: 16px solid $light-grey-2;
  width: 7rem;
  height: 7rem;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
