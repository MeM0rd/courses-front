<template>
  <div>
    <v-data-table
        :items="subscriptions"
        :headers="headers"
        hide-default-footer
    >
      <template v-slot:item="{ item }">
        <subscription-row
            :subscriptions="item"
            @save="$emit('save', $event)"
            @delete="$emit('delete', $event)"
        />
      </template>
    </v-data-table>
  </div>
</template>

<script src="./SubscriptionTable.ts" lang="ts"/>

<style scoped>

</style>
