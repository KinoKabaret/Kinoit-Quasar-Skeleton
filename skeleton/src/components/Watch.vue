<template>
  <q-layout>
    <div class="layout-padding">
      <div class="q-video">
        <iframe class="row" src="https://drive.google.com/file/d/11QVHCIKAA1D-Gir-KDxy-jp_y8fgYO-G/preview" frameborder="0" allowfullscreen="true"/>
      </div>
    </div>
  </q-layout>
</template>
<script>
  import {
    QVideo
  } from 'quasar'
  export default {
    components: {
      QVideo
    },
    name: 'watch',
    methods: {
    }
  }
</script>

<style scoped>
  iframe {
    height:400px;
    max-height:100%;
    max-width:100%;
  }
  img {
    height:400px
  }
</style>
