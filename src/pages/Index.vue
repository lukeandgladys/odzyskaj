<template>
  <Layout>
    <h3>Here shall rise landing page. Stay tuned.</h3>


  </Layout>
</template>

<script>
export default {

}
</script>
<static-query>
{
  allLesson {
    edges {
      node {
        title
        path
        id

        }
      }
    }
}
</static-query>



<style>
.home-links a {
  margin-right: 1rem;
}
</style>
