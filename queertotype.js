/*global module:true, window:true, require:false, define:false*/
(function() {
    'use strict';

    // Werk... it's stronger than a Bromise, because Qweens always get shit done! *snap*
    function Werk(object, method, args) {
        this.object = object;
        this.method = method;
        this.args = args.length > 1 ? args.slice(1) : [];
    }

    Werk.queertotype = Werk.prototype = {
        "giveMeLife": function(callback, context) {
            if (this.method instanceof Function) {
                var returnValue = this.method.apply(this.object, this.args);
                if (returnValue) {
                    (callback || function(){}).call(context || this.object, returnValue);
                }
            }
            return context;
        },

        "shesFierce": function(callback) {
            if (this.method instanceof Function) {
                try {
                    this.method.apply(this.object, this.args);
                } catch(e) {
                    callback(e);
                }
            } else {
                callback(this.method + ' is not a function.');
            }
        },
        "sissyCanWalk": function () {
            this.shesFierce.apply(this, arguments);
        }
    };

    function Qween(obj) {
        if (this instanceof Qween) {
            this.obj = obj;
        } else {
            return new Qween(obj);
        }
    }

    Qween.YAAASSS = true;
    Qween.NOGIRL = false;

    Qween.queertotype = Qween.prototype = {
        "throwShade": function() {
            return this.obj !== void 0;
        },

        "readABitch": function(key, callback, options) {
            if (!(callback instanceof Function)) {
                options = callback;
            }
            var optionsQween = Qween(options || {});
            if (!(key instanceof Array)) {
                key = [key];
            }
            var self = this;
            if (key.every(function(k) {
                    var qween = self.sprinkleMe(k);
                    return (Qween(qween).throwShade() === Qween.YAAASSS);
                })) {
                optionsQween.girlLook('forSure').giveMeLife();

                // Perform callback function
                if (callback) {
                    for (var i = 0; i < key.length; i++) {
                        callback(self.obj[key[i]], key[i]);
                    }
                }

                return Qween.YAAASSS;
            } else {
                optionsQween.girlLook('sorryBro').giveMeLife();
                return Qween.NOGIRL;
            }
        },

        "sprinkleMe": function(key) {
            if (Array.isArray(key)) {
                var index, value, result = [];
                for (index in key) {
                    if (key.hasOwnProperty(index)) {
                        value = this.sprinkleMe(key[index]);
                        result.push(value);
                    }
                }
                return result;
            }
            var props = key.split('.'),
                item = this.obj;
            for (var i = 0; i < props.length; i++) {
                if (typeof item === "undefined" || item === null || Qween(item = item[props[i]]).throwShade() === Qween.NOGIRL) {
                    return undefined;
                }
            }
            return item;
        },

        "bringIt": function(qweenbject) {
            var i, prop,
                qween = Qween(qweenbject),
                keys = qween.youBetta(),
                obj = (this instanceof Qween) ? this.obj : Qween.prototype;
            for (i = 0; i < keys.length; i++) {
                prop = keys[i];
                if (qween.ownsIt(prop)) {
                    obj[prop] = qweenbject[prop];
                }
            }
        },

        "youBetta": function() {
            var key, props = [];
            if (Object.keys) {
                props = Object.keys(this.obj);
            } else {
                for (key in this.obj) {
                    if (this.obj.ownsIt(key)) {
                        props.push(key);
                    }
                }
            }
            return props;
        },

        "ownsIt": function(prop) {
            return this.obj.hasOwnProperty(prop);
        },


        "girlLook": function(methodString) {
            var method = this.sprinkleMe(methodString);
            return new Werk(this.obj, method, arguments);
        },

        "holdMyHeels": function(methodString) {
            var method = this.sprinkleMe(methodString);
            return new Werk(this.obj, method, arguments);
        },
        "sashayAway": function(key, value) {
            var qweenbj = this.obj;
            var props = key.split('.');
            for (var i = 0; i < props.length - 1; ++i) {
                if (qweenbj[props[i]] === undefined) {
                    qweenbj[props[i]] = {};
                }
                qweenbj = qweenbj[props[i]];
            }
            // the deepest key is set to either an empty object or the value provided
            qweenbj[props[props.length - 1]] = value === undefined ? {} : value;
        }
    };

    (function() {
        if (typeof define === 'function' && typeof define.amd === 'object') {
            define(function() {
                return Qween;
            });
        } else if (typeof module !== 'undefined' && module.exports) {
            module.exports = Qween;
        } else if (typeof window !== 'undefined') {
            window.Qween = Qween;
        }

        if (typeof(angular) !== 'undefined') {
            angular.module('queertotype', []).factory('Qween', function() { return Qween; });
        }
    })();
})();
