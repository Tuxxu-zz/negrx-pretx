$(document).ready(function(){
    $.getJSON('https://sheet.best/api/sheets/4a004210-2166-41e8-9def-dcb8ae378138', function(data) {
            var template = Handlebars.compile($('#people').html())
            $('#list').html(template(data))
        })
    })