<template>
  <div class="app-index">
    <div class="app-index__toggle-items">
      <p
        :class="[
          currentTab === 'PostOrEditResource' ? 'active' : '',
          'app-index__toggle-item'
        ]"
        @click="changeActiveTabComponent('PostOrEditResource')"
      >
        Create Post
      </p>
      <p
        :class="[
          currentTab === 'GetResource' ? 'active' : '', 'app-index__toggle-item'
        ]"
        @click="changeActiveTabComponent('GetResource')"
      >
        Get Posts
      </p>
    </div>
    <div class="app-index__component-display-container">
      <component
        :is="currentTabComponent"
        @editPost="handleEditPost"
        @changeIsEditingStatus="changeIsEditingStatus"
        @changeShowLoaderStatus="changeShowLoaderStatus"
        :isEditing="isEditing"
        :detailsOfPostToBeEdited="detailsOfPostToBeEdited"
      />
    </div>
    <BaseLoader :showLoader="showLoader" />
  </div>
</template>

<script>
import { shallowRef, ref, nextTick } from 'vue';
import PostOrEditResource from '@/pages/PostOrEditResource.vue';
import GetResource from '@/pages/GetResource.vue';

export default {
  components: {
    PostOrEditResource,
  },
  setup() {
    const isEditing = ref(false);
    const currentTab = ref('PostOrEditResource');
    const currentTabComponent = shallowRef(PostOrEditResource);
    const detailsOfPostToBeEdited = ref({});
    const showLoader = ref(false);
    const changeActiveTabComponent = (newComponent) => {
      if (newComponent === 'GetResource') {
        isEditing.value = false;
        currentTab.value = 'GetResource';
        currentTabComponent.value = GetResource;
        return;
      }
      currentTab.value = 'PostOrEditResource';
      currentTabComponent.value = PostOrEditResource;
    };

    const handleEditPost = (postDetails) => {
      detailsOfPostToBeEdited.value = postDetails;
      isEditing.value = true;
      nextTick(() => {
        changeActiveTabComponent('PostOrEditResource');
      });
    };

    const changeIsEditingStatus = (newValue) => {
      isEditing.value = newValue;
    };

    const changeShowLoaderStatus = (newValue) => {
      showLoader.value = newValue;
    };

    return {
      currentTab,
      currentTabComponent,
      changeActiveTabComponent,
      isEditing,
      handleEditPost,
      detailsOfPostToBeEdited,
      changeIsEditingStatus,
      showLoader,
      changeShowLoaderStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
.app-index {
  position: relative;
  padding: 5rem;
  font-size: $font-size-regular;
  background-color: $bg-grey;
  min-height: 100vh;
  @include tablet-landscape-up {
    padding: 5rem 10rem;
    font-size: $desktop-plus-font-size-regular;
  }
  &__toggle-items {
    @include margin-center;
    font-size: $font-size-regular;
    max-width: 60rem;
    @include flex-justify-center;
  }
  &__toggle-item {
    background-color: $primary-white;
    padding: 1rem 1.5rem;
    border: 1px solid $primary-white;
    color: $dark-grey-1;
    cursor: pointer;
    @include opacity-transition;
    opacity: 0.7;
    &.active {
      background-color: $dark-grey-1;
      color: $primary-white;
    }
    &:hover {
      opacity: 1
    }
  }
}
</style>
