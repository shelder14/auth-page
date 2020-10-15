<template>
  <div>
    <form action="" @submit.prevent="getAuth">
      <input name="key" class="input" placeholder="id сайта" v-model="key" @focus="clearError" value="" />
      <div class="error">
        {{error}}
      </div>
      
      <button type="submit" class="btn" >Войти</button> 
    </form>
  </div>

</template>
<script>
import axios from 'axios'
export default {
  name: "Auth",
  data() {
    return {
      key: "",  
      error: ""
    }

  },
  methods: {
    getAuth() {
      if( this.key.length === 24) {
          axios({
          method: "get",
          url: "https://track-api.leadhit.io/client/test_auth", 
          headers: {
            "Api-Key" :"5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
            "Leadhit-Site-Id": this.key
            }
          }).then(response => {

            if (response.data.message === "ok") {
              localStorage.setItem('leadhit-site-id', this.key);
              console.log(response);
              this.$router.push({name: "Analytic"});           
              }
          }
          )      
          .catch(error => {
            console.log(error);
            this.error = "Не удалось подключиться";
          })
      } else {
        this.error = "id сайта должен содержать 24 символа"
      }
    },
    clearError() {
      this.error = ""
    }
  }

}
</script>