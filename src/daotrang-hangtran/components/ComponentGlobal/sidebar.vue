<template>
  <div>
    <box :title="'Hộ niệm mới nhất'" :data="data"></box>
    <box :title="'Video mới nhất'" :data="data"></box>
    <box :title="'Video mới nhất'" :data="data"></box>
    <box :title="'Video mới nhất'" :data="data"></box>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  }
}
</script>

<style>

</style>
