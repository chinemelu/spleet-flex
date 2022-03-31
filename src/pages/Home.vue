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

        <!-- Start of First Section -->
      <section class="landing-page__introduction-section bg-grey text-center">
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

        <!-- Start of area showing clients and their logos -->
        <div class="landing-page__introduction-section__clients">
          <p class="text-light-grey-2 mt-md mb-sm">Join 4,000+ companies already growing</p>
          <img
            src="/patterns/radial-pattern-grey.png"
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
        <!-- End of area showing clients -->
      </section>
      <!-- End of First Section -->

      <!--  Start of What we Do Section  -->

      <section class="landing-page__what-we-do mt-lg text-center">
        <img
          src="/patterns/radial-pattern-white.png"
          class="landing-page__what-we-do__radial-pattern"
          alt="Radial Pattern"
        />
        <div>
          <span
            class="landing-page__what-we-do__heading d-inline-block
            text-upper bg-color-primary-light text-color-primary
            br-md pl-sm pr-sm pt-sm pb-sm mb-sm">
            features
          </span>
          <div class="landing-page__what-we-do__titles margin-center">
            <h1>Gain more insight into how people use your</h1>
            <p class="text-dark-grey-2 mt-sm">With our integrated CRM, project management,
              collaboration and invoicing capabilities,
              you can manage every aspect of your business in one secure platform.</p>
          </div>
        </div>

        <div class="landing-page__what-we-do__items mt-md">
          <WhatWeDo
            class="landing-page__what-we-do__item mb-md"
            v-for="(val, index) in whatWeDoItems"
            :key="index"
            :val="val"
          />
        </div>

<!-- Beginning of Gettting Started Black Background Box -->
        <div class="landing-page__get-started-box bg-dark-1 mt-sm">
          <div>
            <h1 class="text-white">The fastest way from idea to live site. Period.</h1>
            <p class="text-light-grey-3 mt-sm">Flex is a Small SaaS Business.
              Flex isn’t a traditional company.</p>
          </div>
          <div class="landing-page__get-started-box__btns" >
            <BaseButton
              type="submit"
              class="landing-page__get-started-box__btn text-white bg-primary-color br-sm">
              Get Started
            </BaseButton>
            <BaseButton
              type="submit"
              class="landing-page__get-started-box__btn br-sm text-dark-grey-3">
              Learn More
            </BaseButton>
          </div>
        </div>
      <!-- End of Getting Started Black Background Box -->

      </section>
<!-- End of First Part of What We do -->

<!-- Beginning of Second Part of What We do -->
      <section class="mt-lg landing-page__what-we-do-II bg-grey">
        <img
            src="/patterns/radial-pattern-white.png"
            class="landing-page__what-we-do-II__radial-pattern"
            alt="Radial Pattern"
          />
        <div class="text-center landing-page__what-we-do-II__features-text-container">
          <span
            class="landing-page__what-we-do__heading d-inline-block
            text-upper bg-color-primary-light text-color-primary
            br-md pl-sm pr-sm pt-sm pb-sm mb-sm">
            features
          </span>
        </div>
        <div class="landing-page__what-we-do-II__titles margin-center text-center">
          <h1>Gain more insight into how people use your</h1>
          <p class="text-dark-grey-2 mt-sm">With our integrated CRM, project management,
            collaboration and invoicing capabilities,
            you can manage every aspect of your business in one secure platform.</p>
        </div>

        <div class="landing-page__what-we-do-II__container--outer">
          <div class="landing-page__what-we-do-II__container--inner mt-md text-center">
            <WhatWeDo
              class="landing-page__what-we-do-II__item margin-center"
              v-for="(val, index) in whatWeDoItemsII"
              :key="index"
              :val="val"
            />
          </div>
          <div class="landing-page__what-we-do-II__image-container text-center mt-lg">
            <img
              src="/images/laptop-img.png"
              alt="Laptop image for second part of what we do"
              class="landing-page__what-we-do-II__image"
            />
            <img
              src="/patterns/blue-dot-pattern.png"
              alt="Blue dot pattern for what we do section"
              class="landing-page__what-we-do-II__pattern bottom-right"
            />
            <img
              src="/patterns/orange-fp-pattern.png"
              alt="Full orange fingerprint lik pattern for what we do section"
              class="landing-page__what-we-do-II__pattern top-left"
            />
          </div>
        </div>
      </section>
      <!-- End of Second Part of What We do -->

