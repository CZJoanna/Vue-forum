<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          v-model.trim="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    handleSubmit() {
      // 如果 email 或 password 為空，則使用 Toast 提示
      // 然後 return 不繼續往後執行
      if (!this.email && !this.password) {
        Toast.fire({
          icon: "warning",
          title: "請填入 email 和 password",
        });
        return;
      } else if (!this.password) {
        Toast.fire({
          icon: "warning",
          title: "請填入 password",
        });
        return;
      } else if (!this.email) {
        Toast.fire({
          icon: "warning",
          title: "請填入 email",
        });
        return;
      }
      // 前端處理通過後把按鈕鎖起來
      this.isProcessing = true;
      authorizationAPI
        .signIn({
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          const { data } = res;
          // 取得 API 請求後的資料
          if (data.status !== "success") {
            throw new Error(data.message);
          }
          // 將 token 存放在 localStorage 內
          localStorage.setItem("token", data.token);
          // 成功登入後轉址到餐廳首頁
          this.$router.push("/restaurants");
        })
        .catch((error) => {
          this.isProcessing = false;
          // 將密碼欄位清空
          this.password = "";
          // 顯示錯誤提示
          Toast.fire({
            icon: "warning",
            title: "請確認您輸入了正確的帳號密碼",
          });
          console.log("error", error);
        });
    },
  },
};
</script>

<style>
</style>