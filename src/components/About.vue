<template>
  <div class="background">
    <div class="container">
      <div class="header">
        <h1>About</h1>
      </div>
      <div class="body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dignissimos impedit saepe consequatur corporis repudiandae modi eligendi voluptatem atque cum perspiciatis aspernatur fugit hic explicabo amet vero odio, labore facilis?</p>
      </div>
      <div class="footer">
        <h1>
          <span style="color: black;">strou</span>
          <span
            style="color: #20bf6b; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;"
          >t</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>
<style lang="scss" scoped>
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .background {
    width: 100%;
    min-height: 924px;
    background: linear-gradient(rgba(255, 255, 255, 0.2)),
      url("~@/assets/forest1.jpg") no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .container {
    width: 60%;
    margin: 0 auto;
    position: relative;
    transform: translateY(80%);
    background: linear-gradient(rgba(255, 255, 255, 0.3));
    border-radius: 8px;
    @media (max-width: 676px) {
      transform: translateY(20%);
      width: 90%;
    }
  }
  .header {
    height: 20%;
    text-align: center;
    padding: 20px;
  }
  .header h1 {
    margin: 0;
  }
  .body {
    height: 20%;
    width: 80%;
    margin: 0 auto;
    @media (max-width: 676px) {
      p {
        text-align: center;
      }
    }
  }
  .footer {
    height: 20%;
    text-align: center;
  }
  .footer h1 {
    font-size: 64px;
    opacity: 0.3;
    text-transform: uppercase;
    font-style: italic;
  }
</style>