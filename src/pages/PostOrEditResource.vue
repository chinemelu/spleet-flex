<template>
  <form class="create-resource" @submit.prevent="sendOrEditPost">
    <div class="create-resource__title-user-id-container mb-md">
      <div class="create-resource__title-container mb-md">
        <label class="create-resource__label">Title</label>
        <BaseInput
          placeholder="Title"
          class="create-resource__input"
          v-model="title"
        />
      </div>

      <div>
        <label class="create-resource__label">userId</label>
        <BaseInput
          :disabled="isEditing"
          placeholder="userId"
          label="userId"
          class="create-resource__input"
          v-model="userId"
          type="number"
        />
      </div>
    </div>
    <div>
      <label class="create-resource__label">Text Body</label>
      <BaseTextArea
        placeholder="Body"
        label="Text Body"
        class="create-resource__text-area"
        v-model="textBody"
      />
    </div>
    <BaseButton
      :disabled="isButtonDisabled"
      class="bg-primary-color text-white create-resource__btn"
    >
      {{ isEditing ? 'Edit' : 'Post' }}
    </BaseButton>
  </form>
</template>

<script>
import { ref, computed, toRefs } from 'vue';

import { post, put } from '@/services/axios';

export default {
  props: {
    isEditing: {
      type: Boolean,
      default: false,
    },
    detailsOfPostToBeEdited: {
      type: Object,
      default: () => ({
        id: '',
        title: '',
        body: '',
      }),
    },
  },
  setup(props, { emit }) {
    const userId = ref('');
    const textBody = ref('');
    const title = ref('');

    if (props.isEditing) {
      const detailsOfPostToBeEditedAsRefs = toRefs(props.detailsOfPostToBeEdited);
      userId.value = detailsOfPostToBeEditedAsRefs.id.value;
      title.value = detailsOfPostToBeEditedAsRefs.title.value;
      textBody.value = detailsOfPostToBeEditedAsRefs.body.value;
    }

    const clearFormFields = () => {
      userId.value = '';
      title.value = '';
      textBody.value = '';
    };
    const sendOrEditPost = async () => {
      const payload = {
        title: title.value,
        body: textBody.value,
        userId: userId.value,
      };
      try {
        emit('changeShowLoaderStatus', true);
        if (props.isEditing) {
          await put({ url: `/posts/${userId.value}`, data: payload });
        } else {
          await post({ url: '/posts', data: payload });
        }
        emit('changeShowLoaderStatus', false);
        emit('changeIsEditingStatus', false);
        alert(props.isEditing ? 'Post has been successfully edited' : 'Post has been successfully created');
        clearFormFields();
      } catch (err) {
        emit('changeShowLoaderStatus', false);
        alert(err);
      }
    };

    const isButtonDisabled = computed(() => !userId.value || !textBody.value || !title.value);
    return {
      userId,
      textBody,
      title,
      isButtonDisabled,
      sendOrEditPost,
    };
  },
};
</script>

<style lang="scss" scoped>
.create-resource {
  max-width: 70rem;
  @include margin-center;
  margin-top: 5rem;
  padding: 3rem;
  @include tablet-landscape-up {
    flex-wrap: wrap;
  }
  &__title-user-id-container {
    @include tablet-landscape-up {
      @include flex-justify-between;
    }
  }
  &__title-container {
    @include tablet-landscape-up {
      margin-bottom: 0;
    }
  }
  &__label {
    display: block;
    font-size: $font-size-regular;
  }
  &__btn {
    padding: 1rem 1.5rem;
    width: 100%;
    margin-top: 2rem;
    border-radius: $border-radius-sm;
  }
}
</style>
