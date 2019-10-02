<template>
  <div class="og-expander" style="transition: height 350ms ease; height: 500px;">
    <div class="og-expander-inner">
      <span class="og-close" @click="ogClose"></span>
      <div class="og-fullimg">
        <div class="og-loading" style="display: none;"></div>
        <img :src="imgSrc" style="display: inline;" />
      </div>
      <div class="og-details">
        <h3>{{title}}</h3>
        <p>{{description}}</p>
        <a v-if="projectLink" :href="projectLink" target="_blank">Visit website</a>
        <p v-if="!projectLink">
          <i>Live Link cannot be provided beacuse it contains organiztion's sensitive data</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    title: String,
    description: String,
    projectLink: String
  },
  data() {
    return {
      name: "Expander"
    };
  },
  methods: {
    ogClose(event) {
      this.$emit("ogClicked", event);
    }
  }
};
</script>

