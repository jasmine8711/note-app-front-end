<template>
  <div class="alert alert-danger alert-dismissible" role="alert">
    <i class="fas fa-bell"></i>
    {{message}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "alert",
  props: ["message"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
</style>
