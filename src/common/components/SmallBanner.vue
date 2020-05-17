<template>
  <div>
    <section class="Banner">
      <div class="wrapper">
        <div class="Header">
          <h1>Strout Preach Sustainability</h1>
        </div>
        <div class="cards">
          <article class="card-wrapper">
            <div class="card-image">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="card-info">
              <p>Expertise.</p>
              <p>We've seen it all. Take advantage of it!</p>
            </div>
          </article>
          <article class="card-wrapper">
            <div class="card-image">
              <i class="fas fa-tshirt"></i>
            </div>
            <div class="card-info">
              <p>Simplicity.</p>
              <p>It's easy to be a customer at Strout.</p>
            </div>
          </article>
          <article class="card-wrapper">
            <div class="card-image">
              <i class="far fa-laugh-beam"></i>
            </div>
            <div class="card-info">
              <p>Engagement.</p>
              <p>Get a glimpse of our everyday life @lifeAtStrout.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SmallBanner"
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
body {
  margin: 0;
  height: 100%;
  width: 100%;
}
.Banner {
  height: 600px;
  width: 100%;
  background-color: #fff;
  font-family: "Roboto", sans-serif;
  display: table;
  @media (max-width: 767px) {
    height: 0;
    padding: 50px 0px;
  }
}
.Banner .wrapper {
  padding: 50px;
  display: table-cell;
  vertical-align: middle;
  @media (max-width: 767px) {
    padding: 0px;
  }
}
.Header h1 {
  margin: 0 auto 50px auto;
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.015em;
  opacity: 0.7;
}
.cards {
  display: flex;
  flex-grow: 1;
  padding: 2%;
  flex-basis: 16%;
  justify-content: center;
  @media (max-width: 767px) {
    display: block;
  }
}
.cards .card-wrapper .card-image {
  text-align: center;
  i {
    font-size: 100px;
    color: #20bf6b;
    opacity: 0.6;
  }
}
.cards .card-wrapper {
  &:nth-child(2) {
    margin: 0px 50px;
  }
}
.cards .card-wrapper .card-info {
  text-align: center;
}
.cards .card-wrapper p:first-child {
  font-size: 21px;
  font-weight: bold;
  opacity: 0.6;
}
.cards .card-wrapper p:last-child {
  opacity: 0.6;
  font-size: 14px;
}
</style>
