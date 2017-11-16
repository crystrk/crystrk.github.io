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
                    judul: 'met mauris Aliquam vitae nulla sit amet mauris',
                    subjudul: 'SubProject 1 ',
                    desc: 'Aliquam vitae nulla sit amet mauris ... Quisque malesuada sed',
                    link: 'https://www.google.com',
                    image: {
                        thumb: 'https://cdn.dribbble.com/users/588347/screenshots/1834553/preview.jpg',
                        preview1: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/8420415/tunnel_boring_company_borer.jpg',
                        preview2: 'http://spacenews.com/wp-content/uploads/2016/05/spacex-price.gif',
                    }
                },
                {
                    year: 'Oct 2017',
                    judul: 'Proquam vitae nulla sit amet mauris',
                    subjudul: 'SubProject 1 ',
                    desc: 'Aliquam vitae nulla sit amet mauris ... Quisque malesuada sed',
                    link: null,
                    image: {
                        thumb: 'https://placeimg.com/640/480/tech',
                        preview1: 'https://placeimg.com/640/480/any',
                        preview2: 'https://placeimg.com/640/480/arch',
                    }
                },
                {
                    year: 'Oct 2017',
                    judul: 'Project 1 Aliquam vitae nulla sit amet mauris Aliquam vitae nulla sit amet mauris',
                    subjudul: 'SubProject 1 ',
                    desc: 'Aliquam vitae nulla sit amet mauris ... Quisque malesuada sed',
                    link: 'https://www.google.com',
                    image: {
                        thumb: 'https://placeimg.com/640/480/arch',
                        preview1: 'https://placeimg.com/640/480/any',
                        preview2: 'https://placeimg.com/640/480/tech',
                    }
                },
                {
                    year: 'Oct 2017',
                    judul: 'Projlla sit amet mauris',
                    subjudul: 'SubProject 1 ',
                    desc: 'Aliquam vitae nulla sit amet mauris ... Quisque malesuada sed',
                    link: 'https://www.google.com',
                    image: {
                        thumb: 'https://placeimg.com/640/480/animals',
                        preview1: 'https://placeimg.com/640/480/tech',
                        preview2: 'https://placeimg.com/640/480/any',
                    }
                },


            ]
        }
    }
}
</script>