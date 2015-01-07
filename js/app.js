$(document).ready(function() {
    function fizzBuzz () {
        for (i = 1; i<=100; i++) {
            if (i%3 == 0) {
                if (i%5 == 0) {
                    $('.list').append("<li>FizzBuzz</li>");
                } 
                else {
                    $('.list').append("<li>Fizz</li>");
                }
            } 
            else if (i%5 == 0) {
                $('.list').append("<li>Buzz</li>");
            }
            else {
                $('.list').append("<li>"+ i +"</li>");
            }
        }
    };

    $('#myButton').on('click', fizzBuzz);
});