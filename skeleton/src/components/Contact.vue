<template>
  <q-layout>
    <div class="layout-padding">
      <p>
        The KINOÏT Platform is a project of the non-profit Filmmakers Cooperative known as HamburgerKino e.V. (Hamburg, Germany) in partnership with Kino00 (Montreal, Canada), Kinoonik Holland (Vlaardingen/Rotterdam, Netherlands) and KinoCaen (Caen, France).
      </p>

      <q-list no-border link inset-delimiter>
        <q-item @click="launch('mailto:web@kinokabaret.com')">
          <q-item-side icon="fa-at" />
          <q-item-main label="Email" sublabel="web@kinokabaret.com" />
        </q-item>
        <q-item @click="launch('https://instagram.com/Kinoitplatform')">
          <q-item-side icon="fa-instagram" />
          <q-item-main label="Instagram" sublabel="Kinoitplatform" />
        </q-item>
        <q-item @click="launch('https://facebook.com/KinoitAPP')">
          <q-item-side icon="fa-facebook-square" />
          <q-item-main label="Facebook" sublabel="KinoitAPP" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="fa-twitter-square" />
          <q-item-main label="Twitter" sublabel="@kinoit1999" />
        </q-item>
        <q-item @click="launch('https://github.com/KinoKabaret')">
          <q-item-side icon="fa-github-square" />
          <q-item-main label="Github" sublabel="KinoKabaret" />
        </q-item>
      </q-list>
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
    name: 'contact',
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
