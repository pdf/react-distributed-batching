# Distributed Batching Strategy for React

A batching strategy for React that's more like a game. This may make your apps more performant but harder to test.
Inspired by Pete Hunt's RAFBatchingStrategy. Distributes updates over multiple animation frames by measuring update times to be able to estimate how to group updates by animation frames.

# Usage

```Javascript
var DistributedBatchingStrategy = require('react-distributed-batching');
var ReactUpdates = require('react/lib/ReactUpdates');

ReactUpdates.injection.injectBatchingStrategy(DistributedBatchingStrategy);
```
