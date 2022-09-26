<template>
  <v-card title = "Signup">
    <form ref = "form" @submit.prevent = "">
      <v-text-input label = "Name" v-model = "user.name"></v-text-input>
      <v-text-input label = "Mobile" v-model = "user.mobile"></v-text-input>
    </form>
    <router-link to = "/login" >Login</router-link>
  </v-card>
</template>
<script setup lang = "ts">
import {ref} from 'vue';

interface UserData{
  name : string;
  fatherName? : string;
  motherName? : string;
  address : string;
  mobile : string;
  password : string;
}

let user = ref({ name : '', address : '', mobile : ''} as UserData);
</script>
