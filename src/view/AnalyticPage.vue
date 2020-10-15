<template>
  <div class="container">
    <h1>Аналитика</h1>
    <h2>Аналитика по визитам</h2>
    <Analytic :chartdata="datacollection" />
      <!-- <line-chart :chart-data="datacollection"></line-chart> -->
  </div>
</template> s
<script>
import Analytic from "@/components/Analytic.vue"
import dataJson from "@/data.json"
import moment from 'moment'
moment.locale("RU")
 export default {
   name: "AnalyticPage",
   components: {
     Analytic
   },
    data () {
      return {
        datacollection: 
        {
          labels: dataJson.map(item => moment(item.date).format('DD MMMM')),
          datasets: [
            {
              label: "Посещения",
              backgroundColor: '#9500FC',
              data: dataJson.map(item => item.visits)  
            }
          ]
        
        },
      }
    },
 }
</script>