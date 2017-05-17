<template lang="pug">
  .index-page
    kr-home#home
    kr-services#services
    kr-about#about
    kr-skills#skills
    kr-social-links#contact
    kr-contact
    kr-footer
</template>

<script>
  import Home from 'src/components/sections/Home/Home.vue';
  import Services from 'src/components/sections/Services/Services.vue';
  import About from 'src/components/sections/About/About.vue';
  import Skills from 'src/components/sections/Skills/Skills.vue';
  import Contact from 'src/components/sections/Contact/Contact.vue';
  import SocialLinks from 'src/components/sections/SocialLinks/SocialLinks.vue';
  import Footer from 'src/components/sections/Footer/Footer.vue';

  export default {
    afterEach() {
      console.log(888)
    },
    mounted() {
      const { hash } = this.$router.history.current;
      this.$router.push(hash);

      this.$router.afterEach(function (to, from) {
        console.log(888, to, from)
      })
    },
    components: {
      'kr-home': Home,
      'kr-services': Services,
      'kr-about': About,
      'kr-skills': Skills,
      'kr-social-links': SocialLinks,
      'kr-contact': Contact,
      'kr-footer': Footer,
    },
  };
</script>

<style scoped lang="scss">
  .index-page {
    z-index: 1;
    display: flex;
    position: relative;
    flex-direction: column;
  }
</style>
