<template>
  <form>
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="commentText"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button
        @click.stop.prevent="handleSubmit"
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>
<script>
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      commentText: "",
    };
  },
  methods: {
    handleSubmit() {
      // TODO: 向 API 發送 POST 請求
      // 伺服器新增 Comment 成功後...
      //通知父元件資料變化

      this.$emit("after-create-comment", {
        commentId: uuidv4(), // 尚未串接 API 暫時使用隨機的 id
        restaurantId: this.restaurantId,
        commentText: this.commentText,
      });
      this.commentText = "";
    },
  },
};
</script>