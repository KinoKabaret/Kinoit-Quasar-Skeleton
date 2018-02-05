<template>
  <q-layout>
    <div class="layout-padding">
      <p>
        The KINOÏT Platform is a project of the non-profit Filmmakers Cooperative known as HamburgerKino e.V. (Hamburg, Germany) in partnership with Kino00 (Montreal, Canada), Kinoonik Holland (Rotterdam, Netherlands) and KinoCaen (Caen, France).
      </p>
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
