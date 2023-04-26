<template>
    <div>
       <app-adminheader></app-adminheader>

       <div class="pull-right">
        <div class="btn-group">
            <button type="button" class="btn btn-primary"   @click="register">Register</button>
            <button type="button" class="btn btn-success" @click="getAllUsers">Employees Info</button>
            <button type="button" class="btn btn-warning" @click="getAllAbsence">Absence Info</button>
        </div>
       </div>
       

      


    <app-register v-if="registerbtn"></app-register>
    <app-getallusers v-if="getAllUsersbtn"></app-getallusers>
    <app-getallabsence v-if="getAllAbsencebtn"></app-getallabsence>
    </div>
  </template>
  
  <script>
  import register from '../operations/addUser.vue';
  import GetAllusers from '../operations/getAllUsers.vue';
  import getAllAbsence from '../operations/getAllAbsence.vue';
  import adminHeader from '../headers/adminHeader.vue';
  export default {
    data(){
         return {
            registerbtn : false,
             getAllUsersbtn: false,
           getAllAbsencebtn : false
        }
    },
    components:{
      appRegister: register,
      appGetallusers: GetAllusers,
      appGetallabsence: getAllAbsence,
      appAdminheader: adminHeader
    },
    methods:{
        register(){
            this.registerbtn = !this.registerbtn;
            this.getAllUsersbtn=false;
            this.getAllAbsencebtn=false;
        },
        getAllUsers(){
            this.getAllUsersbtn = !this.getAllUsersbtn;
            this.registerbtn = false;
            this.getAllAbsencebtn=false;
        },
        getAllAbsence(){
            this.getAllAbsencebtn = !this.getAllAbsencebtn;
            this.getAllUsersbtn = false;
            this.registerbtn = false;
        }
    }
   
  }
  </script>
  
  <style>
  </style>
  