let doubleTheValue = (() => {
    let cache = {};
    return (param) => {
        if (cache[param])
            return cache[param];
        
        // Do some operation with param
        let result = param * 2;

        // Cache the resulting value & return it
        return cache[param] = result;
    }
})();

// Calculation to be done since there is no cache
doubleTheValue(10);

// Cached value is returned directly without any calculation
doubleTheValue(10);
