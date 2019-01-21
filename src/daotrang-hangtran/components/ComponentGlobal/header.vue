<template>
  <header>
    <div id="header">
			<img class="typo-logo" src="../../assets/img/typo.png">
			<img class="header-logo" src="../../assets/img/logoname.png">
		</div>
		<div class="nav">
			<ul class="nav fl edit-nav">
				<li class="home">
					<a title="Trang chủ" href="/">Trang chủ</a>
				</li>
				<li class="linemenu"></li>
				<li>
          <a title="Bài giảng Video" href="/video/">Hộ niệm</a>
          <ul class="subnav">
            <li>
              <a title="Hướng dẫn hộ niệm" href="/Tinh-Do-Dai-Kinh-Khoa-Chu-giang-lan-thu-4-nam-2014/">
                &raquo; Cam kết hộ niệm
                </a>
						</li>
						<li>
              <a title="Hướng dẫn hộ niệm" href="/Tinh-Do-Dai-Kinh-Khoa-Chu-giang-lan-thu-4-nam-2014/">
                &raquo; Hồi tưởng
                </a>
            </li>
            <li>
              <a title="Kinh Vô Lượng Thọ" href="/Kinh-Vo-Luong-Tho/">&raquo;49 ngày</a>
            </li>
            <li>
              <a title="Thập thiện nghiệp Đạo Kinh" href="/Thap-thien-nghiep-Dao-Kinh/">&raquo; Khai thị</a>
						</li>
						 <li>
              <a title="Thập thiện nghiệp Đạo Kinh" href="/Thap-thien-nghiep-Dao-Kinh/">&raquo; Hướng dẫn hộ niệm</a>
						</li>
						 <li>
              <a title="Thập thiện nghiệp Đạo Kinh" href="/Thap-thien-nghiep-Dao-Kinh/">&raquo; Hóa giải oan gia</a>
						</li>
          </ul>
				</li>
				<li class="linemenu"></li>
				<li>
					<a title="Download Video Gốc" href="/downloadfilegoc/">Thư viện</a>
          <ul class="subnav">
              <li>
                <a title="Hình ảnh" href="/Tinh-Do-Dai-Kinh-Khoa-Chu-giang-lan-thu-4-nam-2014/">
                  &raquo; Hình ảnh hộ niệm
                  </a>
              </li>
              <li>
                <a title="Video" href="/Kinh-Vo-Luong-Tho/">&raquo;Bài nghe</a>
							</li>
							<li>
                <a title="Video" href="/Kinh-Vo-Luong-Tho/">&raquo;Bài đọc</a>
              </li>
							<li>
                <a title="Video" href="/Kinh-Vo-Luong-Tho/">&raquo;Video hộ niệm</a>
              </li>
            </ul>
				</li>
				<li class="linemenu"></li>
				<li>
					<a title="Download Video Gốc" href="/downloadfilegoc/">Tham khảo</a>
          <ul class="subnav">
              <li>
                <a title="Hình ảnh" href="/Tinh-Do-Dai-Kinh-Khoa-Chu-giang-lan-thu-4-nam-2014/">
                  &raquo; An vị Phật
                  </a>
              </li>
              <li>
                <a title="Video" href="/Kinh-Vo-Luong-Tho/">&raquo;Cúng thí thực</a>
							</li>
							<li>
                <a title="Video" href="/Kinh-Vo-Luong-Tho/">&raquo;Nghi Lễ cộng tu</a>
              </li>
            </ul>
				</li>
				<li class="linemenu"></li>
				<li class="active">
					<a title="Pháp ngữ" href="/news/">Giới thiệu pháp môn tịnh độ</a>
				</li>
				<li class="linemenu"></li>
				<li>
					<a title="Tìm kiếm" href="/search/">Hỏi đáp</a>
				</li>
				<li class="linemenu"></li>
				<li>
					<a title="Tìm kiếm" href="/search/">Liên hệ</a>
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
			state3: ''
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
