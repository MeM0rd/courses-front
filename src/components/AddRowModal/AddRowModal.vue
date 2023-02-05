<template>
  <v-dialog max-width="900px" ье>
    <template v-slot:activator="{on}">
      <v-btn v-on="on" plain outlined color="primary">
        Добавить ряд
      </v-btn>
    </template>

    <form @submit.prevent="onSubmit">
      <v-card>
        <v-card-title class="auth-card__title">
          Новая подписка
        </v-card-title>

        <v-text-field
            v-model="name"
            label="Название"
            class="auth-card__text"
            outlined
        />

        <v-text-field
            v-model="cost"
            class="auth-card__text"
            label="Стоимость"
            outlined
        />

        <v-combobox
            v-model="currency"
            :items="items"
            label="Валюта"
            class="auth-card__text"
            chips
            hide-selected
            outlined
            height="56px"
        >
        </v-combobox>

        <v-text-field
            v-model="note"
            class="auth-card__text"
            label="Заметка"
            outlined
        />

        <div class="auth-card__btn">
          <v-btn
              color="primary"
              outlined
              type="submit"
              class="mb-2"
          >
            Добавить
          </v-btn>
        </div>
      </v-card>
    </form>
  </v-dialog>
</template>

<script src="./AddRowModal.ts" lang="ts"/>

<style src="./AddRowModal.scss" lang="scss" scoped/>
