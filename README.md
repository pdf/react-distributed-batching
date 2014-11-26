# Distributed Batching Strategy for [React](https://github.com/facebook/react)

Inspired by [react-raf-batching](https://github.com/petehunt/react-raf-batching).

Distributes react updates over multiple animation frames aiming to maintain 60fps.

## Motivation

Reacts default batching strategy batches as many update instructions as possible to be able to optimize the update procedure. This may, depending on the complexity of your application, result in scenarios where update batches do not finish fast enough for the application to maintain 60fps.

## Usage

```Javascript
var DistributedBatchingStrategy = require('react-distributed-batching');
var ReactUpdates = require('react/lib/ReactUpdates');

ReactUpdates.injection.injectBatchingStrategy(DistributedBatchingStrategy);
```

## Dependencies

If you are targeting browsers that do not support these functions you will have to provide a polyfill.

- [requestAnimationFrame](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/RequestAnimationFrame/Overview.html)
