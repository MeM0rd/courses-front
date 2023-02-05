<template>
  <div class="mt-5">
    <div class="d-flex justify-center flex-center">
      <input
          @keyup.enter="searchSubscription"
          v-model="search"
          placeholder="Поиск"
          class="text-center"
          width="100px"
      >
      <v-btn
          @click.prevent="searchSubscription"
          plain
          outlined
          color="primary"
      >
        Найти
      </v-btn>
    </div>
    <div>
      <add-row-modal
          @create="$emit('create', $event)"
      />
    </div>
  </div>
</template>

<script src="./SubscriptionMenu.ts" lang="ts"/>

<style src="./SubscriptionMenu.scss" lang="scss" scoped/>
