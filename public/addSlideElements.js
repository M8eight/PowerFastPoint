$("#mainContainerSlide").append(`
    <div id="slideForm">
    <div class="row mb-3">
        <h3 class="text-center text-primary">Slide 1</h3>
        <div class="col-2"></div>
        <div class="col-8 border border-primary border-2 rounded px-0">
            <form name="parseBook">
                <div class="input-group ">
                    <span class="input-group-text" id="inputGroup-sizing-default">Header</span>
                    <input placeholder="Enter header" class="form-control" type="text"
                        name="headersList0" id="headersList" />
                </div>
                <div class="input-group input-group-mg ">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Text</span>
                    <textarea placeholder="Ender the text" class="form-control" cols="30"
                        rows="5" name="textsList0" id="textsList"></textarea> <br>
                </div>
                <div class="input-group ">
                    <span class="input-group-text" id="inputGroup-sizing-default">Ulr</span>
                    <textarea placeholder="Enter url" class="form-control" cols="30" rows="5"
                        type="text" name="urlsList0" id="urlsList"></textarea> <br>
                </div>
            </form>
        </div>
        <div class="col-2"></div>
    </div>
    </div>
`);

var index = 0;
var numberSlide = 1;
$("#addSlideForm").click(function (button) {
    index++;
    numberSlide++;
    $('#countSlide').text(numberSlide);

    $("#mainContainerSlide").append(`
        <div id="slideForm">
            <div class="row mb-3">
                <h3 id="headerCount" class="text-center text-primary">Slide ${numberSlide}</h3>
                <div class="col-2"></div>
                <div class="col-8 border border-primary border-2 rounded px-0">
                    <form name="parseBook">
                        <div class="input-group ">
                            <span class="input-group-text" id="inputGroup-sizing-default">Header</span>
                            <input placeholder="Enter header" class="form-control" type="text" name="headersList${index}" />
                        </div>
                        <div class="input-group input-group-mg ">
                            <span class="input-group-text" id="inputGroup-sizing-lg">Text</span>
                            <textarea placeholder="Ender the text" class="form-control" aria-label="Text" cols="30" rows="5" name="textsList${index}"></textarea> <br> 
                        </div>
                        <div class="input-group ">
                            <span class="input-group-text" id="inputGroup-sizing-default">Url</span>
                            <textarea placeholder="Enter url" class="form-control" aria-label="Urls" cols="30" rows="5" type="text" name="urlsList${index}"></textarea> <br>
                        </div>
                    </form>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
    `);
});