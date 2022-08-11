# Obtención de datos de una API remota

## Introducción
El estatus de este proyecto es _en construcción_. El objetivo final es hacer una conexión de datos desde una API remota 
hacia las visualizaciones de la biblioteca de gráficas 
[dadsig-graficas](https://github.com/salsa-community/dadsig-graficas). Por el momento sólo se pudo hacer la conexión 
remota usando este 
[dataset del gobierno de la CDMX](https://datos.cdmx.gob.mx/dataset/mapa-covid/resource/2c44d5f1-f806-4bcc-91e5-408a5558d1c5?view_id=1a3f2384-81e8-424b-8303-db6be6b145cf) 
acerca de los casos de covid-19 por alcaldía y mostrarlo en pantalla (no en la gráfica) levantando en local.

El siguiente paso debe de ser ordenar la información extraída en un arreglo, para luego pasar este arreglo como 
variable a la gráfica de barras que se usa de ejemplo en este repositorio. Posteriormente se debe de adaptar este 
código con tal de que sea un script reciclable que se pueda agregar a la biblioteca de gráficas u a otro código.

## Requerimientos e instalación

- Vue
- Axios
- dadsig-graficas

Para instalar las dependencias en local hacer:
```
npm install
```

Para levantar el proyecto en local hacer:
```
npm run serve
```

## Descripción

Como se menciona arriba, el avance hasta el momento de este proyecto es la obtención de los datos de una API remota. 
Para ello en el archivo `ApiTest.vue` se agrega un script que hace la conexión a la API usando la biblioteca 
[Axios](https://v2.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html?redirect=true#Base-Example). En este script
es necesario agregar dentro de la función `mounted` la url de los datos remotos, en este caso se usa la API de datos 
abiertos de la CDMX con la siguiente url:

- https://datos.cdmx.gob.mx/api/3/action/datastore_search?resource_id=2c44d5f1-f806-4bcc-91e5-408a5558d1c5

Cabe mencionar que para usar cualquier dataset de la página de datos abiertos de la cdmx es necesario agregar a la url 
el `resource_id` como se puede observar arriba. Se sugiere consultar 
[la documentación de la API](http://docs.ckan.org/en/latest/maintaining/datastore.html) que se usa para poder
entender mejor cómo agregar y encontrar esa variable. 

También al consultar la url anterior se pueden visualizar en el navegador el archivo `.json` que contienen nuestros 
datos de interés. Esto es importante tenerlo en cuenta pues las peticiones de cada API variarán de acuerdo al contenido
de estos archivos JSON.

Por ejemplo, para esta API era de mi interés graficar en barras la cantidad de casos confirmados de covid-19 por 
alcaldía de la CDMX. Para ello localicé la variable `municipio_res` y la variable `count_confirmados` dentro del 
JSON. Es importante también observar a que nivel del arreglo JSON se encuentran las variables de nuestro interés.

En este ejemplo particular para acceder a ellas primero se debe de acceder a `result` y después a `records`. Por lo
tanto al hacer la petición usando axios, dentro de la función `mounted` es necesario obtenerla definiendo primero 
donde se guardarán los datos, e ir accediendo nivel por nivel hasta lo que es de nuestro interés, de manera que si 
`info` es el arreglo donde estoy guardando mis variables, para este ejemplo, accesar al nivel `records`queda de la
siguiente manera:

```javascript
this.info = response.data.result.records
```

Donde `response` es la respuesta (valga la redundancia) al hacer la consulta a la API usando axios. 

Posteriormente usando un `v-for` dentro del html de este componente de ejemplo de vue, se accede a cada elemento del
arreglo guardado, es decir se accede a la alcaldía, dada por la variable `municipio_res` y al número de casos 
confirmados, dados por la variable `count_confirmados`. Esto se ve como sigue en el html del componente:

```html
<div v-for="dato in info" v-bind:key="dato.id">
   <p>{{ dato.municipio_res }}</p>
   <p>{{ dato.count_confirmados}}</p>
</div>
``` 

Como ya lo mencioné antes, el siguiente paso es conectar estos resultados con la gráfica de barras que ya se encuentra
colocada en este ejemplo.

Suerte con los siguientes pasos, estoy segura que los van a poder sacar sin problema y ojalá esto les haya ayudado <3.
      
## Referencias

- https://www.section.io/engineering-education/how-to-interact-with-an-api-from-a-vuejs-application/
- https://rapidapi.com/blog/how-to-use-an-api-with-vue-js/
- https://v2.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html?redirect=true#Base-Example

## Autorxs

- Paulina Pradel
