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
    const response = await app.$axios.get('/users/1').catch(err => {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      });
      return err.response;
    });

    const { user } = response.data;

    return {
      user,
    };
  },
};
</script>

<style scoped>
</style>
