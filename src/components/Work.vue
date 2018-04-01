<template>

    <section id="work">
        <b-container>
          <h5 class="text-center">
            A list of my works I have done so far at my current job and for personal skill development
          </h5>
          <hr>
          <ul id="og-grid" class="og-grid">
              <li id="first" class="office animated fadeIn">
              <a href="#" :data-largesrc="getImgUrl('ispeed-700')" data-title="Interspeed Digital" data-description="Built the website for this startup i am currently working for. Technology used: Wordpress and jQuery">
                  <img src="../assets/img/thumbs/ispeed-250.jpg" alt="img01"/>
              </a>
              <expander @ogClicked="close" v-if="isExpander === 1" :imgSrc="imgSrc" :title="title" :description="description" projectLink="http://interspeeddigital.com"></expander>
              </li>
              <li id="second" class="personal animated fadeIn">
              <a href="#" :data-largesrc="getImgUrl('vascular-700')" data-title="Vascular Institute of Virginia" data-description="This is the first major project and the first work in my current working place which brought more exciting projects for the company. Built with following modern Worpdpress practices.">
                  <img src="../assets/img/thumbs/vascular-250.jpg" alt="img02"/>
              </a>
              <expander @ogClicked="close" v-if="isExpander === 2" :imgSrc="imgSrc" :title="title" :description="description" projectLink="http://vavascularinstitute.com"></expander>
              </li>
              <li id="third" class="office animated fadeIn">
              <a href="#" :data-largesrc="getImgUrl('jita-700')" data-title="JITA Bangladesh" data-description="This is another major project for Interspeed Digital. The website offers elegant look and feel with eye pleasing UI features. The NGO is using the website for hiring employees and growing their business in development sector. Built it using Wordpress and jQuery.">
                  <img src="../assets/img/thumbs/jita-250.jpg" alt="img03"/>
              </a>
              <expander @ogClicked="close" v-if="isExpander === 3" :imgSrc="imgSrc" :title="title" :description="description" projectLink="http://jitabangladesh.com"></expander>
              </li>
              <li class="personal animated fadeIn">
              <a href="#" :data-largesrc="getImgUrl('ponjika-700')" data-title="Ponjika" data-description="My current organization's ongoing passion project aims to bring light to traditional 'Bangali' culture based on Bangla Calendar. The website's UI is very unique and portraits the power of CSS. Built this project with wordpress leveraging the wordpress REST API to bring SPA look and feel.">
                  <img src="../assets/img/thumbs/ponjika-250.jpg" alt="img01"/>
              </a>
              <expander @ogClicked="close" v-if="isExpander === 4" :imgSrc="imgSrc" :title="title" :description="description" projectLink="http://ponjika.social"></expander>
              </li>
              <li class="office animated fadeIn">
              <a href="#" :data-largesrc="getImgUrl('big1')" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
                  <img src="../assets/img/thumbs/1.jpg" alt="img01"/>
              </a>
              <expander @ogClicked="close" v-if="isExpander === 5" :imgSrc="imgSrc" :title="title" :description="description" ></expander>
              </li>
              <li class="personal animated fadeIn">
              <a href="#" :data-largesrc="getImgUrl('big3')" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
                  <img src="../assets/img/thumbs/3.jpg" alt="img01"/>
              </a>
              <expander @ogClicked="close" v-if="isExpander === 6" :imgSrc="imgSrc" :title="title" :description="description" ></expander>
              </li>
              <li class="office animated fadeIn">
              <a href="#" :data-largesrc="getImgUrl('big2')" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
                  <img src="../assets/img/thumbs/2.jpg" alt="img01"/>
              </a>
              <expander @ogClicked="close" v-if="isExpander === 7" :imgSrc="imgSrc" :title="title" :description="description" ></expander>
              </li>
          </ul>
        </b-container>
    </section>

</template>

<style>
    #work {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 0;
    }
</style>


