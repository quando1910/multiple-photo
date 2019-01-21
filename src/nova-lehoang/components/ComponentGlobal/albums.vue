<template>
  <div class="dashboard">
    <div class="header-height" style="height: 84px;"></div>
      <section class="page-header bd-bottom padding">
        <div class="container">
          <div class="page-content text-center">
            <h1>{{title}}<br>{{subTitle}}</h1>
          </div>
        </div>
      </section><!-- /page-header -->
      <section class="team-section bg-grey bd-bottom padding">
      <div class="container">
        <div class="row team-wrap">
          <div class="col-lg-3 col-sm-6 sm-padding" v-for="(item, index) of albums" :key="index">
            <router-link :to="{name: 'AlbumsDetail', params: { id: item._id}}">
              <div class="team-box">
                <div class="album-box">
                  <img :src="item.pictures[0].path | takeImage" class="album-cover" alt="img">
                </div>
                <div class="team-content">
                  <h3>{{item.name}}<span>{{item.checkin}}</span></h3>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: ['title', 'subTitle', 'type'], 
  name: 'Albums',
  data () {
    return {
      albums: []
    }
  },
  mounted () {
    this.$http.get(`public/albums?type=${this.type}`).then(res => {
      this.albums = res.body
    })
  }
}
</script>
<style>
.album-box {
  width: 255px;
  height: 255px;
}
.album-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
