<template>
  <tr>
    <td>
      {{subscriptions.name}}
    </td>

    <td>
      {{subscriptions.cost}}
    </td>

    <td>
      {{subscriptions.currency}}
    </td>

    <td>
      <v-text-field
          v-model="subscriptions.note"
      />
    </td>
    <td>
      <v-btn
          @click.prevent="click"
      >
        Хай
      </v-btn>
    </td>
  </tr>
</template>

<script src="./SubscriptionRow.ts" lang="ts"/>

<style src="./SubscriptionRow.scss" lang="scss" scoped/>
