<template>
  <div class="hero-image">
    <div class="image-gender">
      <img
        src="https://www.weekday.com/content/dam/Weekday/startpage-content/2019/w36/w36_startpage_desktop_women_w.jpg"
        style="border: none;"
      />
      <div class="info-text-women">
        <ButtonCustom :text="'Women'" @click.native="toShop('women')"></ButtonCustom>
      </div>
    </div>
    <div class="image-gender">
      <img
        src="https://www.weekday.com/content/dam/Weekday/startpage-content/2019/w36/w37_startpage_desktop_men_m.jpg"
        style="border: none;"
      />
      <div class="info-text-men">
        <ButtonCustom :text="'Men'" @click.native="toShop('men')"></ButtonCustom>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonCustom from "./ButtonCustom";
  export default {
    components: {
      ButtonCustom
    },
    methods: {
      toShop(value) {
        if (value === "women") {
          this.$emit("shopState", value);
          this.$router.push({ name: "Shop", params: { shopDir: value } });
        } else if (value === "men") {
          this.$emit("shopState", value);
          this.$router.push({ name: "Shop", params: { shopDir: value } });
        }
      }
    }
  };
</script>

<style scoped>
  .hero-image {
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
  }

  .image-gender {
    width: 50%;
    position: relative;
  }

  .image-gender img {
    width: 100%;
    height: 100%;
  }

  .info-text-women {
    position: absolute;
    margin: 0 auto;
    top: 50%;
    right: 5%;
  }
  .info-text-men {
    position: absolute;
    margin: 0 auto;
    top: 50%;
    left: 5%;
  }
</style>