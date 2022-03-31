<template>
  <div class="landing-page">
    <!-- Mobile Navbar -->
    <nav class="landing-page__mobile-navbar">
      <label for="sidebar-toggle" class="landing-page__sidebar-toggle-label">
        <img src="/icons/menu-line(black).png" alt="hamburger menu for mobile navbar" />
      </label>
      <img
        src="/logos/flex-black-text-logo.png"
        alt="Flex mobile logo"
        class="landing-page__flex-mobile-navbar-logo"
      />
    </nav>
    <div class="landing-page__inner-container">

    <!-- Checkbox that will trigger the sidebar  -->

    <input id="sidebar-toggle" type="checkbox" class="landing-page__sidebar-toggle" />

    <!-- End of checkbox that will trigger the sidebar -->

    <!-- Mobile sidebar  -->
      <ul class="landing-page__mobile-sidebar">
        <li class="landing-page__mobile-sidebar__menu-item">
          <img
            alt="Login Icon"
            src="/icons/shut-down-line.png"
            class="landing-page__mobile-sidebar__menu-item-icon"
          />
          <span class="landing-page__mobile-sidebar__menu-item-text">Log In</span>
        </li>
        <li class="landing-page__mobile-sidebar__menu-item">
          <img
            alt="Sign up Icon"
            src="/icons/user-line.png"
            class="landing-page__mobile-sidebar__menu-item-icon"
          />
          <span class="landing-page__mobile-sidebar__menu-item-text">Sign up</span>
        </li>
        <li class="landing-page__mobile-sidebar__menu-item">
          <img
            alt="Product Icon"
            src="/icons/tools-line.png"
            class="landing-page__mobile-sidebar__menu-item-icon"
          />
          <span class="landing-page__mobile-sidebar__menu-item-text">Product</span>
        </li>
        <li class="landing-page__mobile-sidebar__menu-item">
          <img
            alt="Features icon"
            src="/icons/apps-line.png"
            class="landing-page__mobile-sidebar__menu-item-icon"
          />
          <span class="landing-page__mobile-sidebar__menu-item-text">Features</span>
        </li>
        <li class="landing-page__mobile-sidebar__menu-item">
          <img
            alt="Resources Icon"
            src="/icons/questionnaire-line.png"
            class="landing-page__mobile-sidebar__menu-item-icon" />
          <span class="landing-page__mobile-sidebar__menu-item-text">Resources</span>
        </li>
        <li class="landing-page__mobile-sidebar__menu-item">
          <img
            alt="Pricing Icon"
            src="/icons/money-dollar-box-fill.png"
            class="landing-page__mobile-sidebar__menu-item-icon"
          />
          <span class="landing-page__mobile-sidebar__menu-item-text">Pricing</span>
        </li>
      </ul>

        <!-- FIRST SECTION -->
      <section class="landing-page__introduction-section text-center">
        <div class="landing-page__introduction-text-container--outer br-sm pt-lg pb-lg">
          <div class="landing-page__introduction-text-container--inner margin-center">

            <span
              class="landing-page__introduction-text-container__heading d-inline-block
              text-upper bg-primary-color text-white br-md pl-sm pr-sm pt-sm pb-sm mb-sm">
              header
            </span>
            <img
              src="/patterns/green-dot-pattern.png"
              alt="Green dot pattern for introductory section"
              class="landing-page__introduction-text-container__dot-pattern top-right"
            />
            <img
              src="/patterns/half-orange-fp-pattern.png"
              alt="Half orange fingerprint lik pattern for introductory section"
              class="landing-page__introduction-text-container__fp-pattern top-left"
            />
            <img
              src="/patterns/red-fp-pattern.png"
              alt="Red fingerprint like pattern for introductory section"
              class="landing-page__introduction-text-container__fp-pattern bottom-right"
            />
            <img
              src="/patterns/purple-dot-pattern.png"
              alt="Purple dot pattern for introductory section"
              class="landing-page__introduction-text-container__dot-pattern bottom-left"
            />
            <h1 class="text-white">A small business is only as good as its tools.</h1>
            <p class="text-light-grey-3 mt-sm">We’re different. Flex is the only saas business
              platform that lets you run your business on one platform, seamlessly across
              all digital channels.</p>
              <!-- Button && Input Section -->
              <form class="landing-page__introduction-text-container__btn-input-section mt-sm">
                <div
                  class="landing-page__introduction-text-container__input-container
                  br-sm">
                  <img
                    src="/icons/input-mail-icon.png"
                    alt="Mail Icon"
                    class="landing-page__introduction-text-container__input-mail-icon ml-sm"
                  />
                  <BaseInput
                    class="landing-page__introduction-text-container__input"
                    v-model="workEmail" placeholder="Enter your work email"
                  />
                </div>
                <BaseButton
                  type="submit"
                  class="landing-page__introduction-text-container__btn text-white
                  bg-primary-color br-sm pt-sm pl-sm pr-sm pb-sm ml-sm">
                  Get early access
                </BaseButton>
              </form>
              <p class="text-light-grey-3 mt-sm">
                Start your free 14-day trial today, no credit card required.
              </p>
          </div>
        </div>

        <!-- End of Black Background Introduction Section -->
        <div class="landing-page__introduction-section__clients">
          <p class="text-light-grey-2 mt-md mb-sm">Join 4,000+ companies already growing</p>
          <img
            src="/patterns/radial-pattern.png"
            class="landing-page__introduction-section__radial-pattern"
            alt="Radial Pattern"
          />
          <div class="landing-page__introduction-section__companies">
            <img src="/logos/jiggle-logo.png"
              class="landing-page__introduction-section__company-logo"
              alt="Jiggle Company Logo"
            />
            <img
              src="/logos/symtric-logo.png"
              class="landing-page__introduction-section__company-logo"
              alt="Symtric Company Logo"
            />
            <img
              src="/logos/wishelp-logo.png"
              class="landing-page__introduction-section__company-logo"
              alt="Wishelp Company Logo"
            />
            <img
              src="/logos/resecurb-logo.png"
              class="landing-page__introduction-section__company-logo"
              alt="Resecurb Company Logo"
            />
            <img
              src="/logos/welytics-logo.png"
              class="landing-page__introduction-section__company-logo"
              alt="Welytics Company Logo"
            />

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const workEmail = ref('');
    return { workEmail };
  },
};
</script>

