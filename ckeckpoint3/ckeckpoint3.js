let Curso = require('./module/curso');

Curso.adicionarAluno('joao', 0, [6, 2, 8]);
Curso.adicionarAluno('filo', 1, [1, 9, 8]);


Curso.mediaNotaAlunos(Curso.estudantes);
Curso.adicionarFalta(Curso.estudantes, 'filo');