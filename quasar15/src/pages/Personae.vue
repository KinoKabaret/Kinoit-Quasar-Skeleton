<template>
  <div class="layout-padding">
    <p dir="auto" v-html="$t('pages.personae.p1')"></p>
    <p dir="auto" v-html="$t('pages.personae.p2')"></p>
    <h5 v-html=""></h5>
    <q-btn push class="label text-white bg-primary padded2 pull-right" @click="launch('https://goo.gl/forms/YrJXYI6gLzuAZgDd2')">Register for the Beta</q-btn>

    <q-data-table
      :data="data"
      :config="config"
      :columns="columns"
      @rowclick="tableDetail"
    >
      <template slot="col-name" slot-scope="cell">
        <strong class="bold">{{cell.data}}</strong>
      </template>
      <template slot="col-status" slot-scope="cell">
        <span v-if="cell.data === 'Active'" class="label text-white padded bg-green-9">{{cell.data}}</span>
        <span v-else-if="cell.data === 'Waiting'" class="label text-white bg-red-9 padded">{{cell.data}}</span>
        <span v-else-if="cell.data === 'Research'" class="label text-black bg-yellow-9 padded">{{cell.data}}</span>
        <span v-else class="label padded">{{cell.data}}</span>
      </template>
      <template slot="col-description" slot-scope="cell">
        <div class="light-paragraph">{{cell.data}}</div>
      </template>
    </q-data-table>
    <small>
      Last Update: February 8th, 2018
    </small>
  </div>
</template>

<script>
  import {
    openURL,
    QBtn
  } from 'quasar'

  export default {
    components: {
      QBtn
    },
    name: 'personae',
    methods: {
      launch (url) {
        openURL(url)
      },
      tableDetail: (evt) => {
        alert(evt.row.status)
      }
    },
    data () {
      return {
        columns: [
          {
            label: 'Name',
            field: 'name',
            // [REQUIRED] Column width
            width: '80px',
            filter: true,
            sort: true,
            type: 'string'
          },
          {
            label: 'Description',
            field: 'description',
            // [REQUIRED] Column width
            width: '250px',
            filter: true,
            sort: false,
            type: 'string'
          },
          {
            label: 'Beta',
            field: 'delivery',
            // [REQUIRED] Column width
            width: '70px',
            filter: true,
            sort: true,
            type: 'date'
          },
          {
            label: 'Status',
            field: 'status',
            // [REQUIRED] Column width
            width: '60px',
            filter: true,
            sort: true,
            type: 'string'
          }
        ],
        config: {
          rowHeight: '30px',
          title: '<strong>Personæ Project List</strong>',
          noHeader: false,
          refresh: false,
          columnPicker: false,
          leftStickyColumns: 2,
          pagination: {
            rowsPerPage: 5,
            options: [5, 10, 15, 30, 50, 500]
          },
          // selection: 'multiple',
          messages: {
            // TODO: Translation strings
            noData: '<i>warning</i> No data available to show.',
            noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
          },
          labels: {
            // TODO: Translation strings
            columns: 'Columns',
            allCols: 'All Columns',
            rows: 'Rows',
            selected: {
              singular: 'Item selected.',
              plural: 'Items selected.'
            },
            clear: 'Clear',
            search: 'Search',
            all: 'All'
          }
        },
        data: [
          {
            name: 'KinoAPP',
            description: 'Multi-platform native client app-skeleton for hosting Personas',
            delivery: '2018-05-01',
            status: 'Active'
          },
          {
            name: 'KinoARCHIVE',
            description: 'archive.org and DCMI-compliant research-quality archive',
            delivery: '2018-07-01',
            status: 'Research'
          },
          {
            name: 'KinoCHAT',
            description: 'Configurable encrypted serverless chats and channels',
            delivery: '2018-09-01',
            status: 'Research'
          },
          {
            name: 'KinoDESK',
            description: 'Groupware, stats and tools for Kabaret Organizers',
            delivery: '2018-05-01',
            status: 'Research'
          },
          {
            name: 'KinoMAKER',
            description: 'Realtime collaboration tools for filmmakers',
            delivery: '2018-09-01',
            status: 'Waiting'
          },
          {
            name: 'KinoMAP',
            description: 'Modern mapping with Photos, Tracks and Asset Tracking',
            delivery: '2018-06-01',
            status: 'Waiting'
          },
          {
            name: 'KinoSCREEN',
            description: 'VLC based screening service with remote control',
            delivery: '2018-05-01',
            status: 'Active'
          },
          {
            name: 'KinoSHOP',
            description: 'A place to trade goods and services',
            delivery: '2018-11-01',
            status: 'Waiting'
          },
          {
            name: 'KinoTOOLBOX',
            description: 'Extra tools like transcoding, packaging, subtitling etc.',
            delivery: '2018-12-24',
            status: 'Research'
          },
          {
            name: 'KinoVAULT',
            description: 'Global P2P filesystem for sharing and saving',
            delivery: '2018-04-01',
            status: 'Active'
          },
          {
            name: 'KinoVIEWER',
            description: 'Media browsing, playlisting, casting and binging',
            delivery: '2018-05-01',
            status: 'Research'
          },
          {
            name: 'KinoWEB',
            description: 'Microsite production interface for kabarets, kinoites and cells',
            delivery: '2018-10-01',
            status: 'Waiting'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .padded {
    padding:3px;
    border-radius: 3px;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    opacity:0.7;
  }
  .padded2 {
    padding: 10px;
  }
</style>
