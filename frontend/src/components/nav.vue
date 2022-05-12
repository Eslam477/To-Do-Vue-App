<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="https://www.facebook.com/EslamE477" target="_blank">E477</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Your List</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/add">Add</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/achievements">Achievements</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>