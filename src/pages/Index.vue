<template>
  <Layout>
    <div class="soon">
      <h3>Szykujemy Wielkie Zmiany! </h3>
      <h3 style="max-width: 800px;" >Nowe otwarcie z nowym rokiem szkolnym</h3>
      <h3>Szczegóły wkrótce</h3>
            


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
