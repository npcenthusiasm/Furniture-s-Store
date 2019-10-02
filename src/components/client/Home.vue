<template>
  <div>
    <div class="container mb-4">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active bg-cover carousel-1"></div>
          <div class="carousel-item bg-cover carousel-2">
          </div>
          <div class="carousel-item bg-cover carousel-3">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls"
        role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls"
        role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="container mb-4">
      <h3 id="hot">熱門商品</h3>
      <div class="row mb-4 ">
        <div class="col-4">
          <div class="bg-cover product-item product-1" >
            <router-link class="black-cover" style="text-decoration: none"
            to="/productList"><span class="font-weight-bold h3">各式桌椅</span>
            </router-link>
          </div>
        </div>
        <div class="col-4">
          <div class="bg-cover product-item product-2">
            <router-link class="black-cover" style="text-decoration: none"
            to="/productList"><span class="font-weight-bold h3">各式桌椅</span>
            </router-link>
          </div>
        </div>
        <div class="col-4">
          <div class="bg-cover product-item product-3">
            <router-link class="black-cover" style="text-decoration: none"
            to="/productList"><span class="font-weight-bold h3">燈具</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-6">
          <div class="bg-cover product-item product-4">
            <router-link class="black-cover" style="text-decoration: none"
            to="/productList"><span class="font-weight-bold h3">寢具</span>
            </router-link>
          </div>
        </div>
        <div class="col-6">
          <div class="bg-cover product-item product-5">
            <router-link class="black-cover" style="text-decoration: none"
            to="/productList"><span class="font-weight-bold h3">沙發</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-4">
      <h3 id="new">最新消息</h3>
      <div class="row">
        <div class="col-md-6 mb-3 text-center d-flex align-items-center justify-content-center">
          <div style="">
            <h1>使用優惠券代碼「magic」可獲得50％的優惠。</h1>
            <p>(售完為止)</p>
            <router-link to="/productList" class="btn btn-outline-primary">查看更多</router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-6">
              <img class="img-fluid" src="../../assets/images/vase.jpg">
            </div>
            <div class="col-6">
              <h3>新品上市<span class="h5 text-danger flicker">NEW</span></h3>
              <p>
               不論是一束花，或是單枝玫瑰，就算單純擺放也像藝術品，讓你盡情布置自己空間，展現創意和風格，連角落都美麗。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .carousel-item {
    height:400px;
  }
  .product-item {
    height: 290px;
  }
  .carousel-1 {
  background-image: url('../../assets/images/carousel-1.jpg');
  }
  .carousel-2 {
  background-image: url('../../assets/images/carousel-2.jpg');
  }
  .carousel-3 {
  background-image: url('../../assets/images/carousel-3.jpg');
  }
  .product-1 {
  background-image: url('../../assets/images/product-1.jpg');
  }
  .product-2 {
  background-image: url('../../assets/images/product-2.jpg');
  }
  .product-3 {
  background-image: url('../../assets/images/product-3.jpg');
  }
  .product-4 {
  background-image: url('../../assets/images/product-4.jpg');
  }
  .product-5 {
  background-image: url('../../assets/images/product-5.jpg');
  }

  .bg-cover {
    background-position: center center ;
    background-size: cover;
  }
  .black-cover{
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    border: 1px solid rgba(255,255,255,0.5);
    text-decoration: none;
    height:290px;
    position: relative;
  }

  .black-cover span{
    display: none;
  }
  .black-cover:hover span{
    z-index: 2;
    display: block;
    color: white;
  }
  .black-cover::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.4s;
  }
  .black-cover:hover::before{
    opacity: 1;
  }
  @keyframes flicker {
    0%{opacity: 1;}
    50%{opacity: 0;}
    100%{opacity: 1;}
  }
  .flicker {
    animation: flicker 2s linear infinite;
  }
  @media (max-width: 768px) {
    .carousel-item {
      height: 300px;
    }
    /* .product-item {
      height: 150px;
    }
    .black-cover {
      height: 150px;
    } */
  }
  @media (max-width: 575.98px) {
    .carousel-item {
      height: 200px;
    }
    .product-item {
      height: 150px;
    }
    .black-cover {
      height: 150px;
    }
  }
</style>
