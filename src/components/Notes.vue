<template>
  <div class="notes container">
    <h1 class="page-header">NOTES</h1>
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <form class="form-inline mt-2 mt-md-0 form">
      <input
        class="form-control mr-sm-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

      <router-link class="btn btn-success" to="/add">Add Notes</router-link>

      <hr />
    </form>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="note in filteredNote">
          <td>{{note.title}}</td>
          <td>{{note.content}}</td>
          <td>
            <router-link class="btn btn-default" v-bind:to="'/notedetails/'+note.id">view</router-link>
          </td>
          <td>
            <router-link class="btn btn-default" v-bind:to="'/'">
              <i class="fas fa-trash-alt delete" @click="deleteNote(note.id)"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { METHODS } from "http";
import Alert from "./Alert";
//import notedetails from "./NoteDetails";
export default {
  name: "notes",
  data() {
    return {
      notes: [],
      alert: "",
      search: ""
    };
  },
  props: "search",
  methods: {
    fetchNotes() {
      this.$http
        .get("http://127.0.0.1/notes/read.php")
        .then(function(response) {
          console.log(response.body);
          this.notes = response.body;
        });
    },
    deleteNote(id) {
      console.log(id);
      this.$http
        .delete("http://127.0.0.1./notes/delete.php?id=" + id)
        .then(function(response) {
          console.log(response);
        });
    }
  },
  created: function() {
    if (this.$route.query.alert) {
      (this.alert = this.$route.query), alert;
    }
    this.fetchNotes();
  },
  /*   updated: function() {
    this.fetchNotes();
  }, */

  computed: {
    filteredNote: function() {
      return this.notes.filter(note => {
        return note.title.match(this.search);
      });
    }
  },
  components: {
    Alert
    // notedetails
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.delete {
  cursor: pointer;
  color: brown;
}
</style>