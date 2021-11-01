<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row">
      <div
        class="col-sm-6 col-md-4 col-lg-3"
        v-for="user in users"
        :key="user.id"
      >
        <a href="#">
          <img :src="user.image" width="140px" height="140px" />
        </a>
        <h4>{{ user.name }}</h4>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.followerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollow(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollow(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from "../components/NavTabs";
const dummyData = {
  users: [
    {
      id: 11,
      name: "Itadori Yuji",
      email: "Da@example.com",
      password: "$2a$10$p7b9n0Gg1WNmrhTx.pQfhOtkCcynVowSDNM6BpMORotEz/d6.nA0K",
      isAdmin: false,
      image: "https://i.imgur.com/pIHFJtM.png",
      createdAt: "2021-05-29T07:38:44.000Z",
      updatedAt: "2021-05-29T16:30:20.000Z",
      Followers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$XaxJSOdUg2/931GxMxcJpOWAB1wmUbW5WUwM1GohFh0SyfUxHNYKG",
          isAdmin: true,
          image: "https://i.imgur.com/eVfTIsY.jpg",
          createdAt: "2021-05-17T05:11:05.000Z",
          updatedAt: "2021-05-29T16:22:50.000Z",
          Followship: {
            followerId: 1,
            followingId: 11,
            createdAt: "2021-05-29T11:29:59.000Z",
            updatedAt: "2021-05-29T11:29:59.000Z",
          },
        },
        {
          id: 11,
          name: "Itadori Yuji",
          email: "Da@example.com",
          password:
            "$2a$10$p7b9n0Gg1WNmrhTx.pQfhOtkCcynVowSDNM6BpMORotEz/d6.nA0K",
          isAdmin: false,
          image: "https://i.imgur.com/pIHFJtM.png",
          createdAt: "2021-05-29T07:38:44.000Z",
          updatedAt: "2021-05-29T16:30:20.000Z",
          Followship: {
            followerId: 11,
            followingId: 11,
            createdAt: "2021-05-30T09:37:22.000Z",
            updatedAt: "2021-05-30T09:37:22.000Z",
          },
        },
      ],
      FollowerCount: 2,
      isFollowed: true,
    },
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$XaxJSOdUg2/931GxMxcJpOWAB1wmUbW5WUwM1GohFh0SyfUxHNYKG",
      isAdmin: true,
      image: "https://i.imgur.com/eVfTIsY.jpg",
      createdAt: "2021-05-17T05:11:05.000Z",
      updatedAt: "2021-05-29T16:22:50.000Z",
      Followers: [
        {
          id: 11,
          name: "Itadori Yuji",
          email: "Da@example.com",
          password:
            "$2a$10$p7b9n0Gg1WNmrhTx.pQfhOtkCcynVowSDNM6BpMORotEz/d6.nA0K",
          isAdmin: false,
          image: "https://i.imgur.com/pIHFJtM.png",
          createdAt: "2021-05-29T07:38:44.000Z",
          updatedAt: "2021-05-29T16:30:20.000Z",
          Followship: {
            followerId: 11,
            followingId: 1,
            createdAt: "2021-05-30T03:40:21.000Z",
            updatedAt: "2021-05-30T03:40:21.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: false,
    },
    {
      id: 2,
      name: "Fushiguro Megumi",
      email: "user1@example.com",
      password: "$2a$10$A0B7wDm/3dqFAxjH45sXW.2ASFMgKVGKU3DH6O5VpnGSG3Bd6Y9kq",
      isAdmin: false,
      image: "https://i.imgur.com/hSgGs9O.jpg",
      createdAt: "2021-05-17T05:11:05.000Z",
      updatedAt: "2021-05-29T16:25:56.000Z",
      Followers: [
        {
          id: 11,
          name: "Itadori Yuji",
          email: "Da@example.com",
          password:
            "$2a$10$p7b9n0Gg1WNmrhTx.pQfhOtkCcynVowSDNM6BpMORotEz/d6.nA0K",
          isAdmin: false,
          image: "https://i.imgur.com/pIHFJtM.png",
          createdAt: "2021-05-29T07:38:44.000Z",
          updatedAt: "2021-05-29T16:30:20.000Z",
          Followship: {
            followerId: 11,
            followingId: 2,
            createdAt: "2021-05-29T11:29:18.000Z",
            updatedAt: "2021-05-29T11:29:18.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: false,
    },
    {
      id: 3,
      name: "Kugisaki Nobara",
      email: "user2@example.com",
      password: "$2a$10$b7E1.cVoAcrTFooTp4tx4eFnxUxKizT8mVr26QYJGuhp4YbRnjB02",
      isAdmin: false,
      image: "https://i.imgur.com/es1gVME.jpeg",
      createdAt: "2021-05-17T05:11:05.000Z",
      updatedAt: "2021-05-29T16:29:30.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 21,
      name: "aa",
      email: "anafalcao@poli.ufrj.br",
      password: "$2a$10$CTNyFwrQg4ldpZBvEaYArOOe4XTPgR2OY6Hp7ocF1318zvZ9Ne.Py",
      isAdmin: false,
      image: null,
      createdAt: "2021-06-11T11:47:29.000Z",
      updatedAt: "2021-06-11T11:47:29.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // const { users } = dummyData;
      // this.users = [...users];
      this.users = dummyData.users.map((user) => ({
        id: user.id,
        name: user.name,
        image: user.image,
        followerCount: user.FollowerCount,
        isFollowed: user.isFollowed,
      }));
    },
    deleteFollow(e) {
      this.users.forEach((user) => {
        if (e === user.id) {
          user.isFollowed = false;
          user.FollowerCount -= 1;
        }
      });
    },
    addFollow(e) {
      this.users.forEach((user) => {
        if (e === user.id) {
          user.isFollowed = true;
          user.FollowerCount += 1;
        }
      });
    },
  },
};
</script>