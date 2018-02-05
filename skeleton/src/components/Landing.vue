<template>
  <q-layout
    ref="layout"
    view="hHh lpR fff"
    :left-class="{'bg-grey-1': true}"
  >
    <q-toolbar slot="header" color="brand"  class="shadow-5"
    >
        <q-btn round color="buff" @click="$refs.layout.toggleLeft()">
          <q-transition name="custom">
            <q-icon name="menu"
                    v-bind:class="{ active: showMobileMenu }"
                    v-on:click="showMobileMenu = !showMobileMenu" />
          </q-transition>
        </q-btn>


      <q-toolbar-title v-html="">{{$t('site.title')}}
        <div slot="subtitle">{{$t('site.subtitle')}}</div>
      </q-toolbar-title>
      <q-btn>
        <!--<q-item-side color="buff" icon="fa-language" />-->
        <q-item-main/>
        <label>{{$t('lang.native')}}</label>
      </q-btn>

    </q-toolbar>

    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <q-list no-border link inset-delimiter  v-ripple>

        <q-list-header>

           <p class="right" icon="fa-chevron-circle-left"></p>
          </q-btn>
        </q-list-header>
        <q-item to="/About" class="relative-position">
          <q-item-side icon="fa-info-circle" />
          <q-item-main label="About" sublabel="What is this?" />
        </q-item>
        <q-item to="/Personae" class="relative-position">
          <q-item-side icon="fa-street-view" />
          <q-item-main label="Personæ" sublabel="Beta Access Program" />
        </q-item>
        <q-item to="/Watch" class="relative-position">
          <q-item-side icon="fa-tv" />
          <q-item-main label="Watch" sublabel="Things to watch right now" />
        </q-item>
        <q-item to="/Downloads" class="relative-position">
          <q-item-side icon="fa-download" />
          <q-item-main label="Downloads" sublabel="Cool stuff people like you send us" />
        </q-item>
        <q-item to="/Contact" class="relative-position">
          <q-item-side icon="fa-address-card" />
          <q-item-main label="Contact" sublabel="Get in touch with us" />
        </q-item>
        <q-item  to="/Legal" class="relative-position">
          <q-item-side icon="fa-balance-scale" />
          <q-item-main label="Legal" sublabel="TOC, Trademark, Copyright" />
        </q-item>
      </q-list>
      <q-list-footer>
          <q-item  class="justify-end fixed-bottom-left center" @click="$refs.layout.toggleLeft()">
            Close &nbsp;
            <q-item-side icon="fa-chevron-circle-left" color="warning"/>
          </q-item>

      </q-list-footer>
    </div>

    <div class="layout-view">
      <content-header></content-header>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div slot=""></div>
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
    QItemMain,
  },
  methods: {
    launch (url) {
      openURL(url)
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
  .showMobileMenu {
    transform: rotate(90deg);
    color:red;
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
</style>
