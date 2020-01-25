<template>
  <div class="card-section">
    <div class="home-product">
      <router-link to="/shop">
        <img
          src="https://www.weekday.com/content/dam/Weekday/startpage-content/2019/w39/w39_startpage_mobile_women_w.jpg"
          alt="Trip Mini Nylon Backpack Marigold"
        />
      </router-link>
    </div>
    <div class="home-product">
      <router-link to="/shop">
        <img
          src="https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2019102%5D,source%5B01_0796060_001_001%5D,type%5BECOMLOOK%5D&call=url%5Bfile:/product/dynamic.chain%5D"
          alt="Trip Mini Nylon Backpack Marigold"
        />
      </router-link>
    </div>
    <div class="home-product">
      <router-link to="/shop">
        <img
          src="https://lp.weekday.com/app003prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B2019102%5D,source%5B01_0796180_001_001%5D,type%5BECOMLOOK%5D&call=url%5Bfile:/product/dynamic.chain%5D"
          alt="Trip Mini Nylon Backpack Marigold"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardSection"
  };
</script>

<style lang="scss" scoped>
  .card-section {
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    @media (max-width: 767px) {
      display: block;
    }
  }
  .home-product {
    width: 33.3333%;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .home-product img {
    height: 100%;
    width: 100%;
    position: relative;
  }
</style>