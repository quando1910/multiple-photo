<template>
  <header>
    <div id="header">
			<video class="slider-video" autoplay="" loop autoplay muted>
				<source src="../../assets/img/banner.mp4" type="video/mp4" />
			</video>
		</div>
		<div class="nav">
			<ul class="nav fl edit-nav">
				<li v-for="parent of routesPath" :key="parent">
					<router-link :title="parent.mainTitle" :to="'/'">{{parent.mainTitle}}</router-link>
					<ul v-if="parent.subTitle" class="subnav">
            <li v-for="child of parent.subTitle" :key="child">
							<router-link :title="child.title" :to="`${child.url}`">
                &raquo; {{child.title}}
							</router-link>
						</li>
          </ul>
				</li>
				<li class="linemenu"></li>
				<li class="search-right">
					<el-autocomplete
						popper-class="my-autocomplete"
						v-model="state3"
						:fetch-suggestions="querySearch"
						placeholder="Tìm Kiếm"
						@select="handleSelect">
						<i
							class="el-icon-edit el-input__icon"
							slot="suffix"
							@click="handleIconClick">
						</i>
						<template slot-scope="{ item }">
							<div class="value">{{ item.value }}</div>
							<span class="link">{{ item.link }}</span>
						</template>
					</el-autocomplete>
				</li>
    	</ul>
		</div>
		<div id="message">
			<p>Lấy giáo dục hoằng dương Phật pháp. Lấy giảng giải bồi dưỡng nhân tài. Lấy từ bi lợi ích xã hội. Lấy chân thành
				phát triển giao lưu. Lấy chuyên tu cầu sanh Tịnh Độ.</p>
		</div>
  </header>
</template>
<script>
export default {
	data() {
		return {
			links: [],
			state3: '',
			routesPath: [
				{
					mainTitle: 'Trang chủ',
					url: '/'
				},
				{
					mainTitle: 'Hộ niệm',
					subTitle: [
						{
							title: 'cam kết hộ niệm',
							url: '/cam-ket-ho-niem'
						},
						{
							title: 'hồi hướng',
							url: '/hoi-huong'
						},
						{
							title: '49 ngày',
							url: '/49-ngay'
						},
						{
							title: 'khai thị',
							url: '/khai-thi'
						},
						{
							title: 'hướng dẫn hộ niệm',
							url: '/huong-dan-ho-niem'
						},
						{
							title: 'hóa giải oan gia',
							url: '/hoa-giai-oan-gia'
						}
					]
				},
				{
					mainTitle: 'thư viện',
					subTitle: [
						{
							title: 'hình ảnh',
							url: '/hinh-anh'
						},
						{
							title: 'bài nghe',
							url: '/bai-nghe'
						},
						{
							title: 'bài đọc',
							url: '/bai-doc'
						},
						{
							title: 'video hộ niệm',
							url: '/video-ho-niem'
						}
					]
				},
				{
					mainTitle: 'tham khảo',
					subTitle: [
						{
							title: 'an vị phật',
							url: '/an-vi-phat'
						},
						{
							title: 'cúng thí thực',
							url: '/cung-thi-thuc'
						},
						{
							title: 'nghi lễ cộng tu',
							url: '/nghi-le-cong-tu'
						}
					]
				},
				{
					mainTitle: 'giới thiệu pháp môn tịnh độ',
					url: '/'
				},
				{
					mainTitle: 'hỏi đáp',
					url: '/'
				},
				{
					mainTitle: 'liên hệ',
					url: '/'
				},
			]
		};
	},
	methods: {
		querySearch(queryString, cb) {
			var links = this.links;
			var results = queryString ? links.filter(this.createFilter(queryString)) : links;
			// call callback function to return suggestion objects
			cb(results);
		},
		createFilter(queryString) {
			return (link) => {
				return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
			};
		},
		loadAll() {
			return [
				{ "value": "vue", "link": "https://github.com/vuejs/vue" },
				{ "value": "element", "link": "https://github.com/ElemeFE/element" },
				{ "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
				{ "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
				{ "value": "vuex", "link": "https://github.com/vuejs/vuex" },
				{ "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
				{ "value": "babel", "link": "https://github.com/babel/babel" }
				];
		},
		handleSelect(item) {
			console.log(item);
		},
		handleIconClick(ev) {
			console.log(ev);
		}
	},
	mounted() {
		this.links = this.loadAll();
	}
}
</script>
<style lang="scss">
 .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .value {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .link {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
	}
	.edit-nav {
		justify-content: space-between;
	}
	.search-right {
		order: 2
	}
</style>
