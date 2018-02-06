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

      <q-toolbar-title>
        {{$t('site.title')}}
        <div slot="subtitle">
          {{$t('site.subtitle')}}
        </div>
      </q-toolbar-title>

      <q-btn>
        <!--<q-item-side color="buff" icon="fa-language" />-->
        <q-item-main/>
        <label>{{$t('lang.native')}}</label>
      </q-btn>

    </q-toolbar>

    <div slot="left">
      <q-list no-border link dense class="column">
        <q-item to="/About" class="relative-position no-margin row-1">
          <q-item-side icon="fa-info-circle fa-primary" />
          <q-item-main label="About" sublabel="What is this?" />
        </q-item>
        <q-item to="/Personae" class="relative-position row-1">
          <q-item-side icon="fa-street-view" />
          <q-item-main label="Personæ" sublabel="Beta Access Program" />
        </q-item>
        <q-item to="/Watch" class="relative-position row-1">
          <q-item-side icon="fa-tv" />
          <q-item-main label="Watch" sublabel="Things to watch right now" />
        </q-item>
        <q-item to="/Downloads" class="relative-position row-1">
          <q-item-side icon="fa-download" />
          <q-item-main label="Downloads" sublabel="Cool stuff people like you send us" />
        </q-item>
        <q-item to="/Contact" class="relative-position row-1">
          <q-item-side icon="fa-address-card" />
          <q-item-main label="Contact" sublabel="Get in touch with us" />
        </q-item>
        <q-item  to="/Legal" class="relative-position row-1">
          <q-item-side icon="fa-balance-scale" />
          <q-item-main label="Legal" sublabel="TOC, Trademark, Copyright" />
        </q-item>

      </q-list>
      <q-item class="fixed-bottom">
        <small class="light-paragraph">
          © 2018, HamburgerKino e.V. & Partners
        </small>
      </q-item>
    </div>
    <div class="layout-view row inline full-width">
      <q-list id="mininav" dense no-border link class="relative-position float-right hidden">
        <q-item to="/About" class="row-1 center">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-info-circle fa-primary" />
        </q-item>
        <q-item to="/Personae" class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-street-view" />
        </q-item>
        <q-item to="/Watch" class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-tv" />
        </q-item>
        <q-item to="/Downloads" class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-download" />
        </q-item>
        <q-item to="/Contact" class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-address-card" />
        </q-item>
        <q-item to="/Legal" class="relative-position row-1">
          <q-item-main label="&nbsp;" sublabel="&nbsp;" />
          <q-item-side icon="fa-balance-scale" />
        </q-item>
      </q-list>
      <div class="shadow-24 col">
        <h4 class="text-bold relative-position text-center">
          <span v-html="$t($route.name)"></span>
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
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain
  } from 'quasar'

  export default {
    name: 'index',
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
      },
      cookieCheck () {
        console.log(document.cookie)
        // want to know navbar state
        // navbar size
        // language
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
// var mining = Cookies.get('mining') // false or 0 do not enable the miner. otherwise the miner should automatically restart
/*
import { ActionSheet } from 'quasar'
ActionSheet.create({
  title: 'Choose a Language',
  // specify ONLY IF you want gallery mode:
  actions: [
    {
      label: 'English',
      //icon: 'delete', // specify ONLY IF using icon
      avatar: 'assets/en_EN.png', // specify ONLY IF using avatar
      handler: function() {
        console.log('Choose English')
      }
    },
    {
      label: 'Deutsch',
      //icon: 'delete', // specify ONLY IF using icon
      avatar: 'assets/en_EN.png', // specify ONLY IF using avatar
      handler: function () {
        console.log('Choose French')
      }
    },
    {
      label: 'French',
      //icon: 'delete', // specify ONLY IF using icon
      avatar: 'assets/en_EN.png', // specify ONLY IF using avatar
      handler: function() {
        console.log('Choose English')
      }
    },
    {
      label: 'Spanish',
      //icon: 'delete', // specify ONLY IF using icon
      avatar: 'assets/en_EN.png', // specify ONLY IF using avatar
      handler: function() {
        console.log('Choose English')
      }
    }
  ],
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
