<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="auth-card__header">
      <span class="auth-card__title">
        Регистрация пользователя
      </span>
      </div>
      <v-text-field
          v-model="email"
          label="Email"
          class="auth-card__text"
          outlined
      />

      <v-text-field
          v-model="name"
          class="auth-card__text"
          label="Имя"
          outlined
      />

      <v-text-field
          v-model="phone"
          class="auth-card__text"
          label="Телефон"
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
            type="submit"
        >
          Зарегистрирваться
        </v-btn>
      </div>

      <div class="dialog-form__row">
        <span class="">Профиль уже существует?</span>
        <button @click="$emit('change-form')" class="dialog__text-btn">Войдите</button>
      </div>
    </form>
  </div>
</template>

<script src="./EmailRegisterForm.ts" lang="ts"/>

<style src="./EmailRegisterForm.scss" lang="scss" scoped/>
