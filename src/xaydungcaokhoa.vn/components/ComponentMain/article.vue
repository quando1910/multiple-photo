<template>
  <div id="news_detail">
		<div class="banner-area pt-130 pb-120 bg-7 overlay-2">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="banner-page text-center text-white text-uppercase">
							<h1>Blog details</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Banner Area End -->
		<!-- Breadcrumb Area Start -->
		<div class="breadcrumb-area ptb-25 broder-bottom white-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="breadcrumb-list text-center text-uppercase">
							<ul>
								<li><a href="index.html">home</a><span class="divider"> // </span></li>
								<li class="active">Blog details</li>
							</ul>							
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Breadcrumb Area End -->
		<!-- Blog Details Area Start -->
		<section class="blog-details-area ptb-100">
			<div class="container">
				<div class="row" v-if="article">
					<div class="col-md-12">
						<div class="blog-details-content white-bg">
							<div class="blogdetails-titel">
								<span>oct 01, 2016</span>
								<h4>{{article.title}}</h4>
							</div>
							<div class="blogdetails-img">
								<img src="images/blog/blog-details.jpg" alt="" />
							</div>
							<div class="blog-discribe-area">
								<div class="dicrobe-content">
									<!-- Discribe Text Post -->
									<div id="myDiv">
									</div>
									<!-- Discribe Text Post -->
									<!-- Blog Social Start -->
									<div class="blog-social">
										<p>Tags:    Business,  Financial,  Loans,  Money</p>
										<ul class="hidden-sm hidden-xs">
											<li>Share :</li>
											<li><a href="#"><i class="zmdi zmdi-facebook"></i></a></li>
											<li><a href="#"><i class="zmdi zmdi-twitter"></i></a></li>
											<li><a href="#"><i class="zmdi zmdi-dribbble"></i></a></li>
											<li><a href="#"><i class="zmdi zmdi-pinterest"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'Home',
  data() {
    return {
      article: null
    }
  },
  created () {
    this.$http.get(`public/articles/${this.$route.params.id}`).then(res => {
      this.article = res.body
    })
  },
  updated () {
    if (this.article.content) {
      var div = document.getElementById('myDiv')
      $('#myDiv').html(this.article.content)
      $("#myDiv p:has(img) img").each(function(){
        // let srcChange= Vue.options.filters.takeImage($(this).attr('src'))
        // $(this).attr('src', srcChange)
        $("p:has(img)").css({textAlign: "center"});
      })
    }
  }
}
</script>