<script>
  import Expander from './Expander.vue'

  export default {
    name: "Work",
    components: {
      Expander
    },
    data() {
      return {
        previousRow : '',
        prevExpanded: '',
        isExpander: '',
        imgSrc: '',
        title: '',
        description: ''
      }
    },
    mounted() {
      const imageLinks = document.querySelectorAll('#og-grid li a');
      imageLinks.forEach((element, index) => {
        element.addEventListener('click', (event) => {
          event.preventDefault();
          var imgSrc = element.dataset.largesrc;
          var title = element.dataset.title;
          var description = element.dataset.description;
          console.log(imgSrc, title, description);
          // Check if row changes
          const trace = index + 1;
          const currentLi = element.parentElement;
          const isRowChanged = this.isRowChanged(currentLi, trace, this.previousRow);

          // if expanded class already exists in another li then remove
          let liExpanded = document.querySelector('.og-expanded')
          if(liExpanded) {
            liExpanded.classList.remove('og-expanded');
          }
          // Add expanded class to current li
          currentLi.classList.add('og-expanded');

          // Expander HTML
          // let expander = `<div class="og-expander" style="transition: height 350ms ease; height: 500px;"><div class="og-expander-inner"><span class="og-close"></span><div class="og-fullimg"><div class="og-loading" style="display: none;"></div><img src="${imgSrc}" style="display: inline;"></div><div class="og-details"><h3>${title}</h3><p>${description}</p><a href="#">Visit website</a></div></div></div>`;

          if (isRowChanged) {
            if (liExpanded) {
              this.prevExpanded.style.height = "250px";
            }
            currentLi.style.transition = "height 350ms ease";
            currentLi.style.height = "760px";
            this.prevExpanded = currentLi;
          }

          this.imgSrc = imgSrc
          this.title = title
          this.description = description
          this.isExpander = trace

        })
      });
    },
    methods: {
      getLiPosition(element, index) {
        const screenWidth = document.querySelector('#og-grid').getBoundingClientRect().width
        const elementWidth = element.getBoundingClientRect().width;
        const elementsPerRow = Math.floor(screenWidth / (elementWidth + 20));
        const whichRow = Math.ceil(index / elementsPerRow);
        // const whichRow = Math.ceil((index - noOfInactiveElemntsBeforeIdx) / elementsPerRow);
        return whichRow;
      },
      isRowChanged(currentLi, trace, previousRow) {
        const rowNumber = this.getLiPosition(currentLi, trace);
        if(rowNumber !== previousRow) {
          this.previousRow = rowNumber;
          return true;
        }
        return false;
      },
      getImgUrl(imageName) {
        var images = require.context('../assets/img', false, /\.jpg$/)
        return images('./' + imageName + ".jpg")
      },
      close(value) {
        this.isExpander = false;
        let liExpanded = document.querySelector('.og-expanded')
        if(liExpanded) {
          this.prevExpanded.style.height = "250px";
          liExpanded.classList.remove('og-expanded');
          this.previousRow = 0;
        }
      },
      // filter(option) {
      //   const all = document.querySelectorAll('#og-grid li');
      //   const office = document.querySelectorAll('.office');
      //   const personal = document.querySelectorAll('.personal');

      //   if (option === "all") {
      //     all.forEach((element, index) => {
      //       element.style.transition = "all ease 3s"
      //       element.style.opacity = 1;
      //       element.style.visibility = "visible"
      //       // element.querySelector('img').style.display = "block";
      //       element.style.width = "250px";
      //     })
      //   }
      //    if (option === "office") {
      //     all.forEach((element, index) => {
      //       element.style.transition = "all ease 3s"
      //       element.style.opacity = 0;
      //       element.style.visibility = "hidden"
      //       // element.querySelector('img').style.display = "none";
      //       element.style.width = "0px"
      //       element.style.height = "0px"
      //     })
      //     office.forEach((element, index) => {
      //       element.style.transition = "all ease 3s"
      //       element.style.opacity = 1;
      //       element.style.visibility = "visible"
      //       // element.querySelector('img').style.display = "block";
      //       element.style.width = "250px"
      //       element.style.height = "250px"
      //     })
      //   }
      //    if (option === 'personal') {
      //     all.forEach((element, index) => {
      //       element.style.transition = "all ease 3s"
      //       element.style.opacity = 0;
      //       element.style.visibility = "hidden"
      //       // element.querySelector('img').style.display = "none";
      //       element.style.width = "0px"
      //       element.style.height = "0px"
      //     })
      //     personal.forEach((element, index) => {
      //       element.style.transition = "all ease 3s"
      //       element.style.opacity = 1;
      //       element.style.visibility = "visible"
      //       // element.querySelector('img').style.display = "block";
      //       element.style.width = "250px"
      //       element.style.height = "250px"
      //     })
      //   }
      // }

    }
  }
</script>