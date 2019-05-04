<template>
  <header :class="{ 'header-area': toggle, 'header-wrapper': true }">
		<div class="header-top-area">
				<div class="container">
				<div class="row">
					<div class="col-md-6 col-sm-7 col-xs-12">
						<div class="header-left ptb-15">
							<ul>
								<li><span><i class="zmdi zmdi-phone"></i></span><a href="#">(028) 73000596</a></li>
								<li class="item-mail-box"><span><i class="zmdi zmdi-email"></i></span><a @click="openMailbox">xaydungcaokhoa@gmail.com</a>
									<div class="email-box" v-if="enableMailbox">
										<form action="mailto:xaydungcaokhoa@gmail.com" method="post" enctype="text/plain">
											Subject:<br>
											<input name="subject" type="text" />
											Content:<br>
											<textarea name="body"></textarea>
											<input type="submit" value="Send">
											<input type="reset" value="Reset">
										</form>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-6 col-sm-5 col-xs-12">
						<div class="header-right social-icon pull-right">
							<ul>
								<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li class="search-active">
										<a href="#"><i class="zmdi zmdi-search"></i></a>
									<div class="search-form">
										<form action="#" method="get">
											<input name="search" id="search" placeholder="Search" type="text">
										</form>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				</div>
		</div>
		<div class="main-menu-area broder-top ptb-25" id="sticky-header">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-12 col-xs-12">
						<div class="logo-area">
							<a href="/"><img class="main-logo" src="../../assets/images/logo.png" alt="" /></a>
						</div>
					</div>
					<!-- Logo Area -->
					<!-- Menu Area -->
					<div class="col-md-8 col-sm-12 hidden-xs">
						<div class="main-menu">
							<nav>
								<ul id="nav">
									<li class="active"><router-link :to="'/'">Trang chủ</router-link></li>
									<li>
										<a href="#">Giới thiệu</a>
										<ul>
											<li><router-link :to="'/intro'">Giới thiệu công ty</router-link></li>
											<li><router-link :to="'/#career'">Ngành nghề</router-link></li>
											<li><a href="blog-details.html">Công trình tiêu biểu</a></li>
										</ul>
									</li>
									<li>
										<a href="#">Công trình thiết kế</a>
										<ul>
											<li><router-link :to="'/thiet-ke-cong-trinh-thuy-loi'">Thiết kế công trình thuỷ lợi</router-link></li>
											<li><router-link :to="'/thiet-ke-cong-trinh-giao-thong'">Thiết kế công trình giao thông</router-link></li>
											<li><router-link :to="'/thiet-ke-ha-tang-ky-thuat'">Thiết kế hạ tầng kỹ thuật</router-link></li>
											<li><router-link :to="'/linh-vuc-khac'">Lĩnh vực khác</router-link></li>
										</ul>
									</li>
									<li>
										<a href="#">Công trình thẩm tra</a>
										<ul>
											<li><router-link :to="'/intro'">Thẩm tra công trình thuỷ lợi</router-link></li>
											<li><router-link :to="'/#career'">Thẩm tra công trình giao thông</router-link></li>
											<li><a href="blog-details.html">Thẩm tra hạ tầng kỹ thuật</a></li>
											<li><a href="portfolio.html">Lĩnh vực khác</a></li>
										</ul>
									</li>
									<li><router-link :to="'/about'">Liên hệ</router-link></li>
								</ul>
							</nav>
						</div>
					</div>
					<!-- Menu Area -->
				</div>
			</div>
			<!-- MOBILE-MENU-AREA START --> 
			<div class="mobile-menu-area">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="mobile-area">
								<div class="mobile-menu">
									<nav id="mobile-nav">
										<ul>
											<li><a href="index.html">Home </a>
											</li>
											<li><a href="about-us.html">Giới thiệu</a>
												<ul>
													<li><a href="about-us.html">Giới thiệu công ty</a></li>
													<li><a href="blog.html">Ngành nghề</a></li>
													<li><a href="blog-details.html">Công trình tiêu biểu</a></li>
												</ul>
											</li>
											<li><a href="blog.html">Công trình thiết kế</a></li>
											<li><a href="blog-details.html">Công trình thẩm tra</a></li>
											<li><a href="portfolio.html">Liên hệ</a></li>
										</ul>
									</nav>
								</div>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
export default {
	props: ['toggle'],
	data() {
		return {
			enableMailbox: false
		}
	},
	methods: {
		openMailbox () {
			this.enableMailbox = !this.enableMailbox
		}
	}
}
</script>
<style lang="scss">
  .main-logo {
	  width: 350px;
  }
	.item-mail-box {
		position: relative;
		z-index: 1000;
		.email-box {
			border: 1px solid grey;
			background-color: white;
			width: 350px;
			position: absolute;
			top: 25px;
			left: 0;
			padding: 20px;
		}
	}
	.main-menu ul li > ul {
		width: 280px;
	}
</style>
