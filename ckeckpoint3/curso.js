let Aluno = require('../module/aluno');

let Curso = {
    nomeCurso: 'js e node',
    notaAprovacao: 7,
    faltasMaxima: 4,
    estudantes: [],
    adicionarAluno: (nome, faltas, notas) => {
        Curso.estudantes.push(new Aluno(nome, faltas, notas))
    },
    mediaNotaAlunos: obj => {
        let arrayMedias = obj.map(e => e.calcularMedia());
        let somaMedias = 0;
        for (let i = 0; i < arrayMedias.length; i++) {
            somaMedias += arrayMedias[i] / arrayMedias.length;
        };
        console.log(` média  alunos  ${somaMedias.toFixed(2)}.`);
    },
    adicionarFalta: (obj, nome) => {
        let aluno = obj.filter(e => e.nome == nome);
        console.log(`O aluno ${nome} tem ${aluno[0].faltas} faltas.`)
        aluno[0].adiconarFaltas()
        console.log(`Adicionada falta ${nome}. faltas atual: ${aluno[0].faltas}.`)
    }
};

module.exports = Curso;