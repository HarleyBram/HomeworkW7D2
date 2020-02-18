import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      currencies: null,
      selectedCurrency: null
    },
    mounted(){
      this.fetchCurrency()
    },

    methods: {
      fetchCurrency: function (){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencies = data)
      },
      convertCurrency: function() {
        return this.selectedCurrency * userInput
      }
    }

  });
})
