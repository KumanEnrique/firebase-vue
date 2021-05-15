<template>
  <div id="app">
    <nav class="navbar nacbar-dark bg-primary">
      <a href="/" class="navbar-brand text-white">vue firebase</a>
    </nav>
    <!-- content -->
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              <h3>add a new character</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="addWebsite">
                <div class="form-group">
                  <input type="text" v-model="newWebsite.nameTitle" placeholder="Name" class="form-control">
                </div>
                <div class="form-group">
                  <input type="text" v-model="newWebsite.author" placeholder="Author" class="form-control">
                </div>
                <div class="form-group">
                  <input type="text" v-model="newWebsite.url" placeholder="URL" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>

        <div class="col-sm-8 text-center">
          <img alt="Vue logo" src="./assets/logo.png">
          <div class="card">
            <div class="card-header">
              <h3>character list</h3>
            </div>
            <div class="card-body">
              <table class="table table-bordered table striped table-hover">
                <thead>
                  <th>Name</th>
                  <th>NickName</th>
                  <th>Operations</th>
                </thead>
                <tbody>
                  <tr v-for="w in websites" :key="w.url" >
                    <td>
                      <a v-bind:href="w.url" target="_blank">{{w.nameTitle}}</a>
                    </td>
                    <td><h3>{{w.author}}</h3></td>
                    <td><button class="btn btn-danger" @click="deleteWebsite(w)">delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import config from './config'
const app = Firebase.initializeApp(config)
const db = app.database()
const websiteRef = db.ref('website')
console.log(websiteRef)

//add
/* websiteRef.set({
    username: "name"
  }); */


export default {
  name: 'App',
  firebase:{
    websites:websiteRef
  },
  data(){
    return{
      newWebsite:{
        nameTitle:"",
        author:"",
        url:"",
      }
    }
  },
  methods:{
    addWebsite(){
      var newPostKey = websiteRef.push(this.newWebsite).key
      console.log(newPostKey)
      this.newWebsite.nameTitle = ""
      this.newWebsite.author = ""
      this.newWebsite.url = ""
    },
    deleteWebsite(w){
      console.log(w)
      // console.clear()
      
    }
  }
}
</script>

<style>
</style>
