<template>
  <div>
    <div class="container mb-4">
      <Navbar />
    </div>
    <div class="container mb-4">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active bg-cover" style="background-image: url(https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)">
            <!-- <img src="@/assets/images/carousel.jpg" class="d-block w-100 img-fluid" alt=""> -->
          </div>
          <div class="carousel-item bg-cover" style="background-image:url(https://images.unsplash.com/photo-1545083036-b175dd155a1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
          </div>
          <div class="carousel-item bg-cover" style="background-image:url(https://images.unsplash.com/photo-1560185009-dddeb820c7b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
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
      <div class="row">
        <div class="col-md-4 bg-success">
          <div class="card">
            <!-- <div class="card-body"> -->
              <img class="img-fluid card-img-top" src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=661&q=80" alt="">
            <!-- </div> -->
          </div>
        </div>
        <div class="col-md-4 bg-danger">
          <img class="img-fluid card-img-top" src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
        </div>
        <div class="col-md-4 bg-warning">
          <img class="img-fluid card-img-top" src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
        </div>
         <div class="col-md-8 bg-warning">
          <img class="img-fluid card-img-top" src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
        </div>
         <div class="col-md-4 bg-warning">
          <img class="img-fluid card-img-top" src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
        </div>
      </div>
    </div>
    <div class="container mb-4">
      <div class="row">
        <div class="col-md-6 text-center d-flex align-items-center  justify-content-center">
          <div style="">
            <h1> Use coupon code "WinterLove" for 30% off all lighting.</h1>
            <p>(while supplies last, of course)</p>
            <a href="#" class="btn btn-outline-primary">查看更多</a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <img class="img-fluid card-img-top" src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
            </div>
            <div class="col-md-6">
              <div>
                Black Chair
              $80
              STYLE
              NO ARMS ARMS
              COLOR
              Regular price$80.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="bg-dark py-5 text-white text-center">
      <div class="container">
      <ul class="list-inline">
        <li class="list-inline-item">© Copright 2017 SHOP</li>
        <li class="list-inline-item">
          <a href="#" class="text-white"><i class="fab fa-instagram fa-2x"></i></a>
        </li>
        <li class="list-inline-item"><a href="#" class="text-white">
          <i class="fab fa-instagram fa-2x"></i></a>
        </li>
        <li class="list-inline-item">
          <a href="#" class="text-white"><i class="fab fa-instagram fa-2x"></i></a>
        </li>
      </ul>
    </div>
    </footer>
  </div>
</template>
<script>
import Navbar from '../client/Navbar';

export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="">
  .bg-cover {
    height: 500px;
    background-position: center center ;
    background-size: cover;
  }

</style>
