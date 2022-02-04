module.exports.separateElement = separateElement;

/**
 * 
 * @param {String} headersForm 
 * @param {String} textForm 
 * @param {String} urlsForm 
 * @returns {JSON}
 */

function separateElement(headersForm, textForm, urlsForm) {
    let mainJson = {};

    /**
     * @return {Array} headersGroup
    */ 
    let headersGroup = [];
    headersGroup = headersForm.split('; ');

    /**
     * @return {Array} textGroup
    */ 
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

    /**
     * @return {Array} urlsSlideGroup
    */ 
    let urlsSlideGroup = [];
    urlsSlideGroup = urlsForm.split('; ');


    //keys
    for (const key in headersGroup) {
        mainJson[key] = [];
    }
    //headers
    for (const key in mainJson) {
        mainJson[key] = {
            'header': headersGroup[key]
        }
    }
    //texts
    for (const key in mainJson) {
        mainJson[key].text = textGroup[key]
    }

    //urls
    for (const key in mainJson) {
        mainJson[key].urls = urlsSlideGroup[key]
    }

    return mainJson;
}