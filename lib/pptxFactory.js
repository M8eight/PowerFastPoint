module.exports.get = get;

const PPTX = require('nodejs-pptx');
let pptx = new PPTX.Composer();

async function get(data, responseServer) {
    await pptx.compose(async pres => {
        pres.layout('LAYOUT_4x3');

        console.log(typeof(headers));
        for (let i = 0; i < headers.length; i++) {
            await pres.addSlide(async slide => {

                if (urls[i]) {
                    await slide.addImage({
                        src: urls[i],
                        x: 370,
                        y: 150,
                        cx: 300,
                    });
                }

                await slide.addText(text => {
                    text
                        .value(headers[i])
                        .x(250)
                        .y(20)
                        .fontFace('Calibri')
                        .fontSize(35)
                        .textColor('312921')
                        .textAlign('center')
                        .margin(0);
                });

                if (texts[i]) {
                    await slide.addText(text => {
                        text
                            .value(texts[i])
                            .x(80)
                            .y(250)
                            .cx(250)
                            .fontFace('Calibri')
                            .fontSize(25)
                            .textColor('312921')
                            .textAlign('left')
                            .margin(0);
                    });
                }

            });
        }

        pptx.save('./storage/app.pptx');

    }).then(responseServer.json({
        'success': 'true',
        'error': 'false' 
    }));

}