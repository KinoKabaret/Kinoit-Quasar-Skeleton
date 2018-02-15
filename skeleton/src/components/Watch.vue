<template>
  <q-layout>
    <div class="layout-padding row" >
      <q-list class="col-4" no-border dense link>
        <div class="row" v-for="film in films" >
          <q-item @click="loadIframe(film.id, film.title)" class="column" to="">
            <small class="row-12">{{ film.title }}</small>
            <img class="row" :src="'/statics/video-poster/' +
               film.title + '.png'" width="100" height="auto"/>
          </q-item>
        </div>
      </q-list>
      <div class="col-7">
        <h5 v-text="banner"></h5>
        <div ref="frame" class="loader" v-show="!iframe.loaded">
          <h4 class="text-center light-paragraph">
            <q-spinner :size="36"/>
            <span>Loading</span>
          </h4>
        </div>
        <iframe src="/statics/video-poster/Kino Kabaret blues.png" :src="iframe.src" ref="frame" @load="load" v-show="iframe.loaded" frameborder="0" allowfullscreen="true" autoplay="true">
        </iframe>
      </div>
    </div>
  </q-layout>
</template>
<script>
  import {
    QItem,
    QList,
    QLayout,
    QSpinner
  } from 'quasar'
  export default {
    name: 'downloads',
    components: {
      QItem,
      QList,
      QLayout,
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
            title: 'Kino Rhapsody',
            director: '',
            year: '',
            id: '1kk50LW1txHPhbgxpgCKJwJ13MJoXjLCA/preview'
          }, {
            title: '3G',
            director: '',
            year: '',
            id: '1Ve-QylXx4tB-oPV7-bxxTOj5_zaQId3-/preview'
          }, {
            title: 'My love',
            director: '',
            year: '',
            id: '11mdgdNkU8v0bL46UIqvA41Za4Dwybtyp/preview'
          }, {
            title: 'A Forest',
            director: '',
            year: '',
            id: '1tbC8rCEUdlH86vWEA0ae_BT3xl34IQFQ/preview'
          }, {
            title: 'Bluebird',
            director: '',
            year: '',
            id: '1vjqAWaEGK1Zgy4PpRMHrPrjkyJA65snf/preview'
          }, {
            title: 'GoodBye',
            director: '',
            year: '',
            id: '11QVHCIKAA1D-Gir-KDxy-jp_y8fgYO-G/preview'
          }, {
            title: 'Imp of the Perverse',
            director: '',
            year: '',
            id: '1FtGkbFmpzQ948aWjYgse1CnouPEmheD-/preview'
          }, {
            title: 'REVERSE',
            director: '',
            year: '',
            id: '1SLNZnl8sTAwpN7RG5xXdDE6U7PP20IfZ/preview'
          }, {
            title: 'T.E.A.R.',
            director: '',
            year: '',
            id: '1LRkzONUtWtMv1v2FunsVHTqKPV_Rr0Ef/preview'
          }, {
            title: 'Le Commencement',
            director: '',
            year: '',
            id: '18JmYfgPLPHKe1fYh8OEaPCcD6r2OLLRn/preview'
          }
        ]
      }
    },
    methods: {
      load () {
        this.iframe.loaded = true
      },
      loadIframe (id, title) {
        this.iframe.loaded = false
        this.iframe.src = 'https://drive.google.com/file/d/' + id
        this.banner = title
      }
    }
  }
</script>

<style scoped>
  iframe {
    width: 50vw!important;
    height: 25.5125vw!important; /* 100/56.25 = 560/315 = 1.778 */
    background: black;
    border: 0;
  }
  img {
  }
</style>
