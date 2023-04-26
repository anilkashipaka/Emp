<template>
    <div>
        
      <div class="col-12" style="box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
        <!-- Card Component -->
        <div class="card pmd-card">
            <!-- Card Header -->
            <div class="card-header pmd-card-border d-flex align-items-start">
                <div class="media-body">
                    <h2 class="card-title h3">Absence Requests </h2>
                    <p class="card-subtitle">All the Details of the Absence Record</p>
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
                                    
                                    <th>Role</th>
                                    <th>Status</th>
                                  
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                        <tr   v-for="(user,index) in absenceUsers" :key="index">
                                            <td>{{user.userName}}</td>
                                            <td>{{user.userID}}</td>
                                            <td>{{user.managerID}}</td>
                                            <td>{{user.role}}</td>
                                            <td>{{user.status}}</td>
                                           
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
          data() {
            return {
                absenceUsers: [],
            }
          },
          methods: {
             getAllAbsences(){
                this.$http.get('http://localhost:3000/api/absences')
                .then(res => {
                    console.log(res);
                    this.absenceUsers = res.body;
                }
                ,err => {
               console.log(err);
            })
          }
    },
     beforeMount() {
        this.getAllAbsences();
     }
}
</script>

<style lang="css" scoped>

</style>