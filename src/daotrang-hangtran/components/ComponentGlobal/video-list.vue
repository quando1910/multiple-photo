<template>
  <div class="video_column">
    <ul>
      <li class="video-box" v-for="(post, index) in videos" :key="index">
        <h2>{{post.name}}</h2>
        <p>{{post.desc}}</p>
        <iframe width="100%" height="200px" :src="`https://www.youtube.com/embed/${post.link}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['videos']
}
</script>

<style lang="scss">
.video-box {
  width: calc(100%/2);
  float: left;
  padding: 10px 15px 15px 15px;
  border-bottom: 2px solid white;
  h2 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
  }
  p {
    padding-bottom : 10px;
    text-transform: lowercase;
  }
}
</style>