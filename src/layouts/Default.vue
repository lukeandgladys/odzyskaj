<template>
  <div class="layout">
    <header class="header">

        <h2>
          <g-link to="/">odzyskaj.net</g-link><br class="por">
           <!-- <span >/{{podtytul}}</span> -->

        </h2>
        <g-image v-if="!pokaNavi" src="~/assets/menu.svg" alt="menu" @click="pokaNavi=!pokaNavi" width="40em" > </g-image>
        <g-image v-if="pokaNavi" src="~/assets/close.svg" alt="menu" @click="pokaNavi=!pokaNavi" width="40em" > </g-image>
    </header>
    <Navi v-if="pokaNavi" @znik-navi="znikNavi" />
    <article class="article">
      <slot/>
    </article>
  </div>
</template>
<script>

import Navi from '~/components/Navi.vue'

export default {
  components: {
    Navi
  },
  data() {
    return {
      pokaNavi: false,
      podtytul: ""
    }
  },
  methods: {
    znikNavi(tytul) {
      this.pokaNavi = false;
      this.podtytul = tytul
    }
  }
}
</script>
<style>
p a {
 color: #000;
 border-bottom: 3px solid #000;

}
p a:hover {
  color: #fff;
  background-color: #000;
}
</style>




<style>
@font-face {
	font-family: 'Conv_Ubuntu-LI';
	src: url('../assets/fonts/Ubuntu-LI.eot');
	src: local('☺'), url('../assets/fonts/Ubuntu-LI.woff') format('woff'),
  url('../assets/fonts/Ubuntu-LI.ttf') format('truetype'),
  url('../assets/fonts/Ubuntu-LI.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Lazenby';
	src: local('☺'), url('../assets/fonts/LazenbyCompSmooth.woff') format('woff'),
  url('../assets/fonts/LazenbyCompSmooth.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
}
a {
  color: #000;
  text-decoration: none;
  border-bottom: 5px solid #fff;
}
a:hover {
  border-bottom: 5px solid #000;
}

body {
  font-family: 'Conv_Ubuntu-LI';
  font-weight: normal;
  font-style: normal;
  margin:0;
  padding:0;
  line-height: 1.5;
  font-size: 1.4em;
}
h1, h2, h3, h4 {
font-family: 'Lazenby';
font-weight: normal;
font-style: normal;
font-size: 1.6em;
}

.layout {
  display: flex;
  flex-direction: column;
}

.header {

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  padding: 0 5vw;
  position: fixed;
  background-color: #fff;
  height: 12vh;
  border-bottom: 3px solid #000;

}

.article {
  padding: 0 4vw;
  display: flex;
  flex-direction: column;
  margin-top: 12vh;
  align-items: left;
}
.article p {
  max-width: 100vh;
}
blockquote {
  border-left: 3px solid #000;
  padding-left: 3vh;
}

@media screen and (orientation: landscape) {
  .por {
    display: none;
  }
}
@media screen and (orientation: portrait)  {
  body {
    font-size: 1.1em;
  }
}



</style>
