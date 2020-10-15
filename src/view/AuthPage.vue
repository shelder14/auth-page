<template>
  <div class="container">
    <h1>LeadHit</h1>
    <Auth />
  </div>
</template> 
<script>
import Auth from "@/components/Auth.vue"
 export default {
   name: "AuthPage",
   components: {
     Auth
   }
 }
</script>