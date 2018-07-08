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
  </div>
</template>

<script>
export default {
  async asyncData({ app, error }) {
    let response;
    try {
      response = await app.$axios.get('/users/1');
    } catch (err) {
      response = err.response;
      error({
        statusCode: response.status,
        message: response.data.message,
      });
    }

    const { user } = response.data;

    return {
      user,
    };
  },
};
</script>

<style scoped>
</style>
