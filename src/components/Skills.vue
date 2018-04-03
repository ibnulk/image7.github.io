<template>
    <section id="skills">
        <b-container>

            <!-- Skills -->
            <h3 class="text-center top-heading" id="skill-heading">My Tech Arsenal!</h3>
            <hr class="top-hr light">
            <b-row class="skill-row" id="skill-row">
                <b-col sm="12" lg="9">
                    <carousel
                        :autoplay="true"
                        :loop="true"
                        :perPageCustom="[[768, 3], [1024, 4]]"
                        paginationColor="#888"
                    >
                        <slide class="custom-slide">
                            <i class="devicon-html5-plain-wordmark"></i>
                        </slide>
                        <slide class="custom-slide">
                            <i class="devicon-css3-plain-wordmark colored"></i>
                        </slide>
                        <slide class="custom-slide">
                            <i class="devicon-javascript-plain colored"></i>
                        </slide>
                        <slide class="custom-slide">
                            <i class="devicon-bootstrap-plain-wordmark colored"></i>
                        </slide>
                        <slide class="custom-slide">
                            <i class="devicon-sass-original colored"></i>
                        </slide>
                        <slide class="custom-slide">
                            <i class="devicon-vuejs-plain-wordmark colored"></i>
                        </slide>
                        <slide class="custom-slide">
                            <i class="devicon-react-original-wordmark colored"></i>
                        </slide>
                        <slide class="custom-slide">
                            <i class="devicon-nodejs-plain colored"></i>
                        </slide>
                        <slide class="custom-slide">
                            <i class="devicon-express-original-wordmark colored"></i>
                        </slide>
                        <slide class="custom-slide">
                            <i class="devicon-mongodb-plain-wordmark colored"></i>
                        </slide>
                        <slide class="custom-slide">
                            <i class="devicon-php-plain colored"></i>
                        </slide>
                        <slide class="custom-slide">
                            <i class="devicon-mysql-plain-wordmark colored"></i>
                        </slide>
                        <slide class="custom-slide">
                            <i class="devicon-wordpress-plain-wordmark colored"></i>
                        </slide>
                    </carousel>
                </b-col>
                <b-col cols="3" class="side-heading" style="left: 1em;">
                    <div class="vl-left"></div>
                    <h3 class="vl-heading" style="left: 0.5em;">My Tech Arsenal</h3>
                </b-col>
            </b-row>
            <hr class="side-hr">
            <!-- end Skilll -->

            <!-- Experience -->
            <h3 class="text-center top-heading">Work Experience</h3>
            <hr class="top-hr dark">
            <b-row class="skill-row">

                <b-col cols="3" class="side-heading">
                    <h3 class="vl-heading">Work Experience</h3>
                    <div class="vl-right"></div>
                </b-col>

                <b-col sm="12" lg="9">

                     <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion1 variant="dark-blue">Interspeed Digital</b-btn>
                        </b-card-header>
                        <b-collapse id="accordion1" visible accordion="experience-accordion" role="tabpanel">
                            <b-card-body>
                                <p class="card-text">
                                    I start opened because <code>visible</code> is <code>true</code>
                                </p>
                                <p class="card-text">
                                    {{ text }}
                                </p>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion2 variant="dark-blue">Accordion 3</b-btn>
                        </b-card-header>
                        <b-collapse id="accordion2" accordion="experience-accordion" role="tabpanel">
                            <b-card-body>
                            <p class="card-text">
                                {{ text }}
                            </p>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                </b-col>
            </b-row>
            <hr class="side-hr">
            <!-- end Experience -->

            <!-- Education -->
            <h3 class="text-center top-heading">Education</h3>
            <hr class="top-hr light">
            <b-row class="skill-row">

                <b-col sm="12" lg="9">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion3 variant="light-blue">Interspeed Digital</b-btn>
                        </b-card-header>
                        <b-collapse id="accordion3" visible accordion="work-accordion" role="tabpanel">
                            <b-card-body>
                                <p class="card-text">
                                    I start opened because <code>visible</code> is <code>true</code>
                                </p>
                                <p class="card-text">
                                    {{ text }}
                                </p>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion4 variant="light-blue">Accordion 2</b-btn>
                        </b-card-header>
                        <b-collapse id="accordion4" accordion="work-accordion" role="tabpanel">
                            <b-card-body>
                            <p class="card-text">
                                {{ text }}
                            </p>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion5 variant="light-blue">Accordion 3</b-btn>
                        </b-card-header>
                        <b-collapse id="accordion5" accordion="work-accordion" role="tabpanel">
                            <b-card-body>
                            <p class="card-text">
                                {{ text }}
                            </p>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
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
    .vl-left, .vl-right, .vl-heading {
        display: inline-block;
        position: absolute;
    }
    .vl-left, .vl-right {
        height: 100%;
    }
    .vl-left {
        border-left: 6px solid #0CA8D1;
        left: 0;
    }
    .vl-right {
        right: 0;
        border-left: 6px solid #034B63;
    }
    .vl-heading {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        /* margin: 0 5px; */
    }
    .btn-dark-blue {
        background: #034B63;
        border: #034B63;
        color: #fff;
    }
    .btn-light-blue {
        background: #0CA8D1;
        border: #0CA8D1;
        color: #fff;
    }
    .top-hr.light {
        border-top: 1px solid #0CA8D1;
    }
    .top-hr.dark {
        border-top: 1px solid #034B63;
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
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'Skills',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
        text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore VHS.`
    }
  }
}
</script>

