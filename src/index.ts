class ChunksBreaker {
    public static toChunks(array: Array<any>, chunkSize: number | string): Array<Array<any>[]> {
        return array.reduce(function (previousValue, currentValue) {
            let chunk: Array<any>;

            if (previousValue.length === 0 || previousValue[previousValue.length - 1].length === chunkSize) {
                chunk = [];   
                previousValue.push(chunk);   
            } else {
                chunk = previousValue[previousValue.length - 1];  
            }

            chunk.push(currentValue);  

            return previousValue;   
        }, []);
    }
}

