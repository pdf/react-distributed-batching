if (typeof performance !== "undefined") {
    module.exports = function () {
        return performance.now();
    }
} else {
    module.exports = function () {
        return new Date().getTime();
    }
}
