$("#submit").click(function (button) {
    button.preventDefault();

    {
        //clear div containers
        $('#stateContainer').empty();
        $('#downloadPlace').empty();
        $('#submit').empty();

        //edit loading button
        $('#submit').append(`
            <div class="spinner-border" role="status"> 
                <span class="visually-hidden">Loading...</span>
            </div>`
        );
        $('#submit').addClass('disabled');
    }

    //init json data object
    let jsonData = {};

    //add keys in json data
    for (let i = 0; i < parseInt($('#countSlide').text()); i++) {
        jsonData[i] = {};
    }

    //add attributes in json data
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

    //parse json to string
    const jsonDataToString = JSON.stringify(jsonData);

    $.ajax({
        type: "post",
        url: "/request",
        data: jsonDataToString,
        dataType: "json",
        headers: { 'Content-Type': 'application/json' }
    }).done(function (response) {
        const serverResponse = response.condition;

        $('#submit').empty();
        $('#submit').text('Create');
        $('#submit').removeClass('disabled');

        if ($('#stateContainer').has('div')) {
            $('#stateContainer').empty();
        }

        //add download button or add Error text
        switch (serverResponse) {
            case 'success':
                $('#downloadPlace').append(`
                    <div class="d-grid gap-2">
                    <a href="/download" style="background-color: darkorange; border: darkorange;" id="addSlideForm"
                        class="btn btn-primary mb-3 mt-2" type="button">Download</a>
                    </div>
                `); 
                break;

            case 'No request':
                $('#stateContainer').append(`
                    <div class="alert bg bg-danger" role="alert">
                        <h2 class="text-white text-center">Error: </h2>
                        <h3 class="text-white text-center">Error in request</h3>
                    </div>`
                );
                break;

            case 'Error in save pptx':
                $('#stateContainer').append(`
                    <div class="alert bg bg-danger" role="alert">
                        <h2 class="text-white text-center">Error: </h2>
                        <h3 class="text-white text-center">Server error</h3>
                    </div>`
                );
                break;
        
            default:
                $('#stateContainer').append(`
                    <div class="alert bg bg-danger" role="alert">
                        <h2 class="text-white text-center">Error: </h2>
                        <h3 class="text-white text-center">Server error</h3>
                    </div>`
                );
                break;
        }

    });
});
