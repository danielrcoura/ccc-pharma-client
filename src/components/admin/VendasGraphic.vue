<template>
  <canvas ref="chart" height="100"></canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'VendasGraphic',
  props: {
    dados: Array
  },

  mounted () {
    // eslint-disable-next-line
    new Chart(this.$refs.chart, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
          {
            label: 'Arrecadado (R$)',
            backgroundColor: Array(12).fill('#e6b252'),
            data: this.dados
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    })
  }
}
</script>
