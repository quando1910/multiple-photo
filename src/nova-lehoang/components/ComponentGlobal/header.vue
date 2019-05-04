<template>
  <header id="header" class="header-section">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-md-4">
          <div class="site-branding"><div class="slicknav_menu" ><a @click="openNav()" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style="outline: none;"><span class="slicknav_menutxt"></span><span class="slicknav_icon slicknav_no-text"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a>
          <ul class="slicknav_nav" :class="{'slicknav_hidden': openPopup}" aria-hidden="true" role="menu">
            <li class="active"> <a href="file:///Users/quando/Downloads/Stela/index.html" role="menuitem" tabindex="-1">Home</a></li>
            <li><router-link :to="{name: 'Wedding'}" role="menuitem" tabindex="-1">Wedding</router-link></li>
            <li><router-link :to="{name: 'Event'}" role="menuitem" tabindex="-1">Event</router-link></li>
            <li><router-link :to="{name: 'Service'}" role="menuitem" tabindex="-1">Other Services</router-link></li>
            <li><router-link :to="{name: 'About'}" role="menuitem" tabindex="-1">About Us</router-link></li>
          </ul></div>
          <router-link :to="{name:'Home'}"><img src="../../assets/img/logo.png" class="logo-img" alt="Brand"></router-link>
          </div>
        </div>
        <div class="col-md-8  text-right">
          <ul id="mainmenu" class="nav navbar-nav nav-menu">
            <li class="active"> <router-link :to="{name:'Home'}">Home</router-link></li>
            <li><router-link :to="{name:'Wedding'}">Wedding<span class="slicknav_arrow">▼</span></a></router-link>
              <ul>
                <li><router-link :to="{name: 'WeddingLocation'}">Locations</router-link></li>
                <li><router-link :to="{name: 'PreAlbums'}">Prewedding Album</router-link></li>
                <li><router-link :to="{name: 'JournalAlbums'}">Journalism Album</router-link></li>
                <li><router-link :to="{name: 'WeddingPost'}">Wedding Posts</router-link></li>
              </ul>
            </li>
            <li><router-link :to="{name:'Event'}">Event<span class="slicknav_arrow">▼</span></router-link>
              <ul>
                <li><router-link :to="{name: 'Event'}">Event Services</router-link></li>
                <li><router-link :to="{name: 'EventAlbums'}">Event Album</router-link></li>
                <li><router-link :to="{name: 'BehindScenes'}">Behind the Scenes</router-link></li>
              </ul>
            </li>
            <li><router-link :to="{name:'Event'}">TVC<span class="slicknav_arrow">▼</span></router-link>
              <ul>
                <li><router-link :to="{name: 'TVC'}">TVC Services</router-link></li>
                <li><router-link :to="{name: 'WeddingAlbums'}">Products</router-link></li>
              </ul>
            </li>
            <li><router-link :to="{name:'Service'}">Other Services<span class="slicknav_arrow">▼</span></router-link>
              <ul>
                <li><router-link :to="{name: 'Flycam'}">Flycam</router-link></li>
                <li><router-link :to="{name: 'Products', query: {belongs: '5c5828a056b26d0176fbcda4'}}">Hire Devices</router-link></li>
                <li><router-link :to="{name: 'ArtPictures', query: {belongs: '5c5828aa56b26d0176fbcda5'}}">Art Pictures</router-link></li>
              </ul>
            </li>
            <li><router-link :to="{name:'About'}">About Us</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </header><!-- /Header Section -->
</template>
<script>
export default {
  data () {
    return {
      openPopup: true
    }
  },
  methods: {
    openNav() {
      this.openPopup = !this.openPopup
    },
    logout () {
      localStorage.removeItem('ACCESS_TOKEN')
      localStorage.removeItem('UID')
      localStorage.removeItem('PROVIDER')
      this.$http.delete('session/1')
      .then(response => {
        this.$http.headers.common['Access-Token'] = null
        this.$http.headers.common['Uid'] = null
        this.$http.headers.common['Provider'] = null
        window.location.href = '/auth/login'
      })
    }
  }
}
</script>
<style>
.slicknav_hidden {
  display: none;
}
.logo-img {
  width: 200px;
}
.slicknav_arrow {
  font-size: 8px;
}
</style>
