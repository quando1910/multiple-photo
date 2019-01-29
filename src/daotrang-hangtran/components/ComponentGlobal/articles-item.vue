<template>
  <div class="item-article">
    <div class="background-item">
      <div class="span-3"> 
        <a href="/Tinh-Do-Dai-Kinh-Khoa-Chu-giang-lan-thu-4-nam-2014/Tinh-Do-Dai-Kinh-Khoa-Chu-2014-Tap-15-665/" title="Tịnh Độ Đại Kinh Khoa Chú 2014 (Tập 15)">
          <img alt="Tịnh Độ Đại Kinh Khoa Chú 2014 (Tập 15)" :src="article.thumbnail" width="100" height="100">
        </a>
      </div>
      <div class="span-6 border_b">
        <h2 class="uppercase font-head">
          <router-link :to="{name: 'Article', params: {id: article._id}}">
            {{article.title}}
          </router-link>
        </h2>
        <b>Jan 1, 2019</b>
        <div class="keywords">
          <el-tag size="small">Small</el-tag>
          <el-tag size="small">Small</el-tag>
          <el-tag size="small">Small</el-tag>
          <el-tag size="small">Small</el-tag>
        </div>
        <p>
          {{article.desc}}
        </p>
        <router-link class="right-bottom" :to="{name: 'Article', params: {id: article._id}}">
          xem thêm
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArticleItem',
  props: ['article'],
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.border_b {
  padding-left: 10px;
}
.font-head {
  font-size: 16px;
  padding-bottom: 10px;
}
.keywords {
  padding: 5px 0;
}
.background-item {
  background-color: white;
  border-radius: 10px;
  height: 100%;
  padding: 20px;
  position: relative;
}
.item-article {
  padding: 10px;
  width: calc(100% / 2);
  float: left;
  height: 200px;
}
.span-3 {
  width: calc(100% / 10 * 3);
}
.span-6 {
  width: calc(100% / 10 * 7);
}
.right-bottom {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
