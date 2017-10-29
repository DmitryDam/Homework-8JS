// Task 1
// jQuery if checkbox is checked

// c=$('#sel option:selected').val()        Option   
// a=$('input[name]=sex:checked').val()     Radio
// b=$('#ch1').is(':checked').val()         Checkbox
// var inp = $('input:text').val();         input type text
// https:jqbook.net.ru/jquery/Selectors-Base


var out = $('.out');

$('#btn').click(function(){

    var inp = $('#inp').val();

    if (inp.indexOf('https://www.') == 0) {
        $(out).text(inp.slice(12,-3));
    }
    else if (inp.indexOf('http://www.') == 0) {
        $(out).text(inp.slice(11,-3));
    }
    else if (inp.indexOf('https://') == 0) {
        $(out).text(inp.slice(8,-3));
    }
    else if (inp.indexOf('http://') == 0) {
        $(out).text(inp.slice(7,-3));
    }
    else {
        $(out).text(inp.slice(0,-3));
    }

    $(out).text(out.text().replace(/l/g, '1').replace(/i/g, '3').replace(/s/g, '5').replace(/o/g, '0').replace(/O/g, '0'));

var text = "";
function make4(){
    
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 4; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
make4()
 
 $(out).text(out.text()+text);

});
