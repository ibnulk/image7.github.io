<template>
  <section id="skills">
    <b-container>
      <!-- Skills -->
      <h3 class="text-center top-heading" id="skill-heading">My Tech Arsenal</h3>
      <hr class="top-hr light" />
      <b-row class="skill-row" id="skill-row">
        <b-col sm="12" lg="9">
          <carousel
            :autoplay="true"
            :loop="true"
            :perPageCustom="[[768, 3], [1024, 4]]"
            paginationColor="#888"
          >
            <slide
              v-for="(skill, index) in skills"
              v-bind:key="`${skill}-${index}`"
              class="custom-slide"
            >
              <i :class="skill"></i>
            </slide>
          </carousel>
        </b-col>
        <b-col cols="3" class="side-heading" style="left: 1em;">
          <div class="vl-left"></div>
          <h3 class="vl-heading" style="left: 0.5em;">My Tech Arsenal!</h3>
        </b-col>
      </b-row>
      <hr class="side-hr" />
      <!-- end Skilll -->

      <!-- Experience -->
      <h3 class="text-center top-heading">Work Experience</h3>
      <hr class="top-hr dark" />
      <b-row class="skill-row">
        <b-col cols="3" class="side-heading">
          <h3 class="vl-heading">Work Experience</h3>
          <div class="vl-right"></div>
        </b-col>

        <b-col sm="12" lg="9">
          <b-card
            v-for="(workExp, index) in workExps"
            v-bind:key="`${workExp}-${index}`"
            no-body
            class="mb-1"
          >
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn
                block
                href="#"
                v-b-toggle="`accordion${index}`"
                variant="dark-blue"
              >{{workExp.name}}</b-btn>
            </b-card-header>
            <b-collapse
              :id="`accordion${index}`"
              visible
              accordion="experience-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <p class="card-text">
                  <b>Duration:</b>
                  {{workExp.timePeriod}}
                  <br />
                  <a :href="workExp.website" target="_blank">Website</a>
                </p>
                <b-card-text class="card-text">
                  <b>Designation:</b>
                  {{workExp.designation}}
                  <!-- <br />
                  <b>Responsibilities:</b>
                  <ul>
                    <li
                      v-for="(responsibility, index) in workExp.responsibilities"
                      v-bind:key="`${responsibility}-${index}`"
                    >{{responsibility}}</li>
                  </ul>-->
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </b-col>
      </b-row>
      <hr class="side-hr" />
      <!-- end Experience -->

      <!-- Education -->
      <h3 class="text-center top-heading">Education</h3>
      <hr class="top-hr light" />
      <b-row class="skill-row">
        <b-col sm="12" lg="9">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion3 variant="light-blue">Graduation (2016)</b-btn>
            </b-card-header>
            <b-collapse id="accordion3" visible accordion="work-accordion" role="tabpanel">
              <b-card-body>
                <p class="card-text">
                  I have graduated from
                  <a
                    href="http://ruet.ac.bd/"
                    target="_blank"
                  >Rajshahi University of Engineering and Technology (RUET).</a> Here I got introduced to
                  <b>C</b> programming and
                  <b>Matlab</b> in the academic curriculam and my interest in programming had grown which eventually led me to choose my current profession.
                </p>
                <p class="card-text">
                  <b>Degree:</b> BSc. in Electrical and Electronics Engineering
                  <br />
                  <b>Thesis:</b> Computer Aided Detection of Brain Tumor from MRI Image using Image Processing Techniques.
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!-- <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn
                block
                href="#"
                v-b-toggle.accordion4
                variant="light-blue"
              >Higher Secondary (2010)</b-btn>
            </b-card-header>
            <b-collapse id="accordion4" accordion="work-accordion" role="tabpanel">
              <b-card-body>
                <p class="card-text">
                  Completed my Higher Secondary in Science from
                  <a
                    href="http://www.dgc.edu.bd/"
                    target="_blank"
                  >Dinajpur Government Collage</a>
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>-->
        </b-col>

        <b-col cols="3" class="side-heading">
          <div class="vl-left"></div>
          <h3 class="vl-heading">Education</h3>
        </b-col>
      </b-row>
      <!-- end Education -->
    </b-container>
  </section>
</template>

<style scoped>
#skills {
  min-height: 100vh;
  /* background: #E3E2DF; */
  background: #f6fffb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}
.skill-row {
  min-height: 30vh;
  margin-bottom: 1rem;
}
.tech-icon {
  width: 200px;
  height: 200px;
  line-height: 200px;
}
/* .custom-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
    } */
.custom-slide i {
  /* display: block;
        padding: 30px 0 0; */
  font-size: 7rem;
}
.side-heading {
  position: relative;
}
.vl-left,
.vl-right,
.vl-heading {
  display: inline-block;
  position: absolute;
}
.vl-left,
.vl-right {
  height: 100%;
}
.vl-left {
  border-left: 6px solid #0ca8d1;
  left: 0;
}
.vl-right {
  right: 0;
  border-left: 6px solid #034b63;
}
.vl-heading {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* margin: 0 5px; */
}
.btn-dark-blue {
  background: #034b63;
  border: #034b63;
  color: #fff;
}
.btn-light-blue {
  background: #0ca8d1;
  border: #0ca8d1;
  color: #fff;
}
.top-hr.light {
  border-top: 1px solid #0ca8d1;
}
.top-hr.dark {
  border-top: 1px solid #034b63;
}
@media screen and (max-width: 767px) {
  .side-heading,
  .side-hr {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .top-heading,
  .top-hr {
    display: none;
  }
}
</style>

<script>
import { Carousel, Slide } from 'vue-carousel'
import config from '../config'

export default {
  name: 'Skills',
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      skills: config.skills,
      workExps: config.workExperiences
    }
  }
}
</script>
