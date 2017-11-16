<template>
    <div>
        <div class="columns">
            <div class="column col-4 col-md-6 col-sm-12 col-mx-auto">
                <div class="panel">
                    <div class="panel-header text-center">
                        <figure class="avatar avatar-lg" data-initial="CK">
                        </figure>
                        <div class="panel-title h5 mt-10">Crystal K</div>
                        <div class="panel-subtitle">Web Developer</div>
                    </div>
                    <nav class="panel-nav">
                        <ul class="tab tab-block">
                            <li class="tab-item active">
                            <!-- <a href="#panels">
                                &nbsp;
                            </a> -->
                        </li>
                        <!-- <li class="tab-item">
                            <a href="#panels">
                                Files
                            </a>
                        </li>
                        <li class="tab-item">
                            <a href="#panels">
                                Tasks
                            </a>
                        </li> -->
                    </ul>
                </nav>
                <div class="panel-body">
                    <div class="tile tile-centered">
                        <div class="tile-content">
                            <div class="tile-title">Website</div>
                            <div class="tile-subtitle">https://cryst.web.id</div>
                        </div>
                        <div class="tile-action">
                            <a class="btn btn-link btn-action btn-lg" href="https://cryst.web.id" target="_blank">
                                <i class="icon icon-link"></i>
                            </a>
                        </div>
                    </div>
                    <div class="tile tile-centered">
                        <div class="tile-content">
                            <div class="tile-title">Contact</div>
                            <div class="tile-subtitle">messenger</div>
                        </div>
                        <div class="tile-action">
                            <a class="btn btn-link btn-action btn-lg" href="https://m.me/crystal.kasim" target="_blank">
                                <i class="icon icon-mail"></i>
                            </a>
                        </div>
                    </div>
                    <div class="tile tile-centered">
                        <div class="tile-content">
                            <div class="tile-title">Location</div>
                            <div class="tile-subtitle">Gorontalo</div>
                        </div>
                        <div class="tile-action">
                            <a class="btn btn-link btn-action btn-lg" href="https://maps.google.com?q=kota gorontalo" target="_blank">
                                <i class="icon icon-location"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="panel-footer">
                    <button class="btn btn-primary btn-block">Recent Projects <i class="icon icon-caret"></i></button>
                </div>
            </div>
        </div>
    </div>
    <projects></projects>
</div>
</template>

<script>
import Projects from '@/components/pages/Projects'

export default {
    components: {
        Projects
    },
    name: 'Home'
}
</script>

<style scooped>
.panel .tile {
    margin: .75rem 0;
}
.tile-subtitle{
    font-weight: 700;
}
</style>