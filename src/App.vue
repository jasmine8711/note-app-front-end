<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">Notes</router-link>
          </li>
          <router-view></router-view>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app",
  data: {},

  components: {}
};
</script>

<style>
</style>
