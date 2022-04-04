<template>
  <div class="get-post mt-md">
    <div class="get-post__post-container mb-md" v-for="post in posts" :key="post.id">
      <p class="mb-sm"><span class="text-bold mr-xs">userId:</span> {{ post.id }}</p>
      <p class="mb-sm"><span class="text-bold mr-xs">Title:</span> {{ post.title }}</p>
      <p class="mb-md"><span class="text-bold mr-xs">Body:</span> {{ post.body }}</p>

      <BaseButton @click="editPost(post)" class="get-post__post-btn bg-primary-color text-white">
        Edit
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { get } from '@/services/axios';

export default {
  setup(props, { emit }) {
    const posts = ref([]);

    const editPost = (post) => {
      const detailsOfPostToEdit = {
        id: post.id,
        title: post.title,
        body: post.body,
      };
      emit('editPost', detailsOfPostToEdit);
    };
    const fetchPosts = async () => {
      try {
        emit('changeShowLoaderStatus', true);
        const response = await get({ url: '/posts' });
        emit('changeShowLoaderStatus', false);
        posts.value = response.data;
      } catch (err) {
        emit('changeShowLoaderStatus', false);
        alert(err);
      }
    };
    onMounted(async () => {
      await fetchPosts();
    });
    return {
      posts,
      editPost,
    };
  },
};
</script>

<style lang="scss" scoped>
.get-post {
  max-width: 95%;
  @include grid-justify-content;
  grid-template-columns: repeat(auto-fill, 100%);
  @include margin-center;
  @include tablet-landscape-up {
    max-width: 90%;
    grid-template-columns: repeat(auto-fill, 30%);
  }
  @include desktop-up {
    max-width: 80%;
    grid-template-columns: repeat(auto-fill, 22%);
  }
  &__post-container {
    min-width: 22%;
    padding: 1.5rem 2rem;
    font-size: $font-size-small;
    box-shadow: $box-shadow-card;
    transform: translateY(0);
    transition: 250ms transform ease-out;

    &:hover {
      transform: translateY(-1rem)
    }
  }
  &__post-btn {
    padding: 1rem;
    width: 7rem;
    border-radius: $border-radius-sm;
  }
}

</style>
