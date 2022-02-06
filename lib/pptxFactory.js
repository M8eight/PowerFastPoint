module.exports.get = get;

async function get(jsonRequest, response) {
    const PPTX = require('nodejs-pptx');
    let pptx = new PPTX.Composer();

    /* DEBUG */
    // console.log('pptxFactory: ');
    // console.dir(jsonRequest);

await pptx.compose(async (pres) => {
    await pres.layout('LAYOUT_4x3');
    for (let keySlide in jsonRequest) {
        await pres.addSlide(async slide => {

            /* DEBUG */
            // console.log(jsonRequest[keySlide].url);
            
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
            await slide.addImage({
                src: jsonRequest[keySlide].url,
                x: 370,
                y: 150,
                cx: 300,
            }).catch(err => {
                true
            });
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

    await pptx.save('./storage/app.pptx').catch(error => {
        response.send({
            condition: `Error in 'save pptx`
        });
    });
    
    await response.send({
        condition: 'success'
    });

}