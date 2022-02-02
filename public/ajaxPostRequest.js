$("#submit").click(function (button) {
    button.preventDefault();

    if (document.getElementsByClassName('stateContainer').length != 0) {
        $('#stateContainer').empty();
    }

    let headersParam = $('input[name=headersList]').val();
    let textParam = $('textarea[name=textsList]').val();
    let urlsParam = $('textarea[name=urlsList]').val();
    let dataJson = JSON.stringify({
        'headersList': headersParam,
        'textsList': textParam,
        'urlsList': urlsParam
    });

    {
        $('#submit').text(' Loading');
        // $('#submit').addClass('disabled');
        $('#submit').append(' <span class="spinner-grow spinner-grow-sm text-success" role="status " aria-hidden="true"></span>');    
    }

    $.ajax({
        type: "post",
        url: "/request",
        data: dataJson,
        dataType: "json",
        headers: {"Content-Type": "application/json"}
    }).done(function (response) {
        $('#submit').empty();
        $('#submit').text('Merge');
        // $('#submit').removeClass('disabled');

        if ($('#stateContainer').has('div')) {
            $('#stateContainer').empty();
        }

        if (response.hasOwnProperty('error')) {
            $('#stateContainer').append($('#stateContainer').innerHTML = `<div class="alert alert-warning" role="alert"><h3 class="text-danger">Error</h3>
            Cause: ${response['error']}</div>`);
        } else {
            $('#stateContainer').append(`<div class="alert alert-primary" role="alert"><h3 class="text-success">Success</h3>
            Download: <button class="btn btn btn-primary" id='download'>Download</button></div>`);
        }

    });

});