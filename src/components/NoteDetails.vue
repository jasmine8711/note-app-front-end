<template>
  <div class="details container">
    <h1 class="page-header">
      <span class="icon">
        <router-link v-bind:to="'/edit/'+note.id">
          <i class="fas fa-edit"></i>
        </router-link>
        <router-link v-bind:to="'/notedetails/'+note.id">
          <i class="fas fa-trash-alt" @click="deleteNote(note.id)"></i>
        </router-link>
      </span>
    </h1>

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
    },
    deleteNote(id) {
      this.$http
        .delete("http://127.0.0.1./notes/delete.php?id=" + this.id)
        .then(function(response) {
          console.log(response);
          this.$router.push({ path: "/", query: { alert: "Note Deleted!" } });
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
.icon {
  color: purple;
}
</style>
