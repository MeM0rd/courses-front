<template>
  <div>
    <div class="auth-card__header">
      <span class="auth-card__title">
        Вход по Email
      </span>
    </div>
    <v-text-field
        v-model="email"
        label="Email"
        class="auth-card__text"
        outlined
    />

    <v-text-field
        v-model="password"
        type="password"
        class="auth-card__text"
        label="Пароль"
        outlined
    />

    <div class="auth-card__btn">
      <v-btn
          color="primary"
          outlined
          @click="onSubmit"
      >
        Войти
      </v-btn>
    </div>

    <div class="dialog-form__row">
      <span class="text-md text-semibold">Новый пользователь?</span>
      <button @click="$emit('change-form')" class="dialog__text-btn">Зарегистрируйтесь</button>
    </div>
  </div>
</template>

<script src="./EmailAuthForm.ts" lang="ts"/>

<style src="./EmailAuthForm.scss" lang="scss" scoped/>
