<template>

    <section id="landing">
        <div id="intro">
          <h2 class="animated bounceInDown">Hello!</h2>
          <h1 class="animated fadeIn">I am Kayes</h1>
          <h5 class="animated bounceInLeft">Full Stack Web Developer</h5>
          <!-- <h5 class="animated bounceInRight">Machine Learning Enthusiast</h5> -->
          <br>
          <b-button size="lg" variant="custom" class="animated bounceInUp" @click="callToAct">About Me</b-button>
        </div>
    </section>

</template>

<style>
  #landing {
    width: 100vw;
    min-height: 100vh;
    position: relative;
    background: #0CA8D1;
    color: #f6fffb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #intro h1 {
    font-weight: 700;
    font-size: 3.5rem;
    /* animation-duration: 1.5s; */
  }
  #intro h2 {
    line-height: 0.5;
  }
  .btn-custom {
    background: none;
    border: 1px solid #fff;
    color: #fff;
  }
</style>

<script>
export default {
  Name: "Landing",
  data() {
    return {

    }
  },
  methods: {
    callToAct() {
      const $work = $('#work');
      $('#body').animate({
        scrollTop: $work.offset().top
    }, 1000);
    }
  }
}
</script>
