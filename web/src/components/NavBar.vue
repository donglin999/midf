<template>
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <router-link class="navbar-brand" :to="{ name: 'home' }">MIDF实验室</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link :class="route_name == 'pk_index' ? 'nav-link active' : 'nav-link'"
                        :to="{name: 'pk_index'}">对战</router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="route_name == 'record_index' ? 'nav-link active' : 'nav-link'"
                        :to="{name: 'record_index'}">对局列表</router-link>
                </li>
                <li class="nav-item dropdown">
                    <router-link :class="route_name == 'ranklist_index' ? 'nav-link active' : 'nav-link'"
                        :to="{name: 'ranklist_index'}">排行榜</router-link>

                </li>
                
            </ul>
            
             <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form> 
            
        </div>
    </div>
</nav>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'

export default{
    setup(){
        const route = useRoute();
        let route_name = computed(() => route.name)
        return{
            route_name
        }
    }  //实现选择高亮
}
</script>

<style>

</style>