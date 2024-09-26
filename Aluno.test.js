//Nome: Artur Pereira Medeiros
//Matricula: 2314290019 

// Aluno.test.js
const Aluno = require('./Aluno');

describe('Testes da classe Aluno', () => {
    let aluno;

    beforeEach(() => {
        aluno = new Aluno('João', [8, 6]);
    });

    test('deve lançar erro se uma das notas não for número', () => {
        aluno = new Aluno('Lucas', [8, 'a']);
        expect(() => aluno.calcularMedia()).toThrow('Todas as notas devem ser números!');
    });
    

    // 1. Testar se a média está sendo calculada corretamente
    test('calcularMedia deve retornar a média correta', () => {
        expect(aluno.calcularMedia()).toBe(7);
    });

    // 2. Testar se a menção "MS" é retornada corretamente
    test('calcularMenção deve retornar MS para média >= 7 e < 9', () => {
        expect(aluno.obterMencao()).toBe('MS');
    });

    // 3. Testar se o aluno foi aprovado
    test('aprovado deve retornar true para menção MS', () => {
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    // 4. Testar para menção "SS"
    test('calcularMenção deve retornar SS para média >= 9', () => {
        aluno = new Aluno('Maria', [10, 9]);
        expect(aluno.obterMencao()).toBe('SS');
    });

    // 5. Testar se o aluno foi aprovado com menção SS
    test('aprovado deve retornar true para menção SS', () => {
        aluno = new Aluno('Maria', [10, 9]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    // 6. Testar para menção "MM"
    test('calcularMenção deve retornar MM para média >= 5 e < 7', () => {
        aluno = new Aluno('Carlos', [5, 6]);
        expect(aluno.obterMencao()).toBe('MM');
    });

    // 7. Testar se o aluno foi aprovado com menção MM
    test('aprovado deve retornar true para menção MM', () => {
        aluno = new Aluno('Carlos', [5, 6]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    // 8. Testar para menção "MI"
    test('calcularMenção deve retornar MI para média < 5', () => {
        aluno = new Aluno('José', [3, 4]);
        expect(aluno.obterMencao()).toBe('MI');
    });

    // 9. Testar se o aluno foi reprovado com menção MI
    test('aprovado deve retornar false para menção MI', () => {
        aluno = new Aluno('José', [3, 4]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });

    // 10. Testar se a média de um array vazio retorna NaN
    test('calcularMedia deve retornar NaN se notas estiverem vazias', () => {
        aluno = new Aluno('Teste', []);
        expect(aluno.calcularMedia()).toBeNaN();
    });

    // 11. Testar se notas com valores decimais são calculadas corretamente
    test('calcularMedia deve funcionar com notas decimais', () => {
        aluno = new Aluno('Roberto', [5.5, 6.4]);
        expect(aluno.calcularMedia()).toBeCloseTo(5.95, 2);
    });

    // 12. Testar se notas fora do intervalo [0,10] geram erro
    test('deve lançar erro se uma das notas for maior que 10', () => {
        aluno = new Aluno('Erika', [11, 12]);
        expect(() => aluno.calcularMedia()).toThrow('Média acima da máxima permitida!');
    });

    // 13. Testar se as notas são números
    test('deve lançar erro se uma das notas não for número', () => {
        aluno = new Aluno('Lucas', [8, 'a']);
        expect(() => aluno.calcularMedia()).toThrow();
    });

    // 14. Testar se o aluno pode ser aprovado faltando uma prova e tirando nota máxima na última
    test('deve retornar aprovado mesmo se o aluno faltar uma prova, mas tirar nota máxima na outra', () => {
        aluno = new Aluno('Ana', [0, 10]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    // 15. Testar se todas as notas iguais a zero retornam menção "MI"
    test('deve retornar MI se todas as notas forem 0', () => {
        aluno = new Aluno('Jorge', [0, 0]);
        expect(aluno.obterMencao()).toBe('MI');
    });

    // 16. Testar se notas muito próximas de 7 retornam a menção correta
    test('deve retornar MM para média próxima de 7', () => {
        aluno = new Aluno('Eduardo', [6.7, 7.1]);
        expect(aluno.obterMencao()).toBe('MM');
    });

    // 17. Testar se uma única nota zero afeta a aprovação
    test('deve retornar reprovad@ se uma das notas for 0', () => {
        aluno = new Aluno('Bruno', [0, 8]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });

    // 18. Testar se a soma total das notas é correta
    test('calcularMedia deve somar corretamente', () => {
        aluno = new Aluno('Helena', [10, 10]);
        expect(aluno.calcularMedia()).toBe(10);
    });

    // 19. Testar se a função aprovado funciona com menção MM
    test('deve aprovar aluno com média entre 5 e 7', () => {
        aluno = new Aluno('Bruna', [6, 5]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    // 20. Testar se aluno com notas abaixo de 5 é reprovado
    test('deve reprovar aluno com média abaixo de 5', () => {
        aluno = new Aluno('Roberta', [4, 3]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });
});
