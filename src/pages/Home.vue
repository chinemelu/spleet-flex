<template>
  <div class="landing-page">
    <!-- Mobile Navbar -->
    <nav class="landing-page__navbar">
      <label for="sidebar-toggle" class="landing-page__sidebar-toggle-label">
        <img src="/icons/menu-line(black).png" alt="hamburger menu for mobile navbar" />
      </label>
      <img
        src="/logos/flex-black-text-logo.png"
        alt="Flex mobile logo"
        class="landing-page__flex-navbar-logo"
      />

       <!-- Desktop nav menu  -->
      <ul class="landing-page__desktop-nav-menu text-dark-grey-2">
        <li class="landing-page__desktop-nav-menu__menu-item">
          <span class="landing-page__desktop-nav-menu__menu-item-text">Product</span>
        </li>
        <li class="landing-page__desktop-nav-menu__menu-item">
          <span class="landing-page__desktop-nav-menu__menu-item-text">Features</span>
        </li>
        <li class="landing-page__desktop-nav-menu__menu-item">
          Pricing
        </li>
        <li class="landing-page__desktop-nav-menu__menu-item">
          <span class="landing-page__desktop-nav-menu__menu-item-text">Resources</span>
        </li>
      </ul>

      <div class="landing-page__desktop-nav-menu__login-signup-container">
        <router-link class="landing-page__desktop-nav-menu__login-text" to="#">Login</router-link>
        <BaseButton
          class="landing-page__introduction-text-container__btn text-white
          bg-primary-color br-sm pt-sm pl-sm pr-sm pb-sm ml-sm">
          Sign up
        </BaseButton>
      </div>
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
      <!-- End of mobile sidebar -->

        <!-- Start of First Section -->
      <section class="landing-page__introduction-section bg-grey text-center">
         <img
          src="/images/BG-Wave.png"
          alt="Mail Icon"
          class="landing-page__introduction-section__background-wave"
        />

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
            <h1 class="landing-page__introduction-text-container__primary-heading--main
            text-white">A small business is only as good as its tools.</h1>
            <p class="landing-page__introduction-text-container__primary-heading--sub
            text-light-grey-3 mt-sm">We’re different. Flex is the only saas business
              platform that lets you run your business on one platform, seamlessly across
              all digital channels.</p>
              <!-- Button && Input Section -->
              <form class="landing-page__introduction-text-container__btn-input-section
                margin-center mt-sm">
                  <div
                    class="landing-page__introduction-text-container__input-container
                    br-sm"
                  >
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
              <p class="landing-page__introduction-text-container__secondary-heading
               text-light-grey-3 mt-sm">
                Start your free 14-day trial today, no credit card required.
              </p>
          </div>
        </div>

        <!-- End of Black Background Introduction Section -->

        <!-- Start of area showing clients and their logos -->
        <div class="landing-page__introduction-section__clients">
          <p class="landing-page__introduction-section__primary-heading
          text-light-grey-2 mt-md mb-sm">
            Join 4,000+ companies already growing
          </p>
           <picture>
            <source
              srcset="/patterns/radial-pattern-grey.png"
              type="image/png"
            >
            <img
              src="/patterns/radial-pattern-grey.png"
              class="landing-page__introduction-section__radial-pattern"
              alt="Radial Pattern"
            />
           </picture>
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
        <picture>
          <source
            srcset="/patterns/radial-pattern-white.png"
            type="image/png"
          >
          <img
            src="/patterns/radial-pattern-white.png"
            class="landing-page__what-we-do__radial-pattern"
            alt="Radial Pattern"
          />
        </picture>
        <div>
          <span
            class="landing-page__what-we-do__heading d-inline-block
            text-upper bg-color-primary-light text-color-primary
            br-md pl-sm pr-sm pt-sm pb-sm mb-sm">
            features
          </span>
          <div class="landing-page__what-we-do__titles margin-center">
            <h1 class="landing-page__what-we-do__primary-heading--main">
              Gain more insight into how people use your
            </h1>
            <p class="landing-page__what-we-do__primary-heading--sub text-dark-grey-2 mt-sm">
              With our integrated CRM, project management, collaboration and invoicing capabilities,
              you can manage every aspect of your business in one secure platform.</p>
          </div>
        </div>

        <div class="landing-page__what-we-do__items mt-lg">
          <WhatWeDo
            class="landing-page__what-we-do__item mb-md"
            v-for="(val, index) in whatWeDoItems"
            :key="index"
            :val="val"
          />
        </div>
