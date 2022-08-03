<template>
  <h1>Services</h1>
  <div class="container">
   <h2>"{{quote}}"</h2>
    <br>
    <p>-Kanye West</p>
  </div>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {dataService} from "./services/data-service";

const data = dataService();

const quote = ref("");


onMounted(async () => {
  quote.value = await data.getAllData()
})

</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
p{
  text-align: right;
}


</style>
