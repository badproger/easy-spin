'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spin = function () {
    function Spin(input) {
        _classCallCheck(this, Spin);

        if (document.querySelectorAll('' + input).length > 0) {
            this.inputs = document.querySelectorAll('' + input);
            this.onInit();
        } else {
            return;
        }
    }

    _createClass(Spin, [{
        key: 'onInit',
        value: function onInit() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.parentElement.parentElement.querySelector('.button-minus') !== null) {
                        item.parentElement.parentElement.querySelector('.button-minus').addEventListener('click', this.onDownClick);
                    }
                    if (item.parentElement.parentElement.querySelector('.button-plus') !== null) {
                        item.parentElement.parentElement.querySelector('.button-plus').addEventListener('click', this.onUpClick);
                    }
                    item.addEventListener('change', this.onChange);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'onUpClick',
        value: function onUpClick() {
            var input = this.parentElement.querySelector('input'),
                value = parseFloat(input.value),
                event = new CustomEvent('change');
            value += 1;
            input.value = value;
            input.dispatchEvent(event);
        }
    }, {
        key: 'onDownClick',
        value: function onDownClick() {
            var input = this.parentElement.querySelector('input'),
                value = parseFloat(input.value),
                event = new CustomEvent('change');
            value -= 1;
            input.value = value;
            input.dispatchEvent(event);
        }
    }, {
        key: 'onChange',
        value: function onChange() {
            if (this.value < 1) {
                this.value = 1;
            }
        }
    }]);

    return Spin;
}();

new Spin('[name="count"]');