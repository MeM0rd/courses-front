<template>
  <div>
    <subscription-table
        :subscriptions="subscriptionsData"
        @save="submitSaveSubscriptions"
    />
  </div>
</template>

<script src="./Subscription.ts" lang="ts"/>

<style scoped>

</style>
