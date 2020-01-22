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
              <img
                src="https://www.lime-technologies.se/wp-content/uploads/sites/2/2019/06/Asset-10-1.png"
                alt
                srcset
                height="50px"
              />
            </div>
            <div class="card-info">
              <p>Expertise.</p>
              <p>We've seen it all. Take advantage of it!</p>
            </div>
          </article>
          <article class="card-wrapper">
            <div class="card-image">
              <img
                src="https://www.lime-technologies.se/wp-content/uploads/sites/2/2019/06/Asset-11-1.png"
                alt
                srcset
                height="50px"
              />
            </div>
            <div class="card-info">
              <p>Simplicity.</p>
              <p>It's easy to be a customer at Strout.</p>
            </div>
          </article>
          <article class="card-wrapper">
            <div class="card-image">
              <img
                src="https://www.lime-technologies.se/wp-content/uploads/sites/2/2019/06/Asset-12-1.png"
                alt
                srcset
                height="50px"
              />
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

<style scoped>
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
  }
  .Banner .wrapper {
    padding: 50px;
  }
  .Header h1 {
    margin: 0 auto;
    text-align: center;
    font-size: 48px;
    transform: translateY(110%);
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
    transform: translateY(70%);
  }
  .cards .card-wrapper {
    width: 275px;
  }
  .cards .card-wrapper .card-image {
    text-align: center;
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