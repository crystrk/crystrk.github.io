<template>
    <div class="container" id="app">
        <router-view/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footers from '@/components/Footer'
export default {
    components: {
        Navbar,
        Footers
    },
    name: 'app'
}
</script>

