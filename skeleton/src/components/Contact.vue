<template>
  <q-layout>
    <div class="layout-padding row">
      <div class="col-lg-8">
        <q-item dir="auto" v-html="$t('pages.about.p1')"></q-item>
        <div id="notLukas">
          <q-item dir="auto" class="notLukas" v-html="$t('pages.mailing.p1')"></q-item>
          <form action="https://kinokabaret.us17.list-manage.com/subscribe/post?u=6f64a3279d0935a7281852de8&amp;id=cab630e251" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" v-on:submit="toggleLukas()">
            <div id="mc_embed_signup_scroll">
              <q-input
                v-model="email"
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                :float-label="$t('pages.mailing.form.email')"
                >
              </q-input>
              <div class="row">
                <q-btn
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  color="grey"
                  class="col-4"
                >{{$t('pages.mailing.form.btn')}}</q-btn>
                <small class="col-8 text-center notLukas">{{$t('pages.mailing.form.small')}}</small>
              </div>

              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_6f64a3279d0935a7281852de8_cab630e251" tabindex="-1" value="">
              </div>
            </div>
          </form>
        </div>
        <div id="lukas" class="row hidden">
          <div class="col-3">
            <img src="/statics/lukas.png" />
          </div>
          <div class="col-9 with-padding">
            <q-item dir="auto" v-html="$t('pages.lukas.p1')"></q-item>
            <q-item dir="auto" v-html="$t('pages.lukas.p2')"></q-item>
          </div>
        </div>
      </div>

      <q-list class="col-lg-4" link inset-delimiter>
        <q-item @click="launch('mailto:web@kinokabaret.com')">
          <q-item-side icon="fa-at fa-fw" />
          <q-item-main label="Email" sublabel="web@kinokabaret.com" />
        </q-item>
        <q-item @click="launch('https://instagram.com/Kinoitplatform')">
          <q-item-side icon="fa-instagram fa-fw" />
          <q-item-main label="Instagram" sublabel="Kinoitplatform" />
        </q-item>
        <q-item @click="launch('https://facebook.com/KinoitAPP')">
          <q-item-side icon="fa-facebook-square fa-fw" />
          <q-item-main label="Facebook" sublabel="KinoitAPP" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="fa-twitter-square fa-fw" />
          <q-item-main label="Twitter" sublabel="@kinoit1999" />
        </q-item>
        <q-item @click="launch('https://github.com/KinoKabaret')">
          <q-item-side icon="fa-github-square fa-fw" />
          <q-item-main label="Github" sublabel="KinoKabaret" />
        </q-item>
        <q-item @click="launch('https://en.wikipedia.org/wiki/Kino_(movement)')">
          <q-item-side icon="fa-wikipedia-w fa-fw" />
          <q-item-main label="Wikipedia" sublabel="Kino_(Movement)" />
        </q-item>
        <!-- <q-item @click="launch('https://archive.org/search.php?query=kinokabaret')">
          <q-item-side avatar="/statics/Internet_Archive_logotype.png"
          />
          <q-item-main label="Archive.org" sublabel="kinokabaret" />
        </q-item>-->
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
    QInput,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    Cookies
  } from 'quasar'

  export default {
    data () {
      return {}
    },
    props: ['email'],
    name: 'contact',
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QInput,
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemMain
    },
    mounted: function () {
      this.$nextTick(function () {
        if (Cookies.get('mailingList') === 'subscribed') {
          document.querySelector('#lukas').classList.remove('hidden')
          document.querySelector('#notLukas').classList.add('hidden')
        }
      })
    },
    methods: {
      launch (url) {
        openURL(url)
      },
      toggleLukas () {
        document.querySelector('#lukas').classList.remove('hidden')
        document.querySelector('#notLukas').classList.add('hidden')
        Cookies.set('mailingList', 'subscribed', {
          // domain: 'kinokabaret.com',
          // secure: true,
          expires: 1,
          path: '/'
        })
      }
    }
  }
</script>

<style scoped>

</style>
