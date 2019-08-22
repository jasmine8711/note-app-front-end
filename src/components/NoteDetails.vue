<template>
  <div class="details container">
    <h1 class="page-header">Details</h1>
    <h2>{{ note.title }}</h2>
    <p>{{ note.content }}</p>
  </div>
</template>

<script>
export default {
  name: "noteDetails",
  data() {
    return {
      note: {}
    };
  },
  props: ["id"],
  methods: {
    fetchNote() {
      this.$http
        .get("http://127.0.0.1./notes/read.php?id=" + this.id)
        .then(function(response) {
          this.note = response.body[0];
        });
    }
  },
  created: function() {
    this.fetchNote();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
