<template>
  <div>
    <div class="container mb-4">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active bg-cover" style="background-image: url(https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)">
          </div>
          <div class="carousel-item bg-cover" style="background-image:url(https://images.unsplash.com/photo-1545083036-b175dd155a1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80">
          </div>
          <div class="carousel-item bg-cover" style="background-image:url(https://images.unsplash.com/photo-1560185009-dddeb820c7b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)">
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
      <h3>熱門商品</h3>
      <div class="row mb-4 ">
        <div class="col-4">
          <div class="bg-cover product-item" style="background-image:url(https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=661&q=80)">
            <router-link class="black-cover" style="text-decoration: none"
            to="/productList"><span class="font-weight-bold h3">各式桌椅</span>
            </router-link>
          </div>
        </div>
        <div class="col-4">
          <div class="bg-cover product-item " style="background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/npcenthusiasm%2F1568891685857.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bWdzvTHrcfYEhlCJFbZMir3%2FfH8IX88CfHRudG8d2josd2Y0qiN8wYZz7BwO6N311HjNUdz0u6oFKhUGBtHI%2BOP4zyMQcEAxDjL%2B0UV0LDFUB5TLTeBAzcpmX5qamoZCD0SvBsNQ6fT3pXXybmXeG4SKlKVRS0cho9CuU84KkIZAfNdAPqpZoI5xox5mqfPn7QEKlTGdtDjL0YuZ2XwzpvrzUBNZssp3xKeFnzTmjFDFfFF%2BMgVtGcDXvbw80atK9WWGUZ9hN9sIPy8fc1qVkrxiAtNKanpFbL9nITtFtd9T80T%2BRUv1y4YYK4OyJnaXrBbwN7t5H9BOSSWERFiIsA%3D%3D">
            <router-link class="black-cover" style="text-decoration: none"
            to="/productList"><span class="font-weight-bold h3">各式桌椅</span>
            </router-link>
          </div>
        </div>
        <div class="col-4">
          <div class="bg-cover product-item" style="background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/npcenthusiasm%2F1568890174984.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=g85kdAybS9ogKHYHZJUg7nbTVV3qYbcYksFdHb9v%2FzDVlxs4Yr0JGz2gq9B3SLiFedI7WWsNYJvJ3oGIdVTFZcsGJRgkpP4%2FSXv1J84qPI073zPgyfjP4n2pmFxVRDEDnR88HW6LSwzS40kiwkg%2BlahiSeCBPRLE2hIR7Fk2wg4l9PeVs7ozsMRJAr4yPUmVvatZ6T0GUiAVlIwMiurRTLl6GqEo50Pm7B26lK3l7JUdmwi1bxYXgRNAEIsBxkH%2FWULqNx8dwjnTAvEGTeQk%2BQtmkzY4WybdCy501URrzDYSPWhYRJLlCEhR9QZa6YwSdSTKvSXJLYLzx6MSO8nBCg%3D%3D">
            <router-link class="black-cover" style="text-decoration: none"
            to="/productList"><span class="font-weight-bold h3">燈具</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-6">
          <div class="bg-cover product-item" style="background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/npcenthusiasm%2F1568891430169.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=g1jL9DOK0XRPt05cP5QIUz29RDNe1gLHhXxJRvtfkH0ZBjZvHlALpRzWsqdauanJe0OpPpdI0cQuniPVkH%2FpOMV%2F9sQrhfhUaTW6nab%2B8CW42DCm7qtQ066tUcKAuLQ8vHfRGFUCDhI%2FUAvR3V1fehDDMBCy42Sv%2Fg2ywqk01tCohoccFhi8bCigZvzhsjYsl8j%2F%2BALEFk8X7Gu9ofvluI8%2BbI3pghTd2bAhqYzGtEyZmAP8wyOj4xC9yQSJwHrtPOoUtyxvfi7kILDfpNu8XCGbzScDmHGde5STVe4bVkvChqbA1QADtVxwsqo8O3TkwkhAu8y04h2B8mk7QCIFMw%3D%3D">
            <router-link class="black-cover" style="text-decoration: none"
            to="/productList"><span class="font-weight-bold h3">寢具</span>
            </router-link>
          </div>
        </div>
        <div class="col-6">
          <div class="bg-cover product-item" style="background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/npcenthusiasm%2F1568892375717.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CWTr13KoSq4h8zubCM7bOmbpHhRkS%2F9Fvda2vF7dyPbssysExc3GJwyfV%2B93BUc8Y07wWJsWYXzzXr%2BbYuh%2Fxkguip3oxSzg2oPQA%2Fh%2FV5P6KLBBz9XIG06a43LhAAiqaBjx2hp4FtRPdwh48mC4mz4Y6OTK8LZygt3ENKjlv2vw8qVlszSjSP0IK7RVjNnsyhXx3yaLKYr%2Bh4l6bpYStwQkgqxoDivYyD%2FwhaAOrQxGAouCuW%2Ff13xtlVjJxSbhb6dDDBUXFuA7oXuCxeitxcMLlEvgImj88KUQR5G%2FP9nGeuhLeNIKwIJsaLChoyKqwjh6WLdK4IytRt7Z9m4JXw%3D%3D">
            <router-link class="black-cover" style="text-decoration: none"
            to="/productList"><span class="font-weight-bold h3">沙發</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-4">
      <h3>最新消息</h3>
      <div class="row">
        <div class="col-md-6 mb-3 text-center d-flex align-items-center justify-content-center">
          <div style="">
            <h1>使用優惠券代碼「magic」可獲得50％的優惠。</h1>
            <p>(售完為止)</p>
            <a href="#" class="btn btn-outline-primary">查看更多</a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-6">
              <img class="img-fluid" src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
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

<style lang="">
  .carousel-item {
    height:400px;
  }
  .product-item {
    height: 290px;
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
