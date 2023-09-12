<template>

  <main>
    <div class="controlers">
      <input v-model="coneParams.coneHeight" placeholder="Высота" type="number"/>
      <input v-model="coneParams.radius" placeholder="Радиус"/>
      <input v-model="coneParams.numberOfsegments" placeholder="Сегменты"/>
      <button @click="showCone">Показать</button>
    </div>

    <div ref="divCanvas" id="scene-container"></div>
  </main>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { World }  from '@/world/World';
import axios from 'axios';


onMounted(() => {
  if(!divCanvas.value) return
  world = new World(divCanvas.value);
  world.render();
})

const divCanvas=ref<Element>();
let world:World; 

const coneParams = reactive({
      coneHeight:'7',
      radius:'3',
      numberOfsegments:'20'
});

const showCone = ()=>{
  axios.post('http://localhost:8080/coneParams', { coneParams })
      .then((res) => {
        world.createCone(res.data.triangleCoords)
      });

}
</script>

<style scoped>

#scene-container{
  margin: auto;
  width: 600px;
  height: 600px;
}
.controlers{
  margin: auto;
  width: 700px;
  margin-bottom: 30px;
}
input{
	appearance: none;
	outline: none;
	border: 2px solid #7db5ff;
	background: #caebfa;
	border-radius: 8px;
	padding: .4em;
	color: #27647c;
  margin: 5px;
}

button{
	appearance: none;
	outline: none;
	border: 2px solid #7db5ff;
	background: #caebfa;
	border-radius: 8px;
	padding: .4em;
	color: #27647c;
  margin: 5px;
}
</style>
