<template>
    <div>

    <app-managerheader></app-managerheader>

    

<button type="button" class="btn btn-primary"   @click="leaveRequest">Leave Request</button>
<button type="button" class="btn btn-success" @click="employeesInfo">Employees Info</button>
<button type="button" class="btn btn-warning" @click="absenceInfo">Absence Info</button>

   <app-requestleave v-if="leave"></app-requestleave>
    <app-undermanagerabsence v-if="absence"></app-undermanagerabsence>
    <app-getundermanager v-if="employee"></app-getundermanager>
    </div>
</template>

<script>
import managerHeader from '../headers/managerHeader.vue';
import getUnderManagerAbsence from '../operations/getUnderManagerAbsence.vue';
import getUnderManager from '../operations/getUnderManager.vue';
import requestLeave from '../operations/requestLeave.vue';
    export default {
        data() {
            return {
               leave:false,
               employee:false,
               absence:false
            }
        },
        components: {
            appManagerheader: managerHeader,
           appUndermanagerabsence: getUnderManagerAbsence,
           appGetundermanager: getUnderManager,
           appRequestleave:requestLeave
        },
        methods:{
          leaveRequest() {
            this.leave = !this.leave;
            this.employee=false;
            this.absence=false;
            
          },
          employeesInfo() {
            this.employee = !this.employee;
            this.leave = false;
            this.absence = false;
          },
           absenceInfo() {
            this.absence = !this.absence;
            this.leave = false;
            this.employee = false;
           }
        }
    }
</script>

<style lang="css" scoped>

</style>