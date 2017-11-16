<template>
    <div class="column col-4 col-md-6 col-sm-12">
        <div class="card">
            <div class="card-image">
                <img class="img-responsive" :src="image" alt="macOS Sierra">
            </div>
            <div class="card-header">
                <button class="btn btn-primary float-right" @click="showModal"><i class="icon icon-search"></i></button>
                <div class="card-title h5">{{ judul }}</div>
                <div class="card-subtitle text-gray">{{ subjudul }}</div>
            </div>
        </div>
        <modal v-show="isActive" :judul="judul" v-on:tutup="closeModal()"></modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
    components: {
        Modal
    },

    props: ['judul',
            'subjudul',
            'year',
            'desc',
            'image'
            ],

    data() {
        return {
            isActive : false
        }
    },

    methods: {
        showModal() {
            this.isActive = true
        },

        closeModal() {
            this.isActive = false
        }
    }
}
</script>

<style scoped>
</style>