<!-- Beginning of Third Part of What We do -->
      <section class="landing-page__what-we-do-III bg-grey">
        <img
            src="/patterns/radial-pattern-white.png"
            class="landing-page__what-we-do-III__radial-pattern"
            alt="Radial Pattern"
          />
        <div class="text-center landing-page__what-we-do-III__features-text-container">
          <span
            class="landing-page__what-we-do__heading d-inline-block
            text-upper bg-color-primary-light text-color-primary
            br-md pl-sm pr-sm pt-sm pb-sm mb-sm">
            features
          </span>
        </div>
        <div class="landing-page__what-we-do-III__titles margin-center text-center">
          <h1>Gain more insight into how people use your</h1>
          <p class="text-dark-grey-2 mt-sm">With our integrated CRM, project management,
            collaboration and invoicing capabilities,
            you can manage every aspect of your business in one secure platform.</p>
          <BaseButton
            type="submit"
            class="landing-page__what-we-do-III__btn text-white
            bg-primary-color br-sm pt-md pl-md pr-md pb-md ml-sm mt-sm">
            Get Started
          </BaseButton>
        </div>

        <div class="landing-page__what-we-do-III__container--outer">
          <div class="landing-page__what-we-do-III__container--inner mt-md text-center">
            <WhatWeDo
              class="landing-page__what-we-do-III__item margin-center"
              v-for="(val, index) in whatWeDoItemsII"
              :key="index"
              :val="val"
            />
          </div>
          <div class="landing-page__what-we-do-III__image-container text-center mt-lg">
            <img
              src="/images/laptop-img.png"
              alt="Laptop image for second part of what we do"
              class="landing-page__what-we-do-III__image"
            />
            <img
              src="/patterns/blue-dot-pattern.png"
              alt="Blue dot pattern for what we do section"
              class="landing-page__what-we-do-III__pattern bottom-right"
            />
            <img
              src="/patterns/orange-fp-pattern.png"
              alt="Full orange fingerprint lik pattern for what we do section"
              class="landing-page__what-we-do-III__pattern top-left"
            />
          </div>
        </div>
      </section>
  <!-- End of Third Part of What We do -->

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import WhatWeDo from '@/components/WhatWeDo.vue';

