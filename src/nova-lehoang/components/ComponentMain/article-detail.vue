<template>
  <div>
    <div class="header-height" style="height: 84px;"></div>
    <section v-if="article" class="page-header bd-bottom padding">
      <div class="container">
        <div class="page-content text-center">
          <h1>{{article.title}}</h1>
          <div class="meta-info">
            <span>
              <i class="ti-user"></i> Written By <a href="http://wowthemez.com/templates/stela/blog-single.html#">Nova Production</a>
            </span>
            <span>
              <i class="ti-bookmark"></i> Tagged As <a href="http://wowthemez.com/templates/stela/blog-single.html#">Jan, 01 2019</a>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="blog-section bg-grey padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="blog-items single-post row">
              <div id="myDiv"></div>
              <div class="share-wrap">
                <h4>Share This Article</h4>
                <ul class="share-icon">
                  <li><a href="http://wowthemez.com/templates/stela/blog-single.html#"><i class="ti-facebook"></i> Facebook</a></li>
                  <li><a href="http://wowthemez.com/templates/stela/blog-single.html#"><i class="ti-twitter"></i> Twitter</a></li>
                  <li><a href="http://wowthemez.com/templates/stela/blog-single.html#"><i class="ti-google"></i> Google+</a></li>
                  <li><a href="http://wowthemez.com/templates/stela/blog-single.html#"><i class="ti-instagram"></i> Instagram</a></li>
                  <li><a href="http://wowthemez.com/templates/stela/blog-single.html#"><i class="ti-linkedin"></i> Linkedin</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetail',
  data () {
    return {
      article: null
    }
  },
  created () {
    this.$http.get(`public/articles/${this.$route.params.id}`).then(res => {
      this.article = res.body
      $('#myDiv').html(this.article.content)
      $("#myDiv p:has(img) img").each(function(){
        let srcChange= Vue.options.filters.takeImage($(this).attr('src'))
        $(this).attr('src', srcChange)
        $("p:has(img)").css({textAlign: "center"});
      })
    })
  }
}
</script>

<style>

</style>
