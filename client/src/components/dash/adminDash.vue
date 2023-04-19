<template>
    <div id="app">
        <app-header></app-header>
        <button @click="Register">Register</button>
        <button @click="GetAllusers">Employees</button>
        <button @click="getAllAbsence">Absence</button>
        <div v-if="REgister"><app-register></app-register></div>
    <div v-if="GEtAllusers"><app-getallusers></app-getallusers></div>
    <div v-if="GEtAllAbsence"><app-getallabsence></app-getallabsence></div>
    </div>
  </template>
  
  <script>
  import register from '../operations/addUser.vue';
  import GetAllusers from '../operations/getAllUsers.vue';
  import getAllAbsence from '../operations/getAllAbsence.vue';
  import appHeader from '../appHeader.vue';
  export default {
    name: 'App',
    data(){
         return {
            REgister : false,
            GEtAllusers: false,
            GEtAllAbsence : false
        }
    },
    components:{
      appRegister: register,
      appGetallusers: GetAllusers,
      appGetallabsence: getAllAbsence,
      appHeader: appHeader
    },
    methods:{
        Register(){
            this.REgister = true;
            this.GEtAllusers=false;
            this.GEtAllAbsence=false;
        },
        GetAllusers(){
            this.GEtAllusers = true;
            this.REgister = false;
            this.GEtAllAbsence=false;
        },
        getAllAbsence(){
            this.GEtAllAbsence = true;
            this.GEtAllusers = false;
            this.REgister = false;
        }
    }
   
  }
  </script>
  
  <style>
  </style>
  