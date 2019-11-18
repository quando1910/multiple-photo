<template>
  <div class="category">
    <div class="title">
      <span>{{title}}</span>
      <button type="button">more +</button>
    </div>
    <ul class="list row">
      <li v-for="(pic, i) in pictures" :key="i" class="col list-item">
        <div class="img-size">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/shDBXVMlqVk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </li>
    </ul>
    <h3 v-if="!pictures.length" class="text-center">Empty</h3>
  </div>
</template>
<script>
export default {
  props: ["title", "categoryName", "pictures"],
  name: "CategoryVideo",
  data() {
    return {
      articles: [],
      options: {}
    };
  },
  mounted() {
    // this.$http.get(`public/articles?type=${this.type}`).then(res => {
    //   this.articles = res.body;
    // });
  }
};
</script>
<style scoped>
.category .list {
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
}

.category .list-item:hover .item-name{
  opacity: 1;
  transition: opacity .6s;
}
.category{
  margin-bottom: 40px;
}
.category .item-name {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid white;
  width: calc(100% - 30px);
  height: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.category .img-size {
  width: 100%;
  height: 100%;
  border: 1px solid #e8e8e8;
}
</style>
