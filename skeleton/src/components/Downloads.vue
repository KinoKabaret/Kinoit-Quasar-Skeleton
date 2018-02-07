<template>
  <q-layout>
    <div class="layout-padding">
      <iframe src="https://drive.google.com/embeddedfolderview?id=1XO8d2DtH_3Z1v4qWYrGe1U57U642_x_X#grid" style="width:100%; border:0;">
      </iframe>

      <!--
        Coming soon: we will use tree:
        http://quasar-framework.org/components/tree.html
        and Pull Down to Refresh
        http://quasar-framework.org/components/pull-to-refresh.html
        And a new API call to look for folders/files in Downloads
      -->
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
  iframe {
    height:400px;
  }
</style>
