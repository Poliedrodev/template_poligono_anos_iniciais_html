$(document).ready(function () {
    $('.articleContent').each(function () {
        //Inicio do script para o componente
        var containerGlossario = $('.container_professor');
        containerGlossario.on('click', function () {
            var randomId = Math.floor(Math.random() * 100000) + 1;
            if ($(this).find('input').attr('id').length == "0") {
                $(this).find('input').attr('id', randomId);
            } else {
            }

            if ($(this).find('label').attr('for').length == "0") {
                $(this).find('label').attr('for', randomId);
            } else {
            }
        });
        //Fim do script para o componente

    });
});
