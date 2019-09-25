<template>
  <div class="about container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Update NOTE</h1>
    <form>
      <div class="well">
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" placeholder="title" v-model="note.title" />
          <label>Note</label>
          <textarea class="form-control" v-model="note.content"></textarea>
          <button type="submit" v-on:click="updateNote" class="btn submit btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  name: "edit",
  props: ["id"],
  components: {
    Alert
  },
  data() {
    return {
      note: {},
      alert: ""
    };
  },
  methods: {
    fetchNote(id) {
      this.$http
        .get("http://127.0.0.1./notes/read.php?id=" + this.id)
        .then(function(response) {
          this.note = response.body[0];
          console.log(this.note);
        });
    },
    updateNote(e) {
      e.preventDefault();

      if (!this.note.title || !this.note.content) {
        this.alert = "please fill in all";
      } else {
        this.$http
          .put(`http://127.0.0.1./notes/update.php`, {
            id: this.note.id,
            title: this.note.title,
            content: this.note.content
          })
          .then(function(response) {
            console.log(response);
            this.$router.push({ path: "/", query: { alert: "Note updated!" } });
          });
      }
    }
  },

  created: function() {
    this.fetchNote(this.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.submit {
  margin-top: 10px;
}
</style>
