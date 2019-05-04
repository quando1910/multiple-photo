<template>
  <div>
		<div class="slider-area">
			<div id="slider" class="nivoSlider">
				<img style ="display:none" src="../../assets/images/song-lu-1.jpg"  data-thumb="../../assets/images/song-lu-1.jpg"  alt="" title="#htmlcaption1"/>      
				<img style ="display:none" src="../../assets/images/song-lu-2.jpg"  data-thumb="../../assets/images/song-lu-2.jpg"  alt="" title="#htmlcaption2"/>
			</div>
			<div id="htmlcaption1" class="pos-slideshow-caption nivo-html-caption nivo-caption">
				<div class="timing-bar"></div>
				<div class="pos-slideshow-info pos-slideshow-info1">
					<div class="container">
						<div class="pos_description hidden-xs">
							<div class="title1"><span class="txt">ĐI ĐẦU TRONG CÁC LĨNH VỰC</span></div>
							<div class="title2"><span class="txt"><b>TƯ VẤN</b> - THIẾT KẾ </span></div>
							<div class="title2"><span class="txt">THẨM TRA - <b>KHẢO SÁT</b></span></div>
							<div class="pos-slideshow-readmore">
								<router-link :to="{path: '/about'}">LIÊN HỆ NGAY</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="htmlcaption2" class="pos-slideshow-caption nivo-html-caption nivo-caption">
				<div class="timing-bar"></div>
				<div class="pos-slideshow-info pos-slideshow-info2">
					<div class="container">
						<div class="pos_description hidden-xs">
							<div class="title2"><span class="txt">CÔNG TY TNHH</span></div>
							<div class="title2"><span class="txt"><b>TVXD</b> CAO KHOA</span></div>
							<div class="pos-slideshow-readmore">
								<router-link :to="{path: '/about'}">LIÊN HỆ NGAY</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="service-area ptb-100" id="career">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="section-title text-center">
							<h1>Ngành nghề của chúng tôi</h1>
						</div>
					</div>
				</div>
				<div class="row pt-60">
					<div class="col-md-3 col-sm-6 col-xs-12">
						<div class="service-single text-center mb-30">
							<div class="srvc-icon">
								<i class="icon icon-bong-den"></i>
							</div>
							<div class="srvc-titel">
								<h6>Tư vấn</h6>
							</div>
							<div class="service-hover text-center">
								<div class="hvr-icon">
									<i class="icon icon-bong-den"></i>
									<h6>Tư vấn</h6>
									<p>Lập quy hoạch chi tiết, dự án đầu tư, thiết kế, lập tổng dự toán, thẩm tra các công trình xây dựng thuỷ lợi, hạ tầng kỹ thuật,...</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12">
						<div class="service-single text-center mb-30">
							<div class="srvc-icon">
								<i class="icon icon-thiet-ke"></i>
							</div>
							<div class="srvc-titel">
								<h6>Thiết kế</h6>
							</div>
							<div class="service-hover text-center">
								<div class="hvr-icon">
									<i class="icon icon-thiet-ke"></i>
									<h6>Thiết kế</h6>
									<p>Gồm thiết kế sơ bộ trong Báo cáo nghiên cứu tiền khả thi, thiết kế cơ sở trong Báo cáo nghiên cứu khả thi, thiết kế kỹ thuật, thiết kế bản vẽ thi công trong giai đoạn thực hiện dự án và các bước thiết kế khác.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12">
						<div class="service-single text-center mb-30 res-tab-m0">
							<div class="srvc-icon">
								<i class="icon icon-kinh-lup"></i>
							</div>
							<div class="srvc-titel">
								<h6>Thẩm tra</h6>
							</div>
							<div class="service-hover text-center">
								<div class="hvr-icon">
									<i class="icon icon-kinh-lup"></i>
									<h6>Thẩm tra</h6>
									<p>Góp phần đảm bảo chất lượng của đồ án thiết kế, khắc phục các sai sót có thể có của tư vấn thiết kế, giúp tiết kiệm chi phí đầu tư, làm tăng mức độ tin cậy của đồ án thiết kế.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12">
						<div class="service-single text-center">
							<div class="srvc-icon">
								<i class="icon icon-dia-chat"></i>
							</div>
							<div class="srvc-titel">
								<h6>Khảo sát</h6>
							</div>
							<div class="service-hover text-center">
								<div class="hvr-icon">
									<i class="icon icon-dia-chat"></i>
									<h6>Khảo sát</h6>
									<p>Khảo sát địa hình là hoạt động nghiên cứu đánh giá điều kiện tự nhiên trên mặt đất tại công trình, hỗ trợ công tác quy hoạch, thiết kế, tính khối lượng đào, đắp công trình.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="about-area pb-100">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="section-title text-center">
							<h1>Về chúng tôi</h1>
							<p>Là một công ty hoạt động trong lĩnh vực xây dựng, một doanh nghiệp và tiềm năng, với khẩu hiệu “Chuyên Nghiệp - Năng Động - Sáng Tạo- Trách nhiệm” , chúng tôi luôn cố gắn hết mình tạo ra những sản phẩm chất lượng nhất mang đến sự an tâm và đảm bảo cho chủ đầu tư.</p>
						</div>
					</div>
				</div>
				<div class="row pt-50">
					<div class="col-md-3 col-sm-6 col-xs-12">
						<div class="specialty-single pb-50">
							<div class="icon-titel">
								<i class="fa fa-heart" aria-hidden="true"></i>
								<h6>Chuyên nghiệp</h6>
							</div>
						</div>
						<div class="specialty-single hidden-xs">
							<div class="icon-titel">
								<i class="fa fa-anchor" aria-hidden="true"></i>
								<h6>Năng động</h6>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12">
						<!-- Speciality Single -->
						<div class="specialty-single pb-50">
							<div class="icon-titel">
								<i class="icon-bong-den" style="font-size: 40px"></i>
								<h6>Sáng tạo</h6>
							</div>
						</div>
						<!-- Speciality Single -->
						<!-- Speciality Single -->
						<div class="specialty-single hidden-xs">
							<div class="icon-titel">
								<i class="fa fa-heart" aria-hidden="true"></i>
								<h6>Trách nhiệm	</h6>
							</div>
						</div>
						<!-- Speciality Single -->
					</div>
					<!-- Speciality Area -->
					<!-- Speciality Image -->
					<div class="col-md-6 col-sm-12">
						<div class="specialty-image">
							<img src="../../assets/images/other/about.png" alt="" />
						</div>
					</div>
					<!-- Speciality Image -->
				</div>
				<!-- About Content -->
				<!-- Video Area Start -->
				<div class="row pt-100 res-pt-xs-50">
					<div class="col-md-6 col-sm-6">
						<div class="video-area">
							<div class="img">
								<iframe width="560" height="280" src="https://www.youtube.com/embed/P74uCcXDiaY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-sm-6">
						<div class="video-content res-pt-xs-20">
							<h6>Phối cảnh 3D Cống Sông Lu</h6>
							<p>Mô tả của phối cảnh.</p>
						</div>
					</div>
				</div>
				<!-- Video Area End -->
			</div>
		</section>
        <!-- About Area End -->
		<section class="wework-area bg-1 pt-100 pb-120 overlay">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="section-title text-center text-white">
							<h1>TIẾN ĐỘ CÔNG VIỆC</h1>
							<p>Công ty TNHH Tư vấn xây dựng Cao Khoa luôn hoàn thành sản phẩm với một quy trình liên kết chặt chẽ và hợp lý để đạt chất lượng và hiệu quả tốt nhất.</p>
						</div>
					</div>
				</div>
				<div class="row pt-80">
					<div class="col-md-12">
						<div class="wework-social uppercase">
							<ul>
								<li>
									<a href="#">
										<i class="fa fa-lightbulb-o" aria-hidden="true"></i>
										<span>Plan</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
										<span>Sketch</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa fa-paint-brush" aria-hidden="true"></i>
										<span>Design</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa fa-laptop" aria-hidden="true"></i>
										<span>Develop</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa fa-check-square-o" aria-hidden="true"></i>
										<span>Delivary</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- We Work Titel Area End -->
			</div>
		</section>
		<section class="ourblog-area ptb-100">
			<div class="container">
				<!-- Section Titel -->
				<div class="row">
					<div class="col-md-12">
						<div class="section-title text-center">
							<h1> CÔNG TRÌNH NỔI BẬT</h1>
						</div>
					</div>
				</div>
				<!-- Section Titel -->
				<!-- Blog Content Area Start -->
				<div class="row pt-55">
					<!-- Single Blog -->
					<div class="col-md-4 col-sm-6 col-xs-12 res-pb-xs-30">
						<div class="single-blog">
							<div class="blog-img">
								<a href="#">
									<img src="../../assets/images/blog/1.jpg" alt="" />
								</a>
							</div>
							<div class="blog-content">
								<h6><a href="#">Lorem Ipsum is simply dummy</a></h6>
								<div class="post-info">
									<span class="post-date">
										<a href="#"><i class="zmdi zmdi-time"></i>Jun 25, 2016 </a>
									</span>
									<div class="favorite-comment pull-right">
										<div class="favorite">
											<a href="#"><i class="zmdi zmdi-favorite-outline"></i>( 500 )</a>
										</div>
										<a href="#"><i class="zmdi zmdi-comments"></i>( 100 )</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Single Blog -->
					<!-- Single Blog -->
					<div class="col-md-4 col-sm-6 col-xs-12">
						<div class="single-blog">
							<div class="blog-img">
								<a href="#"><img src="../../assets/images/blog/2.jpg" alt="" /></a>
							</div>
							<div class="blog-content">
								<h6><a href="#">Lorem Ipsum is simply dummy</a></h6>
								<div class="post-info">
									<span class="post-date">
										<a href="#"><i class="zmdi zmdi-time"></i>Feb 30, 2015 </a>
									</span>
									<div class="favorite-comment pull-right">
										<div class="favorite">
											<a href="#"><i class="zmdi zmdi-favorite-outline"></i>( 500 )</a>
										</div>
										<a href="#"><i class="zmdi zmdi-comments"></i>( 100 )</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Single Blog -->
					<!-- Single Blog -->
					<div class="col-md-4 hidden-sm hidden-xs">
						<div class="single-blog">
							<div class="blog-img">
								<a href="#"><img src="../../assets/images/blog/3.jpg" alt="" /></a>
							</div>
							<div class="blog-content">
								<h6><a href="#">Lorem Ipsum is simply dummy</a></h6>
								<div class="post-info">
									<span class="post-date">
										<a href="#"><i class="zmdi zmdi-time"></i>Aug 19, 2014 </a>
									</span>
									<div class="favorite-comment pull-right">
										<div class="favorite">
											<a href="#"><i class="zmdi zmdi-favorite-outline"></i>( 500 )</a>
										</div>
										<a href="#"><i class="zmdi zmdi-comments"></i>( 100 )</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Single Blog -->
				</div>
				<!-- Blog Content Area End -->
			</div>
		</section>
		<!-- Our Blog Area End -->
		<!-- Client Testimonial Area Start -->
		<section class="client-testimonial-area ptb-100 bg-2 overlay">
			<div class="container">
				<!-- Section Titel -->
				<div class="row">
					<div class="col-md-12">
						<div class="section-title text-center text-white">
							<h1>GIỚI THIỆU BAN GIÁM ĐỐC</h1>
						</div>
					</div>
				</div>
				<!-- Section Titel -->
				<!-- Testimonial Content Area Start -->
				<div class="client-testimonial-single bg-opacity-1">
					<div class="ct-cp">
						<img src="../../assets/images/testimonial/2.jpg" alt="" />
					</div>
					<div class="client-say text-white">
						<div class="client-info">
							<h6>PHẠM CAO HUYÊN</h6>
							<p>Giám đốc</p>
						</div>
						<p>Chuyên môn: Thạc sỹ kỹ thuật, Kỹ sư xây dựng<br>17 năm kinh nghiệm hoạt động trong nghề</p>
					</div>
				</div>
				<div class="client-testimonial-owl pt-55">
					<!-- Client Testimonial Single -->
					<div class="client-testimonial-single bg-opacity-1">
						<div class="ct-cp">
							<img src="../../assets/images/testimonial/1.jpg" alt="" />
						</div>
						<div class="client-say text-white">
							<div class="client-info">
								<h6>ĐẶNG THÁI HÀ</h6>
								<p>Phó giám đốc</p>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in</p>
						</div>
					</div>
					<!-- Client Testimonial Single -->
					<!-- Client Testimonial Single -->
				
					<!-- Client Testimonial Single -->
					<!-- Client Testimonial Single -->
					<div class="client-testimonial-single bg-opacity-1">
						<div class="ct-cp">
							<img src="../../assets/images/testimonial/1.jpg" alt="" />
						</div>
						<div class="client-say text-white">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in</p>
							<div class="client-info">
								<h6>Mark Johan</h6>
								<p>Head of Chairmen</p>
							</div>
						</div>
					</div>
					<!-- Client Testimonial Single -->
				</div>
				<!-- Testimonial Content Area End -->
			</div>
		</section>
  </div>
</template>
<script>
import '../../static/jquery.nivo.slider.pack.js'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  mounted() {
		$('#slider').nivoSlider({
        effect: 'random',
        slices: 25,
        boxCols: 10,
        boxRows: 8,
        animSpeed: '600',
        pauseTime: '4000',
        startSlide: 0,
        directionNav: 1,
        controlNav: 0,
        controlNavThumbs: false,
        pauseOnHover: false,
        manualAdvance: false,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
		})
  },
  methods: {
   
  }
}
</script>
<style>
.icon {
	font-size: 50px !important;
}
</style>
