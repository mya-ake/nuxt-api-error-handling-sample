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
      <vs-card-body>
        <span>{{ user.bio }}</span>
      </vs-card-body>
    </vs-card>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    const { id } = params;
    return typeof id === 'string';
  },

  async asyncData({ app, params, error }) {
    const { id } = params;
    console.log(id);
    const response = await app.$axios.get(`/users/${id}`).catch(err => {
      return err.response;
    });

    console.log(response);
    if (response.status !== 200) {
      error({
        statusCode: response.status,
      });
      // ここでリターンしないとエラーにある
    }

    const { user } = response.data;

    const responsePosts = await app.$axios.get(`/users/${user.id}/posts`);
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
