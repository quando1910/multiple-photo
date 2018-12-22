<template>
    <div class="dashboard">
        <section class="contact-section padding">
            <div class="container">
                <div class="row contact-wrap">
                    <div class="col-md-6 xs-padding">
                        <div class="contact-info">
                            <h2>Get in touch</h2>
                            <p>Nova Production - Chúng tôi không ngừng khẳng định vị trí của mình ở lĩnh vực nhiếp ảnh và phim nghệ thuật. Với những sáng tạo về ý tưởng, sự chuyên nghiệp, tỉ mỉ trong từng chi tiết của khâu tổ chức.</p>
                            <ul>
                                <li><i class="ti-location-pin"></i>18, Nguyễn Chí Thanh, P. Thạch Thang, Q. Hải Châu, Tp. Đà Nẵng</li>
                                <li><i class="ti-mobile"></i>0905.320.279</li>
                                <li><i class="ti-email"></i>nova.filmpro@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 xs-padding">
                        <div class="contact-form">
                            <h2>Drop us a line</h2>
                            <p>Để lại cho chúng tôi thông điệp.</p>
                            <form action="http://wowthemez.com/templates/stela/contact.php" method="post" id="ajax_form" class="form-horizontal">
                                <div class="form-group colum-row row">
                                    <div class="col-sm-6">
                                        <input type="text" id="name" name="name" class="form-control" placeholder="Name" required="">
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="email" id="email" name="email" class="form-control" placeholder="Email" required="">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <textarea id="message" name="message" cols="30" rows="5" class="form-control message" placeholder="Message" required=""></textarea>
                                    </div>
                                </div>
                                <div class="form-group mb-0 row">
                                    <div class="col-md-12">
                                        <button id="submit" class="default-btn" type="submit">Send Message</button>
                                    </div>
                                </div>
                                <div id="form-messages" class="alert" role="alert"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section><!-- /Contact Section -->
    </div>
</template>
<script>
export default {
  name: 'About'
}
</script>
