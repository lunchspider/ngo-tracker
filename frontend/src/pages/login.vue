<template>
  <v-card>
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <form ref="form" @submit.prevent="handleLogin()">
        <v-text-field
          v-model="user.mobile"
          label="Mobile Number"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          label="Password"
          type = "password"
          required
        ></v-text-field>
        <v-btn type="submit">Login</v-btn>
      </form>
    </v-card-text>
    <router-link to = "/signup" >Sign up</router-link>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface LoginData {
  mobile: String;
  password: String;
}
let user = ref({ mobile: "", password: "" } as LoginData);
const handleLogin = () => {
  console.log(user.value);
};
</script>
