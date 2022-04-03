<template>
  <div :class="[isFlexOrientation ? 'flex' : '', 'what-we-do']">
    <div class="what-we-do__icon-primary-text-container">
      <img :alt="val.alt" :src="val.imgSrc" class="what-we-do__icon"/>
      <h1 class="what-we-do__primary-text text-black mb-sm mt-xs">{{ val.primaryText }}</h1>
    </div>
    <p class="what-we-do__secondary-text text-dark-grey-2">{{ val.secondaryText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    isFlexOrientation: {
      type: Boolean,
      default: false,
    },
    val: {
      type: Object,
      default: () => ({
        alt: {
          type: 'String',
          default: '',
        },
        imgSrc: {
          type: String,
          default: '',
        },
        primaryText: {
          type: String,
          default: '',
        },
        secondaryText: {
          type: String,
          default: '',
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
  &.flex {
    text-align: left;
    & > .what-we-do__icon-primary-text-container {
      @include flex-align-center;
    }
    & .what-we-do__icon {
      width: 3rem;
    }
    & > .what-we-do__icon-primary-text-container > .what-we-do__primary-text {
      margin-left: 1rem;
      margin-bottom: 0;
      margin-top: 0;
    }
    & > .what-we-do__text-container > .what-we-do__primary-text {
      line-height: $desktop-plus-font-size-medium;
      margin-left: 2rem;
      border: 1px solid;
    }
    & > .what-we-do__secondary-text {
      margin-top: 1rem;
      margin-left: 4rem; // 3rem width of icon + 1rem margin left from primary-text
    }
  }
  &__icon {
    width: 4rem;
    height: auto;
    @include tablet-landscape-up {
      width: 5rem;
      font-size: $desktop-plus-font-size-medium
    }
    @include desktop-up {
      font-size: $big-desktop-plus-font-size-medium;
    }
  }
  &__primary-text {
   font-size: 1.5rem;
    @include tablet-landscape-up {
      font-size: $big-desktop-plus-font-size-small;
    }
    @include big-desktop-up {
      font-size: $big-desktop-plus-font-size-medium;
    }
  }
  &__secondary-text {
    font-size: $font-size-small;
    @include tablet-landscape-up {
      font-size: $desktop-plus-font-size-small
    }
    @include big-desktop-up {
      font-size: $big-desktop-plus-font-size-xtra-small;
    }
  }
}
</style>
