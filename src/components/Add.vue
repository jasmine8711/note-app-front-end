<template>
  <div class="about container">
    <h1 class="page-header">Create NOTE</h1>
    <form>
      <div class="well">
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" placeholder="Title" v-model="note.title" />
          <label>Note</label>
          <textarea class="form-control" v-model="note.content"></textarea>
          <button type="submit" @click="addNote" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      note: {}
    };
  },
  methods: {
    addNote(e) {
      e.preventDefault();

      if (!this.note.title || !this.note.content) {
        console.log("please fill in all");
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
</style>
