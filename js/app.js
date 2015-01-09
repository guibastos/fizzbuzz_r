$(document).ready(function() {

    function fizzBuzz () {
        $('#errormessage').hide();
        var input = $('#myInput').val();
        var tr_input = $.trim(input); 
        $('.output').remove();
        
        if (isNaN(tr_input) || (tr_input%1!==0)){
            $('#errormessage').show();
        }

        else {

            for (i = 1; i<=input; i++) {
                if (i%3 == 0) {
                    if (i%5 == 0) {
                        $('.list').append("<li class='output'>FizzBuzz</li>");
                    } 
                    else {
                        $('.list').append("<li class='output'>Fizz</li>");
                    }
                } 
                else if (i%5 == 0) {
                    $('.list').append("<li class='output'>Buzz</li>");
                }
                else {
                    $('.list').append("<li class='output'>"+ i +"</li>");
                }
            }
        }
    }
  
    $('#myButton').on('click', fizzBuzz);
    $('#myInput').on('keydown',function(e){
        if(e.which==13) {fizzBuzz();}
    });

    });