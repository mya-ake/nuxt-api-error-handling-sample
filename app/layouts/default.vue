<template>
  <div id="layout" class="layout">
    <vs-topbar class="header">
      <h1 class="header__title">Nuxt.js API error handle sample</h1>
    </vs-topbar>

    <main class="main">
      <nuxt/>
    </main>

    <vs-sidebar
      v-bind:vsActive.sync="active"
      style="width:200px"
      vsStatic
      vsParent="#layout"
      class="sidebar"
    >
      <vs-sidebar-item
        v-bind:vsActive="actives === 1"
        vsIcon="account_circle" 
        to="/users/1"
        v-on:click="actives = 1"
      >
        /users/1
      </vs-sidebar-item>
      <vs-sidebar-item
        v-bind:vsActive="actives === 2"
        vsIcon="account_circle" 
        to="/users/0"
        v-on:click="actives = 2"
      >
        /users/0 (Error)
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      actives: 1,
    };
  },
};
</script>

<style scoped>
.layout {
  display: grid;
  grid-template:
    'header header' auto
    'sidebar main' 1fr / 200px 1fr;
  height: 100%;
}

.header {
  grid-area: header;
  justify-content: flex-start;
}

.header__title {
  padding: 8px 16px;
  font-size: 1.4rem;
}

.main {
  grid-area: main;
}

.sidebar {
  grid-area: sidebar;
}
</style>
