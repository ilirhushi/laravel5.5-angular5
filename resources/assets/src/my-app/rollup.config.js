import angular from 'rollup-plugin-angular';
import sass from 'node-sass';
import CleanCSS from 'clean-css';
import { minify as minifyHtml } from 'html-minifier';

const cssmin = new CleanCSS();
const htmlminOpts = {
    caseSensitive: true,
    collapseWhitespace: true,
    removeComments: true,
};

export default {
    input: 'dist/index.js',
    output: {
      file: 'dist/bundles/amazing.umd.js',
      format: 'umd',
      name: 'ng.amazing',
      globals: {
        '@angular/core': 'ng.core',
        'rxjs/Observable': 'Rx',
        'rxjs/ReplaySubject': 'Rx',
        'rxjs/add/operator/map': 'Rx.Observable.prototype',
        'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
        'rxjs/add/observable/fromEvent': 'Rx.Observable',
        'rxjs/add/observable/of': 'Rx.Observable'
      },
      plugins: [
        angular({
          // additional replace `templateUrl` and `stylesUrls` in every `.js` file
          // default: true
          replace: true, 
          preprocessors: {
            template: template => minifyHtml(template, htmlminOpts),
            style: scss => {
                const css = sass.renderSync({ data: scss }).css;
                return cssmin.minify(css).styles;
            },
          }
        })
      ]
    }
  }