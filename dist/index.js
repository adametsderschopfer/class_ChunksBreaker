"use strict";
var ChunksBreaker = /** @class */ (function () {
    function ChunksBreaker() {
    }
    ChunksBreaker.toChunks = function (array, chunkSize) {
        return array.reduce(function (previousValue, currentValue) {
            var chunk;
            if (previousValue.length === 0 || previousValue[previousValue.length - 1].length === chunkSize) {
                chunk = [];
                previousValue.push(chunk);
            }
            else {
                chunk = previousValue[previousValue.length - 1];
            }
            chunk.push(currentValue);
            return previousValue;
        }, []);
    };
    return ChunksBreaker;
}());
