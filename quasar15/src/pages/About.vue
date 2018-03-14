<template>
    <div class="layout-padding">
      <p>
        <strong>{{$t('pages.about.subtitle')}}</strong><br/>
        {{$t('pages.about.p1')}}
      </p>
      <p><strong>{{$t('pages.mining.title')}}</strong><br/>
        {{$t('pages.mining.p1')}}<br/>
        {{$t('pages.mining.small_mining')}}
      </p>
      <p>
        <strong>Code</strong><br/>
        {{$t('pages.contact_old.p1')}}
        <br/>
        <a target="_blank" href="https://github.com/KinoKabaret/Kinoit-Quasar-Skeleton">Repo</a> ||
        <a target="_blank" href="https://github.com/KinoKabaret/Kinoit-Quasar-Skeleton/issues">Issues</a> ||
        <a target="_blank" href="https://github.com/KinoKabaret/Kinoit-Quasar-Skeleton/releases">Releases</a> ||
        <a target="_blank" href="https://raw.githubusercontent.com/KinoKabaret/Kinoit-Quasar-Skeleton/master/LICENSE">License</a> ||
        <a target="_blank" href="/statics/Fiduciary-License-Agreement-(MIT-GPL).pdf">Developer Agreement</a> ||
        <a target="_blank" href="https://gitter.im/KinoKabaret/Lobby">GITTER</a>
      </p>
    </div>
</template>

<script>
  export default {
    name: 'about'
  }
</script>

<style scoped>

</style>
