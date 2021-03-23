<template>
  <Layout>
    <div class="soon">
      <h3>Odzyskaj.net</h3>
      <h3>Zmiany zmiany ..</h3>
      <h3>4 IV 2021 – 12:00</h3>
      <h3>Powracamy do życia </h3>
      <h3>Bądż wtedy z nami.</h3>
    </div>


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



<style scoped>
.home-links a {
  margin-right: 1rem;
}
.soon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

</style>
