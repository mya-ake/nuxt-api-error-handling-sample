<template>
  <div>
    <h1>Hello Nuxt.js</h1>
  </div>
</template>

<script>
export default {
  async mounted() {
    const response = await this.$axios.get('/user/test');
    console.log(response.data);
  },
};
</script>

<style scoped>
</style>
