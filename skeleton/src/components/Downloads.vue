<template>
  <q-layout>
    <div class="layout-padding">
      We will use tree:<br/>
      http://quasar-framework.org/components/tree.html<br/>
      and Pull Down to Refresh<br/>
      http://quasar-framework.org/components/pull-to-refresh.html<br/>
      And a new API call to look for folders/files in Downloads</div>
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
