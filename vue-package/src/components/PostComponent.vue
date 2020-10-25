<template>
  <div>
    <h1>lasest post</h1>
    <div class="create-post">
      <label for="create-post">Create Post</label>
      <input type="text" id="create-post" v-model="text" placeholder="Say Something...">
      <button v-on:click="createPost">Post!</button>
    </div>
    <hr>
    <p class='error' v-if="error">{{ error }}</p>
    <div class="class-container">
      <div class="post"
      v-for="(post, index) in posts "
      v-bind:key="post._id"
      v-bind:item="post"
      v-bind:index="index"
      v-on:dblclick="deletePost(post._id)"
      >
      {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
      <div class="text">{{ post.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { text } from 'body-parser'
import  PostService  from '../PostService'

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: '',
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts()
    } catch (err) {
      this.error = err.message
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text)
        try {
        this.posts = await PostService.getPosts()
      } catch (err) {
        this.error = err.message
      }
    },
    async deletePost(id) {
      await PostService.deletePost(id)
        try {
        this.posts = await PostService.getPosts()
      } catch (err) {
        this.error = err.message
      }
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
