<template>
  <div>
    <div>
      <subscription-menu
          @search="doSearch"
      />
    </div>
    <subscription-table
        :subscriptions="subscriptionsData"
        @save="submitSaveSubscriptions"
    />
  </div>
</template>

<script src="./Subscription.ts" lang="ts"/>

<style scoped>

</style>
