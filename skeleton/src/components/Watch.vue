<template>
  <q-layout>
    <div class="layout-padding">
      <h4>
        Here are some things to watch right now.
      </h4>
      <div class="q-video">
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
          frameborder="0"
          allowfullscreen
        ></iframe>
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
