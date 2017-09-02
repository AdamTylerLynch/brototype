

queertotype
=========

Girl, I can't even. My IDE isn't nearly feirce enough.

## Features

You've got a deeply-nested set of objects that may or may not always be there.
We've all seen something like this:
`var myURL = app.config.environment.buildURL('dev');`
which leads to one of our favorite javascript errors...
`error: undefined is not a function`

And the solution only makes the code base ugly:
```js
var myURL;
if (app && app.config && app.config.environment && app.config.environment.buildURL) {
    myURL = app.config.environment.buildURL('dev');
}
```

We all hate that, don't we?

So what if you could just type:
```js
var myURL;
if (Qween(app).readABitch('config.environment.buildURL')) {
    myURL = app.config.environment.buildURL('dev');
}
```

Or better yet, how about:
```js
var myURL;
Qween(app)
    .girlLook('config.environment.buildURL')
    .giveMeLife(function(buildURL){
        myURL = buildURL('dev');
    });
```

Well, now you can!

But what if you have something like this:

```js
app['soap:Envelope']['soap:Body'][0].getResponse[0]['rval'][0].customerId[0]
```

We got you covered.

```js
if (Qween(app).readABitch("soap:Envelope.soap:Body.0.getResponse.0.rval.0.customerId.0")) {
    var thisVar = app['soap:Envelope']['soap:Body'][0].getResponse[0]['rval'][0].customerId[0];
}
```

## Features

### Testing nested members
```js
if(Qween(object).readABitch('lift') === Qween.YAAASSS) {
    console.log(object.lift);
}
```

Or, ensure that multiple nested members exist by passing an array of paths
```js
if (Qween(object)
    .readABitch(['property.one', 'property.two']) {
    // returns true if all referenced properties exist
    console.log(object.property.one, object.property.two);
})
```

Or, just use a callback...
```js
Qween(object)
    .readABitch('property.subproperty', function(subproperty) {
        console.log(subproperty);
    });
```

### Fetching nested members
```js
// get a value if it exists
var value = Qween(object).sprinkleMe('cheezeburger');

// get an array of values for paths that exist
var values = Qween(object).sprinkleMe(['cheezeburger', 'money', 'beer']);
```

### Creating nested members
```js
// add properties to an object
Qween(object).sashayAway('cheezeburger.with.pickles');
```

```js
// set a deeply nested property by the Bro string
Qween(object).sashayAway('qween.props', 'high five');  // object.qween.props = 'high five'
```

### Calling nested functions
```js
Qween(object)
    .girlLook('method')
    .giveMeLife(function(returnVal) {
        console.log('object.method() returned ', returnVal);
    });
```

### Handling exceptions
```js
Qween(object)
    .holdMyHeels('method.name')
    .shesFierce(function(e) {
        console.log('error ' + e + ' happened.');
    });
```

### Qween-oleans
```js
Qween.YAAASSS // true;
Qween.NOGIRL   // false;
```

### Check for undefined
```js
if (Qween(someVar).throwShade() === Qween.YAAASSS) {
    // do stuff
}
```

### Get a list of object keys
```js
var object = {foo: 1, bar: 2};
Qween(object).youBetta();
// returns ['foo', 'bar'];
```

### Extending objects
```js
var obj1 = {foo: 'boo', bar: 'bar'},
    obj2 = {foo: 'bar', yes: 'no'};
Qween(obj1).bringIt(obj2);

// now obj1.foo == 'bar' and obj1.yes == 'no'
```

### Extending queertotype!
YAAASSS, extend me, Qween!

```js
var plugin = { foo: function() { whatever; }};
Qween.prototype.sashayAway(plugin);
```


## Installing
queertotype is NOT available via npm or bower, I didn't feel like packaging it.
```bash
# via npm
$ npm install queertotype

# via bower
$ bower install queertotype
```




## Author

Tyler Lynch, forked and queer'ed from Randy Hunt. Isn't there enough bro-ish shit in IT?

## License

The MIT License

Copyright © 2014

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


