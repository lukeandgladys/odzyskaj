<template id="">
  <div>
    <nav class="nav">
      <li v-for="lesson in $static.allLesson.edges" :key="lesson.node.id" @click="znikNavi(lesson.node.title)">
        <h3>
        <g-link :to="lesson.node.path" >
          {{lesson.node.title}}
        </g-link>
        </h3>
      </li>
    </nav>
  </div>
</template>

<static-query>
{
  allLesson  (sortBy:  "nr", order: ASC) {
    edges {
      node {
        title
        path
        id
        nr

        }
      }
    }
}
</static-query>
<script>
export default {
  methods: {
    znikNavi(tytul) {
      this.$emit('znik-navi', tytul)
    }
  }
}
</script>
<style scoped>


li a {
  margin: 0;
  padding: 0 1em;


}


.nav {
  align-items: center;
  background-color: #000;
  color: #fff;
  margin-top: 12vh;
  padding: 0;
}
.nav li a {
  color: #fff;
  border-bottom: 3px solid #000;
}
.nav li a:hover {
  border-bottom: 3px solid #fff;
}

@media screen and (orientation: landscape) {
   .nav{
     margin: 15vh 0;
     padding: 0 10vh;
     display: flex;
     flex-direction:  row;
     flex-wrap: wrap;
   }
   nav li {
     margin: 0;
     padding: 0;
     list-style:none;
     height: 4em;
   }
}
@media screen and (orientation: portrait) {
   .nav{
     margin: 15vh 0;
     padding: 0 3vh;
     display: flex;
     flex-direction:  column;
     flex-wrap: wrap;
   }
   nav li {
     margin: 0;
     padding: 0;
     list-style:none;
     
   }
   .nav li a {
     font-size: 0.7em;
   }

}

</style>
