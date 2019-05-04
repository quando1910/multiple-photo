<template>
  <div>
    <div class="banner-area pt-130 pb-120 bg-7 overlay-2">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="banner-page text-center text-white text-uppercase">
							<p class="">Công ty TNHH Tư Vấn Xây dựng Cao Khoa được thành lập vào tháng 12 năm 2016 <br> là một công ty hoạt động trong lĩnh vực xây dựng, một doanh nghiệp trẻ và tiềm năng. Trong thời kỳ hội nhập và phát triển đứng trước những cơ hội và thách thức với sự lãnh đạo của ban giám đốc, công ty đã và đang xây dựng một cơ chế, một định hướng phát triển lâu dài mang tính bền vững. Sự kết hợp giữa đội ngũ lãnh đạo dày dạn kinh nghiệm cùng với đội ngũ nhân viên trẻ năng động hứa hẹn sẽ xây dựng nên một đơn vị tư vấn lớn mạnh trong tương lai; Với khẩu hiểu “Chuyên nghiệp – Năng động – Sáng tạo” luôn cống hiến hết mình và tạo ra những sản phẩm chất lượng nhất mang đến sự an tâm và đảm bảo cho Chủ đầu tư.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    <section class="portfolio-details ptb-100">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="portfolio-details-content white-bg">
							<div class="portfolio-titel ptb-30 text-center text-uppercase">
								<h4>SƠ ĐỒ TỔ CHỨC CÔNG TY</h4>
							</div>
							<div class="portfolio-image">
								<tree-chart class="pt-50" :json="treeData" />
							</div>
							<div class="project-area">
								<div class="project-details set-bg text-white">
									<h5>Sơ lược công ty</h5>
                  <div class="project-information">
										<ul>
											<li v-for="(item, index) of Object.keys(companyInfo)" :key="index">
                        <span>{{item}}: </span>{{companyInfo[item]}}
                      </li>
										</ul>
									</div>
								</div>
								<div class="project-details set-half-bg text-white">
									<h5>Thông tin cụ thể</h5>
									<div class="project-information">
										<ul>
											<li v-for="(item, index) of Object.keys(moreInfo)" :key="index">
                        <span>{{item}}: </span>{{moreInfo[item]}}
                      </li>
										</ul>
									</div>
								</div>
							</div>
							<div class="project-develope">
								<div class="develope-menu text-center text-uppercase pb-60">
                  <ul>
										<li class="active"><a data-toggle="tab" href="#home">LĨNH VỰC DỊCH VỤ TƯ VẤN</a></li>
										<li><a data-toggle="tab" href="#menu1">THẾ MẠNH CỦA CÔNG TY</a></li>
										<li><a data-toggle="tab" href="#menu2">HẠNG NĂNG LỰC TƯ VẤN</a></li>
                    <li><a data-toggle="tab" href="#menu3">CHIA SẺ KINH NGHIỆM</a></li>
                  </ul>
								</div>
								<div class="tab-content">
									<div :id="item.id" v-for="(item, index) of contentTab" :key="index" :class="{'tab-pane fade': true, 'in active': index === 0}">
										<div class="tab-single">
                      <div class="about-menu pt-15">
                        <p>{{item.desc}}</p>
                        <ul>
                          <li v-for="(tab, ind) of item.content" :key="ind">{{tab}}</li>
                        </ul>
                      </div>
										</div>
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
import TreeChart from "vue-tree-chart"

export default {
  name: 'Home',
  data() {
    return {
      treeData: {
        name: 'BAN GIÁM ĐỐC \n(Giám đốc và 02 Phó Giám đốc)',
        children: [
          {
            name: 'PHÒNG KHẢO SÁT \n(Khảo sát địa hình, địa chất)',
          },
          {
            name: 'PHÒNG TỔNG HỢP \n(Kế hoạch, Hành chính, Tài vụ)',
          },
          {
            name: 'PHÒNG THIẾT KẾ \n(Lập dự án, Thiết kế, Giám sát, QL dự án)',
          },
          {
            name: 'PHÒNG QUẢN LÝ CHẤT LƯỢNG \n(Kiểm soát chất lượng)',
          }
        ]
      },
      contentTab: [
        {
          title: 'LĨNH VỰC DỊCH VỤ TƯ VẤN',
          id: 'home',
          content: [
            'Tư vấn lập dự án các công trình xây dựng, hạ tầng, giao thông, thủy lợi...',
            'Tư vấn thiết kế công trình thủy lợi, giao thông, hạ tầng kỹ thuật',
            'Tư vấn Thẩm tra công trình thủy lợi, giao thông, hạ tầng kỹ thuật',
            'Giám sát thi công công trình thủy lợi, hạ tầng kỹ thuật',
            'Khảo sát đo đạc địa hình xây dựng công trình',
            'Khảo sát và thí nghiệm địa chất xây dựng công trình',
            'Tư vấn đấu thầu; quản lý dự án',
            'Thi công công trình NN&PTNT và Hạ tầng kỹ thuật'
          ]
        },
        {
          title: 'THẾ MẠNH CỦA CÔNG TY',
          id: 'menu1',
          content: [
            'Tư vấn lĩnh vực nền móng, địa kỹ thuật',
            'Tư vấn lĩnh vực công trình thủy lợi, cầu cảng, hạ tầng kỹ thuật'
          ]
        },
        {
          title: 'HẠNG NĂNG LỰC TƯ VẤN',
          id: 'menu2',
          desc: '(Bộ Xây dựng cấp theo thông tư 17/2016/TT-BXD)',
          content: [
            'Thiết kế, thẩm tra công trình NN&PTNT		: Hạng 2',
            'Thiết kế, thẩm tra công trình giao thông		: Hạng 3',
            'Khảo sát địa hình					: Hạng 3'

          ]
        },
        {
          title: 'CHIA SẺ KINH NGHIỆM',
          id: 'menu3',
          desc: '',
          content: [
            '........',
            '........',
            '........'
          ]
        }
      ],
      companyInfo: {
        'Tên doanh nghiệp': 'CTY TNHH TƯ VẤN XÂY DỰNG CAO KHOA',
        'Tên viết tắt': 'CKC',
        'Trụ sở': 'B23 đường D1, Phường Tân Thới Nhất, Quận 12,TP. HCM',
        'Điện thoại': '(028) 73000596',             
        'Số Fax': '(028) 73000597',
        'Email': 'xaydungcaokhoa@gmail.com',
      },
      moreInfo: {
        'Tên quốc tế': 'CAO KHOA Consultant Construction Co.Ltd',
        'Giấy ĐKKD & MST': '0314137774 do Sở KH&ĐT Tp HCM cấp',
        'Tài khoản': '0501000127783 Ngân hàng Ngoại thương (VCB) – Chi nhánh Bắc Sài Gòn,   PGD An Sương Quận 12, Tp. HCM',
        'Vốn điều lệ': '5 000 000 000 VNĐ',
        'Người đại diện theo pháp luật': 'Ông Phạm Cao Huyên'
      }

    }
  }
}
</script>
<style scoped>
.develope-menu {
  margin: 0 -100px;
}
</style>