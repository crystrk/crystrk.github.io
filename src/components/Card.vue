<template>
    <div class="column col-4">
        <div class="card">
            <div class="card-image">
                <img class="img-responsive" src="https://picturepan2.github.io/spectre/img/macos-sierra-2.jpg" alt="macOS Sierra">
            </div>
            <div class="card-header">
                <button class="btn btn-primary float-right" @click="showModal"><i class="icon icon-search"></i></button>
                <div class="card-title h5">{{ judul }}</div>
                <div class="card-subtitle text-gray">Software and hardware</div>
            </div>
            <div class="card-body">
                An immersive, three-day experience focused on exploring the next generation of technology, mobile and beyond.
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

    props: ['judul'],

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