<template>
  <div>
		<div class="banner-area pt-130 pb-120 bg-7 overlay-2">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="banner-page text-center text-white text-uppercase">
							<h1>blog full view</h1>
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
								<li class="active">blog full view</li>
							</ul>							
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Breadcrumb Area End -->
		<!-- Our Blog Area Start -->
		<section class="blog-area ptb-100">
			<div class="container">
				<div class="row">
					<!-- Single Blog -->
					<div class="col-md-4 col-sm-6" v-for="(item,index) of articles" :key="index">
						<div class="single-blog style-two white-bg broder mb-30">
							<h6>
                <router-link :to="{name: 'ArticleDetail', params: { id: item._id}}">
                {{item.title}}
                </router-link>
              </h6>
							<div class="blog-img">
                <router-link :to="{name: 'ArticleDetail', params: { id: item._id}}">
                  <img :src="item.thumbnail" alt="" />
                </router-link>
							</div>
							<div class="blog-content">
								<div class="post-info">
									<span class="post-date mr-15">
										<a href="#"><i class="zmdi zmdi-account"></i>By : Sathi </a>
									</span>
									<span class="post-date mr-15">
										<a href="#"><i class="zmdi zmdi-favorite-outline"></i>( 500 )</a>
									</span>
									<span class="post-date mr-15">
										<a href="#"><i class="zmdi zmdi-comments"></i>( 100 )</a>
									</span>
									<span class="post-date">
										<a href="#"><i class="zmdi zmdi-share"></i>( 100 )</a>
									</span>
									<div class="post-content">
										<p>{{item.desc}}</p>
									</div>
									<span class="post-date">
										<a href="#"><i class="zmdi zmdi-time"></i>Jun 25, 2016 </a>
									</span>
									<span class="post-btn pull-right">
										<router-link :to="{name: 'ArticleDetail', params: { id: item._id}}">Read More<i class="zmdi zmdi-arrow-right"></i></router-link>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Pagination Count Area Strat -->
				<div class="row">
					<div class="col-md-12">
						<div class="pagination-count text-center broder ptb-15 mt-60 white-bg">
							<ul>
								<li><a href="#"><i class="zmdi zmdi-caret-left"></i></a></li>
								<li><a href="#">1</a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#"><i class="zmdi zmdi-caret-right"></i></a></li>
							</ul>
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
      articles: [],
      type: null,
      title: null
    }
  },
  created () {
    if (this.$route.path === '/thiet-ke-cong-trinh-thuy-loi') {
      this.type = 1
      this.title = 'Cam kết Hộ Niệm'
    }
    if (this.$route.path === '/thiet-ke-cong-trinh-giao-thong') {
      this.type = 2
      this.title = 'Hồi hướng'
    }
    if (this.$route.path === '/thiet-ke-ha-tang-ky-thuat') {
      this.type = 19
      this.title = '49 Ngày'
    }
    if (this.$route.path === '/linh-vuc-khac') {
      this.type = 4
      this.title = 'Khai Thị'
    }
    this.$http.get(`public/articles?type=${this.type}`).then(res => {
      this.articles = res.body
    })
  },
}
</script>
<style scoped>
.article-box {
  margin: 40px;
}
.title-list {
  font-size: 14px !important;
}
</style>