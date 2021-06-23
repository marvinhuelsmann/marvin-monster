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
</style>
