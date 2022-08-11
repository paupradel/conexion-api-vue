<template>
  <div>
  <h1>Conectando una API de datos a un componente de visualización</h1>
    <ApiTest/>
<!--    <ConexionDatos/>-->
  </div>
</template>

<script>
import ApiTest from "@/components/ApiTest";
// import ConexionDatos from "@/components/conexion_datos/ConexionDatos";

export default {
  name: 'App',
  components: {
    ApiTest,
    // ConexionDatos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
