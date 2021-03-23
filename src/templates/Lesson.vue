<template id="">
  <Layout>
  <!-- <h3 class="title" >{{$page.lesson.title}}</h3> -->
  <article class="article" v-html="$page.lesson.content">

  </article>
</Layout>
</template>

<page-query>
  query ($id: ID!){
   lesson  (id: $id) {
         title
         content
     }
 }
</page-query>
<script>
export default {
  data() {
    return {

    }
  }
  }
</script>
<style scoped >
h3 {
  background-color: yellowgreen;
}


</style>
