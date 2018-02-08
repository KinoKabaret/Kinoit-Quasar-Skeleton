<template>
  <q-layout>
    <div class="layout-padding">
      <q-item dir="auto" v-html="$t('pages.downloads_old.p1')"></q-item>

      <div ref="frame" class="loader row" v-show="!iframe.loaded">
        <h4 class="text-center col-12 light-paragraph">
          <q-spinner :size="36"/>
          <span>Loading</span>
        </h4>
      </div>
      <iframe :src="iframe.src" ref="frame" style="width:100%; border:0;" @load="load" v-show="iframe.loaded">
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
    QItemMain,
    QSpinner
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
      QItemMain,
      QSpinner
    },
    data () {
      return {
        iframe: {
          src: 'https://drive.google.com/embeddedfolderview?id=1XO8d2DtH_3Z1v4qWYrGe1U57U642_x_X#grid',
          loaded: false
        }
      }
    },
    methods: {
      launch (url) {
        openURL(url)
      },
      load () {
        this.iframe.loaded = true
      }
    }
  }
</script>

<style scoped>
  iframe {
    height:400px;
    background: none;
  }
 </style>
