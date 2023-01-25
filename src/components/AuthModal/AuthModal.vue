<template>
  <v-dialog v-model="isAuthModalOpen" max-width="700px">
    <template v-slot:activator="{on}">
      <v-btn v-on="on" plain outlined color="primary">
        Войти
      </v-btn>
    </template>

    <v-card max-width="700px">
      <email-auth-form v-if="isAuth" @change-form="isAuth = !isAuth" @submit="submitLoginByEmail"/>
      <email-register-form v-else @change-form="isAuth = !isAuth" @submit="submitRegisterByEmail"/>
    </v-card>
  </v-dialog>
</template>

<script src="./AuthModal.ts" lang="ts"/>

<style src="./AuthModal.scss" lang="scss" scoped/>
