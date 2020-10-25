<template>
  <div class="main-flex">
    <header>Code Examples</header>
    <div class="text-area">
      <div class="element">
          <label class="html-code" for="send-code">Kod HTML</label>
          <textarea
            class="code-area"
            v-model="HTMLText"
            id="html-code"
            cols="80"
            rows="30"
          >
            </textarea>
      </div>
      <button @:click="postCode"></button>
      <div class="element">
          <label class="css-code" for="send-code">Kod CSS</label>
          <textarea
            class="code-area"
            v-model="StyleText"
            id="css-code"
            cols="80"
            rows="30"
          >
            </textarea>
      </div>
    </div>
    <div class="code-wrapper">
      <div
        class="grid-element"
        v-for="lesson in lessons"
        v-bind:key="lesson._id"
      >
      <CodePost />
      </div>
    </div>
  </div>
</template>

<script>
import CodePost from "@/components/CodePost.vue";
import CodeService from "../CodeService";
export default  {
  name: "CodeEx",
  components: {
    CodePost,
  },
  data() {
    return {
      lessons: [],
      error: "",
      HTMLText: "",
      StyleText: "",
    };
  },
  async created() {
    try {
      this.posts = CodeService.getCode();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async postCode() {
      try {
      await CodeService.insertCode(this.HTMLText,this.StyleText)
      await CodeService.getCode()
      } catch(err) {
        this.error = err.message
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-area {

    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .element {
        display: flex;
        flex-direction: column;
    }
    .element label {
        opacity: 0.8;
        padding-left: 2rem;
        align-self: flex-start;
    }
    .element textarea {
      font-size: 0.8rem;
    }
}


.code-wrapper {
  width: 100%;
  color: #12175c;
  background-color: #272727;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.grid-element {
  background-color: #e2e2e2;
  border: 2px solid #555555;
}
</style>
