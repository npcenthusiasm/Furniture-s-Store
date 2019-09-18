<template>
  <div>
    <Navbar />
    <div class="jumbotron jumbotron-fluid">
      <div class="container mb-4">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">This is a modified jumbotron that occupie
          the entire horizontal space of its parent.</p>
      </div>
    </div>
    <div class="container mb-4">
      <div class="row mb-4">
        <div class="col-md-3">
          <ul class="list-group">
            <li class="list-group-item list-group-item-action active">
               <i class="fab fa-apple"></i> 全部商品</li>
            <li class="list-group-item list-group-item-action"><i class="fab fa-apple"></i> 桌子</li>
            <li class="list-group-item list-group-item-action"><i class="fab fa-apple"></i> 椅子</li>
            <li class="list-group-item list-group-item-action"><i class="fab fa-apple"></i> 沙發</li>
            <li class="list-group-item list-group-item-action"><i class="fab fa-apple"></i> 燈</li>
          </ul>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <img src="../../assets/images/carousel.jpg" class="card-img-top" alt="...">
                <div class="card-body" >
                  <p class="card-text">用您喜愛的風化皮革的質樸外觀大幅改變您的生活空間 - 只需花費一小部分成本。
                    這就是Larkinhurst仿皮沙發床的美麗。採用樸實的西南風色，寬大的背部和座椅支撐以及巨大的窗玻璃縫線，
                    令您感到舒適和高品質。經典的元素，如捲起的手臂和轉動的腳，帶來足夠的傳統觸感，而輕鬆滑動的拉出式大床墊為現代化的便利性。</p>
                </div>
                <div class="card-footer">
                 <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>

<script>
import Navbar from '../client/Navbar';
import Pagination from '../Pagination';

export default {
  components: {
    Navbar,
    Pagination,
  },
};

</script>
