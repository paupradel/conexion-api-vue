<template>
  <div>
    <DadsigBarras
        :barras_id="'mi_proyecto_de_barras'"
        :datos="[{nombre_rectangulos:'Nombre de variable 1', cantidad_1:120, cantidad_2:40, cantidad_3:40 },
      {nombre_rectangulos:'Nombre de variable 2', cantidad_1:100, cantidad_2:30, cantidad_3:40 },
      {nombre_rectangulos:'Nombre de variable 3', cantidad_1:20, cantidad_2:130, cantidad_3:540 },
      {nombre_rectangulos:'Nombre de variable 4', cantidad_1:20, cantidad_2:130, cantidad_3:540 },]"
        :variables='[{"id":"cantidad_1","nombre_colores":"cantidad 1","color":"yellow"},
      {"id":"cantidad_2","nombre_colores":"cantidad 2","color":"magenta"},
      {"id":"cantidad_3","nombre_colores":"cantidad 3","color":"blue"}]'
        :nombre_barra="'nombre_rectangulos'"
        :nombre_color="'nombre_colores'"
    />
    <div>
      <div v-for="dato in info" v-bind:key="dato.id">
        <p>{{ dato.municipio_res }}</p>
        <p>{{ dato.count_confirmados}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ApiTest',
  data () {
    return {
      info: [],
      // info: null,
      loading: true,
      errored: false,
      mostrar: []
    }
  },
  mounted () {
    axios
        .get('https://datos.cdmx.gob.mx/api/3/action/datastore_search?resource_id=2c44d5f1-f806-4bcc-91e5-408a5558d1c5')
        .then(response => {
          this.info = response.data.result.records
          // console.log(this.info)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
  },
  methods: {
    showInScreen () {
      this.mostrar = this.info
      return console.log(this.mostrar)
    },
    // Función para ordenar datos de un arreglo
    ordenarArreglo () {
      this.nuevo = this.info
      this.info.sort()
      return info
      initializeChoices: function () {
        let list = []
        // lets load up our select with many choices
        // so it will use a lot of memory
        for (let i = 0; i < 1000; i++) {
          list.push({
            label: "Item " + i,
            value: i
          })
        }
        new Choices("#choices-single-default", {
          searchEnabled: true,
          removeItemButton: true,
          choices: list
        })
      },
      show: function () {
        this.showChoices = true
        this.$nextTick(() => {
          this.initializeChoices()
        })
      },
      hide: function () {
        this.showChoices = false
      }
    }
    }
  },
}
</script>

<style scoped>
</style>
