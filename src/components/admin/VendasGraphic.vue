<template>
  <canvas ref="chart" height="100"></canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'VendasGraphic',
  mounted () {
    // eslint-disable-next-line
    new Chart(this.$refs.chart, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
          {
            label: 'Arrecadado (R$)',
            backgroundColor: Array(12).fill('#e6b252'),
            data: [2478, 1000, 734, 1000, 433, 1000, 433, 1000, 433, 433, 1000, 433]
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    })
  }
}
</script>
