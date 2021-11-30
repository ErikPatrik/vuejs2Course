new Vue({
    el: '#desafio',
    data: {
        nome: 'Erik',
        idade: 26,
        linkExterno: 'https://www.omundodaquimica.com.br/curiosidade/imagens/al_algodao1.jpg'
    },
    methods: {
        multiplicaIdade() {
            return this.idade * 3
        },
        numeroRandomico() {
            return Math.floor(Math.random() * 1);
        }
    }
})