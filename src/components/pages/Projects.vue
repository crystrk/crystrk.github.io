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
                {
                    year: 'Des 2016',
                    judul: 'SIM-TAGAR',
                    subjudul: 'Inspektorat Kota Gorontalo - CV MITI Global',
                    desc: 'Sistem Informasi  TPTGR  Inspektorat Kota Gorontalo, disini saya mengerjakan modul <i><b>operator temuan, angsuran, dan laporan</b></i>',
                    link: null,
                    image: {
                        thumb: 'src/assets/simtagar2016/thumb.jpg',
                        preview1: 'src/assets/simtagar2016/app1.jpg',
                        preview2: 'src/assets/simtagar2016/app2.jpg',
                    }
                },
                {
                    year: 'Sept 2016',
                    judul: 'Sistem Monitoring Pipeline Bank Mandiri Syariah',
                    subjudul: 'Mandiri Syariah - Makassar',
                    desc: 'Sistem Monitoring Pipeline Bank Mandiri Syariah area Makassar, digunakan marketing untuk melaporkan calon nasabah potensial',
                    link: 'http://ewako1.com',
                    image: {
                        thumb: 'src/assets/bsm2016/thumb.jpg',
                        preview1: 'src/assets/bsm2016/app1.jpg',
                        preview2: 'src/assets/bsm2016/app2.jpg',
                    }
                },
                {
                    year: 'Des 2015',
                    judul: 'E-IMB  Mobile Kota Gorontalo V.2',
                    subjudul: 'Dinas Tata Kota Gorontalo',
                    desc: 'Aplikasi mobile IMB Dinas Tata Kota Gorontalo berbasis intranet (jaringan lokal) & Android  (webview)',
                    link: null,
                    image: {
                        thumb: 'src/assets/mobile-e-imb2015/thumb.jpg',
                        preview1: 'src/assets/mobile-e-imb2015/app1.jpg',
                        preview2: 'src/assets/mobile-e-imb2015/app2.jpg',
                    }
                },
                {
                    year: 'Des 2015',
                    judul: 'E-IMB  Pointing',
                    subjudul: 'Dinas Tata Kota Gorontalo',
                    desc: 'Aplikasi pointing lokasi IMB untuk petugas lapangan yang berbasis Android',
                    link: null,
                    image: {
                        thumb: 'src/assets/pointing-e-imb2015/thumb.png',
                        preview1: 'src/assets/pointing-e-imb2015/app1.png',
                        preview2: 'src/assets/pointing-e-imb2015/thumb.png',
                    }
                },
                {
                    year: 'Des 2015',
                    judul: 'E-IMB Kota Gorontalo V.2',
                    subjudul: 'Dinas Tata Kota Gorontalo',
                    desc: 'Aplikasi IMB Dinas Tata Kota Gorontalo berbasis intranet (jaringan lokal)',
                    link: null,
                    image: {
                        thumb: 'src/assets/e-imb2015/thumb.jpg',
                        preview1: 'src/assets/e-imb2015/app1.jpg',
                        preview2: 'src/assets/e-imb2015/app2.jpg',
                    }
                },
            ]
        }
    }
}
</script>