export default {
  components: {
    WhatWeDo,
  },
  setup() {
    const workEmail = ref('');
    const whatWeDoItems = [
      {
        alt: 'Measure performance',
        imgSrc: '/icons/email-icon.png',
        primaryText: 'Measure your performance',
        secondaryText: 'Stay connected with your team and make quick decisions wherever you are.',
      },
      {
        alt: 'Custom analytics',
        imgSrc: '/icons/custom-analytics-icon.png',
        primaryText: 'Custom analytics',
        secondaryText: 'Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.',
      },
      {
        alt: 'Team Management',
        imgSrc: '/icons/team-management-icon.png',
        primaryText: 'Team Management',
        secondaryText: 'Our calendar lets you know what is happening with customer and projects so you',
      },
      {
        alt: 'Build your website',
        imgSrc: '/icons/build-website-icon.png',
        primaryText: 'Build your website',
        secondaryText: 'A tool that lets you build a dream website even if you know nothing about web design or programming.',
      },
      {
        alt: 'Connect multiple apps',
        imgSrc: '/icons/connect-apps-icon.png',
        primaryText: 'Connect multiple apps',
        secondaryText: 'The first business platform to bring together all of your products from one place.',
      },
      {
        alt: 'Easy setup',
        imgSrc: '/icons/easy-setup-icon.png',
        primaryText: 'Easy setup',
        secondaryText: 'End to End Business Platform, Sales Management, Marketing Automation, Help Desk',
      },
    ];

    const whatWeDoItemsII = [
      {
        alt: 'Measure performance',
        imgSrc: '/icons/email-icon.png',
        primaryText: 'Measure your performance',
        secondaryText: 'Stay connected with your team and make quick decisions wherever you are.',
      },
      {
        alt: 'Build your website',
        imgSrc: '/icons/build-website-icon.png',
        primaryText: 'Build your website',
        secondaryText: 'A tool that lets you build a dream website even if you know nothing about web design or programming.',
      },
      {
        alt: 'Connect multiple apps',
        imgSrc: '/icons/connect-apps-icon.png',
        primaryText: 'Connect multiple apps',
        secondaryText: 'The first business platform to bring together all of your products from one place.',
      },
    ];
    return { workEmail, whatWeDoItems, whatWeDoItemsII };
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
    @include flex-justify-between;
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
      @include radial-pattern;
    }
    &__companies {
      @include mobile-only {
        @include grid-justify-content;
        grid-template-columns: repeat(auto-fill, 30%);
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
      background: $primary-black;
      position: relative;
    }
    &--inner {
      padding: 1.5rem 1rem;
      width: $mobile-width-percentage;
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
      @include flex-justify-between;
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
  &__what-we-do {
    position: relative;
    @include mobile-only {
      padding: $mobile-section-padding;
    }
    &__titles {
      @include mobile-only {
        width: $mobile-width-percentage;
      }
    }
    &__radial-pattern {
      @include radial-pattern;
    }
    &__items {
      @include mobile-only {
        @include grid-justify-content;
        grid-template-columns: repeat(auto-fill, 45%);
      }
    }
  }
  &__get-started-box {
    padding: 1.5rem 1rem;
    @include flex-justify-between;
    align-items: center;
    &__btns {
      text-align: right;
    }
    &__btn {
      @include mobile-only {
        margin-bottom: 1rem;
        padding: 1rem;
        font-size: $font-size-small
      }
    }
  }
  &__what-we-do-II {
    position: relative;
    @include mobile-only {
      padding: $mobile-section-padding;
    }
    &__titles {
      @include mobile-only {
        width: $mobile-width-percentage;
      }
    }
    &__item {
      @include mobile-only {
        margin-top: 3rem;
        width: $mobile-width-percentage;
      }
    }
    &__container {
      &--outer {
        @include mobile-only {
          display: flex;
          flex-direction: column;
        }
      }
      &--inner {
        @include mobile-only {
          flex-direction: column;
        }
      }
    }
    &__image {
      @include mobile-only {
        width: 80%;
        height: auto;
      }
    }
    &__image-container {
      position: relative;
    }
    &__pattern {
      @include mobile-only {
        width: 7rem;
      }
      height: auto;
      position: absolute;
      &.top-left {
        top: -2rem;
        left: 1rem;
      }
      &.bottom-right {
        bottom: -2rem;
        right: 1.5rem;
      }
    }
    &__radial-pattern {
      @include radial-pattern;
    }
  }
   &__what-we-do-III {
    position: relative;
    @include mobile-only {
      padding: $mobile-section-padding;
    }
    &__titles {
      @include mobile-only {
        width: $mobile-width-percentage;
      }
    }
    &__item {
      @include mobile-only {
        margin-top: 3rem;
        width: $mobile-width-percentage;
      }
    }
    &__btn {
      font-size: $font-size-small
    }
    &__container {
      &--outer {
        @include mobile-only {
          display: none;
        }
      }
    }
    &__image {
      @include mobile-only {
        display: none;
      }
    }
    &__image-container {
      position: relative;
    }
    &__pattern {
      @include mobile-only {
        display: none;
      }
    }
    &__radial-pattern {
      @include radial-pattern;
    }
  }
}
</style>
