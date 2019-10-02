<template>
  <section id="landing">
    <div id="intro">
      <h2 class="animated bounceInDown">{{greeting}}</h2>
      <h1 class="animated fadeIn">{{introduction}}</h1>
      <h5 class="animated bounceInLeft">{{myTitle}}</h5>
      <br />
      <b-button
        size="lg"
        variant="custom"
        class="animated bounceInUp"
        @click="callToAct"
      >{{callToActionBtnText}}</b-button>
    </div>
  </section>
</template>

<style>
#landing {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  background: #0ca8d1;
  color: #f6fffb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#intro h1 {
  font-weight: 700;
  font-size: 3.5rem;
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
import config from '../config'

export default {
  Name: 'Landing',
  data () {
    return {
      greeting: config.greeting,
      introduction: config.introduction,
      myTitle: config.myTitle,
      callToActionBtnText: config.callToActionBtnText
    }
  },
  methods: {
    callToAct () {
      const $work = document.getElementById('work')

      $work.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      })
    }
  }
}
</script>
