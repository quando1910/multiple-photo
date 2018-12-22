<template>
    <div class="dashboard">
        <section class="blog-section bg-grey padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 xs-padding">
                        <div class="blog-items grid-list row">
                            <div class="col-lg-4 col-sm-6 padding-15" v-for="(item, index) of articles" :key="index">
                                <div class="blog-post">
                                  <router-link :to="{name: 'ArticleDetail', params: { id: 1}}">
                                    <img src="../../assets/img/post-1.jpg" alt="blog post">
                                    <div class="blog-content">
                                        <span class="date"><i class="fa fa-clock-o"></i> January 01.2018</span>
                                        <h3><a href="http://wowthemez.com/templates/stela/blog.html#">Standard gallery post</a></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <a href="http://wowthemez.com/templates/stela/blog.html#" class="post-meta">Read More</a>
                                    </div>
                                  </router-link>
                                </div>
                            </div><!-- Post 1 -->
                        </div>
                        <ul class="pagination_wrap align-center mt-30">
                            <li><a href="http://wowthemez.com/templates/stela/blog.html#"><i class="ti-arrow-left"></i></a></li>
                            <li><a href="http://wowthemez.com/templates/stela/blog.html#">1</a></li>
                            <li><a href="http://wowthemez.com/templates/stela/blog.html#" class="active">2</a></li>
                            <li><a href="http://wowthemez.com/templates/stela/blog.html#">3</a></li>
                            <li><a href="http://wowthemez.com/templates/stela/blog.html#"><i class="ti-arrow-right"></i></a></li>
                        </ul><!-- Pagination -->
                    </div><!-- Blog Posts -->
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  name: 'Wedding',
  data() {
    return {
      articles: [{}]
    }
  }
}
</script>
