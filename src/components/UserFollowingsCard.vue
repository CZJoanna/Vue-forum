<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followings.length }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'user', params: { id: following.id } }"
        v-for="following in followings"
        :key="following.id"
      >
        <img
          :src="following.image"
          :alt="following.name"
          width="60"
          height="60"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFollowingsCard",
  props: {
    followings: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>