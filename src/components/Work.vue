<template>
  <section id="work">
    <b-container>
      <h3 class="text-center">My Works</h3>
      <hr />
      <ul id="og-grid" class="og-grid">
        <li v-for="(work, index) in workList" v-bind:key="`work-${index}`">
          <a
            href="#"
            :data-largesrc="getImgUrl(work.largeImageName)"
            :data-title="work.title"
            :data-description="work.description"
          >
            <img :src="getThumbUrl(work.thumbnailName)" :alt="work.thumbnailName" />
          </a>
          <expander
            @ogClicked="close"
            v-if="isExpander === work.workIndex"
            :imgSrc="imgSrc"
            :title="title"
            :description="description"
            :projectLink="work.projectLink"
          ></expander>
        </li>
      </ul>
    </b-container>
  </section>
</template>

<style>
#work {
  min-height: 100vh;
  background: #f6fffb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}
</style>

<script>
import Expander from "./Expander.vue";
import config from "../config";

export default {
  name: "Work",
  components: {
    Expander
  },
  data() {
    return {
      workList: config.workList,
      previousRow: "",
      prevExpanded: "",
      isExpander: "",
      imgSrc: "",
      title: "",
      description: ""
    };
  },
  mounted() {
    let imageLinks = document.querySelectorAll("#og-grid li a");
    console.log(imageLinks);
    Array.from(imageLinks).forEach((element, index) => {
      element.addEventListener("click", event => {
        event.preventDefault();
        var imgSrc = element.dataset.largesrc;
        var title = element.dataset.title;
        var description = element.dataset.description;
        console.log(imgSrc, title, description);
        // Check if row changes
        const trace = index + 1;
        const currentLi = element.parentElement;
        const isRowChanged = this.isRowChanged(
          currentLi,
          trace,
          this.previousRow
        );

        // if expanded class already exists in another li then remove
        let liExpanded = document.querySelector(".og-expanded");
        if (liExpanded) {
          liExpanded.classList.remove("og-expanded");
        }
        // Add expanded class to current li
        currentLi.classList.add("og-expanded");

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

        this.imgSrc = imgSrc;
        this.title = title;
        this.description = description;
        this.isExpander = trace;
      });
    });
  },
  methods: {
    getLiPosition(element, index) {
      const screenWidth = document
        .querySelector("#og-grid")
        .getBoundingClientRect().width;
      const elementWidth = element.getBoundingClientRect().width;
      const elementsPerRow = Math.floor(screenWidth / (elementWidth + 20));
      const whichRow = Math.ceil(index / elementsPerRow);
      // const whichRow = Math.ceil((index - noOfInactiveElemntsBeforeIdx) / elementsPerRow);
      return whichRow;
    },
    isRowChanged(currentLi, trace, previousRow) {
      const rowNumber = this.getLiPosition(currentLi, trace);
      if (rowNumber !== previousRow) {
        this.previousRow = rowNumber;
        return true;
      }
      return false;
    },
    getImgUrl(imageName) {
      var images = require.context("../assets/img", false, /\.jpg$/);
      return images("./" + imageName + ".jpg");
    },
    getThumbUrl(imageName) {
      if (imageName === "jigglemed-250") {
        var images = require.context("../assets/img/thumbs", false, /\.png$/);
        return images("./" + imageName + ".png");
      } else {
        var images = require.context("../assets/img/thumbs", false, /\.jpg$/);
        return images("./" + imageName + ".jpg");
      }
    },
    close(value) {
      this.isExpander = false;
      let liExpanded = document.querySelector(".og-expanded");
      if (liExpanded) {
        this.prevExpanded.style.height = "250px";
        liExpanded.classList.remove("og-expanded");
        this.previousRow = 0;
      }
    }
  }
};
</script>