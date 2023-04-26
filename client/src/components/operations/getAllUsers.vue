<template>
    <div>
    
     
    <!-- Leave Application Block End -->
    <div class="col-12" style="box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
      <!-- Card Component -->
      <div class="card pmd-card">
          <!-- Card Header -->
          <div class="card-header pmd-card-border d-flex align-items-start">
              <div class="media-body">
                  <h2 class="card-title h3">Employee Details</h2>
                  <p class="card-subtitle">All the Details of the employee Record</p>
              </div>
             
          </div>
          <!-- Card Header End -->

          <!-- Card Body -->
          <div class="card-body">
              <div class="body">
                  <div class="table-responsive">
                      <table class="table pmd-table table-hover">
                          <thead>
                              <tr>
                                  <th>Employee</th>
                                  <th>UserID</th>
                                  <th>ManagerID</th>
                                  <th>Email</th>
                                  <th>Role</th>
                                  
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                             
                                      <tr   v-for="(user,index) in users" :key="index">
                                          <td>{{user.userName}}</td>
                                          <td>{{user.userID}}</td>
                                          <td>{{user.managerID}}</td>
                                          <td>{{user.email}}</td>
                                          <td>{{user.role}}</td>
                                         
                                      </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          <!-- Card Body End -->
      </div>
      <!-- Card Component End -->
  </div>
           
      
    </div>
</template>

<script>
    export default {
        data(){
          return{
            users: []
          }
        },

        methods:{
        getAllUsers(){
        this.$http.get('http://localhost:3000/api/myusers')
        .then(res => {
          console.log(res);
          this.users = res.body;
        }, err => {
          console.log(err);
        })

      }
        },
         beforeMount(){
          this.getAllUsers();
         }
    }
</script>

<style lang="css" scoped>

</style>