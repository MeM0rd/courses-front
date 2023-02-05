<template>
  <div>
    <div>
      <subscription-menu
          @search="doSearch"
          @create="doSaveOrCreate"
      />
    </div>
    <subscription-table
        :subscriptions="subscriptionsData"
        @save="doSaveOrCreate"
        @delete="doDelete"
    />
  </div>
</template>

<script src="./Subscription.ts" lang="ts"/>

<style scoped>

</style>
