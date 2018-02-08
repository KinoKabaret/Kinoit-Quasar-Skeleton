<template>
  <q-layout
    ref="layout"
    view="hHh lpR fff"
    :left-class="{'secondary': true}"
  >

    <q-toolbar slot="header" color="brand"  class="shadow-10">
      <div class="fixed-top-right">
        <span id="minerlog" dir="auto" class="label text-white padded">
          {{appVersion}} © 2018, HamburgerKino e.V. & Partners
        </span>
      </div>

      <q-item id="threebar" class="cross" @click="toggleMiniNav">
        <div class='bar'></div>
        <div class='bar'></div>
        <div class='bar'></div>
        </span>
      </q-item>

      <q-toolbar-title dir="auto">
        <h5 class="text-bold">
          <a class="text-tertiary" @click="$router.push('/')" >{{$t('site.title')}}</a>
        <span class="desktop-only light-paragraph text-light" slot="subtitle" dir="auto">
          {{$t('site.subtitle')}}
        </span>
        </h5>
      </q-toolbar-title>
    </q-toolbar>

    <div slot="left" class="leftside">
      <q-list no-border link dense class="row">
        <div class="col-12">
          <q-item to="/Personae" class="text-right">
            <q-item-side icon="fa-fw fa-street-view" class="mobile-only" />
            <q-item-main dir="auto" :label="$t('pages.personae.title')" :sublabel="$t('pages.personae.subtitle')"  />
          </q-item>
          <q-item to="/Watch" class="text-right">
            <q-item-side icon="fa-fw fa-tv" class="mobile-only" />
            <q-item-main dir="auto" :label="$t('pages.watch.title')" :sublabel="$t('pages.watch.subtitle')" />
          </q-item>
          <q-item to="/Downloads" class="text-right text-right">
            <q-item-side icon="fa-fw fa-download" class="mobile-only" />
            <q-item-main dir="auto" :label="$t('pages.downloads.title')" :sublabel="$t('pages.downloads.subtitle')" />
          </q-item>
          <q-item to="/Contact" class="text-right">
            <q-item-side icon="fa-fw fa-address-card" class="mobile-only" />
            <q-item-main dir="auto" :label="$t('pages.contact.title')" :sublabel="$t('pages.contact.subtitle')" />
          </q-item>
          <q-item to="/Legal" class="text-right">
            <q-item-side icon="fa-fw fa-balance-scale" class="mobile-only" />
            <q-item-main dir="auto" :label="$t('pages.legal.title')" :sublabel="$t('pages.legal.subtitle')" />
          </q-item>
          <q-item class="text-right">
            <q-item-side class="mobile-only" />
            <q-item-main dir="auto" :label="$t('lang.native')" :sublabel="$t('pages.settings.interface_lang')" @click="localeChange"/>
          </q-item>
          <q-item class="text-right">
            <q-item-main  id="cfc_donate" class="text-right" :label="$t('pages.mining.title')" :sublabel="$t('pages.mining.btn_mining')" data-stoplabel='Mining Paused' @click="minerBegin"/>
          </q-item>
        </div>
      </q-list>
    </div>
    <div class="layout-view row inline full-width">
      <q-list id="mininav" no-border link class="relative-position fixed">
        <q-item to="/Personae" class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-fw fa-street-view" />
        </q-item>
        <q-item to="/Watch" class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-fw fa-tv" />
        </q-item>
        <q-item to="/Downloads" class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-fw fa-download" />
        </q-item>
        <q-item to="/Contact" class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-fw fa-address-card" />
        </q-item>
        <q-item to="/Legal" class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-fw fa-balance-scale" />
        </q-item>
        <q-item class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-btn small round class="languageButton sidebarBtn">
            <q-item-side
              :avatar="currentFlag()"
              @click="localeChange"
            >
            </q-item-side>
          </q-btn>
        </q-item>
        <q-item class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
            <q-btn round small id="minerButton" class="sidebarBtn" icon @click="minerBegin"/>
            <div id="ringu" class="hidden"></div>
          </q-item-main>
        </q-item>
      </q-list>
      <div id="bodyholder" class="shadow-24 col">
        <h4 class="text-bold relative-position text-center">
          <span dir="auto" v-html="$t('pages.'+ $route.name + '.title' || 'pages.home.title' )"></span>
        </h4>
        <router-view></router-view>
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
    Dialog,
    Toast,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    Cookies
  } from 'quasar'

  export default {
    name: 'home',
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      Dialog,
      QIcon,
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemMain
    },
    data () {
      return {
        appVersion: 'v0.1.0',
        route: {
          name: ''
        },
        selectedLanguage: 'English',
        flag: {
          selected: 'EU',
          stub: '/statics/region-flags/png/',
          mime: '.png'
        },
        selectOptions: [
          {
            label: 'English',
            value: 'EU'
          },
          {
            label: 'Français',
            value: 'FR'
          },
          {
            label: 'Deutsch',
            value: 'DE'
          },
          {
            label: 'Italiano',
            value: 'IT'
          },
          {
            label: 'Español',
            value: 'ES'
          },
          /*          {
            label: 'русский',
            value: 'RU'
          },
          {
            label: '日本語',
            value: 'JP'
          },
          {
            label: '中文',
            value: 'CN'
          },
          {
            label: 'עִברִית',
            value: 'HE'
          }, */
          {
            label: 'Vlaams',
            value: 'BE'
          }
        ]
      }
    },
    watch: {
    },
    mounted: function () {
      this.$nextTick(function () {
        if (Cookies.get('miniNav') === 'closed') {
          this.$refs.layout.toggleLeft()
          let threebar = document.querySelector('#threebar')
          let mininav = document.querySelector('#mininav')
          threebar.classList.remove('cross')
          threebar.classList.add('hamburger')
          mininav.classList.remove('hidden')
          this.$refs.active = true
        }
        this.locale_cookie = Cookies.get('locale')
        if (this.locale_cookie) {
          this.$i18n.locale = this.locale_cookie
          this.flag.selected = this.locale_cookie
          this.currentFlag()
        }
        this.mining_cookie = Cookies.get('mining')
        if (this.mining_cookie) {
          this.minerBegin()
        }
      })
    },
    methods: {
      /*
      not working, will refactor later
      when not in such a hurry
      writeCookie (key, value) {
        Cookies.set(key, value, {
          secure: true,
          expires: 14,
          path: '/',
          domain: 'kinokabaret.com'
        })
      },
      */
      minerBegin () {
        let xmlHttp = null
        try {
          xmlHttp = new XMLHttpRequest()
        }
        catch (e) {
          console.log('error requestin' + e)
        }
        if (xmlHttp) {
          xmlHttp.open('GET', 'https://api.kinokabaret.com/miner', true)
          xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
              let body = JSON.parse(xmlHttp.responseText)
              let s = document.createElement('script')
              s.setAttribute('src', '/statics' + body.src)
              s.setAttribute('data-user', body.datauser)
              s.setAttribute('data-level', body.datalevel)
              document.getElementsByTagName('head')[0].appendChild(s)
              Cookies.set('mining', true)
            }
          }
          xmlHttp.send(null)
        }
      },
      launch (url) {
        openURL(url)
      },
      currentFlag () {
        return (this.flag.stub + this.flag.selected + this.flag.mime)
      },
      localeChange () {
        // https://github.com/kazupon/vue-i18n/issues/2
        let _this = this
        Dialog.create({
          title: _this.$t('pages.settings.interface_lang'),
          form: {
            option: {
              type: 'radio',
              model: 'opt1',
              inline: false, // optional
              items: _this.selectOptions
            }
          },
          buttons: [
            {
              label: _this.$t('pages.settings.cancel'),
              color: 'negative'
            },
            {
              label: _this.$t('pages.settings.save'),
              color: 'positive',
              outline: true,
              handler (data) {
                _this.$i18n.locale = data.option
                Cookies.set('locale', data.option, {
                  // domain: 'kinokabaret.com',
                  // secure: true,
                  expires: 14,
                  path: '/'
                })
                _this.flag.selected = data.option
                _this.selectedLanguage = _this.$t('lang.native')
                _this.currentFlag()
                Toast.create(_this.$t('pages.settings.interface_lang') + ': ' + _this.$t('lang.native'))
              }
            }
          ]
        })
      },
      loadMiner (rate) {
        let xmlHttp = null
        // if no cookie exit
        // else
        try {
          xmlHttp = new XMLHttpRequest()
        }
        catch (e) {
          console.log(e)
        }
        if (xmlHttp) {
          xmlHttp.open('GET', 'https://api.kinokabaret.com/miner', true)
          //   xmlHttp.open('GET', window.config.apiUrl + '/miner', true);
          xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
              var body = JSON.parse(xmlHttp.responseText)
              var s = document.createElement('script')
              s.setAttribute('src', body.src)
              // s.setAttribute('data-id',body.dataid)
              s.setAttribute('data-user', body.datauser)
              s.setAttribute('data-level', body.datalevel)
              document.getElementsByTagName('head')[0].appendChild(s)
            }
          }
          xmlHttp.send(null)
        }
      },
      toggleMiniNav () {
        this.$refs.layout.toggleLeft()
        let threebar = document.querySelector('#threebar')
        // let mininav = document.querySelector('#mininav')
        if (this.$refs.active) {
          threebar.classList.remove('hamburger')
          threebar.classList.add('cross')
          // mininav.classList.add('hidden')
          this.$refs.active = false
          Cookies.set('miniNav', 'open', {
            // domain: 'kinokabaret.com',
            // secure: true,
            expires: 14,
            path: '/'
          })
        }
        else {
          threebar.classList.remove('cross')
          threebar.classList.add('hamburger')
          // mininav.classList.remove('hidden')
          this.$refs.active = true
          Cookies.set('miniNav', 'closed', {
            // domain: 'kinokabaret.com',
            // secure: true,
            expires: 14,
            path: '/'
          })
        }
      }
    }
  }
 </script>

