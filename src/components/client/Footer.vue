<template>
  <div>
    <footer class="py-5">
      <hr />
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 col-sm-4">
            <ul class="list-group">
              <li class="list-group-item h5" id="about">ABOUT</li>
              <li class="list-group-item">
                <router-link to="/productList">最新公告</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/productList">關於我們</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/productList">門市資訊</router-link>
              </li>
            </ul>
          </div>
          <div class="col-6 col-sm-4">
            <ul class="list-group">
              <li class="list-group-item h5">MEMBERS</li>
              <li class="list-group-item">
                <router-link to="/productList">加入會員</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/productList">會員優惠</router-link>
              </li>
            </ul>
          </div>
          <div class="col-6 col-sm-4">
            <ul class="list-group">
              <li class="list-group-item h5">CONTACT</li>
              <li class="list-group-item">
                <i class="fa fa-clock"></i> 24hr
              </li>
              <li class="list-group-item">
                <a href="#">
                  <i class="fa fa-envelope"></i> furshop@mail.com
                </a>
              </li>
              <li class="list-group-item">
                <a href="#">
                  <i class="fa fa-phone-alt"></i> 02-12345678
                </a>
              </li>
            </ul>
          </div>
          <div class="ml-auto col-6 col-sm-4">
          <div class="form-group">
            <input class="form-control rounded-0" type="text" placeholder="Email">
            </div>
            <button href="#" class="btn btn-outline-secondary rounded-0 w-100">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <ul class="list-inline text-center">
          <li class="list-inline-item">© Copright 2019 npcenthusiasm</li>
          <li class="list-inline-item">
            <a href="#">
              <i class="fab fa-facebook-square fa-2x"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" >
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" >
              <i class="fab fa-twitter-square fa-2x"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <i class="fab fa-line fa-2x"></i>
            </a>
          </li>
        </ul>
        <div class="text-center">資料、圖片來源皆來自網路</div>
        <div class="text-center">僅個人作品練習，無任何商業用途</div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.list-group {
  .list-group-item {
    margin-bottom: 0;
    border: 0;
    padding: 0.5rem 1.25rem;
    background-color: transparent;
  }
}
.list-group-item a {
  position: relative;
  text-decoration:none;
  display: inline-block;
  &::before {
    content: '';
    position: absolute;
    bottom:0;
    left: 0;
    height: 2px;
    width: 0;
    display:inline-block;
    background: #000;
    transition: width .6s;
  }
  &:hover::before {
    width:100%;
  }
}
input[type="text"] {
  border: 0;
  border-bottom:1px solid gray;
}
</style>
