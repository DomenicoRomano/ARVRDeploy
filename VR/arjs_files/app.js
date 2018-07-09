(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _arjsConfig = require('./components/arjs-config');

var _arjsConfig2 = _interopRequireDefault(_arjsConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const roomplan = new Roomplan();
var arjsConfig = new _arjsConfig2.default(); // import Roomplan from './components/roomplan';

},{"./components/arjs-config":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ARJSConfig = function () {
  function ARJSConfig() {
    _classCallCheck(this, ARJSConfig);

    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    window.setTimeout(this.configure.bind(this), 2000);
  }

  _createClass(ARJSConfig, [{
    key: 'configure',
    value: function configure() {
      var _this = this;

      window.dispatchEvent(new Event('resize'));
      document.querySelector('.a-enter-vr').style.display = 'none';
      document.querySelector('a-scene').onclick = function () {
        window.dispatchEvent(new Event('resize'));
      };
      window.addEventListener('resize', function () {
        _this.setResizeTimeout(_this.windowWidth, _this.windowHeight);
      });
    }
  }, {
    key: 'setResizeTimeout',
    value: function setResizeTimeout(oldWidth, oldHeight) {
      if (oldWidth === window.innerWidth && oldHeight === window.innerHeight) return;
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      window.setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 700);
    }
  }]);

  return ARJSConfig;
}();

exports.default = ARJSConfig;

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvYXJqcy1jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBOzs7Ozs7QUFFQTtBQUNBLElBQU0sYUFBYSwwQkFBbkIsQyxDQUpBOzs7Ozs7Ozs7Ozs7O0lDQXFCLFU7QUFDbkIsd0JBQWM7QUFBQTs7QUFDWixTQUFLLFdBQUwsR0FBbUIsT0FBTyxVQUExQjtBQUNBLFNBQUssWUFBTCxHQUFvQixPQUFPLFdBQTNCOztBQUVBLFdBQU8sVUFBUCxDQUFrQixLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLElBQXBCLENBQWxCLEVBQTZDLElBQTdDO0FBQ0Q7Ozs7Z0NBRVc7QUFBQTs7QUFDVixhQUFPLGFBQVAsQ0FBcUIsSUFBSSxLQUFKLENBQVUsUUFBVixDQUFyQjtBQUNBLGVBQVMsYUFBVCxDQUF1QixhQUF2QixFQUFzQyxLQUF0QyxDQUE0QyxPQUE1QyxHQUFzRCxNQUF0RDtBQUNBLGVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxPQUFsQyxHQUE0QyxZQUFNO0FBQ2hELGVBQU8sYUFBUCxDQUFxQixJQUFJLEtBQUosQ0FBVSxRQUFWLENBQXJCO0FBQ0QsT0FGRDtBQUdBLGFBQU8sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0QyxjQUFLLGdCQUFMLENBQXNCLE1BQUssV0FBM0IsRUFBd0MsTUFBSyxZQUE3QztBQUNELE9BRkQ7QUFHRDs7O3FDQUVnQixRLEVBQVUsUyxFQUFXO0FBQ3BDLFVBQUksYUFBYSxPQUFPLFVBQXBCLElBQWtDLGNBQWMsT0FBTyxXQUEzRCxFQUF3RTtBQUN4RSxXQUFLLFdBQUwsR0FBbUIsT0FBTyxVQUExQjtBQUNBLFdBQUssWUFBTCxHQUFvQixPQUFPLFdBQTNCO0FBQ0EsYUFBTyxVQUFQLENBQWtCLFlBQU07QUFDdEIsZUFBTyxhQUFQLENBQXFCLElBQUksS0FBSixDQUFVLFFBQVYsQ0FBckI7QUFDRCxPQUZELEVBRUcsR0FGSDtBQUdEOzs7Ozs7a0JBMUJrQixVIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW1wb3J0IFJvb21wbGFuIGZyb20gJy4vY29tcG9uZW50cy9yb29tcGxhbic7XG5pbXBvcnQgQVJKU0NvbmZpZyBmcm9tICcuL2NvbXBvbmVudHMvYXJqcy1jb25maWcnO1xuXG4vLyBjb25zdCByb29tcGxhbiA9IG5ldyBSb29tcGxhbigpO1xuY29uc3QgYXJqc0NvbmZpZyA9IG5ldyBBUkpTQ29uZmlnKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBUkpTQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgd2luZG93LnNldFRpbWVvdXQodGhpcy5jb25maWd1cmUuYmluZCh0aGlzKSwgMjAwMCk7XG4gIH1cblxuICBjb25maWd1cmUoKSB7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtZW50ZXItdnInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Etc2NlbmUnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRSZXNpemVUaW1lb3V0KHRoaXMud2luZG93V2lkdGgsIHRoaXMud2luZG93SGVpZ2h0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFJlc2l6ZVRpbWVvdXQob2xkV2lkdGgsIG9sZEhlaWdodCkge1xuICAgIGlmIChvbGRXaWR0aCA9PT0gd2luZG93LmlubmVyV2lkdGggJiYgb2xkSGVpZ2h0ID09PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHJldHVybjtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XG4gICAgfSwgNzAwKTtcbiAgfVxufVxuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p6Y21NdmFuTXZZWEJ3TG1weklpd2ljM0pqTDJwekwyTnZiWEJ2Ym1WdWRITXZZWEpxY3kxamIyNW1hV2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenRCUTBOQk96czdPenM3UVVGRlFUdEJRVU5CTEVsQlFVMHNZVUZCWVN3d1FrRkJia0lzUXl4RFFVcEJPenM3T3pzN096czdPenM3TzBsRFFYRkNMRlU3UVVGRGJrSXNkMEpCUVdNN1FVRkJRVHM3UVVGRFdpeFRRVUZMTEZkQlFVd3NSMEZCYlVJc1QwRkJUeXhWUVVFeFFqdEJRVU5CTEZOQlFVc3NXVUZCVEN4SFFVRnZRaXhQUVVGUExGZEJRVE5DT3p0QlFVVkJMRmRCUVU4c1ZVRkJVQ3hEUVVGclFpeExRVUZMTEZOQlFVd3NRMEZCWlN4SlFVRm1MRU5CUVc5Q0xFbEJRWEJDTEVOQlFXeENMRVZCUVRaRExFbEJRVGRETzBGQlEwUTdPenM3WjBOQlJWYzdRVUZCUVRzN1FVRkRWaXhoUVVGUExHRkJRVkFzUTBGQmNVSXNTVUZCU1N4TFFVRktMRU5CUVZVc1VVRkJWaXhEUVVGeVFqdEJRVU5CTEdWQlFWTXNZVUZCVkN4RFFVRjFRaXhoUVVGMlFpeEZRVUZ6UXl4TFFVRjBReXhEUVVFMFF5eFBRVUUxUXl4SFFVRnpSQ3hOUVVGMFJEdEJRVU5CTEdWQlFWTXNZVUZCVkN4RFFVRjFRaXhUUVVGMlFpeEZRVUZyUXl4UFFVRnNReXhIUVVFMFF5eFpRVUZOTzBGQlEyaEVMR1ZCUVU4c1lVRkJVQ3hEUVVGeFFpeEpRVUZKTEV0QlFVb3NRMEZCVlN4UlFVRldMRU5CUVhKQ08wRkJRMFFzVDBGR1JEdEJRVWRCTEdGQlFVOHNaMEpCUVZBc1EwRkJkMElzVVVGQmVFSXNSVUZCYTBNc1dVRkJUVHRCUVVOMFF5eGpRVUZMTEdkQ1FVRk1MRU5CUVhOQ0xFMUJRVXNzVjBGQk0wSXNSVUZCZDBNc1RVRkJTeXhaUVVFM1F6dEJRVU5FTEU5QlJrUTdRVUZIUkRzN08zRkRRVVZuUWl4UkxFVkJRVlVzVXl4RlFVRlhPMEZCUTNCRExGVkJRVWtzWVVGQllTeFBRVUZQTEZWQlFYQkNMRWxCUVd0RExHTkJRV01zVDBGQlR5eFhRVUV6UkN4RlFVRjNSVHRCUVVONFJTeFhRVUZMTEZkQlFVd3NSMEZCYlVJc1QwRkJUeXhWUVVFeFFqdEJRVU5CTEZkQlFVc3NXVUZCVEN4SFFVRnZRaXhQUVVGUExGZEJRVE5DTzBGQlEwRXNZVUZCVHl4VlFVRlFMRU5CUVd0Q0xGbEJRVTA3UVVGRGRFSXNaVUZCVHl4aFFVRlFMRU5CUVhGQ0xFbEJRVWtzUzBGQlNpeERRVUZWTEZGQlFWWXNRMEZCY2tJN1FVRkRSQ3hQUVVaRUxFVkJSVWNzUjBGR1NEdEJRVWRFT3pzN096czdhMEpCTVVKclFpeFZJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z1pTaDBMRzRzY2lsN1puVnVZM1JwYjI0Z2N5aHZMSFVwZTJsbUtDRnVXMjlkS1h0cFppZ2hkRnR2WFNsN2RtRnlJR0U5ZEhsd1pXOW1JSEpsY1hWcGNtVTlQVndpWm5WdVkzUnBiMjVjSWlZbWNtVnhkV2x5WlR0cFppZ2hkU1ltWVNseVpYUjFjbTRnWVNodkxDRXdLVHRwWmlocEtYSmxkSFZ5YmlCcEtHOHNJVEFwTzNaaGNpQm1QVzVsZHlCRmNuSnZjaWhjSWtOaGJtNXZkQ0JtYVc1a0lHMXZaSFZzWlNBblhDSXJieXRjSWlkY0lpazdkR2h5YjNjZ1ppNWpiMlJsUFZ3aVRVOUVWVXhGWDA1UFZGOUdUMVZPUkZ3aUxHWjlkbUZ5SUd3OWJsdHZYVDE3Wlhod2IzSjBjenA3ZlgwN2RGdHZYVnN3WFM1allXeHNLR3d1Wlhod2IzSjBjeXhtZFc1amRHbHZiaWhsS1h0MllYSWdiajEwVzI5ZFd6RmRXMlZkTzNKbGRIVnliaUJ6S0c0L2JqcGxLWDBzYkN4c0xtVjRjRzl5ZEhNc1pTeDBMRzRzY2lsOWNtVjBkWEp1SUc1YmIxMHVaWGh3YjNKMGMzMTJZWElnYVQxMGVYQmxiMllnY21WeGRXbHlaVDA5WENKbWRXNWpkR2x2Ymx3aUppWnlaWEYxYVhKbE8yWnZjaWgyWVhJZ2J6MHdPMjg4Y2k1c1pXNW5kR2c3YnlzcktYTW9jbHR2WFNrN2NtVjBkWEp1SUhOOUtTSXNJaTh2SUdsdGNHOXlkQ0JTYjI5dGNHeGhiaUJtY205dElDY3VMMk52YlhCdmJtVnVkSE12Y205dmJYQnNZVzRuTzF4dWFXMXdiM0owSUVGU1NsTkRiMjVtYVdjZ1puSnZiU0FuTGk5amIyMXdiMjVsYm5SekwyRnlhbk10WTI5dVptbG5KenRjYmx4dUx5OGdZMjl1YzNRZ2NtOXZiWEJzWVc0Z1BTQnVaWGNnVW05dmJYQnNZVzRvS1R0Y2JtTnZibk4wSUdGeWFuTkRiMjVtYVdjZ1BTQnVaWGNnUVZKS1UwTnZibVpwWnlncE8xeHVJaXdpWlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FWSktVME52Ym1acFp5QjdYRzRnSUdOdmJuTjBjblZqZEc5eUtDa2dlMXh1SUNBZ0lIUm9hWE11ZDJsdVpHOTNWMmxrZEdnZ1BTQjNhVzVrYjNjdWFXNXVaWEpYYVdSMGFEdGNiaUFnSUNCMGFHbHpMbmRwYm1SdmQwaGxhV2RvZENBOUlIZHBibVJ2ZHk1cGJtNWxja2hsYVdkb2REdGNibHh1SUNBZ0lIZHBibVJ2ZHk1elpYUlVhVzFsYjNWMEtIUm9hWE11WTI5dVptbG5kWEpsTG1KcGJtUW9kR2hwY3lrc0lESXdNREFwTzF4dUlDQjlYRzVjYmlBZ1kyOXVabWxuZFhKbEtDa2dlMXh1SUNBZ0lIZHBibVJ2ZHk1a2FYTndZWFJqYUVWMlpXNTBLRzVsZHlCRmRtVnVkQ2duY21WemFYcGxKeWtwTzF4dUlDQWdJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NWhMV1Z1ZEdWeUxYWnlKeWt1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ2R1YjI1bEp6dGNiaUFnSUNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2RoTFhOalpXNWxKeWt1YjI1amJHbGpheUE5SUNncElEMCtJSHRjYmlBZ0lDQWdJSGRwYm1SdmR5NWthWE53WVhSamFFVjJaVzUwS0c1bGR5QkZkbVZ1ZENnbmNtVnphWHBsSnlrcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KM0psYzJsNlpTY3NJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lIUm9hWE11YzJWMFVtVnphWHBsVkdsdFpXOTFkQ2gwYUdsekxuZHBibVJ2ZDFkcFpIUm9MQ0IwYUdsekxuZHBibVJ2ZDBobGFXZG9kQ2s3WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibHh1SUNCelpYUlNaWE5wZW1WVWFXMWxiM1YwS0c5c1pGZHBaSFJvTENCdmJHUklaV2xuYUhRcElIdGNiaUFnSUNCcFppQW9iMnhrVjJsa2RHZ2dQVDA5SUhkcGJtUnZkeTVwYm01bGNsZHBaSFJvSUNZbUlHOXNaRWhsYVdkb2RDQTlQVDBnZDJsdVpHOTNMbWx1Ym1WeVNHVnBaMmgwS1NCeVpYUjFjbTQ3WEc0Z0lDQWdkR2hwY3k1M2FXNWtiM2RYYVdSMGFDQTlJSGRwYm1SdmR5NXBibTVsY2xkcFpIUm9PMXh1SUNBZ0lIUm9hWE11ZDJsdVpHOTNTR1ZwWjJoMElEMGdkMmx1Wkc5M0xtbHVibVZ5U0dWcFoyaDBPMXh1SUNBZ0lIZHBibVJ2ZHk1elpYUlVhVzFsYjNWMEtDZ3BJRDArSUh0Y2JpQWdJQ0FnSUhkcGJtUnZkeTVrYVhOd1lYUmphRVYyWlc1MEtHNWxkeUJGZG1WdWRDZ25jbVZ6YVhwbEp5a3BPMXh1SUNBZ0lIMHNJRGN3TUNrN1hHNGdJSDFjYm4xY2JpSmRmUT09In0=
