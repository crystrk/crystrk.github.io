<template>
    <div class="columns">
        <card v-for="project in projects"
            :key="project.id"
            :judul="project.judul"
        >
            <!-- content -->
        </card>
    </div>
</template>

<script>
import Card from '@/components/Card'

export default {
    components: {
        Card
    },
    name: 'projects',

    data() {
        return {
            projects: [
                {
                    judul: 'Project 1'
                },
                {
                    judul: 'Project 2'
                },
                {
                    judul: 'Project 3'
                },
                {
                    judul: 'Project 4'
                },
                {
                    judul: 'Project 5'
                },
            ]
        }
    }
}
</script>