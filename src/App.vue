<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="li pull-right">
            <router-link to="/">
              <i class="fas fa-home"></i>
            </router-link>
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
  data() {
    return {};
  },
  computed: {}
};
</script>

<style>
.li {
  list-style: none;
}
</style>
