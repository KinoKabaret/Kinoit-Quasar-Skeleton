<template>
  <q-layout>
    <div class="layout-padding">
      <p dir="auto" v-html="$t('pages.home.p1')"></p>
      <p dir="auto" v-html="$t('pages.home.p2')"></p>
      <p dir="auto" v-html="$t('pages.home.p3')"></p>
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
    name: 'downloads',
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
