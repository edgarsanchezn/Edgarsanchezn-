<template lang="">
            <router-link :to="'/' + to" class="text-xs  md:text-base border p-1 md:p-2 rounded flex justify-center justify-items-center"
              >{{title}}</router-link
            >
</template>
<script>
export default {
props: ['to', 'title']
}
</script>
