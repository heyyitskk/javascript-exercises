const getTheTitles = function(obj) {
    let getTitles = obj.map(books => {
        return books.title;
    });
    return getTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
