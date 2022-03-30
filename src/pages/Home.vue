<template>
  <div class="landing-page">
    <input id="sidebar-toggle" type="checkbox" class="landing-page__sidebar-toggle" />
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
        <img src="/icons/apps-line.png" class="landing-page__mobile-sidebar__menu-item-icon" />
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
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.landing-page {
  @include mobile-only {
    height: 100vh;
    overflow-y: hidden;
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
    &:checked ~ .landing-page__mobile-sidebar {
      transform: translateX(0);
    }
  }
  &__mobile-sidebar {
    transform: translateX(-100%);
    transition: 250ms transform ease-out;
    list-style: none;
    box-shadow: $box-shadow-sidebar;
    width: 90%;
    height: 100%;
    margin-top: 2px;
    &__menu-item {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      padding: 1.5rem 2rem;
      &:not(:last-child) {
        border-bottom: 1px solid $light-grey-1;
      }
    }
    &__menu-item-icon {
      width: 3rem;
      height: 3rem;
    }
    &__menu-item-text {
      font-size: 1.5rem;
      margin-left: 2rem;
    }
  }
}
</style>
