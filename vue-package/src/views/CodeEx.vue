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
            placeholder="
        <div class='header'>
          zawartośc stront
        </div>
        <main>
        <ul>
            <div class='li'>pozycja 1</div>
            <div class='li'>pozycja 2</div>
            <div class='li'>pozycja 3</div>
        </ul>
        <article>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            In unde quibusdam et ex veritatis ullam autem asperiores ad o
            bcaecati alias dolore fuga mollitia vero vel veniam qui,
            recusandae reiciendis minima!
        </article>
        </main>
        <footer>
          <p>tą stronę stworzył Czesiek</p>
        </footer>
            "
          >
            </textarea>
      </div>
      <button v-on:click="postCode">Post!</button>
      <div class="element">
          <label class="css-code" for="send-code">Kod CSS</label>
          <textarea
            class="code-area"
            v-model="StyleText"
            id="css-code"
            cols="80"
            rows="30"
            placeholder="
          :root {
              font-size: 12px;
          }

          .body {
              color: #8b6c6c;
              background-color: #3a3535;
              margin: 0;
              padding: 0;
          }

          .header {
              text-align: center;
              text-transform: uppercase;
          }

          main {
              display: flex;
              flex-direction: column;
              align-items: center;
          }

          article {
              border-bottom: 2px white solid;
          }"
          >
            </textarea>
      </div>
    </div>
    <div class="code-wrapper">
      <div
        class="grid-element"
        v-for="(lesson,index) in lessons"
        v-bind:key="lesson._id"
        v-bind:item="lesson"
        v-bind:index="index"
      >
      <CodePost :lesson="lesson" />
      </div>
    </div>
  </div>
</template>

<script>
import CodePost from "@/components/CodePost.vue";
import CodeService from "../CodeService";
export default {
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
      this.lessons = await CodeService.getCode();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async postCode() {
      try {
        const text = `<style scoped> ${this.StyleText} </style>`
        // console.log(text)
        await CodeService.insertCode(this.HTMLText, text);
        this.lessons = await CodeService.getCode();
      } catch (err) {
        this.error = err.message;
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
    width: 40%;
  }
  .element label {
    opacity: 0.8;
    padding-left: 2rem;
    align-self: flex-start;
  }
  .element textarea {
    font-size: 0.8rem;
  }
  button {
    margin: 10px;
    align-self: center;
    width: min(10vw, 120px);
    height: min(10vw, 120px);
    font-weight: 600;
    font-size: min(2vw, 2rem);
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
}

@media (max-width: 600px) {
  .text-area {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      order: 3;
      width: 80px;
      height: 80px;
      font-size: 1.2rem;

    }

    .element {
      width: 80%;
    }
  }

}

.code-wrapper {
  width: max(85%,300px);
  color: #12175c;
  display: grid;
  margin: 20px;
  grid-template-columns: repeat(auto-fill, minmax(10vw,400px));
}

.grid-element {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  min-height: 400px;
  background-color: #e2e2e2;
  border: 2px solid #25ac95;
}
</style>
