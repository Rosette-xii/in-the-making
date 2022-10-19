<template>
  <section class="main">
    <div class="main-area">
      <div class="container">
        <QuizHead :curPage="$route.query.id" />
        <QuizBody :curPage="$route.query.id" />
      </div>
    </div>
  </section>
</template>
<script>
import QuizHead from '@/components/QuizHead.vue'
import QuizBody from '@/components/QuizBody.vue'
export default {
  components: { QuizHead, QuizBody },
}
</script>
<style lang="scss">
</style>
