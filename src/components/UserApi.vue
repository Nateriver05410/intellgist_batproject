/ UserApi.vue
<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.username }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:5000/api/user')
      .then(response => {
        this.users = response.data.users;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
</script>