<!-- Beginning of Gettting Started Black Background Box -->
        <div class="landing-page__get-started-box bg-dark-1 mt-sm">
          <div class="landing-page__get-started-box__headings">
            <h1 class="landing-page__get-started-box__primary-heading--main
            text-white">The fastest way from idea to live site. Period.</h1>
            <p class="landing-page__get-started-box__primary-heading--sub
            text-light-grey-3 mt-sm">Flex is a Small SaaS Business.
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
              class="landing-page__get-started-box__btn br-sm text-dark-grey-3 bg-white">
              Learn More
            </BaseButton>
          </div>
        </div>
      <!-- End of Getting Started Black Background Box -->

      </section>
<!-- End of First Part of What We do -->

<!-- Beginning of Second Part of What We do -->
      <section class="landing-page__what-we-do-II bg-grey">
        <picture>
          <source
            srcset="/patterns/radial-pattern-grey.png"
            type="image/png"
          >
          <img
            src="/patterns/radial-pattern-grey.png"
            class="landing-page__what-we-do-II__radial-pattern"
            alt="Radial Pattern"
          />
        </picture>
        <div class="text-center landing-page__what-we-do-II__features-text-container">
          <span
            class="landing-page__what-we-do__heading d-inline-block
            text-upper bg-color-primary-light text-color-primary
            br-md pl-sm pr-sm pt-sm pb-sm mb-sm">
            features
          </span>
        </div>
        <div class="landing-page__what-we-do-II__titles margin-center text-center">
          <h1 class="landing-page__what-we-do-II__primary-heading--main">
            Gain more insight into how people use your
          </h1>
          <p class="landing-page__what-we-do-II__primary-heading--sub
          text-dark-grey-2 mt-sm">
            With our integrated CRM, project management,
            collaboration and invoicing capabilities,
            you can manage every aspect of your business in one secure platform.</p>
        </div>

        <div class="landing-page__what-we-do-II__container--outer">
          <div class="landing-page__what-we-do-II__container--inner text-center">
            <WhatWeDo
              isFlexOrientation
              class="landing-page__what-we-do-II__item margin-center"
              v-for="(val, index) in whatWeDoItemsII"
              :key="index"
              :val="val"
            />
          </div>
          <div class="landing-page__what-we-do-II__image-container text-center mt-lg">
            <picture>
              <source
                media="(max-width: 599px)"
                srcset="images/laptop-img-mobile.webp"
                type="image/webp"
              >
              <source
                media="(max-width: 599px)"
                srcset="images/laptop-img-mobile.png"
                type="image/png"
              >
              <source
                media="(min-width: 600px)"
                srcset="images/laptop-img.webp"
                type="image/webp"
              >
              <source
                media="(min-width: 600px)"
                srcset="images/laptop-img.png"
                type="image/png"
              >
              <img
                src="/images/laptop-img.png"
                alt="Laptop image for second part of what we do"
                class="landing-page__what-we-do-II__image"
              />
            </picture>
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
        <picture>
          <source srcset="/patterns/radial-pattern-grey.png">
          <img
            src="/patterns/radial-pattern-grey.png"
            class="landing-page__what-we-do-III__radial-pattern"
            alt="Radial Pattern"
          />
        </picture>
        <div class="landing-page__what-we-do-III__container--outer">
          <div class="landing-page__what-we-do-III__titles margin-center text-center">
            <span
              class="landing-page__what-we-do__heading landing-page__what-we-do-III__heading
              d-inline-block text-upper bg-color-primary-light text-color-primary
              br-md pl-sm pr-sm pt-sm pb-sm mb-sm">
              features
            </span>
            <h1 class="landing-page__what-we-do-III__primary-heading--main">
              Gain more insight into how people use your
            </h1>
            <p class="landing-page__what-we-do-III__primary-heading--sub text-dark-grey-2 mt-sm">
              With our integrated CRM, project management,
              collaboration and invoicing capabilities,
              you can manage every aspect of your business in one secure platform.
            </p>
            <BaseButton
              type="submit"
              class="landing-page__what-we-do-III__btn text-white
              bg-primary-color br-sm pt-md pl-md pr-md pb-md mt-sm">
              Get Started
            </BaseButton>
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

