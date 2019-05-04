<template>
  <div class="dashboard">
    <div class="dashboard">
      <div class="header-height" style="height: 84px;"></div>
      <section class="page-header bd-bottom padding">
        <div class="container">
          <div class="page-content text-center">
            <h1>Tranh Nghệ Thuật</h1>
            <p>Nova Production là đơn vị đi đầu về việc bán tranh nghệ thuật</p>
          </div>
        </div>
      </section>
      <section>
        <el-container style="height: 500px; border: 1px solid #eee">
          <product-list  class="box-products"></product-list>
        </el-container>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductListPage'
}
</script>
<style>
.box-products {
  padding: 0 30px;
}
</style>