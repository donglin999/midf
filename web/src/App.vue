<template>
  <div>
    <div>成员昵称：{{ mem_name }}</div>
    <div>成员ID：{{ mem_id }}</div>
  </div>
  <router-view></router-view>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';

export default {
  name: "App",
  setup: () => {
    let mem_name = ref("");
    let mem_id = ref("");

    $.ajax({
      url: "http://127.0.0.1:3000/pk/getMIDFinfo/",
      type: "get",
      success: resp => {
        mem_name.value = resp.name;
        mem_id.value = resp.id;
      }
    });

    return {
      mem_name,
      mem_id
    }
  }
}
</script>

<style>
body {
  background-image: url("@/assets/background.png");
  background-size: cover;
}
</style>