<style lang="scss" scoped>
.landing-page {
  @include mobile-only {
    position: relative;
  }
  &__mobile-navbar {
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: $box-shadow-mobile-navbar;
  }
  &__flex-mobile-navbar-logo {
    width: 8rem;
    height: auto;
    align-self: center;
  }
  &__sidebar-toggle-label {
    display: flex;
  }
  &__sidebar-toggle {
    visibility: hidden;
    position: absolute;
    z-index: -1;
    &:checked ~ .landing-page__mobile-sidebar {
      transform: translateX(0);
    }
  }
  &__mobile-sidebar {
    transform: translateX(-100%);
    transition: 250ms transform ease-out;
    list-style: none;
    box-shadow: $box-shadow-sidebar;
    background-color: $primary-white;
    width: 90%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 6.7rem; // must be greater than height of navbar
    z-index: 10;
    &__menu-item {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      padding: 1.5rem 2rem;
      margin-bottom: 0;
      border-bottom: 1px solid $light-grey-1;
    }
    &__menu-item-icon {
      width: 3rem;
      height: 3rem;
    }
    &__menu-item-text {
      font-size: $font-size-regular;
      margin-left: 2rem;
    }
  }
  &__introduction-section {
    @include mobile-only {
      background: $bg-grey;
      padding: $mobile-section-padding;
    }
    &__clients {
      position: relative;
      z-index: 2;
      &::after {
        content: '';
        background: url('/images/BG-Wave.png');
        position: absolute;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 3rem;
        @include mobile-only {
          left: -2rem; // must match the padding of the section
        }
      }
    }
    &__radial-pattern {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      height: 100%;
      z-index: -1;
    }
    &__companies {
      @include mobile-only {
        display: grid;
        grid-template-columns: repeat(auto-fill, 30%);
        justify-content: space-between;
      }
    }
    &__company-logo {
      @include mobile-only {
        width: 100%;
        height: auto;
        margin-bottom: 2rem;
      }
    }
  }
  &__introduction-text-container {
    &--outer {
      background: $bg-dark;
      position: relative;
    }
    &--inner {
      padding: 1.5rem 1rem;
      width: 75%;
      text-align: center;
    }
    &__heading {
      font-size: $font-size-small;
    }
    &__fp-pattern {
      @include mobile-only {
        width: auto;
        height: 5rem;
        position: absolute;
      }
      &.top-left {
        top: 0;
        left: 0;
      }
      &.bottom-right {
        bottom: 0;
        right: 0;
      }
    }
    &__dot-pattern {
      @include mobile-only {
        width: 5rem;
        height: auto;
        position: absolute;
      }
      &.top-right {
        top: 7px;
        right: 7px;
      }
      &.bottom-left {
        bottom: 7px;
        left: 7px;
      }
    }
    &__btn-input-section {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }
    &__btn {
      font-size: 1rem;
      align-self: flex-end;
    }
    &__input-container {
      display: inline-flex;
      align-items: center;
      background: $primary-white;
      width: 70%;
      border-radius: $border-radius-sm;
    }
    &__input-mail-icon {
      width: 1.5rem;
      height: auto;
    }
    &__input {
      padding: 0 1rem;
      font-size: $font-size-small;
      color: $dark-grey-1;
      border: none;
      border-radius: $border-radius-sm;
    }
  }
}
</style>