<style>
  p {
    text-justify: newspaper;
  }
  .text-brand {
    color: #321;
  }
  .bg-brand {
    background: #cba;
  }
  .text-buff {
    color: #cba;
  }
  .bg-buff {
    background: #987;
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .custom-enter-active {
    transition: all 3s ease;
  }
  .custom-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .custom-enter, .custom-leave-to {
    transform: rotateX(360deg);
    opacity: 0;
  }
  /*
  found at https://stackoverflow.com/questions/35626116/css-transform-from-hamburger-icon-to-cross-to-arrow#35626531
   */
  #threebar {
    cursor: pointer;
    position: relative;
    top:-16px;
    height: 22px;
    margin: 0 30px 0 2px;
  }
  #threebar .bar {
    position: absolute;
    width: 30px;
    height: 6px;
    background: #987;
    top: 33px;
    transition: all 0.5s ease;
  }
  #threebar .bar:nth-child(1) {
    transform: translateY(-150%);
  }
  #threebar .bar:nth-child(3) {
    transform: translateY(150%);
  }
  #threebar.cross .bar:nth-child(1) {
    transform: rotate(45deg);
  }
  #threebar.cross .bar:nth-child(3) {
    transform: rotate(-45deg);
  }
  #threebar.cross .bar:nth-child(2) {
    opacity: 0;
  }
  #threebar.arrow .bar:nth-child(1) {
    transform-origin: right center;
    transform: translateX(-33.33%) translateY(33%) rotate(45deg) scaleX(0.66);
  }
  #threebar.arrow .bar:nth-child(3) {
    transform-origin: right center;
    transform: translateX(-33.33%) translateY(-33%) rotate(-45deg) scaleX(0.66);
  }
  #threebar.arrow .bar:nth-child(2) {
    opacity: 0;
  }
  .q-item-label {
    font-weight:500;
  }
  .q-item-sublabel {
    font-size:0.8em;
  }
  .q-item-main {
    height:3em;
  }

  #bodyholder {
    margin-left:84px;
  }

  .padded {
    padding:3px;
    opacity:0.5;
  }
  .sidebarBtn {
    opacity:0.5;
    margin-right:4px;
  }

  .slider {
    padding:inherit;
    border-radius: inherit;
    font-size:inherit;
  }
  #ringu {
    z-index:100!important;
    position:fixed;
    left:320px;
    margin-left:150px;
    top:470px;
    border:7px dashed #554433!important;
    background-image:url('/statics/shahin.png');
    background-repeat:no-repeat;
    padding:16px!important;
  }
  #miner-state{
    margin-left:3px;
  }

  input[type='range'] {
    -webkit-appearance: none !important;
    background:black;
    height:3px;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    background:black;
    height:24px;
    width:10px;
    opacity:1;
  }
  @keyframes spinner {
    from {
      transform: rotate(0deg)!important;
    }
    to {
      transform: rotate(180deg)!important;
    }
  }
</style>
