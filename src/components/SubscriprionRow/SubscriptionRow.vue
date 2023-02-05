<template>
  <tr>
    <td>
      {{ subscriptions.name }}
    </td>

    <td>
      {{ subscriptions.cost }}
    </td>

    <td>
      <div class="pt-6">
        <v-combobox
            v-model="subscriptions.currency"
            :items="items"
            chips
            hide-selected
            outlined
            height="56px"
        >
        </v-combobox>
      </div>
    </td>

    <td>
      <div class="pt-6">
        <v-text-field
            v-model="subscriptions.note"
            outlined

        />
      </div>
    </td>
    <td class="text-end">
      <v-btn
          @click.prevent="saveRow"
          class="subscription-row__btn"
          outlined
      >
        Сохранить
      </v-btn>
      <v-btn
          @click.prevent="deleteRow"
          class="subscription-row__btn"
          color="red"
          outlined
      >
        Удалить
      </v-btn>
    </td>
  </tr>
</template>

<script src="./SubscriptionRow.ts" lang="ts"/>

<style src="./SubscriptionRow.scss" lang="scss" scoped/>
