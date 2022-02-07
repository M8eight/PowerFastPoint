module.exports.get = get;

async function get(jsonRequest, response) {
    const PPTX = require('nodejs-pptx');
    let pptx = new PPTX.Composer();
    
    //create pptx base
    await pptx.compose(async (pres) => {

        //change aspect ratio
        await pres.layout('LAYOUT_4x3');

        //each slide
        for (let keySlide in jsonRequest) {
            await pres.addSlide(async slide => {

                //append header
                await slide.addText(text => {
                    text
                        .value(jsonRequest[keySlide].header)
                        .x(250)
                        .y(20)
                        .fontFace('Calibri')
                        .fontSize(35)
                        .textColor('312921')
                        .textAlign('center')
                        .margin(0);
                });

                //append image
                await slide.addImage({
                    src: jsonRequest[keySlide].url,
                    x: 370,
                    y: 150,
                    cx: 300,
                }).catch(err => {
                    true
                });

                //append text
                await slide.addText(text => {
                    text
                        .value(jsonRequest[keySlide].text)
                        .x(80)
                        .y(250)
                        .cx(250)
                        .fontFace('Calibri')
                        .fontSize(25)
                        .textColor('312921')
                        .textAlign('left')
                        .margin(0);
                });
            });
        }
    });

    //save slide
    await pptx.save('./storage/app.pptx').catch(error => {
        //send error json object
        response.send({
            condition: `Error in 'save pptx`
        });
    });
    
    //send success json object
    await response.send({
        condition: 'success'
    });

}