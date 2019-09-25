<template>
  <div class="about container">
    <h1 class="page-header">Create NOTE</h1>
    <Alert v-if="alert" v-bind:message="alert" />
    <form>
      <div class="well">
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" placeholder="Title" v-model="note.title" />
          <label>Note</label>
          <textarea class="form-control mb-2" v-model="note.content"></textarea>
          <button class="btn btn-warning" id="submit" type="submit" @click="addNote">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  components: {
    Alert
  },
  name: "add",
  data() {
    return {
      note: {},
      alert: ""
    };
  },
  methods: {
    addNote(e) {
      e.preventDefault();

      if (!this.note.title || !this.note.content) {
        this.alert = "please fill in all";
      } else {
        this.$http
          .post(
            `http://127.0.0.1./notes/create.php?title=${this.note.title}&&content=${this.note.content}`
          )
          .then(function(response) {
            console.log(response);
            this.$router.push({ path: "/", query: { alert: "Note Added!" } });
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#submit {
  margin-top: 15px;
}
</style>
