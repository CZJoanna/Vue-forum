<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favoritedRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'restaurant', params: { id: favRest.id } }"
        v-for="favRest in favoritedRestaurants"
        :key="favRest.id"
      >
        <img :src="favRest.image" :alt="favRest.name" width="60" height="60" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFavoritedRestaurantsCard",
  props: {
    favoritedRestaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>