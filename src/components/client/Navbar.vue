<template>
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-light">
    <a class="navbar-brand navbar-logo bg-transparent shadow-none" href="#">SHOP</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
    aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">類別 <span class="sr-only">(current)</span></a>
        </li>
        <li class ="nav-item">
          <a class="nav-link" href="#">樣式</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
          role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#">管理商品</a>
        </li>
      </ul>
    </div>
      <ul class="list-inline ml-auto  ">
        <li class="list-inline-item">
          <a class="text-primary" href="#">
            <i class="fab fa-instagram fa-2x"></i></a>
        </li>
        <li class="list-inline-item">
          <a class="text-primary" href="#">
            <i class="fab fa-facebook fa-2x"></i></a>
        </li>
        <li class="list-inline-item">
          <a class="text-primary" href="#">
            <i class="fa fa-shopping-cart fa-2x"></i></a>
        </li>
      </ul>
  </nav>
  </div>
</template>

<style lang="">
    @media (max-width: 768px) {
   .navbar-brand {
     text-align: center;
     color: red;
    }
  }
</style>

