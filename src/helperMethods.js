function reduceArrayToCountDictionary(arrayToReduce) {
    let dict = {};
    for (let i = 0; i < arrayToReduce.length; i++){
        let item = arrayToReduce[i];
        if (dict.hasOwnProperty(item)){
            dict[item]++;
        }
        else {
            dict[item] = 1;
        }
    }
    return dict;
}
function groupByCriteria(array, criteria){
    let dict = {};
    for (let i = 0; i < array.length; i++){
        let item = array[i];
        let key = item[criteria];
        if (dict.hasOwnProperty(key)){
            dict[key].push(item);
        }
        else {
            dict[key] = [item];
        }
    }
    return dict;
}

export {reduceArrayToCountDictionary, groupByCriteria};