<template>
  <div id="all">
    <div id="all-wrapper">

      <section id="body" v-scroll="handleScroll">
      <!-- <section id="body"> -->

        <landing></landing>
        <work></work>
        <skills></skills>
        <contact></contact>
        <end></end>

      </section> <!-- end #body -->

    </div>
  </div>
</template>

<style scoped>
  #all {
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 100px 50px #000;
    top: -40vh;
    padding-top: 40vh;
    /* background: radial-gradient(ellipse at bottom left,#021c7f 40%,#111 100%); */
    /* background: #f6fffb; */
    background: #0CA8D1;
    transition: transform .4s cubic-bezier(.82,0,.63,1.26);
    transform-origin: 0 160%;
    width: 100vw;
    height: 140vh;
  }
  .tilt #all {
    transform: rotateZ(9deg);
  }
  @media screen and (min-width: 500px) and (max-width: 750px) {
    .tilt #all {
      transform: rotateZ(13deg);
    }
  }
  #all div#all-wrapper {
    position: absolute;
    overflow: hidden;
    top: 40vh;
    left: 0;
    right: 0;
    bottom: 0;
  }
  #body {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  /* #footer {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100px;
    background: #034B63;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
</style>

<script>
  import Landing from './Landing.vue'
  import Work from './Work.vue'
  import Skills from './Skills.vue'
  import Contact from './Contact.vue'
  import End from './End.vue'

  export default {
    name: "FrontPage",
    components: {
      Landing,
      Work,
      Skills,
      Contact,
      End
    },
    data() {
      return {

      }
    },
    methods: {
      handleScroll(event, position) {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        // Hamburg class manipulation
        const $hamburg = document.querySelector('.hamburg');
        if(position.scrollTop >= windowHeight && !$('body').hasClass('tilt')) {
          $hamburg.classList.add('black');
        } else {
          $hamburg.classList.remove('black');
        }
      }
    }

  }

</script>


