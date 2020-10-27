<template>
  <div class="CodePost" id="CodePost" v-html="lesson.text">
  </div>
</template>

<script>
export default {
  name: "CodePost",
  props: {
          lesson: {
            type: Object,
            required: true
          }
      },
  async created() {
    console.log(this.lesson)
  },
};
</script>

<style lang="scss" scoped>
:root {
  font-size: 1px !important;
}
</style>
