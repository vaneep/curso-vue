new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },

    methods: {
        alertaBotao() {
            alert('Alerta do botão')
        },

        exercicioDois(event) {
            this.valor = event.target.value
        },

        exercicioTres(event) {
            this.valor = event.target.value
        }
    }
})