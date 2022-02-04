module.exports.get = get;

const PPTX = require('nodejs-pptx');
let pptx = new PPTX.Composer();

async function get(data) {
    await pptx.compose(async (pres) => {
        pres.layout('LAYOUT_4x3');

        for (let key in data) {
            console.log(key + ' ' + data[key]['urls']);
            await pres.addSlide(async slide => {

                await slide.addText(text => {
                    text
                        .value(data[key]['header'])
                        .x(250)
                        .y(20)
                        .fontFace('Calibri')
                        .fontSize(35)
                        .textColor('312921')
                        .textAlign('center')
                        .margin(0);
                });

                await slide.addImage({
                    src: data[key]['urls'],
                    x: 370,
                    y: 150,
                    cx: 300,
                });

                await slide.addText(text => {
                    text
                        .value(data[key]['text'])
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

        pptx.save('./storage/app.pptx');

        return new Promise((resolve, reject) => {
            resolve(true);
        });
    });
}