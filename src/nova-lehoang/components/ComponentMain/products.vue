<template>
  <div class="dashboard" v-if="productType">
    <div class="dashboard">
      <div class="header-height" style="height: 84px;"></div>
      <section class="page-header bd-bottom padding">
        <div class="container">
          <div class="page-content text-center">
            <h1>Thuê thiết bị và phụ kiện Quay phim - chụp hình</h1>
            <p>Nova Production</p>
          </div>
        </div>
      </section>
      <section>
        <el-container style="height: 500px; border: 1px solid #eee">
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <h3 style="padding: 10px">Filter Thiết bị</h3>
            <el-menu :default-openeds="['1', '3']">
                <el-menu-item-group title="Hãng sản xuất">
                  <el-menu-item index="b-0" @click="addQuery(null)">Tất cả</el-menu-item>
                  <el-menu-item v-for="(item, index) of productType.attributes.brands" :key="index" :index="`a-${index}`" @click="addQuery({'attributes.brands': item.id})">{{item.name}}</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Phụ kiện">
                  <el-menu-item index="3-3">Gimbal - Chống rung</el-menu-item>
                  <el-menu-item v-for="(item) of productType.types" :key="item.id" :index="item.name" @click="addQuery({'type': item.id})">{{item.name}}</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="3-4">
                  <template slot="title">Chân máy ảnh</template>
                  <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                </el-submenu>
            </el-menu>
          </el-aside>
          <product-list class="box-products"></product-list>
        </el-container>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductListPage',
  data () {
    return {
      productType: null
    }
  },
  created () {
    this.$http.get(`public/productstypes/${this.$route.query.belongs}`).then(res => {
      this.productType = res.body
    })
  },
  methods: {
    addQuery (queryObj) {
      if (queryObj) {
        this.$router.push({query: Object.assign({}, { 'belongs': this.$route.query.belongs }, queryObj)})
      } else {
        this.$router.push({query: Object.assign({}, { 'belongs': this.$route.query.belongs } )})
      }
    }
  }
}
</script>
<style>
.box-products {
  padding: 0 30px;
}
</style>