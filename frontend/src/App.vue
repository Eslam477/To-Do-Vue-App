<template>

    <dev class="page">
        <Nav />
        <div class="card">
            <router-view></router-view>
        </div>
    </dev>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/App.css';
import Nav from './components/nav.vue'
export default {
    components: {
        Nav
    }
}
</script>