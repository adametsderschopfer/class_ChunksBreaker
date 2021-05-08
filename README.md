# class ChunksBreaker

## Usage
```
	array.toChunks(CHUNK_SIZE)
```

## Example

copy code from dist/index.js in your js file, and further use is look like that

```js
	const fibonacciNumsArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

	fibonacciNumsArray.toChunks(3); // [[0, 1, 1], [2, 3, 5], [8, 13, 21], [34]]
```