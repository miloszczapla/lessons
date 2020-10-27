<template>
  <div class="PostComponenet-wrapper">
    <header>Lastest Post</header>
    <div class="create-post">
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
      <div class="date">
        {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
      </div>
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
  .PostComponenet-wrapper {
    width: min(80%,600px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .create-post {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem 0;
    width: 300px;
    height: 200px;

    button {
      font-weight: 600;
      font-size: 3rem;
      background: 0;
      border: 0;
      border-radius: 200px;
      background-color: #909ead;
      border: 1px solid #25ac95;
    }

    button:active {
      background-color: #1e8a78;
      border-color: #4434a0;
    }

    input {
      text-align: center;
      font-size: 2rem;
      border: 0;
      background: 0;
      border-bottom: 1px solid #170869;
    }
  }

  .post {
    width: max(75vw,20px);
    min-height: 100px;
    padding: 2rem 0 0.8rem 0;
    border-bottom: 2px solid rgb(133, 31, 31);
    border-radius: 10px;
    .date {
      font-size: 1.5rem;
      text-align: left;
    }
    .text::first-letter {
      text-transform: uppercase;
    }
  }

</style>
