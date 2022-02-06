$("#submit").click(function (button) {
    button.preventDefault();

        $('#stateContainer').empty();
        $('#downloadPlace').empty();


    let jsonData = {};

    //keys
    for (let i = 0; i < parseInt($('#countSlide').text()); i++) {
        jsonData[i] = {};
    }

    //attributes
    for (let key in jsonData) {
        let headerVar = $(`input[name=headersList${key}]`).val();
        let textVar = $(`textarea[name=textsList${key}]`).val();
        let UrlVar = $(`textarea[name=urlsList${key}]`).val();

        jsonData[key]['header'] = headerVar;
        jsonData[key]['text'] = textVar;
        jsonData[key]['url'] = UrlVar;
    }

    /* DEBUG */
    // console.dir(jsonData);

    let jsonDataToString = JSON.stringify(jsonData);

    {
        $('#submit').empty();
        $('#submit').append(`<div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>`);
        $('#submit').addClass('disabled');
    }

    $.ajax({
        type: "post",
        url: "/request",
        data: jsonDataToString,
        dataType: "json",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (response) {
        $('#submit').empty();
        $('#submit').text('Create');
        $('#submit').removeClass('disabled');

        if ($('#stateContainer').has('div')) {
            $('#stateContainer').empty();
        }

        if (response.condition == 'success') {
            $('#downloadPlace').append(`
                <div class="d-grid gap-2">
                <a href="/download" style="background-color: darkorange; border: darkorange;" id="addSlideForm"
                    class="btn btn-primary mb-3 mt-2" type="button">Download</a>
                </div>
            `);
            $('#stateContainer').append(`
                <div class="alert bg bg-secondary mb-0" role="alert">
                    <h2 class="text-white text-center">Success: </h2>
                    <h3 class="text-white text-center">Click on download button</h3>
                </div>
            `);
        } else if (response.condition == 'No request') {
            $('#stateContainer').append(`
            <div class="alert bg bg-danger" role="alert">
                <h2 class="text-white text-center">Error: </h2>
                <h3 class="text-white text-center">Error in request</h3>
            </div>`);
        } else if (response.condition == 'Error in save pptx') {
            $('#stateContainer').append(`
            <div class="alert bg bg-danger" role="alert">
                <h2 class="text-white text-center">Error: </h2>
                <h3 class="text-white text-center">Server error</h3>
            </div>`);
        }

    });

});