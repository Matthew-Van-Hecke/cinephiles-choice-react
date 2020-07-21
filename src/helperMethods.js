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

export {reduceArrayToCountDictionary};