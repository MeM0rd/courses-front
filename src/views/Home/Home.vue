<template>
  <div class="text-center">
    <div class="mt-5">
      <h1>Привет! Рад видеть, что вы считаете своё</h1>
    </div>

    <div class="mt-10">
      <h2>Этот сайт сделан для образовательных целей, но если он вам полезен, то я буду очень рад)</h2>
    </div>

    <div class="mt-10">
      <v-btn
          @click="router().push({path: '/subscription'})"
          color="primary"
          outlined
      >
        Перейти к таблице своих подписок
      </v-btn>
    </div>
  </div>
</template>

<script src="./Home.ts"/>

<style scoped>

</style>
