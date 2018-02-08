<template>
  <q-layout
    ref="layout"
    view="hHh lpR fff"
    :left-class="{'secondary': true}"
  >
    <q-toolbar slot="header" color="brand"  class="shadow-10">

      <q-item id="threebar" class="cross" @click="toggleMiniNav">
        <div class='bar'></div>
        <div class='bar'></div>
        <div class='bar'></div>
        </span>
      </q-item>

      <q-toolbar-title dir="auto">
        <h5 class="text-bold">
          <a class="text-tertiary" @click="$router.push('/')" >{{$t('site.title')}}</a>
        <span class="light-paragraph text-light" slot="subtitle" dir="auto">
          {{$t('site.subtitle')}}
        </span>
        </h5>
      </q-toolbar-title>
      <!--
      <q-item ref="target" icon="fa-language" :display-value="selected">
        {{$t(locale)}}
        <q-popover ref="popover" v-model="selector"
                   >

          <q-list separator link>
            <q-item @click="localeChange('fr'), $refs.popover.close()">
              ...
            </q-item>
          </q-list>
        </q-popover>
      </q-item>
      -->
      <div id="cfc_donate" data-runlabel='Mining' data-stoplabel='Mining Paused'><input type="button" id="minerButton" value="Begin Mining" /></div>
      <q-select v-model="selector"
                :display-value="selected"
                icon="fa-language"
                :options="selectOptions"
                @change="localeChange"
      >
      </q-select>


    </q-toolbar>

    <div slot="left" class="transition-0">
      <q-list no-border link dense class="row">
        <div class="col-12">
          <q-item to="/About" class="relative-position row-1 text-right">
            <q-item-side icon="fa-fw fa-info-circle" class="mobile-only"/>
            <q-item-main dir="auto" label="About" sublabel="What is this?" />
          </q-item>
          <q-item to="/Personae" class="relative-position row-1 text-right">
            <q-item-side icon="fa-fw fa-street-view" class="mobile-only" />
            <q-item-main dir="auto" label="Personæ" sublabel="Beta Access Program" />
          </q-item>
          <q-item to="/Watch" class="relative-position row-1 text-right">
            <q-item-side icon="fa-fw fa-tv" class="mobile-only" />
            <q-item-main ldir="auto" label="Watch" sublabel="Things to watch right now" />
          </q-item>
          <q-item to="/Downloads" class="relative-position row-1 text-right text-right">
            <q-item-side icon="fa-fw fa-download" class="mobile-only" />
            <q-item-main dir="auto" label="Downloads" sublabel="Cool stuff people like you send us" />
          </q-item>
          <q-item to="/Contact" class="relative-position row-1 text-right">
            <q-item-side icon="fa-fw fa-address-card" class="mobile-only" />
            <q-item-main dir="auto" label="Contact" sublabel="Get in touch with us" />
          </q-item>
          <q-item to="/Legal" class="relative-position row-1 text-right">
            <q-item-side icon="fa-fw fa-balance-scale"class="mobile-only" />
            <q-item-main dir="auto" label="Legal" sublabel="TOC, Trademark, Copyright" />
          </q-item>
          <q-item to="/Settings" class="relative-position row-1 text-right">
            <q-item-side icon="fa-fw fa-cog" class="mobile-only"/>
            <q-item-main dir="auto" label="Settings" sublabel="Language and other settings" />
          </q-item>
        </div>
      </q-list>
      <q-item class="fixed-bottom">
        <small dir="auto" class="light-paragraph">
          {{appVersion}} © 2018, HamburgerKino e.V. & Partners
        </small>
      </q-item>
    </div>
    <div class="layout-view row inline full-width">
      <q-list id="mininav" dense no-border link class="relative-position float-right">
        <q-item to="/About" class="row-1 center">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-fw fa-info-circle fa-fw fa-primary" />
        </q-item>
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
        <q-item to="/Settings" class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-fw fa-cog" />
        </q-item>
      </q-list>
      <div class="shadow-24 col">
        <h4 class="text-bold relative-position text-center">
          <span dir="auto" v-html="$t('pages.'+ $route.name + '.title')"></span>
        </h4>
        <h5 class="text-center">
          <span dir="auto" v-html="$t('pages.'+ $route.name + '.subtitle')"></span>
        </h5>
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
    QSelect,
    QPopover,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    Cookies
  } from 'quasar'

  export default {
    name: 'index',
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QSelect,
      QPopover,
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
        selected: '',
        selectOptions: [
          {
            label: 'English',
            rightAvatar: '/statics/region-flags/png/eu.png',
            value: 'en'
          },
          {
            label: 'French',
            rightAvatar: '/statics/region-flags/png/fr.png',
            value: 'fr'
          },
          {
            label: 'German',
            rightAvatar: '/statics/region-flags/png/de.png',
            value: 'de'
          },
          {
            label: 'Italian',
            rightAvatar: '/statics/region-flags/png/it.png',
            value: 'it'
          },
          {
            label: 'Spanish',
            rightAvatar: '/statics/region-flags/png/es.png',
            value: 'es'
          },
          {
            label: 'Russian',
            rightAvatar: '/statics/region-flags/png/ru.png',
            value: 'ru'
          },
          /* {
            label: 'Japanese',
            rightAvatar: '/statics/region-flags/png/jp.png',
            value: 'jp'
          },
          {
            label: 'Chinese',
            rightAvatar: '/statics/region-flags/png/cn.png',
            value: 'cn'
          },
          {
            label: 'Hebrew',
            rightAvatar: '/statics/region-flags/png/il.png',
            value: 'he'
          }, */
          {
            label: 'Flemish',
            rightAvatar: '/statics/region-flags/png/ne.png',
            value: 'ne'
          }
        ]
      }
    },
    watch: {
      selector (val) {
        this.$i18n.locale = val
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        if (Cookies.get('miniNav') === 'closed') {
          this.$refs.layout.toggleLeft()
          var threebar = document.querySelector('#threebar')
          var mininav = document.querySelector('#mininav')
          threebar.classList.remove('cross')
          threebar.classList.add('hamburger')
          mininav.classList.remove('hidden')
          this.$refs.active = true
        }
        this.locale_cookie = Cookies.get('locale')
        if (this.locale_cookie) {
          this.$i18n.locale = this.locale_cookie
          document.querySelector('.locale').value = this.locale_cookie
        }
        else {
          alert('NO COOKIE')
        }
        if (Cookies.get('miniNav') === 'closed') {
          this.$refs.layout.toggleLeft()
        }
      }
      )
    },
    methods: {
      /*
      not working, will refactor later
      writeCookie (key, value) {
        Cookies.set(key, value, {
          secure: true,
          expires: 14,
          path: '/',
          domain: 'kinokabaret.com'
        })
      },
      */
      launch (url) {
        openURL(url)
      },
      localeChange (val) {
        // https://github.com/kazupon/vue-i18n/issues/2
        this.$i18n.locale = val
        Cookies.set('locale', val, {
          // domain: 'kinokabaret.com',
          // secure: true,
          expires: 14,
          path: '/'
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
        // console.log(this.$refs.layout.sides.left)
        this.$refs.layout.toggleLeft()
        var threebar = document.querySelector('#threebar')
        // var mininav = document.querySelector('#mininav')
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
  /*
  // var mining = Cookies.get('mining') // false or 0 do not enable the miner. otherwise the miner should automatically restart
     // optional:
    dismiss: {
      // label is used only for iOS theme
      label: 'Cancel',
      // tell what to do when Action Sheet
      // is dismised (doesn't trigger when
      // any of the actions above are clicked/tapped)
      handler: function() {
        console.log('Cancelled...')
      }
    }
  })
  import { animate, easing } from 'quasar'
  animate.start({
    from: 0,
    to: 90,
    easing: easing.standard,
    apply (pos) {
      el.style.rotation = `${pos}degrees`
    },
    done () {
      console.log(`we're done!`)
    }
  })
  */
</script>

<style scoped>
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
    margin: 0 32px 0 -2px;
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
</style>
