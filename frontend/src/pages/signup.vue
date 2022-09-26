<template>
  <v-card title = "Signup">
    <v-card-text>
    <form ref = "form" @submit.prevent = "">
      <v-text-field label = "Name" v-model = "user.name"></v-text-field>
      <v-text-field label = "Mobile" v-model = "user.mobile"></v-text-field>
    </form>
    <router-link to = "/login" >Login</router-link>
    </v-card-text>
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
