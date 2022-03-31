<template>
  <div class="what-we-do">
    <img :alt="val.alt" :src="val.imgSrc" class="what-we-do__icon"/>

    <h1 class="what-we-do__primary-text text-black mb-sm mt-xs">{{ val.primaryText }}</h1>
    <p class="what-we-do__secondary-text text-dark-grey-2">{{ val.secondaryText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      type: Object,
      default: () => ({
        alt: {
          type: String,
        },
        imgSrc: {
          type: String,
        },
        primaryText: {
          type: String,
        },
        secondaryText: {
          type: String,
        },
      }),
    },
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.what-we-do {
  &__icon {
    @include mobile-only {
      width: 4rem;
      height: auto;
    }
  }
  &__primary-text {
    @include mobile-only {
      height: auto;
    }
  }
}
</style>
