<template>
  <q-layout>
    <div class="layout-padding">
      <h4>
        Here are some things to watch right now.
      </h4>
      <div class="video column" style="height:400px">
          <iframe class="row" src="https://drive.google.com/file/d/1zHKXpSjDJMue0exTpfT2bW0CpXsJy6ir/preview" frameborder="0" height="200" allowfullscreen="true" style="height:600px; border:0;"/>
        </iframe>
      </div>
    </div>

  </q-layout>
</template>

<script>
  import {
    openURL,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain
  } from 'quasar'

  export default {
    name: 'watch',
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemMain
    },
    methods: {
      launch (url) {
        openURL(url)
      }
    }
  }
</script>

<style scoped>

</style>
