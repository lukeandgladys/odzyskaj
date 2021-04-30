<template>
  <Layout>
    <div class="soon">

      <h3>Zmiany zmiany ..</h3>
      <h3>1 VI 2021 – 12:00</h3>
      <h3>Nowe otwarcie!</h3>
      <h3>Prezent dla wszystkich</h3>
      <h3>Dzieci i dorosłych</h3>
      <h3>Bądż wtedy z nami.</h3>

      <h3 style="max-width: 800px;">Tymczasem skorzystaj z przewodnika <g-link style="color: #fff; background-color: #000;" to="/o-co-chodzi/" >krok–po–kroku</g-link> lub wybierz interesujący Cię temat z menu.</h3>
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
h3 {
  text-align: center;
}
.soon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

</style>
