# Distributed Batching Strategy for [React](https://github.com/facebook/react)

Inspired by [react-raf-batching](https://github.com/petehunt/react-raf-batching).

Distributes updates over multiple animation frames aiming to maintain 60fps.

# Usage

```Javascript
var DistributedBatchingStrategy = require('react-distributed-batching');
var ReactUpdates = require('react/lib/ReactUpdates');

ReactUpdates.injection.injectBatchingStrategy(DistributedBatchingStrategy);
```
