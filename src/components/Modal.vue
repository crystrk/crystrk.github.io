<template>
    <div class="modal active">
        <div class="modal-overlay"></div>
        <div class="modal-container">
            <div class="modal-header">
                <button class="btn btn-clear float-right" @click="tutup"></button>
                <div class="modal-title text-primary h5">{{ judul }}</div>
            </div>
            <div class="modal-body">
                <div class="content">
                    <blockquote>
                        <p v-html="desc"></p>
                    </blockquote>
                    <div class="divider text-center" data-content="PREVIEW"></div>
                    <progressive-img class="img-responsive" :src="image.preview1"
                                            placeholder="src/assets/loading.jpg"
                                            :blur="30"> </progressive-img>
                    <div class="divider"></div>
                    <progressive-img class="img-responsive" :src="image.preview2"
                                            placeholder="src/assets/loading.jpg"
                                            :blur="30"> </progressive-img>
                </div>
            </div>
            <div class="modal-footer">
                <a :href="link" target="_blank" class="btn tooltip" :data-tooltip="link" v-if="link !== null">
                    <i class="icon icon-link"></i>
                </a>
                <button class="btn badge">
                    {{ year }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['judul',
        'subjudul',
        'year',
        'desc',
        'link',
        'image'
        ],

    methods: {
        tutup() {
            this.$emit('tutup')
        }

    }
}
</script>
