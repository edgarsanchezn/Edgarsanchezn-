<template lang="">
          <div class="mx-20 flex justify-center text-center space-x-2 my-2">
            <postgresql />
            <mysql />
            <sqlserver />
          </div>
</template>
<script>
import Postgresql from "./icons/postgresql.vue";
import Mysql from "./icons/mysql.vue";
import Sqlserver from "./icons/sqlserver.vue";
export default {
    components:{
            Postgresql,
    Mysql,
    Sqlserver,
    }
}
</script>
<style lang="">
    
</style>