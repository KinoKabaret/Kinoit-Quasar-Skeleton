<template>
    <div class="layout-padding">
      <span v-for="film in films">
        <a @click="loadIframe(film.id, film.title)" >
          {{ film.title }}
        </a> ||
      </span>
      <h5 v-text="banner"></h5>
      <div ref="frame" class="loader row" v-show="!iframe.loaded">
        <h4 class="text-center col-12 light-paragraph">
          <q-spinner :size="36"/>
          <span>Loading</span>
        </h4>
      </div>
      <iframe :src="iframe.src" ref="frame" style="width:100%; border:0;" @load="load" v-show="iframe.loaded" frameborder="0" allowfullscreen="true" autoplay="true">
      </iframe>
    </div>
</template>
<script>
  import {
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
          src: 'https://drive.google.com/file/d/1kk50LW1txHPhbgxpgCKJwJ13MJoXjLCA/preview',
          loaded: false
        },
        banner: 'Kino Rhapsody',
        films: [
          {
            title: '3G',
            id: '1Ve-QylXx4tB-oPV7-bxxTOj5_zaQId3-/preview'
          }, {
            title: '40days',
            id: '1Vo9kdJddz7iOOOhkr9THsNOY0Ozn5rJS/preview'
          }, {
            title: 'A Forest',
            id: '1tbC8rCEUdlH86vWEA0ae_BT3xl34IQFQ/preview'
          }, {
            title: 'Back',
            id: '1ORQBOUvFAAAJsVEbIaTcLWuTa1dbNrFN/preview'
          }, {
            title: 'Bluebird',
            id: '1vjqAWaEGK1Zgy4PpRMHrPrjkyJA65snf/preview'
          }, {
            title: 'CassACe',
            id: '1UDopvMt2GLNVIEj7UPeMi5Efh4usTs2J/preview'
          }, {
            title: 'Feet',
            id: '1he5iMeALLdsMrsBrpgVIavb9z4ot1os7/preview'
          }, {
            title: 'GoodBye',
            id: '11QVHCIKAA1D-Gir-KDxy-jp_y8fgYO-G/preview'
          }, {
            title: 'Imp of the Perverse',
            id: '1FtGkbFmpzQ948aWjYgse1CnouPEmheD-/preview'
          }, {
            title: 'Kino Kabaret Blues',
            id: '16AQ7gMrq69Jwi1CODG3qS41nHQwSnpTi/preview'
          }, {
            title: 'Kino Rhapsody',
            id: '1kk50LW1txHPhbgxpgCKJwJ13MJoXjLCA/preview'
          }, {
            title: 'Le Commencement',
            id: '18JmYfgPLPHKe1fYh8OEaPCcD6r2OLLRn/preview'
          }, {
            title: 'REVERSE',
            id: '1SLNZnl8sTAwpN7RG5xXdDE6U7PP20IfZ/preview'
          }, {
            title: 'T.E.A.R.',
            id: '1LRkzONUtWtMv1v2FunsVHTqKPV_Rr0Ef/preview'
          }
        ]
      }
    },
    methods: {
      load () {
        this.iframe.loaded = true
      },
      loadIframe (id,title) {
        this.iframe.loaded = false
        this.iframe.src = 'https://drive.google.com/file/d/' + id
        this.banner=title
      }
    }
  }
</script>

<style scoped>
  iframe {
    width: 100vw;
    height: 56.25vw; /* 100/56.25 = 560/315 = 1.778 */
    background:red;
  }
  img {
    height:400px
  }
</style>
