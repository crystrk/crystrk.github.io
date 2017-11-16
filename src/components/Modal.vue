<template>
    <div class="modal active">
        <div class="modal-overlay"></div>
        <div class="modal-container">
            <div class="modal-header">
                <button class="btn btn-clear float-right" @click="tutup"></button>
                <div class="modal-title h5">Modal title : {{ judul }}</div>
            </div>
            <div class="modal-body">
                <div class="content">
                    <!-- content here -->
                </div>
            </div>
            <div class="modal-footer">
                ...
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['judul'],

    methods: {
        tutup() {
            this.$emit('tutup')
        }

    }
}
</script>