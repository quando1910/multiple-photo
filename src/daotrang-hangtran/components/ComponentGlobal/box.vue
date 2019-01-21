<template>
  <div class="box">
    <h3 class="header">{{title}}</h3>
    <div class="new-videos">
      <div class="scrollbar" id="ex3">
        <ul class="listnews">
          <li class="clearfix" v-for="index in 10">
            <a href="/Cac-bai-giang-cua-Thay-Tran-Dai-Hue/Doc-sach-ngan-lan-Tap-13-984/">
              <img src="http://vuonhoaphatgiao.com/uploads/noidung/images/nghi_thuc/phat-giao-voi-tang-le.jpg" alt="Đọc sách ngàn lần - Tập 13 (Tập cuối)" width="52" height="50" style="margin-right:5px;float:left;border:1px solid rgb(255,255,255);box-shadow:2px 2px 2px rgb(182,182,182);">
            </a>
            <a title="Đọc sách ngàn lần - Tập 13 (Tập cuối)" href="/Cac-bai-giang-cua-Thay-Tran-Dai-Hue/Doc-sach-ngan-lan-Tap-13-984/">Đọc
              sách ngàn lần - Tập 13 (Tập cuối)</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['title', 'data']
  }
</script>
