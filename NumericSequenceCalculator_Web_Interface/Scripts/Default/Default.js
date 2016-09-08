var SR = SR || {};
SR.init = function () {
    SR.series = new SR.Series();
    SR.series.init(function () {
        SR.series.initFunc();
    });
}

SR.init();