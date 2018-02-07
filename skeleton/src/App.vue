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
        <h5 class="text-tertiary text-bold">{{$t('site.title')}}
        <span class="light-paragraph text-light" slot="subtitle" dir="auto">
          {{$t('site.subtitle')}}
        </span>
        </h5>
      </q-toolbar-title>

      <q-select v-model="select"
                :display-value="selected"
                icon="fa-language"
                :options="selectOptions"
                @change="localeChange"
      >
      </q-select>


    </q-toolbar>

    <div slot="left">
      <q-list no-border link dense class="column">
        <q-item to="/About" class="relative-position no-margin row-1">
          <q-item-side icon="fa-fw fa-info-circle fa-fw fa-primary" />
          <q-item-main dir="auto" label="About" sublabel="What is this?" />
        </q-item>
        <q-item to="/Personae" class="relative-position row-1">
          <q-item-side icon="fa-fw fa-street-view" />
          <q-item-main dir="auto" label="Personæ" sublabel="Beta Access Program" />
        </q-item>
        <q-item to="/Watch" class="relative-position row-1">
          <q-item-side icon="fa-fw fa-tv" />
          <q-item-main ldir="auto" label="Watch" sublabel="Things to watch right now" />
        </q-item>
        <q-item to="/Downloads" class="relative-position row-1">
          <q-item-side icon="fa-fw fa-download" />
          <q-item-main dir="auto" label="Downloads" sublabel="Cool stuff people like you send us" />
        </q-item>
        <q-item to="/Contact" class="relative-position row-1">
          <q-item-side icon="fa-fw fa-address-card" />
          <q-item-main dir="auto" label="Contact" sublabel="Get in touch with us" />
        </q-item>
        <q-item  to="/Legal" class="relative-position row-1">
          <q-item-side icon="fa-fw fa-balance-scale" />
          <q-item-main dir="auto" label="Legal" sublabel="TOC, Trademark, Copyright" />
        </q-item>
        <q-item  to="/Settings" class="relative-position row-1">
          <q-item-side icon="fa-fw fa-cog" />
          <q-item-main dir="auto" label="Settings" sublabel="Language and other settings" />
        </q-item>
      </q-list>
      <q-item class="fixed-bottom">
        <small dir="auto" class="light-paragraph">
          {{appVersion}} © 2018, HamburgerKino e.V. & Partners
        </small>
      </q-item>
    </div>
    <div class="layout-view row inline full-width">
      <q-list id="mininav" dense no-border link class="relative-position float-right hidden">
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
          <span dir="auto" v-html="$t($route.name)"></span>
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
    QSelect,
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
            rightImage: '/static/en.png',
            value: 'en'
          },
          {
            label: 'French',
            rightImage: '/static/fr.png',
            value: 'fr'
          },
          {
            label: 'German',
            rightImage: '/static/de.png',
            value: 'de'
          },
          {
            label: 'Italian',
            rightImage: '/static/it.png',
            value: 'it'
          },
          {
            label: 'Spanish',
            rightImage: '/static/it.png',
            value: 'es'
          },
          {
            label: 'Russian',
            rightImage: '/static/ru.png',
            value: 'ru'
          },
          {
            label: 'Japanese',
            rightImage: '/static/ja.png',
            value: 'ja'
          },
          {
            label: 'Chinese',
            rightImage: '/static/zh.png',
            value: 'zh'
          },
          {
            label: 'Hebrew',
            rightImage: '/static/he.png',
            value: 'he'
          }
        ]
      }
    },
    watch: {
      select (val) {
        this.$i18n.locale = val
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        alert(Cookies.get('locale'))
        this.locale_cookie = Cookies.get('locale')
        if (this.locale_cookie) {
          this.$i18n.locale = this.locale_cookie
          let language = document.querySelector('.locale')
          language.value = this.locale_cookie
        }
        else {
          alert('NO COOKIE')
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
          secure: true,
          expires: 14,
          path: '/',
          domain: 'kinokabaret.com'
        })
      },
      toggleMiniNav () {
        // console.log(this.$refs.layout.sides.left)
        this.$refs.layout.toggleLeft()
        var threebar = document.querySelector('#threebar')
        var mininav = document.querySelector('#mininav')
        if (this.$refs.active) {
          threebar.classList.remove('hamburger')
          threebar.classList.add('cross')
          mininav.classList.add('hidden')
          this.$refs.active = false
        }
        else {
          threebar.classList.remove('cross')
          threebar.classList.add('hamburger')
          mininav.classList.remove('hidden')
          this.$refs.active = true
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
