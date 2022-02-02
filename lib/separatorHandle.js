const {
    text
} = require("express");
const e = require("express");

module.exports.separateElement = separateElement;

/**
 * 
 * @param {String} headersForm 
 * @param {String} textForm 
 * @param {String} urlsForm 
 * @returns {JSON}
 */
function separateElement(headersForm, textForm, urlsForm) {

    let mainJson = new Object();

    //return headersGroup
    headersGroup = headersForm.split('; ');

    //return textGroup
    let middleElem = [];
    let textGroup = [];
    let regex = /[\S]+?[[\S\s]+?(?:[\.?!])/gm;
    while ((middleElem = regex.exec(textForm)) !== null) {
        if (middleElem.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        middleElem.forEach((match) => {
            textGroup.push(match);
        });
    }

    //return urlsSlideGroup
    let urlsSlideGroup = {};
    urlsGroup = urlsForm.split(';');
    urlsGroup.map((original, index) => urlsSlideGroup[index] = (original.split('|')));

    for (const key in headersGroup) {
        mainJson[key] = {};
    }

    for (const key in mainJson) {

        mainJson[key] = {
            'header': headersGroup[key]
        };
    }

    for (let key in mainJson) {
        for (let i = 0; i < textGroup.length; i++) {
            if (i - textGroup.length >= 0) {
                let i2 = i + 1
                mainJson[key].text = textGroup[i] + textGroup[i2];
            } else {
                mainJson[key].text = textGroup[i];
            }
        }
    }



    console.dir(mainJson);

    // return {
    //     'headers': headersArray,
    //     'text': textArray,
    //     'urls': urlsArray
    // }

}