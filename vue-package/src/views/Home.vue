<template>
  <div class="home">
    <PostComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import PostComponent from '@/components/PostComponent.vue'

export default {
  name: 'Home',
  components: {
    PostComponent
  }
}
</script>

<style lang="scss" scoped>
 .home {
   display: flex;
   flex-direction: column;
   align-items: center;
 }

</style>
