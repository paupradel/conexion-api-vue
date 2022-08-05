<template>
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
</template>

<script>
export default {
  name: 'ApiTest',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
