<template>
  <el-row :gutter="20" class="products">
    <el-col :span="6" v-for="(item, index) of productsFilter" :key="index">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="item.thumbnail" class="image">
        <div style="padding: 14px;">
          <span>{{item.name}}</span>
          <div class="bottom clearfix">
            <time class="time">{{ item.shortDesc }}</time>
            <el-button type="text" v-if="item.costHire" class="button">{{ item.costHire }}</el-button>
            <el-button type="text" v-if="item.costBuy" class="button">{{ item.costBuy }}</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      products: [],
      productsFilter: []
    }
  },
  created () {
    this.$http.get(`public/products?belongs_to=${this.$route.query.belongs}`).then(res => {
      this.products = res.body
      this.filterProduct()
    })
  },
  methods: {
    filterProduct() {
      let check = null
      if (this.$route.query['attributes.brands']) {
        check = 'attributes.brands'
      } else if (this.$route.query['type']) {
        check = 'type'
      }
      if (check) {
        this.productsFilter = this.products.filter(x => x[check] == this.$route.query[check])
      } else {
        this.productsFilter = this.products
      }
    }
  },
  watch:{
    $route (to, from){
      this.filterProduct()
    }
  } 
}
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.el-card {
  margin-bottom: 20px; 
}
</style>