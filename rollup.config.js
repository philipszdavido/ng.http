export default {
    input: 'dist/src/index.js',
    output: {
        sourceMap: false,
        dir: 'dist/bundles/',
        file: 'dist/bundles/ng.http.umd.js',
        format: 'umd',
        name: 'ng.http',
        globals: {
            '@angular/core': 'ng.core',
            'rxjs/Observable': 'Rx',
            'rxjs/ReplaySubject': 'Rx',
            'rxjs/add/operator/map': 'Rx.Observable.prototype',
            'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
            'rxjs/add/observable/fromEvent': 'Rx.Observable',
            'rxjs/add/observable/of': 'Rx.Observable'
        }
    }
}