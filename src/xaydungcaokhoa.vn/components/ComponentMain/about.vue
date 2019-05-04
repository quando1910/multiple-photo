<template>
  <div>
    <div class="banner-area pt-130 pb-120 bg-7 overlay-2">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="banner-page text-center text-white text-uppercase">
              <h1>CONTACt US</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="breadcrumb-area ptb-25 broder-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="breadcrumb-list text-center text-uppercase">
              <ul>
                <li><a href="index.html">home</a><span class="divider"> // </span></li>
                <li class="active">Contact Us</li>
              </ul>							
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->
    <!-- Google Map Area Start -->
    <section class="map-area-main two">
      <div class="container-fluid">
        <div class="map-area">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.839049333169!2d106.62058881480117!3d10.823626392289496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bda6e5a5ecd%3A0x4c605e2d7139a5d5!2zQ8O0bmcgdHkgVE5ISCBUxrAgduG6pW4gWMOieSBk4buxbmcgQ2FvIEtob2E!5e0!3m2!1sen!2s!4v1550907256859" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      </div>
      <div class="container">
        <div class="row pb-100">
          <!-- Contact Left Area Start -->
          <div class="col-md-6">
            <div class="help-contact-area white-bg shadow ptb-100">
              <div class="section-title text-center">
                <h4>Leave a Massage</h4>
              </div>
              <form id="contact-form" class="form-group" method="POST" action="mail.php">
                <div class="form-single">
                  <input type="text" name="name" required id="name" placeholder="Name *" class="form-control">
                </div>
                <div class="form-single">
                  <input type="text" name="email" required id="email" placeholder="E-mail *" class="form-control">
                </div>
                <div class="form-textarea">
                  <textarea name="message" required id="message" placeholder="Massage *" rows="6" class="form-control"></textarea>
                </div>
                <div class="contact-button">
                  <button class="contact-submit" type="submit">send message</button>
                  <p class="form-messege"></p>
                </div>
              </form>
            </div>
          </div>
          <!-- Contact Left Area Start -->
          <!-- Contact Right Area Start -->
          <div class="col-md-6">
            <div class="cntct-right-adrs pl-80 pt-90">
              <div class="section-title text-left">
                <h4>Liên hệ với chúng tôi</h4>
              </div>
              <div class="adrs-details mt-60">
                <ul>
                  <li>
                    <a href="#"><i class="zmdi zmdi-pin"></i></a>
                    <p>B23 đường D1, Phường Tân Thới Nhất, Quận 12, Tp.HCM</p>
                  </li>
                  <li>
                    <a href="#"><i class="zmdi zmdi-email"></i></a>
                    <p>xaydungcaokhoa@gmail.com</p>
                  </li>
                  <li>
                    <a href="#"><i class="zmdi zmdi-phone"></i></a>
                    <p>Số điện thoại: (028) 73000596</p>
                    <p>Hotline: 094 898 5741</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Contact Right Area End -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.adrs-details p {
  padding-right: 0;
}
</style>
