let questoes = [
    {
        pergunta: 'Qual o nome dessa obra feita por Candido Portinari?',
        alternativas: ['Trabalhador do Campo', 'O escravo', 'O lavrador de café','Brasieliro no campo'],
        alternativaCerta: 2
    },
    {
        pergunta:'Quem é a artista responsável pela obra chamada "Abaporu',
        alternativas: ['Tarsila do Amaral','Candido Portinari', 'Van Gogh','Mondrian'],
        alternativaCerta: 0

    },
    {

        pergunta: 'Verdadeiro ou falso, “A Noite Estrelada” é uma obra do artista Van Gogh',
        alternativas: ['Verdadeiro', 'Falso'],
        alternativaCerta: 0

    },
    {

        pergunta: 'Em que ano foi feita a obra "Moça com o Brinco de "Pérola" do artista neerlandês Johannes Vermeer',
        alternativas: ['1995', '1665', '2005', '1867'],
        alternativaCerta: 1

    },
    {

        pergunta: 'O "Grito" é uma obra feita por qual autor?',
        alternativas: ['Van Gogh','Ludwig Kirchner','Edvard Munch', 'Candido Portinari'],
        alternativaCerta: 2

    }
];

let numeroQ = 0;
let alternativaC = 0;
let acerto = 0;
let totalQ = questoes.length;

function iniciar() {
    $('.section_apresentacao, #btsair').hide();
    $('.section_questoes').show();
    $('input[name=alternativas]').prop('checked', false);
    let q = $('<p></p>');
    $('#perguntas').append(q);
    q.text(numeroQ + 1 + ' ) ' + questoes[numeroQ].pergunta);

    for (let a in questoes[numeroQ].alternativas) {
        let alt = $('<input id="' + a + '" type="radio" name="alternativas" value="' + a + '"/>');
        let label = $('<label for="' + a + '"> ' + questoes[numeroQ].alternativas[a] + ' </label> ')
        $('#alternativas').append(alt);
        $('#alternativas').append(label);
        alt.text(a);
        alternativaC = (questoes[numeroQ].alternativaCerta);
    }
    $('#btiniciar, #alunos').hide();
    $('#btconfirmar').show();
}

function confirmar() {
    let alternativaS = $('input[name="alternativas"]:checked').val();
    let resposta = $('<label id="resposta"></label>');
    if (alternativaS) {
        if (alternativaS == alternativaC) {
            $('#alternativas').append(resposta);
            $('#resposta').text('Parabéns resposta correta :D');
            $('#resposta').css('color', 'green');
            acerto++;
        } else {
            $('#alternativas').append(resposta);
            resposta.text('Não foi dessa vez :(');
            $('#resposta').css('color', 'red');
        }
        $('#btconfirmar').hide();
        $('#btavancar, #btreiniciar, #resposta').show();
        $('input').prop("disabled", true);
    } else {
        alert('Por favor, Selecionar uma alternativa!')
    }
}

function avancar() {
    let erro = 0;
    let aproveitamento = 0;
    $('#btavancar, p, label, input').hide();
    numeroQ++;
    if (numeroQ < totalQ) {
        iniciar();
    } else {
        alert('Todas as questões foram respondidas!');
        $('#btreiniciar').hide();
        $('#btnovo, #btsair').show();
        erro = totalQ - acerto;
        aproveitamento = (acerto / totalQ) * 100;
        let resultado = $('<p></p>');
        $('#perguntas').append(resultado);
        resultado.html('Acertos: ' + acerto + '<br>' + ' Erros: ' + erro + '<br>' + ' Pontuação: ' + aproveitamento + '<label>pontos</label>');
    }
    $('#resposta').remove();
}

function reiniciar() {
    $('#btreiniciar, #btavancar, #btnovo').hide();
    $('p, input, label').remove();
    numeroQ = 0;
    selecionada = 0;
    erro = 0;
    aproveitamento = 0;
    acerto = 0;
    iniciar();
}


$(document).ready(function () {
    $('#btiniciar').show();
    $('.section_questoes').hide();

    $('#btsair').click(function () {
        location.reload();
    });
});