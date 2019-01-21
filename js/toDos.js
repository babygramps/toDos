// check off todos by clicking

$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

//  click on x to delete to do

$('ul').on('click', 'span', function(e){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    e.stopPropagation();
});

// add event listener to text input

$('input[type = "text"]').keypress(function(e){
    if (e.which === 13) {
        var textIn = $(this).val();
        $('ul').append('<li>'+ '<span><i class="fas fa-trash-alt"></i> </span>' + textIn + '</li>');
        $(this).val("");
    }
});

$('#iconClick').click(function(){
    $('input[type = "text"]').fadeToggle();
    $("i", this).toggleClass("fa-eye fa-eye-slash");
});
