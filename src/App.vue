<template>
  <div id="app">
    <nav id="menu">
      <a href="#work" @click.stop.prevent="navClicked">Work</a>
      <a href="#skills" @click.stop.prevent="navClicked">Skill</a>
      <a href="#contact" @click.stop.prevent="navClicked">Contact</a>
      <a href="#">Resume</a>
    </nav>
    <router-view></router-view>
    <a src="#" @click.stop.prevent="toggleMenu" class="hamburg"></a>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menushown: false
    }
  },
  // created() {
  //   window.addEventListener('scroll', function (event) {
  //     console.log(event)
  //   })
  // },
  mounted() {
    // Toogle menu showing on body click
    document.body.addEventListener('click', () => {
      if(this.menushown) {
        this.toggleMenu();
      }
    })

  },
  methods: {
    toggleMenu(event) {

      const $hamburgLink = $('.hamburg');
      const $body = $('body');

      document.body.classList.toggle("tilt");
      this.menushown = !this.menushown;
      if(this.menushown){
        if($hamburgLink.hasClass('black') && $body.hasClass('tilt')) {
          $hamburgLink.removeClass('black');
        }
        setTimeout(function(){
          document.body.classList.add("tiltz");}, 350);
        } else{
          if(!$hamburgLink.hasClass('black')) {
            $hamburgLink.addClass('black');
          }
          document.body.classList.remove("tiltz");
        }
      // if(event){
      //   setTimeout(function(){location=event.target.href}, 420);
      // }
    },
    navClicked(e) {
      let scrollTo = e.target.hash
      this.toggleMenu();

      function srcollToElem(element, to, duration) {
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) return;
            srcollToElem(element, to, duration - 10);
        }, 10);
      }

      const fromElement = document.querySelector('#body');
      let toElement = document.querySelector(scrollTo);

      setTimeout(() => {
        srcollToElem(fromElement, toElement.offsetTop, 1000)
      }, 500);
    },

  }

 }
</script>

<style>
  html, body {
    background: #181818;
    /* background: #f6fffb; */
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  body {
    font-family: 'Poppins', sans-serif !important;
  }
  #menu {
     position: absolute;
     top: 70px;
     left: 20px;
  }
  #menu a {
    color: #fff;
    display: block;
    margin-bottom: 15px;
    text-decoration: none;
    color: rgba(255,255,255,.8);
  }
  #menu a:hover {
    color: #fff;
  }
  .hamburg {
    position: absolute;
    z-index: 1000;
    top: 22px;
    left: 20px;
    border-top: 2px solid #fff;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: border 500ms ease-in-out;
  }
  .hamburg:before {
    content: "";
    position: absolute;
    top: 12px;
    border-top: 2px solid #fff;
    width: 20px;
    transition: border 500ms ease-in-out;
  }
  .hamburg:after {
    content: "";
    position: absolute;
    top: 5px;
    border-top: 2px solid #fff;
    width: 20px;
    transition: border 500ms ease-in-out;
  }
  .hamburg.black {
    border-top: 2px solid #000;
  }
  .hamburg.black:before {
    border-top: 2px solid #000;
  }
  .hamburg.black:after {
    border-top: 2px solid #000;
  }
</style>
