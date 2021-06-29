<template>
  <div class="justify-center text-white">
    <div v-if="isEnterName" class="pl-3 pt-3">
    <p class="font-weight-normal">
      marvinhuelsmann@MacBook-Pro-from-{{name}} ~ % {{input}}
      <br v-if="output"/>
      {{output}}
    </p>
    <Draggable class="col-11">
      <template slot="header">
        <b-img id="head" class="mt-2" style="cursor: move"
               src="https://i.imgur.com/rCajl1o.pngg"/>
      </template>
    </Draggable>
    </div>
    <div v-else>
      <p class="font-weight-normal">
        Please enter your username ~ % {{name}}
      </p>
    </div>
    <div class="position-absolute icon">
      <a class="icon" target="_blank" href="https://github.com/marvinhuelsmann/marvin-monster">
      <fai :icon="['fab', 'github']" size="2x"/>
      </a>
    </div>
  </div>
</template>

<script>
import ConsoleService from '../console/index.js';
export default ConsoleService;
</script>

<style>
body {
  background-color: #353545;
}
.icon {
  color: white;
  cursor: pointer;
  bottom: 10px;
  right: 10px;
}
.icon:hover {
  transition: 0.3s;
  color: #8f5ddb;
}
</style>
