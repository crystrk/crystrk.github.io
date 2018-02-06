<template>
    <div class="columns">
        <card v-for="project in projects"
            :key="project.id"
            :year="project.year"
            :judul="project.judul"
            :subjudul="project.subjudul"
            :desc="project.desc"
            :image="project.image"
            :link="project.link"
        >
            <!-- content -->
        </card>
    </div>
</template>

<script>
import axios from 'axios'
import Card from '@/components/Card'

export default {
    components: {
        Card
    },
    name: 'projects',

    created() {
        this.fetchProject()
    },

    data() {
        return {
            projects: [],
        }
    },

    methods: {
        fetchProject() {
            let urlData = '/src/projects.json'

            axios.get(urlData)
            .then(response => {
              // JSON responses are automatically parsed.
              this.projects = response.data
            })
            .catch(e => {
              alert(e)
            })
        }
    }
}
</script>
