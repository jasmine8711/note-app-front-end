<template>
  <div class="details container">
    <div class="card">
      <h2 class="title">
        {{ note.title }}
        <span class="icon">
          <router-link v-bind:to="'/edit/'+note.id">
            <i class="fas fa-edit fa-lg"></i>
          </router-link>
          <router-link v-bind:to="'/notedetails/'+note.id">
            <i class="fas fa-trash-alt fa-lg" @click="deleteNote(note.id)"></i>
          </router-link>
        </span>
      </h2>

      <hr />
      <p class="note">{{ note.content }}</p>
    </div>
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
.details {
  height: 100vh;
}
.icon {
  width: 100%;
  font-size: 15px;
  padding-left: 10px;
}

.title {
  font-size: 20px;
  width: 50%;
}
.content {
  font-size: 18px;
  margin: 5px;
}
</style>
