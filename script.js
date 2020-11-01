$(function(){
    $('#azul').click(function(){
        $('p').css("background-color", "blue");
        $('#mensagem').text("Cor alterada com sucesso");
        $('#mensagem').css('color', 'blue');
        $('#mensagem').css('border', '1px solid', 'blue');7
        $('#mensagem').delay(3000);
        $('#mensagem').fadeOut();
    });

    $('#vermelho').click(function(){
        $('p').css("background-color", "red");
        $('#mensagem').text("Cor alterada com sucesso");
        $('#mensagem').css('color', 'red');
        $('#mensagem').css('border', '1px solid', 'red');7
        $('#mensagem').delay(3000);
        $('#mensagem').fadeOut();
    });
});