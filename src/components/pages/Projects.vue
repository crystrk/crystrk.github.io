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
                    judul: 'Sistem KGB PNS Kota Gorontalo',
                    subjudul: 'BKPP Kota Gorontalo',
                    desc: 'Sistem Usulan Kenaikan Gaji Berkala PNS Kota Gorontalo yang terintegrasi dengan aplikasi SIMPEG Kota Gorontalo',
                    link: 'https://simpeg.gorontalokota.go.id/aplikasi-kepegawaian',
                    image: {
                        thumb: 'src/assets/kgb2017/thumb.png',
                        preview1: 'src/assets/kgb2017/app1.png',
                        preview2: 'src/assets/kgb2017/app2.png',
                    }
                },
                {
                    year: 'Juli 2017',
                    judul: 'E-Report Kependudukan',
                    subjudul: 'RumahIT G26 - Kab. Gorontalo',
                    desc: 'Aplikasi E-Report Kependudukan yang dilengkapi dengan sistem surat kependudukan',
                    link: 'http://kabgor.rumahitg26.com',
                    image: {
                        thumb: 'src/assets/ereport2017/thumb.png',
                        preview1: 'src/assets/ereport2017/app1.png',
                        preview2: 'src/assets/ereport2017/app2.png',
                    }
                },
                {
                    year: 'May 2017',
                    judul: 'Sistem Kenaikan Pangkat PNS Kota Gorontalo',
                    subjudul: 'BKPP Kota Gorontalo',
                    desc: 'Sistem Usulan Kenaikan Pangkat PNS Kota Gorontalo yang terintegrasi dengan data SIMPEG Kota Gorontalo',
                    link: 'https://simpeg.gorontalokota.go.id/aplikasi-kepegawaian',
                    image: {
                        thumb: 'src/assets/kenpa2017/thumb.png',
                        preview1: 'src/assets/kenpa2017/app1.png',
                        preview2: 'src/assets/kenpa2017/app2.png',
                    }
                },
                {
                    year: 'April 2017',
                    judul: 'Website profile BKPP Kota Gorontalo',
                    subjudul: 'BKPP Kota Gorontalo',
                    desc: 'Website profile BKPP Kota gorontalo yang terintegrasi dengan data SIMPEG Kota Gorontalo',
                    link: 'https://simpeg.gorontalokota.go.id',
                    image: {
                        thumb: 'src/assets/profile-bkpp2017/thumb.png',
                        preview1: 'src/assets/profile-bkpp2017/app1.png',
                        preview2: 'src/assets/profile-bkpp2017/app2.png',
                    }
                },

            ]
        }
    }
}
</script>