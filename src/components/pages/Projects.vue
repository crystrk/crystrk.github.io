<template>
    <div class="columns">
        <card v-for="project in projects"
            :key="project.id"
            :year="project.year"
            :judul="project.judul"
            :subjudul="project.subjudul"
            :desc="project.desc"
            :image="project.image"
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
            //new to old
                {
                    year: 'Oct 2017',
                    judul: 'Project 1',
                    subjudul: 'SubProject 1',
                    desc: 'Aliquam vitae nulla sit amet mauris ... Quisque malesuada sed',
                    image: 'https://cdn.dribbble.com/users/588347/screenshots/1834553/preview.jpg',
                },
                {
                    year: 'Jan 2017',
                    judul: 'Boring Company',
                    subjudul: 'Elon Musk Spin Off 1',
                    desc: 'Aliquam vitae nulla sit amet mauris ... Quisque malesuada sed',
                    image: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/8420415/tunnel_boring_company_borer.jpg',
                },
                {
                    year: 'Marc 2016',
                    judul: 'Minig Bitcoin',
                    subjudul: 'Bitcoin Bitcoin Evereywhere',
                    desc: 'Aliquam vitae nulla sit amet mauris ... Quisque malesuada sed',
                    image: 'http://img.gawkerassets.com/img/18kpt0aireu9gjpg/ku-xlarge.jpg',
                },
                {
                    year: 'Jan 2016',
                    judul: 'Space X',
                    subjudul: 'SubProject 1',
                    desc: 'Aliquam vitae nulla sit amet mauris ... Quisque malesuada sed',
                    image: 'http://spacenews.com/wp-content/uploads/2016/05/spacex-price.gif',
                },
            ]
        }
    }
}
</script>