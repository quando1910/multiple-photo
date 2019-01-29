<template>
  <div>
    <articles v-if="$route.name === 'WeddingLocation'" :title="'Địa điểm chụp ảnh cưới'" :subTitle="'đẹp nhất'" :type="5"/>
    <articles v-if="$route.name === 'WeddingPost'" :title="'Những câu chuyện tình yêu'" :subTitle="'đẹp nhất'" :type="6"/>
    <articles v-if="$route.name === 'ArticlesPost'" :title="'Tham khảo về sự kiện'" :type="7"/>
  </div>
</template>
<script>
export default {
  name: 'WeddingLocation',
  created () {
  }
}
</script>
