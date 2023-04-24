<template>
    <div>
    <app-managerheader></app-managerheader>
    <app-undermanagerabsence></app-undermanagerabsence>
    </div>
</template>

<script>
import managerHeader from '../headers/managerHeader.vue';
import getUnderManagerAbsence from '../operations/getUnderManagerAbsence.vue';
    export default {
        components: {
            appManagerheader: managerHeader,
           appUndermanagerabsence: getUnderManagerAbsence
        }
    }
</script>

<style lang="css" scoped>

</style>