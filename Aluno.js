//Nome: Artur Pereira Medeiros
//Matricula: 2314290019 

// Aluno.js

class Aluno {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas; // Array com 2 notas
    }


    calcularMedia() {
        if (this.notas.length === 0) return NaN;
        
        // Verificar se todas as notas são números
        for (let nota of this.notas) {
            if (typeof nota !== 'number') {
                throw new Error('Todas as notas devem ser números!');
            }
        }

        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        let nota = soma / this.notas.length;
        if (nota > 10.0) throw new Error('Média acima da máxima permitida!');
        return nota;
    }

    obterMencao() {
        const media = this.calcularMedia();
        if (media >= 9) return 'SS';
        if (media >= 7) return 'MS';
        if (media >= 5) return 'MM';
        return 'MI';
    }

    statusAprovacao() {
        const menção = this.obterMencao();
        return (menção !== 'MI' && menção !== 'II') ? 'aprovad@' : 'reprovad@';
    }
}

module.exports = Aluno;
