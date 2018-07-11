<template>
  <div>
    <vs-card>
      <vs-card-header
        v-bind:vsFill="true"
        v-bind:vsTitle="user.name">
        <vs-avatar
          v-bind:vsSrc="user.iconUrl"
          vsSize="large"
        />
      </vs-card-header>
      <vs-card-body>{{ user.bio }}</vs-card-body>
    </vs-card>
    <vs-card>
      <vs-list>
        <vs-list-header vsTitle="Posts"/>
        <vs-list-item 
          v-for="post in posts"
          v-bind:key="`post-${post.id}`"
          v-bind:vsTitle="post.title"
          vsIcon="subject"
        />
      </vs-list>
    </vs-card>
  </div>
</template>

<script>
import { UserResponse, PostsResponse } from '~/models';

export default {
  validate({ params }) {
    const { id } = params;
    return typeof id === 'string';
  },

  async asyncData({ app, params, error }) {
    const { id } = params;
    const responseUser = await app.$_resources.get(`/users/${id}`);
    responseUser.toModel(UserResponse);

    if (responseUser.isError) {
      error({
        statusCode: responseUser.status,
        message: responseUser.data.message,
      });
      // ここでリターンしないとハンドリングできないエラーになる
      return;
    }

    const { user } = responseUser.data;

    const responsePosts = await app.$_resources.get(`/users/${user.id}/posts`);
    responsePosts.toModel(PostsResponse);

    if (responsePosts.isError) {
      error({
        statusCode: responsePosts.status,
        message: responsePosts.data.message,
      });
      return;
    }

    const { posts } = responsePosts.data;
    return {
      user,
      posts,
    };
  },
};
</script>

<style scoped>
</style>
