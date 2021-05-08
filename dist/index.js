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
;
(function load() {
    if (!Array.prototype.hasOwnProperty('toChunks'))
        Object.defineProperty(Array.prototype, 'toChunks', {
            value: function (CHUNK_SIZE) {
                return ChunksBreaker.toChunks(this, CHUNK_SIZE);
            }
        });
})();
