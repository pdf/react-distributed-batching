# Distributed Batching Strategy for [React](https://github.com/facebook/react)

Inspired by [react-raf-batching](https://github.com/petehunt/react-raf-batching).

Distributes updates over multiple animation frames aiming to maintain 60fps.

# Usage

```Javascript
var DistributedBatchingStrategy = require('react-distributed-batching');
var ReactUpdates = require('react/lib/ReactUpdates');

ReactUpdates.injection.injectBatchingStrategy(DistributedBatchingStrategy);
```

# Dependencies

If you are targeting browsers that do not support these functions you will have to provide a polyfill.

- [High Resolution Timer](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/HighResolutionTime/Overview.html)
- [requestAnimationFrame](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/RequestAnimationFrame/Overview.html)
