<template>
  <div>
    <albums v-if="$route.name === 'PreAlbums'" :title="'Ảnh cưới ngoại cảnh'" :subTitle="'đẹp nhất'" :type="1"/>
    <albums v-if="$route.name === 'JournalAlbums'" :title="'Cách chúng tôi lưu lại'" :subTitle="'ngày cưới của các bạn'" :type="2"/>
    <albums v-if="$route.name === 'EventAlbums'" :title="'Ảnh sự kiện nổi bật'" :type="3"/>
  </div>
</template>
<script>
export default {
  name: 'WeddingLocation',
  created () {
  }
}
</script>
