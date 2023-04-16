<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.$https
      .get("/api/users")
      .then((response) => {
        console.log(response);
        this.users = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
