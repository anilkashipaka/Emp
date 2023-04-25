<template>
    <div>
        <div class="col-12">
            <!-- Card Component -->
            <div class="card pmd-card">
                <!-- Card Header -->
                <div class="card-header pmd-card-border d-flex align-items-start">
                    <div class="media-body">
                        <h2 class="card-title h3">Leave Applications</h2>
                        <p class="card-subtitle">Application of Leaves by Employees</p>
                    </div>
                    <a class="btn pmd-ripple-effect btn-outline-primary ml-auto btn-sm" href="leave.html">View All</a>
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
                                        <th>Leave Type</th>
                                       
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Reason</th>
                                        <th>No of Leave</th>
                                        
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                            <tr v-for="(employee,index) in employees[undefined]" :key="index">
                                                <td>{{employee.userName}}</td>
                                                <td>{{employee.leaveType}}</td>
                                               
                                                <td>{{employee.startDate}}</td>
                                                <td>{{employee.endDate}}</td>
                                                <td>{{employee.reason}}</td>
                                                <td>{{employee.leaves}}</td>
                                                
                                                <td>{{employee.status}}</td>
                                                <td>
                                                    <a href="javascript:void(0);" class="pmd-btn-fab btn-xs btn-outline-secondary pmd-ripple-effect btn mr-2">
                                                        <i class="material-icons" @click="accept">Accept</i>
                                                    </a>
                                                    <a href="javascript:void(0);" title="Reject" class="pmd-btn-fab btn-xs btn-outline-danger pmd-ripple-effect btn" data-toggle="modal" data-target="#reject-modal">
                                                        <i class="material-icons" @click="reject">Reject</i>
                                                    </a>
                                                </td>
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
        <!-- Leave Application Block End -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                 employees: [],
                 managerID:localStorage.getItem('managerID')
            }
        },
        methods:{
        getUserAbsenceUnderManager(){
            this.$http.get(`http://localhost:3000/api/absences/getUserAbsenceUnderManager?undefined=${this.managerID}`)
                 .then(res => {
                      console.log(res);
                      this.employees = res.data
                      
                 })
                 .catch(err => {
                    console.log(err);
                 })
                }
    },
    beforeMount(){
        this.getUserAbsenceUnderManager();
    }
}
</script>

<style lang="css" scoped>

</style>