<template>
    <div class="container" id="app">
        <router-view/>
        <footers></footers>
    </div>
</template>

<script>
import Footers from '@/components/pages/Footer'

export default {
    components: {
        Footers
    },
    name: 'app'
}
</script>

