<template>
  <div>
    <Banner></Banner>
    <SmallBanner></SmallBanner>
    <div class="img-rethink">
      <img
        src="https://www.weekday.com/content/dam/Weekday/static-site-content/sustainability/Re-think_desktop_header.png"
        alt
        srcset
      />
    </div>
    <CardSection></CardSection>
  </div>
</template>

<script>
  import Banner from "../common/components/Banner";
  import CardSection from "../common/components/CardSection";
  import SmallBanner from "../common/components/SmallBanner";
  export default {
    components: {
      Banner,
      CardSection,
      SmallBanner
    }
  };
</script>

<style scoped>
  body,
  html {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  .img-rethink img {
    width: 100%;
    height: 100%;
  }
</style>