<!-- Beginning of Staying Connected Section -->
      <section class="landing-page__staying-connected bg-white">
         <picture>
          <source srcset="/patterns/radial-pattern-white.png">
          <img
            src="/patterns/radial-pattern-white.png"
            class="landing-page__staying-connected__radial-pattern"
            alt="Radial Pattern"
          />
        </picture>
        <div class="text-center landing-page__staying-connected__features-text-container">
          <span
            class="landing-page__what-we-do__heading d-inline-block
            text-upper bg-color-primary-light text-color-primary
            br-md pl-sm pr-sm pt-sm pb-sm mb-sm">
            contact
          </span>
        </div>
        <div class="landing-page__staying-connected__titles margin-center text-center">
          <h1 class="landing-page__staying-connected__primary-heading--main text-black">
            Let's stay connected
          </h1>
          <p class="landing-page__staying-connected__primary-heading--sub
            text-dark-grey-2 mt-sm">
            It's never been easier to get in touch with
            Flex. Call us, use our live chat widget or email and we'll get back to you
             as soon as possible!
          </p>
        </div>
        <div class="landing-page__staying-connected__social-media text-center mt-md">
          <div class="landing-page__staying-connected__medium">
            <img
              alt="Email Icon"
              src="/icons/email-icon.png"
              class="landing-page__staying-connected__icon"
            />
            <h1 class="landing-page__staying-connected__primary-text text-black mt-xs">
              Email
            </h1>
            <p
              class="landing-page__staying-connected__secondary-text text-dark-grey-2">
              contact@flex.co
            </p>
          </div>
          <div class="landing-page__staying-connected__medium">
            <img
              alt="Phone Icon"
              src="/icons/phone-icon.png"
              class="landing-page__staying-connected__icon"
            />
            <h1
              class="landing-page__staying-connected__primary-text text-black mt-xs">
              Phone
            </h1>
            <p
              class="landing-page__staying-connected__secondary-text text-dark-grey-2">
              +7-843-672-431
            </p>
          </div>
          <div class="landing-page__staying-connected__medium">
            <img
              alt="Socials Icon"
              src="/icons/socials-icon.png"
              class="landing-page__staying-connected__icon"
            />
            <h1
              class="landing-page__staying-connected__primary-text text-black mt-xs">
              Socials
            </h1>
            <div
              class="landing-page__staying-connected__social-icons text-dark-grey-2"
            >
              <img
                alt="Facebook Icon"
                src="/icons/Facebook.png"
                class="landing-page__staying-connected__social-icon"
              />
              <img
                alt="Twitter Icon"
                src="/icons/Twitter.png"
                class="landing-page__staying-connected__social-icon"
              />
              <img
                alt="Instagram Icon"
                src="/icons/Instagram.png"
                class="landing-page__staying-connected__social-icon"
              />
              <img
                alt="LinkedIn Icon"
                src="/icons/LinkedIn.png"
                class="landing-page__staying-connected__social-icon"
              />
            </div>
          </div>
        </div>
        <div class="landing-page__staying-connected__map-container text-center mt-md">
          <picture>
            <source
              media="(max-width: 599px)"
              srcset="images/map-mobile.webp"
              type="image/webp"
            >
            <source
              media="(max-width: 599px)"
              srcset="images/map-mobile.png"
              type="image/png"
            >
            <source
              media="(min-width: 600px)"
              srcset="images/map.webp"
              type="image/webp"
            >
            <source
              media="(min-width: 600px)"
              srcset="images/map.png"
              type="image/png"
            >
            <img
              src="/images/map.png"
              class="landing-page__staying-connected__map"
              alt="Default Map Logo"
            />
          </picture>
        </div>
      </section>
  <!-- End of Staying Connected Section -->

  <!-- Beginning of Footer -->
      <footer class="landing-page__footer bg-dark-1 text-light-grey-3">
        <div class="landing-page__footer__container--inner">
          <img
            src="/logos/flex-white-text-logo.png"
            alt="Flex mobile logo"
            class="landing-page__footer__logo"
          />
  <!-- Radial pattern for footer -->
          <picture>
            <source srcset="/patterns/radial-pattern-dark.png">
            <img
              src="/patterns/radial-pattern-dark.png"
              class="landing-page__footer__radial-pattern"
              alt="Radial Pattern"
            />
          </picture>

    <!-- Menu items for footer -->
          <ul class="landing-page__footer__menu-items mt-md">
            <li class="landing-page__footer__menu-item">
              Product
            </li>
            <li class="landing-page__footer__menu-item">
              Features
            </li>
            <li class="landing-page__footer__menu-item">
            Pricing
            </li>
            <li class="landing-page__footer__menu-item">
              Resources
            </li>
            <li class="landing-page__footer__menu-item">
              Careers
            </li>
            <li class="landing-page__footer__menu-item">
              Help
            </li>
            <li class="landing-page__footer__menu-item">
              Privacy
            </li>
          </ul>
        </div>

        <p class="landing-page__footer__copyright-text mt-md">© 2021 Flex. All rights reserved.</p>
      </footer>
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
  position: relative;
  &__navbar {
    padding: 1.5rem 2rem;
    @include flex-justify-between;
    align-items: center;
    box-shadow: $box-shadow-mobile-navbar;
    @include tablet-landscape-up {
      padding: 1.5rem 5rem;
      box-shadow: none;
      background-color: $bg-grey
    }
  }
  &__flex-navbar-logo {
    width: 8rem;
    height: auto;
    align-self: center;
  }
  &__desktop-nav-menu {
    display: none;
    @include tablet-landscape-up {
      list-style: none;
      flex: 0 1 40%;
      @include flex-justify-between;
      font-size: $desktop-plus-font-size-medium;
    }
    &__login-signup-container {
      display: none;
      @include tablet-landscape-up {
        display: flex;
        align-items: center;
        font-size: $desktop-plus-font-size-medium;
      }
    }
    &__login-text {
      text-decoration: none;
      color: $dark-grey-2;
    }
  }
  &__sidebar-toggle-label {
    display: flex;
    @include tablet-landscape-up {
      display: none;
    }
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
    position: relative;
    padding: $mobile-section-padding;
    @include tablet-landscape-up {
      padding: $landscape-plus-padding;
    }
    @include desktop-up {
      padding: $desktop-plus-padding;
    }
    &__primary-heading {
      font-size: $font-size-medium;
      @include tablet-landscape-up {
        font-size: $desktop-plus-font-size-medium;
        margin-top: 5rem;
        margin-bottom: 5rem;
      }
      @include desktop-up {
        font-size: $big-desktop-plus-font-size-medium
      }
    }
    &__background-wave {
      position: absolute;
      width: 100%;
      left: 0;
      right: 0;
      bottom: -2rem;
      @include tablet-landscape-up {
        bottom: -5rem;
        left: -15rem;
      }
    }
    &__clients {
      position: relative;
      z-index: 2;
    }
    &__radial-pattern {
      @include radial-pattern;
    }
    &__companies {
      @include grid-justify-content;
      grid-template-columns: repeat(auto-fill, 30%);
      @include tablet-landscape-up {
        @include flex-justify-between;
      }
    }
    &__company-logo {
      width: 100%;
      height: auto;
      margin-bottom: 2rem;
      @include tablet-landscape-up {
        max-width: 18%;
        margin-bottom: 5rem;
      }
      @include big-desktop-up {
        max-width: 18rem;
      }
    }
  }
  &__introduction-text-container {
    position: relative;
    &__primary-heading {
      &--main {
        font-size: $font-size-regular;
        @include tablet-landscape-up {
          font-size: $desktop-plus-font-size-heading
        }
        @include desktop-up {
          font-size: $big-desktop-plus-font-size-heading
        }
      }
      &--sub {
        font-size: $font-size-medium;
        @include tablet-landscape-up {
          margin-bottom: 3rem;
          font-size: $desktop-plus-font-size-small
        }
        @include desktop-up {
          font-size: $desktop-plus-font-size-small
        }
        @include big-desktop-up {
          font-size: $big-desktop-plus-font-size-small
        }
      }
    }
    &__secondary-heading {
      font-size: $font-size-small;
      @include tablet-landscape-up {
        margin-bottom: 5rem;
        font-size: $desktop-plus-font-size-small
      }
      @include desktop-up {
        font-size: $desktop-plus-font-size-small
      }
    }
    &--outer {
      background: $primary-black;
      position: relative;
    }
    &--inner {
      padding: 1.5rem 1rem;
      width: $mobile-width-percentage;
      text-align: center;
      @include tablet-landscape-up {
        width: $desktop-plus-width-percentage
      }
      @include big-desktop-up {
        width: $big-desktop-plus-width-percentage
      }
    }
    &__heading {
      font-size: $font-size-small;
      @include tablet-landscape-up {
        margin-top: 5rem;
      }
    }
    &__fp-pattern {
      position: absolute;
      @include mobile-only {
        width: auto;
        height: 5rem;
      }
      @include tablet-landscape-up {
        width: 8rem;
        height: auto;
      }
      @include desktop-up {
        width: 15rem;
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
      position: absolute;
      @include mobile-only {
        width: 5rem;
        height: auto;
      }
      @include tablet-landscape-up {
        width: 8rem;
        height: auto;
      }
      @include desktop-up {
        width: 15rem;
      }
      &.top-right {
        top: 7px;
        right: 7px;
        @include tablet-landscape-up {
         top: 1rem;
         right: 1rem;
        }
        @include desktop-up {
         top: 2rem;
         right: 2rem;
        }
      }
      &.bottom-left {
        bottom: 7px;
        left: 7px;
        @include tablet-landscape-up {
         bottom: 1rem;
         left: 1rem;
        }
        @include desktop-up {
         bottom: 2rem;
         left: 2rem;
        }
      }
    }
    &__btn-input-section {
      @include flex-justify-between;
      height: 100%;
      @include tablet-landscape-up {
        width: 70%;
      }
      @include desktop-up {

      }
    }
    &__btn {
      font-size: $font-size-small;
      align-self: flex-end;
      @include tablet-landscape-up {
        padding: 1rem 1.5rem;
        font-size: $desktop-plus-font-size-small;
        align-self: stretch;
      }
      @include desktop-up {
        font-size: $desktop-plus-font-size-small
      }
    }
    &__input-container {
      display: flex;
      align-items: center;
      background: $primary-white;
      width: 80%;
      border-radius: $border-radius-sm;
      &:focus-within {
        outline: 2px solid $color-primary;
      }
      @include tablet-landscape-up {
        border-radius: 6px;
        width: 60%;
      }
    }
    &__input-mail-icon {
      width: 1rem;
      flex: 1;
      height: auto;
      @include tablet-landscape-up {
        width: 2rem;
        flex: 0;
        height: auto;
      }
    }
    &__input {
      padding: 0 1rem;
      font-size: $font-size-small;
      color: $dark-grey-1;
      flex: 1 1 100%;
      max-width: 80%;
      border: none;
      border-radius: $border-radius-sm;
      &:focus {
        outline: none;
      }
      @include tablet-landscape-up {
        padding: 2rem;
        font-size: $desktop-plus-font-size-medium;
      }
    }
  }
  &__what-we-do {
    position: relative;
    z-index: 3;
    padding: $mobile-top-bottom-padding $mobile-left-right-padding $mobile-spacing-padding;
    @include tablet-landscape-up {
      padding: 1.5rem $landscape-left-right-padding 20rem;
    }
    @include desktop-up {
      padding: 1.5rem $desktop-plus-left-right-padding 20rem;
    }
    &__heading {
      font-size: $font-size-small;
      @include tablet-landscape-up {
        margin-top: 5rem;
      }
    }
    &__primary-heading {
      @include what-we-do-primary-heading-main;
      @include what-we-do-primary-heading-sub;
    }
    &__titles {
      width: $mobile-width-percentage;
      @include tablet-landscape-up {
        width: 69%;
      }
      @include desktop-up {
        width: 55%;
      }
    }
    &__radial-pattern {
      @include radial-pattern;
    }
    &__items {
      @include grid-justify-content;
      @include mobile-only {
        grid-template-columns: repeat(auto-fill, 45%);
      }
      @include tablet-landscape-up {
        margin-top: 8rem;
        grid-template-columns: repeat(auto-fill, 26%);
      }
    }
    &__item {
      @include tablet-landscape-up {
        margin-bottom: 6rem;
      }
    }
  }
  &__get-started-box {
    padding: 1.5rem 1rem;
    @include flex-justify-between;
    align-items: center;
    @include tablet-landscape-up {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
      width: calc(100% - 20rem); // 10rem padding * 2
      padding: 6rem;
      text-align: left;
      font-size: $desktop-plus-font-size-small
    }
    @include desktop-up {
      font-size: $big-desktop-plus-font-size-small;
      width: calc(100% - 30rem); // 15rem padding * 2
    }
    &__primary-heading {
      &--main {
        font-size: $font-size-regular;
        @include tablet-landscape-up {
          font-size: $desktop-plus-font-size-regular
        }
        @include desktop-up {
          font-size: $big-desktop-plus-font-size-regular;
        }
      }
      &--sub {
        font-size: $font-size-small;
        @include tablet-landscape-up {
          font-size: $desktop-plus-font-size-small
        }
        @include desktop-up {
          font-size: $big-desktop-plus-font-size-small;
        }
      }
    }
    &__headings {
      @include tablet-landscape-up {
        flex: 0 1 50%
      }
      @include desktop-up {
        flex: 0 1 45%;
      }
    }
    &__btns {
      text-align: right;
      &:first-child {
        @include tablet-landscape-up {
          margin-right: 5rem;
        }
      }
      @include tablet-landscape-up {
        flex: 0 1 40%;
        @include flex-justify-between;
      }
      @include desktop-up {
        flex: 0 1 30%;
      }
      @include big-desktop-up {
        flex: 0 1 25%;
      }
    }
    &__btn {
      @include mobile-only {
        margin-bottom: 1rem;
        padding: 1rem;
        font-size: $font-size-small;
      }
      @include tablet-landscape-up {
        padding: 1.5rem 2rem;
        font-size: $desktop-plus-font-size-medium
      }
    }
  }
  &__what-we-do-II {
    position: relative;
    z-index: 2;
    @include mobile-only {
      padding: $mobile-section-padding;
    }
    @include tablet-landscape-up {
      padding: 20rem $landscape-left-right-padding $landscape-top-bottom-padding;
    }
    @include desktop-up {
      padding: 20rem $desktop-plus-left-right-padding
    }
    &__features-text-container {
      @include tablet-landscape-up {
        text-align: left
      }
    }
    &__primary-heading {
      @include what-we-do-primary-heading-main;
      @include what-we-do-primary-heading-sub;
    }
    &__titles {
      @include mobile-only {
        width: $mobile-width-percentage;
      }
      @include tablet-landscape-up {
        width: 75%;
        text-align: left;
        margin-left: 0;
      }
    }
    &__item {
      @include mobile-only {
        margin-top: 3rem;
        width: $mobile-width-percentage;
      }
      @include tablet-landscape-up {
        &:not(:first-child) {
          margin-top: 5rem;
        }
        &:not(:last-child) {
          margin-bottom: 3rem;
        }
      }
    }
    &__container {
      &--outer {
        display: flex;
        @include mobile-only {
          flex-direction: column;
        }
        @include tablet-landscape-up {
          justify-content: space-between;
          align-items: center;
          margin-top: 5rem;
        }
      }
      &--inner {
        @include mobile-only {
          flex-direction: column;
        }
        @include tablet-landscape-up {
          flex: 0 1 40%;
        }
      }
    }
    &__image {
      @include mobile-only {
        width: 80%;
        height: auto;
      }
      @include tablet-landscape-up {
        width: 100%;
      }
    }
    &__image-container {
      position: relative;
      @include tablet-landscape-up {
        flex: 0 1 48%;
        margin-top: 0;
      }
    }
    &__pattern {
      @include laptop-img-pattern-placement;
    }
    &__radial-pattern {
      @include radial-pattern;
    }
  }
   &__what-we-do-III {
    position: relative;
    z-index: 3;
    padding: $mobile-top-bottom-padding $mobile-left-right-padding $mobile-spacing-padding;
    @include tablet-landscape-up {
      padding: 0 $landscape-left-right-padding $landscape-top-bottom-padding;
    }
    @include desktop-up {
      padding: 0 $desktop-plus-left-right-padding $desktop-plus-top-bottom-padding;
    }
    &__heading {
      @include tablet-landscape-up {
        margin-top: 0;
      }
    }
    &__primary-heading {
      @include biggest-main-primary-heading;
      @include what-we-do-primary-heading-sub;
    }
    &__titles {
      width: $mobile-width-percentage;
      @include tablet-landscape-up {
        text-align: left;
        margin-left: 0;
        margin-right: 0;
        flex: 0 1 40%;
      }
    }
    &__item {
      @include mobile-only {
        margin-top: 3rem;
        width: $mobile-width-percentage;
      }
    }
    &__btn {
      font-size: $font-size-small;
      align-self: flex-end;
      @include tablet-landscape-up {
        padding: 1rem 1.5rem;
        font-size: $desktop-plus-font-size-small;
        align-self: stretch;
      }
      @include desktop-up {
        font-size: $desktop-plus-font-size-small
      }
    }
    &__container {
      &--outer {
        display: flex;
        @include mobile-only {
          flex-direction: column;
        }
        @include tablet-landscape-up {
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
    &__image {
      @include mobile-only {
        display: none;
      }
      @include tablet-landscape-up {
        width: 100%;
      }
    }
    &__image-container {
      position: relative;
      @include mobile-only {
        display: none;
      }
      @include tablet-landscape-up {
        flex: 0 1 48%;
        margin-top: 0;
      }
    }
    &__pattern {
      @include mobile-only {
        display: none;
      }
      @include laptop-img-pattern-placement;
    }
    &__radial-pattern {
      @include radial-pattern;
    }
  }
  &__staying-connected {
    z-index: 2;
    position: relative;
    background-color: $primary-white;
    padding: $mobile-spacing-padding $mobile-left-right-padding $mobile-top-bottom-padding;
    @include tablet-landscape-up {
      padding: 0 $landscape-left-right-padding $staying-connected-landscape-plus-bottom-padding;
      width: 80%;
      @include margin-center;
    }
    @include desktop-up {
      padding: 0 $desktop-plus-left-right-padding $staying-connected-landscape-plus-bottom-padding;
    }
    &__primary-heading {
      @include biggest-main-primary-heading;
      @include what-we-do-primary-heading-sub
    }
    &__primary-text {
      font-size: $font-size-regular;
      @include tablet-landscape-up {
        font-size: 2rem;
      }
      @include big-desktop-up {
        font-size: 3rem;
      }
    }
    &__secondary-text {
      font-size: $font-size-small;
      @include tablet-landscape-up {
        font-size: 1.5rem;
      }
      @include big-desktop-up {
        font-size: 2rem;
      }
    }
    &__radial-pattern {
      @include radial-pattern;
    }
    &__titles {
      @include mobile-only {
        width: $mobile-width-percentage;
      }
    }
    &__map {
      width: 100%;
      object-fit: cover;
      @include tablet-landscape-up {
        height: 60rem;
        z-index: 3;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 50%);
      }
    }
    &__radial-pattern {
      @include radial-pattern;
    }
    &__social-media {
      @include flex-justify-between;
    }
    &__medium {
      max-width: 31%;
      flex: 1 1 100%;
      @include tablet-landscape-up {
        max-width: 26%;
      }
    }
    &__icon {
      width: 3rem;
      height: auto;
      @include tablet-landscape-up {
        width: 4rem;
      }
      @include big-desktop-up {
        width: 5rem;
      }
    }
    &__social-icons {
      @include flex-justify-between;
      @include tablet-landscape-up {
        margin-top: 1rem;
      }
    }
    &__social-icon {
      width: 1.5rem;
      height: auto;
      @include tablet-landscape-up {
        width: 2rem;
      }
      @include big-desktop-up {
        width: 3rem;
      }
    }
  }
  &__footer {
    position: relative;
    border-top: 6px solid $color-primary;
    font-size: $font-size-regular;
    z-index: -1;
    padding: 2.5rem 0;
    &__menu-items {
      list-style: none;
      @include tablet-landscape-up {
        @include flex-justify-between;
        width: 75%;
        @include margin-center;
      }
    }
    &__menu-item {
      margin-bottom: 2rem;
      @include tablet-landscape-up {
        margin-bottom: 0;
      }
      &:first-child {
        margin-top: 3rem;
        @include tablet-landscape-up {
          margin-top: 0;
        }
      }
    }
    &__radial-pattern {
      @include radial-pattern;
    }
    &__copyright-text {
      padding: $mobile-footer-padding;
    }
    &__container {
      &--inner {
        padding: $mobile-footer-padding;
        border-bottom: 1px solid $dark-grey-3;
        @include tablet-landscape-up {
          padding: 40rem $landscape-left-right-padding 4rem;
        }
        @include desktop-up {
          padding: 40rem $desktop-plus-left-right-padding 4rem;
        }
      }
    }
    &__logo {
      @include tablet-landscape-up {
        display: block;
        @include margin-center;
      }
    }
    &__copyright-text {
      @include tablet-landscape-up {
        text-align: center;
      }
    }
  }
}
</style>
