---
title: dev-test
---
# dev-test
Rich JS-Console for every page that allows loading scripts from <https://mpdieckmann.github.io/>.

Click here to see a demo with a blank page [demo.html](https://mpdieckmann.github.io/dev-test/demo.html).

Simply save the <a href="javascript:(function(){var t,i={context:'mpdieckmann.github.io/dev-test',xhtml:!0,baseUrl:'https://mpdieckmann.github.io/dev-test/js/'},n=document;if('function'==typeof requirejs&&'function'==typeof requirejs.config)requirejs.config(i)(['config.noframe.js']);else{self.requirejs=i,t=document.createElementNS('http://www.w3.org/1999/xhtml','script'),t.src='https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js',t.setAttribute('data-main','https://mpdieckmann.github.io/dev-test/js/config.noframe.js'),t.setAttribute('data-requirecontext','mpdieckmann.github.io/dev-test'),t.type='text/javascript';try{n=top.document}catch(r){}(n.head?n.head:n.firstElementChild).appendChild(t)}})()">this link</a> into your bookmarks and open the open on the page you wish to inspect.

The link is the minimized version of the following script:
```javascript
javascript:(function () {
  var config = {
    context: 'mpdieckmann.github.io/dev-test',
    xhtml: true,
    baseUrl: 'https://mpdieckmann.github.io/dev-test/js/'
  };
  var script;
  var doc = document;
  if (typeof requirejs == 'function' && typeof requirejs.config == 'function') {
    requirejs.config(config)(['config.noframe.js']);
  } else {
    self.requirejs = config;
    script = document.createElementNS('http://www.w3.org/1999/xhtml', 'script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js';
    script.setAttribute('data-main', 'https://mpdieckmann.github.io/dev-test/js/config.noframe.js');
    script.setAttribute('data-requirecontext', 'mpdieckmann.github.io/dev-test');
    script.type = 'text/javascript';
    try {
      doc = top.document;
    } catch (e) {}
    (doc.head ? doc.head : doc.firstElementChild).appendChild(script);
  }
})();
```

The minimized link source:
```javascript
javascript:(function(){var t,i={context:'mpdieckmann.github.io/dev-test',xhtml:!0,baseUrl:'https://mpdieckmann.github.io/dev-test/js/'},n=document;if('function'==typeof requirejs&&'function'==typeof requirejs.config)requirejs.config(i)(['config.noframe.js']);else{self.requirejs=i,t=document.createElementNS('http://www.w3.org/1999/xhtml','script'),t.src='https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js',t.setAttribute('data-main','https://mpdieckmann.github.io/dev-test/js/config.noframe.js'),t.setAttribute('data-requirecontext','mpdieckmann.github.io/dev-test'),t.type='text/javascript';try{n=top.document}catch(r){}(n.head?n.head:n.firstElementChild).appendChild(t)}})()
```
