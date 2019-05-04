<template>
  <div class="news_column two_column fl" v-if="articles">
    <div class="news-content bordersilver white clearfix news-cat-two-column">
      <div class="header">
        <router-link class="current" tag="a" :to="{name: 'Articles', query: { type: articles._id.id, key: articles._id.key }}">
          <span>
            {{articles._id.key}}
          </span>
        </router-link>
      </div>
      <div class="items border_b">
        <h3>
          <router-link :to="{name: 'Article', params: {id: articles.data[0].items._id}}">
            {{articles.data[0].items.title}}
          </router-link>
        </h3>
        <router-link :to="{name: 'Article', params: {id: articles.data[0].items._id}}" :title="articles.data[0].items.title">
          <img alt="Tịnh Độ Đại Kinh Khoa Chú 2014 (Tập 15)" :src="articles.data[0].items.thumbnail" width="150" height="150">
        </router-link>
        <p>
          {{articles.data[0].items.desc}}
        </p>
        <ul class="related">
          <li v-for="art of articles.data.slice(1,5)" :key="art">
            <router-link :to="{name: 'Article', params: {id: art.items._id}}" :title="art.items.title" >
              {{art.items.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['articles'],
  data() {
    return {
    }
  },
  mounted () {
    console.log(this.articles)
  }
}
</script>