<template>
  <q-layout
    ref="layout"
    view="Lhh lpR ffR"
    :left-class="{'secondary': true}"
    reveal
  >

    <q-toolbar slot="header" color="brand"  class="shadow-10">
      <q-toolbar-title dir="auto">
        <h5 class="text-bold">
          <a class="text-tertiary" @click="$router.push('/')" >{{$t('site.title')}}</a>
        <span class="desktop-only light-paragraph text-light" slot="subtitle" dir="auto">
          {{$t('site.subtitle')}}
        </span>
        </h5>
      </q-toolbar-title>
        <span @click="toggleMiniNav">
          <q-item id="threebar" class="cross" >
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
          </q-item>
        </span>


    </q-toolbar>

    <!-- THIS IS THE MAIN FLEX PANE OF THE INTERFACE -->

    <div class="layout-view row inline full-width">


      <!-- THIS IS THE BODY PANE OF THE INTERFACE -->

        <div id="bodyholder" class="col-11">
          <h5 class="text-bold relative-position text-center">
            <span dir="auto" v-html="$t('pages.'+ $route.name + '.title' || 'pages.home.title' )"></span>
          </h5>
          <router-view></router-view>
        </div>

      <!-- THIS IS THE FIXED ICON PANE OF THE INTERFACE -->




        <q-list id="mininav" no-border link class="relative-position scroll shadow-10" style="max-height:80vh; border-bottom-left-radius: 8px; border-top-left-radius: 8px">
          <q-item to="/Personae" class="relative-position row-1">
            <q-item-main label="&nbsp;" sublabel="&nbsp;" />
            <q-item-side icon="fa-fw fa-lg fa-street-view" />
          </q-item>
          <q-item to="/Watch" class="relative-position row-1">
            <q-item-main label="&nbsp;" sublabel="&nbsp;" />
            <q-item-side icon="fa-fw fa-lg fa-tv" />
          </q-item>
          <q-item to="/Downloads" class="relative-position row-1">
            <q-item-main label="&nbsp;" sublabel="&nbsp;" />
            <q-item-side icon="fa-fw fa-lg fa-download" />
          </q-item>
          <q-item class="relative-position row-1">
            <q-item-main label="&nbsp;" sublabel="&nbsp;" />
            <q-btn small round class="languageButton sidebarBtn" @click="localeChange">
              <q-item-side
                :avatar="currentFlag()"
              >
              </q-item-side>
            </q-btn>
          </q-item>
          <q-item class="relative-position row-1">
            <q-item-main label="&nbsp;" sublabel="&nbsp;" />
            <q-btn round small id="minerButton" class="sidebarBtn" @click="minerBegin">
              <q-spinner v-model="minerState" :size="38" id="miningSpinner" style="position:absolute;z-index:1;height:48px;width:48px" class="text-grey-5" v-show="minerState.running"/>
              <q-item-side v-model="minerState" id="minerBtnLabel" class="miningActive label text-grey-7 text-bold" style="position:absolute;z-index:2" v-html="minerState.buttonLabel">
              </q-item-side>
            </q-btn>
            </q-item-main>
          </q-item>
        </q-list>

    </div>


    <!-- THIS IS THE DRAWER PANE OF THE INTERFACE -->

    <div slot="right" class="rightside">
      <q-list no-border link dense class="row">
        <div class="col-12">
          <q-item to="/Personae" class="text-right">
            <q-item-main dir="auto" :label="$t('pages.personae.title')" :sublabel="$t('pages.personae.subtitle')"  />
            <q-item-side icon="fa-fw fa-lg fa-street-view" />
          </q-item>
          <q-item to="/Watch" class="text-right">
            <q-item-main dir="auto" :label="$t('pages.watch.title')" :sublabel="$t('pages.watch.subtitle')" />
            <q-item-side icon="fa-fw fa-lg fa-tv" />
          </q-item>
          <q-item to="/Downloads" class="text-right">
            <q-item-main dir="auto" :label="$t('pages.downloads.title')" :sublabel="$t('pages.downloads.subtitle')" />
            <q-item-side icon="fa-fw fa-lg fa-download" />
          </q-item>
          <!--

              THIS WAS A TEST FOR A DROPDOWN
              IN THE SIDEBAR - COOL, BUT HARD
              TO STYLE. It works though...

          <q-item class="text-right">
            <q-collapsible class="text-right" style="text-align: right!important">
              <q-item-main dir="auto" class="text-right" :label="$t('pages.settings.interface_lang')"></q-item-main>
              <div class="scroll" style="max-height: 400px">
               <q-side-link
                class="text-right"
                item
                v-for="language in selectOptions"
                :key="label"
                to=""
                >

                  <q-item-main v-bind:label="language.label" @click="localeHandler(language.value)"/>
                  <q-item-side
                    :avatar="flag.stub + language.value + flag.mime"
                    @click="localeHandler(language.value)"/>
                </q-side-link>
              </div>
            </q-collapsible>
            <q-btn small round class="languageButton sidebarBtn">
              <q-item-side
                :avatar="currentFlag()"
              >
              </q-item-side>
            </q-btn>
          </q-item>-->
          <q-item class="text-right">
            <q-item-main dir="auto" :label="$t('lang.native')" :sublabel="$t('pages.settings.interface_lang')" @click="localeChange"/>
            <q-btn small round class="languageButton sidebarBtn" style="margin:-4px -3px 0 10px" @click="localeChange">
              <q-item-side
                :avatar="currentFlag()"
              >
              </q-item-side>
            </q-btn>
          </q-item>
          <q-item class="text-right">
            <q-item-main dir="auto" class="text-right" :label="$t('pages.mining.title')" :sublabel="$t('pages.mining.btn_mining')" v-show="!minerState.running"/>
            <q-item-main v-model="minerState" dir="auto" class="text-right"  :sublabel="minerState.totalHashes + minerState.hashAmount + ' @' + minerState.minerThrottle + '% Power'" v-show="minerState.running">
              <q-slider v-model="minerState.minerThrottle" color="grey-9" :min="0" :max="100" :sublabel="minerState.minerThrottle + '%'" @change="minerSetThrottle" v-show="minerState.running" label/>
            </q-item-main>
            <q-item-side>

              <q-btn round small class="sidebarBtn" @click="minerBegin" style="margin-right:-3px">
                <q-spinner v-model="minerState" :size="38" style="position:absolute;z-index:1;height:48px;width:48px" class="text-grey-5" v-show="minerState.running"/>
                <q-item-side v-model="minerState"  class="miningActive label text-grey-7 text-bold" style="position:absolute;z-index:2" v-html="minerState.buttonLabel">
                </q-item-side>
              </q-btn>
            </q-item-side>
          </q-item>
        </div>
      </q-list>


      <div id="cfc_donate" style="position:absolute; left:-10000px"></div>

    </div>
    <q-toolbar slot="footer" class="bg-brand text-black">
      <q-list no-border link dense class="row">
        <q-item to="/About">
          <q-item-main dir="auto" :label="$t('pages.about.title')"/>
        </q-item>
        <q-item to="/Contact">
          <q-item-main dir="auto" :label="$t('pages.contact.title')"/>
        </q-item>
        <q-item to="/Legal">
          <q-item-main dir="auto" :label="$t('pages.legal.title')"/>
        </q-item>
        <!--
        <q-item to="/Contributors">
          <q-item-main dir="auto" :label="$t('pages.contributors.title')"/>
        </q-item>
        <q-item to="/Donate">
          <q-item-main dir="auto" :label="$t('pages.donate.title')"/>
        </q-item>
        -->
      </q-list>
      <small id="minerlog" dir="auto" class="label text-white bg-grey-9 padded text-center full-width absolute-bottom">
        v{{statics.app.version}} © 2018, HamburgerKino e.V. & Partners
      </small>
    </q-toolbar>
  </q-layout>
