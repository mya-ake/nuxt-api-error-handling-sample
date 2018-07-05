<template>
  <div>
    <h1>Hello Nuxt.js</h1>
  </div>
</template>

<script>
export default {
  async mounted() {
    console.log('response', await this.$axios.get('/users/testk'));
    console.log(
      'response',
      await this.$axios.get('/users/0').catch(err => err.response),
    );
    console.log('response', await this.$axios.get('/users/testk/posts'));
  },
};
</script>

<style scoped>
</style>
