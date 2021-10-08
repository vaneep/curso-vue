new Vue({
    el: '#desafio',
    data: {
        nome: 'Vanessa Piccoli',
        idade: 24,
        imagem: 'https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png'
    },
    methods: {
        random() {
            return Math.random(0, 1)
        },

        vezes() {
            return this.idade * 3
        }
    }
})