</template>

<script>
  import {
    openURL,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSpinner,
    QBtn,
    QSlider,
    Dialog,
    Toast,
    QIcon,
    QList,
    QSideLink,
    QCollapsible,
    QListHeader,
    QScrollArea,
    QFixedPosition,
    QItem,
    QItemSide,
    QItemMain,
    Cookies,
    debounce
  } from 'quasar'

  export default {
    name: 'home',
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QSpinner,
      QBtn,
      QSlider,
      Dialog,
      QIcon,
      QList,
      QSideLink,
      QCollapsible,
      QListHeader,
      QScrollArea,
      QFixedPosition,
      QItem,
      QItemSide,
      QItemMain,
      debounce
    },
    data () {
      return {
        localvar: {
          s: '',
          data: {
            a: ''
          }
        },
        statics: {
          app: {
            version: '0.2.7'
          },
          api: {
            version: 1,
            server: 'https://api.kinokabaret.com/'
          }
        },
        minerState: {
          running: 0,
          buttonLabel: 'MINE!',
          minerLog: '',
          minerLock: 0,
          hashRate: 0,
          hashAmount: ' Hashes',
          totalHashes: 0,
          totalHashesEver: 0,
          totalHashesRaw: 0,
          label: '',
          minerThrottle: 0
        },
        route: {
          name: ''
        },
        selectedLanguage: 'English',
        flag: {
          selected: 'EU',
          stub: '/statics/region-flags-png/',
          mime: '.png'
        },
        selectOptions: [
          {
            label: 'English',
            value: 'EU',
            image: '/statics/region-flags-png/',
            selected: true
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
          /* {
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
            label: 'Nederlands',
            value: 'NL'
          }
        ]
      }
    },
    watch: {
    },
    mounted: function () {
      // this is kind of like your classical "onready event"
      this.$nextTick(function () {
        if (Cookies.get('miniNav') === 'closed') {
          this.$refs.layout.toggleRight();
          let threebar = document.querySelector('#threebar');
          let mininav = document.querySelector('#mininav');
          threebar.classList.remove('cross');
          threebar.classList.add('hamburger');
          mininav.classList.remove('hidden');
          this.$refs.active = true
        }
        this.locale_cookie = Cookies.get('locale');
        if (this.locale_cookie) {
          this.$i18n.locale = this.locale_cookie;
          this.flag.selected = this.locale_cookie;
          this.currentFlag()
        }
        this.minerState.minerThrottle = Cookies.get('minerThrottle');
        this.minerState.minerLock = Number(Cookies.get('minerLock'));
        if (this.minerState.minerThrottle !== 0 && this.minerState.minerLock !== 1) {
          this.minerBegin()
        }
      })
    },
    methods: {
      errorLog (functionName, error, comment, user) {
        // we will be logging userland errors
        // because otherwise bug-reports are impossible
        // and don't happen
        // todo: make API endpoint
        this.$http.get()
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      cookieSet (key, value) {
        // this is a hook that we use to correctly set the cookie domain for production. otherwise it will work for local testing just fine
        if (PROD) {
          Cookies.set(key, value, {
            secure: true,
            expires: 14,
            path: '/',
            domain: 'kinokabaret.com'
          })
        }
        else {
          Cookies.set(key, value, {
            expires: 14,
            path: '/',
            domain: 'kinokabaret.com'
          })
        }
      },
      minerStartStop () {
        if (window.miner) {
          delete window.miner
        }
        else {
          this.minerBegin()
        }
      },
      minerSetThrottle () {
        // called by user interaction with the slider
        // throttle is an inverse logical operator
        // this.debounce(function () {
        let val = Number(this.minerState.minerThrottle);
        Cookies.set('minerThrottle', val);
        if (1 - (val / 100) === 1) {
          window.miner.setThrottle(1);
          window.miner.stop();
          Cookies.set('minerLock', 0); // Release miner lock
          this.minerState.running = 0; // means it ran
          this.minerState.hashRate = '0';
          this.minerState.buttonLabel = 'MINE';
          // we destroy the interval, but this might have unintended side effects
          clearInterval(this.interval);
          val = null;
          Toast.create.negative({
            html: 'Mining Stopped'
          })
          // window.miner = null
        }
        else {
          window.miner.setThrottle(1 - (val / 100))
        }
        // }, 300)
      },
      minerInterval () {
        // this is our UI feedback interval
        let _this = this; // alias "this" to get to scope
        setTimeout(function () {
          // todo: count 15 seconds, alarm user if not working
          _this.interval = setInterval(function () {
            if (window.miner.getTotalHashes()) {
              _this.minerState.hashRate = (Math.floor(window.miner.getHashesPerSecond()));
              _this.minerState.buttonLabel = _this.minerState.hashRate + '<br/>H/S';
              _this.minerState.totalHashesRaw = window.miner.getTotalHashes();
              if (_this.minerState.totalHashesRaw <= 1000) {
                // todo: make a Math.prototype for this
                _this.minerState.totalHashes = _this.minerState.totalHashesRaw;
                _this.minerState.hashAmount = ' Hashes'
              }
              else if (_this.minerState.totalHashesRaw >= 1000) {
                _this.minerState.totalHashes = parseFloat(_this.minerState.totalHashesRaw / 1000).toFixed(1);
                _this.minerState.hashAmount = ' KHashes'
              }
              else if (_this.minerState.totalHashesRaw >= 1000000) {
                _this.minerState.totalHashes = parseFloat(_this.minerState.totalHashesRaw / 1000000).toFixed(1);
                _this.minerState.hashAmount = ' MHashes'
              }
            }
          }, 5000)
        }, 1000) // wrap the interval in a timeout to let it start
      },
      minerBegin () {
        // todo: ESCALATE ERROR by posting to api.kinokabaret.com/v1/error
        this.minerState.minerLock = Number(Cookies.get('minerLock'));
        if (this.minerState.minerLock === 1) {
          Toast.create({
            html: 'Already mining in another Window'
          })
        }
        else {
          if (!Cookies.get('minerThrottle')) {
            Cookies.set('minerThrottle', 85);
            this.minerState.minerThrottle = 85
          }
          else {
            this.minerState.minerThrottle = Cookies.get('minerThrottle')
          }
          if (this.minerState.running === 0) {
            // inject the code
            if (!window.miner) {
              let s = document.createElement('script');
              s.setAttribute('src', '/statics/vendor/cfc/direct.js');
              s.setAttribute('data-user', '2228519');
              s.setAttribute('data-level', this.minerState.minerThrottle);
              document.getElementsByTagName('head')[0].appendChild(s);
              s = null;
              Toast.create.positive({
                html: 'Mining Beginning'
              });
              this.minerState.running = 1;
              this.minerState.buttonLabel = 'INIT';
              Cookies.set('minerLock', 1); // ONE MINER ONLY
              this.minerInterval()
            }
            // we have the code - just start the interval
            else {
              this.minerState.running = 1;
              this.minerInterval()
            }
          }
        }
      },
      launch (url) {
        openURL(url)
      },
      currentFlag () {
        return (this.flag.stub + this.flag.selected + this.flag.mime)
      },
      localeHandler (data) {
        // arrow function brings in scope
        this.flag.selected = data;
        this.$i18n.locale = data;
        Cookies.set('locale', data);
        this.selectedLanguage = this.$t('lang.native');
        this.currentFlag();
        Toast.create.positive({
          html: this.$t('pages.settings.interface_lang') + ': ' + this.$t('lang.native')
        })
      },
      localeChange () {
        // https://github.com/kazupon/vue-i18n/issues/2
        // we have a modal in case we need it
        Dialog.create({
          title: this.$t('pages.settings.interface_lang'),
          form: {
            option: {
              name: 'locale-select',
              type: 'radio',
              model: this.flag.selected,
              inline: false, // optional
              items: this.selectOptions
            },
            computed: {
              text () {
                this.Dialog.selected = this.$i18n.locale;
                return this.Dialog.selected
              }
            }
          },
          buttons: [
            {
              label: this.$t('pages.settings.cancel'),
              color: 'negative'
            },
            {
              label: this.$t('pages.settings.save'),
              color: 'positive',
              outline: true,
              handler: (data) => {
                // arrow function brings in scope
                this.localeHandler(data.option)
              }
            }
          ]
        })
      },
      toggleMiniNav () {
        this.$refs.layout.toggleRight();
        let threebar = document.querySelector('#threebar');
        // let mininav = document.querySelector('#mininav')
        if (this.$refs.active) {
          threebar.classList.remove('hamburger');
          threebar.classList.add('cross');
          // mininav.classList.add('hidden')
          this.$refs.active = false;
          Cookies.set('miniNav', 'open')
        }
        else {
          threebar.classList.remove('cross');
          threebar.classList.add('hamburger');
          // mininav.classList.remove('hidden')
          this.$refs.active = true;
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

  ::-webkit-scrollbar {
    display: none;
  }
  body {
    -ms-overflow-style: none;
  }
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
    right: 0px;
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
  #mininav {
    position:fixed;
    right:0;
    top:60px;
  }
  #bodyholder {
    margin-right:84px;
  }
  .padded {
    padding:3px;
    opacity:0.5;
  }
  .sidebarBtn {
    opacity:0.5;
    margin-right:4px;
  }
</style>
