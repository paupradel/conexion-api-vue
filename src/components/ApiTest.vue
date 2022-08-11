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
      info: null,
      loading: true,
      errored: false
    }
  },
  // filters: {
  //   currencydecimal (value) {
  //     return value.toFixed(2)
  //   }
  // },
  mounted () {
    axios
        .get('https://datos.cdmx.gob.mx/api/3/action/datastore_search?resource_id=2c44d5f1-f806-4bcc-91e5-408a5558d1c5')
        .then(response => {
          this.info = response.data.result.records
          console.log(this.info)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
  }
  // data() {
  //   return {
  //     datos: [],
  //   };
  // },
  //
  // methods: {
  //   async getData() {
  //     try {
  //       const response = await this.$http.get("https://datos.cdmx.gob.mx/api/3/action/datastore_search?resource_id=2c44d5f1-f806-4bcc-91e5-408a5558d1c5");
  //       this.datos = response.data.records;
  //       console.log(this.datos);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // },
  // created() {
  //   this.getData()
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
