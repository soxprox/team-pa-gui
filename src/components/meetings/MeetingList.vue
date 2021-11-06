<template>
  <div>
    <q-card-section>
      <q-table
        class="sticky-cols"
        title="Meetings"
        :rows="data"
        :columns="columns"
        row-key="name"
        dense
        virtual-scroll
        style="height: 250px"
        :rows-per-page-options="[0]"
        :filter="filter"
      >
      <template v-slot:top>
        <div class="flex w-full justify-between">
          <div class="col-1/2">Meetings</div>
          <div class="col-1/2 mr-4">
            <q-input label="Search" dense debounce="300" color="primary" v-model="filter">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
      </template>

      </q-table>
    </q-card-section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filter: "",
      data: [
        {
          name: 'Meeting 1',
        },
        {
          name: 'Meeting 2',
        },
        {
          name: 'Meeting 3',
        },
        {
          name: 'Meeting 4',
        },
        {
          name: 'Meeting 5',
        },
        {
          name: 'Meeting 6',
        },
        {
          name: 'Meeting 7',
        },
        {
          name: 'Meeting 8',
        },
        {
          name: 'Meeting 9',
        },
        {
          name: 'Meeting 10',
        },
        {
          name: 'Meeting 11',
        },
        {
          name: 'Meeting 12',
        },
        {
          name: 'Meeting 13',
        },
        {
          name: 'Meeting 14',
        },
        {
          name: 'Meeting 15',
        },
        {
          name: 'Meeting 16',
        },
        {
          name: 'Meeting 17',
        },
        {
          name: 'Meeting 18',
        },
        {
          name: 'Meeting 19',
        },
        {
          name: 'Meeting 20',
        },
        {
          name: 'Meeting 21',
        },
        {
          name: 'Meeting 22',
        },
        {
          name: 'Meeting 23',
        },
        {
          name: 'Meeting 24',
        },
        {
          name: 'Meeting 25',
        },
        {
          name: 'Meeting 26',
        },
        {
          name: 'Meeting 27',
        },
        {
          name: 'Meeting 28',
        },
        {
          name: 'Meeting 29',
        },
        {
          name: 'Meeting 30',
        },
        {
          name: 'Meeting 31',
        },
        {
          name: 'Meeting 32',
        },
        {
          name: 'Meeting 33',
        },
        {
          name: 'Meeting 34',
        },
        {
          name: 'Meeting 35',
        }
        ],
        columns: [
        {
          field: 'name',
          label: 'Name',
          align: 'left',
          sortable: true
        }],
    }
  }
}
</script>

<style lang="sass">
.sticky-cols
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0
</style>
