<template>
  <div>
    <div class="container mb-4">
      <div class="row">
        <div class="col-4">
          <div class="border border-black px-2 py-4 text-center"
           :class="{'alert alert-primary': progess === '1'}">
            1. 確認購買清單
          </div>
        </div>
        <div class="col-4">
          <div class="border border-black px-2 py-4 text-center"
           :class="{'alert alert-primary': progess === '2'}">
           2. 填寫訂單資料
          </div>
        </div>
        <div class="col-4">
          <div class="border border-black px-2 py-4 text-center"
          :class="{'alert alert-primary': progess === '3'}">
            3. 完成
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['progess'],
};
</script>
