<template lang="">
            <router-link :to="'/' + to" class="text-xs  md:text-base border px-8 py-2 md:px-2 rounded flex justify-center justify-items-center"
              >{{title}}</router-link
            >
</template>
<script>
export default {
props: ['to', 'title']
}
</script>
