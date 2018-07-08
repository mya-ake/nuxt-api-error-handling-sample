<template>
  <div>
    <vs-card>
      <vs-alert
        vsColor="danger"
        vsTitle="Error"
        vsActive="true"
      >
        <p>{{ error.message }}</p>
      </vs-alert>
    </vs-card>
    <vs-card v-if="error.stack">
      <vs-alert
        vsColor="danger"
        vsTitle="Stack"
        vsActive="true"
      >
        <p>{{ error.stack }}</p>        
      </vs-alert>
    </vs-card>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
