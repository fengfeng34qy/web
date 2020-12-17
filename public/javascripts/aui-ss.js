/*!
 * ==============================================================
 * name: AUI-SS
 * version: 1.0.0-beta
 * update-date: 2018年1月12日
 * update-description: 此版本为测试发布版本
 * Description: Agree AST 4.0 自助框架
 * product: Agree AST 4.0 Self-Service Framework
 * company: 赞同科技股份有限公司
 * copyright: Copyright © 赞同科技股份有限公司 2017
 * ==============================================================
 */
define("AUI", ["vue"], function(__WEBPACK_EXTERNAL_MODULE_5__) {
	return function(g) {
		function e(t) {
			if (I[t]) return I[t].exports;
			var n = I[t] = {
				i: t,
				l: !1,
				exports: {}
			};
			return g[t].call(n.exports, n, n.exports, e), n.l = !0, n.exports
		}
		var I = {};
		return e.m = g, e.c = I, e.i = function(g) {
			return g
		}, e.d = function(g, I, t) {
			e.o(g, I) || Object.defineProperty(g, I, {
				configurable: !1,
				enumerable: !0,
				get: t
			})
		}, e.n = function(g) {
			var I = g && g.__esModule ?
			function() {
				return g.
			default
			} : function() {
				return g
			};
			return e.d(I, "a", I), I
		}, e.o = function(g, e) {
			return Object.prototype.hasOwnProperty.call(g, e)
		}, e.p = "/dist/", e(e.s = 80)
	}([function(g, e) {
		g.exports = function(g, e, I, t) {
			var n, l = g = g || {},
				C = typeof g.
			default;
			"object" !== C && "function" !== C || (n = g, l = g.
		default);
			var A = "function" == typeof l ? l.options:
			l;
			if (e && (A.render = e.render, A.staticRenderFns = e.staticRenderFns), I && (A._scopeId = I), t) {
				var i = Object.create(A.computed || null);
				Object.keys(t).forEach(function(g) {
					var e = t[g];
					i[g] = function() {
						return e
					}
				}), A.computed = i
			}
			return {
				esModule: n,
				exports: l,
				options: A
			}
		}
	}, function(g, e, I) {
		"use strict";
		e.a = {
			getViewportOffset: function(g) {
				var e = document.documentElement,
					I = void 0 !== g.getBoundingClientRect ? g.getBoundingClientRect() : 0,
					t = (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
					n = (window.pageYOffset || e.scrollTop) - (e.clientTop || 0),
					l = I.left + window.pageXOffset,
					C = I.top + window.pageYOffset,
					A = l - t,
					i = C - n;
				return {
					left: A,
					top: i,
					right: window.document.documentElement.clientWidth - I.width - A,
					bottom: window.document.documentElement.clientHeight - I.height - i
				}
			},
			bind: function(g, e, I) {
				g && "undefined" !== g && e && I && (e = "mousewheel" === e ? void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll" : e, document.attachEvent ? g.attachEvent("on" + e, I) : g.addEventListener(e, I, !1))
			},
			unbind: function(g, e, I) {
				if (g && "undefined" !== g && e && I) {
					e = "mousewheel" === e ? void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll" : e;
					var t = [];
					Array.isArray(I) && I.length > 0 ? t = I : t.push(I), document.removeEventListener ? t.forEach(function(I) {
						g.removeEventListener(e, I, !1)
					}) : t.forEach(function(I) {
						g.removeEventListener("on" + e, I)
					})
				}
			},
			isHtml: function(g) {
				return /<[a-z][\s\S]*>/i.test(g)
			},
			getDisplayValue: function(g) {
				if (g) return g.currentStyle ? g.currentStyle.display : getComputedStyle(g, null).display
			},
			hasHorizontalScrollBar: function(g) {
				if (g) return g.scrollWidth > g.clientWidth
			},
			hasVerticalScrollBar: function(g) {
				if (g) return g.scrollHeight > g.clientHeight
			},
			getScrollbarWidth: function() {
				var g = document.createElement("div");
				g.className = "el-scrollbar__wrap", g.style.visibility = "hidden", g.style.width = "100px", g.style.position = "absolute", g.style.top = "-9999px", document.body.appendChild(g);
				var e = g.offsetWidth;
				g.style.overflow = "scroll";
				var I = document.createElement("div");
				I.style.width = "100%", g.appendChild(I);
				var t = I.offsetWidth;
				return g.parentNode.removeChild(g), e - t
			}
		}
	}, function(g, e, I) {
		"use strict";
		e.a = {
			methods: {
				$dispatch: function(g, e, I) {
					for (var t = this.$parent || this.$root, n = t.$options.name; t && (!n || n !== g);)(t = t.$parent) && (n = t.$options.name);
					t && t.$emit.apply(t, [e].concat(I))
				},
				$broadcast: function(g, e, I) {
					this.$children.forEach(function(t) {
						t.$options.componentName === g ? t.$emit.apply(t, [e].concat(I)) : broadcast.apply(t, [g, e].concat([I]))
					})
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(g) {
			return typeof g
		} : function(g) {
			return g && "function" == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g
		};
		e.a = {
			debounce: function(g, e, I) {
				var t = void 0;
				return function() {
					var n = this,
						l = arguments,
						C = function() {
							t = null, I || g.apply(n, l)
						},
						A = I && !t;
					clearTimeout(t), t = setTimeout(C, e), A && g.apply(n, l)
				}
			},
			isArray: function(g) {
				return Array.isArray(g)
			},
			isFunction: function(g) {
				return "function" == typeof g
			},
			isString: function(g) {
				return "string" == typeof g || g instanceof String
			},
			isObjectNotNull: function(g) {
				return null !== g && "object" === (void 0 === g ? "undefined" : t(g))
			},
			uuidv4: function() {
				return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(g) {
					return (g ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> g / 4).toString(16)
				})
			}
		}
	}, function(g, e, I) {
		"use strict";
		var t = I(11);
		I.d(e, "a", function() {
			return t.a
		})
	}, function(g, e) {
		g.exports = __WEBPACK_EXTERNAL_MODULE_5__
	}, function(g, e) {
		g.exports = function() {
			var g = [];
			return g.toString = function() {
				for (var g = [], e = 0; e < this.length; e++) {
					var I = this[e];
					I[2] ? g.push("@media " + I[2] + "{" + I[1] + "}") : g.push(I[1])
				}
				return g.join("")
			}, g.i = function(e, I) {
				"string" == typeof e && (e = [
					[null, e, ""]
				]);
				for (var t = {}, n = 0; n < this.length; n++) {
					var l = this[n][0];
					"number" == typeof l && (t[l] = !0)
				}
				for (n = 0; n < e.length; n++) {
					var C = e[n];
					"number" == typeof C[0] && t[C[0]] || (I && !C[2] ? C[2] = I : I && (C[2] = "(" + C[2] + ") and (" + I + ")"), g.push(C))
				}
			}, g
		}
	}, function(g, e) {
		g.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAAXNSR0IArs4c6QAAAP9JREFUOBGllNEKgkAQRTP6mr6oCIIggiAIerA0LQutIAiCIOjb+pRqu4sol3kYcloYvTJ7zvig22phOed6qMznxgtgH/VC+bW1CJYlW18Ti2Rd42WILJKNkIQWyU5IFhZJISRzi+QkJDOL5CwkU4vkQpIP8sQiuQrJ2CK5CcmokQRwgLqT5I08tEgeQjJo/2oJgsBh75P2e7ZLz3rE5JCm+3jUCepis/xjD9TWI+CVH0er0AnqAooI9DGnth6xORbwXieoC1AeMDtq6xFwIiZnOkFdgOk/sDzSNuTWI6ZuxeRUJ6gLMBNwo2O9Qy4fE3zzv38oFYw3yFFx9dzk/gWkYdhXHuM9twAAAABJRU5ErkJggg=="
	}, function(g, e, I) {
		function t(g) {
			for (var e = 0; e < g.length; e++) {
				var I = g[e],
					t = c[I.id];
				if (t) {
					t.refs++;
					for (var n = 0; n < t.parts.length; n++) t.parts[n](I.parts[n]);
					for (; n < I.parts.length; n++) t.parts.push(l(I.parts[n]));
					t.parts.length > I.parts.length && (t.parts.length = I.parts.length)
				} else {
					for (var C = [], n = 0; n < I.parts.length; n++) C.push(l(I.parts[n]));
					c[I.id] = {
						id: I.id,
						refs: 1,
						parts: C
					}
				}
			}
		}
		function n() {
			var g = document.createElement("style");
			return g.type = "text/css", u.appendChild(g), g
		}
		function l(g) {
			var e, I, t = document.querySelector('style[data-vue-ssr-id~="' + g.id + '"]');
			if (t) {
				if (o) return b;
				t.parentNode.removeChild(t)
			}
			if (r) {
				var l = d++;
				t = s || (s = n()), e = C.bind(null, t, l, !1), I = C.bind(null, t, l, !0)
			} else t = n(), e = A.bind(null, t), I = function() {
				t.parentNode.removeChild(t)
			};
			return e(g), function(t) {
				if (t) {
					if (t.css === g.css && t.media === g.media && t.sourceMap === g.sourceMap) return;
					e(g = t)
				} else I()
			}
		}
		function C(g, e, I, t) {
			var n = I ? "" : t.css;
			if (g.styleSheet) g.styleSheet.cssText = B(e, n);
			else {
				var l = document.createTextNode(n),
					C = g.childNodes;
				C[e] && g.removeChild(C[e]), C.length ? g.insertBefore(l, C[e]) : g.appendChild(l)
			}
		}
		function A(g, e) {
			var I = e.css,
				t = e.media,
				n = e.sourceMap;
			if (t && g.setAttribute("media", t), n && (I += "\n/*# sourceURL=" + n.sources[0] + " */", I += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"), g.styleSheet) g.styleSheet.cssText = I;
			else {
				for (; g.firstChild;) g.removeChild(g.firstChild);
				g.appendChild(document.createTextNode(I))
			}
		}
		var i = "undefined" != typeof document;
		if ("undefined" != typeof DEBUG && DEBUG && !i) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
		var a = I(189),
			c = {},
			u = i && (document.head || document.getElementsByTagName("head")[0]),
			s = null,
			d = 0,
			o = !1,
			b = function() {},
			r = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
		g.exports = function(g, e, I) {
			o = I;
			var n = a(g, e);
			return t(n), function(e) {
				for (var I = [], l = 0; l < n.length; l++) {
					var C = n[l],
						A = c[C.id];
					A.refs--, I.push(A)
				}
				e ? (n = a(g, e), t(n)) : n = [];
				for (var l = 0; l < I.length; l++) {
					var A = I[l];
					if (0 === A.refs) {
						for (var i = 0; i < A.parts.length; i++) A.parts[i]();
						delete c[A.id]
					}
				}
			}
		};
		var B = function() {
				var g = [];
				return function(e, I) {
					return g[e] = I, g.filter(Boolean).join("\n")
				}
			}()
	}, function(g, e) {
		var I;
		I = function() {
			return this
		}();
		try {
			I = I || Function("return this")() || (0, eval)("this")
		} catch (g) {
			"object" == typeof window && (I = window)
		}
		g.exports = I
	}, function(g, e, I) {
		"use strict";
		e.a = {
			bind: function(g, e, I) {
				var t = function(t) {
						I.context && !g.contains(t.target) && (e.expression ? I.context[g["@@clickoutsideContext"].methodName](t) : g["@@clickoutsideContext"].bindingFn(t))
					};
				g["@@clickoutsideContext"] = {
					documentHandler: t,
					methodName: e.expression,
					bindingFn: e.value
				}, setTimeout(function() {
					document.addEventListener("click", t)
				}, 0)
			},
			update: function(g, e) {
				g["@@clickoutsideContext"].methodName = e.expression, g["@@clickoutsideContext"].bindingFn = e.value
			},
			unbind: function(g) {
				document.removeEventListener("click", g["@@clickoutsideContext"].documentHandler)
			}
		}
	}, function(g, e, I) {
		"use strict";
		var t = I(113),
			n = I.n(t),
			l = I(5),
			C = I.n(l),
			A = I(3),
			i = function(g, e) {
				var I = C.a.component(n.a.name, n.a),
					t = new I;
				t.$props.content = g, A.a.isObjectNotNull(e) || (e = {});
				var l = void 0;
				A.a.isString(e.containerId) && (l = document.getElementById(e.containerId)), l = l || document.body, t.$contianer = l;
				var i = !0 === e.closeContentModalRestPart;
				return t.$props.closeContentModalRestPart = i, t.$mount(), l.appendChild(t.$el), t.$data.dialogBoxContentArgs = e.dialogBoxContentArgs, t.$data.visible = !0, t.$data.isRealClose = !1, t
			},
			a = {},
			c = {
				showNonAwait: function(g, e) {
					var I = i(g, e);
					I.$on("doRealClose", function() {
						I.$data.isRealClose = !0, c.close(I)
					});
					var t = A.a.uuidv4();
					return I.$uuid = t, a[t] = I, I
				},
				showAwait: function(g, e) {
					var I = i(g, e);
					return new Promise(function(g) {
						I.$on("doRealClose", function(e) {
							I.$data.isRealClose = !0, c.close(I), g(e)
						})
					})
				},
				getAvailableDialog: function(g) {
					if (!g) throw new Error("[Dialog]getAvailableDialog:对话框标识符为空");
					if (!A.a.isString(g)) throw new Error("[Dialog]getAvailableDialog:对话框标识符不是字符串");
					return a[g]
				},
				close: function(g) {
					if (!g) throw new Error("[Dialog]close:对话框标识符为空");
					var e = void 0;
					if (e = A.a.isString(g) ? a[g] : g.$parent || g) if (e.$data.isRealClose) {
						e.$destroy(), e.$contianer.removeChild(e.$el);
						var I = e.$uuid;
						I && delete a[I], e = null
					} else e.onClose(), e.$data.visible = !1
				}
			};
		e.a = c
	}, function(g, e, I) {
		"use strict";
		e.a = {
			sizeMaps: {
				large: 40,
				middle: 32,
				small: 24
			},
			sizeMapDefault: 32
		}
	}, function(g, e, I) {
		"use strict";
		e.a = {
			email: {
				test: /.+@.+\..+/,
				errorMsg: "邮箱格式错误"
			},
			required: {
				test: function(g) {
					return !!g
				},
				errorMsg: "必填项"
			},
			mobilePhoneNumber: {
				test: /^1[34578]\d{9}$/,
				errorMsg: "手机号码格式错误"
			},
			zip: {
				test: /^[1-9][0-9]{5}$/,
				errorMsg: "邮编格式错误"
			},
			add: function(g) {
				var e = this;
				Object.keys(g).forEach(function(I) {
					e[I] ? console.warn("[validator] rule exists:", I) : e[I] = g[I]
				})
			}
		}
	}, function(g, e) {
		g.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAAXNSR0IArs4c6QAAAQdJREFUOBGdlFkKwjAURVVciovSH0EQBEEQxHmosx+CIAjuzNWo9aRYCBdp8nzwaNLec5IWmlLpj0rTdEbvHVq18oBzmAxm/KxYBACLHLZwWRZ4SfuVREugVj7JeGmBE4Hda8QV4Fpg9wHjCnAj8CyOJAW4FXhqgXcCTyzwQeCxBT4KPLLAJ4GHFli3Hb8yq7h/4UG/vRVr7KbszcNDgCb98l7j/o+kBfT2JLfw0pIAbovkKpHwFEFHJJcwJQkEXdqvs0TCU+ieb2B8ClOSAOqLJDsLJVY8RTAQyaaY+PEUwUgkqx+x4lsIpiKJP51yNYKFSEz/TeZBkHwlT66NXG66ArrDtu6gD/kI0Eo5MSFmAAAAAElFTkSuQmCC"
	}, function(g, e, I) {
		var t = I(0)(I(62), I(177), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		"use strict";
		var t = I(105),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(106),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(107),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(108),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		});
		var l = I(109),
			C = I.n(l);
		I.d(e, "b", function() {
			return C.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(110),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(111),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(112),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(115),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		});
		var l = I(114),
			C = I.n(l);
		I.d(e, "b", function() {
			return C.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(116),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(117),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(118),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(119),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		});
		var l = I(120),
			C = I.n(l);
		I.d(e, "b", function() {
			return C.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(122),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		});
		var l = I(121),
			C = I.n(l);
		I.d(e, "b", function() {
			return C.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(123),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		});
		var l = I(124),
			C = I.n(l);
		I.d(e, "b", function() {
			return C.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(125),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		});
		var l = I(126),
			C = I.n(l);
		I.d(e, "b", function() {
			return C.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(128),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		});
		var l = I(92);
		I.d(e, "b", function() {
			return l.a
		});
		var C = I(15),
			A = I.n(C);
		I.d(e, "c", function() {
			return A.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(131),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(132),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(133),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(143),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(144),
			n = I.n(t);
		I.d(e, "a", function() {
			return n.a
		})
	}, function(g, e, I) {
		"use strict";
		var t = I(93),
			n = I(13);
		e.a = {
			Mixin: t.a,
			Rules: n.a
		}
	}, function(module, exports, __webpack_require__) {
		!
		function(g, e) {
			module.exports = e()
		}(0, function() {
			return function(g) {
				function e(t) {
					if (I[t]) return I[t].exports;
					var n = I[t] = {
						i: t,
						l: !1,
						exports: {}
					};
					return g[t].call(n.exports, n, n.exports, e), n.l = !0, n.exports
				}
				var I = {};
				return e.m = g, e.c = I, e.d = function(g, I, t) {
					e.o(g, I) || Object.defineProperty(g, I, {
						configurable: !1,
						enumerable: !0,
						get: t
					})
				}, e.n = function(g) {
					var I = g && g.__esModule ?
					function() {
						return g.
					default
					} : function() {
						return g
					};
					return e.d(I, "a", I), I
				}, e.o = function(g, e) {
					return Object.prototype.hasOwnProperty.call(g, e)
				}, e.p = "", e(e.s = 4)
			}([function(module, exports, __webpack_require__) {
				"use strict";
			}, function(module, exports, __webpack_require__) {
				"use strict";
				eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Helper functions for autoNumeric.js\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright © 2016 Alexandre Bonneau\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The MIT License (http://www.opensource.org/licenses/mit-license.php)\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Permission is hereby granted, free of charge, to any person\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtaining a copy of this software and associated documentation\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * files (the \"Software\"), to deal in the Software without\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * restriction, including without limitation the rights to use,\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * copy, modify, merge, publish, distribute, sub license, and/or sell\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * copies of the Software, and to permit persons to whom the\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Software is furnished to do so, subject to the following\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * conditions:\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The above copyright notice and this permission notice shall be\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * included in all copies or substantial portions of the Software.\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OTHER DEALINGS IN THE SOFTWARE.\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */\n\nvar _AutoNumericEnum = __webpack_require__(2);\n\nvar _AutoNumericEnum2 = _interopRequireDefault(_AutoNumericEnum);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * Static class that holds all the helper functions autoNumeric uses.\n * Note : none of the functions in there are aware of any autoNumeric internals (which means there are no references to autoNumeric-specific info like options names or data structures).\n */\nvar AutoNumericHelper = function () {\n    function AutoNumericHelper() {\n        _classCallCheck(this, AutoNumericHelper);\n    }\n\n    _createClass(AutoNumericHelper, null, [{\n        key: 'isNull',\n\n        /**\n         * Return `true` if the `value` is null\n         *\n         * @static\n         * @param {*} value The value to test\n         * @returns {boolean} Return `true` if the `value` is null, FALSE otherwise\n         */\n        value: function isNull(value) {\n            return value === null;\n        }\n\n        /**\n         * Return `true` if the `value` is undefined\n         *\n         * @static\n         * @param {*} value The value to test\n         * @returns {boolean} Return `true` if the `value` is undefined, FALSE otherwise\n         */\n\n    }, {\n        key: 'isUndefined',\n        value: function isUndefined(value) {\n            return value === void 0;\n        }\n\n        /**\n         * Return `true` if the `value` is undefined, null or empty\n         *\n         * @param {*} value\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isUndefinedOrNullOrEmpty',\n        value: function isUndefinedOrNullOrEmpty(value) {\n            return value === null || value === void 0 || '' === value;\n        }\n\n        /**\n         * Return `true` if the given parameter is a String\n         *\n         * @param {*} str\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isString',\n        value: function isString(str) {\n            return typeof str === 'string' || str instanceof String;\n        }\n        /**\n         * Return `true` if the `value` is an empty string ''\n         *\n         * @static\n         * @param {*} value The value to test\n         * @returns {boolean} Return `true` if the `value` is an empty string '', FALSE otherwise\n         */\n\n    }, {\n        key: 'isEmptyString',\n        value: function isEmptyString(value) {\n            return value === '';\n        }\n\n        /**\n         * Return `true` if the parameter is a boolean\n         *\n         * @static\n         * @param {*} value\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isBoolean',\n        value: function isBoolean(value) {\n            return typeof value === 'boolean';\n        }\n\n        /**\n         * Return `true` if the parameter is a string 'true' or 'false'\n         *\n         * This function accepts any cases for those strings.\n         * @param {string} value\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isTrueOrFalseString',\n        value: function isTrueOrFalseString(value) {\n            var lowercaseValue = String(value).toLowerCase();\n            return lowercaseValue === 'true' || lowercaseValue === 'false';\n        }\n\n        /**\n         * Return `true` if the parameter is an object\n         *\n         * @param {*} reference\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isObject',\n        value: function isObject(reference) {\n            return (typeof reference === 'undefined' ? 'undefined' : _typeof(reference)) === 'object' && reference !== null && !Array.isArray(reference);\n        }\n\n        /**\n         * Return `true` if the given object is empty\n         * cf. http://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object and http://jsperf.com/empty-object-test\n         *\n         * @param {object} obj\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isEmptyObj',\n        value: function isEmptyObj(obj) {\n            for (var prop in obj) {\n                if (obj.hasOwnProperty(prop)) {\n                    return false;\n                }\n            }\n            return true;\n        }\n\n        /**\n         * Return `true` if the parameter is a real number (and not a numeric string).\n         *\n         * @param {*} n\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isNumberStrict',\n        value: function isNumberStrict(n) {\n            return typeof n === 'number';\n        }\n\n        /**\n         * Return `true` if the parameter is a number (or a number written as a string).\n         *\n         * @param {*} n\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isNumber',\n        value: function isNumber(n) {\n            return !this.isArray(n) && !isNaN(parseFloat(n)) && isFinite(n);\n        }\n\n        /**\n         * Return `true` if the parameter is a number (or a number written as a string).\n         * This version also accepts Arabic and Persian numbers.\n         *\n         * @param {*} n\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isNumberOrArabic',\n        value: function isNumberOrArabic(n) {\n            var latinConvertedNumber = this.arabicToLatinNumbers(n, false, true, true);\n            return this.isNumber(latinConvertedNumber);\n        }\n\n        /**\n         * Return `true` if the parameter is an integer (and not a float).\n         *\n         * @param {*} n\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isInt',\n        value: function isInt(n) {\n            return typeof n === 'number' && parseFloat(n) === parseInt(n, 10) && !isNaN(n);\n        }\n\n        /**\n         * Return `true` if the parameter is a function.\n         *\n         * @param {function} func\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isFunction',\n        value: function isFunction(func) {\n            return typeof func === 'function';\n        }\n\n        /**\n         * Return `true` if the current browser is the obsolete Internet Explorer 11 (IE11) one\n         * cf. https://stackoverflow.com/a/21825207/2834898\n         *\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isIE11',\n        value: function isIE11() {\n            // noinspection JSUnresolvedVariable\n            return !!window.MSInputMethodContext && !!document.documentMode;\n        }\n\n        /**\n         * Return `true` is the string `str` contains the string `needle`\n         * Note: this function does not coerce the parameters types\n         *\n         * @param {string} str\n         * @param {string} needle\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'contains',\n        value: function contains(str, needle) {\n            //TODO Use `Array.prototype.includes()` when available (cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)\n            if (!this.isString(str) || !this.isString(needle) || str === '' || needle === '') {\n                return false;\n            }\n\n            return str.indexOf(needle) !== -1;\n        }\n\n        /**\n         * Return `true` if the `needle` is in the array\n         *\n         * @param {*} needle\n         * @param {Array} array\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isInArray',\n        value: function isInArray(needle, array) {\n            if (!this.isArray(array) || array === [] || this.isUndefined(needle)) {\n                return false;\n            }\n\n            return array.indexOf(needle) !== -1;\n        }\n\n        /**\n         * Return `true` if the parameter is an Array\n         * //TODO Replace this by the default `Array.isArray()` function?\n         *\n         * @param {*} arr\n         * @throws Error\n         * @returns {*|boolean}\n         */\n\n    }, {\n        key: 'isArray',\n        value: function isArray(arr) {\n            if (Object.prototype.toString.call([]) === '[object Array]') {\n                // Make sure an array has a class attribute of [object Array]\n                // Test passed, now check if is an Array\n                return Array.isArray(arr) || (typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) === 'object' && Object.prototype.toString.call(arr) === '[object Array]';\n            } else {\n                throw new Error('toString message changed for Object Array'); // Verify that the string returned by `toString` does not change in the future (cf. http://stackoverflow.com/a/8365215)\n            }\n        }\n\n        /**\n         * Return `true` if the parameter is a DOM element\n         * cf. http://stackoverflow.com/a/4754104/2834898\n         *\n         * @param {*} obj\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isElement',\n        value: function isElement(obj) {\n            // return !!(obj && obj.nodeName);\n            // return obj && 'nodeType' in obj;\n            // return obj instanceof Element || obj instanceof HTMLInputElement || obj instanceof HTMLElement;\n            if (typeof Element === 'undefined') {\n                // This test is needed in environnements where the Element object does not exist (ie. in web workers)\n                return false;\n            }\n\n            return obj instanceof Element;\n        }\n\n        /**\n         * Return `true` in the given DOM element is an <input>.\n         *\n         * @param {HTMLElement|HTMLInputElement} domElement\n         * @returns {boolean}\n         * @private\n         */\n\n    }, {\n        key: 'isInputElement',\n        value: function isInputElement(domElement) {\n            return this.isElement(domElement) && domElement.tagName.toLowerCase() === 'input';\n        }\n\n        /**\n         * Return `true` if the parameter is a string that represents a float number, and that number has a decimal part\n         *\n         * @param {string} str\n         * @returns {boolean}\n         */\n        // static hasDecimals(str) {\n        //     const [, decimalPart] = str.split('.');\n        //     return !isUndefined(decimalPart);\n        // }\n\n        /**\n         * Return the number of decimal places if the parameter is a string that represents a float number, and that number has a decimal part.\n         *\n         * @param {string} str\n         * @returns {int}\n         */\n\n    }, {\n        key: 'decimalPlaces',\n        value: function decimalPlaces(str) {\n            var _str$split = str.split('.'),\n                _str$split2 = _slicedToArray(_str$split, 2),\n                decimalPart = _str$split2[1];\n\n            if (!this.isUndefined(decimalPart)) {\n                return decimalPart.length;\n            }\n\n            return 0;\n        }\n\n        /**\n         * Return the index of the first non-zero decimal place in the given value.\n         * The index starts after the decimal point, if any, and begins at '1'.\n         * If no decimal places are found in the value, this function returns `0`.\n         *\n         * @example\n         * indexFirstNonZeroDecimalPlace('0.00') -> 0\n         * indexFirstNonZeroDecimalPlace('1.00') -> 0\n         * indexFirstNonZeroDecimalPlace('0.12') -> 1\n         * indexFirstNonZeroDecimalPlace('0.1234') -> 1\n         * indexFirstNonZeroDecimalPlace('0.01234') -> 2\n         * indexFirstNonZeroDecimalPlace('0.001234') -> 3\n         * indexFirstNonZeroDecimalPlace('0.0001234') -> 4\n         *\n         * @param {number} value\n         * @returns {Number|number}\n         */\n\n    }, {\n        key: 'indexFirstNonZeroDecimalPlace',\n        value: function indexFirstNonZeroDecimalPlace(value) {\n            var _String$split = String(Math.abs(value)).split('.'),\n                _String$split2 = _slicedToArray(_String$split, 2),\n                decimalPart = _String$split2[1];\n\n            if (this.isUndefined(decimalPart)) {\n                return 0;\n            }\n\n            var result = decimalPart.lastIndexOf('0');\n            if (result === -1) {\n                result = 0;\n            } else {\n                result += 2;\n            }\n\n            return result;\n        }\n\n        /**\n         * Return the code for the key used to generate the given event.\n         *\n         * @param {Event} event\n         * @returns {string|Number}\n         */\n\n    }, {\n        key: 'keyCodeNumber',\n        value: function keyCodeNumber(event) {\n            // `event.keyCode` and `event.which` are deprecated, `KeyboardEvent.key` (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) must be used now\n            // Also, do note that Firefox generate a 'keypress' event (e.keyCode === 0) for the keys that do not print a character (ie. 'Insert', 'Delete', 'Fn' keys, 'PageUp', 'PageDown' etc.). 'Shift' on the other hand does not generate a keypress event.\n            return typeof event.which === 'undefined' ? event.keyCode : event.which;\n        }\n\n        /**\n         * Return the character from the event key code.\n         * If the KeyboardEvent does not represent a printable character, then the key name is used (ie. 'Meta', 'Shift', 'F1', etc.)\n         * @example character(50) => '2'\n         *\n         * @param {KeyboardEvent} event\n         * @returns {string}\n         */\n\n    }, {\n        key: 'character',\n        value: function character(event) {\n            var result = void 0;\n            if (event.key === 'Unidentified' || event.key === void 0 || this.isSeleniumBot()) {\n                //XXX The selenium geckodriver do not understand `event.key`, hence when using it, we need to rely on the old deprecated `keyCode` attribute, cf. upstream issue https://github.com/mozilla/geckodriver/issues/440\n                // Use the old deprecated keyCode property, if the new `key` one is not supported\n                var keyCode = this.keyCodeNumber(event);\n                if (keyCode === _AutoNumericEnum2.default.keyCode.AndroidDefault) {\n                    return _AutoNumericEnum2.default.keyName.AndroidDefault;\n                }\n\n                var potentialResult = _AutoNumericEnum2.default.fromCharCodeKeyCode[keyCode];\n                if (!AutoNumericHelper.isUndefinedOrNullOrEmpty(potentialResult)) {\n                    // Since `String.fromCharCode` do not return named keys for some keys ('Escape' and 'Enter' for instance), we convert the characters to the key names\n                    result = potentialResult;\n                } else {\n                    result = String.fromCharCode(keyCode);\n                }\n            } else {\n                var browser = void 0;\n                switch (event.key) {\n                    // Manages all the special cases for obsolete browsers that return the non-standard names\n                    case 'Add':\n                        result = _AutoNumericEnum2.default.keyName.NumpadPlus;\n                        break;\n                    case 'Apps':\n                        result = _AutoNumericEnum2.default.keyName.ContextMenu;\n                        break;\n                    case 'Crsel':\n                        result = _AutoNumericEnum2.default.keyName.CrSel;\n                        break;\n                    case 'Decimal':\n                        result = _AutoNumericEnum2.default.keyName.NumpadDot;\n                        break;\n                    case 'Del':\n                        browser = this.browser();\n                        if (browser.name === 'firefox' && browser.version <= 36 || browser.name === 'ie' && browser.version <= 9) {\n                            // Special workaround for the obsolete browser IE11 which output a 'Delete' key when using the numpad 'dot' one! This fixes issue #401\n                            // This workaround break the usage of the 'Delete' key for Firefox <=36, and IE9, since those browser send 'Del' instead of 'Delete', therefore we only use it for those obsolete browsers\n                            result = _AutoNumericEnum2.default.keyName.Dot;\n                        } else {\n                            result = _AutoNumericEnum2.default.keyName.Delete;\n                        }\n                        break;\n                    case 'Divide':\n                        result = _AutoNumericEnum2.default.keyName.NumpadSlash;\n                        break;\n                    case 'Down':\n                        result = _AutoNumericEnum2.default.keyName.DownArrow;\n                        break;\n                    case 'Esc':\n                        result = _AutoNumericEnum2.default.keyName.Esc;\n                        break;\n                    case 'Exsel':\n                        result = _AutoNumericEnum2.default.keyName.ExSel;\n                        break;\n                    case 'Left':\n                        result = _AutoNumericEnum2.default.keyName.LeftArrow;\n                        break;\n                    case 'Meta':\n                    case 'Super':\n                        result = _AutoNumericEnum2.default.keyName.OSLeft;\n                        break;\n                    case 'Multiply':\n                        result = _AutoNumericEnum2.default.keyName.NumpadMultiply;\n                        break;\n                    case 'Right':\n                        result = _AutoNumericEnum2.default.keyName.RightArrow;\n                        break;\n                    case 'Spacebar':\n                        result = _AutoNumericEnum2.default.keyName.Space;\n                        break;\n                    case 'Subtract':\n                        result = _AutoNumericEnum2.default.keyName.NumpadMinus;\n                        break;\n                    case 'Up':\n                        result = _AutoNumericEnum2.default.keyName.UpArrow;\n                        break;\n                    default:\n                        // The normal case\n                        result = event.key;\n                }\n            }\n\n            return result;\n        }\n\n        /**\n         * Return an object containing the name and version of the current browser.\n         * @example `browserVersion()` => { name: 'Firefox', version: '42' }\n         * Based on http://stackoverflow.com/a/38080051/2834898\n         *\n         * @returns {{ name: string, version: string }}\n         */\n\n    }, {\n        key: 'browser',\n        value: function browser() {\n            var ua = navigator.userAgent;\n            var tem = void 0;\n            var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\\/))\\/?\\s*(\\d+)/i) || [];\n\n            if (/trident/i.test(M[1])) {\n                tem = /\\brv[ :]+(\\d+)/g.exec(ua) || [];\n                return { name: 'ie', version: tem[1] || '' };\n            }\n\n            if (M[1] === 'Chrome') {\n                tem = ua.match(/\\b(OPR|Edge)\\/(\\d+)/);\n                if (tem !== null) {\n                    return { name: tem[1].replace('OPR', 'opera'), version: tem[2] };\n                }\n            }\n\n            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];\n            if ((tem = ua.match(/version\\/(\\d+)/i)) !== null) {\n                M.splice(1, 1, tem[1]);\n            }\n\n            return { name: M[0].toLowerCase(), version: M[1] };\n        }\n\n        /**\n         * Check if the browser is controlled by Selenium.\n         * Note: This only works within the geckodriver.\n         * cf. http://stackoverflow.com/questions/33225947/can-a-website-detect-when-you-are-using-selenium-with-chromedriver\n         *\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isSeleniumBot',\n        value: function isSeleniumBot() {\n            // noinspection JSUnresolvedVariable\n            return window.navigator.webdriver === true;\n        }\n\n        /**\n         * Return `true` if the given number is negative, or if the given string contains a negative sign :\n         * - everywhere in the string (by default), or\n         * - on the first character only if the `checkEverywhere` parameter is set to `false`.\n         *\n         * @param {number|string} numberOrNumericString A Number, or a number represented by a string\n         * @param {string} negativeSignCharacter The single character that represent the negative sign\n         * @param {boolean} checkEverywhere If TRUE, then the negative sign is search everywhere in the numeric string (this is needed for instance if the string is '1234.56-')\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isNegative',\n        value: function isNegative(numberOrNumericString) {\n            var negativeSignCharacter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';\n            var checkEverywhere = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n\n            if (numberOrNumericString === negativeSignCharacter) {\n                return true;\n            }\n\n            if (numberOrNumericString === '') {\n                return false;\n            }\n\n            if (AutoNumericHelper.isNumber(numberOrNumericString)) {\n                return numberOrNumericString < 0;\n            }\n\n            if (checkEverywhere) {\n                return this.contains(numberOrNumericString, negativeSignCharacter);\n            }\n\n            return this.isNegativeStrict(numberOrNumericString, negativeSignCharacter);\n        }\n\n        /**\n         * Return `true` if the given string contains a negative sign on the first character (on the far left).\n         *\n         * @example isNegativeStrict('1234.56')     => false\n         * @example isNegativeStrict('1234.56-')    => false\n         * @example isNegativeStrict('-1234.56')    => true\n         * @example isNegativeStrict('-1,234.56 €') => true\n         *\n         * @param {string} numericString\n         * @param {string} negativeSignCharacter The single character that represent the negative sign\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isNegativeStrict',\n        value: function isNegativeStrict(numericString) {\n            var negativeSignCharacter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';\n\n            return numericString.charAt(0) === negativeSignCharacter;\n        }\n\n        /**\n         * Return `true` if the very first character is the opening bracket, and if the rest of the `valueString` also has the closing bracket.\n         *\n         * @param {string} valueString\n         * @param {string} leftBracket\n         * @param {string} rightBracket\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isNegativeWithBrackets',\n        value: function isNegativeWithBrackets(valueString, leftBracket, rightBracket) {\n            return valueString.charAt(0) === leftBracket && this.contains(valueString, rightBracket);\n        }\n\n        /**\n         * Return `true` if the formatted or unformatted numeric string represent the value 0 (ie. '0,00 €'), or is empty (' €').\n         * This works since we test if there are any numbers from 1 to 9 in the string. If there is none, then the number is zero (or the string is empty).\n         *\n         * @param {string} numericString\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isZeroOrHasNoValue',\n        value: function isZeroOrHasNoValue(numericString) {\n            return !/[1-9]/g.test(numericString);\n        }\n\n        /**\n         * Return the negative version of the value (represented as a string) given as a parameter.\n         * The numeric string is a valid Javascript number when typecast to a `Number`.\n         *\n         * @param {string} value\n         * @returns {*}\n         */\n\n    }, {\n        key: 'setRawNegativeSign',\n        value: function setRawNegativeSign(value) {\n            if (!this.isNegativeStrict(value, '-')) {\n                return '-' + value;\n            }\n\n            return value;\n        }\n\n        /**\n         * Replace the character at the position `index` in the string `string` by the character(s) `newCharacter`.\n         *\n         * @param {string} string\n         * @param {int} index\n         * @param {string} newCharacter\n         * @returns {string}\n         */\n\n    }, {\n        key: 'replaceCharAt',\n        value: function replaceCharAt(string, index, newCharacter) {\n            return '' + string.substr(0, index) + newCharacter + string.substr(index + newCharacter.length);\n        }\n\n        /**\n         * Return the value clamped to the nearest minimum/maximum value, as defined in the settings.\n         *\n         * @param {string|number} value\n         * @param {object} settings\n         * @returns {number}\n         */\n\n    }, {\n        key: 'clampToRangeLimits',\n        value: function clampToRangeLimits(value, settings) {\n            //XXX This function always assume `settings.minimumValue` is lower than `settings.maximumValue`\n            return Math.max(settings.minimumValue, Math.min(settings.maximumValue, value));\n        }\n\n        /**\n         * Return the number of number or dot characters on the left side of the caret, in a formatted number.\n         *\n         * @param {string} formattedNumberString\n         * @param {int} caretPosition This must be a positive integer\n         * @param {string} decimalCharacter\n         * @returns {number}\n         */\n\n    }, {\n        key: 'countNumberCharactersOnTheCaretLeftSide',\n        value: function countNumberCharactersOnTheCaretLeftSide(formattedNumberString, caretPosition, decimalCharacter) {\n            // Here we count the dot and report it as a number character too, since it will 'stay' in the Javascript number when unformatted\n            var numberDotOrNegativeSign = new RegExp('[0-9' + decimalCharacter + '-]'); // No need to escape the decimal character here, since it's in `[]`\n\n            var numberDotAndNegativeSignCount = 0;\n            for (var i = 0; i < caretPosition; i++) {\n                // Test if the character is a number, a dot or an hyphen. If it is, count it, otherwise ignore it\n                if (numberDotOrNegativeSign.test(formattedNumberString[i])) {\n                    numberDotAndNegativeSignCount++;\n                }\n            }\n\n            return numberDotAndNegativeSignCount;\n        }\n\n        /**\n         * Walk the `formattedNumberString` from left to right, one char by one, counting the `formattedNumberStringIndex`.\n         * If the char is in the `rawNumberString` (starting at index 0), then `rawNumberStringIndex++`, and continue until\n         * there is no more characters in `rawNumberString`) or that `rawNumberStringIndex === caretPositionInRawValue`.\n         * When you stop, the `formattedNumberStringIndex` is the position where the caret should be set.\n         *\n         * @example\n         * 1234567|89.01   : position 7 (rawNumberString)\n         * 123.456.7|89,01 : position 9 (formattedNumberString)\n         *\n         * @param {string} rawNumberString\n         * @param {int} caretPositionInRawValue\n         * @param {string} formattedNumberString\n         * @param {string} decimalCharacter\n         * @returns {*}\n         */\n\n    }, {\n        key: 'findCaretPositionInFormattedNumber',\n        value: function findCaretPositionInFormattedNumber(rawNumberString, caretPositionInRawValue, formattedNumberString, decimalCharacter) {\n            var formattedNumberStringSize = formattedNumberString.length;\n            var rawNumberStringSize = rawNumberString.length;\n\n            var formattedNumberStringIndex = void 0;\n            var rawNumberStringIndex = 0;\n            for (formattedNumberStringIndex = 0; formattedNumberStringIndex < formattedNumberStringSize && rawNumberStringIndex < rawNumberStringSize && rawNumberStringIndex < caretPositionInRawValue; formattedNumberStringIndex++) {\n                if (rawNumberString[rawNumberStringIndex] === formattedNumberString[formattedNumberStringIndex] || rawNumberString[rawNumberStringIndex] === '.' && formattedNumberString[formattedNumberStringIndex] === decimalCharacter) {\n                    rawNumberStringIndex++;\n                }\n            }\n\n            return formattedNumberStringIndex;\n        }\n\n        /**\n         * Count the number of occurrence of the given character, in the given text.\n         *\n         * @param {string} character\n         * @param {string} text\n         * @returns {number}\n         */\n\n    }, {\n        key: 'countCharInText',\n        value: function countCharInText(character, text) {\n            var charCounter = 0;\n            for (var i = 0; i < text.length; i++) {\n                if (text[i] === character) {\n                    charCounter++;\n                }\n            }\n\n            return charCounter;\n        }\n\n        /**\n         * Return the index that can be used to set the caret position.\n         * This takes into account that the position is starting at '0', not 1.\n         *\n         * @param {int} characterCount\n         * @returns {number}\n         */\n\n    }, {\n        key: 'convertCharacterCountToIndexPosition',\n        value: function convertCharacterCountToIndexPosition(characterCount) {\n            return Math.max(characterCount, characterCount - 1);\n        }\n\n        /**\n         * Cross browser routine for getting selected range/cursor position.\n         * Note: this also works with edge cases like contenteditable-enabled elements, and hidden inputs.\n         *\n         * @param {HTMLInputElement|EventTarget} element\n         * @returns {{}}\n         */\n\n    }, {\n        key: 'getElementSelection',\n        value: function getElementSelection(element) {\n            var position = {};\n\n            var isSelectionStartUndefined = void 0;\n            try {\n                isSelectionStartUndefined = this.isUndefined(element.selectionStart);\n            } catch (error) {\n                isSelectionStartUndefined = false;\n            }\n\n            try {\n                if (isSelectionStartUndefined) {\n                    var selection = window.getSelection();\n                    var selectionInfo = selection.getRangeAt(0);\n                    position.start = selectionInfo.startOffset;\n                    position.end = selectionInfo.endOffset;\n                    position.length = position.end - position.start;\n                } else {\n                    position.start = element.selectionStart;\n                    position.end = element.selectionEnd;\n                    position.length = position.end - position.start;\n                }\n            } catch (error) {\n                // Manages the cases where :\n                // - the 'contenteditable' elements that have no selections\n                // - the <input> element is of type 'hidden'\n                position.start = 0;\n                position.end = 0;\n                position.length = 0;\n            }\n\n            return position;\n        }\n\n        /**\n         * Cross browser routine for setting selected range/cursor position\n         *\n         * @param {HTMLInputElement|EventTarget} element\n         * @param {int} start\n         * @param {int|null} end\n         */\n\n    }, {\n        key: 'setElementSelection',\n        value: function setElementSelection(element, start) {\n            var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n            if (this.isUndefinedOrNullOrEmpty(end)) {\n                end = start;\n            }\n\n            if (this.isInputElement(element)) {\n                element.setSelectionRange(start, end);\n            } else if (!AutoNumericHelper.isNull(element.firstChild)) {\n                var range = document.createRange();\n                range.setStart(element.firstChild, start);\n                range.setEnd(element.firstChild, end);\n                var selection = window.getSelection();\n                selection.removeAllRanges();\n                selection.addRange(range);\n            }\n        }\n\n        /**\n         * Function that throw error messages\n         *\n         * @param {string} message\n         * @throws\n         */\n\n    }, {\n        key: 'throwError',\n        value: function throwError(message) {\n            throw new Error(message);\n        }\n\n        /**\n         * Function that display a warning messages, according to the debug level.\n         *\n         * @param {string} message\n         * @param {boolean} showWarning If FALSE, then the warning message is not displayed\n         */\n\n    }, {\n        key: 'warning',\n        value: function warning(message) {\n            var showWarning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n            if (showWarning) {\n                /* eslint no-console: 0 */\n                console.warn('Warning: ' + message);\n            }\n        }\n\n        /**\n         * Return `true` if the given event is a wheelup event\n         *\n         * @param {WheelEvent} wheelEvent\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isWheelUpEvent',\n        value: function isWheelUpEvent(wheelEvent) {\n            if (!wheelEvent.deltaY) {\n                this.throwError('The event passed as a parameter is not a valid wheel event, \\'' + wheelEvent.type + '\\' given.');\n            }\n\n            return wheelEvent.deltaY < 0;\n        }\n\n        /**\n         * Return `true` if the given event is a wheeldown event\n         *\n         * @param {WheelEvent} wheelEvent\n         * @returns {boolean}\n         */\n\n    }, {\n        key: 'isWheelDownEvent',\n        value: function isWheelDownEvent(wheelEvent) {\n            if (!wheelEvent.deltaY) {\n                this.throwError('The event passed as a parameter is not a valid wheel event, \\'' + wheelEvent.type + '\\' given.');\n            }\n\n            return wheelEvent.deltaY > 0;\n        }\n\n        /**\n         * Return the given raw value truncated at the given number of decimal places `decimalPlaces`.\n         * This function does not round the value.\n         *\n         * @example\n         * forceDecimalPlaces(123.45678, 0) -> '123.45678'\n         * forceDecimalPlaces(123.45678, 1) -> '123.4'\n         * forceDecimalPlaces(123.45678, 2) -> '123.45'\n         * forceDecimalPlaces(123.45678, 3) -> '123.456'\n         *\n         * @param {number} value\n         * @param {int} decimalPlaces\n         * @returns {number|string}\n         */\n\n    }, {\n        key: 'forceDecimalPlaces',\n        value: function forceDecimalPlaces(value, decimalPlaces) {\n            // We could make sure `decimalPlaces` is an integer and positive, but we'll leave that to the dev calling this function.\n            var _String$split3 = String(value).split('.'),\n                _String$split4 = _slicedToArray(_String$split3, 2),\n                integerPart = _String$split4[0],\n                decimalPart = _String$split4[1];\n\n            if (!decimalPart) {\n                return value;\n            }\n\n            return integerPart + '.' + decimalPart.substr(0, decimalPlaces);\n        }\n\n        /**\n         * Return the 'nearest rounded' value, according to the given step size.\n         * @example roundToNearest(264789, 10000)) => 260000\n         *\n         * @param {number} value\n         * @param {number} stepPlace\n         * @returns {*}\n         */\n\n    }, {\n        key: 'roundToNearest',\n        value: function roundToNearest(value) {\n            var stepPlace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;\n\n            if (0 === value) {\n                return 0;\n            }\n\n            if (stepPlace === 0) {\n                this.throwError('The `stepPlace` used to round is equal to `0`. This value must not be equal to zero.');\n            }\n\n            return Math.round(value / stepPlace) * stepPlace;\n        }\n\n        /**\n         * Return the 'nearest rounded' value by automatically adding or subtracting the calculated offset to the initial value.\n         * This is done without having to pass a step to this function, and based on the size of the given `value`.\n         *\n         * @example                    Calculated offset\n         *           1 ->           1 (1)\n         *          14 ->          10 (10)\n         *         143 ->         140 (10)\n         *       1.278 ->       1.300 (100)\n         *      28.456 ->      28.500 (100)\n         *     276.345 ->     276.000 (1.000)\n         *   4.534.061 ->   4.530.000 (10.000)\n         *  66.723.844 ->  66.700.000 (100.000)\n         * 257.833.411 -> 258.000.000 (1.000.000)\n         *\n         *                           Initial   Added   Offset\n         * 2 decimalPlacesRawValue : 1.12   -> 2.00   (1)\n         * 3 decimalPlacesRawValue : 1.123  -> 2.000  (1)\n         *\n         * Special case when the `value` to round is between -1 and 1, excluded :\n         * @example\n         *     Number of             Initial   Result  Calculated\n         *     decimal places        value     (add)   offset\n         * 2 decimalPlacesRawValue : 0.12   -> 0.13    (0.01) : Math.pow(10, -2)\n         * 2 decimalPlacesRawValue : 0.01   -> 0.02    (0.01)\n         * 2 decimalPlacesRawValue : 0.00   -> 0.01    (0.01)\n         *\n         * 3 decimalPlacesRawValue : 0.123  -> 0.133   (0.01)  : Math.pow(10, -2)\n         * 3 decimalPlacesRawValue : 0.012  -> 0.013   (0.001) : Math.pow(10, -3)\n         * 3 decimalPlacesRawValue : 0.001  -> 0.001   (0.001)\n         * 3 decimalPlacesRawValue : 0.000  -> 0.001   (0.001)\n         *\n         * 4 decimalPlacesRawValue : 0.4123 -> 0.4200  (0.01)   : Math.pow(10, -2)\n         * 4 decimalPlacesRawValue : 0.0412 -> 0.0420  (0.001)  : Math.pow(10, -3)\n         * 4 decimalPlacesRawValue : 0.0041 -> 0.0042  (0.0001) : Math.pow(10, -4)\n         * 4 decimalPlacesRawValue : 0.0004 -> 0.0005  (0.0001)\n         * 4 decimalPlacesRawValue : 0.0000 -> 0.0001  (0.0001)\n         *\n         * @param {number} value\n         * @param {boolean} isAddition\n         * @param {int} decimalPlacesRawValue The precision needed by the `rawValue`\n         * @returns {*}\n         */\n\n    }, {\n        key: 'modifyAndRoundToNearestAuto',\n        value: function modifyAndRoundToNearestAuto(value, isAddition, decimalPlacesRawValue) {\n            value = Number(this.forceDecimalPlaces(value, decimalPlacesRawValue)); // Make sure that '0.13000000001' is converted to the number of rawValue decimal places '0.13'\n\n            var absValue = Math.abs(value);\n            if (absValue >= 0 && absValue < 1) {\n                var rawValueMinimumOffset = Math.pow(10, -decimalPlacesRawValue);\n                if (value === 0) {\n                    // 4 decimalPlacesRawValue : 0.0000 -> 0.0001 (0.0001)\n                    return isAddition ? rawValueMinimumOffset : -rawValueMinimumOffset;\n                }\n\n                var offset = void 0;\n                var minimumOffsetFirstDecimalPlaceIndex = decimalPlacesRawValue;\n                // Find where is the first non-zero decimal places\n                var indexFirstNonZeroDecimalPlace = this.indexFirstNonZeroDecimalPlace(value);\n                if (indexFirstNonZeroDecimalPlace >= minimumOffsetFirstDecimalPlaceIndex - 1) {\n                    /* 4 decimalPlacesRawValue : 0.0041 -> 0.0042 (0.0001) : Math.pow(10, -4)\n                     * 4 decimalPlacesRawValue : 0.0004 -> 0.0005 (0.0001)\n                     */\n                    offset = rawValueMinimumOffset;\n                } else {\n                    offset = Math.pow(10, -(indexFirstNonZeroDecimalPlace + 1));\n                }\n\n                var result = void 0;\n                if (isAddition) {\n                    result = value + offset;\n                } else {\n                    result = value - offset;\n                }\n\n                return this.roundToNearest(result, offset);\n            } else {\n                // For values >= 1\n                value = parseInt(value, 10);\n                var lengthValue = Math.abs(value).toString().length; // `Math.abs()` is needed here to omit the negative sign '-' in case of a negative value\n\n                var pow = void 0;\n                switch (lengthValue) {\n                    // Special cases for small numbers\n                    case 1:\n                        pow = 0;\n                        break;\n                    case 2:\n                    case 3:\n                        pow = 1;\n                        break;\n                    case 4:\n                    case 5:\n                        pow = 2;\n                        break;\n                    // Default behavior\n                    default:\n                        pow = lengthValue - 3;\n                }\n                var _offset = Math.pow(10, pow);\n\n                var _result = void 0;\n                if (isAddition) {\n                    _result = value + _offset;\n                } else {\n                    _result = value - _offset;\n                }\n\n                if (_result <= 10 && _result >= -10) {\n                    return _result;\n                }\n\n                return this.roundToNearest(_result, _offset);\n            }\n        }\n\n        /**\n         * Return the 'nearest rounded' value automatically by adding the calculated offset to the initial value.\n         * This will limit the result to the given number of decimal places `decimalPlacesLimit`.\n         *\n         * @param {number} value\n         * @param {int} decimalPlacesLimit\n         * @returns {*}\n         */\n\n    }, {\n        key: 'addAndRoundToNearestAuto',\n        value: function addAndRoundToNearestAuto(value, decimalPlacesLimit) {\n            return this.modifyAndRoundToNearestAuto(value, true, decimalPlacesLimit);\n        }\n\n        /**\n         * Return the 'nearest rounded' value automatically by subtracting the calculated offset to the initial value.\n         * This will limit the result to the given number of decimal places `decimalPlacesLimit`.\n         *\n         * @param {number} value\n         * @param {int} decimalPlacesLimit\n         * @returns {*}\n         */\n\n    }, {\n        key: 'subtractAndRoundToNearestAuto',\n        value: function subtractAndRoundToNearestAuto(value, decimalPlacesLimit) {\n            return this.modifyAndRoundToNearestAuto(value, false, decimalPlacesLimit);\n        }\n\n        /**\n         * Take an arabic number as a string and return a javascript number.\n         * By default, this function does not try to convert the arabic decimal and thousand separator characters.\n         * This returns `NaN` is the conversion is not possible.\n         * Based on http://stackoverflow.com/a/17025392/2834898\n         *\n         * @param {string} arabicNumbers\n         * @param {boolean} returnANumber If `true`, return a Number, otherwise return a String\n         * @param {boolean} parseDecimalCharacter\n         * @param {boolean} parseThousandSeparator\n         * @returns {string|number|NaN}\n         */\n\n    }, {\n        key: 'arabicToLatinNumbers',\n        value: function arabicToLatinNumbers(arabicNumbers) {\n            var returnANumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n            var parseDecimalCharacter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n            var parseThousandSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n            if (this.isNull(arabicNumbers)) {\n                return arabicNumbers;\n            }\n\n            var result = arabicNumbers.toString();\n            if (result === '') {\n                return arabicNumbers;\n            }\n\n            if (result.match(/[٠١٢٣٤٥٦٧٨٩۴۵۶]/g) === null) {\n                // If no Arabic/Persian numbers are found, return the numeric string or number directly\n                if (returnANumber) {\n                    result = Number(result);\n                }\n\n                return result;\n            }\n\n            if (parseDecimalCharacter) {\n                result = result.replace(/٫/, '.'); // Decimal character\n            }\n\n            if (parseThousandSeparator) {\n                result = result.replace(/٬/g, ''); // Thousand separator\n            }\n\n            // Replace the numbers only\n            result = result.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {\n                return d.charCodeAt(0) - 1632;\n            }) // Arabic numbers\n            .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {\n                return d.charCodeAt(0) - 1776;\n            }); // Persian numbers\n\n            // `NaN` has precedence over the string `'NaN'`\n            var resultAsNumber = Number(result);\n            if (isNaN(resultAsNumber)) {\n                return resultAsNumber;\n            }\n\n            if (returnANumber) {\n                result = resultAsNumber;\n            }\n\n            return result;\n        }\n\n        /**\n         * Create a custom event and immediately sent it from the given element.\n         * By default, if no element is given, the event is thrown from `document`.\n         *\n         * @param {string} eventName\n         * @param {HTMLElement|HTMLDocument|EventTarget} element\n         * @param {object} detail\n         */\n\n    }, {\n        key: 'triggerEvent',\n        value: function triggerEvent(eventName) {\n            var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n            var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n            var event = void 0;\n            if (window.CustomEvent) {\n                event = new CustomEvent(eventName, { detail: detail, bubbles: false, cancelable: false }); // This is not supported by default by IE ; We use the polyfill for IE9 and later.\n            } else {\n                event = document.createEvent('CustomEvent');\n                event.initCustomEvent(eventName, true, true, { detail: detail });\n            }\n\n            element.dispatchEvent(event);\n        }\n\n        /**\n         * Function to parse minimumValue, maximumValue & the input value to prepare for testing to determine if the value falls within the min / max range.\n         * Return an object example: minimumValue: \"999999999999999.99\" returns the following \"{s: -1, e: 12, c: Array[15]}\".\n         *\n         * This function is adapted from Big.js https://github.com/MikeMcl/big.js/. Many thanks to Mike.\n         *\n         * @param {number|string} n A numeric value.\n         * @returns {{}}\n         */\n\n    }, {\n        key: 'parseStr',\n        value: function parseStr(n) {\n            var x = {}; // A Big number instance.\n            var e = void 0;\n            var i = void 0;\n            var nL = void 0;\n            var j = void 0;\n\n            // Minus zero?\n            if (n === 0 && 1 / n < 0) {\n                n = '-0';\n            }\n\n            // Determine sign. 1 positive, -1 negative\n            n = n.toString();\n            if (this.isNegativeStrict(n, '-')) {\n                n = n.slice(1);\n                x.s = -1;\n            } else {\n                x.s = 1;\n            }\n\n            // Decimal point?\n            e = n.indexOf('.');\n            if (e > -1) {\n                n = n.replace('.', '');\n            }\n\n            // length of string if no decimal character\n            if (e < 0) {\n                // Integer\n                e = n.length;\n            }\n\n            // Determine leading zeros\n            i = n.search(/[1-9]/i) === -1 ? n.length : n.search(/[1-9]/i);\n            nL = n.length;\n            if (i === nL) {\n                // Zero\n                x.e = 0;\n                x.c = [0];\n            } else {\n                // Determine trailing zeros\n                for (j = nL - 1; n.charAt(j) === '0'; j -= 1) {\n                    nL -= 1;\n                }\n                nL -= 1;\n\n                // Decimal location\n                x.e = e - i - 1;\n                x.c = [];\n\n                // Convert string to array of digits without leading/trailing zeros\n                for (e = 0; i <= nL; i += 1) {\n                    x.c[e] = +n.charAt(i);\n                    e += 1;\n                }\n            }\n\n            return x;\n        }\n\n        /**\n         * Function to test if the input value falls with the Min / Max settings.\n         * This uses the parsed strings for the above parseStr function.\n         *\n         * This function is adapted from Big.js https://github.com/MikeMcl/big.js/. Many thanks to Mike.\n         *\n         * @param {object} y Big number instance\n         * @param {object} x Big number instance\n         * @returns {*}\n         */\n\n    }, {\n        key: 'testMinMax',\n        value: function testMinMax(y, x) {\n            var xc = x.c;\n            var yc = y.c;\n            var i = x.s;\n            var j = y.s;\n            var k = x.e;\n            var l = y.e;\n\n            // Either zero?\n            if (!xc[0] || !yc[0]) {\n                var _result2 = void 0;\n                if (!xc[0]) {\n                    _result2 = !yc[0] ? 0 : -j;\n                } else {\n                    _result2 = i;\n                }\n                return _result2;\n            }\n\n            // Signs differ?\n            if (i !== j) {\n                return i;\n            }\n            var xNeg = i < 0;\n\n            // Compare exponents\n            if (k !== l) {\n                return k > l ^ xNeg ? 1 : -1;\n            }\n            i = -1;\n            k = xc.length;\n            l = yc.length;\n            j = k < l ? k : l;\n\n            // Compare digit by digit\n            for (i += 1; i < j; i += 1) {\n                if (xc[i] !== yc[i]) {\n                    return xc[i] > yc[i] ^ xNeg ? 1 : -1;\n                }\n            }\n\n            // Compare lengths\n            var result = void 0;\n            if (k === l) {\n                result = 0;\n            } else {\n                result = k > l ^ xNeg ? 1 : -1;\n            }\n\n            return result;\n        }\n\n        /**\n         * Generate a random string.\n         * cf. http://stackoverflow.com/a/8084248/2834898\n         *\n         * @param {Number} strLength Length of the generated string (in character count)\n         * @returns {string}\n         */\n\n    }, {\n        key: 'randomString',\n        value: function randomString() {\n            var strLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;\n\n            return Math.random().toString(36).substr(2, strLength);\n        }\n\n        /**\n         * Return the DOM element when passed either a DOM element or a selector string.\n         *\n         * @param {HTMLElement|string} domElementOrSelector\n         * @returns {HTMLElement}\n         */\n\n    }, {\n        key: 'domElement',\n        value: function domElement(domElementOrSelector) {\n            var domElement = void 0;\n            if (AutoNumericHelper.isString(domElementOrSelector)) {\n                domElement = document.querySelector(domElementOrSelector);\n            } else {\n                domElement = domElementOrSelector;\n            }\n\n            return domElement;\n        }\n\n        /**\n         * Retrieve the current element value.\n         *\n         * @param {HTMLElement|HTMLInputElement|EventTarget} element\n         * @returns {number|string|null}\n         */\n\n    }, {\n        key: 'getElementValue',\n        value: function getElementValue(element) {\n            if (element.tagName.toLowerCase() === 'input') {\n                return element.value;\n            }\n\n            return this.text(element);\n        }\n\n        /**\n         * Modify the element value directly.\n         *\n         * @param {HTMLElement|HTMLInputElement} element\n         * @param {number|string|null} value\n         */\n\n    }, {\n        key: 'setElementValue',\n        value: function setElementValue(element) {\n            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n            if (element.tagName.toLowerCase() === 'input') {\n                element.value = value;\n            } else {\n                element.textContent = value;\n            }\n        }\n\n        /**\n         * This clone the given object, and return it.\n         * WARNING: This does not do a deep cloning.\n         * cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Examples\n         * //TODO Add a `deep` option to clone object with more than one depth\n         *\n         * @param {object} obj\n         * @returns {object}\n         */\n\n    }, {\n        key: 'cloneObject',\n        value: function cloneObject(obj) {\n            return _extends({}, obj);\n        }\n\n        /**\n         * Return a 'camelized' version of the given string.\n         * By default, this assume that :\n         * - the separators are hyphens '-',\n         * - the 'data-' string should be removed, and\n         * - that the very first word should not be capitalized.\n         *\n         * @example camelize('data-currency-symbol') => 'currencySymbol'\n         *\n         * @param {string} str Text to camelize\n         * @param {string} separator Character that separate each word\n         * @param {boolean} removeData If set to `true`, remove the `data-` part that you can find on some html attributes\n         * @param {boolean} skipFirstWord If set to `true`, do not capitalize the very first word\n         * @returns {string|null}\n         */\n\n    }, {\n        key: 'camelize',\n        value: function camelize(str) {\n            var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';\n            var removeData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n            var skipFirstWord = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n\n            if (this.isNull(str)) {\n                return null;\n            }\n\n            if (removeData) {\n                str = str.replace(/^data-/, '');\n            }\n\n            // Cut the string into words\n            var words = str.split(separator);\n\n            // Capitalize each word\n            var result = words.map(function (word) {\n                return '' + word.charAt(0).toUpperCase() + word.slice(1);\n            });\n\n            // Then concatenate them back\n            result = result.join('');\n\n            if (skipFirstWord) {\n                // Skip the very first letter\n                result = '' + result.charAt(0).toLowerCase() + result.slice(1);\n            }\n\n            return result;\n        }\n\n        /**\n         * Return the text component of the given DOM element.\n         *\n         * @param {Element} domElement\n         * @returns {string}\n         */\n\n    }, {\n        key: 'text',\n        value: function text(domElement) {\n            var nodeType = domElement.nodeType;\n\n            var result = void 0;\n            // cf. https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType\n            if (nodeType === Node.ELEMENT_NODE || nodeType === Node.DOCUMENT_NODE || nodeType === Node.DOCUMENT_FRAGMENT_NODE) {\n                result = domElement.textContent;\n            } else if (nodeType === Node.TEXT_NODE) {\n                result = domElement.nodeValue;\n            } else {\n                result = '';\n            }\n\n            return result;\n        }\n\n        /**\n         * Set the text content of the given DOM element.\n         * @param {Element} domElement\n         * @param {string} text\n         */\n\n    }, {\n        key: 'setText',\n        value: function setText(domElement, text) {\n            var nodeType = domElement.nodeType;\n            if (nodeType === Node.ELEMENT_NODE || nodeType === Node.DOCUMENT_NODE || nodeType === Node.DOCUMENT_FRAGMENT_NODE) {\n                domElement.textContent = text;\n            }\n            //TODO Display a warning if that function does not do anything?\n        }\n\n        /**\n         * Filter out the given `arr` array with the elements found in `excludedElements`.\n         * This returns a new array and does not modify the source.\n         * cf. verification here : http://codepen.io/AnotherLinuxUser/pen/XpvrMg?editors=0012\n         *\n         * @param {Array} arr\n         * @param {Array} excludedElements\n         * @returns {*|Array.<T>}\n         */\n\n    }, {\n        key: 'filterOut',\n        value: function filterOut(arr, excludedElements) {\n            var _this = this;\n\n            return arr.filter(function (element) {\n                return !_this.isInArray(element, excludedElements);\n            });\n        }\n\n        /**\n         * Remove the trailing zeros in the decimal part of a number.\n         *\n         * @param {string} numericString\n         * @returns {*}\n         */\n\n    }, {\n        key: 'trimPaddedZerosFromDecimalPlaces',\n        value: function trimPaddedZerosFromDecimalPlaces(numericString) {\n            numericString = String(numericString);\n            if (numericString === '') {\n                return '';\n            }\n\n            var _numericString$split = numericString.split('.'),\n                _numericString$split2 = _slicedToArray(_numericString$split, 2),\n                integerPart = _numericString$split2[0],\n                decimalPart = _numericString$split2[1];\n\n            if (this.isUndefinedOrNullOrEmpty(decimalPart)) {\n                return integerPart;\n            }\n\n            var trimmedDecimalPart = decimalPart.replace(/0+$/g, '');\n\n            var result = void 0;\n            if (trimmedDecimalPart === '') {\n                result = integerPart;\n            } else {\n                result = integerPart + '.' + trimmedDecimalPart;\n            }\n\n            return result;\n        }\n\n        /**\n         * Return the top-most hovered item by the mouse cursor.\n         *\n         * @returns {*}\n         */\n\n    }, {\n        key: 'getHoveredElement',\n        value: function getHoveredElement() {\n            var hoveredElements = [].concat(_toConsumableArray(document.querySelectorAll(':hover')));\n            return hoveredElements[hoveredElements.length - 1];\n        }\n\n        /**\n         * Return the given array trimmed to the given length.\n         * @example arrayTrim([1, 2, 3, 4], 2) -> [1, 2]\n         *\n         * @param {Array} array\n         * @param {Number} length\n         * @returns {*}\n         */\n\n    }, {\n        key: 'arrayTrim',\n        value: function arrayTrim(array, length) {\n            var arrLength = array.length;\n            if (arrLength === 0 || length > arrLength) {\n                // Also manage the case where `length` is higher than the current length\n                return array;\n            }\n\n            if (length < 0) {\n                return [];\n            }\n\n            array.length = parseInt(length, 10);\n\n            return array;\n        }\n\n        /**\n         * Merge all the given arrays by keeping only unique elements, and return an array with de-duplicated values.\n         * cf. http://stackoverflow.com/a/27664971/2834898\n         *\n         * @param {...array} arrays\n         * @returns {[*]}\n         */\n\n    }, {\n        key: 'arrayUnique',\n        value: function arrayUnique() {\n            var _ref;\n\n            //FIXME à tester\n            return [].concat(_toConsumableArray(new Set((_ref = []).concat.apply(_ref, arguments))));\n        }\n\n        /**\n         * Merge all the given Maps by keeping only unique elements, and return a new Map with de-duplicated keys.\n         *\n         * @param {...Map} mapObjects\n         * @returns {Map}\n         */\n\n    }, {\n        key: 'mergeMaps',\n        value: function mergeMaps() {\n            for (var _len = arguments.length, mapObjects = Array(_len), _key = 0; _key < _len; _key++) {\n                mapObjects[_key] = arguments[_key];\n            }\n\n            return new Map(mapObjects.reduce(function (as, b) {\n                return as.concat([].concat(_toConsumableArray(b)));\n            }, []));\n        }\n    }]);\n\n    return AutoNumericHelper;\n}();\n\nexports.default = AutoNumericHelper;\nmodule.exports = exports['default'];\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvQXV0b051bWVyaWNIZWxwZXIuanM/ZWMyYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIGF1dG9OdW1lcmljLmpzXG4gKiBAYXV0aG9yIEFsZXhhbmRyZSBCb25uZWF1IDxhbGV4YW5kcmUuYm9ubmVhdUBsaW51eGZyLmV1PlxuICogQGNvcHlyaWdodCDCqSAyMDE2IEFsZXhhbmRyZSBCb25uZWF1XG4gKlxuICogVGhlIE1JVCBMaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuICogcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWIgbGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAqIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAqIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcbiAqIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgQXV0b051bWVyaWNFbnVtIGZyb20gJy4vQXV0b051bWVyaWNFbnVtJztcblxuLyoqXG4gKiBTdGF0aWMgY2xhc3MgdGhhdCBob2xkcyBhbGwgdGhlIGhlbHBlciBmdW5jdGlvbnMgYXV0b051bWVyaWMgdXNlcy5cbiAqIE5vdGUgOiBub25lIG9mIHRoZSBmdW5jdGlvbnMgaW4gdGhlcmUgYXJlIGF3YXJlIG9mIGFueSBhdXRvTnVtZXJpYyBpbnRlcm5hbHMgKHdoaWNoIG1lYW5zIHRoZXJlIGFyZSBubyByZWZlcmVuY2VzIHRvIGF1dG9OdW1lcmljLXNwZWNpZmljIGluZm8gbGlrZSBvcHRpb25zIG5hbWVzIG9yIGRhdGEgc3RydWN0dXJlcykuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9OdW1lcmljSGVscGVyIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYHRydWVgIGlmIHRoZSBgdmFsdWVgIGlzIG51bGxcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybiBgdHJ1ZWAgaWYgdGhlIGB2YWx1ZWAgaXMgbnVsbCwgRkFMU0Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgc3RhdGljIGlzTnVsbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgYHZhbHVlYCBpcyB1bmRlZmluZWRcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybiBgdHJ1ZWAgaWYgdGhlIGB2YWx1ZWAgaXMgdW5kZWZpbmVkLCBGQUxTRSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB2b2lkKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBgdHJ1ZWAgaWYgdGhlIGB2YWx1ZWAgaXMgdW5kZWZpbmVkLCBudWxsIG9yIGVtcHR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzVW5kZWZpbmVkT3JOdWxsT3JFbXB0eSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQoMCkgfHwgJycgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHBhcmFtZXRlciBpcyBhIFN0cmluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBzdHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNTdHJpbmcoc3RyKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgfHwgc3RyIGluc3RhbmNlb2YgU3RyaW5nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgYHZhbHVlYCBpcyBhbiBlbXB0eSBzdHJpbmcgJydcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybiBgdHJ1ZWAgaWYgdGhlIGB2YWx1ZWAgaXMgYW4gZW1wdHkgc3RyaW5nICcnLCBGQUxTRSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFbXB0eVN0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBgdHJ1ZWAgaWYgdGhlIHBhcmFtZXRlciBpcyBhIGJvb2xlYW5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBgdHJ1ZWAgaWYgdGhlIHBhcmFtZXRlciBpcyBhIHN0cmluZyAndHJ1ZScgb3IgJ2ZhbHNlJ1xuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFueSBjYXNlcyBmb3IgdGhvc2Ugc3RyaW5ncy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNUcnVlT3JGYWxzZVN0cmluZyh2YWx1ZSkge1xuICAgICAgICBjb25zdCBsb3dlcmNhc2VWYWx1ZSA9IFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvd2VyY2FzZVZhbHVlID09PSAndHJ1ZScgfHwgbG93ZXJjYXNlVmFsdWUgPT09ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgcGFyYW1ldGVyIGlzIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSByZWZlcmVuY2VcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNPYmplY3QocmVmZXJlbmNlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiByZWZlcmVuY2UgIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkocmVmZXJlbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYHRydWVgIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgZW1wdHlcbiAgICAgKiBjZi4gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82Nzk5MTUvaG93LWRvLWktdGVzdC1mb3ItYW4tZW1wdHktamF2YXNjcmlwdC1vYmplY3QgYW5kIGh0dHA6Ly9qc3BlcmYuY29tL2VtcHR5LW9iamVjdC10ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRW1wdHlPYmoob2JqKSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgcGFyYW1ldGVyIGlzIGEgcmVhbCBudW1iZXIgKGFuZCBub3QgYSBudW1lcmljIHN0cmluZykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IG5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNOdW1iZXJTdHJpY3Qobikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBgdHJ1ZWAgaWYgdGhlIHBhcmFtZXRlciBpcyBhIG51bWJlciAob3IgYSBudW1iZXIgd3JpdHRlbiBhcyBhIHN0cmluZykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IG5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNOdW1iZXIobikge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNBcnJheShuKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgcGFyYW1ldGVyIGlzIGEgbnVtYmVyIChvciBhIG51bWJlciB3cml0dGVuIGFzIGEgc3RyaW5nKS5cbiAgICAgKiBUaGlzIHZlcnNpb24gYWxzbyBhY2NlcHRzIEFyYWJpYyBhbmQgUGVyc2lhbiBudW1iZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTnVtYmVyT3JBcmFiaWMobikge1xuICAgICAgICBjb25zdCBsYXRpbkNvbnZlcnRlZE51bWJlciA9IHRoaXMuYXJhYmljVG9MYXRpbk51bWJlcnMobiwgZmFsc2UsIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc051bWJlcihsYXRpbkNvbnZlcnRlZE51bWJlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgcGFyYW1ldGVyIGlzIGFuIGludGVnZXIgKGFuZCBub3QgYSBmbG9hdCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IG5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNJbnQobikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInICYmIHBhcnNlRmxvYXQobikgPT09IHBhcnNlSW50KG4sIDEwKSAmJiAhaXNOYU4obik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgcGFyYW1ldGVyIGlzIGEgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRnVuY3Rpb24oZnVuYykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgY3VycmVudCBicm93c2VyIGlzIHRoZSBvYnNvbGV0ZSBJbnRlcm5ldCBFeHBsb3JlciAxMSAoSUUxMSkgb25lXG4gICAgICogY2YuIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTgyNTIwNy8yODM0ODk4XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNJRTExKCkge1xuICAgICAgICAvLyBub2luc3BlY3Rpb24gSlNVbnJlc29sdmVkVmFyaWFibGVcbiAgICAgICAgcmV0dXJuICEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBgdHJ1ZWAgaXMgdGhlIHN0cmluZyBgc3RyYCBjb250YWlucyB0aGUgc3RyaW5nIGBuZWVkbGVgXG4gICAgICogTm90ZTogdGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBjb2VyY2UgdGhlIHBhcmFtZXRlcnMgdHlwZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmVlZGxlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbnRhaW5zKHN0ciwgbmVlZGxlKSB7XG4gICAgICAgIC8vVE9ETyBVc2UgYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlcygpYCB3aGVuIGF2YWlsYWJsZSAoY2YuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2luY2x1ZGVzKVxuICAgICAgICBpZiAoIXRoaXMuaXNTdHJpbmcoc3RyKSB8fCAhdGhpcy5pc1N0cmluZyhuZWVkbGUpIHx8IHN0ciA9PT0gJycgfHwgbmVlZGxlID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0ci5pbmRleE9mKG5lZWRsZSkgIT09IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBgdHJ1ZWAgaWYgdGhlIGBuZWVkbGVgIGlzIGluIHRoZSBhcnJheVxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBuZWVkbGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0luQXJyYXkobmVlZGxlLCBhcnJheSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBcnJheShhcnJheSkgfHwgYXJyYXkgPT09IFtdIHx8IHRoaXMuaXNVbmRlZmluZWQobmVlZGxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5LmluZGV4T2YobmVlZGxlKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgcGFyYW1ldGVyIGlzIGFuIEFycmF5XG4gICAgICogLy9UT0RPIFJlcGxhY2UgdGhpcyBieSB0aGUgZGVmYXVsdCBgQXJyYXkuaXNBcnJheSgpYCBmdW5jdGlvbj9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gYXJyXG4gICAgICogQHRocm93cyBFcnJvclxuICAgICAqIEByZXR1cm5zIHsqfGJvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQXJyYXkoYXJyKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoW10pID09PSAnW29iamVjdCBBcnJheV0nKSB7IC8vIE1ha2Ugc3VyZSBhbiBhcnJheSBoYXMgYSBjbGFzcyBhdHRyaWJ1dGUgb2YgW29iamVjdCBBcnJheV1cbiAgICAgICAgICAgIC8vIFRlc3QgcGFzc2VkLCBub3cgY2hlY2sgaWYgaXMgYW4gQXJyYXlcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgfHwgKHR5cGVvZiBhcnIgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09PSAnW29iamVjdCBBcnJheV0nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndG9TdHJpbmcgbWVzc2FnZSBjaGFuZ2VkIGZvciBPYmplY3QgQXJyYXknKTsgLy8gVmVyaWZ5IHRoYXQgdGhlIHN0cmluZyByZXR1cm5lZCBieSBgdG9TdHJpbmdgIGRvZXMgbm90IGNoYW5nZSBpbiB0aGUgZnV0dXJlIChjZi4gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvODM2NTIxNSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBgdHJ1ZWAgaWYgdGhlIHBhcmFtZXRlciBpcyBhIERPTSBlbGVtZW50XG4gICAgICogY2YuIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3NTQxMDQvMjgzNDg5OFxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBvYmpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFbGVtZW50KG9iaikge1xuICAgICAgICAvLyByZXR1cm4gISEob2JqICYmIG9iai5ub2RlTmFtZSk7XG4gICAgICAgIC8vIHJldHVybiBvYmogJiYgJ25vZGVUeXBlJyBpbiBvYmo7XG4gICAgICAgIC8vIHJldHVybiBvYmogaW5zdGFuY2VvZiBFbGVtZW50IHx8IG9iaiBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgdGVzdCBpcyBuZWVkZWQgaW4gZW52aXJvbm5lbWVudHMgd2hlcmUgdGhlIEVsZW1lbnQgb2JqZWN0IGRvZXMgbm90IGV4aXN0IChpZS4gaW4gd2ViIHdvcmtlcnMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYHRydWVgIGluIHRoZSBnaXZlbiBET00gZWxlbWVudCBpcyBhbiA8aW5wdXQ+LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fSBkb21FbGVtZW50XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNJbnB1dEVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0VsZW1lbnQoZG9tRWxlbWVudCkgJiYgZG9tRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgcGFyYW1ldGVyIGlzIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyBhIGZsb2F0IG51bWJlciwgYW5kIHRoYXQgbnVtYmVyIGhhcyBhIGRlY2ltYWwgcGFydFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIC8vIHN0YXRpYyBoYXNEZWNpbWFscyhzdHIpIHtcbiAgICAvLyAgICAgY29uc3QgWywgZGVjaW1hbFBhcnRdID0gc3RyLnNwbGl0KCcuJyk7XG4gICAgLy8gICAgIHJldHVybiAhaXNVbmRlZmluZWQoZGVjaW1hbFBhcnQpO1xuICAgIC8vIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIGlmIHRoZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIGEgZmxvYXQgbnVtYmVyLCBhbmQgdGhhdCBudW1iZXIgaGFzIGEgZGVjaW1hbCBwYXJ0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm5zIHtpbnR9XG4gICAgICovXG4gICAgc3RhdGljIGRlY2ltYWxQbGFjZXMoc3RyKSB7XG4gICAgICAgIGNvbnN0IFssIGRlY2ltYWxQYXJ0XSA9IHN0ci5zcGxpdCgnLicpO1xuICAgICAgICBpZiAoIXRoaXMuaXNVbmRlZmluZWQoZGVjaW1hbFBhcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVjaW1hbFBhcnQubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgbm9uLXplcm8gZGVjaW1hbCBwbGFjZSBpbiB0aGUgZ2l2ZW4gdmFsdWUuXG4gICAgICogVGhlIGluZGV4IHN0YXJ0cyBhZnRlciB0aGUgZGVjaW1hbCBwb2ludCwgaWYgYW55LCBhbmQgYmVnaW5zIGF0ICcxJy5cbiAgICAgKiBJZiBubyBkZWNpbWFsIHBsYWNlcyBhcmUgZm91bmQgaW4gdGhlIHZhbHVlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYDBgLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbmRleEZpcnN0Tm9uWmVyb0RlY2ltYWxQbGFjZSgnMC4wMCcpIC0+IDBcbiAgICAgKiBpbmRleEZpcnN0Tm9uWmVyb0RlY2ltYWxQbGFjZSgnMS4wMCcpIC0+IDBcbiAgICAgKiBpbmRleEZpcnN0Tm9uWmVyb0RlY2ltYWxQbGFjZSgnMC4xMicpIC0+IDFcbiAgICAgKiBpbmRleEZpcnN0Tm9uWmVyb0RlY2ltYWxQbGFjZSgnMC4xMjM0JykgLT4gMVxuICAgICAqIGluZGV4Rmlyc3ROb25aZXJvRGVjaW1hbFBsYWNlKCcwLjAxMjM0JykgLT4gMlxuICAgICAqIGluZGV4Rmlyc3ROb25aZXJvRGVjaW1hbFBsYWNlKCcwLjAwMTIzNCcpIC0+IDNcbiAgICAgKiBpbmRleEZpcnN0Tm9uWmVyb0RlY2ltYWxQbGFjZSgnMC4wMDAxMjM0JykgLT4gNFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICogQHJldHVybnMge051bWJlcnxudW1iZXJ9XG4gICAgICovXG4gICAgc3RhdGljIGluZGV4Rmlyc3ROb25aZXJvRGVjaW1hbFBsYWNlKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IFssIGRlY2ltYWxQYXJ0XSA9IFN0cmluZyhNYXRoLmFicyh2YWx1ZSkpLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWQoZGVjaW1hbFBhcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBkZWNpbWFsUGFydC5sYXN0SW5kZXhPZignMCcpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSAtMSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGNvZGUgZm9yIHRoZSBrZXkgdXNlZCB0byBnZW5lcmF0ZSB0aGUgZ2l2ZW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8TnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBrZXlDb2RlTnVtYmVyKGV2ZW50KSB7XG4gICAgICAgIC8vIGBldmVudC5rZXlDb2RlYCBhbmQgYGV2ZW50LndoaWNoYCBhcmUgZGVwcmVjYXRlZCwgYEtleWJvYXJkRXZlbnQua2V5YCAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5KSBtdXN0IGJlIHVzZWQgbm93XG4gICAgICAgIC8vIEFsc28sIGRvIG5vdGUgdGhhdCBGaXJlZm94IGdlbmVyYXRlIGEgJ2tleXByZXNzJyBldmVudCAoZS5rZXlDb2RlID09PSAwKSBmb3IgdGhlIGtleXMgdGhhdCBkbyBub3QgcHJpbnQgYSBjaGFyYWN0ZXIgKGllLiAnSW5zZXJ0JywgJ0RlbGV0ZScsICdGbicga2V5cywgJ1BhZ2VVcCcsICdQYWdlRG93bicgZXRjLikuICdTaGlmdCcgb24gdGhlIG90aGVyIGhhbmQgZG9lcyBub3QgZ2VuZXJhdGUgYSBrZXlwcmVzcyBldmVudC5cbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZXZlbnQud2hpY2ggPT09ICd1bmRlZmluZWQnKT9ldmVudC5rZXlDb2RlOmV2ZW50LndoaWNoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgY2hhcmFjdGVyIGZyb20gdGhlIGV2ZW50IGtleSBjb2RlLlxuICAgICAqIElmIHRoZSBLZXlib2FyZEV2ZW50IGRvZXMgbm90IHJlcHJlc2VudCBhIHByaW50YWJsZSBjaGFyYWN0ZXIsIHRoZW4gdGhlIGtleSBuYW1lIGlzIHVzZWQgKGllLiAnTWV0YScsICdTaGlmdCcsICdGMScsIGV0Yy4pXG4gICAgICogQGV4YW1wbGUgY2hhcmFjdGVyKDUwKSA9PiAnMidcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBjaGFyYWN0ZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1VuaWRlbnRpZmllZCcgfHwgZXZlbnQua2V5ID09PSB2b2lkKDApIHx8IHRoaXMuaXNTZWxlbml1bUJvdCgpKSB7XG4gICAgICAgICAgICAvL1hYWCBUaGUgc2VsZW5pdW0gZ2Vja29kcml2ZXIgZG8gbm90IHVuZGVyc3RhbmQgYGV2ZW50LmtleWAsIGhlbmNlIHdoZW4gdXNpbmcgaXQsIHdlIG5lZWQgdG8gcmVseSBvbiB0aGUgb2xkIGRlcHJlY2F0ZWQgYGtleUNvZGVgIGF0dHJpYnV0ZSwgY2YuIHVwc3RyZWFtIGlzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvZHJpdmVyL2lzc3Vlcy80NDBcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgb2xkIGRlcHJlY2F0ZWQga2V5Q29kZSBwcm9wZXJ0eSwgaWYgdGhlIG5ldyBga2V5YCBvbmUgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgY29uc3Qga2V5Q29kZSA9IHRoaXMua2V5Q29kZU51bWJlcihldmVudCk7XG4gICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gQXV0b051bWVyaWNFbnVtLmtleUNvZGUuQW5kcm9pZERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXV0b051bWVyaWNFbnVtLmtleU5hbWUuQW5kcm9pZERlZmF1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBvdGVudGlhbFJlc3VsdCA9IEF1dG9OdW1lcmljRW51bS5mcm9tQ2hhckNvZGVLZXlDb2RlW2tleUNvZGVdO1xuICAgICAgICAgICAgaWYgKCFBdXRvTnVtZXJpY0hlbHBlci5pc1VuZGVmaW5lZE9yTnVsbE9yRW1wdHkocG90ZW50aWFsUmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIC8vIFNpbmNlIGBTdHJpbmcuZnJvbUNoYXJDb2RlYCBkbyBub3QgcmV0dXJuIG5hbWVkIGtleXMgZm9yIHNvbWUga2V5cyAoJ0VzY2FwZScgYW5kICdFbnRlcicgZm9yIGluc3RhbmNlKSwgd2UgY29udmVydCB0aGUgY2hhcmFjdGVycyB0byB0aGUga2V5IG5hbWVzXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcG90ZW50aWFsUmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGtleUNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGJyb3dzZXI7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgICAgIC8vIE1hbmFnZXMgYWxsIHRoZSBzcGVjaWFsIGNhc2VzIGZvciBvYnNvbGV0ZSBicm93c2VycyB0aGF0IHJldHVybiB0aGUgbm9uLXN0YW5kYXJkIG5hbWVzXG4gICAgICAgICAgICAgICAgY2FzZSAnQWRkJzpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gQXV0b051bWVyaWNFbnVtLmtleU5hbWUuTnVtcGFkUGx1cztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXBwcyc6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEF1dG9OdW1lcmljRW51bS5rZXlOYW1lLkNvbnRleHRNZW51O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdDcnNlbCc6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEF1dG9OdW1lcmljRW51bS5rZXlOYW1lLkNyU2VsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdEZWNpbWFsJzpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gQXV0b051bWVyaWNFbnVtLmtleU5hbWUuTnVtcGFkRG90O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdEZWwnOlxuICAgICAgICAgICAgICAgICAgICBicm93c2VyID0gdGhpcy5icm93c2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoYnJvd3Nlci5uYW1lID09PSAnZmlyZWZveCcgJiYgYnJvd3Nlci52ZXJzaW9uIDw9IDM2KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGJyb3dzZXIubmFtZSA9PT0gJ2llJyAmJiBicm93c2VyLnZlcnNpb24gPD0gOSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgd29ya2Fyb3VuZCBmb3IgdGhlIG9ic29sZXRlIGJyb3dzZXIgSUUxMSB3aGljaCBvdXRwdXQgYSAnRGVsZXRlJyBrZXkgd2hlbiB1c2luZyB0aGUgbnVtcGFkICdkb3QnIG9uZSEgVGhpcyBmaXhlcyBpc3N1ZSAjNDAxXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdvcmthcm91bmQgYnJlYWsgdGhlIHVzYWdlIG9mIHRoZSAnRGVsZXRlJyBrZXkgZm9yIEZpcmVmb3ggPD0zNiwgYW5kIElFOSwgc2luY2UgdGhvc2UgYnJvd3NlciBzZW5kICdEZWwnIGluc3RlYWQgb2YgJ0RlbGV0ZScsIHRoZXJlZm9yZSB3ZSBvbmx5IHVzZSBpdCBmb3IgdGhvc2Ugb2Jzb2xldGUgYnJvd3NlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEF1dG9OdW1lcmljRW51bS5rZXlOYW1lLkRvdDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEF1dG9OdW1lcmljRW51bS5rZXlOYW1lLkRlbGV0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdEaXZpZGUnOlxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBBdXRvTnVtZXJpY0VudW0ua2V5TmFtZS5OdW1wYWRTbGFzaDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnRG93bic6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEF1dG9OdW1lcmljRW51bS5rZXlOYW1lLkRvd25BcnJvdztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnRXNjJzpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gQXV0b051bWVyaWNFbnVtLmtleU5hbWUuRXNjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdFeHNlbCc6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEF1dG9OdW1lcmljRW51bS5rZXlOYW1lLkV4U2VsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdMZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gQXV0b051bWVyaWNFbnVtLmtleU5hbWUuTGVmdEFycm93O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdNZXRhJzpcbiAgICAgICAgICAgICAgICBjYXNlICdTdXBlcic6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEF1dG9OdW1lcmljRW51bS5rZXlOYW1lLk9TTGVmdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnTXVsdGlwbHknOlxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBBdXRvTnVtZXJpY0VudW0ua2V5TmFtZS5OdW1wYWRNdWx0aXBseTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBBdXRvTnVtZXJpY0VudW0ua2V5TmFtZS5SaWdodEFycm93O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTcGFjZWJhcic6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEF1dG9OdW1lcmljRW51bS5rZXlOYW1lLlNwYWNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTdWJ0cmFjdCc6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEF1dG9OdW1lcmljRW51bS5rZXlOYW1lLk51bXBhZE1pbnVzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdVcCc6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEF1dG9OdW1lcmljRW51bS5rZXlOYW1lLlVwQXJyb3c7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBub3JtYWwgY2FzZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBldmVudC5rZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgbmFtZSBhbmQgdmVyc2lvbiBvZiB0aGUgY3VycmVudCBicm93c2VyLlxuICAgICAqIEBleGFtcGxlIGBicm93c2VyVmVyc2lvbigpYCA9PiB7IG5hbWU6ICdGaXJlZm94JywgdmVyc2lvbjogJzQyJyB9XG4gICAgICogQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzgwODAwNTEvMjgzNDg5OFxuICAgICAqXG4gICAgICogQHJldHVybnMge3sgbmFtZTogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmcgfX1cbiAgICAgKi9cbiAgICBzdGF0aWMgYnJvd3NlcigpIHtcbiAgICAgICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICBsZXQgdGVtO1xuICAgICAgICBsZXQgTSA9IHVhLm1hdGNoKC8ob3BlcmF8Y2hyb21lfHNhZmFyaXxmaXJlZm94fG1zaWV8dHJpZGVudCg/PVxcLykpXFwvP1xccyooXFxkKykvaSkgfHwgW107XG5cbiAgICAgICAgaWYgKC90cmlkZW50L2kudGVzdChNWzFdKSkge1xuICAgICAgICAgICAgdGVtID0gL1xcYnJ2WyA6XSsoXFxkKykvZy5leGVjKHVhKSB8fCBbXTtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdpZScsIHZlcnNpb246ICh0ZW1bMV0gfHwgJycpIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTVsxXSA9PT0gJ0Nocm9tZScpIHtcbiAgICAgICAgICAgIHRlbSA9IHVhLm1hdGNoKC9cXGIoT1BSfEVkZ2UpXFwvKFxcZCspLyk7XG4gICAgICAgICAgICBpZiAodGVtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogdGVtWzFdLnJlcGxhY2UoJ09QUicsICdvcGVyYScpLCB2ZXJzaW9uOiB0ZW1bMl0gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIE0gPSBNWzJdP1tNWzFdLCBNWzJdXTpbbmF2aWdhdG9yLmFwcE5hbWUsIG5hdmlnYXRvci5hcHBWZXJzaW9uLCAnLT8nXTtcbiAgICAgICAgaWYgKCh0ZW0gPSB1YS5tYXRjaCgvdmVyc2lvblxcLyhcXGQrKS9pKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIE0uc3BsaWNlKDEsIDEsIHRlbVsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBuYW1lOiBNWzBdLnRvTG93ZXJDYXNlKCksIHZlcnNpb246IE1bMV0gfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgYnJvd3NlciBpcyBjb250cm9sbGVkIGJ5IFNlbGVuaXVtLlxuICAgICAqIE5vdGU6IFRoaXMgb25seSB3b3JrcyB3aXRoaW4gdGhlIGdlY2tvZHJpdmVyLlxuICAgICAqIGNmLiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMzMjI1OTQ3L2Nhbi1hLXdlYnNpdGUtZGV0ZWN0LXdoZW4teW91LWFyZS11c2luZy1zZWxlbml1bS13aXRoLWNocm9tZWRyaXZlclxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzU2VsZW5pdW1Cb3QoKSB7XG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VucmVzb2x2ZWRWYXJpYWJsZVxuICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci53ZWJkcml2ZXIgPT09IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gbnVtYmVyIGlzIG5lZ2F0aXZlLCBvciBpZiB0aGUgZ2l2ZW4gc3RyaW5nIGNvbnRhaW5zIGEgbmVnYXRpdmUgc2lnbiA6XG4gICAgICogLSBldmVyeXdoZXJlIGluIHRoZSBzdHJpbmcgKGJ5IGRlZmF1bHQpLCBvclxuICAgICAqIC0gb24gdGhlIGZpcnN0IGNoYXJhY3RlciBvbmx5IGlmIHRoZSBgY2hlY2tFdmVyeXdoZXJlYCBwYXJhbWV0ZXIgaXMgc2V0IHRvIGBmYWxzZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlck9yTnVtZXJpY1N0cmluZyBBIE51bWJlciwgb3IgYSBudW1iZXIgcmVwcmVzZW50ZWQgYnkgYSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmVnYXRpdmVTaWduQ2hhcmFjdGVyIFRoZSBzaW5nbGUgY2hhcmFjdGVyIHRoYXQgcmVwcmVzZW50IHRoZSBuZWdhdGl2ZSBzaWduXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjaGVja0V2ZXJ5d2hlcmUgSWYgVFJVRSwgdGhlbiB0aGUgbmVnYXRpdmUgc2lnbiBpcyBzZWFyY2ggZXZlcnl3aGVyZSBpbiB0aGUgbnVtZXJpYyBzdHJpbmcgKHRoaXMgaXMgbmVlZGVkIGZvciBpbnN0YW5jZSBpZiB0aGUgc3RyaW5nIGlzICcxMjM0LjU2LScpXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTmVnYXRpdmUobnVtYmVyT3JOdW1lcmljU3RyaW5nLCBuZWdhdGl2ZVNpZ25DaGFyYWN0ZXIgPSAnLScsIGNoZWNrRXZlcnl3aGVyZSA9IHRydWUpIHtcbiAgICAgICAgaWYgKG51bWJlck9yTnVtZXJpY1N0cmluZyA9PT0gbmVnYXRpdmVTaWduQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChudW1iZXJPck51bWVyaWNTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXV0b051bWVyaWNIZWxwZXIuaXNOdW1iZXIobnVtYmVyT3JOdW1lcmljU3RyaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlck9yTnVtZXJpY1N0cmluZyA8IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hlY2tFdmVyeXdoZXJlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyhudW1iZXJPck51bWVyaWNTdHJpbmcsIG5lZ2F0aXZlU2lnbkNoYXJhY3Rlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pc05lZ2F0aXZlU3RyaWN0KG51bWJlck9yTnVtZXJpY1N0cmluZywgbmVnYXRpdmVTaWduQ2hhcmFjdGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYHRydWVgIGlmIHRoZSBnaXZlbiBzdHJpbmcgY29udGFpbnMgYSBuZWdhdGl2ZSBzaWduIG9uIHRoZSBmaXJzdCBjaGFyYWN0ZXIgKG9uIHRoZSBmYXIgbGVmdCkuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZSBpc05lZ2F0aXZlU3RyaWN0KCcxMjM0LjU2JykgICAgID0+IGZhbHNlXG4gICAgICogQGV4YW1wbGUgaXNOZWdhdGl2ZVN0cmljdCgnMTIzNC41Ni0nKSAgICA9PiBmYWxzZVxuICAgICAqIEBleGFtcGxlIGlzTmVnYXRpdmVTdHJpY3QoJy0xMjM0LjU2JykgICAgPT4gdHJ1ZVxuICAgICAqIEBleGFtcGxlIGlzTmVnYXRpdmVTdHJpY3QoJy0xLDIzNC41NiDigqwnKSA9PiB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbnVtZXJpY1N0cmluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZWdhdGl2ZVNpZ25DaGFyYWN0ZXIgVGhlIHNpbmdsZSBjaGFyYWN0ZXIgdGhhdCByZXByZXNlbnQgdGhlIG5lZ2F0aXZlIHNpZ25cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNOZWdhdGl2ZVN0cmljdChudW1lcmljU3RyaW5nLCBuZWdhdGl2ZVNpZ25DaGFyYWN0ZXIgPSAnLScpIHtcbiAgICAgICAgcmV0dXJuIG51bWVyaWNTdHJpbmcuY2hhckF0KDApID09PSBuZWdhdGl2ZVNpZ25DaGFyYWN0ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgdmVyeSBmaXJzdCBjaGFyYWN0ZXIgaXMgdGhlIG9wZW5pbmcgYnJhY2tldCwgYW5kIGlmIHRoZSByZXN0IG9mIHRoZSBgdmFsdWVTdHJpbmdgIGFsc28gaGFzIHRoZSBjbG9zaW5nIGJyYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVTdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGVmdEJyYWNrZXRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmlnaHRCcmFja2V0XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTmVnYXRpdmVXaXRoQnJhY2tldHModmFsdWVTdHJpbmcsIGxlZnRCcmFja2V0LCByaWdodEJyYWNrZXQpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlU3RyaW5nLmNoYXJBdCgwKSA9PT0gbGVmdEJyYWNrZXQgJiYgdGhpcy5jb250YWlucyh2YWx1ZVN0cmluZywgcmlnaHRCcmFja2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYHRydWVgIGlmIHRoZSBmb3JtYXR0ZWQgb3IgdW5mb3JtYXR0ZWQgbnVtZXJpYyBzdHJpbmcgcmVwcmVzZW50IHRoZSB2YWx1ZSAwIChpZS4gJzAsMDAg4oKsJyksIG9yIGlzIGVtcHR5ICgnIOKCrCcpLlxuICAgICAqIFRoaXMgd29ya3Mgc2luY2Ugd2UgdGVzdCBpZiB0aGVyZSBhcmUgYW55IG51bWJlcnMgZnJvbSAxIHRvIDkgaW4gdGhlIHN0cmluZy4gSWYgdGhlcmUgaXMgbm9uZSwgdGhlbiB0aGUgbnVtYmVyIGlzIHplcm8gKG9yIHRoZSBzdHJpbmcgaXMgZW1wdHkpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG51bWVyaWNTdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNaZXJvT3JIYXNOb1ZhbHVlKG51bWVyaWNTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuICEoL1sxLTldL2cpLnRlc3QobnVtZXJpY1N0cmluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBuZWdhdGl2ZSB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSAocmVwcmVzZW50ZWQgYXMgYSBzdHJpbmcpIGdpdmVuIGFzIGEgcGFyYW1ldGVyLlxuICAgICAqIFRoZSBudW1lcmljIHN0cmluZyBpcyBhIHZhbGlkIEphdmFzY3JpcHQgbnVtYmVyIHdoZW4gdHlwZWNhc3QgdG8gYSBgTnVtYmVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRSYXdOZWdhdGl2ZVNpZ24odmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTmVnYXRpdmVTdHJpY3QodmFsdWUsICctJykpIHtcbiAgICAgICAgICAgIHJldHVybiBgLSR7dmFsdWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIHBvc2l0aW9uIGBpbmRleGAgaW4gdGhlIHN0cmluZyBgc3RyaW5nYCBieSB0aGUgY2hhcmFjdGVyKHMpIGBuZXdDaGFyYWN0ZXJgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICAgICAqIEBwYXJhbSB7aW50fSBpbmRleFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdDaGFyYWN0ZXJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyByZXBsYWNlQ2hhckF0KHN0cmluZywgaW5kZXgsIG5ld0NoYXJhY3Rlcikge1xuICAgICAgICByZXR1cm4gYCR7c3RyaW5nLnN1YnN0cigwLCBpbmRleCl9JHtuZXdDaGFyYWN0ZXJ9JHtzdHJpbmcuc3Vic3RyKGluZGV4ICsgbmV3Q2hhcmFjdGVyLmxlbmd0aCl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHZhbHVlIGNsYW1wZWQgdG8gdGhlIG5lYXJlc3QgbWluaW11bS9tYXhpbXVtIHZhbHVlLCBhcyBkZWZpbmVkIGluIHRoZSBzZXR0aW5ncy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3NcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBjbGFtcFRvUmFuZ2VMaW1pdHModmFsdWUsIHNldHRpbmdzKSB7XG4gICAgICAgIC8vWFhYIFRoaXMgZnVuY3Rpb24gYWx3YXlzIGFzc3VtZSBgc2V0dGluZ3MubWluaW11bVZhbHVlYCBpcyBsb3dlciB0aGFuIGBzZXR0aW5ncy5tYXhpbXVtVmFsdWVgXG4gICAgICAgIHJldHVybiBNYXRoLm1heChzZXR0aW5ncy5taW5pbXVtVmFsdWUsIE1hdGgubWluKHNldHRpbmdzLm1heGltdW1WYWx1ZSwgdmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIG51bWJlciBvZiBudW1iZXIgb3IgZG90IGNoYXJhY3RlcnMgb24gdGhlIGxlZnQgc2lkZSBvZiB0aGUgY2FyZXQsIGluIGEgZm9ybWF0dGVkIG51bWJlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXR0ZWROdW1iZXJTdHJpbmdcbiAgICAgKiBAcGFyYW0ge2ludH0gY2FyZXRQb3NpdGlvbiBUaGlzIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlY2ltYWxDaGFyYWN0ZXJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBjb3VudE51bWJlckNoYXJhY3RlcnNPblRoZUNhcmV0TGVmdFNpZGUoZm9ybWF0dGVkTnVtYmVyU3RyaW5nLCBjYXJldFBvc2l0aW9uLCBkZWNpbWFsQ2hhcmFjdGVyKSB7XG4gICAgICAgIC8vIEhlcmUgd2UgY291bnQgdGhlIGRvdCBhbmQgcmVwb3J0IGl0IGFzIGEgbnVtYmVyIGNoYXJhY3RlciB0b28sIHNpbmNlIGl0IHdpbGwgJ3N0YXknIGluIHRoZSBKYXZhc2NyaXB0IG51bWJlciB3aGVuIHVuZm9ybWF0dGVkXG4gICAgICAgIGNvbnN0IG51bWJlckRvdE9yTmVnYXRpdmVTaWduID0gbmV3IFJlZ0V4cChgWzAtOSR7ZGVjaW1hbENoYXJhY3Rlcn0tXWApOyAvLyBObyBuZWVkIHRvIGVzY2FwZSB0aGUgZGVjaW1hbCBjaGFyYWN0ZXIgaGVyZSwgc2luY2UgaXQncyBpbiBgW11gXG5cbiAgICAgICAgbGV0IG51bWJlckRvdEFuZE5lZ2F0aXZlU2lnbkNvdW50ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJldFBvc2l0aW9uOyBpKyspIHtcbiAgICAgICAgICAgIC8vIFRlc3QgaWYgdGhlIGNoYXJhY3RlciBpcyBhIG51bWJlciwgYSBkb3Qgb3IgYW4gaHlwaGVuLiBJZiBpdCBpcywgY291bnQgaXQsIG90aGVyd2lzZSBpZ25vcmUgaXRcbiAgICAgICAgICAgIGlmIChudW1iZXJEb3RPck5lZ2F0aXZlU2lnbi50ZXN0KGZvcm1hdHRlZE51bWJlclN0cmluZ1tpXSkpIHtcbiAgICAgICAgICAgICAgICBudW1iZXJEb3RBbmROZWdhdGl2ZVNpZ25Db3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bWJlckRvdEFuZE5lZ2F0aXZlU2lnbkNvdW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdhbGsgdGhlIGBmb3JtYXR0ZWROdW1iZXJTdHJpbmdgIGZyb20gbGVmdCB0byByaWdodCwgb25lIGNoYXIgYnkgb25lLCBjb3VudGluZyB0aGUgYGZvcm1hdHRlZE51bWJlclN0cmluZ0luZGV4YC5cbiAgICAgKiBJZiB0aGUgY2hhciBpcyBpbiB0aGUgYHJhd051bWJlclN0cmluZ2AgKHN0YXJ0aW5nIGF0IGluZGV4IDApLCB0aGVuIGByYXdOdW1iZXJTdHJpbmdJbmRleCsrYCwgYW5kIGNvbnRpbnVlIHVudGlsXG4gICAgICogdGhlcmUgaXMgbm8gbW9yZSBjaGFyYWN0ZXJzIGluIGByYXdOdW1iZXJTdHJpbmdgKSBvciB0aGF0IGByYXdOdW1iZXJTdHJpbmdJbmRleCA9PT0gY2FyZXRQb3NpdGlvbkluUmF3VmFsdWVgLlxuICAgICAqIFdoZW4geW91IHN0b3AsIHRoZSBgZm9ybWF0dGVkTnVtYmVyU3RyaW5nSW5kZXhgIGlzIHRoZSBwb3NpdGlvbiB3aGVyZSB0aGUgY2FyZXQgc2hvdWxkIGJlIHNldC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogMTIzNDU2N3w4OS4wMSAgIDogcG9zaXRpb24gNyAocmF3TnVtYmVyU3RyaW5nKVxuICAgICAqIDEyMy40NTYuN3w4OSwwMSA6IHBvc2l0aW9uIDkgKGZvcm1hdHRlZE51bWJlclN0cmluZylcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByYXdOdW1iZXJTdHJpbmdcbiAgICAgKiBAcGFyYW0ge2ludH0gY2FyZXRQb3NpdGlvbkluUmF3VmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0dGVkTnVtYmVyU3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlY2ltYWxDaGFyYWN0ZXJcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENhcmV0UG9zaXRpb25JbkZvcm1hdHRlZE51bWJlcihyYXdOdW1iZXJTdHJpbmcsIGNhcmV0UG9zaXRpb25JblJhd1ZhbHVlLCBmb3JtYXR0ZWROdW1iZXJTdHJpbmcsIGRlY2ltYWxDaGFyYWN0ZXIpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkTnVtYmVyU3RyaW5nU2l6ZSA9IGZvcm1hdHRlZE51bWJlclN0cmluZy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJhd051bWJlclN0cmluZ1NpemUgPSByYXdOdW1iZXJTdHJpbmcubGVuZ3RoO1xuXG4gICAgICAgIGxldCBmb3JtYXR0ZWROdW1iZXJTdHJpbmdJbmRleDtcbiAgICAgICAgbGV0IHJhd051bWJlclN0cmluZ0luZGV4ID0gMDtcbiAgICAgICAgZm9yIChmb3JtYXR0ZWROdW1iZXJTdHJpbmdJbmRleCA9IDA7XG4gICAgICAgICAgICBmb3JtYXR0ZWROdW1iZXJTdHJpbmdJbmRleCA8IGZvcm1hdHRlZE51bWJlclN0cmluZ1NpemUgJiZcbiAgICAgICAgICAgIHJhd051bWJlclN0cmluZ0luZGV4IDwgcmF3TnVtYmVyU3RyaW5nU2l6ZSAmJlxuICAgICAgICAgICAgcmF3TnVtYmVyU3RyaW5nSW5kZXggPCBjYXJldFBvc2l0aW9uSW5SYXdWYWx1ZTtcbiAgICAgICAgICAgIGZvcm1hdHRlZE51bWJlclN0cmluZ0luZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChyYXdOdW1iZXJTdHJpbmdbcmF3TnVtYmVyU3RyaW5nSW5kZXhdID09PSBmb3JtYXR0ZWROdW1iZXJTdHJpbmdbZm9ybWF0dGVkTnVtYmVyU3RyaW5nSW5kZXhdIHx8XG4gICAgICAgICAgICAgICAgKHJhd051bWJlclN0cmluZ1tyYXdOdW1iZXJTdHJpbmdJbmRleF0gPT09ICcuJyAmJiBmb3JtYXR0ZWROdW1iZXJTdHJpbmdbZm9ybWF0dGVkTnVtYmVyU3RyaW5nSW5kZXhdID09PSBkZWNpbWFsQ2hhcmFjdGVyKSkge1xuICAgICAgICAgICAgICAgIHJhd051bWJlclN0cmluZ0luZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkTnVtYmVyU3RyaW5nSW5kZXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ291bnQgdGhlIG51bWJlciBvZiBvY2N1cnJlbmNlIG9mIHRoZSBnaXZlbiBjaGFyYWN0ZXIsIGluIHRoZSBnaXZlbiB0ZXh0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY291bnRDaGFySW5UZXh0KGNoYXJhY3RlciwgdGV4dCkge1xuICAgICAgICBsZXQgY2hhckNvdW50ZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0ZXh0W2ldID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICBjaGFyQ291bnRlcisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoYXJDb3VudGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgaW5kZXggdGhhdCBjYW4gYmUgdXNlZCB0byBzZXQgdGhlIGNhcmV0IHBvc2l0aW9uLlxuICAgICAqIFRoaXMgdGFrZXMgaW50byBhY2NvdW50IHRoYXQgdGhlIHBvc2l0aW9uIGlzIHN0YXJ0aW5nIGF0ICcwJywgbm90IDEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludH0gY2hhcmFjdGVyQ291bnRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBjb252ZXJ0Q2hhcmFjdGVyQ291bnRUb0luZGV4UG9zaXRpb24oY2hhcmFjdGVyQ291bnQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KGNoYXJhY3RlckNvdW50LCBjaGFyYWN0ZXJDb3VudCAtIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyb3NzIGJyb3dzZXIgcm91dGluZSBmb3IgZ2V0dGluZyBzZWxlY3RlZCByYW5nZS9jdXJzb3IgcG9zaXRpb24uXG4gICAgICogTm90ZTogdGhpcyBhbHNvIHdvcmtzIHdpdGggZWRnZSBjYXNlcyBsaWtlIGNvbnRlbnRlZGl0YWJsZS1lbmFibGVkIGVsZW1lbnRzLCBhbmQgaGlkZGVuIGlucHV0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxFdmVudFRhcmdldH0gZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHt7fX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0RWxlbWVudFNlbGVjdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge307XG5cbiAgICAgICAgbGV0IGlzU2VsZWN0aW9uU3RhcnRVbmRlZmluZWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpc1NlbGVjdGlvblN0YXJ0VW5kZWZpbmVkID0gdGhpcy5pc1VuZGVmaW5lZChlbGVtZW50LnNlbGVjdGlvblN0YXJ0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlzU2VsZWN0aW9uU3RhcnRVbmRlZmluZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoaXNTZWxlY3Rpb25TdGFydFVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JbmZvID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24uc3RhcnQgPSBzZWxlY3Rpb25JbmZvLnN0YXJ0T2Zmc2V0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmVuZCA9IHNlbGVjdGlvbkluZm8uZW5kT2Zmc2V0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmxlbmd0aCA9IHBvc2l0aW9uLmVuZCAtIHBvc2l0aW9uLnN0YXJ0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5zdGFydCA9IGVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24uZW5kID0gZWxlbWVudC5zZWxlY3Rpb25FbmQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24ubGVuZ3RoID0gcG9zaXRpb24uZW5kIC0gcG9zaXRpb24uc3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBNYW5hZ2VzIHRoZSBjYXNlcyB3aGVyZSA6XG4gICAgICAgICAgICAvLyAtIHRoZSAnY29udGVudGVkaXRhYmxlJyBlbGVtZW50cyB0aGF0IGhhdmUgbm8gc2VsZWN0aW9uc1xuICAgICAgICAgICAgLy8gLSB0aGUgPGlucHV0PiBlbGVtZW50IGlzIG9mIHR5cGUgJ2hpZGRlbidcbiAgICAgICAgICAgIHBvc2l0aW9uLnN0YXJ0ID0gMDtcbiAgICAgICAgICAgIHBvc2l0aW9uLmVuZCA9IDA7XG4gICAgICAgICAgICBwb3NpdGlvbi5sZW5ndGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyb3NzIGJyb3dzZXIgcm91dGluZSBmb3Igc2V0dGluZyBzZWxlY3RlZCByYW5nZS9jdXJzb3IgcG9zaXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxFdmVudFRhcmdldH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7aW50fSBzdGFydFxuICAgICAqIEBwYXJhbSB7aW50fG51bGx9IGVuZFxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRFbGVtZW50U2VsZWN0aW9uKGVsZW1lbnQsIHN0YXJ0LCBlbmQgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkT3JOdWxsT3JFbXB0eShlbmQpKSB7XG4gICAgICAgICAgICBlbmQgPSBzdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzSW5wdXRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xuICAgICAgICB9IGVsc2UgaWYgKCFBdXRvTnVtZXJpY0hlbHBlci5pc051bGwoZWxlbWVudC5maXJzdENoaWxkKSkge1xuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoZWxlbWVudC5maXJzdENoaWxkLCBzdGFydCk7XG4gICAgICAgICAgICByYW5nZS5zZXRFbmQoZWxlbWVudC5maXJzdENoaWxkLCBlbmQpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgdGhyb3cgZXJyb3IgbWVzc2FnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHRocm93c1xuICAgICAqL1xuICAgIHN0YXRpYyB0aHJvd0Vycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgZGlzcGxheSBhIHdhcm5pbmcgbWVzc2FnZXMsIGFjY29yZGluZyB0byB0aGUgZGVidWcgbGV2ZWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd1dhcm5pbmcgSWYgRkFMU0UsIHRoZW4gdGhlIHdhcm5pbmcgbWVzc2FnZSBpcyBub3QgZGlzcGxheWVkXG4gICAgICovXG4gICAgc3RhdGljIHdhcm5pbmcobWVzc2FnZSwgc2hvd1dhcm5pbmcgPSB0cnVlKSB7XG4gICAgICAgIGlmIChzaG93V2FybmluZykge1xuICAgICAgICAgICAgLyogZXNsaW50IG5vLWNvbnNvbGU6IDAgKi9cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgV2FybmluZzogJHttZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gZXZlbnQgaXMgYSB3aGVlbHVwIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1doZWVsRXZlbnR9IHdoZWVsRXZlbnRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNXaGVlbFVwRXZlbnQod2hlZWxFdmVudCkge1xuICAgICAgICBpZiAoIXdoZWVsRXZlbnQuZGVsdGFZKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoYFRoZSBldmVudCBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIgaXMgbm90IGEgdmFsaWQgd2hlZWwgZXZlbnQsICcke3doZWVsRXZlbnQudHlwZX0nIGdpdmVuLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdoZWVsRXZlbnQuZGVsdGFZIDwgMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYHRydWVgIGlmIHRoZSBnaXZlbiBldmVudCBpcyBhIHdoZWVsZG93biBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtXaGVlbEV2ZW50fSB3aGVlbEV2ZW50XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzV2hlZWxEb3duRXZlbnQod2hlZWxFdmVudCkge1xuICAgICAgICBpZiAoIXdoZWVsRXZlbnQuZGVsdGFZKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoYFRoZSBldmVudCBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIgaXMgbm90IGEgdmFsaWQgd2hlZWwgZXZlbnQsICcke3doZWVsRXZlbnQudHlwZX0nIGdpdmVuLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdoZWVsRXZlbnQuZGVsdGFZID4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGdpdmVuIHJhdyB2YWx1ZSB0cnVuY2F0ZWQgYXQgdGhlIGdpdmVuIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyBgZGVjaW1hbFBsYWNlc2AuXG4gICAgICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCByb3VuZCB0aGUgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGZvcmNlRGVjaW1hbFBsYWNlcygxMjMuNDU2NzgsIDApIC0+ICcxMjMuNDU2NzgnXG4gICAgICogZm9yY2VEZWNpbWFsUGxhY2VzKDEyMy40NTY3OCwgMSkgLT4gJzEyMy40J1xuICAgICAqIGZvcmNlRGVjaW1hbFBsYWNlcygxMjMuNDU2NzgsIDIpIC0+ICcxMjMuNDUnXG4gICAgICogZm9yY2VEZWNpbWFsUGxhY2VzKDEyMy40NTY3OCwgMykgLT4gJzEyMy40NTYnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge2ludH0gZGVjaW1hbFBsYWNlc1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ8c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBmb3JjZURlY2ltYWxQbGFjZXModmFsdWUsIGRlY2ltYWxQbGFjZXMpIHtcbiAgICAgICAgLy8gV2UgY291bGQgbWFrZSBzdXJlIGBkZWNpbWFsUGxhY2VzYCBpcyBhbiBpbnRlZ2VyIGFuZCBwb3NpdGl2ZSwgYnV0IHdlJ2xsIGxlYXZlIHRoYXQgdG8gdGhlIGRldiBjYWxsaW5nIHRoaXMgZnVuY3Rpb24uXG4gICAgICAgIGNvbnN0IFtpbnRlZ2VyUGFydCwgZGVjaW1hbFBhcnRdID0gU3RyaW5nKHZhbHVlKS5zcGxpdCgnLicpO1xuICAgICAgICBpZiAoIWRlY2ltYWxQYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7aW50ZWdlclBhcnR9LiR7ZGVjaW1hbFBhcnQuc3Vic3RyKDAsIGRlY2ltYWxQbGFjZXMpfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSAnbmVhcmVzdCByb3VuZGVkJyB2YWx1ZSwgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBzdGVwIHNpemUuXG4gICAgICogQGV4YW1wbGUgcm91bmRUb05lYXJlc3QoMjY0Nzg5LCAxMDAwMCkpID0+IDI2MDAwMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBQbGFjZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHN0YXRpYyByb3VuZFRvTmVhcmVzdCh2YWx1ZSwgc3RlcFBsYWNlID0gMTAwMCkge1xuICAgICAgICBpZiAoMCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0ZXBQbGFjZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdUaGUgYHN0ZXBQbGFjZWAgdXNlZCB0byByb3VuZCBpcyBlcXVhbCB0byBgMGAuIFRoaXMgdmFsdWUgbXVzdCBub3QgYmUgZXF1YWwgdG8gemVyby4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcFBsYWNlKSAqIHN0ZXBQbGFjZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlICduZWFyZXN0IHJvdW5kZWQnIHZhbHVlIGJ5IGF1dG9tYXRpY2FsbHkgYWRkaW5nIG9yIHN1YnRyYWN0aW5nIHRoZSBjYWxjdWxhdGVkIG9mZnNldCB0byB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAgICAgKiBUaGlzIGlzIGRvbmUgd2l0aG91dCBoYXZpbmcgdG8gcGFzcyBhIHN0ZXAgdG8gdGhpcyBmdW5jdGlvbiwgYW5kIGJhc2VkIG9uIHRoZSBzaXplIG9mIHRoZSBnaXZlbiBgdmFsdWVgLlxuICAgICAqXG4gICAgICogQGV4YW1wbGUgICAgICAgICAgICAgICAgICAgIENhbGN1bGF0ZWQgb2Zmc2V0XG4gICAgICogICAgICAgICAgIDEgLT4gICAgICAgICAgIDEgKDEpXG4gICAgICogICAgICAgICAgMTQgLT4gICAgICAgICAgMTAgKDEwKVxuICAgICAqICAgICAgICAgMTQzIC0+ICAgICAgICAgMTQwICgxMClcbiAgICAgKiAgICAgICAxLjI3OCAtPiAgICAgICAxLjMwMCAoMTAwKVxuICAgICAqICAgICAgMjguNDU2IC0+ICAgICAgMjguNTAwICgxMDApXG4gICAgICogICAgIDI3Ni4zNDUgLT4gICAgIDI3Ni4wMDAgKDEuMDAwKVxuICAgICAqICAgNC41MzQuMDYxIC0+ICAgNC41MzAuMDAwICgxMC4wMDApXG4gICAgICogIDY2LjcyMy44NDQgLT4gIDY2LjcwMC4wMDAgKDEwMC4wMDApXG4gICAgICogMjU3LjgzMy40MTEgLT4gMjU4LjAwMC4wMDAgKDEuMDAwLjAwMClcbiAgICAgKlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5pdGlhbCAgIEFkZGVkICAgT2Zmc2V0XG4gICAgICogMiBkZWNpbWFsUGxhY2VzUmF3VmFsdWUgOiAxLjEyICAgLT4gMi4wMCAgICgxKVxuICAgICAqIDMgZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlIDogMS4xMjMgIC0+IDIuMDAwICAoMSlcbiAgICAgKlxuICAgICAqIFNwZWNpYWwgY2FzZSB3aGVuIHRoZSBgdmFsdWVgIHRvIHJvdW5kIGlzIGJldHdlZW4gLTEgYW5kIDEsIGV4Y2x1ZGVkIDpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICBOdW1iZXIgb2YgICAgICAgICAgICAgSW5pdGlhbCAgIFJlc3VsdCAgQ2FsY3VsYXRlZFxuICAgICAqICAgICBkZWNpbWFsIHBsYWNlcyAgICAgICAgdmFsdWUgICAgIChhZGQpICAgb2Zmc2V0XG4gICAgICogMiBkZWNpbWFsUGxhY2VzUmF3VmFsdWUgOiAwLjEyICAgLT4gMC4xMyAgICAoMC4wMSkgOiBNYXRoLnBvdygxMCwgLTIpXG4gICAgICogMiBkZWNpbWFsUGxhY2VzUmF3VmFsdWUgOiAwLjAxICAgLT4gMC4wMiAgICAoMC4wMSlcbiAgICAgKiAyIGRlY2ltYWxQbGFjZXNSYXdWYWx1ZSA6IDAuMDAgICAtPiAwLjAxICAgICgwLjAxKVxuICAgICAqXG4gICAgICogMyBkZWNpbWFsUGxhY2VzUmF3VmFsdWUgOiAwLjEyMyAgLT4gMC4xMzMgICAoMC4wMSkgIDogTWF0aC5wb3coMTAsIC0yKVxuICAgICAqIDMgZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlIDogMC4wMTIgIC0+IDAuMDEzICAgKDAuMDAxKSA6IE1hdGgucG93KDEwLCAtMylcbiAgICAgKiAzIGRlY2ltYWxQbGFjZXNSYXdWYWx1ZSA6IDAuMDAxICAtPiAwLjAwMSAgICgwLjAwMSlcbiAgICAgKiAzIGRlY2ltYWxQbGFjZXNSYXdWYWx1ZSA6IDAuMDAwICAtPiAwLjAwMSAgICgwLjAwMSlcbiAgICAgKlxuICAgICAqIDQgZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlIDogMC40MTIzIC0+IDAuNDIwMCAgKDAuMDEpICAgOiBNYXRoLnBvdygxMCwgLTIpXG4gICAgICogNCBkZWNpbWFsUGxhY2VzUmF3VmFsdWUgOiAwLjA0MTIgLT4gMC4wNDIwICAoMC4wMDEpICA6IE1hdGgucG93KDEwLCAtMylcbiAgICAgKiA0IGRlY2ltYWxQbGFjZXNSYXdWYWx1ZSA6IDAuMDA0MSAtPiAwLjAwNDIgICgwLjAwMDEpIDogTWF0aC5wb3coMTAsIC00KVxuICAgICAqIDQgZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlIDogMC4wMDA0IC0+IDAuMDAwNSAgKDAuMDAwMSlcbiAgICAgKiA0IGRlY2ltYWxQbGFjZXNSYXdWYWx1ZSA6IDAuMDAwMCAtPiAwLjAwMDEgICgwLjAwMDEpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQWRkaXRpb25cbiAgICAgKiBAcGFyYW0ge2ludH0gZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlIFRoZSBwcmVjaXNpb24gbmVlZGVkIGJ5IHRoZSBgcmF3VmFsdWVgXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc3RhdGljIG1vZGlmeUFuZFJvdW5kVG9OZWFyZXN0QXV0byh2YWx1ZSwgaXNBZGRpdGlvbiwgZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHRoaXMuZm9yY2VEZWNpbWFsUGxhY2VzKHZhbHVlLCBkZWNpbWFsUGxhY2VzUmF3VmFsdWUpKTsgLy8gTWFrZSBzdXJlIHRoYXQgJzAuMTMwMDAwMDAwMDEnIGlzIGNvbnZlcnRlZCB0byB0aGUgbnVtYmVyIG9mIHJhd1ZhbHVlIGRlY2ltYWwgcGxhY2VzICcwLjEzJ1xuXG4gICAgICAgIGNvbnN0IGFic1ZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuICAgICAgICBpZiAoYWJzVmFsdWUgPj0gMCAmJiBhYnNWYWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhd1ZhbHVlTWluaW11bU9mZnNldCA9IE1hdGgucG93KDEwLCAtZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIDQgZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlIDogMC4wMDAwIC0+IDAuMDAwMSAoMC4wMDAxKVxuICAgICAgICAgICAgICAgIHJldHVybiAoaXNBZGRpdGlvbik/cmF3VmFsdWVNaW5pbXVtT2Zmc2V0Oi1yYXdWYWx1ZU1pbmltdW1PZmZzZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBvZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBtaW5pbXVtT2Zmc2V0Rmlyc3REZWNpbWFsUGxhY2VJbmRleCA9IGRlY2ltYWxQbGFjZXNSYXdWYWx1ZTtcbiAgICAgICAgICAgIC8vIEZpbmQgd2hlcmUgaXMgdGhlIGZpcnN0IG5vbi16ZXJvIGRlY2ltYWwgcGxhY2VzXG4gICAgICAgICAgICBjb25zdCBpbmRleEZpcnN0Tm9uWmVyb0RlY2ltYWxQbGFjZSA9IHRoaXMuaW5kZXhGaXJzdE5vblplcm9EZWNpbWFsUGxhY2UodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGluZGV4Rmlyc3ROb25aZXJvRGVjaW1hbFBsYWNlID49IG1pbmltdW1PZmZzZXRGaXJzdERlY2ltYWxQbGFjZUluZGV4IC0gMSkge1xuICAgICAgICAgICAgICAgIC8qIDQgZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlIDogMC4wMDQxIC0+IDAuMDA0MiAoMC4wMDAxKSA6IE1hdGgucG93KDEwLCAtNClcbiAgICAgICAgICAgICAgICAgKiA0IGRlY2ltYWxQbGFjZXNSYXdWYWx1ZSA6IDAuMDAwNCAtPiAwLjAwMDUgKDAuMDAwMSlcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBvZmZzZXQgPSByYXdWYWx1ZU1pbmltdW1PZmZzZXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IE1hdGgucG93KDEwLCAtKGluZGV4Rmlyc3ROb25aZXJvRGVjaW1hbFBsYWNlICsgMSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgICAgaWYgKGlzQWRkaXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZSArIG9mZnNldDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWUgLSBvZmZzZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdW5kVG9OZWFyZXN0KHJlc3VsdCwgb2Zmc2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZvciB2YWx1ZXMgPj0gMVxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoVmFsdWUgPSBNYXRoLmFicyh2YWx1ZSkudG9TdHJpbmcoKS5sZW5ndGg7IC8vIGBNYXRoLmFicygpYCBpcyBuZWVkZWQgaGVyZSB0byBvbWl0IHRoZSBuZWdhdGl2ZSBzaWduICctJyBpbiBjYXNlIG9mIGEgbmVnYXRpdmUgdmFsdWVcblxuICAgICAgICAgICAgbGV0IHBvdztcbiAgICAgICAgICAgIHN3aXRjaCAobGVuZ3RoVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2VzIGZvciBzbWFsbCBudW1iZXJzXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBwb3cgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBwb3cgPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBwb3cgPSAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcG93ID0gbGVuZ3RoVmFsdWUgLSAzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5wb3coMTAsIHBvdyk7XG5cbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgICBpZiAoaXNBZGRpdGlvbikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlICsgb2Zmc2V0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZSAtIG9mZnNldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdCA8PSAxMCAmJiByZXN1bHQgPj0gLTEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91bmRUb05lYXJlc3QocmVzdWx0LCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSAnbmVhcmVzdCByb3VuZGVkJyB2YWx1ZSBhdXRvbWF0aWNhbGx5IGJ5IGFkZGluZyB0aGUgY2FsY3VsYXRlZCBvZmZzZXQgdG8gdGhlIGluaXRpYWwgdmFsdWUuXG4gICAgICogVGhpcyB3aWxsIGxpbWl0IHRoZSByZXN1bHQgdG8gdGhlIGdpdmVuIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyBgZGVjaW1hbFBsYWNlc0xpbWl0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7aW50fSBkZWNpbWFsUGxhY2VzTGltaXRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkQW5kUm91bmRUb05lYXJlc3RBdXRvKHZhbHVlLCBkZWNpbWFsUGxhY2VzTGltaXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kaWZ5QW5kUm91bmRUb05lYXJlc3RBdXRvKHZhbHVlLCB0cnVlLCBkZWNpbWFsUGxhY2VzTGltaXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgJ25lYXJlc3Qgcm91bmRlZCcgdmFsdWUgYXV0b21hdGljYWxseSBieSBzdWJ0cmFjdGluZyB0aGUgY2FsY3VsYXRlZCBvZmZzZXQgdG8gdGhlIGluaXRpYWwgdmFsdWUuXG4gICAgICogVGhpcyB3aWxsIGxpbWl0IHRoZSByZXN1bHQgdG8gdGhlIGdpdmVuIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyBgZGVjaW1hbFBsYWNlc0xpbWl0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7aW50fSBkZWNpbWFsUGxhY2VzTGltaXRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgc3VidHJhY3RBbmRSb3VuZFRvTmVhcmVzdEF1dG8odmFsdWUsIGRlY2ltYWxQbGFjZXNMaW1pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RpZnlBbmRSb3VuZFRvTmVhcmVzdEF1dG8odmFsdWUsIGZhbHNlLCBkZWNpbWFsUGxhY2VzTGltaXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2UgYW4gYXJhYmljIG51bWJlciBhcyBhIHN0cmluZyBhbmQgcmV0dXJuIGEgamF2YXNjcmlwdCBudW1iZXIuXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBmdW5jdGlvbiBkb2VzIG5vdCB0cnkgdG8gY29udmVydCB0aGUgYXJhYmljIGRlY2ltYWwgYW5kIHRob3VzYW5kIHNlcGFyYXRvciBjaGFyYWN0ZXJzLlxuICAgICAqIFRoaXMgcmV0dXJucyBgTmFOYCBpcyB0aGUgY29udmVyc2lvbiBpcyBub3QgcG9zc2libGUuXG4gICAgICogQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTcwMjUzOTIvMjgzNDg5OFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFyYWJpY051bWJlcnNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJldHVybkFOdW1iZXIgSWYgYHRydWVgLCByZXR1cm4gYSBOdW1iZXIsIG90aGVyd2lzZSByZXR1cm4gYSBTdHJpbmdcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcnNlRGVjaW1hbENoYXJhY3RlclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyc2VUaG91c2FuZFNlcGFyYXRvclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVtYmVyfE5hTn1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXJhYmljVG9MYXRpbk51bWJlcnMoYXJhYmljTnVtYmVycywgcmV0dXJuQU51bWJlciA9IHRydWUsIHBhcnNlRGVjaW1hbENoYXJhY3RlciA9IGZhbHNlLCBwYXJzZVRob3VzYW5kU2VwYXJhdG9yID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdWxsKGFyYWJpY051bWJlcnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJhYmljTnVtYmVycztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBhcmFiaWNOdW1iZXJzLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJhYmljTnVtYmVycztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQubWF0Y2goL1vZoNmh2aLZo9mk2aXZptmn2ajZqdu027Xbtl0vZykgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIElmIG5vIEFyYWJpYy9QZXJzaWFuIG51bWJlcnMgYXJlIGZvdW5kLCByZXR1cm4gdGhlIG51bWVyaWMgc3RyaW5nIG9yIG51bWJlciBkaXJlY3RseVxuICAgICAgICAgICAgaWYgKHJldHVybkFOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBOdW1iZXIocmVzdWx0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZURlY2ltYWxDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC/Zqy8sICcuJyk7IC8vIERlY2ltYWwgY2hhcmFjdGVyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VUaG91c2FuZFNlcGFyYXRvcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL9msL2csICcnKTsgLy8gVGhvdXNhbmQgc2VwYXJhdG9yXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXBsYWNlIHRoZSBudW1iZXJzIG9ubHlcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL1vZoNmh2aLZo9mk2aXZptmn2ajZqV0vZywgZCA9PiBkLmNoYXJDb2RlQXQoMCkgLSAxNjMyKSAvLyBBcmFiaWMgbnVtYmVyc1xuICAgICAgICAgICAgLnJlcGxhY2UoL1vbsNux27Lbs9u027Xbttu327jbuV0vZywgZCA9PiBkLmNoYXJDb2RlQXQoMCkgLSAxNzc2KTsgLy8gUGVyc2lhbiBudW1iZXJzXG5cbiAgICAgICAgLy8gYE5hTmAgaGFzIHByZWNlZGVuY2Ugb3ZlciB0aGUgc3RyaW5nIGAnTmFOJ2BcbiAgICAgICAgY29uc3QgcmVzdWx0QXNOdW1iZXIgPSBOdW1iZXIocmVzdWx0KTtcbiAgICAgICAgaWYgKGlzTmFOKHJlc3VsdEFzTnVtYmVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdEFzTnVtYmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJldHVybkFOdW1iZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdEFzTnVtYmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjdXN0b20gZXZlbnQgYW5kIGltbWVkaWF0ZWx5IHNlbnQgaXQgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICAgKiBCeSBkZWZhdWx0LCBpZiBubyBlbGVtZW50IGlzIGdpdmVuLCB0aGUgZXZlbnQgaXMgdGhyb3duIGZyb20gYGRvY3VtZW50YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fEhUTUxEb2N1bWVudHxFdmVudFRhcmdldH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZXRhaWxcbiAgICAgKi9cbiAgICBzdGF0aWMgdHJpZ2dlckV2ZW50KGV2ZW50TmFtZSwgZWxlbWVudCA9IGRvY3VtZW50LCBkZXRhaWwgPSBudWxsKSB7XG4gICAgICAgIGxldCBldmVudDtcbiAgICAgICAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xuICAgICAgICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGRldGFpbCwgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlIH0pOyAvLyBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQgYnkgZGVmYXVsdCBieSBJRSA7IFdlIHVzZSB0aGUgcG9seWZpbGwgZm9yIElFOSBhbmQgbGF0ZXIuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgeyBkZXRhaWwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIHBhcnNlIG1pbmltdW1WYWx1ZSwgbWF4aW11bVZhbHVlICYgdGhlIGlucHV0IHZhbHVlIHRvIHByZXBhcmUgZm9yIHRlc3RpbmcgdG8gZGV0ZXJtaW5lIGlmIHRoZSB2YWx1ZSBmYWxscyB3aXRoaW4gdGhlIG1pbiAvIG1heCByYW5nZS5cbiAgICAgKiBSZXR1cm4gYW4gb2JqZWN0IGV4YW1wbGU6IG1pbmltdW1WYWx1ZTogXCI5OTk5OTk5OTk5OTk5OTkuOTlcIiByZXR1cm5zIHRoZSBmb2xsb3dpbmcgXCJ7czogLTEsIGU6IDEyLCBjOiBBcnJheVsxNV19XCIuXG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGFkYXB0ZWQgZnJvbSBCaWcuanMgaHR0cHM6Ly9naXRodWIuY29tL01pa2VNY2wvYmlnLmpzLy4gTWFueSB0aGFua3MgdG8gTWlrZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbiBBIG51bWVyaWMgdmFsdWUuXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZVN0cihuKSB7XG4gICAgICAgIGNvbnN0IHggPSB7fTsgLy8gQSBCaWcgbnVtYmVyIGluc3RhbmNlLlxuICAgICAgICBsZXQgZTtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBuTDtcbiAgICAgICAgbGV0IGo7XG5cbiAgICAgICAgLy8gTWludXMgemVybz9cbiAgICAgICAgaWYgKG4gPT09IDAgJiYgMSAvIG4gPCAwKSB7XG4gICAgICAgICAgICBuID0gJy0wJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERldGVybWluZSBzaWduLiAxIHBvc2l0aXZlLCAtMSBuZWdhdGl2ZVxuICAgICAgICBuID0gbi50b1N0cmluZygpO1xuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aXZlU3RyaWN0KG4sICctJykpIHtcbiAgICAgICAgICAgIG4gPSBuLnNsaWNlKDEpO1xuICAgICAgICAgICAgeC5zID0gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4LnMgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVjaW1hbCBwb2ludD9cbiAgICAgICAgZSA9IG4uaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZSA+IC0xKSB7XG4gICAgICAgICAgICBuID0gbi5yZXBsYWNlKCcuJywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGVuZ3RoIG9mIHN0cmluZyBpZiBubyBkZWNpbWFsIGNoYXJhY3RlclxuICAgICAgICBpZiAoZSA8IDApIHtcbiAgICAgICAgICAgIC8vIEludGVnZXJcbiAgICAgICAgICAgIGUgPSBuLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERldGVybWluZSBsZWFkaW5nIHplcm9zXG4gICAgICAgIGkgPSAobi5zZWFyY2goL1sxLTldL2kpID09PSAtMSkgPyBuLmxlbmd0aCA6IG4uc2VhcmNoKC9bMS05XS9pKTtcbiAgICAgICAgbkwgPSBuLmxlbmd0aDtcbiAgICAgICAgaWYgKGkgPT09IG5MKSB7XG4gICAgICAgICAgICAvLyBaZXJvXG4gICAgICAgICAgICB4LmUgPSAwO1xuICAgICAgICAgICAgeC5jID0gWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRyYWlsaW5nIHplcm9zXG4gICAgICAgICAgICBmb3IgKGogPSBuTCAtIDE7IG4uY2hhckF0KGopID09PSAnMCc7IGogLT0gMSkge1xuICAgICAgICAgICAgICAgIG5MIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuTCAtPSAxO1xuXG4gICAgICAgICAgICAvLyBEZWNpbWFsIGxvY2F0aW9uXG4gICAgICAgICAgICB4LmUgPSBlIC0gaSAtIDE7XG4gICAgICAgICAgICB4LmMgPSBbXTtcblxuICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gYXJyYXkgb2YgZGlnaXRzIHdpdGhvdXQgbGVhZGluZy90cmFpbGluZyB6ZXJvc1xuICAgICAgICAgICAgZm9yIChlID0gMDsgaSA8PSBuTDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgeC5jW2VdID0gK24uY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIGUgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIHRlc3QgaWYgdGhlIGlucHV0IHZhbHVlIGZhbGxzIHdpdGggdGhlIE1pbiAvIE1heCBzZXR0aW5ncy5cbiAgICAgKiBUaGlzIHVzZXMgdGhlIHBhcnNlZCBzdHJpbmdzIGZvciB0aGUgYWJvdmUgcGFyc2VTdHIgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGFkYXB0ZWQgZnJvbSBCaWcuanMgaHR0cHM6Ly9naXRodWIuY29tL01pa2VNY2wvYmlnLmpzLy4gTWFueSB0aGFua3MgdG8gTWlrZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB5IEJpZyBudW1iZXIgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0geCBCaWcgbnVtYmVyIGluc3RhbmNlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc3RhdGljIHRlc3RNaW5NYXgoeSwgeCkge1xuICAgICAgICBjb25zdCB4YyA9IHguYztcbiAgICAgICAgY29uc3QgeWMgPSB5LmM7XG4gICAgICAgIGxldCBpID0geC5zO1xuICAgICAgICBsZXQgaiA9IHkucztcbiAgICAgICAgbGV0IGsgPSB4LmU7XG4gICAgICAgIGxldCBsID0geS5lO1xuXG4gICAgICAgIC8vIEVpdGhlciB6ZXJvP1xuICAgICAgICBpZiAoIXhjWzBdIHx8ICF5Y1swXSkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICAgIGlmICgheGNbMF0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAheWNbMF0/MDotajtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaWducyBkaWZmZXI/XG4gICAgICAgIGlmIChpICE9PSBqKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB4TmVnID0gaSA8IDA7XG5cbiAgICAgICAgLy8gQ29tcGFyZSBleHBvbmVudHNcbiAgICAgICAgaWYgKGsgIT09IGwpIHtcbiAgICAgICAgICAgIHJldHVybiAoayA+IGwgXiB4TmVnKT8xOi0xO1xuICAgICAgICB9XG4gICAgICAgIGkgPSAtMTtcbiAgICAgICAgayA9IHhjLmxlbmd0aDtcbiAgICAgICAgbCA9IHljLmxlbmd0aDtcbiAgICAgICAgaiA9IChrIDwgbCkgPyBrIDogbDtcblxuICAgICAgICAvLyBDb21wYXJlIGRpZ2l0IGJ5IGRpZ2l0XG4gICAgICAgIGZvciAoaSArPSAxOyBpIDwgajsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoeGNbaV0gIT09IHljW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh4Y1tpXSA+IHljW2ldIF4geE5lZyk/MTotMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbXBhcmUgbGVuZ3Roc1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAoayA9PT0gbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IChrID4gbCBeIHhOZWcpPzE6LTE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGEgcmFuZG9tIHN0cmluZy5cbiAgICAgKiBjZi4gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvODA4NDI0OC8yODM0ODk4XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RyTGVuZ3RoIExlbmd0aCBvZiB0aGUgZ2VuZXJhdGVkIHN0cmluZyAoaW4gY2hhcmFjdGVyIGNvdW50KVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIHJhbmRvbVN0cmluZyhzdHJMZW5ndGggPSA1KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpXG4gICAgICAgICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAgICAgICAuc3Vic3RyKDIsIHN0ckxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBET00gZWxlbWVudCB3aGVuIHBhc3NlZCBlaXRoZXIgYSBET00gZWxlbWVudCBvciBhIHNlbGVjdG9yIHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBkb21FbGVtZW50T3JTZWxlY3RvclxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZG9tRWxlbWVudChkb21FbGVtZW50T3JTZWxlY3Rvcikge1xuICAgICAgICBsZXQgZG9tRWxlbWVudDtcbiAgICAgICAgaWYgKEF1dG9OdW1lcmljSGVscGVyLmlzU3RyaW5nKGRvbUVsZW1lbnRPclNlbGVjdG9yKSkge1xuICAgICAgICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZG9tRWxlbWVudE9yU2VsZWN0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRPclNlbGVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgdGhlIGN1cnJlbnQgZWxlbWVudCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8SFRNTElucHV0RWxlbWVudHxFdmVudFRhcmdldH0gZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ8c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgc3RhdGljIGdldEVsZW1lbnRWYWx1ZShlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vZGlmeSB0aGUgZWxlbWVudCB2YWx1ZSBkaXJlY3RseS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8SFRNTElucHV0RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRFbGVtZW50VmFsdWUoZWxlbWVudCwgdmFsdWUgPSBudWxsKSB7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBjbG9uZSB0aGUgZ2l2ZW4gb2JqZWN0LCBhbmQgcmV0dXJuIGl0LlxuICAgICAqIFdBUk5JTkc6IFRoaXMgZG9lcyBub3QgZG8gYSBkZWVwIGNsb25pbmcuXG4gICAgICogY2YuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ24jRXhhbXBsZXNcbiAgICAgKiAvL1RPRE8gQWRkIGEgYGRlZXBgIG9wdGlvbiB0byBjbG9uZSBvYmplY3Qgd2l0aCBtb3JlIHRoYW4gb25lIGRlcHRoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgY2xvbmVPYmplY3Qob2JqKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhICdjYW1lbGl6ZWQnIHZlcnNpb24gb2YgdGhlIGdpdmVuIHN0cmluZy5cbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIGFzc3VtZSB0aGF0IDpcbiAgICAgKiAtIHRoZSBzZXBhcmF0b3JzIGFyZSBoeXBoZW5zICctJyxcbiAgICAgKiAtIHRoZSAnZGF0YS0nIHN0cmluZyBzaG91bGQgYmUgcmVtb3ZlZCwgYW5kXG4gICAgICogLSB0aGF0IHRoZSB2ZXJ5IGZpcnN0IHdvcmQgc2hvdWxkIG5vdCBiZSBjYXBpdGFsaXplZC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlIGNhbWVsaXplKCdkYXRhLWN1cnJlbmN5LXN5bWJvbCcpID0+ICdjdXJyZW5jeVN5bWJvbCdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGV4dCB0byBjYW1lbGl6ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZXBhcmF0b3IgQ2hhcmFjdGVyIHRoYXQgc2VwYXJhdGUgZWFjaCB3b3JkXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZW1vdmVEYXRhIElmIHNldCB0byBgdHJ1ZWAsIHJlbW92ZSB0aGUgYGRhdGEtYCBwYXJ0IHRoYXQgeW91IGNhbiBmaW5kIG9uIHNvbWUgaHRtbCBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBza2lwRmlyc3RXb3JkIElmIHNldCB0byBgdHJ1ZWAsIGRvIG5vdCBjYXBpdGFsaXplIHRoZSB2ZXJ5IGZpcnN0IHdvcmRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgc3RhdGljIGNhbWVsaXplKHN0ciwgc2VwYXJhdG9yID0gJy0nLCByZW1vdmVEYXRhID0gdHJ1ZSwgc2tpcEZpcnN0V29yZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdWxsKHN0cikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbW92ZURhdGEpIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9eZGF0YS0vLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDdXQgdGhlIHN0cmluZyBpbnRvIHdvcmRzXG4gICAgICAgIGNvbnN0IHdvcmRzID0gc3RyLnNwbGl0KHNlcGFyYXRvcik7XG5cbiAgICAgICAgLy8gQ2FwaXRhbGl6ZSBlYWNoIHdvcmRcbiAgICAgICAgbGV0IHJlc3VsdCA9IHdvcmRzLm1hcCh3b3JkID0+IGAke3dvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHt3b3JkLnNsaWNlKDEpfWApO1xuXG4gICAgICAgIC8vIFRoZW4gY29uY2F0ZW5hdGUgdGhlbSBiYWNrXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5qb2luKCcnKTtcblxuICAgICAgICBpZiAoc2tpcEZpcnN0V29yZCkge1xuICAgICAgICAgICAgLy8gU2tpcCB0aGUgdmVyeSBmaXJzdCBsZXR0ZXJcbiAgICAgICAgICAgIHJlc3VsdCA9IGAke3Jlc3VsdC5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKX0ke3Jlc3VsdC5zbGljZSgxKX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHRleHQgY29tcG9uZW50IG9mIHRoZSBnaXZlbiBET00gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZG9tRWxlbWVudFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIHRleHQoZG9tRWxlbWVudCkge1xuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGRvbUVsZW1lbnQubm9kZVR5cGU7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgLy8gY2YuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Ob2RlL25vZGVUeXBlXG4gICAgICAgIGlmIChub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICAgICAgIG5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUgfHxcbiAgICAgICAgICAgIG5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGRvbUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBkb21FbGVtZW50Lm5vZGVWYWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHRleHQgY29udGVudCBvZiB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBkb21FbGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0VGV4dChkb21FbGVtZW50LCB0ZXh0KSB7XG4gICAgICAgIGNvbnN0IG5vZGVUeXBlID0gZG9tRWxlbWVudC5ub2RlVHlwZTtcbiAgICAgICAgaWYgKG5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgICAgICAgbm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSB8fFxuICAgICAgICAgICAgbm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgZG9tRWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy9UT0RPIERpc3BsYXkgYSB3YXJuaW5nIGlmIHRoYXQgZnVuY3Rpb24gZG9lcyBub3QgZG8gYW55dGhpbmc/XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlsdGVyIG91dCB0aGUgZ2l2ZW4gYGFycmAgYXJyYXkgd2l0aCB0aGUgZWxlbWVudHMgZm91bmQgaW4gYGV4Y2x1ZGVkRWxlbWVudHNgLlxuICAgICAqIFRoaXMgcmV0dXJucyBhIG5ldyBhcnJheSBhbmQgZG9lcyBub3QgbW9kaWZ5IHRoZSBzb3VyY2UuXG4gICAgICogY2YuIHZlcmlmaWNhdGlvbiBoZXJlIDogaHR0cDovL2NvZGVwZW4uaW8vQW5vdGhlckxpbnV4VXNlci9wZW4vWHB2ck1nP2VkaXRvcnM9MDAxMlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHtBcnJheX0gZXhjbHVkZWRFbGVtZW50c1xuICAgICAqIEByZXR1cm5zIHsqfEFycmF5LjxUPn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZmlsdGVyT3V0KGFyciwgZXhjbHVkZWRFbGVtZW50cykge1xuICAgICAgICByZXR1cm4gYXJyLmZpbHRlcihlbGVtZW50ID0+ICF0aGlzLmlzSW5BcnJheShlbGVtZW50LCBleGNsdWRlZEVsZW1lbnRzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSB0cmFpbGluZyB6ZXJvcyBpbiB0aGUgZGVjaW1hbCBwYXJ0IG9mIGEgbnVtYmVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG51bWVyaWNTdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgdHJpbVBhZGRlZFplcm9zRnJvbURlY2ltYWxQbGFjZXMobnVtZXJpY1N0cmluZykge1xuICAgICAgICBudW1lcmljU3RyaW5nID0gU3RyaW5nKG51bWVyaWNTdHJpbmcpO1xuICAgICAgICBpZiAobnVtZXJpY1N0cmluZyA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFtpbnRlZ2VyUGFydCwgZGVjaW1hbFBhcnRdID0gbnVtZXJpY1N0cmluZy5zcGxpdCgnLicpO1xuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZE9yTnVsbE9yRW1wdHkoZGVjaW1hbFBhcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW50ZWdlclBhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0cmltbWVkRGVjaW1hbFBhcnQgPSBkZWNpbWFsUGFydC5yZXBsYWNlKC8wKyQvZywgJycpO1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmICh0cmltbWVkRGVjaW1hbFBhcnQgPT09ICcnKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBpbnRlZ2VyUGFydDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGAke2ludGVnZXJQYXJ0fS4ke3RyaW1tZWREZWNpbWFsUGFydH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHRvcC1tb3N0IGhvdmVyZWQgaXRlbSBieSB0aGUgbW91c2UgY3Vyc29yLlxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc3RhdGljIGdldEhvdmVyZWRFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBob3ZlcmVkRWxlbWVudHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnOmhvdmVyJyldO1xuICAgICAgICByZXR1cm4gaG92ZXJlZEVsZW1lbnRzW2hvdmVyZWRFbGVtZW50cy5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGdpdmVuIGFycmF5IHRyaW1tZWQgdG8gdGhlIGdpdmVuIGxlbmd0aC5cbiAgICAgKiBAZXhhbXBsZSBhcnJheVRyaW0oWzEsIDIsIDMsIDRdLCAyKSAtPiBbMSwgMl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHN0YXRpYyBhcnJheVRyaW0oYXJyYXksIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIGlmIChhcnJMZW5ndGggPT09IDAgfHwgbGVuZ3RoID4gYXJyTGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBBbHNvIG1hbmFnZSB0aGUgY2FzZSB3aGVyZSBgbGVuZ3RoYCBpcyBoaWdoZXIgdGhhbiB0aGUgY3VycmVudCBsZW5ndGhcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZW5ndGggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBhcnJheS5sZW5ndGggPSBwYXJzZUludChsZW5ndGgsIDEwKTtcblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2UgYWxsIHRoZSBnaXZlbiBhcnJheXMgYnkga2VlcGluZyBvbmx5IHVuaXF1ZSBlbGVtZW50cywgYW5kIHJldHVybiBhbiBhcnJheSB3aXRoIGRlLWR1cGxpY2F0ZWQgdmFsdWVzLlxuICAgICAqIGNmLiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNzY2NDk3MS8yODM0ODk4XG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLmFycmF5fSBhcnJheXNcbiAgICAgKiBAcmV0dXJucyB7WypdfVxuICAgICAqL1xuICAgIHN0YXRpYyBhcnJheVVuaXF1ZSguLi5hcnJheXMpIHsgLy9GSVhNRSDDoCB0ZXN0ZXJcbiAgICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KFtdLmNvbmNhdCguLi5hcnJheXMpKV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2UgYWxsIHRoZSBnaXZlbiBNYXBzIGJ5IGtlZXBpbmcgb25seSB1bmlxdWUgZWxlbWVudHMsIGFuZCByZXR1cm4gYSBuZXcgTWFwIHdpdGggZGUtZHVwbGljYXRlZCBrZXlzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5NYXB9IG1hcE9iamVjdHNcbiAgICAgKiBAcmV0dXJucyB7TWFwfVxuICAgICAqL1xuICAgIHN0YXRpYyBtZXJnZU1hcHMoLi4ubWFwT2JqZWN0cykge1xuICAgICAgICByZXR1cm4gbmV3IE1hcChtYXBPYmplY3RzLnJlZHVjZSgoYXMsIGIpID0+IGFzLmNvbmNhdChbLi4uYl0pLCBbXSkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQXV0b051bWVyaWNIZWxwZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7OztBQUlBOzs7Ozs7OztBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3REE7QUErREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUE3M0NBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n")
			}, function(module, exports, __webpack_require__) {
				"use strict";
				eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n/**\n * Enumerations for autoNumeric.js\n * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>\n * @copyright © 2016 Alexandre Bonneau\n *\n * The MIT License (http://www.opensource.org/licenses/mit-license.php)\n *\n * Permission is hereby granted, free of charge, to any person\n * obtaining a copy of this software and associated documentation\n * files (the \"Software\"), to deal in the Software without\n * restriction, including without limitation the rights to use,\n * copy, modify, merge, publish, distribute, sub license, and/or sell\n * copies of the Software, and to permit persons to whom the\n * Software is furnished to do so, subject to the following\n * conditions:\n *\n * The above copyright notice and this permission notice shall be\n * included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n * OTHER DEALINGS IN THE SOFTWARE.\n */\n\n/**\n * Object that store the helper enumerations\n * @type {{ allowedTagList: [string], keyCode: {}, fromCharCodeKeyCode: [string], keyName: {} }}\n */\nvar AutoNumericEnum = {\n    /**\n     * List of allowed tag on which autoNumeric can be used.\n     */\n    get allowedTagList() {\n        return ['b', 'caption', 'cite', 'code', 'const', 'dd', 'del', 'div', 'dfn', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'input', 'ins', 'kdb', 'label', 'li', 'option', 'output', 'p', 'q', 's', 'sample', 'span', 'strong', 'td', 'th', 'u'];\n    },\n\n    /**\n     * Wrapper variable that hold named keyboard keys with their respective keyCode as seen in DOM events.\n     * cf. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode\n     *\n     * This deprecated information is used for obsolete browsers.\n     * @deprecated\n     */\n    get keyCode() {\n        return {\n            Backspace: 8,\n            Tab: 9,\n            // No 10, 11\n            // 12 === NumpadEqual on Windows\n            // 12 === NumLock on Mac\n            Enter: 13,\n            // 14 reserved, but not used\n            // 15 does not exists\n            Shift: 16,\n            Ctrl: 17,\n            Alt: 18,\n            Pause: 19,\n            CapsLock: 20,\n            // 21, 22, 23, 24, 25 : Asiatic key codes\n            // 26 does not exists\n            Esc: 27,\n            // 28, 29, 30, 31 : Convert, NonConvert, Accept and ModeChange keys\n            Space: 32,\n            PageUp: 33,\n            PageDown: 34,\n            End: 35,\n            Home: 36,\n            LeftArrow: 37,\n            UpArrow: 38,\n            RightArrow: 39,\n            DownArrow: 40,\n            Insert: 45,\n            Delete: 46,\n            num0: 48,\n            num1: 49,\n            num2: 50,\n            num3: 51,\n            num4: 52,\n            num5: 53,\n            num6: 54,\n            num7: 55,\n            num8: 56,\n            num9: 57,\n            a: 65,\n            b: 66,\n            c: 67,\n            d: 68,\n            e: 69,\n            f: 70,\n            g: 71,\n            h: 72,\n            i: 73,\n            j: 74,\n            k: 75,\n            l: 76,\n            m: 77,\n            n: 78,\n            o: 79,\n            p: 80,\n            q: 81,\n            r: 82,\n            s: 83,\n            t: 84,\n            u: 85,\n            v: 86,\n            w: 87,\n            x: 88,\n            y: 89,\n            z: 90,\n            OSLeft: 91,\n            OSRight: 92,\n            ContextMenu: 93,\n            numpad0: 96,\n            numpad1: 97,\n            numpad2: 98,\n            numpad3: 99,\n            numpad4: 100,\n            numpad5: 101,\n            numpad6: 102,\n            numpad7: 103,\n            numpad8: 104,\n            numpad9: 105,\n            MultiplyNumpad: 106,\n            PlusNumpad: 107,\n            MinusNumpad: 109,\n            DotNumpad: 110,\n            SlashNumpad: 111,\n            F1: 112,\n            F2: 113,\n            F3: 114,\n            F4: 115,\n            F5: 116,\n            F6: 117,\n            F7: 118,\n            F8: 119,\n            F9: 120,\n            F10: 121,\n            F11: 122,\n            F12: 123,\n            NumLock: 144,\n            ScrollLock: 145,\n            HyphenFirefox: 173, // On the latest Linux and Windows OS, cf. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode and https://bugzilla.mozilla.org/show_bug.cgi?id=787504 and https://stackoverflow.com/a/35473259/2834898\n            MyComputer: 182,\n            MyCalculator: 183,\n            Semicolon: 186,\n            Equal: 187,\n            Comma: 188,\n            Hyphen: 189,\n            Dot: 190,\n            Slash: 191,\n            Backquote: 192,\n            LeftBracket: 219,\n            Backslash: 220,\n            RightBracket: 221,\n            Quote: 222,\n            Command: 224,\n            AltGraph: 225,\n            AndroidDefault: 229 // Android Chrome returns the same keycode number 229 for all keys pressed\n        };\n    },\n\n    /**\n     * This object is the reverse of `keyCode`, and is used to translate the key code to named keys when no valid characters can be obtained by `String.fromCharCode`.\n     * This object keys correspond to the `event.keyCode` number, and returns the corresponding key name (à la event.key)\n     */\n    get fromCharCodeKeyCode() {\n        return {\n            0: 'LaunchCalculator',\n            8: 'Backspace',\n            9: 'Tab',\n            13: 'Enter',\n            16: 'Shift',\n            17: 'Ctrl',\n            18: 'Alt',\n            19: 'Pause',\n            20: 'CapsLock',\n            27: 'Escape',\n            32: ' ',\n            33: 'PageUp',\n            34: 'PageDown',\n            35: 'End',\n            36: 'Home',\n            37: 'ArrowLeft',\n            38: 'ArrowUp',\n            39: 'ArrowRight',\n            40: 'ArrowDown',\n            45: 'Insert',\n            46: 'Delete',\n            48: '0',\n            49: '1',\n            50: '2',\n            51: '3',\n            52: '4',\n            53: '5',\n            54: '6',\n            55: '7',\n            56: '8',\n            57: '9',\n            // 65: 'a',\n            // 66: 'b',\n            // 67: 'c',\n            // 68: 'd',\n            // 69: 'e',\n            // 70: 'f',\n            // 71: 'g',\n            // 72: 'h',\n            // 73: 'i',\n            // 74: 'j',\n            // 75: 'k',\n            // 76: 'l',\n            // 77: 'm',\n            // 78: 'n',\n            // 79: 'o',\n            // 80: 'p',\n            // 81: 'q',\n            // 82: 'r',\n            // 83: 's',\n            // 84: 't',\n            // 85: 'u',\n            // 86: 'v',\n            // 87: 'w',\n            // 88: 'x',\n            // 89: 'y',\n            // 90: 'z',\n            91: 'OS', // Note: Firefox and Chrome reports 'OS' instead of 'OSLeft'\n            92: 'OSRight',\n            93: 'ContextMenu',\n            96: '0',\n            97: '1',\n            98: '2',\n            99: '3',\n            100: '4',\n            101: '5',\n            102: '6',\n            103: '7',\n            104: '8',\n            105: '9',\n            106: '*',\n            107: '+',\n            109: '-', // The 'NumpadSubtract' code\n            110: '.',\n            111: '/',\n            112: 'F1',\n            113: 'F2',\n            114: 'F3',\n            115: 'F4',\n            116: 'F5',\n            117: 'F6',\n            118: 'F7',\n            119: 'F8',\n            120: 'F9',\n            121: 'F10',\n            122: 'F11',\n            123: 'F12',\n            144: 'NumLock',\n            145: 'ScrollLock',\n            173: '-', // The 'Minus' sign on Firefox. This is only needed when using the Selenium bot though.\n            182: 'MyComputer',\n            183: 'MyCalculator',\n            186: ';',\n            187: '=',\n            188: ',',\n            189: '-', // The 'Minus' sign on all other browsers\n            190: '.',\n            191: '/',\n            192: '`',\n            219: '[',\n            220: '\\\\',\n            221: ']',\n            222: '\\'',\n            224: 'Meta',\n            225: 'AltGraph'\n        };\n    },\n\n    /**\n     * Wrapper variable that hold named keyboard keys with their respective key name (as set in KeyboardEvent.key).\n     * Those names are listed here :\n     * @link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values\n     */\n    get keyName() {\n        return {\n            // Special values\n            Unidentified: 'Unidentified',\n            AndroidDefault: 'AndroidDefault',\n\n            // Modifier keys\n            Alt: 'Alt',\n            AltGr: 'AltGraph',\n            CapsLock: 'CapsLock', // Under Chrome, e.key is empty for CapsLock\n            Ctrl: 'Control',\n            Fn: 'Fn',\n            FnLock: 'FnLock',\n            Hyper: 'Hyper', // 'OS' under Firefox\n            Meta: 'Meta',\n            OSLeft: 'OS',\n            OSRight: 'OS',\n            Command: 'OS',\n            NumLock: 'NumLock',\n            ScrollLock: 'ScrollLock',\n            Shift: 'Shift',\n            Super: 'Super', // 'OS' under Firefox\n            Symbol: 'Symbol',\n            SymbolLock: 'SymbolLock',\n\n            // Whitespace keys\n            Enter: 'Enter',\n            Tab: 'Tab',\n            Space: ' ', // 'Spacebar' for Firefox <37, and IE9\n\n            // Navigation keys\n            LeftArrow: 'ArrowLeft', // 'Left' for Firefox <=36, and IE9\n            UpArrow: 'ArrowUp', // 'Up' for Firefox <=36, and IE9\n            RightArrow: 'ArrowRight', // 'Right' for Firefox <=36, and IE9\n            DownArrow: 'ArrowDown', // 'Down' for Firefox <=36, and IE9\n            End: 'End',\n            Home: 'Home',\n            PageUp: 'PageUp',\n            PageDown: 'PageDown',\n\n            // Editing keys\n            Backspace: 'Backspace',\n            Clear: 'Clear',\n            Copy: 'Copy',\n            CrSel: 'CrSel', // 'Crsel' for Firefox <=36, and IE9\n            Cut: 'Cut',\n            Delete: 'Delete', // 'Del' for Firefox <=36, and IE9\n            EraseEof: 'EraseEof',\n            ExSel: 'ExSel', // 'Exsel' for Firefox <=36, and IE9\n            Insert: 'Insert',\n            Paste: 'Paste',\n            Redo: 'Redo',\n            Undo: 'Undo',\n\n            // UI keys\n            Accept: 'Accept',\n            Again: 'Again',\n            Attn: 'Attn', // 'Unidentified' for Firefox, Chrome, and IE9 ('KanaMode' when using the Japanese keyboard layout)\n            Cancel: 'Cancel',\n            ContextMenu: 'ContextMenu', // 'Apps' for Firefox <=36, and IE9\n            Esc: 'Escape', // 'Esc' for Firefox <=36, and IE9\n            Execute: 'Execute',\n            Find: 'Find',\n            Finish: 'Finish', // 'Unidentified' for Firefox, Chrome, and IE9 ('Katakana' when using the Japanese keyboard layout)\n            Help: 'Help',\n            Pause: 'Pause',\n            Play: 'Play',\n            Props: 'Props',\n            Select: 'Select',\n            ZoomIn: 'ZoomIn',\n            ZoomOut: 'ZoomOut',\n\n            // Device keys\n            BrightnessDown: 'BrightnessDown',\n            BrightnessUp: 'BrightnessUp',\n            Eject: 'Eject',\n            LogOff: 'LogOff',\n            Power: 'Power',\n            PowerOff: 'PowerOff',\n            PrintScreen: 'PrintScreen',\n            Hibernate: 'Hibernate', // 'Unidentified' for Firefox <=37\n            Standby: 'Standby', // 'Unidentified' for Firefox <=36, and IE9\n            WakeUp: 'WakeUp',\n\n            // IME and composition keys\n            Compose: 'Compose',\n            Dead: 'Dead',\n\n            // Function keys\n            F1: 'F1',\n            F2: 'F2',\n            F3: 'F3',\n            F4: 'F4',\n            F5: 'F5',\n            F6: 'F6',\n            F7: 'F7',\n            F8: 'F8',\n            F9: 'F9',\n            F10: 'F10',\n            F11: 'F11',\n            F12: 'F12',\n\n            // Document keys\n            Print: 'Print',\n\n            // 'Normal' keys\n            num0: '0',\n            num1: '1',\n            num2: '2',\n            num3: '3',\n            num4: '4',\n            num5: '5',\n            num6: '6',\n            num7: '7',\n            num8: '8',\n            num9: '9',\n            a: 'a',\n            b: 'b',\n            c: 'c',\n            d: 'd',\n            e: 'e',\n            f: 'f',\n            g: 'g',\n            h: 'h',\n            i: 'i',\n            j: 'j',\n            k: 'k',\n            l: 'l',\n            m: 'm',\n            n: 'n',\n            o: 'o',\n            p: 'p',\n            q: 'q',\n            r: 'r',\n            s: 's',\n            t: 't',\n            u: 'u',\n            v: 'v',\n            w: 'w',\n            x: 'x',\n            y: 'y',\n            z: 'z',\n            A: 'A',\n            B: 'B',\n            C: 'C',\n            D: 'D',\n            E: 'E',\n            F: 'F',\n            G: 'G',\n            H: 'H',\n            I: 'I',\n            J: 'J',\n            K: 'K',\n            L: 'L',\n            M: 'M',\n            N: 'N',\n            O: 'O',\n            P: 'P',\n            Q: 'Q',\n            R: 'R',\n            S: 'S',\n            T: 'T',\n            U: 'U',\n            V: 'V',\n            W: 'W',\n            X: 'X',\n            Y: 'Y',\n            Z: 'Z',\n            Semicolon: ';',\n            Equal: '=',\n            Comma: ',',\n            Hyphen: '-',\n            Minus: '-',\n            Plus: '+',\n            Dot: '.',\n            Slash: '/',\n            Backquote: '`',\n            LeftBracket: '[',\n            RightBracket: ']',\n            Backslash: '\\\\',\n            Quote: '\\'',\n\n            // Numeric keypad keys\n            numpad0: '0',\n            numpad1: '1',\n            numpad2: '2',\n            numpad3: '3',\n            numpad4: '4',\n            numpad5: '5',\n            numpad6: '6',\n            numpad7: '7',\n            numpad8: '8',\n            numpad9: '9',\n            NumpadDot: '.',\n            NumpadDotAlt: ',', // Modern browsers automatically adapt the character sent by this key to the decimal character of the current language\n            NumpadMultiply: '*',\n            NumpadPlus: '+',\n            NumpadMinus: '-',\n            NumpadSubtract: '-',\n            NumpadSlash: '/',\n            NumpadDotObsoleteBrowsers: 'Decimal',\n            NumpadMultiplyObsoleteBrowsers: 'Multiply',\n            NumpadPlusObsoleteBrowsers: 'Add',\n            NumpadMinusObsoleteBrowsers: 'Subtract',\n            NumpadSlashObsoleteBrowsers: 'Divide',\n\n            // Special arrays for quicker tests\n            _allFnKeys: ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],\n            _someNonPrintableKeys: ['Tab', 'Enter', 'Shift', 'ShiftLeft', 'ShiftRight', 'Control', 'ControlLeft', 'ControlRight', 'Alt', 'AltLeft', 'AltRight', 'Pause', 'CapsLock', 'Escape'],\n            _directionKeys: ['PageUp', 'PageDown', 'End', 'Home', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp']\n        };\n    }\n};\n\nexports.default = AutoNumericEnum;\nmodule.exports = exports['default'];\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvQXV0b051bWVyaWNFbnVtLmpzPzQ4MDQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFbnVtZXJhdGlvbnMgZm9yIGF1dG9OdW1lcmljLmpzXG4gKiBAYXV0aG9yIEFsZXhhbmRyZSBCb25uZWF1IDxhbGV4YW5kcmUuYm9ubmVhdUBsaW51eGZyLmV1PlxuICogQGNvcHlyaWdodCDCqSAyMDE2IEFsZXhhbmRyZSBCb25uZWF1XG4gKlxuICogVGhlIE1JVCBMaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuICogcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWIgbGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAqIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAqIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcbiAqIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCB0aGF0IHN0b3JlIHRoZSBoZWxwZXIgZW51bWVyYXRpb25zXG4gKiBAdHlwZSB7eyBhbGxvd2VkVGFnTGlzdDogW3N0cmluZ10sIGtleUNvZGU6IHt9LCBmcm9tQ2hhckNvZGVLZXlDb2RlOiBbc3RyaW5nXSwga2V5TmFtZToge30gfX1cbiAqL1xuY29uc3QgQXV0b051bWVyaWNFbnVtID0ge1xuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgYWxsb3dlZCB0YWcgb24gd2hpY2ggYXV0b051bWVyaWMgY2FuIGJlIHVzZWQuXG4gICAgICovXG4gICAgZ2V0IGFsbG93ZWRUYWdMaXN0KCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgJ2InLFxuICAgICAgICAgICAgJ2NhcHRpb24nLFxuICAgICAgICAgICAgJ2NpdGUnLFxuICAgICAgICAgICAgJ2NvZGUnLFxuICAgICAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgICAgICdkZCcsXG4gICAgICAgICAgICAnZGVsJyxcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgJ2RmbicsXG4gICAgICAgICAgICAnZHQnLFxuICAgICAgICAgICAgJ2VtJyxcbiAgICAgICAgICAgICdoMScsXG4gICAgICAgICAgICAnaDInLFxuICAgICAgICAgICAgJ2gzJyxcbiAgICAgICAgICAgICdoNCcsXG4gICAgICAgICAgICAnaDUnLFxuICAgICAgICAgICAgJ2g2JyxcbiAgICAgICAgICAgICdpbnB1dCcsXG4gICAgICAgICAgICAnaW5zJyxcbiAgICAgICAgICAgICdrZGInLFxuICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICdvdXRwdXQnLFxuICAgICAgICAgICAgJ3AnLFxuICAgICAgICAgICAgJ3EnLFxuICAgICAgICAgICAgJ3MnLFxuICAgICAgICAgICAgJ3NhbXBsZScsXG4gICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAnc3Ryb25nJyxcbiAgICAgICAgICAgICd0ZCcsXG4gICAgICAgICAgICAndGgnLFxuICAgICAgICAgICAgJ3UnLFxuICAgICAgICBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIHZhcmlhYmxlIHRoYXQgaG9sZCBuYW1lZCBrZXlib2FyZCBrZXlzIHdpdGggdGhlaXIgcmVzcGVjdGl2ZSBrZXlDb2RlIGFzIHNlZW4gaW4gRE9NIGV2ZW50cy5cbiAgICAgKiBjZi4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5Q29kZVxuICAgICAqXG4gICAgICogVGhpcyBkZXByZWNhdGVkIGluZm9ybWF0aW9uIGlzIHVzZWQgZm9yIG9ic29sZXRlIGJyb3dzZXJzLlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgZ2V0IGtleUNvZGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBCYWNrc3BhY2UgICAgIDogOCxcbiAgICAgICAgICAgIFRhYiAgICAgICAgICAgOiA5LFxuICAgICAgICAgICAgLy8gTm8gMTAsIDExXG4gICAgICAgICAgICAvLyAxMiA9PT0gTnVtcGFkRXF1YWwgb24gV2luZG93c1xuICAgICAgICAgICAgLy8gMTIgPT09IE51bUxvY2sgb24gTWFjXG4gICAgICAgICAgICBFbnRlciAgICAgICAgIDogMTMsXG4gICAgICAgICAgICAvLyAxNCByZXNlcnZlZCwgYnV0IG5vdCB1c2VkXG4gICAgICAgICAgICAvLyAxNSBkb2VzIG5vdCBleGlzdHNcbiAgICAgICAgICAgIFNoaWZ0ICAgICAgICAgOiAxNixcbiAgICAgICAgICAgIEN0cmwgICAgICAgICAgOiAxNyxcbiAgICAgICAgICAgIEFsdCAgICAgICAgICAgOiAxOCxcbiAgICAgICAgICAgIFBhdXNlICAgICAgICAgOiAxOSxcbiAgICAgICAgICAgIENhcHNMb2NrICAgICAgOiAyMCxcbiAgICAgICAgICAgIC8vIDIxLCAyMiwgMjMsIDI0LCAyNSA6IEFzaWF0aWMga2V5IGNvZGVzXG4gICAgICAgICAgICAvLyAyNiBkb2VzIG5vdCBleGlzdHNcbiAgICAgICAgICAgIEVzYyAgICAgICAgICAgOiAyNyxcbiAgICAgICAgICAgIC8vIDI4LCAyOSwgMzAsIDMxIDogQ29udmVydCwgTm9uQ29udmVydCwgQWNjZXB0IGFuZCBNb2RlQ2hhbmdlIGtleXNcbiAgICAgICAgICAgIFNwYWNlICAgICAgICAgOiAzMixcbiAgICAgICAgICAgIFBhZ2VVcCAgICAgICAgOiAzMyxcbiAgICAgICAgICAgIFBhZ2VEb3duICAgICAgOiAzNCxcbiAgICAgICAgICAgIEVuZCAgICAgICAgICAgOiAzNSxcbiAgICAgICAgICAgIEhvbWUgICAgICAgICAgOiAzNixcbiAgICAgICAgICAgIExlZnRBcnJvdyAgICAgOiAzNyxcbiAgICAgICAgICAgIFVwQXJyb3cgICAgICAgOiAzOCxcbiAgICAgICAgICAgIFJpZ2h0QXJyb3cgICAgOiAzOSxcbiAgICAgICAgICAgIERvd25BcnJvdyAgICAgOiA0MCxcbiAgICAgICAgICAgIEluc2VydCAgICAgICAgOiA0NSxcbiAgICAgICAgICAgIERlbGV0ZSAgICAgICAgOiA0NixcbiAgICAgICAgICAgIG51bTAgICAgICAgICAgOiA0OCxcbiAgICAgICAgICAgIG51bTEgICAgICAgICAgOiA0OSxcbiAgICAgICAgICAgIG51bTIgICAgICAgICAgOiA1MCxcbiAgICAgICAgICAgIG51bTMgICAgICAgICAgOiA1MSxcbiAgICAgICAgICAgIG51bTQgICAgICAgICAgOiA1MixcbiAgICAgICAgICAgIG51bTUgICAgICAgICAgOiA1MyxcbiAgICAgICAgICAgIG51bTYgICAgICAgICAgOiA1NCxcbiAgICAgICAgICAgIG51bTcgICAgICAgICAgOiA1NSxcbiAgICAgICAgICAgIG51bTggICAgICAgICAgOiA1NixcbiAgICAgICAgICAgIG51bTkgICAgICAgICAgOiA1NyxcbiAgICAgICAgICAgIGEgICAgICAgICAgICAgOiA2NSxcbiAgICAgICAgICAgIGIgICAgICAgICAgICAgOiA2NixcbiAgICAgICAgICAgIGMgICAgICAgICAgICAgOiA2NyxcbiAgICAgICAgICAgIGQgICAgICAgICAgICAgOiA2OCxcbiAgICAgICAgICAgIGUgICAgICAgICAgICAgOiA2OSxcbiAgICAgICAgICAgIGYgICAgICAgICAgICAgOiA3MCxcbiAgICAgICAgICAgIGcgICAgICAgICAgICAgOiA3MSxcbiAgICAgICAgICAgIGggICAgICAgICAgICAgOiA3MixcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgOiA3MyxcbiAgICAgICAgICAgIGogICAgICAgICAgICAgOiA3NCxcbiAgICAgICAgICAgIGsgICAgICAgICAgICAgOiA3NSxcbiAgICAgICAgICAgIGwgICAgICAgICAgICAgOiA3NixcbiAgICAgICAgICAgIG0gICAgICAgICAgICAgOiA3NyxcbiAgICAgICAgICAgIG4gICAgICAgICAgICAgOiA3OCxcbiAgICAgICAgICAgIG8gICAgICAgICAgICAgOiA3OSxcbiAgICAgICAgICAgIHAgICAgICAgICAgICAgOiA4MCxcbiAgICAgICAgICAgIHEgICAgICAgICAgICAgOiA4MSxcbiAgICAgICAgICAgIHIgICAgICAgICAgICAgOiA4MixcbiAgICAgICAgICAgIHMgICAgICAgICAgICAgOiA4MyxcbiAgICAgICAgICAgIHQgICAgICAgICAgICAgOiA4NCxcbiAgICAgICAgICAgIHUgICAgICAgICAgICAgOiA4NSxcbiAgICAgICAgICAgIHYgICAgICAgICAgICAgOiA4NixcbiAgICAgICAgICAgIHcgICAgICAgICAgICAgOiA4NyxcbiAgICAgICAgICAgIHggICAgICAgICAgICAgOiA4OCxcbiAgICAgICAgICAgIHkgICAgICAgICAgICAgOiA4OSxcbiAgICAgICAgICAgIHogICAgICAgICAgICAgOiA5MCxcbiAgICAgICAgICAgIE9TTGVmdCAgICAgICAgOiA5MSxcbiAgICAgICAgICAgIE9TUmlnaHQgICAgICAgOiA5MixcbiAgICAgICAgICAgIENvbnRleHRNZW51ICAgOiA5MyxcbiAgICAgICAgICAgIG51bXBhZDAgICAgICAgOiA5NixcbiAgICAgICAgICAgIG51bXBhZDEgICAgICAgOiA5NyxcbiAgICAgICAgICAgIG51bXBhZDIgICAgICAgOiA5OCxcbiAgICAgICAgICAgIG51bXBhZDMgICAgICAgOiA5OSxcbiAgICAgICAgICAgIG51bXBhZDQgICAgICAgOiAxMDAsXG4gICAgICAgICAgICBudW1wYWQ1ICAgICAgIDogMTAxLFxuICAgICAgICAgICAgbnVtcGFkNiAgICAgICA6IDEwMixcbiAgICAgICAgICAgIG51bXBhZDcgICAgICAgOiAxMDMsXG4gICAgICAgICAgICBudW1wYWQ4ICAgICAgIDogMTA0LFxuICAgICAgICAgICAgbnVtcGFkOSAgICAgICA6IDEwNSxcbiAgICAgICAgICAgIE11bHRpcGx5TnVtcGFkOiAxMDYsXG4gICAgICAgICAgICBQbHVzTnVtcGFkICAgIDogMTA3LFxuICAgICAgICAgICAgTWludXNOdW1wYWQgICA6IDEwOSxcbiAgICAgICAgICAgIERvdE51bXBhZCAgICAgOiAxMTAsXG4gICAgICAgICAgICBTbGFzaE51bXBhZCAgIDogMTExLFxuICAgICAgICAgICAgRjEgICAgICAgICAgICA6IDExMixcbiAgICAgICAgICAgIEYyICAgICAgICAgICAgOiAxMTMsXG4gICAgICAgICAgICBGMyAgICAgICAgICAgIDogMTE0LFxuICAgICAgICAgICAgRjQgICAgICAgICAgICA6IDExNSxcbiAgICAgICAgICAgIEY1ICAgICAgICAgICAgOiAxMTYsXG4gICAgICAgICAgICBGNiAgICAgICAgICAgIDogMTE3LFxuICAgICAgICAgICAgRjcgICAgICAgICAgICA6IDExOCxcbiAgICAgICAgICAgIEY4ICAgICAgICAgICAgOiAxMTksXG4gICAgICAgICAgICBGOSAgICAgICAgICAgIDogMTIwLFxuICAgICAgICAgICAgRjEwICAgICAgICAgICA6IDEyMSxcbiAgICAgICAgICAgIEYxMSAgICAgICAgICAgOiAxMjIsXG4gICAgICAgICAgICBGMTIgICAgICAgICAgIDogMTIzLFxuICAgICAgICAgICAgTnVtTG9jayAgICAgICA6IDE0NCxcbiAgICAgICAgICAgIFNjcm9sbExvY2sgICAgOiAxNDUsXG4gICAgICAgICAgICBIeXBoZW5GaXJlZm94IDogMTczLCAvLyBPbiB0aGUgbGF0ZXN0IExpbnV4IGFuZCBXaW5kb3dzIE9TLCBjZi4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5Q29kZSBhbmQgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzg3NTA0IGFuZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzU0NzMyNTkvMjgzNDg5OFxuICAgICAgICAgICAgTXlDb21wdXRlciAgICA6IDE4MixcbiAgICAgICAgICAgIE15Q2FsY3VsYXRvciAgOiAxODMsXG4gICAgICAgICAgICBTZW1pY29sb24gICAgIDogMTg2LFxuICAgICAgICAgICAgRXF1YWwgICAgICAgICA6IDE4NyxcbiAgICAgICAgICAgIENvbW1hICAgICAgICAgOiAxODgsXG4gICAgICAgICAgICBIeXBoZW4gICAgICAgIDogMTg5LFxuICAgICAgICAgICAgRG90ICAgICAgICAgICA6IDE5MCxcbiAgICAgICAgICAgIFNsYXNoICAgICAgICAgOiAxOTEsXG4gICAgICAgICAgICBCYWNrcXVvdGUgICAgIDogMTkyLFxuICAgICAgICAgICAgTGVmdEJyYWNrZXQgICA6IDIxOSxcbiAgICAgICAgICAgIEJhY2tzbGFzaCAgICAgOiAyMjAsXG4gICAgICAgICAgICBSaWdodEJyYWNrZXQgIDogMjIxLFxuICAgICAgICAgICAgUXVvdGUgICAgICAgICA6IDIyMixcbiAgICAgICAgICAgIENvbW1hbmQgICAgICAgOiAyMjQsXG4gICAgICAgICAgICBBbHRHcmFwaCAgICAgIDogMjI1LFxuICAgICAgICAgICAgQW5kcm9pZERlZmF1bHQ6IDIyOSwgLy8gQW5kcm9pZCBDaHJvbWUgcmV0dXJucyB0aGUgc2FtZSBrZXljb2RlIG51bWJlciAyMjkgZm9yIGFsbCBrZXlzIHByZXNzZWRcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBvYmplY3QgaXMgdGhlIHJldmVyc2Ugb2YgYGtleUNvZGVgLCBhbmQgaXMgdXNlZCB0byB0cmFuc2xhdGUgdGhlIGtleSBjb2RlIHRvIG5hbWVkIGtleXMgd2hlbiBubyB2YWxpZCBjaGFyYWN0ZXJzIGNhbiBiZSBvYnRhaW5lZCBieSBgU3RyaW5nLmZyb21DaGFyQ29kZWAuXG4gICAgICogVGhpcyBvYmplY3Qga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBgZXZlbnQua2V5Q29kZWAgbnVtYmVyLCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBrZXkgbmFtZSAow6AgbGEgZXZlbnQua2V5KVxuICAgICAqL1xuICAgIGdldCBmcm9tQ2hhckNvZGVLZXlDb2RlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgMCAgOiAnTGF1bmNoQ2FsY3VsYXRvcicsXG4gICAgICAgICAgICA4ICA6ICdCYWNrc3BhY2UnLFxuICAgICAgICAgICAgOSAgOiAnVGFiJyxcbiAgICAgICAgICAgIDEzIDogJ0VudGVyJyxcbiAgICAgICAgICAgIDE2IDogJ1NoaWZ0JyxcbiAgICAgICAgICAgIDE3IDogJ0N0cmwnLFxuICAgICAgICAgICAgMTggOiAnQWx0JyxcbiAgICAgICAgICAgIDE5IDogJ1BhdXNlJyxcbiAgICAgICAgICAgIDIwIDogJ0NhcHNMb2NrJyxcbiAgICAgICAgICAgIDI3IDogJ0VzY2FwZScsXG4gICAgICAgICAgICAzMiA6ICcgJyxcbiAgICAgICAgICAgIDMzIDogJ1BhZ2VVcCcsXG4gICAgICAgICAgICAzNCA6ICdQYWdlRG93bicsXG4gICAgICAgICAgICAzNSA6ICdFbmQnLFxuICAgICAgICAgICAgMzYgOiAnSG9tZScsXG4gICAgICAgICAgICAzNyA6ICdBcnJvd0xlZnQnLFxuICAgICAgICAgICAgMzggOiAnQXJyb3dVcCcsXG4gICAgICAgICAgICAzOSA6ICdBcnJvd1JpZ2h0JyxcbiAgICAgICAgICAgIDQwIDogJ0Fycm93RG93bicsXG4gICAgICAgICAgICA0NSA6ICdJbnNlcnQnLFxuICAgICAgICAgICAgNDYgOiAnRGVsZXRlJyxcbiAgICAgICAgICAgIDQ4IDogJzAnLFxuICAgICAgICAgICAgNDkgOiAnMScsXG4gICAgICAgICAgICA1MCA6ICcyJyxcbiAgICAgICAgICAgIDUxIDogJzMnLFxuICAgICAgICAgICAgNTIgOiAnNCcsXG4gICAgICAgICAgICA1MyA6ICc1JyxcbiAgICAgICAgICAgIDU0IDogJzYnLFxuICAgICAgICAgICAgNTUgOiAnNycsXG4gICAgICAgICAgICA1NiA6ICc4JyxcbiAgICAgICAgICAgIDU3IDogJzknLFxuICAgICAgICAgICAgLy8gNjU6ICdhJyxcbiAgICAgICAgICAgIC8vIDY2OiAnYicsXG4gICAgICAgICAgICAvLyA2NzogJ2MnLFxuICAgICAgICAgICAgLy8gNjg6ICdkJyxcbiAgICAgICAgICAgIC8vIDY5OiAnZScsXG4gICAgICAgICAgICAvLyA3MDogJ2YnLFxuICAgICAgICAgICAgLy8gNzE6ICdnJyxcbiAgICAgICAgICAgIC8vIDcyOiAnaCcsXG4gICAgICAgICAgICAvLyA3MzogJ2knLFxuICAgICAgICAgICAgLy8gNzQ6ICdqJyxcbiAgICAgICAgICAgIC8vIDc1OiAnaycsXG4gICAgICAgICAgICAvLyA3NjogJ2wnLFxuICAgICAgICAgICAgLy8gNzc6ICdtJyxcbiAgICAgICAgICAgIC8vIDc4OiAnbicsXG4gICAgICAgICAgICAvLyA3OTogJ28nLFxuICAgICAgICAgICAgLy8gODA6ICdwJyxcbiAgICAgICAgICAgIC8vIDgxOiAncScsXG4gICAgICAgICAgICAvLyA4MjogJ3InLFxuICAgICAgICAgICAgLy8gODM6ICdzJyxcbiAgICAgICAgICAgIC8vIDg0OiAndCcsXG4gICAgICAgICAgICAvLyA4NTogJ3UnLFxuICAgICAgICAgICAgLy8gODY6ICd2JyxcbiAgICAgICAgICAgIC8vIDg3OiAndycsXG4gICAgICAgICAgICAvLyA4ODogJ3gnLFxuICAgICAgICAgICAgLy8gODk6ICd5JyxcbiAgICAgICAgICAgIC8vIDkwOiAneicsXG4gICAgICAgICAgICA5MSA6ICdPUycsIC8vIE5vdGU6IEZpcmVmb3ggYW5kIENocm9tZSByZXBvcnRzICdPUycgaW5zdGVhZCBvZiAnT1NMZWZ0J1xuICAgICAgICAgICAgOTIgOiAnT1NSaWdodCcsXG4gICAgICAgICAgICA5MyA6ICdDb250ZXh0TWVudScsXG4gICAgICAgICAgICA5NiA6ICcwJyxcbiAgICAgICAgICAgIDk3IDogJzEnLFxuICAgICAgICAgICAgOTggOiAnMicsXG4gICAgICAgICAgICA5OSA6ICczJyxcbiAgICAgICAgICAgIDEwMDogJzQnLFxuICAgICAgICAgICAgMTAxOiAnNScsXG4gICAgICAgICAgICAxMDI6ICc2JyxcbiAgICAgICAgICAgIDEwMzogJzcnLFxuICAgICAgICAgICAgMTA0OiAnOCcsXG4gICAgICAgICAgICAxMDU6ICc5JyxcbiAgICAgICAgICAgIDEwNjogJyonLFxuICAgICAgICAgICAgMTA3OiAnKycsXG4gICAgICAgICAgICAxMDk6ICctJywgLy8gVGhlICdOdW1wYWRTdWJ0cmFjdCcgY29kZVxuICAgICAgICAgICAgMTEwOiAnLicsXG4gICAgICAgICAgICAxMTE6ICcvJyxcbiAgICAgICAgICAgIDExMjogJ0YxJyxcbiAgICAgICAgICAgIDExMzogJ0YyJyxcbiAgICAgICAgICAgIDExNDogJ0YzJyxcbiAgICAgICAgICAgIDExNTogJ0Y0JyxcbiAgICAgICAgICAgIDExNjogJ0Y1JyxcbiAgICAgICAgICAgIDExNzogJ0Y2JyxcbiAgICAgICAgICAgIDExODogJ0Y3JyxcbiAgICAgICAgICAgIDExOTogJ0Y4JyxcbiAgICAgICAgICAgIDEyMDogJ0Y5JyxcbiAgICAgICAgICAgIDEyMTogJ0YxMCcsXG4gICAgICAgICAgICAxMjI6ICdGMTEnLFxuICAgICAgICAgICAgMTIzOiAnRjEyJyxcbiAgICAgICAgICAgIDE0NDogJ051bUxvY2snLFxuICAgICAgICAgICAgMTQ1OiAnU2Nyb2xsTG9jaycsXG4gICAgICAgICAgICAxNzM6ICctJywgLy8gVGhlICdNaW51cycgc2lnbiBvbiBGaXJlZm94LiBUaGlzIGlzIG9ubHkgbmVlZGVkIHdoZW4gdXNpbmcgdGhlIFNlbGVuaXVtIGJvdCB0aG91Z2guXG4gICAgICAgICAgICAxODI6ICdNeUNvbXB1dGVyJyxcbiAgICAgICAgICAgIDE4MzogJ015Q2FsY3VsYXRvcicsXG4gICAgICAgICAgICAxODY6ICc7JyxcbiAgICAgICAgICAgIDE4NzogJz0nLFxuICAgICAgICAgICAgMTg4OiAnLCcsXG4gICAgICAgICAgICAxODk6ICctJywgLy8gVGhlICdNaW51cycgc2lnbiBvbiBhbGwgb3RoZXIgYnJvd3NlcnNcbiAgICAgICAgICAgIDE5MDogJy4nLFxuICAgICAgICAgICAgMTkxOiAnLycsXG4gICAgICAgICAgICAxOTI6ICdgJyxcbiAgICAgICAgICAgIDIxOTogJ1snLFxuICAgICAgICAgICAgMjIwOiAnXFxcXCcsXG4gICAgICAgICAgICAyMjE6ICddJyxcbiAgICAgICAgICAgIDIyMjogJ1xcJycsXG4gICAgICAgICAgICAyMjQ6ICdNZXRhJyxcbiAgICAgICAgICAgIDIyNTogJ0FsdEdyYXBoJyxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV3JhcHBlciB2YXJpYWJsZSB0aGF0IGhvbGQgbmFtZWQga2V5Ym9hcmQga2V5cyB3aXRoIHRoZWlyIHJlc3BlY3RpdmUga2V5IG5hbWUgKGFzIHNldCBpbiBLZXlib2FyZEV2ZW50LmtleSkuXG4gICAgICogVGhvc2UgbmFtZXMgYXJlIGxpc3RlZCBoZXJlIDpcbiAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvS2V5Ym9hcmRFdmVudC9rZXkvS2V5X1ZhbHVlc1xuICAgICAqL1xuICAgIGdldCBrZXlOYW1lKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCB2YWx1ZXNcbiAgICAgICAgICAgIFVuaWRlbnRpZmllZCAgOiAnVW5pZGVudGlmaWVkJyxcbiAgICAgICAgICAgIEFuZHJvaWREZWZhdWx0OiAnQW5kcm9pZERlZmF1bHQnLFxuXG4gICAgICAgICAgICAvLyBNb2RpZmllciBrZXlzXG4gICAgICAgICAgICBBbHQgICAgICAgOiAnQWx0JyxcbiAgICAgICAgICAgIEFsdEdyICAgICA6ICdBbHRHcmFwaCcsXG4gICAgICAgICAgICBDYXBzTG9jayAgOiAnQ2Fwc0xvY2snLCAvLyBVbmRlciBDaHJvbWUsIGUua2V5IGlzIGVtcHR5IGZvciBDYXBzTG9ja1xuICAgICAgICAgICAgQ3RybCAgICAgIDogJ0NvbnRyb2wnLFxuICAgICAgICAgICAgRm4gICAgICAgIDogJ0ZuJyxcbiAgICAgICAgICAgIEZuTG9jayAgICA6ICdGbkxvY2snLFxuICAgICAgICAgICAgSHlwZXIgICAgIDogJ0h5cGVyJywgLy8gJ09TJyB1bmRlciBGaXJlZm94XG4gICAgICAgICAgICBNZXRhICAgICAgOiAnTWV0YScsXG4gICAgICAgICAgICBPU0xlZnQgICAgOiAnT1MnLFxuICAgICAgICAgICAgT1NSaWdodCAgIDogJ09TJyxcbiAgICAgICAgICAgIENvbW1hbmQgICA6ICdPUycsXG4gICAgICAgICAgICBOdW1Mb2NrICAgOiAnTnVtTG9jaycsXG4gICAgICAgICAgICBTY3JvbGxMb2NrOiAnU2Nyb2xsTG9jaycsXG4gICAgICAgICAgICBTaGlmdCAgICAgOiAnU2hpZnQnLFxuICAgICAgICAgICAgU3VwZXIgICAgIDogJ1N1cGVyJywgLy8gJ09TJyB1bmRlciBGaXJlZm94XG4gICAgICAgICAgICBTeW1ib2wgICAgOiAnU3ltYm9sJyxcbiAgICAgICAgICAgIFN5bWJvbExvY2s6ICdTeW1ib2xMb2NrJyxcblxuICAgICAgICAgICAgLy8gV2hpdGVzcGFjZSBrZXlzXG4gICAgICAgICAgICBFbnRlcjogJ0VudGVyJyxcbiAgICAgICAgICAgIFRhYiAgOiAnVGFiJyxcbiAgICAgICAgICAgIFNwYWNlOiAnICcsIC8vICdTcGFjZWJhcicgZm9yIEZpcmVmb3ggPDM3LCBhbmQgSUU5XG5cbiAgICAgICAgICAgIC8vIE5hdmlnYXRpb24ga2V5c1xuICAgICAgICAgICAgTGVmdEFycm93IDogJ0Fycm93TGVmdCcsIC8vICdMZWZ0JyBmb3IgRmlyZWZveCA8PTM2LCBhbmQgSUU5XG4gICAgICAgICAgICBVcEFycm93ICAgOiAnQXJyb3dVcCcsIC8vICdVcCcgZm9yIEZpcmVmb3ggPD0zNiwgYW5kIElFOVxuICAgICAgICAgICAgUmlnaHRBcnJvdzogJ0Fycm93UmlnaHQnLCAvLyAnUmlnaHQnIGZvciBGaXJlZm94IDw9MzYsIGFuZCBJRTlcbiAgICAgICAgICAgIERvd25BcnJvdyA6ICdBcnJvd0Rvd24nLCAvLyAnRG93bicgZm9yIEZpcmVmb3ggPD0zNiwgYW5kIElFOVxuICAgICAgICAgICAgRW5kICAgICAgIDogJ0VuZCcsXG4gICAgICAgICAgICBIb21lICAgICAgOiAnSG9tZScsXG4gICAgICAgICAgICBQYWdlVXAgICAgOiAnUGFnZVVwJyxcbiAgICAgICAgICAgIFBhZ2VEb3duICA6ICdQYWdlRG93bicsXG5cbiAgICAgICAgICAgIC8vIEVkaXRpbmcga2V5c1xuICAgICAgICAgICAgQmFja3NwYWNlOiAnQmFja3NwYWNlJyxcbiAgICAgICAgICAgIENsZWFyICAgIDogJ0NsZWFyJyxcbiAgICAgICAgICAgIENvcHkgICAgIDogJ0NvcHknLFxuICAgICAgICAgICAgQ3JTZWwgICAgOiAnQ3JTZWwnLCAvLyAnQ3JzZWwnIGZvciBGaXJlZm94IDw9MzYsIGFuZCBJRTlcbiAgICAgICAgICAgIEN1dCAgICAgIDogJ0N1dCcsXG4gICAgICAgICAgICBEZWxldGUgICA6ICdEZWxldGUnLCAvLyAnRGVsJyBmb3IgRmlyZWZveCA8PTM2LCBhbmQgSUU5XG4gICAgICAgICAgICBFcmFzZUVvZiA6ICdFcmFzZUVvZicsXG4gICAgICAgICAgICBFeFNlbCAgICA6ICdFeFNlbCcsIC8vICdFeHNlbCcgZm9yIEZpcmVmb3ggPD0zNiwgYW5kIElFOVxuICAgICAgICAgICAgSW5zZXJ0ICAgOiAnSW5zZXJ0JyxcbiAgICAgICAgICAgIFBhc3RlICAgIDogJ1Bhc3RlJyxcbiAgICAgICAgICAgIFJlZG8gICAgIDogJ1JlZG8nLFxuICAgICAgICAgICAgVW5kbyAgICAgOiAnVW5kbycsXG5cbiAgICAgICAgICAgIC8vIFVJIGtleXNcbiAgICAgICAgICAgIEFjY2VwdCAgICAgOiAnQWNjZXB0JyxcbiAgICAgICAgICAgIEFnYWluICAgICAgOiAnQWdhaW4nLFxuICAgICAgICAgICAgQXR0biAgICAgICA6ICdBdHRuJywgLy8gJ1VuaWRlbnRpZmllZCcgZm9yIEZpcmVmb3gsIENocm9tZSwgYW5kIElFOSAoJ0thbmFNb2RlJyB3aGVuIHVzaW5nIHRoZSBKYXBhbmVzZSBrZXlib2FyZCBsYXlvdXQpXG4gICAgICAgICAgICBDYW5jZWwgICAgIDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBDb250ZXh0TWVudTogJ0NvbnRleHRNZW51JywgLy8gJ0FwcHMnIGZvciBGaXJlZm94IDw9MzYsIGFuZCBJRTlcbiAgICAgICAgICAgIEVzYyAgICAgICAgOiAnRXNjYXBlJywgLy8gJ0VzYycgZm9yIEZpcmVmb3ggPD0zNiwgYW5kIElFOVxuICAgICAgICAgICAgRXhlY3V0ZSAgICA6ICdFeGVjdXRlJyxcbiAgICAgICAgICAgIEZpbmQgICAgICAgOiAnRmluZCcsXG4gICAgICAgICAgICBGaW5pc2ggICAgIDogJ0ZpbmlzaCcsIC8vICdVbmlkZW50aWZpZWQnIGZvciBGaXJlZm94LCBDaHJvbWUsIGFuZCBJRTkgKCdLYXRha2FuYScgd2hlbiB1c2luZyB0aGUgSmFwYW5lc2Uga2V5Ym9hcmQgbGF5b3V0KVxuICAgICAgICAgICAgSGVscCAgICAgICA6ICdIZWxwJyxcbiAgICAgICAgICAgIFBhdXNlICAgICAgOiAnUGF1c2UnLFxuICAgICAgICAgICAgUGxheSAgICAgICA6ICdQbGF5JyxcbiAgICAgICAgICAgIFByb3BzICAgICAgOiAnUHJvcHMnLFxuICAgICAgICAgICAgU2VsZWN0ICAgICA6ICdTZWxlY3QnLFxuICAgICAgICAgICAgWm9vbUluICAgICA6ICdab29tSW4nLFxuICAgICAgICAgICAgWm9vbU91dCAgICA6ICdab29tT3V0JyxcblxuICAgICAgICAgICAgLy8gRGV2aWNlIGtleXNcbiAgICAgICAgICAgIEJyaWdodG5lc3NEb3duOiAnQnJpZ2h0bmVzc0Rvd24nLFxuICAgICAgICAgICAgQnJpZ2h0bmVzc1VwICA6ICdCcmlnaHRuZXNzVXAnLFxuICAgICAgICAgICAgRWplY3QgICAgICAgICA6ICdFamVjdCcsXG4gICAgICAgICAgICBMb2dPZmYgICAgICAgIDogJ0xvZ09mZicsXG4gICAgICAgICAgICBQb3dlciAgICAgICAgIDogJ1Bvd2VyJyxcbiAgICAgICAgICAgIFBvd2VyT2ZmICAgICAgOiAnUG93ZXJPZmYnLFxuICAgICAgICAgICAgUHJpbnRTY3JlZW4gICA6ICdQcmludFNjcmVlbicsXG4gICAgICAgICAgICBIaWJlcm5hdGUgICAgIDogJ0hpYmVybmF0ZScsIC8vICdVbmlkZW50aWZpZWQnIGZvciBGaXJlZm94IDw9MzdcbiAgICAgICAgICAgIFN0YW5kYnkgICAgICAgOiAnU3RhbmRieScsIC8vICdVbmlkZW50aWZpZWQnIGZvciBGaXJlZm94IDw9MzYsIGFuZCBJRTlcbiAgICAgICAgICAgIFdha2VVcCAgICAgICAgOiAnV2FrZVVwJyxcblxuICAgICAgICAgICAgLy8gSU1FIGFuZCBjb21wb3NpdGlvbiBrZXlzXG4gICAgICAgICAgICBDb21wb3NlOiAnQ29tcG9zZScsXG4gICAgICAgICAgICBEZWFkICAgOiAnRGVhZCcsXG5cbiAgICAgICAgICAgIC8vIEZ1bmN0aW9uIGtleXNcbiAgICAgICAgICAgIEYxIDogJ0YxJyxcbiAgICAgICAgICAgIEYyIDogJ0YyJyxcbiAgICAgICAgICAgIEYzIDogJ0YzJyxcbiAgICAgICAgICAgIEY0IDogJ0Y0JyxcbiAgICAgICAgICAgIEY1IDogJ0Y1JyxcbiAgICAgICAgICAgIEY2IDogJ0Y2JyxcbiAgICAgICAgICAgIEY3IDogJ0Y3JyxcbiAgICAgICAgICAgIEY4IDogJ0Y4JyxcbiAgICAgICAgICAgIEY5IDogJ0Y5JyxcbiAgICAgICAgICAgIEYxMDogJ0YxMCcsXG4gICAgICAgICAgICBGMTE6ICdGMTEnLFxuICAgICAgICAgICAgRjEyOiAnRjEyJyxcblxuICAgICAgICAgICAgLy8gRG9jdW1lbnQga2V5c1xuICAgICAgICAgICAgUHJpbnQ6ICdQcmludCcsXG5cbiAgICAgICAgICAgIC8vICdOb3JtYWwnIGtleXNcbiAgICAgICAgICAgIG51bTAgICAgICAgICA6ICcwJyxcbiAgICAgICAgICAgIG51bTEgICAgICAgICA6ICcxJyxcbiAgICAgICAgICAgIG51bTIgICAgICAgICA6ICcyJyxcbiAgICAgICAgICAgIG51bTMgICAgICAgICA6ICczJyxcbiAgICAgICAgICAgIG51bTQgICAgICAgICA6ICc0JyxcbiAgICAgICAgICAgIG51bTUgICAgICAgICA6ICc1JyxcbiAgICAgICAgICAgIG51bTYgICAgICAgICA6ICc2JyxcbiAgICAgICAgICAgIG51bTcgICAgICAgICA6ICc3JyxcbiAgICAgICAgICAgIG51bTggICAgICAgICA6ICc4JyxcbiAgICAgICAgICAgIG51bTkgICAgICAgICA6ICc5JyxcbiAgICAgICAgICAgIGEgICAgICAgICAgICA6ICdhJyxcbiAgICAgICAgICAgIGIgICAgICAgICAgICA6ICdiJyxcbiAgICAgICAgICAgIGMgICAgICAgICAgICA6ICdjJyxcbiAgICAgICAgICAgIGQgICAgICAgICAgICA6ICdkJyxcbiAgICAgICAgICAgIGUgICAgICAgICAgICA6ICdlJyxcbiAgICAgICAgICAgIGYgICAgICAgICAgICA6ICdmJyxcbiAgICAgICAgICAgIGcgICAgICAgICAgICA6ICdnJyxcbiAgICAgICAgICAgIGggICAgICAgICAgICA6ICdoJyxcbiAgICAgICAgICAgIGkgICAgICAgICAgICA6ICdpJyxcbiAgICAgICAgICAgIGogICAgICAgICAgICA6ICdqJyxcbiAgICAgICAgICAgIGsgICAgICAgICAgICA6ICdrJyxcbiAgICAgICAgICAgIGwgICAgICAgICAgICA6ICdsJyxcbiAgICAgICAgICAgIG0gICAgICAgICAgICA6ICdtJyxcbiAgICAgICAgICAgIG4gICAgICAgICAgICA6ICduJyxcbiAgICAgICAgICAgIG8gICAgICAgICAgICA6ICdvJyxcbiAgICAgICAgICAgIHAgICAgICAgICAgICA6ICdwJyxcbiAgICAgICAgICAgIHEgICAgICAgICAgICA6ICdxJyxcbiAgICAgICAgICAgIHIgICAgICAgICAgICA6ICdyJyxcbiAgICAgICAgICAgIHMgICAgICAgICAgICA6ICdzJyxcbiAgICAgICAgICAgIHQgICAgICAgICAgICA6ICd0JyxcbiAgICAgICAgICAgIHUgICAgICAgICAgICA6ICd1JyxcbiAgICAgICAgICAgIHYgICAgICAgICAgICA6ICd2JyxcbiAgICAgICAgICAgIHcgICAgICAgICAgICA6ICd3JyxcbiAgICAgICAgICAgIHggICAgICAgICAgICA6ICd4JyxcbiAgICAgICAgICAgIHkgICAgICAgICAgICA6ICd5JyxcbiAgICAgICAgICAgIHogICAgICAgICAgICA6ICd6JyxcbiAgICAgICAgICAgIEEgICAgICAgICAgICA6ICdBJyxcbiAgICAgICAgICAgIEIgICAgICAgICAgICA6ICdCJyxcbiAgICAgICAgICAgIEMgICAgICAgICAgICA6ICdDJyxcbiAgICAgICAgICAgIEQgICAgICAgICAgICA6ICdEJyxcbiAgICAgICAgICAgIEUgICAgICAgICAgICA6ICdFJyxcbiAgICAgICAgICAgIEYgICAgICAgICAgICA6ICdGJyxcbiAgICAgICAgICAgIEcgICAgICAgICAgICA6ICdHJyxcbiAgICAgICAgICAgIEggICAgICAgICAgICA6ICdIJyxcbiAgICAgICAgICAgIEkgICAgICAgICAgICA6ICdJJyxcbiAgICAgICAgICAgIEogICAgICAgICAgICA6ICdKJyxcbiAgICAgICAgICAgIEsgICAgICAgICAgICA6ICdLJyxcbiAgICAgICAgICAgIEwgICAgICAgICAgICA6ICdMJyxcbiAgICAgICAgICAgIE0gICAgICAgICAgICA6ICdNJyxcbiAgICAgICAgICAgIE4gICAgICAgICAgICA6ICdOJyxcbiAgICAgICAgICAgIE8gICAgICAgICAgICA6ICdPJyxcbiAgICAgICAgICAgIFAgICAgICAgICAgICA6ICdQJyxcbiAgICAgICAgICAgIFEgICAgICAgICAgICA6ICdRJyxcbiAgICAgICAgICAgIFIgICAgICAgICAgICA6ICdSJyxcbiAgICAgICAgICAgIFMgICAgICAgICAgICA6ICdTJyxcbiAgICAgICAgICAgIFQgICAgICAgICAgICA6ICdUJyxcbiAgICAgICAgICAgIFUgICAgICAgICAgICA6ICdVJyxcbiAgICAgICAgICAgIFYgICAgICAgICAgICA6ICdWJyxcbiAgICAgICAgICAgIFcgICAgICAgICAgICA6ICdXJyxcbiAgICAgICAgICAgIFggICAgICAgICAgICA6ICdYJyxcbiAgICAgICAgICAgIFkgICAgICAgICAgICA6ICdZJyxcbiAgICAgICAgICAgIFogICAgICAgICAgICA6ICdaJyxcbiAgICAgICAgICAgIFNlbWljb2xvbiAgICA6ICc7JyxcbiAgICAgICAgICAgIEVxdWFsICAgICAgICA6ICc9JyxcbiAgICAgICAgICAgIENvbW1hICAgICAgICA6ICcsJyxcbiAgICAgICAgICAgIEh5cGhlbiAgICAgICA6ICctJyxcbiAgICAgICAgICAgIE1pbnVzICAgICAgICA6ICctJyxcbiAgICAgICAgICAgIFBsdXMgICAgICAgICA6ICcrJyxcbiAgICAgICAgICAgIERvdCAgICAgICAgICA6ICcuJyxcbiAgICAgICAgICAgIFNsYXNoICAgICAgICA6ICcvJyxcbiAgICAgICAgICAgIEJhY2txdW90ZSAgICA6ICdgJyxcbiAgICAgICAgICAgIExlZnRCcmFja2V0ICA6ICdbJyxcbiAgICAgICAgICAgIFJpZ2h0QnJhY2tldCA6ICddJyxcbiAgICAgICAgICAgIEJhY2tzbGFzaCAgICA6ICdcXFxcJyxcbiAgICAgICAgICAgIFF1b3RlICAgICAgICA6ICdcXCcnLFxuXG4gICAgICAgICAgICAvLyBOdW1lcmljIGtleXBhZCBrZXlzXG4gICAgICAgICAgICBudW1wYWQwICAgICAgICAgICAgICAgICAgICAgICA6ICcwJyxcbiAgICAgICAgICAgIG51bXBhZDEgICAgICAgICAgICAgICAgICAgICAgIDogJzEnLFxuICAgICAgICAgICAgbnVtcGFkMiAgICAgICAgICAgICAgICAgICAgICAgOiAnMicsXG4gICAgICAgICAgICBudW1wYWQzICAgICAgICAgICAgICAgICAgICAgICA6ICczJyxcbiAgICAgICAgICAgIG51bXBhZDQgICAgICAgICAgICAgICAgICAgICAgIDogJzQnLFxuICAgICAgICAgICAgbnVtcGFkNSAgICAgICAgICAgICAgICAgICAgICAgOiAnNScsXG4gICAgICAgICAgICBudW1wYWQ2ICAgICAgICAgICAgICAgICAgICAgICA6ICc2JyxcbiAgICAgICAgICAgIG51bXBhZDcgICAgICAgICAgICAgICAgICAgICAgIDogJzcnLFxuICAgICAgICAgICAgbnVtcGFkOCAgICAgICAgICAgICAgICAgICAgICAgOiAnOCcsXG4gICAgICAgICAgICBudW1wYWQ5ICAgICAgICAgICAgICAgICAgICAgICA6ICc5JyxcbiAgICAgICAgICAgIE51bXBhZERvdCAgICAgICAgICAgICAgICAgICAgIDogJy4nLFxuICAgICAgICAgICAgTnVtcGFkRG90QWx0ICAgICAgICAgICAgICAgICAgOiAnLCcsIC8vIE1vZGVybiBicm93c2VycyBhdXRvbWF0aWNhbGx5IGFkYXB0IHRoZSBjaGFyYWN0ZXIgc2VudCBieSB0aGlzIGtleSB0byB0aGUgZGVjaW1hbCBjaGFyYWN0ZXIgb2YgdGhlIGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICAgICAgICAgIE51bXBhZE11bHRpcGx5ICAgICAgICAgICAgICAgIDogJyonLFxuICAgICAgICAgICAgTnVtcGFkUGx1cyAgICAgICAgICAgICAgICAgICAgOiAnKycsXG4gICAgICAgICAgICBOdW1wYWRNaW51cyAgICAgICAgICAgICAgICAgICA6ICctJyxcbiAgICAgICAgICAgIE51bXBhZFN1YnRyYWN0ICAgICAgICAgICAgICAgIDogJy0nLFxuICAgICAgICAgICAgTnVtcGFkU2xhc2ggICAgICAgICAgICAgICAgICAgOiAnLycsXG4gICAgICAgICAgICBOdW1wYWREb3RPYnNvbGV0ZUJyb3dzZXJzICAgICA6ICdEZWNpbWFsJyxcbiAgICAgICAgICAgIE51bXBhZE11bHRpcGx5T2Jzb2xldGVCcm93c2VyczogJ011bHRpcGx5JyxcbiAgICAgICAgICAgIE51bXBhZFBsdXNPYnNvbGV0ZUJyb3dzZXJzICAgIDogJ0FkZCcsXG4gICAgICAgICAgICBOdW1wYWRNaW51c09ic29sZXRlQnJvd3NlcnMgICA6ICdTdWJ0cmFjdCcsXG4gICAgICAgICAgICBOdW1wYWRTbGFzaE9ic29sZXRlQnJvd3NlcnMgICA6ICdEaXZpZGUnLFxuXG4gICAgICAgICAgICAvLyBTcGVjaWFsIGFycmF5cyBmb3IgcXVpY2tlciB0ZXN0c1xuICAgICAgICAgICAgX2FsbEZuS2V5cyAgICAgICAgICAgOiBbJ0YxJywgJ0YyJywgJ0YzJywgJ0Y0JywgJ0Y1JywgJ0Y2JywgJ0Y3JywgJ0Y4JywgJ0Y5JywgJ0YxMCcsICdGMTEnLCAnRjEyJ10sXG4gICAgICAgICAgICBfc29tZU5vblByaW50YWJsZUtleXM6IFsnVGFiJywgJ0VudGVyJywgJ1NoaWZ0JywgJ1NoaWZ0TGVmdCcsICdTaGlmdFJpZ2h0JywgJ0NvbnRyb2wnLCAnQ29udHJvbExlZnQnLCAnQ29udHJvbFJpZ2h0JywgJ0FsdCcsICdBbHRMZWZ0JywgJ0FsdFJpZ2h0JywgJ1BhdXNlJywgJ0NhcHNMb2NrJywgJ0VzY2FwZSddLFxuICAgICAgICAgICAgX2RpcmVjdGlvbktleXMgICAgICAgOiBbJ1BhZ2VVcCcsICdQYWdlRG93bicsICdFbmQnLCAnSG9tZScsICdBcnJvd0Rvd24nLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnLCAnQXJyb3dVcCddLFxuICAgICAgICB9O1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRvTnVtZXJpY0VudW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0F1dG9OdW1lcmljRW51bS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBO0FBbUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakhBO0FBbUhBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6R0E7QUEyR0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhOQTtBQWtOQTtBQWpmQTtBQUNBO0FBbWZBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n")
			}, function(module, exports, __webpack_require__) {
				"use strict";
				eval("\n\nvar _AutoNumeric = __webpack_require__(0);\n\nvar _AutoNumeric2 = _interopRequireDefault(_AutoNumeric);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Options values enumeration\n */\nObject.defineProperty(_AutoNumeric2.default, 'options', {\n    get: function get() {\n        return {\n            /* Defines if the decimal places should be padded with zeroes\n             * `true`     : always pad decimals with zeros (ie. '12.3400')\n             * `false`    : never pad with zeros (ie. '12.34')\n             * `'floats'` : pad with zeroes only when there are decimals (ie. '12' and '12.3400')\n             * Note: setting allowDecimalPadding to 'false' will override the 'decimalPlaces' setting.\n             */\n            allowDecimalPadding: {\n                always: true,\n                never: false,\n                floats: 'floats'\n            },\n\n            /* Defines where should be positioned the caret on focus\n             * null : Do not enforce any caret positioning on focus (this is needed when using `selectOnFocus`)\n             * `'start'` : put the caret of the far left side of the value (excluding the positive/negative sign and currency symbol, if any)\n             * `'end'` : put the caret of the far right side of the value (excluding the positive/negative sign and currency symbol, if any)\n             * `'decimalLeft'` : put the caret of the left of the decimal character if any\n             * `'decimalRight'` : put the caret of the right of the decimal character if any\n             */\n            caretPositionOnFocus: {\n                start: 'start',\n                end: 'end',\n                decimalLeft: 'decimalLeft',\n                decimalRight: 'decimalRight',\n                doNoForceCaretPosition: null\n            },\n\n            /* Defines if a local list of AutoNumeric objects should be kept when initializing this object.\n             * This list is used by the `global.*` functions.\n             */\n            createLocalList: {\n                createList: true,\n                doNotCreateList: false\n            },\n\n            /* Defines the currency symbol string.\n             * It can be a string of more than one character (allowing for instance to use a space on either side of it, example: '$ ' or ' $')\n             * cf. https://en.wikipedia.org/wiki/Currency_symbol\n             */\n            currencySymbol: {\n                none: '',\n                currencySign: '¤',\n                austral: '₳', // ARA\n                australCentavo: '¢',\n                baht: '฿', // THB\n                cedi: '₵', // GHS\n                cent: '¢',\n                colon: '₡', // CRC\n                cruzeiro: '₢', // BRB - Not used anymore since 1993\n                dollar: '$',\n                dong: '₫', // VND\n                drachma: '₯', // GRD (or 'Δρχ.' or 'Δρ.')\n                dram: '​֏', // AMD\n                european: '₠', // XEU (old currency before the Euro)\n                euro: '€', // EUR\n                florin: 'ƒ',\n                franc: '₣', // FRF\n                guarani: '₲', // PYG\n                hryvnia: '₴', // грн\n                kip: '₭', // LAK\n                att: 'ອັດ', // cents of the Kip\n                lepton: 'Λ.', // cents of the Drachma\n                lira: '₺', // TRY\n                liraOld: '₤',\n                lari: '₾', // GEL\n                mark: 'ℳ',\n                mill: '₥',\n                naira: '₦', // NGN\n                peseta: '₧',\n                peso: '₱', // PHP\n                pfennig: '₰', // cents of the Mark\n                pound: '£',\n                real: 'R$', // Brazilian real\n                riel: '៛', // KHR\n                ruble: '₽', // RUB\n                rupee: '₹', // INR\n                rupeeOld: '₨',\n                shekel: '₪',\n                shekelAlt: 'ש״ח‎‎',\n                taka: '৳', // BDT\n                tenge: '₸', // KZT\n                togrog: '₮', // MNT\n                won: '₩',\n                yen: '¥'\n            },\n\n            /* Defines where the currency symbol should be placed (before of after the numbers)\n             * for prefix currencySymbolPlacement: \"p\" (default)\n             * for suffix currencySymbolPlacement: \"s\"\n             */\n            currencySymbolPlacement: {\n                prefix: 'p',\n                suffix: 's'\n            },\n\n            /* Defines what decimal separator character is used\n             */\n            decimalCharacter: {\n                comma: ',',\n                dot: '.',\n                middleDot: '·',\n                arabicDecimalSeparator: '٫',\n                decimalSeparatorKeySymbol: '⎖'\n            },\n\n            /* Allow to declare an alternative decimal separator which is automatically replaced by `decimalCharacter` when typed.\n             * This is used by countries that use a comma ',' as the decimal character and have keyboards with a numeric pads that have\n             * a period 'full stop' as the decimal character (France or Spain for instance).\n             */\n            decimalCharacterAlternative: {\n                none: null,\n                comma: ',',\n                dot: '.'\n            },\n\n            /* Defines the default number of decimal places to show on the formatted value, and keep for the precision.\n             * Incidentally, since we need to be able to show that many decimal places, this also defines the raw value precision by default.\n             */\n            decimalPlaces: {\n                none: 0,\n                one: 1,\n                two: 2,\n                three: 3,\n                four: 4,\n                five: 5,\n                six: 6\n            },\n\n            /* Defines how many decimal places should be kept for the raw value (ie. This is the precision for float values).\n             *\n             * If this option is set to `null` (which is the default), then the value of `decimalPlaces` is used for `decimalPlacesRawValue` as well.\n             * Note: Setting this to a lower number of decimal places than the one to be shown will lead to confusion for the users.\n             */\n            decimalPlacesRawValue: {\n                useDefault: null,\n                none: 0,\n                one: 1,\n                two: 2,\n                three: 3,\n                four: 4,\n                five: 5,\n                six: 6\n            },\n\n            /* Defines how many decimal places should be visible when the element is unfocused.\n             * If this is set to `null`, then this option is ignored, and the `decimalPlaces` option value will be used instead.\n             * This means this is optional ; if omitted the decimal places will be the same when the input has the focus.\n             *\n             * This option can be used in conjonction with the two other `scale*` options, which allows to display a different formatted value when the element is unfocused, while another formatted value is shown when focused.\n             * For those `scale*` options to have any effect, `divisorWhenUnfocused` must not be `null`.\n             */\n            decimalPlacesShownOnBlur: {\n                useDefault: null,\n                none: 0,\n                one: 1,\n                two: 2,\n                three: 3,\n                four: 4,\n                five: 5,\n                six: 6\n            },\n\n            /* Defines how many decimal places should be visible when the element has the focus.\n             * If this is set to `null`, then this option is ignored, and the `decimalPlaces` option value will be used instead.\n             *\n             * Example:\n             * For instance if `decimalPlacesShownOnFocus` is set to `5` and the default number of decimal places is `2`, then on focus `1,000.12345` will be shown, while without focus `1,000.12` will be set back.\n             * Note 1: the results depends on the rounding method used.\n             * Note 2: the `getNumericString()` method returns the extended decimal places\n             */\n            decimalPlacesShownOnFocus: {\n                useDefault: null,\n                none: 0,\n                one: 1,\n                two: 2,\n                three: 3,\n                four: 4,\n                five: 5,\n                six: 6\n            },\n\n            /* Helper option for ASP.NET postback\n             * This should be set as the value of the unformatted default value\n             * examples:\n             * no default value=\"\" {defaultValueOverride: \"\"}\n             * value=1234.56 {defaultValueOverride: '1234.56'}\n             */\n            defaultValueOverride: {\n                doNotOverride: null\n            },\n\n            /* Defines how many numbers should be grouped together (usually for the thousand separator)\n             * - \"2\",  results in 99,99,99,999 India's lakhs\n             * - \"2s\", results in 99,999,99,99,999 India's lakhs scaled\n             * - \"3\",  results in 999,999,999 (default)\n             * - \"4\",  results in 9999,9999,9999 used in some Asian countries\n             * Note: This option does not accept other grouping choice.\n             */\n            digitalGroupSpacing: {\n                two: '2',\n                twoScaled: '2s',\n                three: '3',\n                four: '4'\n            },\n\n            /* Defines the thousand grouping separator character\n             * Example : If `'.'` is set, then you'll get `'1.234.567'`\n             */\n            digitGroupSeparator: {\n                comma: ',',\n                dot: '.',\n                normalSpace: ' ',\n                thinSpace: '\\u2009',\n                narrowNoBreakSpace: '\\u202F',\n                noBreakSpace: '\\xA0',\n                noSeparator: '',\n                apostrophe: '\\'',\n                arabicThousandsSeparator: '٬',\n                dotAbove: '˙'\n            },\n\n            /* The `divisorWhenUnfocused` divide the element value on focus.\n             * On blur, the element value is multiplied back.\n             *\n             * Example : Display percentages using { divisorWhenUnfocused: 100 } (or directly in the Html with `<input data-divisor-when-unfocused=\"100\">`)\n             * The divisor value does not need to be an integer, but please understand that Javascript has limited accuracy in math ; use with caution.\n             * Note: The `getNumericString` method returns the full value, including the 'hidden' decimals.\n             */\n            divisorWhenUnfocused: {\n                none: null,\n                percentage: 100,\n                permille: 1000,\n                basisPoint: 10000\n            },\n\n            /* Defines what should be displayed in the element if the raw value is an empty string ('').\n             * - 'focus'  : The currency sign is displayed when the input receives focus (default)\n             * - 'press'  : The currency sign is displayed whenever a key is being pressed\n             * - 'always' : The currency sign is always displayed\n             * - 'zero'   : A zero is displayed ('rounded' with or without a currency sign) if the input has no value on focus out\n             * - 'null'   : When the element is empty, the `rawValue` and the element value/text is set to `null`. This also allows to set the value to `null` using `anElement.set(null)`.\n             */\n            emptyInputBehavior: {\n                null: 'null',\n                focus: 'focus',\n                press: 'press',\n                always: 'always',\n                zero: 'zero'\n            },\n\n            /* This option is the 'strict mode' (aka 'debug' mode), which allows autoNumeric to strictly analyse the options passed, and fails if an unknown options is used in the settings object.\n             * You should set that to `true` if you want to make sure you are only using 'pure' autoNumeric settings objects in your code.\n             * If you see uncaught errors in the console and your code starts to fail, this means somehow those options gets polluted by another program (which usually happens when using frameworks).\n             */\n            failOnUnknownOption: {\n                fail: true,\n                ignore: false\n            },\n\n            /* Determine if the default value will be formatted on initialization.\n             */\n            formatOnPageLoad: {\n                format: true, // automatically formats the default value on initialization\n                doNotFormat: false // will not format the default value on initialization\n            },\n\n            /* Set the undo/redo history table size.\n             * Each record keeps the raw value as well and the last known caret/selection positions.\n             */\n            historySize: {\n                verySmall: 5,\n                small: 10,\n                medium: 20,\n                large: 50,\n                veryLarge: 100,\n                insane: Number.MAX_SAFE_INTEGER\n            },\n\n            /* Allow the user to 'cancel' and undo the changes he made to the given autonumeric-managed element, by pressing the 'Escape' key.\n             * Whenever the user 'validate' the input (either by hitting 'Enter', or blurring the element), the new value is saved for subsequent 'cancellation'.\n             *\n             * The process :\n             *   - save the input value on focus\n             *   - if the user change the input value, and hit `Escape`, then the initial value saved on focus is set back\n             *   - on the other hand if the user either have used `Enter` to validate (`Enter` throws a change event) his entries, or if the input value has been changed by another script in the mean time, then we save the new input value\n             *   - on a successful 'cancel', select the whole value (while respecting the `selectNumberOnly` option)\n             *   - bonus; if the value has not changed, hitting 'Esc' just select all the input value (while respecting the `selectNumberOnly` option)\n             */\n            isCancellable: {\n                cancellable: true,\n                notCancellable: false\n            },\n\n            /* Controls the leading zero behavior\n             * - 'allow' : allows leading zeros to be entered. Zeros will be truncated when entering additional digits. On focusout zeros will be deleted\n             * - 'deny'  : allows only one leading zero on values that are between 1 and -1\n             * - 'keep'  : allows leading zeros to be entered. on focusout zeros will be retained\n             */\n            leadingZero: {\n                allow: 'allow',\n                deny: 'deny',\n                keep: 'keep'\n            },\n\n            /* Defines the maximum possible value a user can enter.\n             * Notes:\n             * - this value must be a string and use the period for the decimal point\n             * - this value needs to be larger than `minimumValue`\n             */\n            maximumValue: {\n                tenTrillions: '9999999999999.99', // 9.999.999.999.999,99 ~= 10000 billions\n                tenTrillionsNoDecimals: '9999999999999', //FIXME Update all those limits to the 'real' numbers\n                oneBillion: '999999999.99',\n                zero: '0'\n            },\n\n            /* Defines the minimum possible value a user can enter.\n             * Notes:\n             * - this value must be a string and use the period for the decimal point\n             * - this value needs to be smaller than `maximumValue`\n             * - if this is superior to 0, then you'll effectively prevent your user to entirely delete the content of your element\n             */\n            minimumValue: {\n                tenTrillions: '-9999999999999.99', // -9.999.999.999.999,99 ~= 10000 billions\n                tenTrillionsNoDecimals: '-9999999999999',\n                oneBillion: '-999999999.99',\n                zero: '0'\n            },\n\n            /* Allows the user to increment or decrement the element value with the mouse wheel.\n             * The wheel behavior can be modified by the `wheelStep` option.\n             * This `wheelStep` option can be used in two ways, either by setting:\n             * - a 'fixed' step value (`wheelStep : 1000`), or\n             * - the 'progressive' string (`wheelStep : 'progressive'`), which will then activate a special mode where the step is automatically calculated based on the element value size.\n             *\n             * Note :\n             * You can activate/deactivate the wheel event for each `wheelOn` option value by using the 'Shift' modifier key while using the mouse wheel.\n             */\n            modifyValueOnWheel: {\n                modifyValue: true,\n                doNothing: false\n            },\n\n            /* Adds brackets on negative values (ie. transforms '-$ 999.99' to '($999.99)')\n             * Those brackets are visible only when the field does NOT have the focus.\n             * The left and right symbols should be enclosed in quotes and separated by a comma.\n             */\n            negativeBracketsTypeOnBlur: {\n                parentheses: '(,)',\n                brackets: '[,]',\n                chevrons: '<,>',\n                curlyBraces: '{,}',\n                angleBrackets: '〈,〉',\n                japaneseQuotationMarks: '｢,｣',\n                halfBrackets: '⸤,⸥',\n                whiteSquareBrackets: '⟦,⟧',\n                quotationMarks: '‹,›',\n                guillemets: '«,»',\n                none: null // This is the default value, which deactivate this feature\n            },\n\n            /* Placement of the negative/positive sign relative to the `currencySymbol` option.\n             *\n             * Example:\n             * -1,234.56  => default no options required\n             * -$1,234.56 => {currencySymbol: \"$\"} or {currencySymbol: \"$\", negativePositiveSignPlacement: \"l\"}\n             * $-1,234.56 => {currencySymbol: \"$\", negativePositiveSignPlacement: \"r\"} // Default if negativePositiveSignPlacement is 'null' and currencySymbol is not empty\n             * -1,234.56$ => {currencySymbol: \"$\", currencySymbolPlacement: \"s\", negativePositiveSignPlacement: \"p\"} // Default if negativePositiveSignPlacement is 'null' and currencySymbol is not empty\n             * 1,234.56-  => {negativePositiveSignPlacement: \"s\"}\n             * $1,234.56- => {currencySymbol: \"$\", negativePositiveSignPlacement: \"s\"}\n             * 1,234.56-$ => {currencySymbol: \"$\", currencySymbolPlacement: \"s\"}\n             * 1,234.56$- => {currencySymbol: \"$\", currencySymbolPlacement: \"s\", negativePositiveSignPlacement: \"r\"}\n             */\n            negativePositiveSignPlacement: {\n                prefix: 'p',\n                suffix: 's',\n                left: 'l',\n                right: 'r',\n                none: null\n            },\n\n            /* Defines the negative sign symbol.\n             * It can be a string of only one character.\n             */\n            negativeSignCharacter: {\n                hyphen: '-',\n                minus: '−',\n                heavyMinus: '➖',\n                fullWidthHyphen: '－',\n                circledMinus: '⊖',\n                squaredMinus: '⊟',\n                triangleMinus: '⨺',\n                plusMinus: '±',\n                minusPlus: '∓',\n                dotMinus: '∸',\n                minusTilde: '≂',\n                not: '¬'\n            },\n\n            /* Defines if the element should have event listeners activated on it.\n             * By default, those event listeners are only added to <input> elements and html element with the `contenteditable` attribute set to `true`, but not on the other html tags.\n             * This allows to initialize elements without any event listeners.\n             * Warning: Since AutoNumeric will not check the input content after its initialization, using some autoNumeric methods afterwards *will* probably leads to formatting problems.\n             */\n            noEventListeners: {\n                noEvents: true,\n                addEvents: false\n            },\n\n            /* Manage how autoNumeric react when the user tries to paste an invalid number.\n             * - 'error'    : (This is the default behavior) The input value is not changed and an error is output in the console.\n             * - 'ignore'   : idem than 'error', but fail silently without outputting any error/warning in the console.\n             * - 'clamp'    : if the pasted value is either too small or too big regarding the minimumValue and maximumValue range, then the result is clamped to those limits.\n             * - 'truncate' : autoNumeric will insert as many pasted numbers it can at the initial caret/selection, until everything is pasted, or the range limit is hit.\n             *                The non-pasted numbers are dropped and therefore not used at all.\n             * - 'replace'  : autoNumeric will first insert as many pasted numbers it can at the initial caret/selection, then if the range limit is hit, it will try\n             *                to replace one by one the remaining initial numbers (on the right side of the caret) with the rest of the pasted numbers.\n             *\n             * Note 1 : A paste content starting with a negative sign '-' will be accepted anywhere in the input, and will set the resulting value as a negative number\n             * Note 2 : A paste content starting with a number will be accepted, even if the rest is gibberish (ie. '123foobar456').\n             *          Only the first number will be used (here '123').\n             * Note 3 : The paste event works with the `decimalPlacesShownOnFocus` option too.\n             */\n            onInvalidPaste: {\n                error: 'error',\n                ignore: 'ignore',\n                clamp: 'clamp',\n                truncate: 'truncate',\n                replace: 'replace'\n            },\n\n            /* Defines how the value should be formatted when wanting a 'localized' version of it.\n             * - null or 'string' => 'nnnn.nn' or '-nnnn.nn' as text type. This is the default behavior.\n             * - 'number'         => nnnn.nn or -nnnn.nn as a Number (Warning: this works only for integers inferior to Number.MAX_SAFE_INTEGER)\n             * - ',' or '-,'      => 'nnnn,nn' or '-nnnn,nn'\n             * - '.-'             => 'nnnn.nn' or 'nnnn.nn-'\n             * - ',-'             => 'nnnn,nn' or 'nnnn,nn-'\n             *\n             * Note: The hyphen '-' is translated to the custom negative sign defined in `negativeSignCharacter`\n             */\n            outputFormat: {\n                string: 'string',\n                number: 'number',\n                dot: '.',\n                negativeDot: '-.',\n                comma: ',',\n                negativeComma: '-,',\n                dotNegative: '.-',\n                commaNegative: ',-',\n                none: null\n            },\n\n            /* Override the minimum and maximum limits\n             * overrideMinMaxLimits: \"ceiling\" adheres to maximumValue and ignores minimumValue settings\n             * overrideMinMaxLimits: \"floor\" adheres to minimumValue and ignores maximumValue settings\n             * overrideMinMaxLimits: \"ignore\" ignores both minimumValue & maximumValue\n             */\n            overrideMinMaxLimits: {\n                ceiling: 'ceiling',\n                floor: 'floor',\n                ignore: 'ignore',\n                doNotOverride: null\n            },\n\n            /* Defines the positive sign symbol.\n             * It can be a string of only one character.\n             * This is shown only if `showPositiveSign` is set to `true`.\n             */\n            positiveSignCharacter: {\n                plus: '+',\n                fullWidthPlus: '＋',\n                heavyPlus: '➕',\n                doublePlus: '⧺',\n                triplePlus: '⧻',\n                circledPlus: '⊕',\n                squaredPlus: '⊞',\n                trianglePlus: '⨹',\n                plusMinus: '±',\n                minusPlus: '∓',\n                dotPlus: '∔',\n                altHebrewPlus: '﬩',\n                normalSpace: ' ',\n                thinSpace: '\\u2009',\n                narrowNoBreakSpace: '\\u202F',\n                noBreakSpace: '\\xA0'\n            },\n\n            /* The `rawValueDivisor` divides the formatted value shown in the AutoNumeric element and store the result in `rawValue`.\n             * @example { rawValueDivisor: '100' } or <input data-raw-value-divisor=\"100\">\n             * Given the `0.01234` raw value, the formatted value will be displayed as `'1.234'`.\n             * This is useful when displaying percentage for instance, and avoid the need to divide/multiply by 100 between the number shown and the raw value.\n             */\n            rawValueDivisor: {\n                none: null,\n                percentage: 100,\n                permille: 1000,\n                basisPoint: 10000\n            },\n\n            /* Defines if the <input> element should be set as read only on initialization.\n             * When set to `true`, then the `readonly` html property is added to the <input> element on initialization.\n             */\n            readOnly: {\n                readOnly: true,\n                readWrite: false\n            },\n\n            /* Defines the rounding method to use.\n             * roundingMethod: \"S\", Round-Half-Up Symmetric (default)\n             * roundingMethod: \"A\", Round-Half-Up Asymmetric\n             * roundingMethod: \"s\", Round-Half-Down Symmetric (lower case s)\n             * roundingMethod: \"a\", Round-Half-Down Asymmetric (lower case a)\n             * roundingMethod: \"B\", Round-Half-Even \"Bankers Rounding\"\n             * roundingMethod: \"U\", Round Up \"Round-Away-From-Zero\"\n             * roundingMethod: \"D\", Round Down \"Round-Toward-Zero\" - same as truncate\n             * roundingMethod: \"C\", Round to Ceiling \"Toward Positive Infinity\"\n             * roundingMethod: \"F\", Round to Floor \"Toward Negative Infinity\"\n             * roundingMethod: \"N05\" Rounds to the nearest .05 => same as \"CHF\" used in 1.9X and still valid\n             * roundingMethod: \"U05\" Rounds up to next .05\n             * roundingMethod: \"D05\" Rounds down to next .05\n             */\n            roundingMethod: {\n                halfUpSymmetric: 'S',\n                halfUpAsymmetric: 'A',\n                halfDownSymmetric: 's',\n                halfDownAsymmetric: 'a',\n                halfEvenBankersRounding: 'B',\n                upRoundAwayFromZero: 'U',\n                downRoundTowardZero: 'D',\n                toCeilingTowardPositiveInfinity: 'C',\n                toFloorTowardNegativeInfinity: 'F',\n                toNearest05: 'N05',\n                toNearest05Alt: 'CHF',\n                upToNext05: 'U05',\n                downToNext05: 'D05'\n            },\n\n            /* Set to `true` to allow the `decimalPlacesShownOnFocus` value to be saved with sessionStorage\n             * If IE 6 or 7 is detected, the value will be saved as a session cookie.\n             */\n            saveValueToSessionStorage: {\n                save: true,\n                doNotSave: false\n            },\n\n            /* Determine if the select all keyboard command will select the complete input text, or only the input numeric value\n             * Note : If the currency symbol is between the numeric value and the negative sign, only the numeric value will be selected\n             */\n            selectNumberOnly: {\n                selectNumbersOnly: true,\n                selectAll: false\n            },\n\n            /* Defines if the element value should be selected on focus.\n             * Note: The selection is done using the `selectNumberOnly` option.\n             */\n            selectOnFocus: {\n                select: true,\n                doNotSelect: false\n            },\n\n            /* Defines how the serialize functions should treat the spaces.\n             * Those spaces ' ' can either be converted to the plus sign '+', which is the default, or to '%20'.\n             * Both values being valid per the spec (http://www.w3.org/Addressing/URL/uri-spec.html).\n             * Also see the summed up answer on http://stackoverflow.com/a/33939287.\n             *\n             * tl;dr : Spaces should be converted to '%20' before the '?' sign, then converted to '+' after.\n             * In our case since we serialize the query, we use '+' as the default (but allow the user to get back the old *wrong* behavior).\n             */\n            serializeSpaces: {\n                plus: '+',\n                percent: '%20'\n            },\n\n            /* Defines if the element value should be converted to the raw value on focus (and back to the formatted on blur).\n             * If set to `true`, then autoNumeric remove the thousand separator, currency symbol and suffix on focus.\n             * Example:\n             * If the input value is '$ 1,999.88 suffix', on focus it becomes '1999.88' and back to '$ 1,999.88 suffix' on blur.\n             */\n            showOnlyNumbersOnFocus: {\n                onlyNumbers: true,\n                showAll: false\n            },\n\n            /* Allow the positive sign symbol `+` to be displayed for positive numbers.\n             * By default, this positive sign is not shown.\n             * The sign placement is controlled by the 'negativePositiveSignPlacement' option, mimicking the negative sign placement rules.\n             */\n            showPositiveSign: {\n                show: true,\n                hide: false\n            },\n\n            /* Defines if warnings should be shown in the console.\n             * Those warnings can be ignored, but are usually printed when something could be improved by the user (ie. option conflicts).\n             */\n            showWarnings: {\n                show: true, // All warning are shown\n                hide: false // No warnings are shown, only the thrown errors\n            },\n\n            /* Defines the rules that calculate the CSS class(es) to apply on the element, based on the raw unformatted value.\n             * This can also be used to call callbacks whenever the `rawValue` is updated.\n             * Important: all callbacks must return `null` if no ranges/userDefined classes are selected\n             * @example\n             * {\n             *     positive   : 'autoNumeric-positive', // Or `null` to not use it\n             *     negative   : 'autoNumeric-negative',\n             *     ranges     : [\n             *         { min: 0, max: 25, class: 'autoNumeric-red' },\n             *         { min: 25, max: 50, class: 'autoNumeric-orange' },\n             *         { min: 50, max: 75, class: 'autoNumeric-yellow' },\n             *         { min: 75, max: Number.MAX_SAFE_INTEGER, class: 'autoNumeric-green' },\n             *     ],\n             *     userDefined: [\n             *         // If 'classes' is a string, set it if `true`, remove it if `false`\n             *         { callback: rawValue => { return true; }, classes: 'thisIsTrue' },\n             *         // If 'classes' is an array with only 2 elements, set the first class if `true`, the second if `false`\n             *         { callback: rawValue => rawValue % 2 === 0, classes: ['autoNumeric-even', 'autoNumeric-odd'] },\n             *         // Return only one index to use on the `classes` array (here, 'class3')\n             *         { callback: rawValue => { return 2; }, classes: ['class1', 'class2', 'class3'] },\n             *         // Return an array of indexes to use on the `classes` array (here, 'class1' and 'class3')\n             *         { callback: rawValue => { return [0, 2]; }, classes: ['class1', 'class2', 'class3'] },\n             *         // If 'classes' is `undefined` or `null`, then the callback is called with the AutoNumeric object passed as a parameter\n             *         { callback: anElement => { return anElement.getFormatted(); } },\n             *     ],\n             * }\n             */\n            styleRules: {\n                none: null,\n                positiveNegative: {\n                    positive: 'autoNumeric-positive',\n                    negative: 'autoNumeric-negative'\n                },\n                range0To100With4Steps: {\n                    ranges: [{ min: 0, max: 25, class: 'autoNumeric-red' }, { min: 25, max: 50, class: 'autoNumeric-orange' }, { min: 50, max: 75, class: 'autoNumeric-yellow' }, { min: 75, max: 100, class: 'autoNumeric-green' }]\n                },\n                evenOdd: {\n                    userDefined: [{ callback: function callback(rawValue) {\n                            return rawValue % 2 === 0;\n                        }, classes: ['autoNumeric-even', 'autoNumeric-odd'] }]\n                },\n                rangeSmallAndZero: {\n                    userDefined: [{\n                        callback: function callback(rawValue) {\n                            if (rawValue >= -1 && rawValue < 0) {\n                                return 0;\n                            }\n                            if (Number(rawValue) === 0) {\n                                return 1;\n                            }\n                            if (rawValue > 0 && rawValue <= 1) {\n                                return 2;\n                            }\n\n                            return null; // In case the rawValue is outside those ranges\n                        },\n                        classes: ['autoNumeric-small-negative', 'autoNumeric-zero', 'autoNumeric-small-positive']\n                    }]\n                }\n            },\n\n            /* Add a text on the right hand side of the element value.\n             * This suffix text can have any characters in its string, except numeric characters and the negative/positive sign.\n             * Example: ' dollars'\n             */\n            suffixText: {\n                none: '',\n                percentage: '%',\n                permille: '‰',\n                basisPoint: '‱'\n            },\n\n            /* The three options (divisorWhenUnfocused, decimalPlacesShownOnBlur & symbolWhenUnfocused) handle scaling of the input when the input does not have focus\n             * Please note that the non-scaled value is held in data and it is advised that you use the `saveValueToSessionStorage` option to ensure retaining the value\n             * [\"divisor\", \"decimal places\", \"symbol\"]\n             * Example: with the following options set {divisorWhenUnfocused: '1000', decimalPlacesShownOnBlur: '1', symbolWhenUnfocused: ' K'}\n             * Example: focusin value \"1,111.11\" focusout value \"1.1 K\"\n             */\n\n            /* The `symbolWhenUnfocused` option is a symbol placed as a suffix when not in focus.\n             * This is optional too.\n             */\n            symbolWhenUnfocused: {\n                none: null,\n                percentage: '%',\n                permille: '‰',\n                basisPoint: '‱'\n            },\n\n            /* Defines if the element value should be unformatted when the user hover his mouse over it while holding the `Alt` key.\n             * Unformatting there means that this removes any non-number characters and displays the *raw* value, as understood by Javascript (ie. `12.34` is a valid number, while `12,34` is not).\n             *\n             * We reformat back before anything else if :\n             * - the user focus on the element by tabbing or clicking into it,\n             * - the user releases the `Alt` key, and\n             * - if we detect a mouseleave event.\n             *\n             * We unformat again if :\n             * - while the mouse is over the element, the user hit `Alt` again\n             */\n            unformatOnHover: {\n                unformat: true,\n                doNotUnformat: false //TODO Rename to `keepFormat`\n            },\n\n            /* Removes the formatting and use the raw value in each autoNumeric elements of the parent form element, on the form `submit` event.\n             * The output format is a numeric string (nnnn.nn or -nnnn.nn).\n             */\n            unformatOnSubmit: {\n                unformat: true,\n                keepCurrentValue: false\n            },\n\n            /* Provides a way for automatically replacing the formatted value with a pre-defined string, when the raw value is equal to a specific value\n             * Here you can specify as many 'conversion' as needed.\n             */\n            valuesToStrings: {\n                none: null,\n                zeroDash: {\n                    0: '-'\n                },\n                oneAroundZero: {\n                    '-1': 'Min',\n                    1: 'Max'\n                }\n            },\n\n            /* Defines when the wheel event will increment or decrement the element value.\n             * When set to `'focus'`, the AutoNumeric-managed element needs to be focused for the wheel event to change the value.\n             * When set to `'hover'`, using the wheel event while the mouse is hovering the element is sufficient (no focus needed).\n             *\n             * Note :\n             * When `wheelOn` is set to `'focus'`, you can use the 'Shift' modifier key while using the mouse wheel in order to temporarily activate the increment/decrement feature even if the element is not focused.\n             * When `wheelOn` is set to `'hover'`, you can use the 'Shift' modifier key while using the mouse wheel in order to temporarily disable the increment/decrement feature even if the element is not hovered.\n             */\n            wheelOn: {\n                focus: 'focus',\n                hover: 'hover'\n            },\n\n            /* That option is linked to the `modifyValueOnWheel` one and will only be used if the latter is set to `true`.\n             * This option will modify the wheel behavior and can be used in two ways, either by setting :\n             * - a 'fixed' step value (a positive float or integer number `1000`), or\n             * - the `'progressive'` string.\n             *\n             * The 'fixed' mode always increment/decrement the element value by that amount, while respecting the `minimumValue` and `maximumValue` settings.\n             * The 'progressive' mode will increment/decrement the element value based on its current value. The bigger the number, the bigger the step, and vice versa.\n             */\n            wheelStep: {\n                progressive: 'progressive'\n            }\n        };\n    }\n}); /**\n     * Options for autoNumeric.js\n     * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>\n     * @copyright © 2016 Alexandre Bonneau\n     *\n     * The MIT License (http://www.opensource.org/licenses/mit-license.php)\n     *\n     * Permission is hereby granted, free of charge, to any person\n     * obtaining a copy of this software and associated documentation\n     * files (the \"Software\"), to deal in the Software without\n     * restriction, including without limitation the rights to use,\n     * copy, modify, merge, publish, distribute, sub license, and/or sell\n     * copies of the Software, and to permit persons to whom the\n     * Software is furnished to do so, subject to the following\n     * conditions:\n     *\n     * The above copyright notice and this permission notice shall be\n     * included in all copies or substantial portions of the Software.\n     *\n     * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n     * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n     * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n     * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n     * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n     * OTHER DEALINGS IN THE SOFTWARE.\n     */\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvQXV0b051bWVyaWNPcHRpb25zLmpzP2QyZWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPcHRpb25zIGZvciBhdXRvTnVtZXJpYy5qc1xuICogQGF1dGhvciBBbGV4YW5kcmUgQm9ubmVhdSA8YWxleGFuZHJlLmJvbm5lYXVAbGludXhmci5ldT5cbiAqIEBjb3B5cmlnaHQgwqkgMjAxNiBBbGV4YW5kcmUgQm9ubmVhdVxuICpcbiAqIFRoZSBNSVQgTGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiAqIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3ViIGxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG4gKiBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gKiBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAqIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gKiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IEF1dG9OdW1lcmljIGZyb20gJy4vQXV0b051bWVyaWMnO1xuXG4vKipcbiAqIE9wdGlvbnMgdmFsdWVzIGVudW1lcmF0aW9uXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdXRvTnVtZXJpYywgJ29wdGlvbnMnLCB7XG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLyogRGVmaW5lcyBpZiB0aGUgZGVjaW1hbCBwbGFjZXMgc2hvdWxkIGJlIHBhZGRlZCB3aXRoIHplcm9lc1xuICAgICAgICAgICAgICogYHRydWVgICAgICA6IGFsd2F5cyBwYWQgZGVjaW1hbHMgd2l0aCB6ZXJvcyAoaWUuICcxMi4zNDAwJylcbiAgICAgICAgICAgICAqIGBmYWxzZWAgICAgOiBuZXZlciBwYWQgd2l0aCB6ZXJvcyAoaWUuICcxMi4zNCcpXG4gICAgICAgICAgICAgKiBgJ2Zsb2F0cydgIDogcGFkIHdpdGggemVyb2VzIG9ubHkgd2hlbiB0aGVyZSBhcmUgZGVjaW1hbHMgKGllLiAnMTInIGFuZCAnMTIuMzQwMCcpXG4gICAgICAgICAgICAgKiBOb3RlOiBzZXR0aW5nIGFsbG93RGVjaW1hbFBhZGRpbmcgdG8gJ2ZhbHNlJyB3aWxsIG92ZXJyaWRlIHRoZSAnZGVjaW1hbFBsYWNlcycgc2V0dGluZy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYWxsb3dEZWNpbWFsUGFkZGluZzoge1xuICAgICAgICAgICAgICAgIGFsd2F5czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuZXZlciA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZsb2F0czogJ2Zsb2F0cycsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBEZWZpbmVzIHdoZXJlIHNob3VsZCBiZSBwb3NpdGlvbmVkIHRoZSBjYXJldCBvbiBmb2N1c1xuICAgICAgICAgICAgICogbnVsbCA6IERvIG5vdCBlbmZvcmNlIGFueSBjYXJldCBwb3NpdGlvbmluZyBvbiBmb2N1cyAodGhpcyBpcyBuZWVkZWQgd2hlbiB1c2luZyBgc2VsZWN0T25Gb2N1c2ApXG4gICAgICAgICAgICAgKiBgJ3N0YXJ0J2AgOiBwdXQgdGhlIGNhcmV0IG9mIHRoZSBmYXIgbGVmdCBzaWRlIG9mIHRoZSB2YWx1ZSAoZXhjbHVkaW5nIHRoZSBwb3NpdGl2ZS9uZWdhdGl2ZSBzaWduIGFuZCBjdXJyZW5jeSBzeW1ib2wsIGlmIGFueSlcbiAgICAgICAgICAgICAqIGAnZW5kJ2AgOiBwdXQgdGhlIGNhcmV0IG9mIHRoZSBmYXIgcmlnaHQgc2lkZSBvZiB0aGUgdmFsdWUgKGV4Y2x1ZGluZyB0aGUgcG9zaXRpdmUvbmVnYXRpdmUgc2lnbiBhbmQgY3VycmVuY3kgc3ltYm9sLCBpZiBhbnkpXG4gICAgICAgICAgICAgKiBgJ2RlY2ltYWxMZWZ0J2AgOiBwdXQgdGhlIGNhcmV0IG9mIHRoZSBsZWZ0IG9mIHRoZSBkZWNpbWFsIGNoYXJhY3RlciBpZiBhbnlcbiAgICAgICAgICAgICAqIGAnZGVjaW1hbFJpZ2h0J2AgOiBwdXQgdGhlIGNhcmV0IG9mIHRoZSByaWdodCBvZiB0aGUgZGVjaW1hbCBjaGFyYWN0ZXIgaWYgYW55XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNhcmV0UG9zaXRpb25PbkZvY3VzOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQgICAgICAgICAgICAgICAgIDogJ3N0YXJ0JyxcbiAgICAgICAgICAgICAgICBlbmQgICAgICAgICAgICAgICAgICAgOiAnZW5kJyxcbiAgICAgICAgICAgICAgICBkZWNpbWFsTGVmdCAgICAgICAgICAgOiAnZGVjaW1hbExlZnQnLFxuICAgICAgICAgICAgICAgIGRlY2ltYWxSaWdodCAgICAgICAgICA6ICdkZWNpbWFsUmlnaHQnLFxuICAgICAgICAgICAgICAgIGRvTm9Gb3JjZUNhcmV0UG9zaXRpb246IG51bGwsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBEZWZpbmVzIGlmIGEgbG9jYWwgbGlzdCBvZiBBdXRvTnVtZXJpYyBvYmplY3RzIHNob3VsZCBiZSBrZXB0IHdoZW4gaW5pdGlhbGl6aW5nIHRoaXMgb2JqZWN0LlxuICAgICAgICAgICAgICogVGhpcyBsaXN0IGlzIHVzZWQgYnkgdGhlIGBnbG9iYWwuKmAgZnVuY3Rpb25zLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjcmVhdGVMb2NhbExpc3Q6IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVMaXN0ICAgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgZG9Ob3RDcmVhdGVMaXN0OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIERlZmluZXMgdGhlIGN1cnJlbmN5IHN5bWJvbCBzdHJpbmcuXG4gICAgICAgICAgICAgKiBJdCBjYW4gYmUgYSBzdHJpbmcgb2YgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIgKGFsbG93aW5nIGZvciBpbnN0YW5jZSB0byB1c2UgYSBzcGFjZSBvbiBlaXRoZXIgc2lkZSBvZiBpdCwgZXhhbXBsZTogJyQgJyBvciAnICQnKVxuICAgICAgICAgICAgICogY2YuIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0N1cnJlbmN5X3N5bWJvbFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjdXJyZW5jeVN5bWJvbDoge1xuICAgICAgICAgICAgICAgIG5vbmUgICAgICAgICAgOiAnJyxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeVNpZ24gIDogJ8KkJyxcbiAgICAgICAgICAgICAgICBhdXN0cmFsICAgICAgIDogJ+KCsycsIC8vIEFSQVxuICAgICAgICAgICAgICAgIGF1c3RyYWxDZW50YXZvOiAnwqInLFxuICAgICAgICAgICAgICAgIGJhaHQgICAgICAgICAgOiAn4Li/JywgLy8gVEhCXG4gICAgICAgICAgICAgICAgY2VkaSAgICAgICAgICA6ICfigrUnLCAvLyBHSFNcbiAgICAgICAgICAgICAgICBjZW50ICAgICAgICAgIDogJ8KiJyxcbiAgICAgICAgICAgICAgICBjb2xvbiAgICAgICAgIDogJ+KCoScsIC8vIENSQ1xuICAgICAgICAgICAgICAgIGNydXplaXJvICAgICAgOiAn4oKiJywgLy8gQlJCIC0gTm90IHVzZWQgYW55bW9yZSBzaW5jZSAxOTkzXG4gICAgICAgICAgICAgICAgZG9sbGFyICAgICAgICA6ICckJyxcbiAgICAgICAgICAgICAgICBkb25nICAgICAgICAgIDogJ+KCqycsIC8vIFZORFxuICAgICAgICAgICAgICAgIGRyYWNobWEgICAgICAgOiAn4oKvJywgLy8gR1JEIChvciAnzpTPgc+HLicgb3IgJ86Uz4EuJylcbiAgICAgICAgICAgICAgICBkcmFtICAgICAgICAgIDogJ+KAi9aPJywgLy8gQU1EXG4gICAgICAgICAgICAgICAgZXVyb3BlYW4gICAgICA6ICfigqAnLCAvLyBYRVUgKG9sZCBjdXJyZW5jeSBiZWZvcmUgdGhlIEV1cm8pXG4gICAgICAgICAgICAgICAgZXVybyAgICAgICAgICA6ICfigqwnLCAvLyBFVVJcbiAgICAgICAgICAgICAgICBmbG9yaW4gICAgICAgIDogJ8aSJyxcbiAgICAgICAgICAgICAgICBmcmFuYyAgICAgICAgIDogJ+KCoycsIC8vIEZSRlxuICAgICAgICAgICAgICAgIGd1YXJhbmkgICAgICAgOiAn4oKyJywgLy8gUFlHXG4gICAgICAgICAgICAgICAgaHJ5dm5pYSAgICAgICA6ICfigrQnLCAvLyDQs9GA0L1cbiAgICAgICAgICAgICAgICBraXAgICAgICAgICAgIDogJ+KCrScsIC8vIExBS1xuICAgICAgICAgICAgICAgIGF0dCAgICAgICAgICAgOiAn4Lqt4Lqx4LqUJywgLy8gY2VudHMgb2YgdGhlIEtpcFxuICAgICAgICAgICAgICAgIGxlcHRvbiAgICAgICAgOiAnzpsuJywgLy8gY2VudHMgb2YgdGhlIERyYWNobWFcbiAgICAgICAgICAgICAgICBsaXJhICAgICAgICAgIDogJ+KCuicsIC8vIFRSWVxuICAgICAgICAgICAgICAgIGxpcmFPbGQgICAgICAgOiAn4oKkJyxcbiAgICAgICAgICAgICAgICBsYXJpICAgICAgICAgIDogJ+KCvicsIC8vIEdFTFxuICAgICAgICAgICAgICAgIG1hcmsgICAgICAgICAgOiAn4oSzJyxcbiAgICAgICAgICAgICAgICBtaWxsICAgICAgICAgIDogJ+KCpScsXG4gICAgICAgICAgICAgICAgbmFpcmEgICAgICAgICA6ICfigqYnLCAvLyBOR05cbiAgICAgICAgICAgICAgICBwZXNldGEgICAgICAgIDogJ+KCpycsXG4gICAgICAgICAgICAgICAgcGVzbyAgICAgICAgICA6ICfigrEnLCAvLyBQSFBcbiAgICAgICAgICAgICAgICBwZmVubmlnICAgICAgIDogJ+KCsCcsIC8vIGNlbnRzIG9mIHRoZSBNYXJrXG4gICAgICAgICAgICAgICAgcG91bmQgICAgICAgICA6ICfCoycsXG4gICAgICAgICAgICAgICAgcmVhbCAgICAgICAgICA6ICdSJCcsIC8vIEJyYXppbGlhbiByZWFsXG4gICAgICAgICAgICAgICAgcmllbCAgICAgICAgICA6ICfhn5snLCAvLyBLSFJcbiAgICAgICAgICAgICAgICBydWJsZSAgICAgICAgIDogJ+KCvScsIC8vIFJVQlxuICAgICAgICAgICAgICAgIHJ1cGVlICAgICAgICAgOiAn4oK5JywgLy8gSU5SXG4gICAgICAgICAgICAgICAgcnVwZWVPbGQgICAgICA6ICfigqgnLFxuICAgICAgICAgICAgICAgIHNoZWtlbCAgICAgICAgOiAn4oKqJyxcbiAgICAgICAgICAgICAgICBzaGVrZWxBbHQgICAgIDogJ9ep17TXl+KAjuKAjicsXG4gICAgICAgICAgICAgICAgdGFrYSAgICAgICAgICA6ICfgp7MnLCAvLyBCRFRcbiAgICAgICAgICAgICAgICB0ZW5nZSAgICAgICAgIDogJ+KCuCcsIC8vIEtaVFxuICAgICAgICAgICAgICAgIHRvZ3JvZyAgICAgICAgOiAn4oKuJywgLy8gTU5UXG4gICAgICAgICAgICAgICAgd29uICAgICAgICAgICA6ICfigqknLFxuICAgICAgICAgICAgICAgIHllbiAgICAgICAgICAgOiAnwqUnLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogRGVmaW5lcyB3aGVyZSB0aGUgY3VycmVuY3kgc3ltYm9sIHNob3VsZCBiZSBwbGFjZWQgKGJlZm9yZSBvZiBhZnRlciB0aGUgbnVtYmVycylcbiAgICAgICAgICAgICAqIGZvciBwcmVmaXggY3VycmVuY3lTeW1ib2xQbGFjZW1lbnQ6IFwicFwiIChkZWZhdWx0KVxuICAgICAgICAgICAgICogZm9yIHN1ZmZpeCBjdXJyZW5jeVN5bWJvbFBsYWNlbWVudDogXCJzXCJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY3VycmVuY3lTeW1ib2xQbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICBwcmVmaXg6ICdwJyxcbiAgICAgICAgICAgICAgICBzdWZmaXg6ICdzJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIERlZmluZXMgd2hhdCBkZWNpbWFsIHNlcGFyYXRvciBjaGFyYWN0ZXIgaXMgdXNlZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkZWNpbWFsQ2hhcmFjdGVyOiB7XG4gICAgICAgICAgICAgICAgY29tbWEgICAgICAgICAgICAgICAgICAgIDogJywnLFxuICAgICAgICAgICAgICAgIGRvdCAgICAgICAgICAgICAgICAgICAgICA6ICcuJyxcbiAgICAgICAgICAgICAgICBtaWRkbGVEb3QgICAgICAgICAgICAgICAgOiAnwrcnLFxuICAgICAgICAgICAgICAgIGFyYWJpY0RlY2ltYWxTZXBhcmF0b3IgICA6ICfZqycsXG4gICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcktleVN5bWJvbDogJ+KOlicsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBBbGxvdyB0byBkZWNsYXJlIGFuIGFsdGVybmF0aXZlIGRlY2ltYWwgc2VwYXJhdG9yIHdoaWNoIGlzIGF1dG9tYXRpY2FsbHkgcmVwbGFjZWQgYnkgYGRlY2ltYWxDaGFyYWN0ZXJgIHdoZW4gdHlwZWQuXG4gICAgICAgICAgICAgKiBUaGlzIGlzIHVzZWQgYnkgY291bnRyaWVzIHRoYXQgdXNlIGEgY29tbWEgJywnIGFzIHRoZSBkZWNpbWFsIGNoYXJhY3RlciBhbmQgaGF2ZSBrZXlib2FyZHMgd2l0aCBhIG51bWVyaWMgcGFkcyB0aGF0IGhhdmVcbiAgICAgICAgICAgICAqIGEgcGVyaW9kICdmdWxsIHN0b3AnIGFzIHRoZSBkZWNpbWFsIGNoYXJhY3RlciAoRnJhbmNlIG9yIFNwYWluIGZvciBpbnN0YW5jZSkuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlY2ltYWxDaGFyYWN0ZXJBbHRlcm5hdGl2ZToge1xuICAgICAgICAgICAgICAgIG5vbmUgOiBudWxsLFxuICAgICAgICAgICAgICAgIGNvbW1hOiAnLCcsXG4gICAgICAgICAgICAgICAgZG90ICA6ICcuJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIERlZmluZXMgdGhlIGRlZmF1bHQgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHNob3cgb24gdGhlIGZvcm1hdHRlZCB2YWx1ZSwgYW5kIGtlZXAgZm9yIHRoZSBwcmVjaXNpb24uXG4gICAgICAgICAgICAgKiBJbmNpZGVudGFsbHksIHNpbmNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzaG93IHRoYXQgbWFueSBkZWNpbWFsIHBsYWNlcywgdGhpcyBhbHNvIGRlZmluZXMgdGhlIHJhdyB2YWx1ZSBwcmVjaXNpb24gYnkgZGVmYXVsdC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGVjaW1hbFBsYWNlczoge1xuICAgICAgICAgICAgICAgIG5vbmUgOiAwLFxuICAgICAgICAgICAgICAgIG9uZSAgOiAxLFxuICAgICAgICAgICAgICAgIHR3byAgOiAyLFxuICAgICAgICAgICAgICAgIHRocmVlOiAzLFxuICAgICAgICAgICAgICAgIGZvdXIgOiA0LFxuICAgICAgICAgICAgICAgIGZpdmUgOiA1LFxuICAgICAgICAgICAgICAgIHNpeCAgOiA2LFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogRGVmaW5lcyBob3cgbWFueSBkZWNpbWFsIHBsYWNlcyBzaG91bGQgYmUga2VwdCBmb3IgdGhlIHJhdyB2YWx1ZSAoaWUuIFRoaXMgaXMgdGhlIHByZWNpc2lvbiBmb3IgZmxvYXQgdmFsdWVzKS5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBJZiB0aGlzIG9wdGlvbiBpcyBzZXQgdG8gYG51bGxgICh3aGljaCBpcyB0aGUgZGVmYXVsdCksIHRoZW4gdGhlIHZhbHVlIG9mIGBkZWNpbWFsUGxhY2VzYCBpcyB1c2VkIGZvciBgZGVjaW1hbFBsYWNlc1Jhd1ZhbHVlYCBhcyB3ZWxsLlxuICAgICAgICAgICAgICogTm90ZTogU2V0dGluZyB0aGlzIHRvIGEgbG93ZXIgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRoYW4gdGhlIG9uZSB0byBiZSBzaG93biB3aWxsIGxlYWQgdG8gY29uZnVzaW9uIGZvciB0aGUgdXNlcnMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlY2ltYWxQbGFjZXNSYXdWYWx1ZToge1xuICAgICAgICAgICAgICAgIHVzZURlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbm9uZSAgICAgIDogMCxcbiAgICAgICAgICAgICAgICBvbmUgICAgICAgOiAxLFxuICAgICAgICAgICAgICAgIHR3byAgICAgICA6IDIsXG4gICAgICAgICAgICAgICAgdGhyZWUgICAgIDogMyxcbiAgICAgICAgICAgICAgICBmb3VyICAgICAgOiA0LFxuICAgICAgICAgICAgICAgIGZpdmUgICAgICA6IDUsXG4gICAgICAgICAgICAgICAgc2l4ICAgICAgIDogNixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIERlZmluZXMgaG93IG1hbnkgZGVjaW1hbCBwbGFjZXMgc2hvdWxkIGJlIHZpc2libGUgd2hlbiB0aGUgZWxlbWVudCBpcyB1bmZvY3VzZWQuXG4gICAgICAgICAgICAgKiBJZiB0aGlzIGlzIHNldCB0byBgbnVsbGAsIHRoZW4gdGhpcyBvcHRpb24gaXMgaWdub3JlZCwgYW5kIHRoZSBgZGVjaW1hbFBsYWNlc2Agb3B0aW9uIHZhbHVlIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuICAgICAgICAgICAgICogVGhpcyBtZWFucyB0aGlzIGlzIG9wdGlvbmFsIDsgaWYgb21pdHRlZCB0aGUgZGVjaW1hbCBwbGFjZXMgd2lsbCBiZSB0aGUgc2FtZSB3aGVuIHRoZSBpbnB1dCBoYXMgdGhlIGZvY3VzLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIFRoaXMgb3B0aW9uIGNhbiBiZSB1c2VkIGluIGNvbmpvbmN0aW9uIHdpdGggdGhlIHR3byBvdGhlciBgc2NhbGUqYCBvcHRpb25zLCB3aGljaCBhbGxvd3MgdG8gZGlzcGxheSBhIGRpZmZlcmVudCBmb3JtYXR0ZWQgdmFsdWUgd2hlbiB0aGUgZWxlbWVudCBpcyB1bmZvY3VzZWQsIHdoaWxlIGFub3RoZXIgZm9ybWF0dGVkIHZhbHVlIGlzIHNob3duIHdoZW4gZm9jdXNlZC5cbiAgICAgICAgICAgICAqIEZvciB0aG9zZSBgc2NhbGUqYCBvcHRpb25zIHRvIGhhdmUgYW55IGVmZmVjdCwgYGRpdmlzb3JXaGVuVW5mb2N1c2VkYCBtdXN0IG5vdCBiZSBgbnVsbGAuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlY2ltYWxQbGFjZXNTaG93bk9uQmx1cjoge1xuICAgICAgICAgICAgICAgIHVzZURlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbm9uZSAgICAgIDogMCxcbiAgICAgICAgICAgICAgICBvbmUgICAgICAgOiAxLFxuICAgICAgICAgICAgICAgIHR3byAgICAgICA6IDIsXG4gICAgICAgICAgICAgICAgdGhyZWUgICAgIDogMyxcbiAgICAgICAgICAgICAgICBmb3VyICAgICAgOiA0LFxuICAgICAgICAgICAgICAgIGZpdmUgICAgICA6IDUsXG4gICAgICAgICAgICAgICAgc2l4ICAgICAgIDogNixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIERlZmluZXMgaG93IG1hbnkgZGVjaW1hbCBwbGFjZXMgc2hvdWxkIGJlIHZpc2libGUgd2hlbiB0aGUgZWxlbWVudCBoYXMgdGhlIGZvY3VzLlxuICAgICAgICAgICAgICogSWYgdGhpcyBpcyBzZXQgdG8gYG51bGxgLCB0aGVuIHRoaXMgb3B0aW9uIGlzIGlnbm9yZWQsIGFuZCB0aGUgYGRlY2ltYWxQbGFjZXNgIG9wdGlvbiB2YWx1ZSB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBFeGFtcGxlOlxuICAgICAgICAgICAgICogRm9yIGluc3RhbmNlIGlmIGBkZWNpbWFsUGxhY2VzU2hvd25PbkZvY3VzYCBpcyBzZXQgdG8gYDVgIGFuZCB0aGUgZGVmYXVsdCBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgaXMgYDJgLCB0aGVuIG9uIGZvY3VzIGAxLDAwMC4xMjM0NWAgd2lsbCBiZSBzaG93biwgd2hpbGUgd2l0aG91dCBmb2N1cyBgMSwwMDAuMTJgIHdpbGwgYmUgc2V0IGJhY2suXG4gICAgICAgICAgICAgKiBOb3RlIDE6IHRoZSByZXN1bHRzIGRlcGVuZHMgb24gdGhlIHJvdW5kaW5nIG1ldGhvZCB1c2VkLlxuICAgICAgICAgICAgICogTm90ZSAyOiB0aGUgYGdldE51bWVyaWNTdHJpbmcoKWAgbWV0aG9kIHJldHVybnMgdGhlIGV4dGVuZGVkIGRlY2ltYWwgcGxhY2VzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlY2ltYWxQbGFjZXNTaG93bk9uRm9jdXM6IHtcbiAgICAgICAgICAgICAgICB1c2VEZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgICAgIG5vbmUgICAgICA6IDAsXG4gICAgICAgICAgICAgICAgb25lICAgICAgIDogMSxcbiAgICAgICAgICAgICAgICB0d28gICAgICAgOiAyLFxuICAgICAgICAgICAgICAgIHRocmVlICAgICA6IDMsXG4gICAgICAgICAgICAgICAgZm91ciAgICAgIDogNCxcbiAgICAgICAgICAgICAgICBmaXZlICAgICAgOiA1LFxuICAgICAgICAgICAgICAgIHNpeCAgICAgICA6IDYsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBIZWxwZXIgb3B0aW9uIGZvciBBU1AuTkVUIHBvc3RiYWNrXG4gICAgICAgICAgICAgKiBUaGlzIHNob3VsZCBiZSBzZXQgYXMgdGhlIHZhbHVlIG9mIHRoZSB1bmZvcm1hdHRlZCBkZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICAgKiBleGFtcGxlczpcbiAgICAgICAgICAgICAqIG5vIGRlZmF1bHQgdmFsdWU9XCJcIiB7ZGVmYXVsdFZhbHVlT3ZlcnJpZGU6IFwiXCJ9XG4gICAgICAgICAgICAgKiB2YWx1ZT0xMjM0LjU2IHtkZWZhdWx0VmFsdWVPdmVycmlkZTogJzEyMzQuNTYnfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWVPdmVycmlkZToge1xuICAgICAgICAgICAgICAgIGRvTm90T3ZlcnJpZGU6IG51bGwsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBEZWZpbmVzIGhvdyBtYW55IG51bWJlcnMgc2hvdWxkIGJlIGdyb3VwZWQgdG9nZXRoZXIgKHVzdWFsbHkgZm9yIHRoZSB0aG91c2FuZCBzZXBhcmF0b3IpXG4gICAgICAgICAgICAgKiAtIFwiMlwiLCAgcmVzdWx0cyBpbiA5OSw5OSw5OSw5OTkgSW5kaWEncyBsYWtoc1xuICAgICAgICAgICAgICogLSBcIjJzXCIsIHJlc3VsdHMgaW4gOTksOTk5LDk5LDk5LDk5OSBJbmRpYSdzIGxha2hzIHNjYWxlZFxuICAgICAgICAgICAgICogLSBcIjNcIiwgIHJlc3VsdHMgaW4gOTk5LDk5OSw5OTkgKGRlZmF1bHQpXG4gICAgICAgICAgICAgKiAtIFwiNFwiLCAgcmVzdWx0cyBpbiA5OTk5LDk5OTksOTk5OSB1c2VkIGluIHNvbWUgQXNpYW4gY291bnRyaWVzXG4gICAgICAgICAgICAgKiBOb3RlOiBUaGlzIG9wdGlvbiBkb2VzIG5vdCBhY2NlcHQgb3RoZXIgZ3JvdXBpbmcgY2hvaWNlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkaWdpdGFsR3JvdXBTcGFjaW5nOiB7XG4gICAgICAgICAgICAgICAgdHdvICAgICAgOiAnMicsXG4gICAgICAgICAgICAgICAgdHdvU2NhbGVkOiAnMnMnLFxuICAgICAgICAgICAgICAgIHRocmVlICAgIDogJzMnLFxuICAgICAgICAgICAgICAgIGZvdXIgICAgIDogJzQnLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogRGVmaW5lcyB0aGUgdGhvdXNhbmQgZ3JvdXBpbmcgc2VwYXJhdG9yIGNoYXJhY3RlclxuICAgICAgICAgICAgICogRXhhbXBsZSA6IElmIGAnLidgIGlzIHNldCwgdGhlbiB5b3UnbGwgZ2V0IGAnMS4yMzQuNTY3J2BcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGlnaXRHcm91cFNlcGFyYXRvcjoge1xuICAgICAgICAgICAgICAgIGNvbW1hICAgICAgICAgICAgICAgICAgIDogJywnLFxuICAgICAgICAgICAgICAgIGRvdCAgICAgICAgICAgICAgICAgICAgIDogJy4nLFxuICAgICAgICAgICAgICAgIG5vcm1hbFNwYWNlICAgICAgICAgICAgIDogJyAnLFxuICAgICAgICAgICAgICAgIHRoaW5TcGFjZSAgICAgICAgICAgICAgIDogJ1xcdTIwMDknLFxuICAgICAgICAgICAgICAgIG5hcnJvd05vQnJlYWtTcGFjZSAgICAgIDogJ1xcdTIwMmYnLFxuICAgICAgICAgICAgICAgIG5vQnJlYWtTcGFjZSAgICAgICAgICAgIDogJ1xcdTAwYTAnLFxuICAgICAgICAgICAgICAgIG5vU2VwYXJhdG9yICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgICAgYXBvc3Ryb3BoZSAgICAgICAgICAgICAgOiBgJ2AsXG4gICAgICAgICAgICAgICAgYXJhYmljVGhvdXNhbmRzU2VwYXJhdG9yOiAn2awnLFxuICAgICAgICAgICAgICAgIGRvdEFib3ZlICAgICAgICAgICAgICAgIDogJ8uZJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIFRoZSBgZGl2aXNvcldoZW5VbmZvY3VzZWRgIGRpdmlkZSB0aGUgZWxlbWVudCB2YWx1ZSBvbiBmb2N1cy5cbiAgICAgICAgICAgICAqIE9uIGJsdXIsIHRoZSBlbGVtZW50IHZhbHVlIGlzIG11bHRpcGxpZWQgYmFjay5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBFeGFtcGxlIDogRGlzcGxheSBwZXJjZW50YWdlcyB1c2luZyB7IGRpdmlzb3JXaGVuVW5mb2N1c2VkOiAxMDAgfSAob3IgZGlyZWN0bHkgaW4gdGhlIEh0bWwgd2l0aCBgPGlucHV0IGRhdGEtZGl2aXNvci13aGVuLXVuZm9jdXNlZD1cIjEwMFwiPmApXG4gICAgICAgICAgICAgKiBUaGUgZGl2aXNvciB2YWx1ZSBkb2VzIG5vdCBuZWVkIHRvIGJlIGFuIGludGVnZXIsIGJ1dCBwbGVhc2UgdW5kZXJzdGFuZCB0aGF0IEphdmFzY3JpcHQgaGFzIGxpbWl0ZWQgYWNjdXJhY3kgaW4gbWF0aCA7IHVzZSB3aXRoIGNhdXRpb24uXG4gICAgICAgICAgICAgKiBOb3RlOiBUaGUgYGdldE51bWVyaWNTdHJpbmdgIG1ldGhvZCByZXR1cm5zIHRoZSBmdWxsIHZhbHVlLCBpbmNsdWRpbmcgdGhlICdoaWRkZW4nIGRlY2ltYWxzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkaXZpc29yV2hlblVuZm9jdXNlZDoge1xuICAgICAgICAgICAgICAgIG5vbmUgICAgICA6IG51bGwsXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZTogMTAwLFxuICAgICAgICAgICAgICAgIHBlcm1pbGxlICA6IDEwMDAsXG4gICAgICAgICAgICAgICAgYmFzaXNQb2ludDogMTAwMDAsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBEZWZpbmVzIHdoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiB0aGUgZWxlbWVudCBpZiB0aGUgcmF3IHZhbHVlIGlzIGFuIGVtcHR5IHN0cmluZyAoJycpLlxuICAgICAgICAgICAgICogLSAnZm9jdXMnICA6IFRoZSBjdXJyZW5jeSBzaWduIGlzIGRpc3BsYXllZCB3aGVuIHRoZSBpbnB1dCByZWNlaXZlcyBmb2N1cyAoZGVmYXVsdClcbiAgICAgICAgICAgICAqIC0gJ3ByZXNzJyAgOiBUaGUgY3VycmVuY3kgc2lnbiBpcyBkaXNwbGF5ZWQgd2hlbmV2ZXIgYSBrZXkgaXMgYmVpbmcgcHJlc3NlZFxuICAgICAgICAgICAgICogLSAnYWx3YXlzJyA6IFRoZSBjdXJyZW5jeSBzaWduIGlzIGFsd2F5cyBkaXNwbGF5ZWRcbiAgICAgICAgICAgICAqIC0gJ3plcm8nICAgOiBBIHplcm8gaXMgZGlzcGxheWVkICgncm91bmRlZCcgd2l0aCBvciB3aXRob3V0IGEgY3VycmVuY3kgc2lnbikgaWYgdGhlIGlucHV0IGhhcyBubyB2YWx1ZSBvbiBmb2N1cyBvdXRcbiAgICAgICAgICAgICAqIC0gJ251bGwnICAgOiBXaGVuIHRoZSBlbGVtZW50IGlzIGVtcHR5LCB0aGUgYHJhd1ZhbHVlYCBhbmQgdGhlIGVsZW1lbnQgdmFsdWUvdGV4dCBpcyBzZXQgdG8gYG51bGxgLiBUaGlzIGFsc28gYWxsb3dzIHRvIHNldCB0aGUgdmFsdWUgdG8gYG51bGxgIHVzaW5nIGBhbkVsZW1lbnQuc2V0KG51bGwpYC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZW1wdHlJbnB1dEJlaGF2aW9yOiB7XG4gICAgICAgICAgICAgICAgbnVsbCAgOiAnbnVsbCcsXG4gICAgICAgICAgICAgICAgZm9jdXMgOiAnZm9jdXMnLFxuICAgICAgICAgICAgICAgIHByZXNzIDogJ3ByZXNzJyxcbiAgICAgICAgICAgICAgICBhbHdheXM6ICdhbHdheXMnLFxuICAgICAgICAgICAgICAgIHplcm8gIDogJ3plcm8nLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogVGhpcyBvcHRpb24gaXMgdGhlICdzdHJpY3QgbW9kZScgKGFrYSAnZGVidWcnIG1vZGUpLCB3aGljaCBhbGxvd3MgYXV0b051bWVyaWMgdG8gc3RyaWN0bHkgYW5hbHlzZSB0aGUgb3B0aW9ucyBwYXNzZWQsIGFuZCBmYWlscyBpZiBhbiB1bmtub3duIG9wdGlvbnMgaXMgdXNlZCBpbiB0aGUgc2V0dGluZ3Mgb2JqZWN0LlxuICAgICAgICAgICAgICogWW91IHNob3VsZCBzZXQgdGhhdCB0byBgdHJ1ZWAgaWYgeW91IHdhbnQgdG8gbWFrZSBzdXJlIHlvdSBhcmUgb25seSB1c2luZyAncHVyZScgYXV0b051bWVyaWMgc2V0dGluZ3Mgb2JqZWN0cyBpbiB5b3VyIGNvZGUuXG4gICAgICAgICAgICAgKiBJZiB5b3Ugc2VlIHVuY2F1Z2h0IGVycm9ycyBpbiB0aGUgY29uc29sZSBhbmQgeW91ciBjb2RlIHN0YXJ0cyB0byBmYWlsLCB0aGlzIG1lYW5zIHNvbWVob3cgdGhvc2Ugb3B0aW9ucyBnZXRzIHBvbGx1dGVkIGJ5IGFub3RoZXIgcHJvZ3JhbSAod2hpY2ggdXN1YWxseSBoYXBwZW5zIHdoZW4gdXNpbmcgZnJhbWV3b3JrcykuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZhaWxPblVua25vd25PcHRpb246IHtcbiAgICAgICAgICAgICAgICBmYWlsICA6IHRydWUsXG4gICAgICAgICAgICAgICAgaWdub3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIERldGVybWluZSBpZiB0aGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIGZvcm1hdHRlZCBvbiBpbml0aWFsaXphdGlvbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZm9ybWF0T25QYWdlTG9hZDoge1xuICAgICAgICAgICAgICAgIGZvcm1hdCAgICAgOiB0cnVlLCAvLyBhdXRvbWF0aWNhbGx5IGZvcm1hdHMgdGhlIGRlZmF1bHQgdmFsdWUgb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBkb05vdEZvcm1hdDogZmFsc2UsIC8vIHdpbGwgbm90IGZvcm1hdCB0aGUgZGVmYXVsdCB2YWx1ZSBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogU2V0IHRoZSB1bmRvL3JlZG8gaGlzdG9yeSB0YWJsZSBzaXplLlxuICAgICAgICAgICAgICogRWFjaCByZWNvcmQga2VlcHMgdGhlIHJhdyB2YWx1ZSBhcyB3ZWxsIGFuZCB0aGUgbGFzdCBrbm93biBjYXJldC9zZWxlY3Rpb24gcG9zaXRpb25zLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBoaXN0b3J5U2l6ZToge1xuICAgICAgICAgICAgICAgIHZlcnlTbWFsbDogNSxcbiAgICAgICAgICAgICAgICBzbWFsbCAgICA6IDEwLFxuICAgICAgICAgICAgICAgIG1lZGl1bSAgIDogMjAsXG4gICAgICAgICAgICAgICAgbGFyZ2UgICAgOiA1MCxcbiAgICAgICAgICAgICAgICB2ZXJ5TGFyZ2U6IDEwMCxcbiAgICAgICAgICAgICAgICBpbnNhbmUgICA6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogQWxsb3cgdGhlIHVzZXIgdG8gJ2NhbmNlbCcgYW5kIHVuZG8gdGhlIGNoYW5nZXMgaGUgbWFkZSB0byB0aGUgZ2l2ZW4gYXV0b251bWVyaWMtbWFuYWdlZCBlbGVtZW50LCBieSBwcmVzc2luZyB0aGUgJ0VzY2FwZScga2V5LlxuICAgICAgICAgICAgICogV2hlbmV2ZXIgdGhlIHVzZXIgJ3ZhbGlkYXRlJyB0aGUgaW5wdXQgKGVpdGhlciBieSBoaXR0aW5nICdFbnRlcicsIG9yIGJsdXJyaW5nIHRoZSBlbGVtZW50KSwgdGhlIG5ldyB2YWx1ZSBpcyBzYXZlZCBmb3Igc3Vic2VxdWVudCAnY2FuY2VsbGF0aW9uJy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBUaGUgcHJvY2VzcyA6XG4gICAgICAgICAgICAgKiAgIC0gc2F2ZSB0aGUgaW5wdXQgdmFsdWUgb24gZm9jdXNcbiAgICAgICAgICAgICAqICAgLSBpZiB0aGUgdXNlciBjaGFuZ2UgdGhlIGlucHV0IHZhbHVlLCBhbmQgaGl0IGBFc2NhcGVgLCB0aGVuIHRoZSBpbml0aWFsIHZhbHVlIHNhdmVkIG9uIGZvY3VzIGlzIHNldCBiYWNrXG4gICAgICAgICAgICAgKiAgIC0gb24gdGhlIG90aGVyIGhhbmQgaWYgdGhlIHVzZXIgZWl0aGVyIGhhdmUgdXNlZCBgRW50ZXJgIHRvIHZhbGlkYXRlIChgRW50ZXJgIHRocm93cyBhIGNoYW5nZSBldmVudCkgaGlzIGVudHJpZXMsIG9yIGlmIHRoZSBpbnB1dCB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkIGJ5IGFub3RoZXIgc2NyaXB0IGluIHRoZSBtZWFuIHRpbWUsIHRoZW4gd2Ugc2F2ZSB0aGUgbmV3IGlucHV0IHZhbHVlXG4gICAgICAgICAgICAgKiAgIC0gb24gYSBzdWNjZXNzZnVsICdjYW5jZWwnLCBzZWxlY3QgdGhlIHdob2xlIHZhbHVlICh3aGlsZSByZXNwZWN0aW5nIHRoZSBgc2VsZWN0TnVtYmVyT25seWAgb3B0aW9uKVxuICAgICAgICAgICAgICogICAtIGJvbnVzOyBpZiB0aGUgdmFsdWUgaGFzIG5vdCBjaGFuZ2VkLCBoaXR0aW5nICdFc2MnIGp1c3Qgc2VsZWN0IGFsbCB0aGUgaW5wdXQgdmFsdWUgKHdoaWxlIHJlc3BlY3RpbmcgdGhlIGBzZWxlY3ROdW1iZXJPbmx5YCBvcHRpb24pXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlzQ2FuY2VsbGFibGU6IHtcbiAgICAgICAgICAgICAgICBjYW5jZWxsYWJsZSAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBub3RDYW5jZWxsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBDb250cm9scyB0aGUgbGVhZGluZyB6ZXJvIGJlaGF2aW9yXG4gICAgICAgICAgICAgKiAtICdhbGxvdycgOiBhbGxvd3MgbGVhZGluZyB6ZXJvcyB0byBiZSBlbnRlcmVkLiBaZXJvcyB3aWxsIGJlIHRydW5jYXRlZCB3aGVuIGVudGVyaW5nIGFkZGl0aW9uYWwgZGlnaXRzLiBPbiBmb2N1c291dCB6ZXJvcyB3aWxsIGJlIGRlbGV0ZWRcbiAgICAgICAgICAgICAqIC0gJ2RlbnknICA6IGFsbG93cyBvbmx5IG9uZSBsZWFkaW5nIHplcm8gb24gdmFsdWVzIHRoYXQgYXJlIGJldHdlZW4gMSBhbmQgLTFcbiAgICAgICAgICAgICAqIC0gJ2tlZXAnICA6IGFsbG93cyBsZWFkaW5nIHplcm9zIHRvIGJlIGVudGVyZWQuIG9uIGZvY3Vzb3V0IHplcm9zIHdpbGwgYmUgcmV0YWluZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbGVhZGluZ1plcm86IHtcbiAgICAgICAgICAgICAgICBhbGxvdzogJ2FsbG93JyxcbiAgICAgICAgICAgICAgICBkZW55IDogJ2RlbnknLFxuICAgICAgICAgICAgICAgIGtlZXAgOiAna2VlcCcsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBEZWZpbmVzIHRoZSBtYXhpbXVtIHBvc3NpYmxlIHZhbHVlIGEgdXNlciBjYW4gZW50ZXIuXG4gICAgICAgICAgICAgKiBOb3RlczpcbiAgICAgICAgICAgICAqIC0gdGhpcyB2YWx1ZSBtdXN0IGJlIGEgc3RyaW5nIGFuZCB1c2UgdGhlIHBlcmlvZCBmb3IgdGhlIGRlY2ltYWwgcG9pbnRcbiAgICAgICAgICAgICAqIC0gdGhpcyB2YWx1ZSBuZWVkcyB0byBiZSBsYXJnZXIgdGhhbiBgbWluaW11bVZhbHVlYFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtYXhpbXVtVmFsdWU6IHtcbiAgICAgICAgICAgICAgICB0ZW5UcmlsbGlvbnMgICAgICAgICAgOiAnOTk5OTk5OTk5OTk5OS45OScsIC8vIDkuOTk5Ljk5OS45OTkuOTk5LDk5IH49IDEwMDAwIGJpbGxpb25zXG4gICAgICAgICAgICAgICAgdGVuVHJpbGxpb25zTm9EZWNpbWFsczogJzk5OTk5OTk5OTk5OTknLCAvL0ZJWE1FIFVwZGF0ZSBhbGwgdGhvc2UgbGltaXRzIHRvIHRoZSAncmVhbCcgbnVtYmVyc1xuICAgICAgICAgICAgICAgIG9uZUJpbGxpb24gICAgICAgICAgICA6ICc5OTk5OTk5OTkuOTknLFxuICAgICAgICAgICAgICAgIHplcm8gICAgICAgICAgICAgICAgICA6ICcwJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIERlZmluZXMgdGhlIG1pbmltdW0gcG9zc2libGUgdmFsdWUgYSB1c2VyIGNhbiBlbnRlci5cbiAgICAgICAgICAgICAqIE5vdGVzOlxuICAgICAgICAgICAgICogLSB0aGlzIHZhbHVlIG11c3QgYmUgYSBzdHJpbmcgYW5kIHVzZSB0aGUgcGVyaW9kIGZvciB0aGUgZGVjaW1hbCBwb2ludFxuICAgICAgICAgICAgICogLSB0aGlzIHZhbHVlIG5lZWRzIHRvIGJlIHNtYWxsZXIgdGhhbiBgbWF4aW11bVZhbHVlYFxuICAgICAgICAgICAgICogLSBpZiB0aGlzIGlzIHN1cGVyaW9yIHRvIDAsIHRoZW4geW91J2xsIGVmZmVjdGl2ZWx5IHByZXZlbnQgeW91ciB1c2VyIHRvIGVudGlyZWx5IGRlbGV0ZSB0aGUgY29udGVudCBvZiB5b3VyIGVsZW1lbnRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbWluaW11bVZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdGVuVHJpbGxpb25zICAgICAgICAgIDogJy05OTk5OTk5OTk5OTk5Ljk5JywgLy8gLTkuOTk5Ljk5OS45OTkuOTk5LDk5IH49IDEwMDAwIGJpbGxpb25zXG4gICAgICAgICAgICAgICAgdGVuVHJpbGxpb25zTm9EZWNpbWFsczogJy05OTk5OTk5OTk5OTk5JyxcbiAgICAgICAgICAgICAgICBvbmVCaWxsaW9uICAgICAgICAgICAgOiAnLTk5OTk5OTk5OS45OScsXG4gICAgICAgICAgICAgICAgemVybyAgICAgICAgICAgICAgICAgIDogJzAnLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogQWxsb3dzIHRoZSB1c2VyIHRvIGluY3JlbWVudCBvciBkZWNyZW1lbnQgdGhlIGVsZW1lbnQgdmFsdWUgd2l0aCB0aGUgbW91c2Ugd2hlZWwuXG4gICAgICAgICAgICAgKiBUaGUgd2hlZWwgYmVoYXZpb3IgY2FuIGJlIG1vZGlmaWVkIGJ5IHRoZSBgd2hlZWxTdGVwYCBvcHRpb24uXG4gICAgICAgICAgICAgKiBUaGlzIGB3aGVlbFN0ZXBgIG9wdGlvbiBjYW4gYmUgdXNlZCBpbiB0d28gd2F5cywgZWl0aGVyIGJ5IHNldHRpbmc6XG4gICAgICAgICAgICAgKiAtIGEgJ2ZpeGVkJyBzdGVwIHZhbHVlIChgd2hlZWxTdGVwIDogMTAwMGApLCBvclxuICAgICAgICAgICAgICogLSB0aGUgJ3Byb2dyZXNzaXZlJyBzdHJpbmcgKGB3aGVlbFN0ZXAgOiAncHJvZ3Jlc3NpdmUnYCksIHdoaWNoIHdpbGwgdGhlbiBhY3RpdmF0ZSBhIHNwZWNpYWwgbW9kZSB3aGVyZSB0aGUgc3RlcCBpcyBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGVsZW1lbnQgdmFsdWUgc2l6ZS5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBOb3RlIDpcbiAgICAgICAgICAgICAqIFlvdSBjYW4gYWN0aXZhdGUvZGVhY3RpdmF0ZSB0aGUgd2hlZWwgZXZlbnQgZm9yIGVhY2ggYHdoZWVsT25gIG9wdGlvbiB2YWx1ZSBieSB1c2luZyB0aGUgJ1NoaWZ0JyBtb2RpZmllciBrZXkgd2hpbGUgdXNpbmcgdGhlIG1vdXNlIHdoZWVsLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtb2RpZnlWYWx1ZU9uV2hlZWw6IHtcbiAgICAgICAgICAgICAgICBtb2RpZnlWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkb05vdGhpbmcgIDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBBZGRzIGJyYWNrZXRzIG9uIG5lZ2F0aXZlIHZhbHVlcyAoaWUuIHRyYW5zZm9ybXMgJy0kIDk5OS45OScgdG8gJygkOTk5Ljk5KScpXG4gICAgICAgICAgICAgKiBUaG9zZSBicmFja2V0cyBhcmUgdmlzaWJsZSBvbmx5IHdoZW4gdGhlIGZpZWxkIGRvZXMgTk9UIGhhdmUgdGhlIGZvY3VzLlxuICAgICAgICAgICAgICogVGhlIGxlZnQgYW5kIHJpZ2h0IHN5bWJvbHMgc2hvdWxkIGJlIGVuY2xvc2VkIGluIHF1b3RlcyBhbmQgc2VwYXJhdGVkIGJ5IGEgY29tbWEuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG5lZ2F0aXZlQnJhY2tldHNUeXBlT25CbHVyOiB7XG4gICAgICAgICAgICAgICAgcGFyZW50aGVzZXMgICAgICAgICAgIDogJygsKScsXG4gICAgICAgICAgICAgICAgYnJhY2tldHMgICAgICAgICAgICAgIDogJ1ssXScsXG4gICAgICAgICAgICAgICAgY2hldnJvbnMgICAgICAgICAgICAgIDogJzwsPicsXG4gICAgICAgICAgICAgICAgY3VybHlCcmFjZXMgICAgICAgICAgIDogJ3ssfScsXG4gICAgICAgICAgICAgICAgYW5nbGVCcmFja2V0cyAgICAgICAgIDogJ+OAiCzjgIknLFxuICAgICAgICAgICAgICAgIGphcGFuZXNlUXVvdGF0aW9uTWFya3M6ICfvvaIs772jJyxcbiAgICAgICAgICAgICAgICBoYWxmQnJhY2tldHMgICAgICAgICAgOiAn4rikLOK4pScsXG4gICAgICAgICAgICAgICAgd2hpdGVTcXVhcmVCcmFja2V0cyAgIDogJ+Kfpizin6cnLFxuICAgICAgICAgICAgICAgIHF1b3RhdGlvbk1hcmtzICAgICAgICA6ICfigLks4oC6JyxcbiAgICAgICAgICAgICAgICBndWlsbGVtZXRzICAgICAgICAgICAgOiAnwqsswrsnLFxuICAgICAgICAgICAgICAgIG5vbmUgICAgICAgICAgICAgICAgICA6IG51bGwsIC8vIFRoaXMgaXMgdGhlIGRlZmF1bHQgdmFsdWUsIHdoaWNoIGRlYWN0aXZhdGUgdGhpcyBmZWF0dXJlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBQbGFjZW1lbnQgb2YgdGhlIG5lZ2F0aXZlL3Bvc2l0aXZlIHNpZ24gcmVsYXRpdmUgdG8gdGhlIGBjdXJyZW5jeVN5bWJvbGAgb3B0aW9uLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEV4YW1wbGU6XG4gICAgICAgICAgICAgKiAtMSwyMzQuNTYgID0+IGRlZmF1bHQgbm8gb3B0aW9ucyByZXF1aXJlZFxuICAgICAgICAgICAgICogLSQxLDIzNC41NiA9PiB7Y3VycmVuY3lTeW1ib2w6IFwiJFwifSBvciB7Y3VycmVuY3lTeW1ib2w6IFwiJFwiLCBuZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudDogXCJsXCJ9XG4gICAgICAgICAgICAgKiAkLTEsMjM0LjU2ID0+IHtjdXJyZW5jeVN5bWJvbDogXCIkXCIsIG5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50OiBcInJcIn0gLy8gRGVmYXVsdCBpZiBuZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudCBpcyAnbnVsbCcgYW5kIGN1cnJlbmN5U3ltYm9sIGlzIG5vdCBlbXB0eVxuICAgICAgICAgICAgICogLTEsMjM0LjU2JCA9PiB7Y3VycmVuY3lTeW1ib2w6IFwiJFwiLCBjdXJyZW5jeVN5bWJvbFBsYWNlbWVudDogXCJzXCIsIG5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50OiBcInBcIn0gLy8gRGVmYXVsdCBpZiBuZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudCBpcyAnbnVsbCcgYW5kIGN1cnJlbmN5U3ltYm9sIGlzIG5vdCBlbXB0eVxuICAgICAgICAgICAgICogMSwyMzQuNTYtICA9PiB7bmVnYXRpdmVQb3NpdGl2ZVNpZ25QbGFjZW1lbnQ6IFwic1wifVxuICAgICAgICAgICAgICogJDEsMjM0LjU2LSA9PiB7Y3VycmVuY3lTeW1ib2w6IFwiJFwiLCBuZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudDogXCJzXCJ9XG4gICAgICAgICAgICAgKiAxLDIzNC41Ni0kID0+IHtjdXJyZW5jeVN5bWJvbDogXCIkXCIsIGN1cnJlbmN5U3ltYm9sUGxhY2VtZW50OiBcInNcIn1cbiAgICAgICAgICAgICAqIDEsMjM0LjU2JC0gPT4ge2N1cnJlbmN5U3ltYm9sOiBcIiRcIiwgY3VycmVuY3lTeW1ib2xQbGFjZW1lbnQ6IFwic1wiLCBuZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudDogXCJyXCJ9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50OiB7XG4gICAgICAgICAgICAgICAgcHJlZml4OiAncCcsXG4gICAgICAgICAgICAgICAgc3VmZml4OiAncycsXG4gICAgICAgICAgICAgICAgbGVmdCAgOiAnbCcsXG4gICAgICAgICAgICAgICAgcmlnaHQgOiAncicsXG4gICAgICAgICAgICAgICAgbm9uZSAgOiBudWxsLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogRGVmaW5lcyB0aGUgbmVnYXRpdmUgc2lnbiBzeW1ib2wuXG4gICAgICAgICAgICAgKiBJdCBjYW4gYmUgYSBzdHJpbmcgb2Ygb25seSBvbmUgY2hhcmFjdGVyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBuZWdhdGl2ZVNpZ25DaGFyYWN0ZXI6IHtcbiAgICAgICAgICAgICAgICBoeXBoZW4gICAgICAgICA6ICctJyxcbiAgICAgICAgICAgICAgICBtaW51cyAgICAgICAgICA6ICfiiJInLFxuICAgICAgICAgICAgICAgIGhlYXZ5TWludXMgICAgIDogJ+KelicsXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoSHlwaGVuOiAn77yNJyxcbiAgICAgICAgICAgICAgICBjaXJjbGVkTWludXMgICA6ICfiipYnLFxuICAgICAgICAgICAgICAgIHNxdWFyZWRNaW51cyAgIDogJ+KKnycsXG4gICAgICAgICAgICAgICAgdHJpYW5nbGVNaW51cyAgOiAn4qi6JyxcbiAgICAgICAgICAgICAgICBwbHVzTWludXMgICAgICA6ICfCsScsXG4gICAgICAgICAgICAgICAgbWludXNQbHVzICAgICAgOiAn4oiTJyxcbiAgICAgICAgICAgICAgICBkb3RNaW51cyAgICAgICA6ICfiiLgnLFxuICAgICAgICAgICAgICAgIG1pbnVzVGlsZGUgICAgIDogJ+KJgicsXG4gICAgICAgICAgICAgICAgbm90ICAgICAgICAgICAgOiAnwqwnLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogRGVmaW5lcyBpZiB0aGUgZWxlbWVudCBzaG91bGQgaGF2ZSBldmVudCBsaXN0ZW5lcnMgYWN0aXZhdGVkIG9uIGl0LlxuICAgICAgICAgICAgICogQnkgZGVmYXVsdCwgdGhvc2UgZXZlbnQgbGlzdGVuZXJzIGFyZSBvbmx5IGFkZGVkIHRvIDxpbnB1dD4gZWxlbWVudHMgYW5kIGh0bWwgZWxlbWVudCB3aXRoIHRoZSBgY29udGVudGVkaXRhYmxlYCBhdHRyaWJ1dGUgc2V0IHRvIGB0cnVlYCwgYnV0IG5vdCBvbiB0aGUgb3RoZXIgaHRtbCB0YWdzLlxuICAgICAgICAgICAgICogVGhpcyBhbGxvd3MgdG8gaW5pdGlhbGl6ZSBlbGVtZW50cyB3aXRob3V0IGFueSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAgICAgKiBXYXJuaW5nOiBTaW5jZSBBdXRvTnVtZXJpYyB3aWxsIG5vdCBjaGVjayB0aGUgaW5wdXQgY29udGVudCBhZnRlciBpdHMgaW5pdGlhbGl6YXRpb24sIHVzaW5nIHNvbWUgYXV0b051bWVyaWMgbWV0aG9kcyBhZnRlcndhcmRzICp3aWxsKiBwcm9iYWJseSBsZWFkcyB0byBmb3JtYXR0aW5nIHByb2JsZW1zLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBub0V2ZW50TGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgbm9FdmVudHMgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZEV2ZW50czogZmFsc2UsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBNYW5hZ2UgaG93IGF1dG9OdW1lcmljIHJlYWN0IHdoZW4gdGhlIHVzZXIgdHJpZXMgdG8gcGFzdGUgYW4gaW52YWxpZCBudW1iZXIuXG4gICAgICAgICAgICAgKiAtICdlcnJvcicgICAgOiAoVGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvcikgVGhlIGlucHV0IHZhbHVlIGlzIG5vdCBjaGFuZ2VkIGFuZCBhbiBlcnJvciBpcyBvdXRwdXQgaW4gdGhlIGNvbnNvbGUuXG4gICAgICAgICAgICAgKiAtICdpZ25vcmUnICAgOiBpZGVtIHRoYW4gJ2Vycm9yJywgYnV0IGZhaWwgc2lsZW50bHkgd2l0aG91dCBvdXRwdXR0aW5nIGFueSBlcnJvci93YXJuaW5nIGluIHRoZSBjb25zb2xlLlxuICAgICAgICAgICAgICogLSAnY2xhbXAnICAgIDogaWYgdGhlIHBhc3RlZCB2YWx1ZSBpcyBlaXRoZXIgdG9vIHNtYWxsIG9yIHRvbyBiaWcgcmVnYXJkaW5nIHRoZSBtaW5pbXVtVmFsdWUgYW5kIG1heGltdW1WYWx1ZSByYW5nZSwgdGhlbiB0aGUgcmVzdWx0IGlzIGNsYW1wZWQgdG8gdGhvc2UgbGltaXRzLlxuICAgICAgICAgICAgICogLSAndHJ1bmNhdGUnIDogYXV0b051bWVyaWMgd2lsbCBpbnNlcnQgYXMgbWFueSBwYXN0ZWQgbnVtYmVycyBpdCBjYW4gYXQgdGhlIGluaXRpYWwgY2FyZXQvc2VsZWN0aW9uLCB1bnRpbCBldmVyeXRoaW5nIGlzIHBhc3RlZCwgb3IgdGhlIHJhbmdlIGxpbWl0IGlzIGhpdC5cbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgIFRoZSBub24tcGFzdGVkIG51bWJlcnMgYXJlIGRyb3BwZWQgYW5kIHRoZXJlZm9yZSBub3QgdXNlZCBhdCBhbGwuXG4gICAgICAgICAgICAgKiAtICdyZXBsYWNlJyAgOiBhdXRvTnVtZXJpYyB3aWxsIGZpcnN0IGluc2VydCBhcyBtYW55IHBhc3RlZCBudW1iZXJzIGl0IGNhbiBhdCB0aGUgaW5pdGlhbCBjYXJldC9zZWxlY3Rpb24sIHRoZW4gaWYgdGhlIHJhbmdlIGxpbWl0IGlzIGhpdCwgaXQgd2lsbCB0cnlcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgIHRvIHJlcGxhY2Ugb25lIGJ5IG9uZSB0aGUgcmVtYWluaW5nIGluaXRpYWwgbnVtYmVycyAob24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIGNhcmV0KSB3aXRoIHRoZSByZXN0IG9mIHRoZSBwYXN0ZWQgbnVtYmVycy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBOb3RlIDEgOiBBIHBhc3RlIGNvbnRlbnQgc3RhcnRpbmcgd2l0aCBhIG5lZ2F0aXZlIHNpZ24gJy0nIHdpbGwgYmUgYWNjZXB0ZWQgYW55d2hlcmUgaW4gdGhlIGlucHV0LCBhbmQgd2lsbCBzZXQgdGhlIHJlc3VsdGluZyB2YWx1ZSBhcyBhIG5lZ2F0aXZlIG51bWJlclxuICAgICAgICAgICAgICogTm90ZSAyIDogQSBwYXN0ZSBjb250ZW50IHN0YXJ0aW5nIHdpdGggYSBudW1iZXIgd2lsbCBiZSBhY2NlcHRlZCwgZXZlbiBpZiB0aGUgcmVzdCBpcyBnaWJiZXJpc2ggKGllLiAnMTIzZm9vYmFyNDU2JykuXG4gICAgICAgICAgICAgKiAgICAgICAgICBPbmx5IHRoZSBmaXJzdCBudW1iZXIgd2lsbCBiZSB1c2VkIChoZXJlICcxMjMnKS5cbiAgICAgICAgICAgICAqIE5vdGUgMyA6IFRoZSBwYXN0ZSBldmVudCB3b3JrcyB3aXRoIHRoZSBgZGVjaW1hbFBsYWNlc1Nob3duT25Gb2N1c2Agb3B0aW9uIHRvby5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25JbnZhbGlkUGFzdGU6IHtcbiAgICAgICAgICAgICAgICBlcnJvciAgIDogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICBpZ25vcmUgIDogJ2lnbm9yZScsXG4gICAgICAgICAgICAgICAgY2xhbXAgICA6ICdjbGFtcCcsXG4gICAgICAgICAgICAgICAgdHJ1bmNhdGU6ICd0cnVuY2F0ZScsXG4gICAgICAgICAgICAgICAgcmVwbGFjZSA6ICdyZXBsYWNlJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIERlZmluZXMgaG93IHRoZSB2YWx1ZSBzaG91bGQgYmUgZm9ybWF0dGVkIHdoZW4gd2FudGluZyBhICdsb2NhbGl6ZWQnIHZlcnNpb24gb2YgaXQuXG4gICAgICAgICAgICAgKiAtIG51bGwgb3IgJ3N0cmluZycgPT4gJ25ubm4ubm4nIG9yICctbm5ubi5ubicgYXMgdGV4dCB0eXBlLiBUaGlzIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW9yLlxuICAgICAgICAgICAgICogLSAnbnVtYmVyJyAgICAgICAgID0+IG5ubm4ubm4gb3IgLW5ubm4ubm4gYXMgYSBOdW1iZXIgKFdhcm5pbmc6IHRoaXMgd29ya3Mgb25seSBmb3IgaW50ZWdlcnMgaW5mZXJpb3IgdG8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpXG4gICAgICAgICAgICAgKiAtICcsJyBvciAnLSwnICAgICAgPT4gJ25ubm4sbm4nIG9yICctbm5ubixubidcbiAgICAgICAgICAgICAqIC0gJy4tJyAgICAgICAgICAgICA9PiAnbm5ubi5ubicgb3IgJ25ubm4ubm4tJ1xuICAgICAgICAgICAgICogLSAnLC0nICAgICAgICAgICAgID0+ICdubm5uLG5uJyBvciAnbm5ubixubi0nXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogTm90ZTogVGhlIGh5cGhlbiAnLScgaXMgdHJhbnNsYXRlZCB0byB0aGUgY3VzdG9tIG5lZ2F0aXZlIHNpZ24gZGVmaW5lZCBpbiBgbmVnYXRpdmVTaWduQ2hhcmFjdGVyYFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgICAgICAgOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBudW1iZXIgICAgICAgOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBkb3QgICAgICAgICAgOiAnLicsXG4gICAgICAgICAgICAgICAgbmVnYXRpdmVEb3QgIDogJy0uJyxcbiAgICAgICAgICAgICAgICBjb21tYSAgICAgICAgOiAnLCcsXG4gICAgICAgICAgICAgICAgbmVnYXRpdmVDb21tYTogJy0sJyxcbiAgICAgICAgICAgICAgICBkb3ROZWdhdGl2ZSAgOiAnLi0nLFxuICAgICAgICAgICAgICAgIGNvbW1hTmVnYXRpdmU6ICcsLScsXG4gICAgICAgICAgICAgICAgbm9uZSAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIE92ZXJyaWRlIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGxpbWl0c1xuICAgICAgICAgICAgICogb3ZlcnJpZGVNaW5NYXhMaW1pdHM6IFwiY2VpbGluZ1wiIGFkaGVyZXMgdG8gbWF4aW11bVZhbHVlIGFuZCBpZ25vcmVzIG1pbmltdW1WYWx1ZSBzZXR0aW5nc1xuICAgICAgICAgICAgICogb3ZlcnJpZGVNaW5NYXhMaW1pdHM6IFwiZmxvb3JcIiBhZGhlcmVzIHRvIG1pbmltdW1WYWx1ZSBhbmQgaWdub3JlcyBtYXhpbXVtVmFsdWUgc2V0dGluZ3NcbiAgICAgICAgICAgICAqIG92ZXJyaWRlTWluTWF4TGltaXRzOiBcImlnbm9yZVwiIGlnbm9yZXMgYm90aCBtaW5pbXVtVmFsdWUgJiBtYXhpbXVtVmFsdWVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb3ZlcnJpZGVNaW5NYXhMaW1pdHM6IHtcbiAgICAgICAgICAgICAgICBjZWlsaW5nICAgICAgOiAnY2VpbGluZycsXG4gICAgICAgICAgICAgICAgZmxvb3IgICAgICAgIDogJ2Zsb29yJyxcbiAgICAgICAgICAgICAgICBpZ25vcmUgICAgICAgOiAnaWdub3JlJyxcbiAgICAgICAgICAgICAgICBkb05vdE92ZXJyaWRlOiBudWxsLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogRGVmaW5lcyB0aGUgcG9zaXRpdmUgc2lnbiBzeW1ib2wuXG4gICAgICAgICAgICAgKiBJdCBjYW4gYmUgYSBzdHJpbmcgb2Ygb25seSBvbmUgY2hhcmFjdGVyLlxuICAgICAgICAgICAgICogVGhpcyBpcyBzaG93biBvbmx5IGlmIGBzaG93UG9zaXRpdmVTaWduYCBpcyBzZXQgdG8gYHRydWVgLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwb3NpdGl2ZVNpZ25DaGFyYWN0ZXI6IHtcbiAgICAgICAgICAgICAgICBwbHVzICAgICAgICAgICAgICA6ICcrJyxcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhQbHVzICAgICA6ICfvvIsnLFxuICAgICAgICAgICAgICAgIGhlYXZ5UGx1cyAgICAgICAgIDogJ+KelScsXG4gICAgICAgICAgICAgICAgZG91YmxlUGx1cyAgICAgICAgOiAn4qe6JyxcbiAgICAgICAgICAgICAgICB0cmlwbGVQbHVzICAgICAgICA6ICfip7snLFxuICAgICAgICAgICAgICAgIGNpcmNsZWRQbHVzICAgICAgIDogJ+KKlScsXG4gICAgICAgICAgICAgICAgc3F1YXJlZFBsdXMgICAgICAgOiAn4oqeJyxcbiAgICAgICAgICAgICAgICB0cmlhbmdsZVBsdXMgICAgICA6ICfiqLknLFxuICAgICAgICAgICAgICAgIHBsdXNNaW51cyAgICAgICAgIDogJ8KxJyxcbiAgICAgICAgICAgICAgICBtaW51c1BsdXMgICAgICAgICA6ICfiiJMnLFxuICAgICAgICAgICAgICAgIGRvdFBsdXMgICAgICAgICAgIDogJ+KIlCcsXG4gICAgICAgICAgICAgICAgYWx0SGVicmV3UGx1cyAgICAgOiAn76ypJyxcbiAgICAgICAgICAgICAgICBub3JtYWxTcGFjZSAgICAgICA6ICcgJyxcbiAgICAgICAgICAgICAgICB0aGluU3BhY2UgICAgICAgICA6ICdcXHUyMDA5JyxcbiAgICAgICAgICAgICAgICBuYXJyb3dOb0JyZWFrU3BhY2U6ICdcXHUyMDJmJyxcbiAgICAgICAgICAgICAgICBub0JyZWFrU3BhY2UgICAgICA6ICdcXHUwMGEwJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIFRoZSBgcmF3VmFsdWVEaXZpc29yYCBkaXZpZGVzIHRoZSBmb3JtYXR0ZWQgdmFsdWUgc2hvd24gaW4gdGhlIEF1dG9OdW1lcmljIGVsZW1lbnQgYW5kIHN0b3JlIHRoZSByZXN1bHQgaW4gYHJhd1ZhbHVlYC5cbiAgICAgICAgICAgICAqIEBleGFtcGxlIHsgcmF3VmFsdWVEaXZpc29yOiAnMTAwJyB9IG9yIDxpbnB1dCBkYXRhLXJhdy12YWx1ZS1kaXZpc29yPVwiMTAwXCI+XG4gICAgICAgICAgICAgKiBHaXZlbiB0aGUgYDAuMDEyMzRgIHJhdyB2YWx1ZSwgdGhlIGZvcm1hdHRlZCB2YWx1ZSB3aWxsIGJlIGRpc3BsYXllZCBhcyBgJzEuMjM0J2AuXG4gICAgICAgICAgICAgKiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGRpc3BsYXlpbmcgcGVyY2VudGFnZSBmb3IgaW5zdGFuY2UsIGFuZCBhdm9pZCB0aGUgbmVlZCB0byBkaXZpZGUvbXVsdGlwbHkgYnkgMTAwIGJldHdlZW4gdGhlIG51bWJlciBzaG93biBhbmQgdGhlIHJhdyB2YWx1ZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmF3VmFsdWVEaXZpc29yOiB7XG4gICAgICAgICAgICAgICAgbm9uZSAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiAxMDAsXG4gICAgICAgICAgICAgICAgcGVybWlsbGUgIDogMTAwMCxcbiAgICAgICAgICAgICAgICBiYXNpc1BvaW50OiAxMDAwMCxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIERlZmluZXMgaWYgdGhlIDxpbnB1dD4gZWxlbWVudCBzaG91bGQgYmUgc2V0IGFzIHJlYWQgb25seSBvbiBpbml0aWFsaXphdGlvbi5cbiAgICAgICAgICAgICAqIFdoZW4gc2V0IHRvIGB0cnVlYCwgdGhlbiB0aGUgYHJlYWRvbmx5YCBodG1sIHByb3BlcnR5IGlzIGFkZGVkIHRvIHRoZSA8aW5wdXQ+IGVsZW1lbnQgb24gaW5pdGlhbGl6YXRpb24uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlYWRPbmx5OiB7XG4gICAgICAgICAgICAgICAgcmVhZE9ubHkgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlYWRXcml0ZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBEZWZpbmVzIHRoZSByb3VuZGluZyBtZXRob2QgdG8gdXNlLlxuICAgICAgICAgICAgICogcm91bmRpbmdNZXRob2Q6IFwiU1wiLCBSb3VuZC1IYWxmLVVwIFN5bW1ldHJpYyAoZGVmYXVsdClcbiAgICAgICAgICAgICAqIHJvdW5kaW5nTWV0aG9kOiBcIkFcIiwgUm91bmQtSGFsZi1VcCBBc3ltbWV0cmljXG4gICAgICAgICAgICAgKiByb3VuZGluZ01ldGhvZDogXCJzXCIsIFJvdW5kLUhhbGYtRG93biBTeW1tZXRyaWMgKGxvd2VyIGNhc2UgcylcbiAgICAgICAgICAgICAqIHJvdW5kaW5nTWV0aG9kOiBcImFcIiwgUm91bmQtSGFsZi1Eb3duIEFzeW1tZXRyaWMgKGxvd2VyIGNhc2UgYSlcbiAgICAgICAgICAgICAqIHJvdW5kaW5nTWV0aG9kOiBcIkJcIiwgUm91bmQtSGFsZi1FdmVuIFwiQmFua2VycyBSb3VuZGluZ1wiXG4gICAgICAgICAgICAgKiByb3VuZGluZ01ldGhvZDogXCJVXCIsIFJvdW5kIFVwIFwiUm91bmQtQXdheS1Gcm9tLVplcm9cIlxuICAgICAgICAgICAgICogcm91bmRpbmdNZXRob2Q6IFwiRFwiLCBSb3VuZCBEb3duIFwiUm91bmQtVG93YXJkLVplcm9cIiAtIHNhbWUgYXMgdHJ1bmNhdGVcbiAgICAgICAgICAgICAqIHJvdW5kaW5nTWV0aG9kOiBcIkNcIiwgUm91bmQgdG8gQ2VpbGluZyBcIlRvd2FyZCBQb3NpdGl2ZSBJbmZpbml0eVwiXG4gICAgICAgICAgICAgKiByb3VuZGluZ01ldGhvZDogXCJGXCIsIFJvdW5kIHRvIEZsb29yIFwiVG93YXJkIE5lZ2F0aXZlIEluZmluaXR5XCJcbiAgICAgICAgICAgICAqIHJvdW5kaW5nTWV0aG9kOiBcIk4wNVwiIFJvdW5kcyB0byB0aGUgbmVhcmVzdCAuMDUgPT4gc2FtZSBhcyBcIkNIRlwiIHVzZWQgaW4gMS45WCBhbmQgc3RpbGwgdmFsaWRcbiAgICAgICAgICAgICAqIHJvdW5kaW5nTWV0aG9kOiBcIlUwNVwiIFJvdW5kcyB1cCB0byBuZXh0IC4wNVxuICAgICAgICAgICAgICogcm91bmRpbmdNZXRob2Q6IFwiRDA1XCIgUm91bmRzIGRvd24gdG8gbmV4dCAuMDVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcm91bmRpbmdNZXRob2Q6IHtcbiAgICAgICAgICAgICAgICBoYWxmVXBTeW1tZXRyaWMgICAgICAgICAgICAgICAgOiAnUycsXG4gICAgICAgICAgICAgICAgaGFsZlVwQXN5bW1ldHJpYyAgICAgICAgICAgICAgIDogJ0EnLFxuICAgICAgICAgICAgICAgIGhhbGZEb3duU3ltbWV0cmljICAgICAgICAgICAgICA6ICdzJyxcbiAgICAgICAgICAgICAgICBoYWxmRG93bkFzeW1tZXRyaWMgICAgICAgICAgICAgOiAnYScsXG4gICAgICAgICAgICAgICAgaGFsZkV2ZW5CYW5rZXJzUm91bmRpbmcgICAgICAgIDogJ0InLFxuICAgICAgICAgICAgICAgIHVwUm91bmRBd2F5RnJvbVplcm8gICAgICAgICAgICA6ICdVJyxcbiAgICAgICAgICAgICAgICBkb3duUm91bmRUb3dhcmRaZXJvICAgICAgICAgICAgOiAnRCcsXG4gICAgICAgICAgICAgICAgdG9DZWlsaW5nVG93YXJkUG9zaXRpdmVJbmZpbml0eTogJ0MnLFxuICAgICAgICAgICAgICAgIHRvRmxvb3JUb3dhcmROZWdhdGl2ZUluZmluaXR5ICA6ICdGJyxcbiAgICAgICAgICAgICAgICB0b05lYXJlc3QwNSAgICAgICAgICAgICAgICAgICAgOiAnTjA1JyxcbiAgICAgICAgICAgICAgICB0b05lYXJlc3QwNUFsdCAgICAgICAgICAgICAgICAgOiAnQ0hGJyxcbiAgICAgICAgICAgICAgICB1cFRvTmV4dDA1ICAgICAgICAgICAgICAgICAgICAgOiAnVTA1JyxcbiAgICAgICAgICAgICAgICBkb3duVG9OZXh0MDUgICAgICAgICAgICAgICAgICAgOiAnRDA1JyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIFNldCB0byBgdHJ1ZWAgdG8gYWxsb3cgdGhlIGBkZWNpbWFsUGxhY2VzU2hvd25PbkZvY3VzYCB2YWx1ZSB0byBiZSBzYXZlZCB3aXRoIHNlc3Npb25TdG9yYWdlXG4gICAgICAgICAgICAgKiBJZiBJRSA2IG9yIDcgaXMgZGV0ZWN0ZWQsIHRoZSB2YWx1ZSB3aWxsIGJlIHNhdmVkIGFzIGEgc2Vzc2lvbiBjb29raWUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNhdmVWYWx1ZVRvU2Vzc2lvblN0b3JhZ2U6IHtcbiAgICAgICAgICAgICAgICBzYXZlICAgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgZG9Ob3RTYXZlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIERldGVybWluZSBpZiB0aGUgc2VsZWN0IGFsbCBrZXlib2FyZCBjb21tYW5kIHdpbGwgc2VsZWN0IHRoZSBjb21wbGV0ZSBpbnB1dCB0ZXh0LCBvciBvbmx5IHRoZSBpbnB1dCBudW1lcmljIHZhbHVlXG4gICAgICAgICAgICAgKiBOb3RlIDogSWYgdGhlIGN1cnJlbmN5IHN5bWJvbCBpcyBiZXR3ZWVuIHRoZSBudW1lcmljIHZhbHVlIGFuZCB0aGUgbmVnYXRpdmUgc2lnbiwgb25seSB0aGUgbnVtZXJpYyB2YWx1ZSB3aWxsIGJlIHNlbGVjdGVkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdE51bWJlck9ubHk6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3ROdW1iZXJzT25seTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RBbGwgICAgICAgIDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBEZWZpbmVzIGlmIHRoZSBlbGVtZW50IHZhbHVlIHNob3VsZCBiZSBzZWxlY3RlZCBvbiBmb2N1cy5cbiAgICAgICAgICAgICAqIE5vdGU6IFRoZSBzZWxlY3Rpb24gaXMgZG9uZSB1c2luZyB0aGUgYHNlbGVjdE51bWJlck9ubHlgIG9wdGlvbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0T25Gb2N1czoge1xuICAgICAgICAgICAgICAgIHNlbGVjdCAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRvTm90U2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIERlZmluZXMgaG93IHRoZSBzZXJpYWxpemUgZnVuY3Rpb25zIHNob3VsZCB0cmVhdCB0aGUgc3BhY2VzLlxuICAgICAgICAgICAgICogVGhvc2Ugc3BhY2VzICcgJyBjYW4gZWl0aGVyIGJlIGNvbnZlcnRlZCB0byB0aGUgcGx1cyBzaWduICcrJywgd2hpY2ggaXMgdGhlIGRlZmF1bHQsIG9yIHRvICclMjAnLlxuICAgICAgICAgICAgICogQm90aCB2YWx1ZXMgYmVpbmcgdmFsaWQgcGVyIHRoZSBzcGVjIChodHRwOi8vd3d3LnczLm9yZy9BZGRyZXNzaW5nL1VSTC91cmktc3BlYy5odG1sKS5cbiAgICAgICAgICAgICAqIEFsc28gc2VlIHRoZSBzdW1tZWQgdXAgYW5zd2VyIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMzOTM5Mjg3LlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIHRsO2RyIDogU3BhY2VzIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gJyUyMCcgYmVmb3JlIHRoZSAnPycgc2lnbiwgdGhlbiBjb252ZXJ0ZWQgdG8gJysnIGFmdGVyLlxuICAgICAgICAgICAgICogSW4gb3VyIGNhc2Ugc2luY2Ugd2Ugc2VyaWFsaXplIHRoZSBxdWVyeSwgd2UgdXNlICcrJyBhcyB0aGUgZGVmYXVsdCAoYnV0IGFsbG93IHRoZSB1c2VyIHRvIGdldCBiYWNrIHRoZSBvbGQgKndyb25nKiBiZWhhdmlvcikuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlcmlhbGl6ZVNwYWNlczoge1xuICAgICAgICAgICAgICAgIHBsdXMgICA6ICcrJyxcbiAgICAgICAgICAgICAgICBwZXJjZW50OiAnJTIwJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIERlZmluZXMgaWYgdGhlIGVsZW1lbnQgdmFsdWUgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byB0aGUgcmF3IHZhbHVlIG9uIGZvY3VzIChhbmQgYmFjayB0byB0aGUgZm9ybWF0dGVkIG9uIGJsdXIpLlxuICAgICAgICAgICAgICogSWYgc2V0IHRvIGB0cnVlYCwgdGhlbiBhdXRvTnVtZXJpYyByZW1vdmUgdGhlIHRob3VzYW5kIHNlcGFyYXRvciwgY3VycmVuY3kgc3ltYm9sIGFuZCBzdWZmaXggb24gZm9jdXMuXG4gICAgICAgICAgICAgKiBFeGFtcGxlOlxuICAgICAgICAgICAgICogSWYgdGhlIGlucHV0IHZhbHVlIGlzICckIDEsOTk5Ljg4IHN1ZmZpeCcsIG9uIGZvY3VzIGl0IGJlY29tZXMgJzE5OTkuODgnIGFuZCBiYWNrIHRvICckIDEsOTk5Ljg4IHN1ZmZpeCcgb24gYmx1ci5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2hvd09ubHlOdW1iZXJzT25Gb2N1czoge1xuICAgICAgICAgICAgICAgIG9ubHlOdW1iZXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3dBbGwgICAgOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIEFsbG93IHRoZSBwb3NpdGl2ZSBzaWduIHN5bWJvbCBgK2AgdG8gYmUgZGlzcGxheWVkIGZvciBwb3NpdGl2ZSBudW1iZXJzLlxuICAgICAgICAgICAgICogQnkgZGVmYXVsdCwgdGhpcyBwb3NpdGl2ZSBzaWduIGlzIG5vdCBzaG93bi5cbiAgICAgICAgICAgICAqIFRoZSBzaWduIHBsYWNlbWVudCBpcyBjb250cm9sbGVkIGJ5IHRoZSAnbmVnYXRpdmVQb3NpdGl2ZVNpZ25QbGFjZW1lbnQnIG9wdGlvbiwgbWltaWNraW5nIHRoZSBuZWdhdGl2ZSBzaWduIHBsYWNlbWVudCBydWxlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2hvd1Bvc2l0aXZlU2lnbjoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBEZWZpbmVzIGlmIHdhcm5pbmdzIHNob3VsZCBiZSBzaG93biBpbiB0aGUgY29uc29sZS5cbiAgICAgICAgICAgICAqIFRob3NlIHdhcm5pbmdzIGNhbiBiZSBpZ25vcmVkLCBidXQgYXJlIHVzdWFsbHkgcHJpbnRlZCB3aGVuIHNvbWV0aGluZyBjb3VsZCBiZSBpbXByb3ZlZCBieSB0aGUgdXNlciAoaWUuIG9wdGlvbiBjb25mbGljdHMpLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzaG93V2FybmluZ3M6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLCAvLyBBbGwgd2FybmluZyBhcmUgc2hvd25cbiAgICAgICAgICAgICAgICBoaWRlOiBmYWxzZSwgLy8gTm8gd2FybmluZ3MgYXJlIHNob3duLCBvbmx5IHRoZSB0aHJvd24gZXJyb3JzXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBEZWZpbmVzIHRoZSBydWxlcyB0aGF0IGNhbGN1bGF0ZSB0aGUgQ1NTIGNsYXNzKGVzKSB0byBhcHBseSBvbiB0aGUgZWxlbWVudCwgYmFzZWQgb24gdGhlIHJhdyB1bmZvcm1hdHRlZCB2YWx1ZS5cbiAgICAgICAgICAgICAqIFRoaXMgY2FuIGFsc28gYmUgdXNlZCB0byBjYWxsIGNhbGxiYWNrcyB3aGVuZXZlciB0aGUgYHJhd1ZhbHVlYCBpcyB1cGRhdGVkLlxuICAgICAgICAgICAgICogSW1wb3J0YW50OiBhbGwgY2FsbGJhY2tzIG11c3QgcmV0dXJuIGBudWxsYCBpZiBubyByYW5nZXMvdXNlckRlZmluZWQgY2xhc3NlcyBhcmUgc2VsZWN0ZWRcbiAgICAgICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgKiAgICAgcG9zaXRpdmUgICA6ICdhdXRvTnVtZXJpYy1wb3NpdGl2ZScsIC8vIE9yIGBudWxsYCB0byBub3QgdXNlIGl0XG4gICAgICAgICAgICAgKiAgICAgbmVnYXRpdmUgICA6ICdhdXRvTnVtZXJpYy1uZWdhdGl2ZScsXG4gICAgICAgICAgICAgKiAgICAgcmFuZ2VzICAgICA6IFtcbiAgICAgICAgICAgICAqICAgICAgICAgeyBtaW46IDAsIG1heDogMjUsIGNsYXNzOiAnYXV0b051bWVyaWMtcmVkJyB9LFxuICAgICAgICAgICAgICogICAgICAgICB7IG1pbjogMjUsIG1heDogNTAsIGNsYXNzOiAnYXV0b051bWVyaWMtb3JhbmdlJyB9LFxuICAgICAgICAgICAgICogICAgICAgICB7IG1pbjogNTAsIG1heDogNzUsIGNsYXNzOiAnYXV0b051bWVyaWMteWVsbG93JyB9LFxuICAgICAgICAgICAgICogICAgICAgICB7IG1pbjogNzUsIG1heDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIGNsYXNzOiAnYXV0b051bWVyaWMtZ3JlZW4nIH0sXG4gICAgICAgICAgICAgKiAgICAgXSxcbiAgICAgICAgICAgICAqICAgICB1c2VyRGVmaW5lZDogW1xuICAgICAgICAgICAgICogICAgICAgICAvLyBJZiAnY2xhc3NlcycgaXMgYSBzdHJpbmcsIHNldCBpdCBpZiBgdHJ1ZWAsIHJlbW92ZSBpdCBpZiBgZmFsc2VgXG4gICAgICAgICAgICAgKiAgICAgICAgIHsgY2FsbGJhY2s6IHJhd1ZhbHVlID0+IHsgcmV0dXJuIHRydWU7IH0sIGNsYXNzZXM6ICd0aGlzSXNUcnVlJyB9LFxuICAgICAgICAgICAgICogICAgICAgICAvLyBJZiAnY2xhc3NlcycgaXMgYW4gYXJyYXkgd2l0aCBvbmx5IDIgZWxlbWVudHMsIHNldCB0aGUgZmlyc3QgY2xhc3MgaWYgYHRydWVgLCB0aGUgc2Vjb25kIGlmIGBmYWxzZWBcbiAgICAgICAgICAgICAqICAgICAgICAgeyBjYWxsYmFjazogcmF3VmFsdWUgPT4gcmF3VmFsdWUgJSAyID09PSAwLCBjbGFzc2VzOiBbJ2F1dG9OdW1lcmljLWV2ZW4nLCAnYXV0b051bWVyaWMtb2RkJ10gfSxcbiAgICAgICAgICAgICAqICAgICAgICAgLy8gUmV0dXJuIG9ubHkgb25lIGluZGV4IHRvIHVzZSBvbiB0aGUgYGNsYXNzZXNgIGFycmF5IChoZXJlLCAnY2xhc3MzJylcbiAgICAgICAgICAgICAqICAgICAgICAgeyBjYWxsYmFjazogcmF3VmFsdWUgPT4geyByZXR1cm4gMjsgfSwgY2xhc3NlczogWydjbGFzczEnLCAnY2xhc3MyJywgJ2NsYXNzMyddIH0sXG4gICAgICAgICAgICAgKiAgICAgICAgIC8vIFJldHVybiBhbiBhcnJheSBvZiBpbmRleGVzIHRvIHVzZSBvbiB0aGUgYGNsYXNzZXNgIGFycmF5IChoZXJlLCAnY2xhc3MxJyBhbmQgJ2NsYXNzMycpXG4gICAgICAgICAgICAgKiAgICAgICAgIHsgY2FsbGJhY2s6IHJhd1ZhbHVlID0+IHsgcmV0dXJuIFswLCAyXTsgfSwgY2xhc3NlczogWydjbGFzczEnLCAnY2xhc3MyJywgJ2NsYXNzMyddIH0sXG4gICAgICAgICAgICAgKiAgICAgICAgIC8vIElmICdjbGFzc2VzJyBpcyBgdW5kZWZpbmVkYCBvciBgbnVsbGAsIHRoZW4gdGhlIGNhbGxiYWNrIGlzIGNhbGxlZCB3aXRoIHRoZSBBdXRvTnVtZXJpYyBvYmplY3QgcGFzc2VkIGFzIGEgcGFyYW1ldGVyXG4gICAgICAgICAgICAgKiAgICAgICAgIHsgY2FsbGJhY2s6IGFuRWxlbWVudCA9PiB7IHJldHVybiBhbkVsZW1lbnQuZ2V0Rm9ybWF0dGVkKCk7IH0gfSxcbiAgICAgICAgICAgICAqICAgICBdLFxuICAgICAgICAgICAgICogfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzdHlsZVJ1bGVzOiB7XG4gICAgICAgICAgICAgICAgbm9uZSAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgIHBvc2l0aXZlTmVnYXRpdmUgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGl2ZTogJ2F1dG9OdW1lcmljLXBvc2l0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbmVnYXRpdmU6ICdhdXRvTnVtZXJpYy1uZWdhdGl2ZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByYW5nZTBUbzEwMFdpdGg0U3RlcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMCwgbWF4OiAyNSwgY2xhc3M6ICdhdXRvTnVtZXJpYy1yZWQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMjUsIG1heDogNTAsIGNsYXNzOiAnYXV0b051bWVyaWMtb3JhbmdlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBtaW46IDUwLCBtYXg6IDc1LCBjbGFzczogJ2F1dG9OdW1lcmljLXllbGxvdycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbWluOiA3NSwgbWF4OiAxMDAsIGNsYXNzOiAnYXV0b051bWVyaWMtZ3JlZW4nIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBldmVuT2RkICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckRlZmluZWQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2FsbGJhY2s6IHJhd1ZhbHVlID0+IHJhd1ZhbHVlICUgMiA9PT0gMCwgY2xhc3NlczogWydhdXRvTnVtZXJpYy1ldmVuJywgJ2F1dG9OdW1lcmljLW9kZCddIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByYW5nZVNtYWxsQW5kWmVybyAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckRlZmluZWQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAgOiByYXdWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYXdWYWx1ZSA+PSAtMSAmJiByYXdWYWx1ZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIocmF3VmFsdWUpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmF3VmFsdWUgPiAwICYmIHJhd1ZhbHVlIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7ICAvLyBJbiBjYXNlIHRoZSByYXdWYWx1ZSBpcyBvdXRzaWRlIHRob3NlIHJhbmdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXV0b051bWVyaWMtc21hbGwtbmVnYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXV0b051bWVyaWMtemVybycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdXRvTnVtZXJpYy1zbWFsbC1wb3NpdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIEFkZCBhIHRleHQgb24gdGhlIHJpZ2h0IGhhbmQgc2lkZSBvZiB0aGUgZWxlbWVudCB2YWx1ZS5cbiAgICAgICAgICAgICAqIFRoaXMgc3VmZml4IHRleHQgY2FuIGhhdmUgYW55IGNoYXJhY3RlcnMgaW4gaXRzIHN0cmluZywgZXhjZXB0IG51bWVyaWMgY2hhcmFjdGVycyBhbmQgdGhlIG5lZ2F0aXZlL3Bvc2l0aXZlIHNpZ24uXG4gICAgICAgICAgICAgKiBFeGFtcGxlOiAnIGRvbGxhcnMnXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHN1ZmZpeFRleHQ6IHtcbiAgICAgICAgICAgICAgICBub25lICAgICAgOiAnJyxcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiAnJScsXG4gICAgICAgICAgICAgICAgcGVybWlsbGUgIDogJ+KAsCcsXG4gICAgICAgICAgICAgICAgYmFzaXNQb2ludDogJ+KAsScsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBUaGUgdGhyZWUgb3B0aW9ucyAoZGl2aXNvcldoZW5VbmZvY3VzZWQsIGRlY2ltYWxQbGFjZXNTaG93bk9uQmx1ciAmIHN5bWJvbFdoZW5VbmZvY3VzZWQpIGhhbmRsZSBzY2FsaW5nIG9mIHRoZSBpbnB1dCB3aGVuIHRoZSBpbnB1dCBkb2VzIG5vdCBoYXZlIGZvY3VzXG4gICAgICAgICAgICAgKiBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBub24tc2NhbGVkIHZhbHVlIGlzIGhlbGQgaW4gZGF0YSBhbmQgaXQgaXMgYWR2aXNlZCB0aGF0IHlvdSB1c2UgdGhlIGBzYXZlVmFsdWVUb1Nlc3Npb25TdG9yYWdlYCBvcHRpb24gdG8gZW5zdXJlIHJldGFpbmluZyB0aGUgdmFsdWVcbiAgICAgICAgICAgICAqIFtcImRpdmlzb3JcIiwgXCJkZWNpbWFsIHBsYWNlc1wiLCBcInN5bWJvbFwiXVxuICAgICAgICAgICAgICogRXhhbXBsZTogd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnMgc2V0IHtkaXZpc29yV2hlblVuZm9jdXNlZDogJzEwMDAnLCBkZWNpbWFsUGxhY2VzU2hvd25PbkJsdXI6ICcxJywgc3ltYm9sV2hlblVuZm9jdXNlZDogJyBLJ31cbiAgICAgICAgICAgICAqIEV4YW1wbGU6IGZvY3VzaW4gdmFsdWUgXCIxLDExMS4xMVwiIGZvY3Vzb3V0IHZhbHVlIFwiMS4xIEtcIlxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8qIFRoZSBgc3ltYm9sV2hlblVuZm9jdXNlZGAgb3B0aW9uIGlzIGEgc3ltYm9sIHBsYWNlZCBhcyBhIHN1ZmZpeCB3aGVuIG5vdCBpbiBmb2N1cy5cbiAgICAgICAgICAgICAqIFRoaXMgaXMgb3B0aW9uYWwgdG9vLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzeW1ib2xXaGVuVW5mb2N1c2VkOiB7XG4gICAgICAgICAgICAgICAgbm9uZSAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiAnJScsXG4gICAgICAgICAgICAgICAgcGVybWlsbGUgIDogJ+KAsCcsXG4gICAgICAgICAgICAgICAgYmFzaXNQb2ludDogJ+KAsScsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBEZWZpbmVzIGlmIHRoZSBlbGVtZW50IHZhbHVlIHNob3VsZCBiZSB1bmZvcm1hdHRlZCB3aGVuIHRoZSB1c2VyIGhvdmVyIGhpcyBtb3VzZSBvdmVyIGl0IHdoaWxlIGhvbGRpbmcgdGhlIGBBbHRgIGtleS5cbiAgICAgICAgICAgICAqIFVuZm9ybWF0dGluZyB0aGVyZSBtZWFucyB0aGF0IHRoaXMgcmVtb3ZlcyBhbnkgbm9uLW51bWJlciBjaGFyYWN0ZXJzIGFuZCBkaXNwbGF5cyB0aGUgKnJhdyogdmFsdWUsIGFzIHVuZGVyc3Rvb2QgYnkgSmF2YXNjcmlwdCAoaWUuIGAxMi4zNGAgaXMgYSB2YWxpZCBudW1iZXIsIHdoaWxlIGAxMiwzNGAgaXMgbm90KS5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBXZSByZWZvcm1hdCBiYWNrIGJlZm9yZSBhbnl0aGluZyBlbHNlIGlmIDpcbiAgICAgICAgICAgICAqIC0gdGhlIHVzZXIgZm9jdXMgb24gdGhlIGVsZW1lbnQgYnkgdGFiYmluZyBvciBjbGlja2luZyBpbnRvIGl0LFxuICAgICAgICAgICAgICogLSB0aGUgdXNlciByZWxlYXNlcyB0aGUgYEFsdGAga2V5LCBhbmRcbiAgICAgICAgICAgICAqIC0gaWYgd2UgZGV0ZWN0IGEgbW91c2VsZWF2ZSBldmVudC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBXZSB1bmZvcm1hdCBhZ2FpbiBpZiA6XG4gICAgICAgICAgICAgKiAtIHdoaWxlIHRoZSBtb3VzZSBpcyBvdmVyIHRoZSBlbGVtZW50LCB0aGUgdXNlciBoaXQgYEFsdGAgYWdhaW5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdW5mb3JtYXRPbkhvdmVyOiB7XG4gICAgICAgICAgICAgICAgdW5mb3JtYXQgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkb05vdFVuZm9ybWF0OiBmYWxzZSwgLy9UT0RPIFJlbmFtZSB0byBga2VlcEZvcm1hdGBcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qIFJlbW92ZXMgdGhlIGZvcm1hdHRpbmcgYW5kIHVzZSB0aGUgcmF3IHZhbHVlIGluIGVhY2ggYXV0b051bWVyaWMgZWxlbWVudHMgb2YgdGhlIHBhcmVudCBmb3JtIGVsZW1lbnQsIG9uIHRoZSBmb3JtIGBzdWJtaXRgIGV2ZW50LlxuICAgICAgICAgICAgICogVGhlIG91dHB1dCBmb3JtYXQgaXMgYSBudW1lcmljIHN0cmluZyAobm5ubi5ubiBvciAtbm5ubi5ubikuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVuZm9ybWF0T25TdWJtaXQ6IHtcbiAgICAgICAgICAgICAgICB1bmZvcm1hdCAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGtlZXBDdXJyZW50VmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogUHJvdmlkZXMgYSB3YXkgZm9yIGF1dG9tYXRpY2FsbHkgcmVwbGFjaW5nIHRoZSBmb3JtYXR0ZWQgdmFsdWUgd2l0aCBhIHByZS1kZWZpbmVkIHN0cmluZywgd2hlbiB0aGUgcmF3IHZhbHVlIGlzIGVxdWFsIHRvIGEgc3BlY2lmaWMgdmFsdWVcbiAgICAgICAgICAgICAqIEhlcmUgeW91IGNhbiBzcGVjaWZ5IGFzIG1hbnkgJ2NvbnZlcnNpb24nIGFzIG5lZWRlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFsdWVzVG9TdHJpbmdzOiB7XG4gICAgICAgICAgICAgICAgbm9uZSAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICB6ZXJvRGFzaCAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIDA6ICctJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uZUFyb3VuZFplcm86IHtcbiAgICAgICAgICAgICAgICAgICAgJy0xJzogJ01pbicsXG4gICAgICAgICAgICAgICAgICAgIDEgICA6ICdNYXgnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBEZWZpbmVzIHdoZW4gdGhlIHdoZWVsIGV2ZW50IHdpbGwgaW5jcmVtZW50IG9yIGRlY3JlbWVudCB0aGUgZWxlbWVudCB2YWx1ZS5cbiAgICAgICAgICAgICAqIFdoZW4gc2V0IHRvIGAnZm9jdXMnYCwgdGhlIEF1dG9OdW1lcmljLW1hbmFnZWQgZWxlbWVudCBuZWVkcyB0byBiZSBmb2N1c2VkIGZvciB0aGUgd2hlZWwgZXZlbnQgdG8gY2hhbmdlIHRoZSB2YWx1ZS5cbiAgICAgICAgICAgICAqIFdoZW4gc2V0IHRvIGAnaG92ZXInYCwgdXNpbmcgdGhlIHdoZWVsIGV2ZW50IHdoaWxlIHRoZSBtb3VzZSBpcyBob3ZlcmluZyB0aGUgZWxlbWVudCBpcyBzdWZmaWNpZW50IChubyBmb2N1cyBuZWVkZWQpLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIE5vdGUgOlxuICAgICAgICAgICAgICogV2hlbiBgd2hlZWxPbmAgaXMgc2V0IHRvIGAnZm9jdXMnYCwgeW91IGNhbiB1c2UgdGhlICdTaGlmdCcgbW9kaWZpZXIga2V5IHdoaWxlIHVzaW5nIHRoZSBtb3VzZSB3aGVlbCBpbiBvcmRlciB0byB0ZW1wb3JhcmlseSBhY3RpdmF0ZSB0aGUgaW5jcmVtZW50L2RlY3JlbWVudCBmZWF0dXJlIGV2ZW4gaWYgdGhlIGVsZW1lbnQgaXMgbm90IGZvY3VzZWQuXG4gICAgICAgICAgICAgKiBXaGVuIGB3aGVlbE9uYCBpcyBzZXQgdG8gYCdob3ZlcidgLCB5b3UgY2FuIHVzZSB0aGUgJ1NoaWZ0JyBtb2RpZmllciBrZXkgd2hpbGUgdXNpbmcgdGhlIG1vdXNlIHdoZWVsIGluIG9yZGVyIHRvIHRlbXBvcmFyaWx5IGRpc2FibGUgdGhlIGluY3JlbWVudC9kZWNyZW1lbnQgZmVhdHVyZSBldmVuIGlmIHRoZSBlbGVtZW50IGlzIG5vdCBob3ZlcmVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB3aGVlbE9uOiB7XG4gICAgICAgICAgICAgICAgZm9jdXM6ICdmb2N1cycsXG4gICAgICAgICAgICAgICAgaG92ZXI6ICdob3ZlcicsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBUaGF0IG9wdGlvbiBpcyBsaW5rZWQgdG8gdGhlIGBtb2RpZnlWYWx1ZU9uV2hlZWxgIG9uZSBhbmQgd2lsbCBvbmx5IGJlIHVzZWQgaWYgdGhlIGxhdHRlciBpcyBzZXQgdG8gYHRydWVgLlxuICAgICAgICAgICAgICogVGhpcyBvcHRpb24gd2lsbCBtb2RpZnkgdGhlIHdoZWVsIGJlaGF2aW9yIGFuZCBjYW4gYmUgdXNlZCBpbiB0d28gd2F5cywgZWl0aGVyIGJ5IHNldHRpbmcgOlxuICAgICAgICAgICAgICogLSBhICdmaXhlZCcgc3RlcCB2YWx1ZSAoYSBwb3NpdGl2ZSBmbG9hdCBvciBpbnRlZ2VyIG51bWJlciBgMTAwMGApLCBvclxuICAgICAgICAgICAgICogLSB0aGUgYCdwcm9ncmVzc2l2ZSdgIHN0cmluZy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBUaGUgJ2ZpeGVkJyBtb2RlIGFsd2F5cyBpbmNyZW1lbnQvZGVjcmVtZW50IHRoZSBlbGVtZW50IHZhbHVlIGJ5IHRoYXQgYW1vdW50LCB3aGlsZSByZXNwZWN0aW5nIHRoZSBgbWluaW11bVZhbHVlYCBhbmQgYG1heGltdW1WYWx1ZWAgc2V0dGluZ3MuXG4gICAgICAgICAgICAgKiBUaGUgJ3Byb2dyZXNzaXZlJyBtb2RlIHdpbGwgaW5jcmVtZW50L2RlY3JlbWVudCB0aGUgZWxlbWVudCB2YWx1ZSBiYXNlZCBvbiBpdHMgY3VycmVudCB2YWx1ZS4gVGhlIGJpZ2dlciB0aGUgbnVtYmVyLCB0aGUgYmlnZ2VyIHRoZSBzdGVwLCBhbmQgdmljZSB2ZXJzYS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgd2hlZWxTdGVwOiB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NpdmU6ICdwcm9ncmVzc2l2ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQXV0b051bWVyaWNPcHRpb25zLmpzIl0sIm1hcHBpbmdzIjoiOztBQTZCQTtBQUNBOzs7OztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVDQTtBQUNBO0FBOENBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7Ozs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQVlBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFhQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFjQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFXQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQUNBO0FBa0JBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFDQTtBQWVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBRkE7QUFuQkE7QUFDQTtBQTRDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7Ozs7QUFPQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFDQTtBQVVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBREE7QUF6dkJBO0FBNnZCQTtBQS92QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n")
			}, function(module, exports, __webpack_require__) {
				"use strict";
				eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _AutoNumeric = __webpack_require__(0);\n\nvar _AutoNumeric2 = _interopRequireDefault(_AutoNumeric);\n\nvar _AutoNumericEvents = __webpack_require__(5);\n\nvar _AutoNumericEvents2 = _interopRequireDefault(_AutoNumericEvents);\n\nvar _AutoNumericOptions = __webpack_require__(3);\n\nvar _AutoNumericOptions2 = _interopRequireDefault(_AutoNumericOptions);\n\nvar _AutoNumericDefaultSettings = __webpack_require__(6);\n\nvar _AutoNumericDefaultSettings2 = _interopRequireDefault(_AutoNumericDefaultSettings);\n\nvar _AutoNumericPredefinedOptions = __webpack_require__(7);\n\nvar _AutoNumericPredefinedOptions2 = _interopRequireDefault(_AutoNumericPredefinedOptions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint no-unused-vars: 0 */\n\n/**\n * This file serve as the main entry point to the library.\n *\n * @type {AutoNumeric}\n */\nexports.default = _AutoNumeric2.default; /**\n                                          * Babel + Webpack workaround for autoNumeric\n                                          *\n                                          * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>\n                                          * @copyright © 2017 Alexandre Bonneau\n                                          *\n                                          * The MIT License (http://www.opensource.org/licenses/mit-license.php)\n                                          *\n                                          * Permission is hereby granted, free of charge, to any person\n                                          * obtaining a copy of this software and associated documentation\n                                          * files (the "Software"), to deal in the Software without\n                                          * restriction, including without limitation the rights to use,\n                                          * copy, modify, merge, publish, distribute, sub license, and/or sell\n                                          * copies of the Software, and to permit persons to whom the\n                                          * Software is furnished to do so, subject to the following\n                                          * conditions:\n                                          *\n                                          * The above copyright notice and this permission notice shall be\n                                          * included in all copies or substantial portions of the Software.\n                                          *\n                                          * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,\n                                          * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n                                          * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n                                          * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n                                          * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n                                          * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n                                          * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n                                          * OTHER DEALINGS IN THE SOFTWARE.\n                                          */\n\nmodule.exports = exports[\'default\'];\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQmFiZWwgKyBXZWJwYWNrIHdvcmthcm91bmQgZm9yIGF1dG9OdW1lcmljXG4gKlxuICogQGF1dGhvciBBbGV4YW5kcmUgQm9ubmVhdSA8YWxleGFuZHJlLmJvbm5lYXVAbGludXhmci5ldT5cbiAqIEBjb3B5cmlnaHQgwqkgMjAxNyBBbGV4YW5kcmUgQm9ubmVhdVxuICpcbiAqIFRoZSBNSVQgTGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiAqIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3ViIGxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG4gKiBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gKiBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAqIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gKiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IEF1dG9OdW1lcmljIGZyb20gJy4vQXV0b051bWVyaWMnO1xuaW1wb3J0IEF1dG9OdW1lcmljRXZlbnRzIGZyb20gJy4vQXV0b051bWVyaWNFdmVudHMnO1xuaW1wb3J0IEF1dG9OdW1lcmljT3B0aW9ucyBmcm9tICcuL0F1dG9OdW1lcmljT3B0aW9ucyc7XG5pbXBvcnQgQXV0b051bWVyaWNEZWZhdWx0U2V0dGluZ3MgZnJvbSAnLi9BdXRvTnVtZXJpY0RlZmF1bHRTZXR0aW5ncyc7XG5pbXBvcnQgQXV0b051bWVyaWNQcmVkZWZpbmVkT3B0aW9ucyBmcm9tICcuL0F1dG9OdW1lcmljUHJlZGVmaW5lZE9wdGlvbnMnO1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IDAgKi9cblxuLyoqXG4gKiBUaGlzIGZpbGUgc2VydmUgYXMgdGhlIG1haW4gZW50cnkgcG9pbnQgdG8gdGhlIGxpYnJhcnkuXG4gKlxuICogQHR5cGUge0F1dG9OdW1lcmljfVxuICovXG5leHBvcnQgZGVmYXVsdCBBdXRvTnVtZXJpYztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbWFpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBOEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7OztBQXRDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n')
			}, function(module, exports, __webpack_require__) {
				"use strict";
				eval("\n\nvar _AutoNumeric = __webpack_require__(0);\n\nvar _AutoNumeric2 = _interopRequireDefault(_AutoNumeric);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Event list managed by AutoNumeric\n *\n * @type {{formatted: string, minRangeExceeded: string, maxRangeExceeded: string, native: {input: string, change: string}}}\n */\nObject.defineProperty(_AutoNumeric2.default, 'events', {\n    get: function get() {\n        return {\n            formatted: 'autoNumeric:formatted',\n            rawValueModified: 'autoNumeric:rawValueModified',\n            minRangeExceeded: 'autoNumeric:minExceeded',\n            maxRangeExceeded: 'autoNumeric:maxExceeded',\n            native: {\n                input: 'input',\n                change: 'change'\n            }\n        };\n    }\n}); /**\n     * Options for autoNumeric.js\n     * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>\n     * @copyright © 2017 Alexandre Bonneau\n     *\n     * The MIT License (http://www.opensource.org/licenses/mit-license.php)\n     *\n     * Permission is hereby granted, free of charge, to any person\n     * obtaining a copy of this software and associated documentation\n     * files (the \"Software\"), to deal in the Software without\n     * restriction, including without limitation the rights to use,\n     * copy, modify, merge, publish, distribute, sub license, and/or sell\n     * copies of the Software, and to permit persons to whom the\n     * Software is furnished to do so, subject to the following\n     * conditions:\n     *\n     * The above copyright notice and this permission notice shall be\n     * included in all copies or substantial portions of the Software.\n     *\n     * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n     * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n     * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n     * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n     * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n     * OTHER DEALINGS IN THE SOFTWARE.\n     */\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvQXV0b051bWVyaWNFdmVudHMuanM/MGUyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE9wdGlvbnMgZm9yIGF1dG9OdW1lcmljLmpzXG4gKiBAYXV0aG9yIEFsZXhhbmRyZSBCb25uZWF1IDxhbGV4YW5kcmUuYm9ubmVhdUBsaW51eGZyLmV1PlxuICogQGNvcHlyaWdodCDCqSAyMDE3IEFsZXhhbmRyZSBCb25uZWF1XG4gKlxuICogVGhlIE1JVCBMaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuICogcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWIgbGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAqIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAqIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcbiAqIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgQXV0b051bWVyaWMgZnJvbSAnLi9BdXRvTnVtZXJpYyc7XG5cbi8qKlxuICogRXZlbnQgbGlzdCBtYW5hZ2VkIGJ5IEF1dG9OdW1lcmljXG4gKlxuICogQHR5cGUge3tmb3JtYXR0ZWQ6IHN0cmluZywgbWluUmFuZ2VFeGNlZWRlZDogc3RyaW5nLCBtYXhSYW5nZUV4Y2VlZGVkOiBzdHJpbmcsIG5hdGl2ZToge2lucHV0OiBzdHJpbmcsIGNoYW5nZTogc3RyaW5nfX19XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdXRvTnVtZXJpYywgJ2V2ZW50cycsIHtcbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb3JtYXR0ZWQgICAgICAgOiAnYXV0b051bWVyaWM6Zm9ybWF0dGVkJyxcbiAgICAgICAgICAgIHJhd1ZhbHVlTW9kaWZpZWQ6ICdhdXRvTnVtZXJpYzpyYXdWYWx1ZU1vZGlmaWVkJyxcbiAgICAgICAgICAgIG1pblJhbmdlRXhjZWVkZWQ6ICdhdXRvTnVtZXJpYzptaW5FeGNlZWRlZCcsXG4gICAgICAgICAgICBtYXhSYW5nZUV4Y2VlZGVkOiAnYXV0b051bWVyaWM6bWF4RXhjZWVkZWQnLFxuICAgICAgICAgICAgbmF0aXZlICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGlucHV0IDogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBjaGFuZ2U6ICdjaGFuZ2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9LFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0F1dG9OdW1lcmljRXZlbnRzLmpzIl0sIm1hcHBpbmdzIjoiOztBQTZCQTtBQUNBOzs7OztBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQVVBO0FBWkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n")
			}, function(module, exports, __webpack_require__) {
				"use strict";
				eval('\n\nvar _AutoNumeric = __webpack_require__(0);\n\nvar _AutoNumeric2 = _interopRequireDefault(_AutoNumeric);\n\nvar _AutoNumericOptions = __webpack_require__(3);\n\nvar _AutoNumericOptions2 = _interopRequireDefault(_AutoNumericOptions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint no-unused-vars: 0 */\n\n/**\n * The defaults options.\n * These can be overridden by the following methods:\n * - HTML5 data attributes (ie. `<input type="text" data-currency-symbol=" €">`)\n * - Options passed to the `update` method (ie. `anElement.update({ currencySymbol: \' €\' });`), or simply during the initialization (ie. `new AutoNumeric(domElement, { options });`)\n */\n/**\n * Default settings for autoNumeric.js\n * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>\n * @copyright © 2016 Alexandre Bonneau\n *\n * The MIT License (http://www.opensource.org/licenses/mit-license.php)\n *\n * Permission is hereby granted, free of charge, to any person\n * obtaining a copy of this software and associated documentation\n * files (the "Software"), to deal in the Software without\n * restriction, including without limitation the rights to use,\n * copy, modify, merge, publish, distribute, sub license, and/or sell\n * copies of the Software, and to permit persons to whom the\n * Software is furnished to do so, subject to the following\n * conditions:\n *\n * The above copyright notice and this permission notice shall be\n * included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,\n * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n * OTHER DEALINGS IN THE SOFTWARE.\n */\n\nObject.defineProperty(_AutoNumeric2.default, \'defaultSettings\', {\n    get: function get() {\n        return {\n            allowDecimalPadding: _AutoNumeric2.default.options.allowDecimalPadding.always,\n            caretPositionOnFocus: _AutoNumeric2.default.options.caretPositionOnFocus.doNoForceCaretPosition,\n            createLocalList: _AutoNumeric2.default.options.createLocalList.createList,\n            currencySymbol: _AutoNumeric2.default.options.currencySymbol.none,\n            currencySymbolPlacement: _AutoNumeric2.default.options.currencySymbolPlacement.prefix,\n            decimalCharacter: _AutoNumeric2.default.options.decimalCharacter.dot,\n            decimalCharacterAlternative: _AutoNumeric2.default.options.decimalCharacterAlternative.none,\n            decimalPlaces: _AutoNumeric2.default.options.decimalPlaces.two,\n            decimalPlacesRawValue: _AutoNumeric2.default.options.decimalPlacesRawValue.useDefault,\n            decimalPlacesShownOnBlur: _AutoNumeric2.default.options.decimalPlacesShownOnBlur.useDefault,\n            decimalPlacesShownOnFocus: _AutoNumeric2.default.options.decimalPlacesShownOnFocus.useDefault,\n            defaultValueOverride: _AutoNumeric2.default.options.defaultValueOverride.doNotOverride,\n            digitalGroupSpacing: _AutoNumeric2.default.options.digitalGroupSpacing.three,\n            digitGroupSeparator: _AutoNumeric2.default.options.digitGroupSeparator.comma,\n            divisorWhenUnfocused: _AutoNumeric2.default.options.divisorWhenUnfocused.none,\n            emptyInputBehavior: _AutoNumeric2.default.options.emptyInputBehavior.focus,\n            failOnUnknownOption: _AutoNumeric2.default.options.failOnUnknownOption.ignore,\n            formatOnPageLoad: _AutoNumeric2.default.options.formatOnPageLoad.format,\n            historySize: _AutoNumeric2.default.options.historySize.medium,\n            isCancellable: _AutoNumeric2.default.options.isCancellable.cancellable,\n            leadingZero: _AutoNumeric2.default.options.leadingZero.deny,\n            maximumValue: _AutoNumeric2.default.options.maximumValue.tenTrillions,\n            minimumValue: _AutoNumeric2.default.options.minimumValue.tenTrillions,\n            modifyValueOnWheel: _AutoNumeric2.default.options.modifyValueOnWheel.modifyValue,\n            negativeBracketsTypeOnBlur: _AutoNumeric2.default.options.negativeBracketsTypeOnBlur.none,\n            negativePositiveSignPlacement: _AutoNumeric2.default.options.negativePositiveSignPlacement.none,\n            negativeSignCharacter: _AutoNumeric2.default.options.negativeSignCharacter.hyphen,\n            noEventListeners: _AutoNumeric2.default.options.noEventListeners.addEvents,\n            //TODO Shouldn\'t we use `truncate` as the default value?\n            onInvalidPaste: _AutoNumeric2.default.options.onInvalidPaste.error,\n            outputFormat: _AutoNumeric2.default.options.outputFormat.none,\n            overrideMinMaxLimits: _AutoNumeric2.default.options.overrideMinMaxLimits.doNotOverride,\n            positiveSignCharacter: _AutoNumeric2.default.options.positiveSignCharacter.plus,\n            rawValueDivisor: _AutoNumeric2.default.options.rawValueDivisor.none,\n            readOnly: _AutoNumeric2.default.options.readOnly.readWrite,\n            roundingMethod: _AutoNumeric2.default.options.roundingMethod.halfUpSymmetric,\n            saveValueToSessionStorage: _AutoNumeric2.default.options.saveValueToSessionStorage.doNotSave,\n            selectNumberOnly: _AutoNumeric2.default.options.selectNumberOnly.selectNumbersOnly,\n            selectOnFocus: _AutoNumeric2.default.options.selectOnFocus.select,\n            serializeSpaces: _AutoNumeric2.default.options.serializeSpaces.plus,\n            showOnlyNumbersOnFocus: _AutoNumeric2.default.options.showOnlyNumbersOnFocus.showAll,\n            showPositiveSign: _AutoNumeric2.default.options.showPositiveSign.hide,\n            showWarnings: _AutoNumeric2.default.options.showWarnings.show,\n            styleRules: _AutoNumeric2.default.options.styleRules.none,\n            suffixText: _AutoNumeric2.default.options.suffixText.none,\n            symbolWhenUnfocused: _AutoNumeric2.default.options.symbolWhenUnfocused.none,\n            unformatOnHover: _AutoNumeric2.default.options.unformatOnHover.unformat,\n            unformatOnSubmit: _AutoNumeric2.default.options.unformatOnSubmit.keepCurrentValue,\n            valuesToStrings: _AutoNumeric2.default.options.valuesToStrings.none,\n            wheelOn: _AutoNumeric2.default.options.wheelOn.focus,\n            wheelStep: _AutoNumeric2.default.options.wheelStep.progressive\n        };\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvQXV0b051bWVyaWNEZWZhdWx0U2V0dGluZ3MuanM/MmZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERlZmF1bHQgc2V0dGluZ3MgZm9yIGF1dG9OdW1lcmljLmpzXG4gKiBAYXV0aG9yIEFsZXhhbmRyZSBCb25uZWF1IDxhbGV4YW5kcmUuYm9ubmVhdUBsaW51eGZyLmV1PlxuICogQGNvcHlyaWdodCDCqSAyMDE2IEFsZXhhbmRyZSBCb25uZWF1XG4gKlxuICogVGhlIE1JVCBMaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuICogcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWIgbGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAqIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAqIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcbiAqIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgQXV0b051bWVyaWMgZnJvbSAnLi9BdXRvTnVtZXJpYyc7XG5pbXBvcnQgQXV0b051bWVyaWNPcHRpb25zIGZyb20gJy4vQXV0b051bWVyaWNPcHRpb25zJztcblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiAwICovXG5cbi8qKlxuICogVGhlIGRlZmF1bHRzIG9wdGlvbnMuXG4gKiBUaGVzZSBjYW4gYmUgb3ZlcnJpZGRlbiBieSB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XG4gKiAtIEhUTUw1IGRhdGEgYXR0cmlidXRlcyAoaWUuIGA8aW5wdXQgdHlwZT1cInRleHRcIiBkYXRhLWN1cnJlbmN5LXN5bWJvbD1cIiDigqxcIj5gKVxuICogLSBPcHRpb25zIHBhc3NlZCB0byB0aGUgYHVwZGF0ZWAgbWV0aG9kIChpZS4gYGFuRWxlbWVudC51cGRhdGUoeyBjdXJyZW5jeVN5bWJvbDogJyDigqwnIH0pO2ApLCBvciBzaW1wbHkgZHVyaW5nIHRoZSBpbml0aWFsaXphdGlvbiAoaWUuIGBuZXcgQXV0b051bWVyaWMoZG9tRWxlbWVudCwgeyBvcHRpb25zIH0pO2ApXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdXRvTnVtZXJpYywgJ2RlZmF1bHRTZXR0aW5ncycsIHtcbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbGxvd0RlY2ltYWxQYWRkaW5nICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5hbGxvd0RlY2ltYWxQYWRkaW5nLmFsd2F5cyxcbiAgICAgICAgICAgIGNhcmV0UG9zaXRpb25PbkZvY3VzICAgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmNhcmV0UG9zaXRpb25PbkZvY3VzLmRvTm9Gb3JjZUNhcmV0UG9zaXRpb24sXG4gICAgICAgICAgICBjcmVhdGVMb2NhbExpc3QgICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5jcmVhdGVMb2NhbExpc3QuY3JlYXRlTGlzdCxcbiAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sICAgICAgICAgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmN1cnJlbmN5U3ltYm9sLm5vbmUsXG4gICAgICAgICAgICBjdXJyZW5jeVN5bWJvbFBsYWNlbWVudCAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5jdXJyZW5jeVN5bWJvbFBsYWNlbWVudC5wcmVmaXgsXG4gICAgICAgICAgICBkZWNpbWFsQ2hhcmFjdGVyICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsQ2hhcmFjdGVyLmRvdCxcbiAgICAgICAgICAgIGRlY2ltYWxDaGFyYWN0ZXJBbHRlcm5hdGl2ZSAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmRlY2ltYWxDaGFyYWN0ZXJBbHRlcm5hdGl2ZS5ub25lLFxuICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyAgICAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbFBsYWNlcy50d28sXG4gICAgICAgICAgICBkZWNpbWFsUGxhY2VzUmF3VmFsdWUgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsUGxhY2VzUmF3VmFsdWUudXNlRGVmYXVsdCxcbiAgICAgICAgICAgIGRlY2ltYWxQbGFjZXNTaG93bk9uQmx1ciAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmRlY2ltYWxQbGFjZXNTaG93bk9uQmx1ci51c2VEZWZhdWx0LFxuICAgICAgICAgICAgZGVjaW1hbFBsYWNlc1Nob3duT25Gb2N1cyAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbFBsYWNlc1Nob3duT25Gb2N1cy51c2VEZWZhdWx0LFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlT3ZlcnJpZGUgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVmYXVsdFZhbHVlT3ZlcnJpZGUuZG9Ob3RPdmVycmlkZSxcbiAgICAgICAgICAgIGRpZ2l0YWxHcm91cFNwYWNpbmcgICAgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmRpZ2l0YWxHcm91cFNwYWNpbmcudGhyZWUsXG4gICAgICAgICAgICBkaWdpdEdyb3VwU2VwYXJhdG9yICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5kaWdpdEdyb3VwU2VwYXJhdG9yLmNvbW1hLFxuICAgICAgICAgICAgZGl2aXNvcldoZW5VbmZvY3VzZWQgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGl2aXNvcldoZW5VbmZvY3VzZWQubm9uZSxcbiAgICAgICAgICAgIGVtcHR5SW5wdXRCZWhhdmlvciAgICAgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmVtcHR5SW5wdXRCZWhhdmlvci5mb2N1cyxcbiAgICAgICAgICAgIGZhaWxPblVua25vd25PcHRpb24gICAgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmZhaWxPblVua25vd25PcHRpb24uaWdub3JlLFxuICAgICAgICAgICAgZm9ybWF0T25QYWdlTG9hZCAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZm9ybWF0T25QYWdlTG9hZC5mb3JtYXQsXG4gICAgICAgICAgICBoaXN0b3J5U2l6ZSAgICAgICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5oaXN0b3J5U2l6ZS5tZWRpdW0sXG4gICAgICAgICAgICBpc0NhbmNlbGxhYmxlICAgICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5pc0NhbmNlbGxhYmxlLmNhbmNlbGxhYmxlLFxuICAgICAgICAgICAgbGVhZGluZ1plcm8gICAgICAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMubGVhZGluZ1plcm8uZGVueSxcbiAgICAgICAgICAgIG1heGltdW1WYWx1ZSAgICAgICAgICAgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLm1heGltdW1WYWx1ZS50ZW5UcmlsbGlvbnMsXG4gICAgICAgICAgICBtaW5pbXVtVmFsdWUgICAgICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5taW5pbXVtVmFsdWUudGVuVHJpbGxpb25zLFxuICAgICAgICAgICAgbW9kaWZ5VmFsdWVPbldoZWVsICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMubW9kaWZ5VmFsdWVPbldoZWVsLm1vZGlmeVZhbHVlLFxuICAgICAgICAgICAgbmVnYXRpdmVCcmFja2V0c1R5cGVPbkJsdXIgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMubmVnYXRpdmVCcmFja2V0c1R5cGVPbkJsdXIubm9uZSxcbiAgICAgICAgICAgIG5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50OiBBdXRvTnVtZXJpYy5vcHRpb25zLm5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50Lm5vbmUsXG4gICAgICAgICAgICBuZWdhdGl2ZVNpZ25DaGFyYWN0ZXIgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5uZWdhdGl2ZVNpZ25DaGFyYWN0ZXIuaHlwaGVuLFxuICAgICAgICAgICAgbm9FdmVudExpc3RlbmVycyAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMubm9FdmVudExpc3RlbmVycy5hZGRFdmVudHMsXG4gICAgICAgICAgICAvL1RPRE8gU2hvdWxkbid0IHdlIHVzZSBgdHJ1bmNhdGVgIGFzIHRoZSBkZWZhdWx0IHZhbHVlP1xuICAgICAgICAgICAgb25JbnZhbGlkUGFzdGUgICAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMub25JbnZhbGlkUGFzdGUuZXJyb3IsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXQgICAgICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5vdXRwdXRGb3JtYXQubm9uZSxcbiAgICAgICAgICAgIG92ZXJyaWRlTWluTWF4TGltaXRzICAgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLm92ZXJyaWRlTWluTWF4TGltaXRzLmRvTm90T3ZlcnJpZGUsXG4gICAgICAgICAgICBwb3NpdGl2ZVNpZ25DaGFyYWN0ZXIgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5wb3NpdGl2ZVNpZ25DaGFyYWN0ZXIucGx1cyxcbiAgICAgICAgICAgIHJhd1ZhbHVlRGl2aXNvciAgICAgICAgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLnJhd1ZhbHVlRGl2aXNvci5ub25lLFxuICAgICAgICAgICAgcmVhZE9ubHkgICAgICAgICAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMucmVhZE9ubHkucmVhZFdyaXRlLFxuICAgICAgICAgICAgcm91bmRpbmdNZXRob2QgICAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMucm91bmRpbmdNZXRob2QuaGFsZlVwU3ltbWV0cmljLFxuICAgICAgICAgICAgc2F2ZVZhbHVlVG9TZXNzaW9uU3RvcmFnZSAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuc2F2ZVZhbHVlVG9TZXNzaW9uU3RvcmFnZS5kb05vdFNhdmUsXG4gICAgICAgICAgICBzZWxlY3ROdW1iZXJPbmx5ICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5zZWxlY3ROdW1iZXJPbmx5LnNlbGVjdE51bWJlcnNPbmx5LFxuICAgICAgICAgICAgc2VsZWN0T25Gb2N1cyAgICAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuc2VsZWN0T25Gb2N1cy5zZWxlY3QsXG4gICAgICAgICAgICBzZXJpYWxpemVTcGFjZXMgICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5zZXJpYWxpemVTcGFjZXMucGx1cyxcbiAgICAgICAgICAgIHNob3dPbmx5TnVtYmVyc09uRm9jdXMgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLnNob3dPbmx5TnVtYmVyc09uRm9jdXMuc2hvd0FsbCxcbiAgICAgICAgICAgIHNob3dQb3NpdGl2ZVNpZ24gICAgICAgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLnNob3dQb3NpdGl2ZVNpZ24uaGlkZSxcbiAgICAgICAgICAgIHNob3dXYXJuaW5ncyAgICAgICAgICAgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLnNob3dXYXJuaW5ncy5zaG93LFxuICAgICAgICAgICAgc3R5bGVSdWxlcyAgICAgICAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuc3R5bGVSdWxlcy5ub25lLFxuICAgICAgICAgICAgc3VmZml4VGV4dCAgICAgICAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuc3VmZml4VGV4dC5ub25lLFxuICAgICAgICAgICAgc3ltYm9sV2hlblVuZm9jdXNlZCAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuc3ltYm9sV2hlblVuZm9jdXNlZC5ub25lLFxuICAgICAgICAgICAgdW5mb3JtYXRPbkhvdmVyICAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMudW5mb3JtYXRPbkhvdmVyLnVuZm9ybWF0LFxuICAgICAgICAgICAgdW5mb3JtYXRPblN1Ym1pdCAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMudW5mb3JtYXRPblN1Ym1pdC5rZWVwQ3VycmVudFZhbHVlLFxuICAgICAgICAgICAgdmFsdWVzVG9TdHJpbmdzICAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMudmFsdWVzVG9TdHJpbmdzLm5vbmUsXG4gICAgICAgICAgICB3aGVlbE9uICAgICAgICAgICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy53aGVlbE9uLmZvY3VzLFxuICAgICAgICAgICAgd2hlZWxTdGVwICAgICAgICAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMud2hlZWxTdGVwLnByb2dyZXNzaXZlLFxuICAgICAgICB9O1xuICAgIH0sXG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9BdXRvTnVtZXJpY0RlZmF1bHRTZXR0aW5ncy5qcyJdLCJtYXBwaW5ncyI6Ijs7QUE2QkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQWxDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkRBO0FBcURBO0FBdkRBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n')
			}, function(module, exports, __webpack_require__) {
				"use strict";
				eval("\n\nvar _AutoNumeric = __webpack_require__(0);\n\nvar _AutoNumeric2 = _interopRequireDefault(_AutoNumeric);\n\nvar _AutoNumericHelper = __webpack_require__(1);\n\nvar _AutoNumericHelper2 = _interopRequireDefault(_AutoNumericHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Pre-defined options for autoNumeric.js\n * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>\n * @copyright © 2016 Alexandre Bonneau\n *\n * The MIT License (http://www.opensource.org/licenses/mit-license.php)\n *\n * Permission is hereby granted, free of charge, to any person\n * obtaining a copy of this software and associated documentation\n * files (the \"Software\"), to deal in the Software without\n * restriction, including without limitation the rights to use,\n * copy, modify, merge, publish, distribute, sub license, and/or sell\n * copies of the Software, and to permit persons to whom the\n * Software is furnished to do so, subject to the following\n * conditions:\n *\n * The above copyright notice and this permission notice shall be\n * included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n * OTHER DEALINGS IN THE SOFTWARE.\n */\n\nvar euro = { // Français\n    digitGroupSeparator: _AutoNumeric2.default.options.digitGroupSeparator.dot, // or '\\u202f'\n    decimalCharacter: _AutoNumeric2.default.options.decimalCharacter.comma,\n    decimalCharacterAlternative: _AutoNumeric2.default.options.decimalCharacterAlternative.dot,\n    currencySymbol: '\\u202F\\u20AC',\n    currencySymbolPlacement: _AutoNumeric2.default.options.currencySymbolPlacement.suffix,\n    negativePositiveSignPlacement: _AutoNumeric2.default.options.negativePositiveSignPlacement.prefix\n};\n\nvar dollar = {\n    digitGroupSeparator: _AutoNumeric2.default.options.digitGroupSeparator.comma,\n    decimalCharacter: _AutoNumeric2.default.options.decimalCharacter.dot,\n    currencySymbol: _AutoNumeric2.default.options.currencySymbol.dollar,\n    currencySymbolPlacement: _AutoNumeric2.default.options.currencySymbolPlacement.prefix,\n    negativePositiveSignPlacement: _AutoNumeric2.default.options.negativePositiveSignPlacement.right\n};\n\nvar japanese = { // 日本語\n    digitGroupSeparator: _AutoNumeric2.default.options.digitGroupSeparator.comma,\n    decimalCharacter: _AutoNumeric2.default.options.decimalCharacter.dot,\n    currencySymbol: _AutoNumeric2.default.options.currencySymbol.yen,\n    currencySymbolPlacement: _AutoNumeric2.default.options.currencySymbolPlacement.prefix,\n    negativePositiveSignPlacement: _AutoNumeric2.default.options.negativePositiveSignPlacement.right\n};\n\n// Here we need to clone the initial objects in order to be able to edit the clones without affecting the originals\nvar euroPos = _AutoNumericHelper2.default.cloneObject(euro);\neuroPos.minimumValue = 0;\nvar euroNeg = _AutoNumericHelper2.default.cloneObject(euro);\neuroNeg.maximumValue = 0;\neuroNeg.negativePositiveSignPlacement = _AutoNumeric2.default.options.negativePositiveSignPlacement.prefix;\n\nvar euroSpace = _AutoNumericHelper2.default.cloneObject(euro);\neuroSpace.digitGroupSeparator = _AutoNumeric2.default.options.digitGroupSeparator.normalSpace;\nvar euroSpacePos = _AutoNumericHelper2.default.cloneObject(euroSpace);\neuroSpacePos.minimumValue = 0;\nvar euroSpaceNeg = _AutoNumericHelper2.default.cloneObject(euroSpace);\neuroSpaceNeg.maximumValue = 0;\neuroSpaceNeg.negativePositiveSignPlacement = _AutoNumeric2.default.options.negativePositiveSignPlacement.prefix;\n\nvar percentageEU2dec = _AutoNumericHelper2.default.cloneObject(euro);\npercentageEU2dec.currencySymbol = _AutoNumeric2.default.options.currencySymbol.none;\npercentageEU2dec.suffixText = '\\u202F' + _AutoNumeric2.default.options.suffixText.percentage;\npercentageEU2dec.wheelStep = 0.0001; // This targets the `rawValue`, not the formatted one\npercentageEU2dec.rawValueDivisor = _AutoNumeric2.default.options.rawValueDivisor.percentage;\nvar percentageEU2decPos = _AutoNumericHelper2.default.cloneObject(percentageEU2dec);\npercentageEU2decPos.minimumValue = 0;\nvar percentageEU2decNeg = _AutoNumericHelper2.default.cloneObject(percentageEU2dec);\npercentageEU2decNeg.maximumValue = 0;\npercentageEU2decNeg.negativePositiveSignPlacement = _AutoNumeric2.default.options.negativePositiveSignPlacement.prefix;\n\nvar percentageEU3dec = _AutoNumericHelper2.default.cloneObject(percentageEU2dec);\npercentageEU3dec.decimalPlaces = 3;\nvar percentageEU3decPos = _AutoNumericHelper2.default.cloneObject(percentageEU2decPos);\npercentageEU3decPos.decimalPlaces = 3;\nvar percentageEU3decNeg = _AutoNumericHelper2.default.cloneObject(percentageEU2decNeg);\npercentageEU3decNeg.decimalPlaces = 3;\n\nvar dollarPos = _AutoNumericHelper2.default.cloneObject(dollar);\ndollarPos.minimumValue = 0;\nvar dollarNeg = _AutoNumericHelper2.default.cloneObject(dollar);\ndollarNeg.maximumValue = 0;\ndollarNeg.negativePositiveSignPlacement = _AutoNumeric2.default.options.negativePositiveSignPlacement.prefix;\nvar dollarNegBrackets = _AutoNumericHelper2.default.cloneObject(dollarNeg);\ndollarNegBrackets.negativeBracketsTypeOnBlur = _AutoNumeric2.default.options.negativeBracketsTypeOnBlur.parentheses;\n\nvar percentageUS2dec = _AutoNumericHelper2.default.cloneObject(dollar);\npercentageUS2dec.currencySymbol = _AutoNumeric2.default.options.currencySymbol.none;\npercentageUS2dec.suffixText = _AutoNumeric2.default.options.suffixText.percentage;\npercentageUS2dec.wheelStep = 0.0001;\npercentageEU2dec.rawValueDivisor = _AutoNumeric2.default.options.rawValueDivisor.percentage;\nvar percentageUS2decPos = _AutoNumericHelper2.default.cloneObject(percentageUS2dec);\npercentageUS2decPos.minimumValue = 0;\nvar percentageUS2decNeg = _AutoNumericHelper2.default.cloneObject(percentageUS2dec);\npercentageUS2decNeg.maximumValue = 0;\npercentageUS2decNeg.negativePositiveSignPlacement = _AutoNumeric2.default.options.negativePositiveSignPlacement.prefix;\n\nvar percentageUS3dec = _AutoNumericHelper2.default.cloneObject(percentageUS2dec);\npercentageUS3dec.decimalPlaces = 3;\nvar percentageUS3decPos = _AutoNumericHelper2.default.cloneObject(percentageUS2decPos);\npercentageUS3decPos.decimalPlaces = 3;\nvar percentageUS3decNeg = _AutoNumericHelper2.default.cloneObject(percentageUS2decNeg);\npercentageUS3decNeg.decimalPlaces = 3;\n\n/**\n * Predefined options for the most common languages\n */\nObject.defineProperty(_AutoNumeric2.default, 'predefinedOptions', {\n    get: function get() {\n        return {\n            euro: euro,\n            euroPos: euroPos,\n            euroNeg: euroNeg,\n            euroSpace: euroSpace,\n            euroSpacePos: euroSpacePos,\n            euroSpaceNeg: euroSpaceNeg,\n            percentageEU2dec: percentageEU2dec,\n            percentageEU2decPos: percentageEU2decPos,\n            percentageEU2decNeg: percentageEU2decNeg,\n            percentageEU3dec: percentageEU3dec,\n            percentageEU3decPos: percentageEU3decPos,\n            percentageEU3decNeg: percentageEU3decNeg,\n            dollar: dollar,\n            dollarPos: dollarPos,\n            dollarNeg: dollarNeg,\n            dollarNegBrackets: dollarNegBrackets,\n            percentageUS2dec: percentageUS2dec,\n            percentageUS2decPos: percentageUS2decPos,\n            percentageUS2decNeg: percentageUS2decNeg,\n            percentageUS3dec: percentageUS3dec,\n            percentageUS3decPos: percentageUS3decPos,\n            percentageUS3decNeg: percentageUS3decNeg,\n            French: euro, // Français\n            Spanish: euro, // Español\n            NorthAmerican: dollar,\n            British: {\n                digitGroupSeparator: _AutoNumeric2.default.options.digitGroupSeparator.comma,\n                decimalCharacter: _AutoNumeric2.default.options.decimalCharacter.dot,\n                currencySymbol: _AutoNumeric2.default.options.currencySymbol.pound,\n                currencySymbolPlacement: _AutoNumeric2.default.options.currencySymbolPlacement.prefix,\n                negativePositiveSignPlacement: _AutoNumeric2.default.options.negativePositiveSignPlacement.right\n            },\n            Swiss: { // Suisse\n                digitGroupSeparator: _AutoNumeric2.default.options.digitGroupSeparator.apostrophe,\n                decimalCharacter: _AutoNumeric2.default.options.decimalCharacter.dot,\n                currencySymbol: '\\u202FCHF',\n                currencySymbolPlacement: _AutoNumeric2.default.options.currencySymbolPlacement.suffix,\n                negativePositiveSignPlacement: _AutoNumeric2.default.options.negativePositiveSignPlacement.prefix\n            },\n            Japanese: japanese, // 日本語\n            Chinese: japanese, // 中国語 (Chinese)\n            Brazilian: {\n                digitGroupSeparator: _AutoNumeric2.default.options.digitGroupSeparator.dot,\n                decimalCharacter: _AutoNumeric2.default.options.decimalCharacter.comma,\n                currencySymbol: _AutoNumeric2.default.options.currencySymbol.real,\n                currencySymbolPlacement: _AutoNumeric2.default.options.currencySymbolPlacement.prefix,\n                negativePositiveSignPlacement: _AutoNumeric2.default.options.negativePositiveSignPlacement.right\n            },\n            dotDecimalCharCommaSeparator: {\n                digitGroupSeparator: _AutoNumeric2.default.options.digitGroupSeparator.comma,\n                decimalCharacter: _AutoNumeric2.default.options.decimalCharacter.dot\n            },\n            commaDecimalCharDotSeparator: {\n                digitGroupSeparator: _AutoNumeric2.default.options.digitGroupSeparator.dot,\n                decimalCharacter: _AutoNumeric2.default.options.decimalCharacter.comma,\n                decimalCharacterAlternative: _AutoNumeric2.default.options.decimalCharacterAlternative.dot\n            },\n            integer: {\n                decimalPlaces: 0\n            },\n            integerPos: {\n                minimumValue: _AutoNumeric2.default.options.minimumValue.zero,\n                decimalPlaces: 0\n            },\n            integerNeg: {\n                maximumValue: _AutoNumeric2.default.options.maximumValue.zero,\n                decimalPlaces: 0\n            },\n            float: {\n                allowDecimalPadding: _AutoNumeric2.default.options.allowDecimalPadding.never\n            },\n            floatPos: {\n                allowDecimalPadding: _AutoNumeric2.default.options.allowDecimalPadding.never,\n                minimumValue: _AutoNumeric2.default.options.minimumValue.zero,\n                maximumValue: _AutoNumeric2.default.options.maximumValue.tenTrillions\n            },\n            floatNeg: {\n                allowDecimalPadding: _AutoNumeric2.default.options.allowDecimalPadding.never,\n                minimumValue: _AutoNumeric2.default.options.minimumValue.tenTrillions,\n                maximumValue: _AutoNumeric2.default.options.maximumValue.zero\n            },\n            numeric: {\n                digitGroupSeparator: _AutoNumeric2.default.options.digitGroupSeparator.noSeparator,\n                decimalCharacter: _AutoNumeric2.default.options.decimalCharacter.dot,\n                currencySymbol: _AutoNumeric2.default.options.currencySymbol.none\n            },\n            numericPos: {\n                digitGroupSeparator: _AutoNumeric2.default.options.digitGroupSeparator.noSeparator,\n                decimalCharacter: _AutoNumeric2.default.options.decimalCharacter.dot,\n                currencySymbol: _AutoNumeric2.default.options.currencySymbol.none,\n                minimumValue: _AutoNumeric2.default.options.minimumValue.zero,\n                maximumValue: _AutoNumeric2.default.options.maximumValue.tenTrillions\n            },\n            numericNeg: {\n                digitGroupSeparator: _AutoNumeric2.default.options.digitGroupSeparator.noSeparator,\n                decimalCharacter: _AutoNumeric2.default.options.decimalCharacter.dot,\n                currencySymbol: _AutoNumeric2.default.options.currencySymbol.none,\n                minimumValue: _AutoNumeric2.default.options.minimumValue.tenTrillions,\n                maximumValue: _AutoNumeric2.default.options.maximumValue.zero\n            }\n        };\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvQXV0b051bWVyaWNQcmVkZWZpbmVkT3B0aW9ucy5qcz81MTViIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJlLWRlZmluZWQgb3B0aW9ucyBmb3IgYXV0b051bWVyaWMuanNcbiAqIEBhdXRob3IgQWxleGFuZHJlIEJvbm5lYXUgPGFsZXhhbmRyZS5ib25uZWF1QGxpbnV4ZnIuZXU+XG4gKiBAY29weXJpZ2h0IMKpIDIwMTYgQWxleGFuZHJlIEJvbm5lYXVcbiAqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4gKiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YiBsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZ1xuICogY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xuICogT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuICogT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBBdXRvTnVtZXJpYyBmcm9tICcuL0F1dG9OdW1lcmljJztcbmltcG9ydCBBdXRvTnVtZXJpY0hlbHBlciBmcm9tICcuL0F1dG9OdW1lcmljSGVscGVyJztcblxuY29uc3QgZXVybyA9IHsgLy8gRnJhbsOnYWlzXG4gICAgZGlnaXRHcm91cFNlcGFyYXRvciAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGlnaXRHcm91cFNlcGFyYXRvci5kb3QsIC8vIG9yICdcXHUyMDJmJ1xuICAgIGRlY2ltYWxDaGFyYWN0ZXIgICAgICAgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmRlY2ltYWxDaGFyYWN0ZXIuY29tbWEsXG4gICAgZGVjaW1hbENoYXJhY3RlckFsdGVybmF0aXZlICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbENoYXJhY3RlckFsdGVybmF0aXZlLmRvdCxcbiAgICBjdXJyZW5jeVN5bWJvbCAgICAgICAgICAgICAgIDogJ1xcdTIwMmbigqwnLFxuICAgIGN1cnJlbmN5U3ltYm9sUGxhY2VtZW50ICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmN1cnJlbmN5U3ltYm9sUGxhY2VtZW50LnN1ZmZpeCxcbiAgICBuZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudDogQXV0b051bWVyaWMub3B0aW9ucy5uZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudC5wcmVmaXgsXG59O1xuXG5jb25zdCBkb2xsYXIgPSB7XG4gICAgZGlnaXRHcm91cFNlcGFyYXRvciAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGlnaXRHcm91cFNlcGFyYXRvci5jb21tYSxcbiAgICBkZWNpbWFsQ2hhcmFjdGVyICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsQ2hhcmFjdGVyLmRvdCxcbiAgICBjdXJyZW5jeVN5bWJvbCAgICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5jdXJyZW5jeVN5bWJvbC5kb2xsYXIsXG4gICAgY3VycmVuY3lTeW1ib2xQbGFjZW1lbnQgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuY3VycmVuY3lTeW1ib2xQbGFjZW1lbnQucHJlZml4LFxuICAgIG5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50OiBBdXRvTnVtZXJpYy5vcHRpb25zLm5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50LnJpZ2h0LFxufTtcblxuY29uc3QgamFwYW5lc2UgPSB7IC8vIOaXpeacrOiqnlxuICAgIGRpZ2l0R3JvdXBTZXBhcmF0b3IgICAgICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmRpZ2l0R3JvdXBTZXBhcmF0b3IuY29tbWEsXG4gICAgZGVjaW1hbENoYXJhY3RlciAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbENoYXJhY3Rlci5kb3QsXG4gICAgY3VycmVuY3lTeW1ib2wgICAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuY3VycmVuY3lTeW1ib2wueWVuLFxuICAgIGN1cnJlbmN5U3ltYm9sUGxhY2VtZW50ICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmN1cnJlbmN5U3ltYm9sUGxhY2VtZW50LnByZWZpeCxcbiAgICBuZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudDogQXV0b051bWVyaWMub3B0aW9ucy5uZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudC5yaWdodCxcbn07XG5cblxuLy8gSGVyZSB3ZSBuZWVkIHRvIGNsb25lIHRoZSBpbml0aWFsIG9iamVjdHMgaW4gb3JkZXIgdG8gYmUgYWJsZSB0byBlZGl0IHRoZSBjbG9uZXMgd2l0aG91dCBhZmZlY3RpbmcgdGhlIG9yaWdpbmFsc1xuY29uc3QgZXVyb1BvcyAgICAgICAgICAgICAgICAgICAgICAgICA9IEF1dG9OdW1lcmljSGVscGVyLmNsb25lT2JqZWN0KGV1cm8pO1xuZXVyb1Bvcy5taW5pbXVtVmFsdWUgICAgICAgICAgICAgICAgICA9IDA7XG5jb25zdCBldXJvTmVnICAgICAgICAgICAgICAgICAgICAgICAgID0gQXV0b051bWVyaWNIZWxwZXIuY2xvbmVPYmplY3QoZXVybyk7XG5ldXJvTmVnLm1heGltdW1WYWx1ZSAgICAgICAgICAgICAgICAgID0gMDtcbmV1cm9OZWcubmVnYXRpdmVQb3NpdGl2ZVNpZ25QbGFjZW1lbnQgPSBBdXRvTnVtZXJpYy5vcHRpb25zLm5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50LnByZWZpeDtcblxuY29uc3QgZXVyb1NwYWNlICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gQXV0b051bWVyaWNIZWxwZXIuY2xvbmVPYmplY3QoZXVybyk7XG5ldXJvU3BhY2UuZGlnaXRHcm91cFNlcGFyYXRvciAgICAgICAgICAgICAgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmRpZ2l0R3JvdXBTZXBhcmF0b3Iubm9ybWFsU3BhY2U7XG5jb25zdCBldXJvU3BhY2VQb3MgICAgICAgICAgICAgICAgICAgICAgICAgPSBBdXRvTnVtZXJpY0hlbHBlci5jbG9uZU9iamVjdChldXJvU3BhY2UpO1xuZXVyb1NwYWNlUG9zLm1pbmltdW1WYWx1ZSAgICAgICAgICAgICAgICAgID0gMDtcbmNvbnN0IGV1cm9TcGFjZU5lZyAgICAgICAgICAgICAgICAgICAgICAgICA9IEF1dG9OdW1lcmljSGVscGVyLmNsb25lT2JqZWN0KGV1cm9TcGFjZSk7XG5ldXJvU3BhY2VOZWcubWF4aW11bVZhbHVlICAgICAgICAgICAgICAgICAgPSAwO1xuZXVyb1NwYWNlTmVnLm5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50ID0gQXV0b051bWVyaWMub3B0aW9ucy5uZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudC5wcmVmaXg7XG5cbmNvbnN0IHBlcmNlbnRhZ2VFVTJkZWMgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBBdXRvTnVtZXJpY0hlbHBlci5jbG9uZU9iamVjdChldXJvKTtcbnBlcmNlbnRhZ2VFVTJkZWMuY3VycmVuY3lTeW1ib2wgICAgICAgICAgICAgICAgICAgPSBBdXRvTnVtZXJpYy5vcHRpb25zLmN1cnJlbmN5U3ltYm9sLm5vbmU7XG5wZXJjZW50YWdlRVUyZGVjLnN1ZmZpeFRleHQgICAgICAgICAgICAgICAgICAgICAgID0gYFxcdTIwMmYke0F1dG9OdW1lcmljLm9wdGlvbnMuc3VmZml4VGV4dC5wZXJjZW50YWdlfWA7XG5wZXJjZW50YWdlRVUyZGVjLndoZWVsU3RlcCAgICAgICAgICAgICAgICAgICAgICAgID0gMC4wMDAxOyAvLyBUaGlzIHRhcmdldHMgdGhlIGByYXdWYWx1ZWAsIG5vdCB0aGUgZm9ybWF0dGVkIG9uZVxucGVyY2VudGFnZUVVMmRlYy5yYXdWYWx1ZURpdmlzb3IgICAgICAgICAgICAgICAgICA9IEF1dG9OdW1lcmljLm9wdGlvbnMucmF3VmFsdWVEaXZpc29yLnBlcmNlbnRhZ2U7XG5jb25zdCBwZXJjZW50YWdlRVUyZGVjUG9zICAgICAgICAgICAgICAgICAgICAgICAgID0gQXV0b051bWVyaWNIZWxwZXIuY2xvbmVPYmplY3QocGVyY2VudGFnZUVVMmRlYyk7XG5wZXJjZW50YWdlRVUyZGVjUG9zLm1pbmltdW1WYWx1ZSAgICAgICAgICAgICAgICAgID0gMDtcbmNvbnN0IHBlcmNlbnRhZ2VFVTJkZWNOZWcgICAgICAgICAgICAgICAgICAgICAgICAgPSBBdXRvTnVtZXJpY0hlbHBlci5jbG9uZU9iamVjdChwZXJjZW50YWdlRVUyZGVjKTtcbnBlcmNlbnRhZ2VFVTJkZWNOZWcubWF4aW11bVZhbHVlICAgICAgICAgICAgICAgICAgPSAwO1xucGVyY2VudGFnZUVVMmRlY05lZy5uZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudCA9IEF1dG9OdW1lcmljLm9wdGlvbnMubmVnYXRpdmVQb3NpdGl2ZVNpZ25QbGFjZW1lbnQucHJlZml4O1xuXG5jb25zdCBwZXJjZW50YWdlRVUzZGVjICAgICAgICAgICAgPSBBdXRvTnVtZXJpY0hlbHBlci5jbG9uZU9iamVjdChwZXJjZW50YWdlRVUyZGVjKTtcbnBlcmNlbnRhZ2VFVTNkZWMuZGVjaW1hbFBsYWNlcyAgICA9IDM7XG5jb25zdCBwZXJjZW50YWdlRVUzZGVjUG9zICAgICAgICAgPSBBdXRvTnVtZXJpY0hlbHBlci5jbG9uZU9iamVjdChwZXJjZW50YWdlRVUyZGVjUG9zKTtcbnBlcmNlbnRhZ2VFVTNkZWNQb3MuZGVjaW1hbFBsYWNlcyA9IDM7XG5jb25zdCBwZXJjZW50YWdlRVUzZGVjTmVnICAgICAgICAgPSBBdXRvTnVtZXJpY0hlbHBlci5jbG9uZU9iamVjdChwZXJjZW50YWdlRVUyZGVjTmVnKTtcbnBlcmNlbnRhZ2VFVTNkZWNOZWcuZGVjaW1hbFBsYWNlcyA9IDM7XG5cbmNvbnN0IGRvbGxhclBvcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gQXV0b051bWVyaWNIZWxwZXIuY2xvbmVPYmplY3QoZG9sbGFyKTtcbmRvbGxhclBvcy5taW5pbXVtVmFsdWUgICAgICAgICAgICAgICAgICAgICAgID0gMDtcbmNvbnN0IGRvbGxhck5lZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gQXV0b051bWVyaWNIZWxwZXIuY2xvbmVPYmplY3QoZG9sbGFyKTtcbmRvbGxhck5lZy5tYXhpbXVtVmFsdWUgICAgICAgICAgICAgICAgICAgICAgID0gMDtcbmRvbGxhck5lZy5uZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudCAgICAgID0gQXV0b051bWVyaWMub3B0aW9ucy5uZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudC5wcmVmaXg7XG5jb25zdCBkb2xsYXJOZWdCcmFja2V0cyAgICAgICAgICAgICAgICAgICAgICA9IEF1dG9OdW1lcmljSGVscGVyLmNsb25lT2JqZWN0KGRvbGxhck5lZyk7XG5kb2xsYXJOZWdCcmFja2V0cy5uZWdhdGl2ZUJyYWNrZXRzVHlwZU9uQmx1ciA9IEF1dG9OdW1lcmljLm9wdGlvbnMubmVnYXRpdmVCcmFja2V0c1R5cGVPbkJsdXIucGFyZW50aGVzZXM7XG5cbmNvbnN0IHBlcmNlbnRhZ2VVUzJkZWMgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBBdXRvTnVtZXJpY0hlbHBlci5jbG9uZU9iamVjdChkb2xsYXIpO1xucGVyY2VudGFnZVVTMmRlYy5jdXJyZW5jeVN5bWJvbCAgICAgICAgICAgICAgICAgICA9IEF1dG9OdW1lcmljLm9wdGlvbnMuY3VycmVuY3lTeW1ib2wubm9uZTtcbnBlcmNlbnRhZ2VVUzJkZWMuc3VmZml4VGV4dCAgICAgICAgICAgICAgICAgICAgICAgPSBBdXRvTnVtZXJpYy5vcHRpb25zLnN1ZmZpeFRleHQucGVyY2VudGFnZTtcbnBlcmNlbnRhZ2VVUzJkZWMud2hlZWxTdGVwICAgICAgICAgICAgICAgICAgICAgICAgPSAwLjAwMDE7XG5wZXJjZW50YWdlRVUyZGVjLnJhd1ZhbHVlRGl2aXNvciAgICAgICAgICAgICAgICAgID0gQXV0b051bWVyaWMub3B0aW9ucy5yYXdWYWx1ZURpdmlzb3IucGVyY2VudGFnZTtcbmNvbnN0IHBlcmNlbnRhZ2VVUzJkZWNQb3MgICAgICAgICAgICAgICAgICAgICAgICAgPSBBdXRvTnVtZXJpY0hlbHBlci5jbG9uZU9iamVjdChwZXJjZW50YWdlVVMyZGVjKTtcbnBlcmNlbnRhZ2VVUzJkZWNQb3MubWluaW11bVZhbHVlICAgICAgICAgICAgICAgICAgPSAwO1xuY29uc3QgcGVyY2VudGFnZVVTMmRlY05lZyAgICAgICAgICAgICAgICAgICAgICAgICA9IEF1dG9OdW1lcmljSGVscGVyLmNsb25lT2JqZWN0KHBlcmNlbnRhZ2VVUzJkZWMpO1xucGVyY2VudGFnZVVTMmRlY05lZy5tYXhpbXVtVmFsdWUgICAgICAgICAgICAgICAgICA9IDA7XG5wZXJjZW50YWdlVVMyZGVjTmVnLm5lZ2F0aXZlUG9zaXRpdmVTaWduUGxhY2VtZW50ID0gQXV0b051bWVyaWMub3B0aW9ucy5uZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudC5wcmVmaXg7XG5cbmNvbnN0IHBlcmNlbnRhZ2VVUzNkZWMgICAgICAgICAgICA9IEF1dG9OdW1lcmljSGVscGVyLmNsb25lT2JqZWN0KHBlcmNlbnRhZ2VVUzJkZWMpO1xucGVyY2VudGFnZVVTM2RlYy5kZWNpbWFsUGxhY2VzICAgID0gMztcbmNvbnN0IHBlcmNlbnRhZ2VVUzNkZWNQb3MgICAgICAgICA9IEF1dG9OdW1lcmljSGVscGVyLmNsb25lT2JqZWN0KHBlcmNlbnRhZ2VVUzJkZWNQb3MpO1xucGVyY2VudGFnZVVTM2RlY1Bvcy5kZWNpbWFsUGxhY2VzID0gMztcbmNvbnN0IHBlcmNlbnRhZ2VVUzNkZWNOZWcgICAgICAgICA9IEF1dG9OdW1lcmljSGVscGVyLmNsb25lT2JqZWN0KHBlcmNlbnRhZ2VVUzJkZWNOZWcpO1xucGVyY2VudGFnZVVTM2RlY05lZy5kZWNpbWFsUGxhY2VzID0gMztcblxuLyoqXG4gKiBQcmVkZWZpbmVkIG9wdGlvbnMgZm9yIHRoZSBtb3N0IGNvbW1vbiBsYW5ndWFnZXNcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dG9OdW1lcmljLCAncHJlZGVmaW5lZE9wdGlvbnMnLCB7XG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXVybyxcbiAgICAgICAgICAgIGV1cm9Qb3MsXG4gICAgICAgICAgICBldXJvTmVnLFxuICAgICAgICAgICAgZXVyb1NwYWNlLFxuICAgICAgICAgICAgZXVyb1NwYWNlUG9zLFxuICAgICAgICAgICAgZXVyb1NwYWNlTmVnLFxuICAgICAgICAgICAgcGVyY2VudGFnZUVVMmRlYyxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VFVTJkZWNQb3MsXG4gICAgICAgICAgICBwZXJjZW50YWdlRVUyZGVjTmVnLFxuICAgICAgICAgICAgcGVyY2VudGFnZUVVM2RlYyxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VFVTNkZWNQb3MsXG4gICAgICAgICAgICBwZXJjZW50YWdlRVUzZGVjTmVnLFxuICAgICAgICAgICAgZG9sbGFyLFxuICAgICAgICAgICAgZG9sbGFyUG9zLFxuICAgICAgICAgICAgZG9sbGFyTmVnLFxuICAgICAgICAgICAgZG9sbGFyTmVnQnJhY2tldHMsXG4gICAgICAgICAgICBwZXJjZW50YWdlVVMyZGVjLFxuICAgICAgICAgICAgcGVyY2VudGFnZVVTMmRlY1BvcyxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VVUzJkZWNOZWcsXG4gICAgICAgICAgICBwZXJjZW50YWdlVVMzZGVjLFxuICAgICAgICAgICAgcGVyY2VudGFnZVVTM2RlY1BvcyxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VVUzNkZWNOZWcsXG4gICAgICAgICAgICBGcmVuY2ggICAgICAgICAgICAgICAgICAgICAgOiBldXJvLCAvLyBGcmFuw6dhaXNcbiAgICAgICAgICAgIFNwYW5pc2ggICAgICAgICAgICAgICAgICAgICA6IGV1cm8sIC8vIEVzcGHDsW9sXG4gICAgICAgICAgICBOb3J0aEFtZXJpY2FuICAgICAgICAgICAgICAgOiBkb2xsYXIsXG4gICAgICAgICAgICBCcml0aXNoICAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgZGlnaXRHcm91cFNlcGFyYXRvciAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGlnaXRHcm91cFNlcGFyYXRvci5jb21tYSxcbiAgICAgICAgICAgICAgICBkZWNpbWFsQ2hhcmFjdGVyICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsQ2hhcmFjdGVyLmRvdCxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCAgICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5jdXJyZW5jeVN5bWJvbC5wb3VuZCxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbFBsYWNlbWVudCAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5jdXJyZW5jeVN5bWJvbFBsYWNlbWVudC5wcmVmaXgsXG4gICAgICAgICAgICAgICAgbmVnYXRpdmVQb3NpdGl2ZVNpZ25QbGFjZW1lbnQ6IEF1dG9OdW1lcmljLm9wdGlvbnMubmVnYXRpdmVQb3NpdGl2ZVNpZ25QbGFjZW1lbnQucmlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU3dpc3MgICAgICAgICAgICAgICAgICAgICAgIDogeyAvLyBTdWlzc2VcbiAgICAgICAgICAgICAgICBkaWdpdEdyb3VwU2VwYXJhdG9yICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5kaWdpdEdyb3VwU2VwYXJhdG9yLmFwb3N0cm9waGUsXG4gICAgICAgICAgICAgICAgZGVjaW1hbENoYXJhY3RlciAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbENoYXJhY3Rlci5kb3QsXG4gICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgICAgICAgICAgICAgICA6ICdcXHUyMDJmQ0hGJyxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbFBsYWNlbWVudCAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5jdXJyZW5jeVN5bWJvbFBsYWNlbWVudC5zdWZmaXgsXG4gICAgICAgICAgICAgICAgbmVnYXRpdmVQb3NpdGl2ZVNpZ25QbGFjZW1lbnQ6IEF1dG9OdW1lcmljLm9wdGlvbnMubmVnYXRpdmVQb3NpdGl2ZVNpZ25QbGFjZW1lbnQucHJlZml4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEphcGFuZXNlICAgICAgICAgICAgICAgICAgICA6IGphcGFuZXNlLCAvLyDml6XmnKzoqp5cbiAgICAgICAgICAgIENoaW5lc2UgICAgICAgICAgICAgICAgICAgICA6IGphcGFuZXNlLCAvLyDkuK3lm73oqp4gKENoaW5lc2UpXG4gICAgICAgICAgICBCcmF6aWxpYW4gICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgZGlnaXRHcm91cFNlcGFyYXRvciAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGlnaXRHcm91cFNlcGFyYXRvci5kb3QsXG4gICAgICAgICAgICAgICAgZGVjaW1hbENoYXJhY3RlciAgICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbENoYXJhY3Rlci5jb21tYSxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCAgICAgICAgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5jdXJyZW5jeVN5bWJvbC5yZWFsLFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sUGxhY2VtZW50ICAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmN1cnJlbmN5U3ltYm9sUGxhY2VtZW50LnByZWZpeCxcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudDogQXV0b051bWVyaWMub3B0aW9ucy5uZWdhdGl2ZVBvc2l0aXZlU2lnblBsYWNlbWVudC5yaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3REZWNpbWFsQ2hhckNvbW1hU2VwYXJhdG9yOiB7XG4gICAgICAgICAgICAgICAgZGlnaXRHcm91cFNlcGFyYXRvcjogQXV0b051bWVyaWMub3B0aW9ucy5kaWdpdEdyb3VwU2VwYXJhdG9yLmNvbW1hLFxuICAgICAgICAgICAgICAgIGRlY2ltYWxDaGFyYWN0ZXIgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbENoYXJhY3Rlci5kb3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tbWFEZWNpbWFsQ2hhckRvdFNlcGFyYXRvcjoge1xuICAgICAgICAgICAgICAgIGRpZ2l0R3JvdXBTZXBhcmF0b3IgICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5kaWdpdEdyb3VwU2VwYXJhdG9yLmRvdCxcbiAgICAgICAgICAgICAgICBkZWNpbWFsQ2hhcmFjdGVyICAgICAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbENoYXJhY3Rlci5jb21tYSxcbiAgICAgICAgICAgICAgICBkZWNpbWFsQ2hhcmFjdGVyQWx0ZXJuYXRpdmU6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbENoYXJhY3RlckFsdGVybmF0aXZlLmRvdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnRlZ2VyICAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlczogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnRlZ2VyUG9zICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgbWluaW11bVZhbHVlIDogQXV0b051bWVyaWMub3B0aW9ucy5taW5pbXVtVmFsdWUuemVybyxcbiAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludGVnZXJOZWcgICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBtYXhpbXVtVmFsdWUgOiBBdXRvTnVtZXJpYy5vcHRpb25zLm1heGltdW1WYWx1ZS56ZXJvLFxuICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXM6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmxvYXQgICAgICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGFsbG93RGVjaW1hbFBhZGRpbmc6IEF1dG9OdW1lcmljLm9wdGlvbnMuYWxsb3dEZWNpbWFsUGFkZGluZy5uZXZlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbG9hdFBvcyAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgYWxsb3dEZWNpbWFsUGFkZGluZzogQXV0b051bWVyaWMub3B0aW9ucy5hbGxvd0RlY2ltYWxQYWRkaW5nLm5ldmVyLFxuICAgICAgICAgICAgICAgIG1pbmltdW1WYWx1ZSAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMubWluaW11bVZhbHVlLnplcm8sXG4gICAgICAgICAgICAgICAgbWF4aW11bVZhbHVlICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5tYXhpbXVtVmFsdWUudGVuVHJpbGxpb25zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZsb2F0TmVnICAgICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBhbGxvd0RlY2ltYWxQYWRkaW5nOiBBdXRvTnVtZXJpYy5vcHRpb25zLmFsbG93RGVjaW1hbFBhZGRpbmcubmV2ZXIsXG4gICAgICAgICAgICAgICAgbWluaW11bVZhbHVlICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5taW5pbXVtVmFsdWUudGVuVHJpbGxpb25zLFxuICAgICAgICAgICAgICAgIG1heGltdW1WYWx1ZSAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMubWF4aW11bVZhbHVlLnplcm8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbnVtZXJpYyAgICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGRpZ2l0R3JvdXBTZXBhcmF0b3I6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGlnaXRHcm91cFNlcGFyYXRvci5ub1NlcGFyYXRvcixcbiAgICAgICAgICAgICAgICBkZWNpbWFsQ2hhcmFjdGVyICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmRlY2ltYWxDaGFyYWN0ZXIuZG90LFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuY3VycmVuY3lTeW1ib2wubm9uZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBudW1lcmljUG9zICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgZGlnaXRHcm91cFNlcGFyYXRvcjogQXV0b051bWVyaWMub3B0aW9ucy5kaWdpdEdyb3VwU2VwYXJhdG9yLm5vU2VwYXJhdG9yLFxuICAgICAgICAgICAgICAgIGRlY2ltYWxDaGFyYWN0ZXIgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMuZGVjaW1hbENoYXJhY3Rlci5kb3QsXG4gICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2wgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5jdXJyZW5jeVN5bWJvbC5ub25lLFxuICAgICAgICAgICAgICAgIG1pbmltdW1WYWx1ZSAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMubWluaW11bVZhbHVlLnplcm8sXG4gICAgICAgICAgICAgICAgbWF4aW11bVZhbHVlICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5tYXhpbXVtVmFsdWUudGVuVHJpbGxpb25zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG51bWVyaWNOZWcgICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBkaWdpdEdyb3VwU2VwYXJhdG9yOiBBdXRvTnVtZXJpYy5vcHRpb25zLmRpZ2l0R3JvdXBTZXBhcmF0b3Iubm9TZXBhcmF0b3IsXG4gICAgICAgICAgICAgICAgZGVjaW1hbENoYXJhY3RlciAgIDogQXV0b051bWVyaWMub3B0aW9ucy5kZWNpbWFsQ2hhcmFjdGVyLmRvdCxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeVN5bWJvbCAgICAgOiBBdXRvTnVtZXJpYy5vcHRpb25zLmN1cnJlbmN5U3ltYm9sLm5vbmUsXG4gICAgICAgICAgICAgICAgbWluaW11bVZhbHVlICAgICAgIDogQXV0b051bWVyaWMub3B0aW9ucy5taW5pbXVtVmFsdWUudGVuVHJpbGxpb25zLFxuICAgICAgICAgICAgICAgIG1heGltdW1WYWx1ZSAgICAgICA6IEF1dG9OdW1lcmljLm9wdGlvbnMubWF4aW11bVZhbHVlLnplcm8sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQXV0b051bWVyaWNQcmVkZWZpbmVkT3B0aW9ucy5qcyJdLCJtYXBwaW5ncyI6Ijs7QUE2QkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUEvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQTlGQTtBQXNHQTtBQXhHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n")
			}])
		})
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-admin-input",
			data: function() {
				return {}
			},
			props: {
				value: [String, Number],
				placeholder: {
					type: String,
				default:
					"请输入"
				},
				minlength: Number,
				maxlength: Number,
				disabled: {
					type: Boolean,
				default:
					!1
				},
				type: {
					type: String,
				default:
					"text"
				}
			},
			methods: {
				focus: function() {
					this.$el.querySelector("input").focus()
				},
				blur: function() {
					this.$el.querySelector("input").blur()
				},
				handleInput: function(g) {
					var e = g.target.value;
					this.$emit("input", e), this.$emit("change", e)
				}
			},
			computed: {
				iconClass: function() {
					return "aui-admin-input-" + this.type
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-box",
			data: function() {
				return {}
			},
			props: {
				direction: {
					type: String,
				default:
					"row"
				},
				justifyContent: {
					type: String,
				default:
					"center"
				},
				alignItems: {
					type: String,
				default:
					"center"
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-button",
			props: {
				disabled: Boolean,
				fill: Boolean,
				type: {
					type: String,
				default:
					"default"
				},
				size: String,
				cornerType: {
					type: String,
				default:
					"default-corner"
				}
			},
			methods: {
				handleClick: function(g) {
					this.disabled || this.$emit("click", g)
				}
			},
			computed: {
				types: function() {
					if (this.type) return "aui-button--" + this.type
				},
				sizes: function() {
					if (this.size) return "aui-button--" + this.size
				},
				cornerTypes: function() {
					if (this.cornerType) return "aui-button--" + this.cornerType
				},
				classBtn: function() {
					var g = {};
					return g["is-fill"] = this.fill, g["is-disabled"] = this.disabled, g
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(2);
		e.
	default = {
			name: "aui-checkbox",
			mixins: [t.a],
			data: function() {
				return {
					selfModel: !1,
					isFocus: !1
				}
			},
			computed: {
				model: {
					get: function() {
						return this.isGroup ? this.store : void 0 !== this.value ? this.value : this.selfModel
					},
					set: function(g) {
						if (this.isGroup) {
							var e = !1;
							void 0 !== this._checkboxGroup.min && g.length < this._checkboxGroup.min && (e = !0), void 0 !== this._checkboxGroup.max && g.length > this._checkboxGroup.max && (e = !0), !1 === e && this.$dispatch("aui-checkbox-group", "input", [g])
						} else void 0 !== this.value ? this.$emit("input", g) : this.selfModel = g
					}
				},
				isChecked: function() {
					return "[object Boolean]" === {}.toString.call(this.model) ? this.model : Array.isArray(this.model) ? this.model.indexOf(this.label) > -1 : null !== this.model && void 0 !== this.model ? this.model === this.trueLabel : void 0
				},
				isGroup: function() {
					for (var g = this.$parent; g;) {
						if ("aui-checkbox-group" === g.$options.name) return this._checkboxGroup = g, !0;
						g = g.$parent
					}
					return !1
				},
				store: function() {
					return this._checkboxGroup ? this._checkboxGroup.value : this.value
				}
			},
			props: {
				value: {},
				label: {},
				indeterminate: Boolean,
				disabled: Boolean,
				checked: Boolean,
				name: String,
				trueLabel: [String, Number],
				falseLabel: [String, Number]
			},
			methods: {
				focus: function() {
					this.isFocus = !0, this.$el.firstElementChild.querySelector("input").focus()
				},
				blur: function() {
					this.isFocus = !1, this.$el.firstElementChild.querySelector("input").blur()
				},
				addToStore: function() {
					Array.isArray(this.model) && -1 === this.model.indexOf(this.label) ? this.model.push(this.label) : this.model = this.trueLabel || !0
				},
				handleChange: function(g) {
					var e = this;
					this.$emit("change", g), this.isGroup && this.$nextTick(function(g) {
						e.$dispatch("aui-checkbox-group", "change", [e._checkboxGroup.value])
					})
				}
			},
			created: function() {
				this.checked && this.addToStore()
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(2);
		e.
	default = {
			name: "aui-checkbox-group",
			mixins: [t.a],
			props: {
				value: {},
				min: Number,
				max: Number
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-counter-input",
			props: {
				step: {
					type: Number,
				default:
					1
				},
				value: {
				default:
					0
				},
				disabled: {
					type: Boolean,
				default:
					!1
				},
				max: {
					type: Number,
				default:
					1 / 0
				},
				min: {
					type: Number,
				default:
					-1 / 0
				},
				size: {
					type: String,
				default:
					"normal"
				}
			},
			data: function() {
				return {
					precision: this.value,
					isFocus: !1,
					decreaseInterval: null,
					increaseInterval: null
				}
			},
			watch: {
				value: {
					immediate: !0,
					handler: function(g) {
						var e = Number(g);
						isNaN(e) || (e >= this.max && (e = this.max), e <= this.min && (e = this.min), this.$emit("input", e))
					}
				}
			},
			mounted: function() {
				var g = this;
				this.$el.querySelector("input").onkeydown = function(e) {
					var I = e || window.event || arguments.callee.caller.arguments[0],
						t = e.target.value;
					if (I && I.key >= "0" && I.key <= "9" || "Backspace" == I.key || "." == I.key || "ArrowLeft" == I.key || "ArrowRight" == I.key) {
						if (("." == I.key && -1 != t.indexOf(".") || "" == t) && "." == I.key && I.preventDefault(), "Backspace" == I.key && Object.defineProperty(I, "key", {
							value: ""
						}), t = t.split(""), t.splice(I.target.selectionStart, I.target.selectionEnd - I.target.selectionStart, I.key), t = t.join(""), -1 != t.indexOf(".")) {
							t.split(".")[1].length > g.decimal && (t = t.split(""), t.splice(I.target.selectionStart, 1), t = t.join(""), "Backspace" != I.key && "ArrowLeft" != I.key && "ArrowRight" != I.key && I.preventDefault())
						}
						if (0 == I.target.selectionStart && "." == I.key && I.preventDefault(), t > g.max && "Backspace" != I.key && "ArrowLeft" != I.key && "ArrowRight" != I.key && I.preventDefault(), -1 != t.indexOf(".")) {
							var n = t.indexOf("."),
								l = t.split(".");
							l[0] + l[1] > g.max && I.target.selectionStart == n + 1 && "Backspace" == I.key && I.preventDefault()
						}
						I.target.selectionStart != I.target.selectionEnd && "Backspace" == I.key && I.preventDefault()
					} else I.preventDefault()
				}
			},
			methods: {
				onClick: function(g, e) {
					g.stopPropagation(), "decrease" === e && this.decrease(), "increase" === e && this.increase()
				},
				onFocusin: function(g) {
					g.stopPropagation()
				},
				touchstartDecrease: function(g) {
					var e = this;
					this.decreaseInterval = setInterval(function() {
						e.decrease()
					}, 200)
				},
				touchendDecrease: function() {
					clearInterval(this.decreaseInterval)
				},
				touchstartIncrease: function(g) {
					var e = this;
					this.increaseInterval = setInterval(function() {
						e.increase()
					}, 200)
				},
				touchendIncrease: function() {
					clearInterval(this.increaseInterval)
				},
				decrease: function() {
					1 != this.disabled && (this.precision <= this.min ? this.precision = this.min : (this.step ? this.precision = this.precision - this.step : this.precision--, this.setCurrentValue(this.precision)))
				},
				increase: function() {
					1 != this.disabled && (this.precision >= this.max ? this.precision = this.max : (this.step ? this.precision = this.precision + this.step : this.precision++, this.setCurrentValue(this.precision)))
				},
				setCurrentValue: function(g) {
					this.$emit("change", g), this.$emit("input", g)
				},
				focus: function() {
					this.isFocus = !0
				},
				blur: function() {
					this.isFocus = !1
				},
				handleInput: function(g) {
					var e = g.target.value;
					this.$emit("input", e), this.$emit("change", e)
				},
				changeInput: function() {
					this.precision = this.value
				}
			},
			computed: {
				sizeClass: function() {
					return "aui-counter-input-" + this.size
				}
			}
		}
	}, function(g, e, I) {
		"use strict";

		function t(g, e, I) {
			return e in g ? Object.defineProperty(g, e, {
				value: I,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : g[e] = I, g
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = I(38),
			l = I.n(n),
			C = {};
		e.
	default = {
			name: "aui-currency-input",
			props: {
				value: {
					type: [Number, String],
					required: !1
				},
				placeholder: {
					type: String,
					required: !1
				},
				decimal: {
					type: Number,
				default:
					0,
					required: !1
				},
				max: {
					type: Number,
				default:
					Number.MAX_SAFE_INTEGER || 9007199254740991,
					required: !1
				},
				min: {
					type: Number,
				default:
					Number.MIN_SAFE_INTEGER || -9007199254740991,
					required: !1
				},
				disabled: {
					type: Boolean,
				default:
					!1
				},
				size: {
					type: String,
				default:
					"normal"
				},
				align: {
					type: String,
				default:
					"left"
				},
				currencySymbol: {
					type: String,
				default:
					""
				},
				currencySymbolPlacement: {
					type: String,
				default:
					"p"
				},
				decimalPlacesRawValue: {
					type: [String, Number],
				default:
					null
				},
				digitalGroupSpacing: {
					type: [String, Number],
				default:
					3
				},
				leadingZero: {
					type: String,
				default:
					"deny"
				},
				emptyInputBehavior: {
					type: String,
				default:
					"null"
				},
				isNumeric: {
					type: Boolean,
				default:
					!1
				}
			},
			data: function() {
				return {
					anElement: null,
					userInteraction: !1,
					options: null
				}
			},
			computed: {
				className: function() {
					return "aui-currency-input-" + this.size + " aui-currency-input-" + this.align
				}
			},
			mounted: function() {
				var g, e = this,
					I = void 0;
				if (this.options = (g = {
					minimumValue: this.min,
					decimalPlaces: this.decimal,
					selectOnFocus: !1,
					maximumValue: this.max,
					currencySymbol: this.currencySymbol,
					decimalPlacesRawValue: this.decimal,
					modifyValueOnWheel: !1,
					currencySymbolPlacement: this.currencySymbolPlacement
				}, t(g, "decimalPlacesRawValue", this.decimalPlacesRawValue), t(g, "digitalGroupSpacing", this.digitalGroupSpacing), t(g, "leadingZero", this.leadingZero), t(g, "emptyInputBehavior", this.emptyInputBehavior), g), Array.isArray(this.options)) {
					var n = {};
					this.options.forEach(function(g) {
						I = e.manageOptionElement(g), n = Object.assign(n, I)
					}), I = n
				} else I = this.manageOptionElement(this.options);
				this.anElement = new l.a(this.$refs.autoNumericInput, I), null !== this.value && "" !== this.value && (this.anElement.set(this.value), this.updateVModel(), this.resetUserInteraction())
			},
			methods: {
				updateVModel: function(g) {
					null !== this.anElement && (this.isNumeric ? this.$emit("input", this.anElement.getNumber(), g) : this.$emit("input", this.anElement.getNumericString(), g))
				},
				setUserInteraction: function() {
					this.userInteraction = !0
				},
				resetUserInteraction: function() {
					this.userInteraction = !1
				},
				manageOptionElement: function(g) {
					var e = void 0;
					return "string" == typeof g || g instanceof String ? void 0 !== (e = l.a.getPredefinedOptions()[g]) && null !== e || (console.warn("The given pre-defined options [" + g + "] is not recognized by autoNumeric.\nSwitching back to the default options."), e = C) : e = g, e
				}
			},
			watch: {
				value: function(g, e) {
					try {
						this.userInteraction || g !== e && this.anElement.set(g)
					} catch (g) {
						console.error(g)
					}
					this.resetUserInteraction()
				},
				options: function(g, e) {
					JSON.stringify(g) !== JSON.stringify(e) && this.anElement.update(g)
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(10);
		e.
	default = {
			name: "aui-date-picker",
			data: function() {
				var g = new Date;
				return {
					isShow: !1,
					showCancel: !1,
					panelState: 0,
					panelType: "date",
					coordinates: {},
					year: g.getFullYear(),
					month: g.getMonth(),
					date: g.getDate(),
					tmpYear: g.getFullYear(),
					tmpMonth: g.getMonth(),
					minYear: Number,
					minMonth: Number,
					minDate: Number,
					maxYear: Number,
					maxMonth: Number,
					maxDate: Number,
					monthList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
					setTop: "",
					setLeft: "",
					zIndex: "-1",
					yCounter: 0,
					mCounter: 0,
					dCounter: 0,
					isFocus: !1,
					yearIndex: void 0,
					panelWidth: "",
					panelYearWidth: "",
					panelYearBoxWidth: "",
					panelMonthWidth: "",
					panelMonthIsHide: !0,
					panelDayIsHide: !0
				}
			},
			props: {
				placeholder: {
					type: String,
				default:
					"选择日期"
				},
				min: {
				default:
					"1970-01-01"
				},
				max: {
				default:
					"3016-01-01"
				},
				value: {
					type: [String, Array],
				default:
					""
				},
				type: {
					type: [String],
				default:
					"date"
				},
				disabled: {
					type: Boolean,
				default:
					!1
				},
				option: Object
			},
			directives: {
				clickoutside: t.a
			},
			methods: {
				offsetFixed: function() {
					if (!this.disabled) {
						this.panelState = 1, this.zIndex = "1000", this.isFocus = !0;
						var g = window.outerWidth - this.$refs.dateOffset.getBoundingClientRect().right,
							e = window.outerHeight - this.$refs.dateOffset.getBoundingClientRect().bottom;
						"year" == this.type ? (this.setLeft = g >= 0 && g <= 22 ? window.outerWidth - 260 + "px" : this.$refs.dateOffset.getBoundingClientRect().left + "px", this.setTop = e >= 420 ? this.$refs.dateOffset.getBoundingClientRect().bottom + "px" : this.$refs.dateOffset.getBoundingClientRect().top - 400 + "px") : "month" == this.type ? (this.setLeft = g >= 0 && g <= 102 ? window.outerWidth - 340 + "px" : this.$refs.dateOffset.getBoundingClientRect().left + "px", this.setTop = e >= 420 ? this.$refs.dateOffset.getBoundingClientRect().bottom + "px" : this.$refs.dateOffset.getBoundingClientRect().top - 400 + "px") : (this.setLeft = g >= 0 && g <= 382 ? window.outerWidth - 620 + "px" : this.$refs.dateOffset.getBoundingClientRect().left + "px", this.setTop = e >= 420 ? this.$refs.dateOffset.getBoundingClientRect().bottom + "px" : this.$refs.dateOffset.getBoundingClientRect().top - 400 + "px")
					}
				},
				selectYear: function(g, e) {
					if (e) {
						if (this.validateYear(g)) return;
						this.tmpYear = g
					} else {
						if (this.validateYear(g)) return;
						this.tmpYear = g, this.yCounter = 1
					}
				},
				selectMonth: function(g) {
					this.validateMonth(g) || (this.tmpMonth = g, this.mCounter = 1)
				},
				selectDate: function(g) {
					var e = this;
					g.isDateDisabled || (this.dCounter = 1, setTimeout(function() {
						e.validateDate(g) || (g.previousMonth ? 0 === e.tmpMonth ? (e.year -= 1, e.tmpYear -= 1, e.month = e.tmpMonth = 11) : (e.month = e.tmpMonth - 1, e.tmpMonth -= 1) : g.nextMonth && (11 === e.tmpMonth ? (e.year += 1, e.tmpYear += 1, e.month = e.tmpMonth = 0) : (e.month = e.tmpMonth + 1, e.tmpMonth += 1)), e.year = e.tmpYear, e.month = e.tmpMonth, e.date = g.value)
					}, 0))
				},
				validateYear: function(g) {
					return g > this.maxYear || g < this.minYear
				},
				validateMonth: function(g) {
					return !(new Date(this.tmpYear, g).getTime() >= new Date(this.minYear, this.minMonth - 1).getTime() && new Date(this.tmpYear, g).getTime() <= new Date(this.maxYear, this.maxMonth - 1).getTime())
				},
				validateDate: function(g) {
					var e = this.tmpMonth;
					return g.previousMonth ? e -= 1 : g.nextMonth && (e += 1), !(new Date(this.tmpYear, e, g.value).getTime() >= new Date(this.minYear, this.minMonth - 1, this.minDate).getTime() && new Date(this.tmpYear, e, g.value).getTime() <= new Date(this.maxYear, this.maxMonth - 1, this.maxDate).getTime())
				},
				evaluation: function(g) {
					if ("date" == this.type) {
						if (1 == g && this.value) if (1 === this.yCounter || 1 === this.mCounter || 1 === this.dCounter) if (this.tmpYear === this.maxYear && this.tmpMonth + 1 >= this.maxMonth) if (this.tmpMonth + 1 == this.maxMonth) if (this.date > this.maxDate) {
							var e = this.tmpYear + "-" + ("0" + this.maxMonth).slice(-2) + "-" + ("0" + this.maxDate).slice(-2);
							this.$emit("input", e)
						} else {
							var I = this.tmpYear + "-" + ("0" + this.maxMonth).slice(-2) + "-" + ("0" + this.date).slice(-2);
							this.$emit("input", I)
						} else {
							var t = this.tmpYear + "-" + ("0" + this.maxMonth).slice(-2) + "-" + ("0" + this.maxDate).slice(-2);
							this.$emit("input", t)
						} else if (this.tmpYear === this.minYear && this.tmpMonth + 1 <= this.minMonth) if (this.tmpMonth + 1 == this.minMonth) if (this.date <= this.minDate) {
							var n = this.tmpYear + "-" + ("0" + this.minMonth).slice(-2) + "-" + ("0" + this.minDate).slice(-2);
							this.$emit("input", n)
						} else {
							var l = this.tmpYear + "-" + ("0" + this.minMonth).slice(-2) + "-" + ("0" + this.date).slice(-2);
							this.$emit("input", l)
						} else {
							var C = this.tmpYear + "-" + ("0" + this.minMonth).slice(-2) + "-" + ("0" + this.minDate).slice(-2);
							this.$emit("input", C)
						} else {
							var A = this.tmpYear + "-" + ("0" + (this.tmpMonth + 1)).slice(-2) + "-" + ("0" + this.date).slice(-2);
							this.$emit("input", A)
						} else {
							var i = parseInt(this.value.split("-")[0]) + "-" + ("0" + parseInt(this.value.split("-")[1])).slice(-2) + "-" + ("0" + this.date).slice(-2);
							this.$emit("input", i)
						} else if (1 == g) if (this.tmpYear === this.maxYear && this.tmpMonth + 1 >= this.maxMonth) if (this.tmpMonth + 1 == this.maxMonth) if (this.date > this.maxDate) {
							var a = this.tmpYear + "-" + ("0" + this.maxMonth).slice(-2) + "-" + ("0" + this.maxDate).slice(-2);
							this.$emit("input", a)
						} else {
							var c = this.tmpYear + "-" + ("0" + this.maxMonth).slice(-2) + "-" + ("0" + this.date).slice(-2);
							this.$emit("input", c)
						} else {
							var u = this.tmpYear + "-" + ("0" + this.maxMonth).slice(-2) + "-" + ("0" + this.maxDate).slice(-2);
							this.$emit("input", u)
						} else if (this.tmpYear === this.minYear && this.tmpMonth + 1 <= this.minMonth) if (this.tmpMonth + 1 == this.minMonth) if (this.date <= this.minDate) {
							var s = this.tmpYear + "-" + ("0" + this.minMonth).slice(-2) + "-" + ("0" + this.minDate).slice(-2);
							this.$emit("input", s)
						} else {
							var d = this.tmpYear + "-" + ("0" + this.minMonth).slice(-2) + "-" + ("0" + this.date).slice(-2);
							this.$emit("input", d)
						} else {
							var o = this.tmpYear + "-" + ("0" + this.minMonth).slice(-2) + "-" + ("0" + this.minDate).slice(-2);
							this.$emit("input", o)
						} else {
							var b = this.tmpYear + "-" + ("0" + (this.tmpMonth + 1)).slice(-2) + "-" + ("0" + this.date).slice(-2);
							this.$emit("input", b)
						}
					} else if ("year" == this.type) {
						if (1 == g && this.value) if (1 === this.yCounter) {
							var r = "" + this.tmpYear;
							this.$emit("input", r)
						} else {
							var B = "" + parseInt(this.value.split("-")[0]);
							this.$emit("input", B)
						} else if (1 == g) {
							var m = "" + this.tmpYear;
							this.$emit("input", m)
						}
					} else if ("month" == this.type) if (1 == g && this.value) if (1 === this.yCounter || 1 === this.mCounter) if (this.tmpYear === this.maxYear && this.tmpMonth + 1 >= this.maxMonth) {
						var G = this.tmpYear + "-" + ("0" + this.maxMonth).slice(-2);
						this.$emit("input", G)
					} else if (this.tmpYear === this.minYear && this.tmpMonth + 1 <= this.minMonth) {
						var h = this.tmpYear + "-" + ("0" + this.minMonth).slice(-2);
						this.$emit("input", h)
					} else {
						var Z = this.tmpYear + "-" + ("0" + (this.tmpMonth + 1)).slice(-2);
						this.$emit("input", Z)
					} else {
						var W = parseInt(this.value.split("-")[0]) + "-" + ("0" + parseInt(this.value.split("-")[1])).slice(-2);
						this.$emit("input", W)
					} else if (1 == g) if (this.tmpYear === this.maxYear && this.tmpMonth + 1 >= this.maxMonth) {
						var V = this.tmpYear + "-" + ("0" + this.maxMonth).slice(-2);
						this.$emit("input", V)
					} else if (this.tmpYear === this.minYear && this.tmpMonth + 1 <= this.minMonth) {
						var p = this.tmpYear + "-" + ("0" + this.minMonth).slice(-2);
						this.$emit("input", p)
					} else {
						var X = this.tmpYear + "-" + ("0" + (this.tmpMonth + 1)).slice(-2);
						this.$emit("input", X)
					}
					var F = new Date;
					this.date = F.getDate(), this.tmpYear = F.getFullYear(), this.tmpMonth = F.getMonth(), this.panelState = 0, this.zIndex = "-1", this.isFocus = !1, this.yCounter = 0, this.mCounter = 0, this.dCounter = 0
				},
				yearSelect: function(g, e) {
					return this.value && 0 === this.yCounter ? (g === parseInt(this.value.split("-")[0]) && this.$refs[e] && (this.selectYear(parseInt(this.value.split("-")[0]), "value"), this.yearIndex = this.$refs[e][0]), g === parseInt(this.value.split("-")[0])) : (g === this.tmpYear && this.$refs[e] && (this.yearIndex = this.$refs[e][0]), g === this.tmpYear)
				},
				monthSelect: function(g) {
					return this.value && 0 === this.mCounter ? (this.selectMonth(parseInt(this.value.split("-")[1]) - 1), g === parseInt(this.value.split("-")[1]) - 1) : g === this.tmpMonth
				},
				dateSelect: function(g) {
					var e = new Date(this.tmpYear, this.tmpMonth + 1, 0).getDate();
					return this.value && 0 === this.dCounter ? parseInt(this.value.split("-")[2]) > e ? (this.date = e, g.value === e && g.currentMonth) : (this.date = parseInt(this.value.split("-")[2]), g.value === parseInt(this.value.split("-")[2]) && g.currentMonth) : this.date > e ? (this.date = e, g.value === e && g.currentMonth) : g.value === this.date && g.currentMonth
				}
			},
			watch: {
				min: function(g) {
					var e = g.split("-");
					this.minYear = Number(e[0]), this.minMonth = Number(e[1]), this.minDate = Number(e[2])
				},
				max: function(g) {
					var e = g.split("-");
					this.maxYear = Number(e[0]), this.maxMonth = Number(e[1]), this.maxDate = Number(e[2])
				}
			},
			computed: {
				isDateDisabled: function() {
					return !0
				},
				dateList: function() {
					for (var g = this, e = new Date(this.tmpYear, this.tmpMonth + 1, 0).getDate(), I = Array.from({
						length: e
					}, function(g, e) {
						return {
							currentMonth: !0,
							value: e + 1
						}
					}), t = new Date(this.tmpYear, this.tmpMonth, 1).getDay(), n = new Date(this.tmpYear, this.tmpMonth, 0).getDate(), l = 0, C = t; l < C; l++) I = [{
						previousMonth: !0,
						value: n - l
					}].concat(I);
					for (var A = I.length, i = 1; A < 42; A++, i++) I[I.length] = {
						nextMonth: !0,
						value: i
					};
					return this.option && (I.forEach(function(e, t) {
						var n = void 0;
						n = e.previousMonth ? g.tmpMonth : e.currentMonth ? g.tmpMonth + 1 : g.tmpMonth + 2;
						var l = void 0;
						0 === n ? (l = g.tmpYear - 1, n = 12) : 13 === n ? (l = g.tmpYear + 1, n = 1) : l = g.tmpYear;
						var C = new Date(l, n - 1, e.value);
						I[t].date = C
					}), I.forEach(function(e, t) {
						I[t].isDateDisabled = g.option.disabledDate(e.date)
					})), I
				},
				yearList: function() {
					for (var g = [], e = 1900; e < 2100; e++) g.push(e);
					return g
				}
			},
			mounted: function() {
				var g = this;
				this.$nextTick(function() {
					"year" == g.type ? (g.panelMonthIsHide = !1, g.panelDayIsHide = !1, g.panelWidth = "240px", g.panelYearWidth = "240px", g.panelYearBoxWidth = "260px") : "month" == g.type ? (g.panelMonthIsHide = !0, g.panelDayIsHide = !1, g.panelWidth = "320px", g.panelYearWidth = "150px", g.panelYearBoxWidth = "170px", g.panelMonthWidth = "170px") : (g.panelMonthIsHide = !0, g.panelDayIsHide = !0, g.panelWidth = "", g.panelYearWidth = "", g.panelYearBoxWidth = "", g.panelMonthWidth = "");
					var e = g.min.split("-");
					g.minYear = Number(e[0]), g.minMonth = Number(e[1]), g.minDate = Number(e[2]);
					var I = g.max.split("-");
					g.maxYear = Number(I[0]), g.maxMonth = Number(I[1]), g.maxDate = Number(I[2]), g.value || g.$emit("input", "")
				})
			},
			beforeUpdate: function() {
				1 === this.panelState && this.yearIndex && 0 === this.yCounter && this.yearIndex.scrollIntoView(!0)
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(11);
		e.
	default = {
			name: "dialog-window",
			props: ["content", "closeContentModalRestPart"],
			data: function() {
				return {
					visible: !1,
					dialogContentResult: void 0,
					dialogBoxContentArgs: void 0,
					isRealClose: !0
				}
			},
			methods: {
				onAfterEnter: function() {
					var g = this.$refs.dialogContent;
					g && g.onNavigated && g.onNavigated()
				},
				onAfterLeave: function() {
					this.$emit("doRealClose", this.dialogContentResult)
				},
				onClose: function() {
					var g = this.$refs.dialogContent;
					g && (g.onClose && g.onClose(), this.dialogContentResult = g.result)
				},
				handleWrapperClick: function() {
					this.closeContentModalRestPart && t.a.close(this)
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-col",
			props: {
				span: {
					type: String,
				default:
					"24"
				},
				justify: {
					type: String,
				default:
					"center"
				},
				background: {
					type: String,
				default:
					""
				},
				offset: {
					type: String,
				default:
					""
				}
			},
			computed: {
				classObj: function() {
					var g = "aui-col-" + this.span,
						e = "aui-col-" + this.justify,
						I = "aui-col-offset-" + this.offset,
						t = {};
					return t[g] = !0, t[e] = !0, t[I] = !0, t
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-row"
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-loading"
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-number-input",
			data: function() {
				return {}
			},
			props: {
				align: {
					type: String,
				default:
					"left"
				},
				value: [String, Number],
				placeholder: {
					type: String,
				default:
					"请输入"
				},
				maxlength: Number,
				minlength: Number,
				max: Number,
				decimal: Number,
				disabled: {
					type: Boolean,
				default:
					!1
				},
				size: {
					type: String,
				default:
					"normal"
				},
				type: {
					type: String,
				default:
					"text",
					validator: function(g) {
						return "password" === g || "text" === g
					}
				}
			},
			mounted: function() {
				var g = this;
				this.$el.querySelector("input").onkeydown = function(e) {
					var I = e || window.event || arguments.callee.caller.arguments[0],
						t = e.target.value;
					if (I && I.key >= "0" && I.key <= "9" || "Backspace" == I.key || "." == I.key || "ArrowLeft" == I.key || "ArrowRight" == I.key) {
						if (("." == I.key && -1 != t.indexOf(".") || "" == t) && "." == I.key && I.preventDefault(), "Backspace" == I.key && Object.defineProperty(I, "key", {
							value: ""
						}), t = t.split(""), t.splice(I.target.selectionStart, I.target.selectionEnd - I.target.selectionStart, I.key), t = t.join(""), -1 != t.indexOf(".")) {
							t.split(".")[1].length > g.decimal && (t = t.split(""), t.splice(I.target.selectionStart, 1), t = t.join(""), "Backspace" != I.key && "ArrowLeft" != I.key && "ArrowRight" != I.key && I.preventDefault())
						}
						if (0 == I.target.selectionStart && "." == I.key && I.preventDefault(), t > g.max && "Backspace" != I.key && "ArrowLeft" != I.key && "ArrowRight" != I.key && I.preventDefault(), -1 != t.indexOf(".")) {
							var n = t.indexOf("."),
								l = t.split(".");
							l[0] + l[1] > g.max && I.target.selectionStart == n + 1 && "Backspace" == I.key && I.preventDefault()
						}
						I.target.selectionStart != I.target.selectionEnd && "Backspace" == I.key && I.preventDefault()
					} else I.preventDefault()
				}
			},
			methods: {
				focus: function() {
					this.$emit("focus")
				},
				blur: function() {
					this.$emit("blur")
				},
				handleInput: function(g) {
					var e = g.target.value;
					this.$emit("input", e), this.$emit("change", e)
				},
				handleTextInput: function(g) {
					"e" == g.data && g.preventDefault(), g.target.value.length + 1 > this.maxlength && g.preventDefault()
				}
			},
			computed: {
				className: function() {
					return this.sizeClass + " " + this.alignClass
				},
				sizeClass: function() {
					return "aui-number-input-" + this.size
				},
				alignClass: function() {
					return "aui-number-input-" + this.align
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-password",
			data: function() {
				return {
					keyCount: ""
				}
			},
			props: {
				type: String,
				number: {
					type: [Number, String],
				default:
					6
				}
			},
			mounted: function() {
				console.log(this.number)
			},
			methods: {
				addPsw: function() {
					this.keyCount < 8 && this.keyCount++
				},
				backPsw: function() {
					this.keyCount > 0 && this.keyCount--
				},
				clearPsw: function() {
					this.keyCount > 0 && (this.keyCount = 0)
				}
			},
			computed: {
				types: function() {
					if (this.type) return "aui-password--" + this.type
				},
				count: function() {
					if (this.number) return parseInt(this.number)
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(2);
		e.
	default = {
			name: "aui-radio",
			mixins: [t.a],
			data: function() {
				return {
					isFocus: !1
				}
			},
			props: {
				value: {},
				label: {},
				disabled: Boolean,
				name: String
			},
			methods: {
				focus: function() {
					this.isFocus = !0, this.$el.firstElementChild.querySelector("input").focus()
				},
				blur: function() {
					this.isFocus = !1, this.$el.firstElementChild.querySelector("input").blur()
				}
			},
			computed: {
				isGroup: function() {
					for (var g = this.$parent; g;) {
						if ("aui-radio-group" === g.$options.name) return this._radioGroup = g, !0;
						g = g.$parent
					}
					return !1
				},
				model: {
					get: function() {
						return this.isGroup ? this._radioGroup.value : this.value
					},
					set: function(g) {
						this.isGroup ? this.$dispatch("aui-radio-group", "input", [g]) : this.$emit("input", g)
					}
				},
				isDisabled: function() {
					return this.isGroup ? this._radioGroup.disabled || this.disabled : this.disabled
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(2);
		e.
	default = {
			name: "aui-radio-group",
			mixins: [t.a],
			props: {
				value: {},
				size: String,
				fill: String,
				textColor: String,
				disabled: Boolean
			},
			watch: {
				value: function(g) {
					this.$emit("change", g), this.$dispatch("AuiFormItem", "aui.form.change", [this.value])
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(2);
		e.
	default = {
			name: "aui-option",
			mixins: [t.a],
			props: {
				label: {
					validator: function(g) {
						if ("" === g || null === g || void 0 === g) throw Error("label is not defined");
						return !0
					}
				},
				value: {
					validator: function(g) {
						if ("" === g || null === g || void 0 === g) throw Error("value is not defined");
						return !0
					}
				}
			},
			data: function() {
				return {
					selected: !1,
					hover: !1
				}
			},
			created: function() {
				this.$dispatch("aui-select", "optionCreated", this)
			},
			methods: {
				changeItem: function() {
					this.$dispatch("aui-select", "selectedItem", {
						label: this.label,
						value: this.value
					})
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(10);
		e.
	default = {
			name: "aui-select",
			props: {
				name: String,
				placeholder: {
					type: String,
				default:
					"请选择"
				},
				disabled: {
					type: Boolean,
				default:
					!1
				},
				value: [String, Number],
				maxLines: {
					type: Number,
				default:
					5
				},
				size: {
					type: String,
				default:
					"normal"
				}
			},
			data: function() {
				return {
					label: "",
					isDown: !1,
					maxHeight: 0,
					isHas: !0
				}
			},
			directives: {
				clickoutside: t.a
			},
			created: function() {
				var g = this;
				1 == this.disabled && (this.isDown = !1), this.$on("selectedItem", function(e) {
					0 == g.disabled && (g.$emit("input", e.value), g.$emit("change", e.value))
				}), this.$on("optionCreated", function(e) {
					e.value === g.value && (e.selected = !0, g.label = e.label)
				})
			},
			methods: {
				onSelectFocusOut: function() {
					this.isDown = !1
				},
				toggleOption: function() {
					0 == this.disabled && (this.isDown = !this.isDown)
				}
			},
			mounted: function() {
				var g = this;
				this.$nextTick(function() {
					g.maxHeight = $(".aui-select").outerHeight(!0) * g.maxLines
				})
			},
			watch: {
				value: function(g) {
					var e = "";
					this.$children.forEach(function(I) {
						I.value === g ? (I.selected = !0, e = I.label) : I.selected = !1
					}), this.label = e
				}
			},
			computed: {
				className: function() {
					return this.isDown ? "focus aui-select-" + this.size : "aui-select-" + this.size
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-stepper",
			props: {
				space: [Number, String],
				direction: {
				default:
					"vertical"
				},
				active: Number,
				width: String,
				height: String
			},
			data: function() {
				return {
					steps: [],
					stepOffset: 0,
					alignCenter: Boolean,
					center: Boolean,
					finishStatus: "finish",
					processStatus: "process"
				}
			},
			watch: {
				active: function(g, e) {
					this.$emit("change", g, e)
				},
				steps: function(g) {
					g.forEach(function(g, e) {
						g.index = e
					})
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-stepper-item",
			props: {
				title: String,
				icon: String,
				description: String,
				status: String
			},
			data: function() {
				return {
					index: -1,
					lineStyle: {},
					internalStatus: "",
					mainOffset: 0
				}
			},
			beforeCreate: function() {
				this.$parent.steps.push(this)
			},
			beforeDestroy: function() {
				var g = this.$parent.steps,
					e = g.indexOf(this);
				e >= 0 && g.splice(e, 1)
			},
			computed: {
				currentStatus: function() {
					return this.status || this.internalStatus
				},
				prevStatus: function() {
					var g = this.$parent.steps[this.index - 1];
					return g ? g.currentStatus : "wait"
				},
				isCenter: function() {
					return this.$parent.center
				},
				isVertical: function() {
					return "vertical" === this.$parent.direction
				},
				isSimple: function() {
					return this.$parent.simple
				},
				isLast: function() {
					var g = this.$parent;
					return g.steps[g.steps.length - 1] === this
				},
				stepsCount: function() {
					return this.$parent.steps.length
				},
				space: function() {
					var g = this.isSimple,
						e = this.$parent.space;
					return g ? "" : e
				},
				style: function() {
					var g = {},
						e = this.$parent,
						I = e.steps.length,
						t = "number" == typeof this.space ? this.space + "px" : this.space ? this.space : (100 - (40 / parseInt(e.height) * 100 ? 40 / parseInt(e.height) * 100 : 0)) / (this.isCenter ? I - 1 : I) + "%";
					return "horizontal" === e.direction ? (g.flexBasis = t, this.isLast ? g.maxWidth = 100 / this.stepsCount + "%" : g.marginRight = -this.$parent.stepOffset + "px", this.mainOffset = -(this.title.length - 2) / 2 * 24 + "px") : this.isLast || (g.height = t), g
				}
			},
			methods: {
				updateStatus: function(g) {
					var e = this.$parent.$children[this.index - 1];
					g > this.index + 1 ? this.internalStatus = this.$parent.finishStatus : g === this.index + 1 && g < this.$parent.steps.length ? this.internalStatus = this.$parent.processStatus : g === this.$parent.steps.length ? this.internalStatus = this.$parent.finishStatus : this.internalStatus = "wait", e && e.calcProgress(this.internalStatus)
				},
				calcProgress: function(g) {
					var e = 100,
						I = {};
					g === this.$parent.processStatus ? e = 100 : "wait" === g && (e = 0), I.borderWidth = e ? "1px" : 0, this.lineStyle = I, "vertical" === this.$parent.direction ? this.$refs.line.style.height = 0 == e ? "0%" : "calc(100% + 2px)" : "horizontal" === this.$parent.direction && (this.$refs.line.style.width = 0 == e ? "0%" : "calc(100% + 2px)")
				}
			},
			mounted: function() {
				var g = this,
					e = this.$watch("index", function(I) {
						g.$watch("$parent.active", g.updateStatus, {
							immediate: !0
						}), e()
					})
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-tabs",
			props: {},
			data: function() {
				return {
					tabName: [],
					activeIndex: 0
				}
			},
			methods: {
				addPanes: function(g) {
					this.tabName.push(g), console.log(this.tabName)
				},
				activeItemClick: function(g) {
					this.tabName[g]._props.disabled || (this.$emit("tab-changed", g + 1, this.activeIndex + 1), this.activeIndex = g, this.activeItem(g))
				},
				activeItem: function(g) {
					this.$children.forEach(function(e, I) {
						return e.isActive = I === g
					})
				}
			},
			mounted: function() {
				console.log(this.$children), this.activeItem(this.activeIndex)
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-pane",
			props: {
				label: String,
				disabled: {
					type: Boolean,
				default:
					!1
				}
			},
			data: function() {
				return {
					isActive: !1
				}
			},
			mounted: function() {
				this.$parent.addPanes(this), this.isActive = this.$parent.$children.indexOf(this) === this.$parent.activeIndex
			},
			destroyed: function() {}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			props: {
				pageCount: Number,
				pageIndex: Number,
				showPagingCount: Number
			},
			computed: {
				numOffset: function() {
					return Math.floor((this.showPagingCount + 2) / 2) - 1
				},
				showJumpPrev: function() {
					return this.pageCount > this.showPagingCount + 2 && this.pageIndex > this.showPagingCount
				},
				showJumpNext: function() {
					return this.pageCount > this.showPagingCount + 2 && this.pageIndex <= this.pageCount - this.showPagingCount
				},
				pagingCounts: function() {
					var g = this,
						e = void 0,
						I = [],
						t = g.showJumpPrev,
						n = g.showJumpNext;
					if (t && !n) {
						e = g.pageCount - g.showPagingCount;
						for (var l = e; l < g.pageCount; l++) I.push(l)
					} else if (!t && n) for (var C = 2; C < g.showPagingCount + 2; C++) I.push(C);
					else if (t && n) for (var A = g.pageIndex - g.numOffset; A <= g.pageIndex + g.numOffset; A++) I.push(A);
					else for (var i = 2; i < g.pageCount; i++) I.push(i);
					return I
				}
			},
			methods: {
				jumpPage: function(g) {
					this.$emit("jumpPageHandler", g)
				}
			},
			created: function() {}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = (I(1), I(12)),
			n = I(81),
			l = I(82);
		e.
	default = {
			name: "aui-table-select",
			mixins: [l.a],
			directives: {
				"click-outside": n.a
			},
			data: function() {
				return {
					visible: !1,
					internalOptions: [],
					checkboxGroupList: [],
					textAlignPrefix: "v-select-items-li-a-",
					inputValue: ""
				}
			},
			props: {
				size: {
					type: String
				},
				width: {
					type: Number,
				default:
					90
				},
				maxWidth: {
					type: Number
				},
				isMultiple: {
					type: Boolean,
				default:
					!1
				},
				value: [Object, Array],
				placeholder: {
					type: String,
				default:
					"请选择",
					validator: function(g) {
						return g.length > 0
					}
				},
				textAlign: {
					type: String,
				default:
					"left"
				},
				min: {
					type: Number,
				default:
					0
				},
				max: {
					type: Number,
				default:
					999
				},
				isInput: {
					type: Boolean,
				default:
					!1
				}
			},
			computed: {
				sizeClass: function() {
					var g = t.a.sizeMaps[this.size] || t.a.sizeMapDefault;
					return g === t.a.sizeMaps.large ? " v-select--large" : g === t.a.sizeMaps.middle ? " v-select--middle" : " v-select--small"
				},
				getMaxWidth: function() {
					var g = 1 / 0,
						e = this.maxWidth,
						I = this.width;
					return e && e > 0 && e > I && (g = e), g
				}
			},
			methods: {
				init: function() {
					this.internalOptions = Object.assign([], this.value), this.checkboxGroupList = this.selectedLabels(), this.isInput && this.setInputValue()
				},
				setInputValue: function() {
					var g, e;
					e = this.selectedLabels(), Array.isArray(e) && e.length > 0 && (g = e.join()), this.inputValue = g
				},
				checkboxGroupChange: function() {
					this.selectOptionClick()
				},
				toggleItems: function() {
					var g = this;
					this.visible = !this.visible, this.visible && this.$nextTick(function(e) {
						g.dropDownClick()
					})
				},
				selectOptionClick: function(g) {
					var e = this;
					this.isMultiple ? this.internalOptions.map(function(g) {
						return e.checkboxGroupList.includes(g.label) ? g.selected = !0 : g.selected = !1, g
					}) : this.internalOptions.map(function(e) {
						return g.label === e.label ? e.selected = !0 : e.selected = !1, e
					}), this.isMultiple || this.toggleItems(), this.isInput && this.setInputValue(), this.$emit("input", this.internalOptions), this.$emit("change")
				},
				showSelectInfo: function() {
					var g;
					return g = this.selectedLabels(), Array.isArray(g) && g.length > 0 ? g.join() : this.placeholder
				},
				getTextAlignClass: function() {
					return this.textAlignPrefix + this.textAlign
				},
				selectedLabels: function() {
					return this.internalOptions.filter(function(g) {
						return g.selected
					}).map(function(g) {
						if (g.selected) return g.label
					})
				},
				clickOutside: function() {
					this.visible = !1
				},
				dropDownClick: function() {
					var g = this.$el.querySelector(".v-select-dt"),
						e = this.$el.querySelector(".v-select-items");
					return this.layerAdjustmentOnce(e, g, 2), !1
				},
				dropdownAdjust: function() {
					var g = this.$el.querySelector(".v-select-dt"),
						e = this.$el.querySelector(".v-select-items");
					this.layerAdjustmentBind(e, g, 2)
				}
			},
			created: function() {
				this.init()
			},
			mounted: function() {
				this.dropdownAdjust()
			},
			watch: {
				value: function(g) {
					this.init()
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(86),
			n = I(85),
			l = I(89),
			C = I(87),
			A = I(88),
			i = I(83),
			a = I(84),
			c = I(90),
			u = I(1),
			s = I(91),
			d = I.n(s),
			o = I(130),
			b = I.n(o),
			r = I(129),
			B = I.n(r);
		e.
	default = {
			name: "aui-table",
			mixins: [l.a, n.a, t.a, C.a, A.a, i.a, a.a, c.a],
			components: {
				tableEmpty: b.a,
				loading: B.a
			},
			data: function() {
				return {
					internalTableData: [],
					internalWidth: 0,
					internalHeight: 0,
					internalColumns: [],
					internalTitleRows: [],
					errorMsg: " V-Table error: ",
					maxWidth: 5e3,
					hasFrozenColumn: !1,
					hasBindScrollEvent: !1
				}
			},
			props: {
				width: [Number, String],
				minWidth: {
					type: Number,
					require: !1,
				default:
					50
				},
				height: {
					type: Number,
					require: !1
				},
				minHeight: {
					type: Number,
					require: !1,
				default:
					50
				},
				titleRowHeight: {
					type: Number,
					require: !1,
				default:
					38
				},
				isHorizontalResize: {
					type: Boolean,
					require: !1,
				default:
					!1
				},
				isVerticalResize: {
					type: Boolean,
					require: !1,
				default:
					!1
				},
				VerticalResizeOffset: {
					type: Number,
				default:
					0
				},
				titleBgColor: {
					type: String,
					require: !1,
				default:
					"#fff"
				},
				oddBgColor: {
					type: String,
				default:
					"#fff"
				},
				evenBgColor: {
					type: String
				},
				rowHeight: {
					type: Number,
					require: !1,
				default:
					40
				},
				multipleSort: {
					type: Boolean,
					require: !1,
				default:
					!0
				},
				columns: {
					type: Array,
					require: !0
				},
				titleRows: {
					type: Array,
					require: !0,
				default:


					function() {
						return []
					}
				},
				tableData: {
					type: Array,
					require: !0,
				default:


					function() {
						return []
					}
				},
				pagingIndex: Number,
				errorContent: {
					type: String,
				default:
					"暂无数据"
				},
				errorContentHeight: {
					type: Number,
				default:
					50
				},
				isLoading: {
					type: Boolean,
				default:
					!1
				},
				loadingContent: {
					type: String,
				default:
					'<span><i class="aui-icon-spinner animate-loading-23" style="font-size: 28px;opacity:0.6;"></i></span>'
				},
				rowHoverColor: {
					type: String
				},
				rowClickColor: {
					type: String
				},
				showVerticalBorder: {
					type: Boolean,
				default:
					!0
				},
				showHorizontalBorder: {
					type: Boolean,
				default:
					!0
				},
				columnCellClassName: Function,
				onRowClick: Function,
				rowMouseEnter: Function,
				rowMouseLeave: Function,
				cellEditDone: Function,
				cellEditFormatter: Function,
				cellMerge: Function
			},
			computed: {
				getTableHeight: function() {
					return this.isTableEmpty ? this.tableEmptyHeight : this.internalHeight
				},
				leftViewWidth: function() {
					var g = 0;
					return this.frozenCols && this.frozenCols.length > 0 && (g = this.frozenCols.reduce(function(g, e) {
						return g + e.width
					}, 0)), g
				},
				rightViewWidth: function() {
					return this.internalWidth - this.leftViewWidth - 2
				},
				bodyViewHeight: function() {
					return this.internalTitleRows.length > 0 ? this.internalHeight - this.titleRowHeight * (this.internalTitleRows.length + this.getTitleRowspanTotalCount) : this.internalHeight - this.titleRowHeight
				},
				titleRowsToSortInfo: function() {
					var g = [],
						e = this;
					return e.internalTitleRows.length > 0 && e.internalTitleRows.filter(function(e) {
						e.filter(function(e, I) {
							"string" == typeof e.orderBy && 1 === e.fields.length && (e.field = e.fields[0], g.push(e))
						})
					}), g
				},
				totalColumnsWidth: function() {
					return this.internalColumns.reduce(function(g, e) {
						return e.width ? g + e.width : g
					}, 0)
				},
				getColumnsFields: function() {
					return this.internalColumns.map(function(g) {
						return g.field
					})
				},
				getNoFrozenColumnsFields: function() {
					return this.internalColumns.filter(function(g) {
						return !g.isFrozen
					}).map(function(g) {
						return g.field
					})
				},
				getFrozenColumnsFields: function() {
					return this.internalColumns.filter(function(g) {
						return g.isFrozen
					}).map(function(g) {
						return g.field
					})
				}
			},
			methods: {
				customCompFunc: function(g) {
					this.$emit("on-custom-comp", g)
				},
				setRowHoverColor: function(g) {
					if (this.rowHoverColor && this.rowHoverColor.length > 0 && g) return {
						"background-color": this.rowHoverColor
					}
				},
				setRowClickColor: function(g) {
					if (this.rowClickColor && this.rowClickColor.length > 0 && g) return {
						"background-color": this.rowClickColor
					}
				},
				trBgColor: function(g) {
					if (this.evenBgColor && this.evenBgColor.length > 0 || this.oddBgColor && this.oddBgColor.length > 0) return g % 2 == 0 ? {
						"background-color": this.evenBgColor
					} : {
						"background-color": this.oddBgColor
					}
				},
				handleMouseEnter: function(g) {
					this.internalTableData[g].__mouseenter__ = !0, this.rowMouseEnter && this.rowMouseEnter(g)
				},
				handleMouseOut: function(g) {
					this.internalTableData[g].__mouseenter__ = !1, this.rowMouseLeave && this.rowMouseLeave(g)
				},
				setColumnCellClassName: function(g, e, I) {
					return this.columnCellClassName && this.columnCellClassName(g, e, I)
				},
				onCellClick: function(g, e, I) {
					if (Array.isArray(this.internalTableData) && this.internalTableData.length > 0) {
						var t = this.internalTableData.find(function(g) {
							return g.__columnCellClick__
						});
						t && (t.__columnCellClick__ = !1), this.internalTableData[g].__columnCellClick__ = !0
					}
					this.onRowClick && this.onRowClick(g, e, I)
				},
				titleColumnWidth: function(g) {
					var e = 0;
					if (Array.isArray(g)) {
						e = this.internalColumns.filter(function(e, I) {
							return g.some(function(g) {
								return g === e.field
							})
						}).reduce(function(g, e) {
							return g + e.width
						}, 0)
					} else console.error(this.errorMsg + "the fields attribute must be a array in titleRows");
					return e
				},
				titleColumnHeight: function(g) {
					return g && g > 0 ? this.titleRowHeight * g : this.titleRowHeight
				},
				overflowTitle: function(g, e) {
					var I = "";
					if ("function" == typeof e.formatter) {
						var t = e.formatter(g, -1);
						I = u.a.isHtml(t) ? "" : t
					} else I = g[e.field];
					return I
				},
				getTotalColumnsHeight: function() {
					return (this.internalTitleRows && this.internalTitleRows.length > 0 ? this.titleRowHeight * this.internalTitleRows.length : this.titleRowHeight) + this.internalTableData.length * this.rowHeight + 1
				},
				initTableWidth: function() {
					this.internalWidth = this.isHorizontalResize ? this.maxWidth : this.width
				},
				initColumns: function() {
					this.internalHeight = this.height, this.internalColumns = Array.isArray(this.columns) ? d()(this.columns) : [], this.internalTitleRows = Array.isArray(this.titleRows) ? d()(this.titleRows) : [], this.initResizeColumns(), this.hasFrozenColumn = this.internalColumns.some(function(g) {
						return g.isFrozen
					}), this.initTableWidth();
					var g = this,
						e = 0;
					g.internalWidth && g.internalWidth > 0 && g.internalColumns.map(function(I) {
						I.width && I.width > 0 || (e++, g.isHorizontalResize ? console.error(g.errorMsg + "If you are using the isHorizontalResize property,Please set the value for each column's width") : I.width = g.internalWidth - g.totalColumnsWidth - 2)
					}), e > 1 && console.error(this.errorMsg + "Only allow one column is not set width")
				},
				initView: function() {
					var g = this;
					g.internalWidth && g.internalWidth > 0 || g.columns && g.columns.length > 0 && (g.internalWidth = g.columns.reduce(function(g, e) {
						return g + e.width
					}, 0) + 2);
					var e = g.getTotalColumnsHeight();
					g.height && g.height > 0 ? g.height > e ? g.$el && g.$nextTick(function(I) {
						var t = g.$el.querySelector(".v-table-rightview .v-table-body"),
							n = g.$el.querySelector(".v-table-rightview .v-table-body .v-table-btable"),
							l = t.clientWidth + 2 < n.clientWidth,
							C = 0;
						l && (C = u.a.getScrollbarWidth(), e += C), g.internalHeight = e
					}) : g.height <= e && (g.internalHeight = g.height) : g.internalHeight = e
				},
				initInternalTableData: function(g) {
					var e = Array.isArray(this.tableData) ? d()(this.tableData) : [];
					return e.length > 0 && e.map(function(g) {
						g.__mouseenter__ = !1, g.__columnCellClick__ = !1
					}), e
				},
				resize: function() {
					var g = this;
					this.$nextTick(function(e) {
						g.tableResize()
					})
				}
			},
			created: function() {
				var g = this;
				this.internalTableData = this.initInternalTableData(this.tableData), Array.isArray(this.columns) && this.columns.length > 0 && this.initColumns(), this.$nextTick(function(e) {
					g.initView()
				}), this.resize()
			},
			mounted: function() {
				this.tableEmpty(), Array.isArray(this.tableData) && this.tableData.length > 0 && (this.scrollControl(), this.hasBindScrollEvent = !0), this.singelSortInit()
			},
			watch: {
				columns: function(g) {
					this.initColumns()
				},
				titleRows: function(g) {
					this.initColumns()
				},
				tableData: function(g) {
					this.internalTableData = this.initInternalTableData(g), this.tableEmpty(), Array.isArray(g) && g.length > 0 && (this.initView(), this.hasBindScrollEvent || this.scrollControl()), this.resize()
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			props: {
				loadingContent: [String],
				width: [Number, String],
				height: [Number, String]
			},
			methods: {
				setPosition: function() {
					var g = this.$el,
						e = this.$el.querySelector(".v-table-loading-content");
					e.style.top = g.clientHeight / 2 - e.clientHeight / 2 + "px"
				}
			},
			mounted: function() {
				var g = this;
				this.$nextTick(function(e) {
					g.setPosition()
				})
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		I(1);
		e.
	default = {
			props: {
				titleHeight: [Number, String],
				contentHeight: [Number, String],
				width: [Number, String],
				totalColumnsWidth: [Number, String],
				errorContent: {
					type: [String]
				},
				isLoading: [Boolean]
			},
			computed: {
				getCurrentContent: function() {
					var g = "";
					return this.isLoading || (g = this.errorContent), g
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-text-area",
			data: function() {
				return {}
			},
			methods: {
				focus: function() {
					this.$el.querySelector("textarea").focus()
				},
				blur: function() {
					this.$el.querySelector("textarea").blur()
				},
				handleInput: function(g) {
					var e = g.target.value;
					this.$emit("input", e), this.$emit("change", e)
				},
				handleFocus: function(g) {
					this.$emit("focus", g)
				},
				handleBlur: function(g) {
					this.$emit("blur", g)
				}
			},
			props: {
				value: [String, Number],
				placeholder: {
					type: String,
				default:
					"请输入"
				},
				disabled: {
					type: Boolean,
				default:
					!1
				},
				maxlength: [String, Number]
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-text-input",
			data: function() {
				return {}
			},
			methods: {
				focus: function() {
					this.$emit("focus")
				},
				blur: function() {
					this.$emit("blur")
				},
				handleInput: function(g) {
					var e = g.target.value;
					this.$emit("input", e), this.$emit("change", e)
				}
			},
			props: {
				align: {
					type: String,
				default:
					"left"
				},
				value: [String, Number],
				placeholder: {
					type: String,
				default:
					"请输入"
				},
				maxlength: Number,
				minlength: Number,
				disabled: {
					type: Boolean,
				default:
					!1
				},
				size: {
					type: String,
				default:
					"normal"
				},
				type: {
					type: String,
				default:
					"text",
					validator: function(g) {
						return "password" === g || "text" === g
					}
				}
			},
			computed: {
				className: function() {
					return "aui-text-input-" + this.size + " aui-text-input-" + this.align
				},
				sizeClass: function() {
					return "aui-text-input-" + this.size
				},
				alignClass: function() {
					return "aui-text-input-" + this.align
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-text",
			props: {
				align: {
					type: String,
				default:
					"left"
				}
			},
			computed: {
				values: function() {
					if (this.$slots.
				default) return this.$slots.
				default [0].text.split("")
				},
				alignClass: function() {
					return "aui-text-box-" + this.align
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "tile-block",
			props: {
				tileBlockData: Object,
				themeColor: String,
				tileColumnIndex: Number,
				tileGroupIndex: Number
			},
			data: function() {
				return {
					enabledColor: ""
				}
			},
			mounted: function() {
				this.tileBlockData.isEnabled ? this.enabledColor = "" : this.enabledColor = "grayscale(1)"
			},
			methods: {
				clickItem: function() {
					this.$emit("itemClicked", [this.tileColumnIndex, this.tileGroupIndex, this.tileBlockData])
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(139),
			n = I.n(t);
		e.
	default = {
			name: "tile-column",
			props: {
				tileColumnData: Array,
				isOnlyShowOne: Boolean,
				tileSize: Number,
				tileSpace: Number,
				tileColumnIndex: Number,
				isExpanded: Boolean
			},
			data: function() {
				return {
					currentGroupIndex: void 0
				}
			},
			components: {
				TileGroup: n.a
			},
			methods: {
				onMenuItemClicked: function(g) {
					this.$emit("itemClicked", g)
				},
				showMore: function(g) {
					this.$emit("widthChanged", g), this.currentGroupIndex = g[1]
				},
				showLess: function(g) {
					this.$emit("widthChanged", g), this.currentGroupIndex = void 0
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(138),
			n = I.n(t),
			l = I(4);
		e.
	default = {
			name: "tile-dialog",
			props: {
				dialogBoxContentArgs: Object
			},
			data: function() {
				return {
					row: 2
				}
			},
			components: {
				DialogList: n.a
			},
			computed: {
				col: function() {
					if (this.dialogBoxContentArgs.children) return Math.ceil(this.dialogBoxContentArgs.children.length / this.row)
				}
			},
			methods: {
				onMenuItemClicked: function(g) {
					this.result = g[2], l.a.close(this)
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "tile-dialog-item",
			props: {
				imgSrc: String,
				title: String,
				isEnabled: Boolean
			},
			data: function() {
				return {}
			},
			methods: {
				clickItem: function() {
					this.isEnabled && this.$emit("itemClicked")
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(137),
			n = I.n(t);
		e.
	default = {
			name: "tile-dialog-list",
			props: {
				tileListData: Array,
				width: String,
				height: String,
				tileColumnIndex: Number,
				tileGroupIndex: Number
			},
			data: function() {
				return {}
			},
			components: {
				TileItem: n.a
			},
			methods: {
				onMenuItemClicked: function(g, e, I) {
					this.$emit("itemClicked", [g, e, I])
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(140),
			n = I.n(t),
			l = I(142),
			C = I.n(l),
			A = I(134),
			i = I.n(A);
		e.
	default = {
			name: "tile-group",
			props: {
				tileGroupData: Object,
				isOnlyShowOne: Boolean,
				tileSize: Number,
				tileSpace: Number,
				tileColumnIndex: Number,
				tileGroupIndex: Number,
				isExpanded: Boolean
			},
			data: function() {
				return {
					row: this.tileGroupData.layout[0],
					col: this.tileGroupData.layout[1],
					message: "更多",
					iconSrc: I(7),
					isShowMore: !0,
					overCol: 0
				}
			},
			components: {
				TileGroupHeader: n.a,
				TileList: C.a,
				TileBlock: i.a
			},
			computed: {
				isShow: function() {
					return 1 !== this.tileGroupData.layout[0] || 1 !== this.tileGroupData.layout[1]
				},
				overWidth: function() {
					return 0 !== this.overCol
				},
				changeWidth: function() {
					return (this.tileSize + this.tileSpace) * this.col - this.tileSpace
				}
			},
			watch: {
				isExpanded: function() {
					this.isOnlyShowOne && (this.isExpanded ? (this.col = this.tileGroupData.layout[1] + this.overCol, this.message = "收起", this.iconSrc = I(14), this.isShowMore = !1) : (this.col = this.tileGroupData.layout[1], this.message = "更多", this.iconSrc = I(7), this.isShowMore = !0))
				}
			},
			methods: {
				showMore: function(g) {
					this.$emit("showMore", g), this.isOnlyShowOne || (this.col = this.tileGroupData.layout[1] + this.overCol, this.message = "收起", this.iconSrc = I(14), this.isShowMore = !1)
				},
				showLess: function(g) {
					this.$emit("showLess", g), this.isOnlyShowOne || (this.col = this.tileGroupData.layout[1], this.message = "更多", this.iconSrc = I(7), this.isShowMore = !0)
				},
				receiveMsgFromChild: function(g) {
					this.overCol = g[0]
				},
				onMenuItemClicked: function(g) {
					this.$emit("itemClicked", g)
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "tile-group-header",
			props: {
				themeColor: String,
				title: String,
				overWidth: Boolean,
				tileColumnIndex: Number,
				tileGroupIndex: Number,
				isShowMore: Boolean,
				message: String,
				iconSrc: String
			},
			data: function() {
				return {}
			},
			methods: {
				changeShow: function() {
					this.isShowMore ? this.$emit("moreClicked", [this.tileColumnIndex, this.tileGroupIndex]) : this.$emit("lessClicked", [this.tileColumnIndex, this.tileGroupIndex, "lessClicked"])
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "tile-item",
			props: {
				imgSrc: String,
				title: String,
				isEnabled: Boolean,
				tileSize: Number,
				tileSpace: Number,
				size: String
			},
			data: function() {
				return {
					itemWidth: void 0,
					itemHeight: void 0
				}
			},
			created: function() {
				"normal" === this.size ? (this.itemWidth = this.tileSize, this.itemHeight = this.tileSize) : "wide" === this.size ? (this.itemWidth = 2 * this.tileSize + this.tileSpace, this.itemHeight = this.tileSize) : "smallWide" === this.size ? (this.itemWidth = this.tileSize, this.itemHeight = (this.tileSize - this.tileSpace) / 2) : "small" === this.size && (this.itemWidth = (this.tileSize - this.tileSpace) / 2, this.itemHeight = (this.tileSize - this.tileSpace) / 2)
			},
			computed: {
				isShowImg: function() {
					return !("smallWide" === this.size || "small" === this.size)
				},
				typeIcon: function() {
					return this.size + "-tile-item-icon"
				},
				typeText: function() {
					return this.size + "-tile-item-text"
				}
			},
			methods: {
				clickItem: function() {
					this.isEnabled && this.$emit("itemClicked")
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(141),
			n = I.n(t);
		e.
	default = {
			name: "tile-list",
			props: {
				tileListData: Array,
				width: Number,
				height: String,
				tileColumnIndex: Number,
				tileGroupIndex: Number,
				tileSize: Number,
				tileSpace: Number,
				row: Number,
				col: Number
			},
			data: function() {
				return {
					parentWidth: 0,
					parentHeight: 0,
					xValue: 0,
					yValue: 0,
					currentRow: 1,
					standardWeight: 4,
					normalWeight: 0,
					wideWeight: 0,
					smallWideWeight: 0,
					smallWeight: 0,
					countStage: 0,
					countSum: 0,
					weight: 0,
					page: 0,
					flag: !0,
					overCol: 0
				}
			},
			components: {
				TileItem: n.a
			},
			created: function() {
				this.normalWeight = this.standardWeight, this.wideWeight = 2 * this.standardWeight, this.smallWideWeight = this.standardWeight / 2, this.smallWeight = this.standardWeight / 4
			},
			mounted: function() {
				var g = this.$refs.items;
				this.setParentSize(), this.setItemPosition(g), this.sendMsgToParent()
			},
			methods: {
				setParentSize: function() {
					this.parentWidth = (this.tileSize + this.tileSpace) * this.col, this.parentHeight = this.tileSize * this.row + this.tileSpace * (this.row + 1)
				},
				getItemWidth: function(g) {
					return parseInt(window.getComputedStyle(g).width)
				},
				getItemHeight: function(g) {
					return parseInt(window.getComputedStyle(g).height)
				},
				setItemWeight: function(g) {
					var e = g.$props.size;
					"normal" === e ? this.weight = this.normalWeight : "wide" === e ? this.weight = this.wideWeight : "smallWide" === e ? this.weight = this.smallWideWeight : "small" === e && (this.weight = this.smallWeight)
				},
				setItemPosition: function(g) {
					for (var e = 0; e < g.length; e++) {
						var I = g[e].$el,
							t = this.getItemWidth(I),
							n = this.getItemHeight(I);
						if (this.setItemWeight(g[e]), 0 === this.countStage) I.style.left = 0, I.style.top = this.tileSpace + "px", t < this.tileSize ? this.xValue = this.tileSize : this.xValue = t, this.countStage = this.weight, this.countSum = this.col * this.standardWeight;
						else {
							var l = g[e - 1].$el,
								C = this.getItemWidth(l),
								A = this.getItemHeight(l);
							if (this.countStage + this.weight <= this.standardWeight) {
								1 === this.countStage ? this.weight === this.smallWeight ? (I.style.left = this.xValue - t + "px", I.style.top = this.yValue + this.tileSpace + "px", this.countStage += this.weight) : this.weight === this.smallWideWeight && (I.style.left = this.xValue - t + "px", I.style.top = this.yValue + this.tileSpace + A + this.tileSpace + "px", this.countStage = 4) : 2 === this.countStage ? this.weight !== this.smallWeight && this.weight !== this.smallWideWeight || (I.style.left = this.xValue - C + "px", I.style.top = this.yValue + this.tileSpace + A + this.tileSpace + "px", this.countStage += this.weight) : 3 === this.countStage && this.weight === this.smallWeight && (I.style.left = this.xValue - t + "px", I.style.top = this.yValue + this.tileSpace + n + this.tileSpace + "px", this.countStage += this.weight);
								continue
							}
							var i = void 0;
							if (i = this.overCol ? (this.tileSize + this.tileSpace) * this.overCol : this.parentWidth, this.xValue - this.parentWidth * this.page + this.tileSpace + t <= i) I.style.left = this.xValue + this.tileSpace + "px", I.style.top = this.yValue + this.tileSpace + "px", t < this.tileSize ? this.xValue += this.tileSpace + this.tileSize : this.xValue += this.tileSpace + t;
							else {
								if (this.flag && this.countSum >= this.row * this.col * this.standardWeight) {
									this.flag = !1;
									for (var a = this.weight, c = 0, u = e; u < g.length; u++) this.setItemWeight(g[u]), c += this.weight;
									this.overCol = Math.ceil(c / this.row / this.standardWeight), this.weight = a, this.page++, this.currentRow = 0
								}
								this.flag ? I.style.left = 0 : I.style.left = this.parentWidth + "px", I.style.top = this.tileSize * this.currentRow + this.tileSpace * (this.currentRow + 1) + "px", t < this.tileSize ? this.xValue = this.parentWidth * this.page + this.tileSize : this.xValue = this.parentWidth * this.page + t, this.yValue = (this.tileSpace + this.tileSize) * this.currentRow, this.currentRow++, this.countSum = this.col * this.standardWeight * this.currentRow
							}
							this.countStage = this.weight
						}
					}
					this.parentWidth -= this.tileSpace
				},
				sendMsgToParent: function() {
					this.$emit("layoutFinished", [this.overCol])
				},
				onMenuItemClicked: function(g, e, I) {
					this.$emit("itemClicked", [g, e, I])
				}
			}
		}
	}, function(g, e, I) {
		"use strict";

		function t(g) {
			return function() {
				var e = g.apply(this, arguments);
				return new Promise(function(g, I) {
					function t(n, l) {
						try {
							var C = e[n](l),
								A = C.value
						} catch (g) {
							return void I(g)
						}
						if (!C.done) return Promise.resolve(A).then(function(g) {
							t("next", g)
						}, function(g) {
							t("throw", g)
						});
						g(A)
					}
					return t("next")
				})
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = I(94),
			l = I.n(n),
			C = I(135),
			A = I.n(C),
			i = I(136),
			a = I.n(i),
			c = I(4);
		e.
	default = {
			name: "aui-tile-menu",
			props: {
				tileMenuData: Array,
				tileMenuConfig: Array
			},
			data: function() {
				return {
					result: void 0,
					currentColumnIndex: void 0,
					isOnlyShowOne: this.tileMenuConfig[0].isOnlyShowOne,
					tileSize: this.tileMenuConfig[0].tileSize,
					tileSpace: this.tileMenuConfig[0].tileSpace
				}
			},
			components: {
				TileColumn: A.a
			},
			methods: {
				onMenuItemClicked: function() {
					function g(g) {
						return e.apply(this, arguments)
					}
					var e = t(l.a.mark(function g(e) {
						var I, t, n;
						return l.a.wrap(function(g) {
							for (;;) switch (g.prev = g.next) {
							case 0:
								if (I = e[0], t = e[1], n = e[2], !n.children) {
									g.next = 10;
									break
								}
								return g.next = 6, c.a.showAwait(a.a, {
									dialogBoxContentArgs: {
										themeColor: this.tileMenuData[I][t].themeColor,
										children: n.children,
										title: n.tradeName,
										timerType: "shared"
									},
									closeContentModalRestPart: !0
								});
							case 6:
								this.result = g.sent, this.result && this.$emit("itemClicked", this.result), g.next = 11;
								break;
							case 10:
								this.$emit("itemClicked", n);
							case 11:
							case "end":
								return g.stop()
							}
						}, g, this)
					}));
					return g
				}(),
				moveIntoView: function(g) {
					var e = g[0],
						I = g[1],
						t = parseInt(window.getComputedStyle(this.$refs.tileMenuWrapper).left),
						n = this.$refs.tileColumns[e].$el.getBoundingClientRect().left,
						l = parseInt(window.getComputedStyle(this.$refs.tileColumns[e].$el).width);
					if (g[2]) {
						if (this.currentColumnIndex = void 0, n < 0) {
							var C = this.$refs.tileMenu.scrollLeft + n - t;
							$(".tile-menu").animate({
								scrollLeft: C
							}, 600)
						}
					} else if (this.currentColumnIndex = g[0], this.isOnlyShowOne) {
						for (var A = 0, i = 0, a = 0; a <= e; a++) A += parseInt(window.getComputedStyle(this.$refs.tileColumns[a].$el).width), i = i + 184 * this.tileMenuData[a][0].layout[1] - 1;
						var c = this.$refs.tileMenu.scrollLeft + n - A + i - t;
						$(".tile-menu").animate({
							scrollLeft: c
						}, 600)
					} else if (n < 0 || n > t) {
						var u = this.$refs.tileMenu.scrollLeft + n - l + (184 * this.tileMenuData[e][I].layout[1] - 1) - t;
						$(".tile-menu").animate({
							scrollLeft: u
						}, 600)
					}
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.
	default = {
			name: "aui-tip",
			data: function() {
				return {}
			},
			props: {
				size: {
					type: String,
				default:
					"normal"
				}
			},
			computed: {
				sizeClass: function() {
					return "aui-tip-" + this.size
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var t = I(5),
			n = I.n(t),
			l = I(25),
			C = I(33),
			A = I(16),
			i = I(32),
			a = I(18),
			c = I(22),
			u = I(24),
			s = I(29),
			d = I(23),
			o = I(19),
			b = I(27),
			r = I(26),
			B = I(4),
			m = I(28),
			G = I(30),
			h = I(37),
			Z = I(3),
			W = I(31),
			V = I(21),
			p = I(36),
			X = I(34),
			F = I(17),
			y = I(35),
			Q = I(20);
		I.d(e, "Validator", function() {
			return h.a
		}), I.d(e, "Utils", function() {
			return Z.a
		}), I.d(e, "Dialog", function() {
			return B.a
		});
		var N = [C.a, l.a, A.a, i.a, a.a, s.a, s.b, d.a, d.b, o.a, o.b, b.a, b.b, r.a, m.a, m.b, G.a, G.b, c.a, u.a, W.a, W.b, W.c, V.a, p.a, X.a, F.a, y.a, Q.a],
			v = function() {
				console.log("installing components:"), N.forEach(function(g) {
					console.log("installing component", g.name), n.a.component(g.name, g)
				})
			};
		e.
	default = {
			install: v
		}
	}, function(g, e, I) {
		"use strict";
		e.a = {
			bind: function(g, e, I) {
				if ("function" != typeof e.value) {
					var t = "in [clickoutside] directives, provided expression '" + e.expression + "' is not a function ",
						n = I.context.name;
					n && (t += "in " + n), console.error(t)
				}
				var l = function(I) {
						if (g.contains(I.target) || g === I.target) return !1;
						e.value(I)
					};
				g.__clickOutSide__ = l, document.addEventListener("click", l, !0)
			},
			unbind: function(g) {
				document.removeEventListener("click", g.__clickOutSide__, !0), g.__clickOutSide__ = null
			}
		}
	}, function(g, e, I) {
		"use strict";
		var t = I(1),
			n = [];
		e.a = {
			methods: {
				layerAdjustmentOnce: function(g, e, I) {
					var n = t.a.getViewportOffset(e),
						l = void 0 !== g.getBoundingClientRect ? g.getBoundingClientRect().height : g.clientHeight;
					n.bottom < l ? g.style.top = n.top - l - I + "px" : g.style.top = n.top + e.clientHeight + I + "px", g.style.left = n.left + "px"
				},
				layerAdjustmentBind: function(g, e, I) {
					var l = this,
						C = function(t) {
							l.layerAdjustmentOnce(g, e, I)
						};
					n.push(C), t.a.bind(window, "scroll", C)
				}
			},
			beforeDestroy: function() {
				t.a.unbind(window, "scroll", n)
			}
		}
	}, function(g, e, I) {
		"use strict";
		var t = I(1);
		e.a = {
			methods: {
				cellEdit: function(g, e, I, n, l) {
					for (var C = g.target, A = this, i = void 0, a = void 0, c = void 0, u = void 0, s = void 0, d = ""; C.className && -1 === C.className.indexOf("v-table-body-cell") || !C.className;) C = C.parentNode;
					if (C.classList.contains("cell-editing")) return !1;
					if (C.classList.add("cell-editing"), i = C.innerText, C.style.textAlign && (s = C.style.textAlign), C.innerHTML = "<input type='text' value=\"" + i + "\" class='cell-edit-input' style='width:100%;height: 100%;text-align: " + s + ";'>", a = C.querySelector(".cell-edit-input"), a.focus(), c = a.value.length, document.selection) {
						var o = a.createTextRange();
						o.moveStart("character", c), o.collapse(), o.select()
					} else "number" == typeof a.selectionStart && "number" == typeof a.selectionEnd && (a.selectionStart = a.selectionEnd = c);
					u = function(g) {
						if (void 0 === g.keyCode || 13 == g.keyCode) {
							if (!C.classList.contains("cell-editing")) return !1;
							C.classList.remove("cell-editing"), d = A.cellEditFormatter && A.cellEditFormatter(this.value, i, I, n, l), C.innerHTML = d && d.length > 0 ? d : this.value, e(this.value, i), t.a.unbind(a, "blur", u), t.a.unbind(a, "keydown", u)
						}
					}, t.a.bind(a, "blur", u), t.a.bind(a, "keydown", u)
				},
				cellEditClick: function(g, e, I, t, n) {
					if (e) {
						var l = this,
							C = function(g, e) {
								l.cellEditDone(g, e, n, I, t)
							};
						this.cellEdit(g, C, n, I, t)
					}
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		e.a = {
			data: function() {
				return {
					skipRenderCells: []
				}
			},
			methods: {
				cellMergeInit: function(g, e, I, t) {
					if (-1 !== this.skipRenderCells.indexOf(g + "-" + e)) return !1;
					var n = this.cellMerge && this.cellMerge(g, I, e);
					return n && (n.colSpan && n.colSpan > 1 || n.rowSpan && n.rowSpan > 1) && this.setSkipRenderCells(n.colSpan, n.rowSpan, g, e, t), !0
				},
				setSkipRenderCells: function(g, e, I, t, n) {
					var l = n ? this.getFrozenColumnsFields : this.getNoFrozenColumnsFields,
						C = "",
						A = void 0,
						i = void 0,
						a = void 0,
						c = void 0;
					i = A = l.indexOf(t), g && g > 1 && (i = A + g - 1), c = a = I, e && e > 1 && (c = I + e - 1);
					for (var u = A; u <= i; u++) for (var s = a; s <= c; s++) u == A && s == a || (C = s + "-" + l[u], -1 === this.skipRenderCells.indexOf(C) && this.skipRenderCells.push(C))
				},
				setColRowSpan: function(g, e, I) {
					var t = {
						colSpan: "",
						rowSpan: ""
					},
						n = this.cellMerge && this.cellMerge(g, I, e);
					return n && (t = {
						colSpan: n.colSpan ? n.colSpan : "",
						rowSpan: n.rowSpan ? n.rowSpan : ""
					}), t
				},
				isCellMergeRender: function(g, e, I) {
					var t = this.cellMerge && this.cellMerge(g, I, e);
					return !(!t || !(t.colSpan && t.colSpan > 1 || t.rowSpan && t.rowSpan > 1))
				},
				getRowHeightByRowSpan: function(g, e, I) {
					var t = this.cellMerge && this.cellMerge(g, I, e);
					return t && t.rowSpan && t.rowSpan > 1 ? this.rowHeight * t.rowSpan : this.rowHeight
				},
				getRowWidthByColSpan: function(g, e, I) {
					var t = void 0,
						n = void 0,
						l = this.getColumnsFields,
						C = this.cellMerge && this.cellMerge(g, I, e),
						A = C.colSpan,
						i = 0;
					if (C && A && A >= 1) {
						n = l.indexOf(e), t = n + A - 1;
						for (var a = n; a <= t; a++) this.internalColumns.forEach(function(g) {
							l[a] === g.field && (i += g.width)
						})
					}
					return i
				},
				cellMergeContentType: function(g, e, I) {
					var t = {
						isComponent: !1,
						isContent: !1
					},
						n = this.cellMerge && this.cellMerge(g, I, e);
					return n && (n.componentName && "string" == typeof n.componentName && n.componentName.length > 0 ? t.isComponent = !0 : n.content && n.content.length > 0 && (t.isContent = !0)), t
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		e.a = {
			computed: {
				frozenCols: function() {
					return this.internalColumns.filter(function(g) {
						return !0 === g.isFrozen
					})
				},
				noFrozenCols: function() {
					return this.internalColumns.filter(function(g) {
						return !0 !== g.isFrozen
					})
				},
				frozenTitleCols: function() {
					var g = [];
					if (this.internalTitleRows.length > 0) {
						var e = this.frozenCols.map(function(g) {
							return g.field
						});
						this.internalTitleRows.forEach(function(I) {
							var t = I.filter(function(g) {
								if (Array.isArray(g.fields) && g.fields.every(function(g) {
									return -1 !== e.indexOf(g)
								})) return !0
							});
							t.length > 0 && g.push(t)
						})
					}
					return g
				},
				noFrozenTitleCols: function() {
					var g = [];
					if (this.internalTitleRows.length > 0) {
						var e = this.noFrozenCols.map(function(g) {
							return g.field
						});
						this.internalTitleRows.forEach(function(I) {
							var t = I.filter(function(g) {
								if (Array.isArray(g.fields)) return g.fields.every(function(g) {
									return -1 !== e.indexOf(g)
								})
							});
							t.length > 0 && g.push(t)
						})
					}
					return g
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		var t = I(1);
		e.a = {
			methods: {
				body1Mousewheel: function(g) {
					var e = this.$el.querySelector(".v-table-rightview .v-table-body"),
						I = g.originalEvent || window.event || g,
						t = I.wheelDelta || -1 * I.detail;
					e.scrollTop = e.scrollTop - t
				},
				body2Scroll: function(g) {
					var e = this.$el.querySelector(".v-table-rightview"),
						I = this.$el.querySelector(".v-table-leftview .v-table-body"),
						t = this.$el.querySelector(".v-table-rightview .v-table-body");
					I && (I.scrollTop = t.scrollTop), e.querySelector(".v-table-header").scrollLeft = t.scrollLeft
				},
				scrollControl: function() {
					var g = this;
					this.$nextTick(function(e) {
						var I = g.$el.querySelector(".v-table-leftview .v-table-body"),
							n = g.$el.querySelector(".v-table-rightview .v-table-body");
						t.a.bind(I, "mousewheel", g.body1Mousewheel), t.a.bind(n, "scroll", g.body2Scroll)
					})
				}
			},
			beforeDestroy: function() {
				var g = this.$el.querySelector(".v-table-leftview .v-table-body"),
					e = this.$el.querySelector(".v-table-rightview .v-table-body");
				t.a.unbind(g, "mousewheel", this.body1Mousewheel), t.a.unbind(e, "scroll", this.body2Scroll)
			}
		}
	}, function(g, e, I) {
		"use strict";
		e.a = {
			methods: {
				enableSort: function(g) {
					return "string" == typeof g
				},
				sortColumns: function() {
					var g = this,
						e = {};
					return (g.titleRowsToSortInfo.length > 0 ? g.titleRowsToSortInfo : g.internalColumns).filter(function(I, t) {
						g.enableSort(I.orderBy) && (e[I.field] = I.orderBy)
					}), e
				},
				sortControl: function(g, e) {
					var I = this,
						t = I.titleRowsToSortInfo.length > 0 ? I.titleRowsToSortInfo : I.internalColumns;
					I.enableSort(e) && (t.filter(function(e, t) {
						I.enableSort(e.orderBy) && e.field === g && (e.orderBy = "asc" === e.orderBy ? "desc" : "desc" === e.orderBy ? "" : "asc"), I.multipleSort || e.field !== g && I.enableSort(e.orderBy) && (e.orderBy = "")
					}), I.$emit("sort-change", I.sortColumns()))
				},
				singelSortInit: function() {
					var g, e = this,
						I = !1;
					e.multipleSort || (g = e.titleRowsToSortInfo.length > 0 ? e.titleRowsToSortInfo : e.internalColumns, g.filter(function(g, t) {
						e.enableSort(g.orderBy) && "" !== g.orderBy && (I && (g.orderBy = ""), I = !0)
					}))
				}
			}
		}
	}, function(g, e, I) {
		"use strict";
		var t = I(1);
		e.a = {
			data: function() {
				return {
					isTableEmpty: !1,
					tableEmptyHeight: 0
				}
			},
			methods: {
				tableEmpty: function() {
					var g = this,
						e = this.internalTableData,
						I = 0;
					if (Array.isArray(e) && e.length > 0) return this.isTableEmpty = !1, !1;
					this.isTableEmpty = !0, I = this.getTotalColumnsHeight() + this.errorContentHeight, this.tableEmptyHeight = I, this.$nextTick(function(e) {
						g.tableEmptyScroll()
					})
				},
				tableEmptyScrollEvent: function(g) {
					var e = this.$el.querySelector(".v-table-rightview .v-table-header"),
						I = this.$el.querySelector(".v-table-empty .v-table-empty-scroll");
					I && (e.scrollLeft = I.scrollLeft)
				},
				tableEmptyScroll: function() {
					var g = this.$el.querySelector(".v-table-empty .v-table-empty-scroll");
					t.a.bind(g, "scroll", this.tableEmptyScrollEvent)
				}
			},
			beforeDestroy: function() {
				var g = this.$el.querySelector(".v-table-empty .v-table-empty-scroll");
				t.a.unbind(g, "scroll", this.tableEmptyScrollEvent)
			}
		}
	}, function(g, e, I) {
		"use strict";
		var t = I(1);
		e.a = {
			data: function() {
				return {
					resizeColumns: [],
					initTotalColumnsWidth: 0,
					hasContainerWidth: !1
				}
			},
			methods: {
				getResizeColumns: function() {
					var g = [];
					this.internalColumns.forEach(function(e) {
						e.isResize && g.push({
							width: e.width,
							field: e.field
						})
					}), this.resizeColumns = g
				},
				initResizeColumns: function() {
					this.initTotalColumnsWidth = this.totalColumnsWidth, this.getResizeColumns()
				},
				tableResize: function() {
					if (!this.isHorizontalResize && !this.isVerticalResize) return !1;
					var g = this,
						e = g.maxWidth,
						I = g.height && g.height > 0 ? g.height : this.getTotalColumnsHeight(),
						n = g.minWidth,
						l = g.minHeight,
						C = this.$el,
						A = t.a.getViewportOffset(C),
						i = "undefined" !== C.getBoundingClientRect ? C.getBoundingClientRect().width : C.clientWidth + 2,
						a = "undefined" !== C.getBoundingClientRect ? C.getBoundingClientRect().height : C.clientHeight + 2,
						c = window.document.documentElement.clientWidth - i - A.left,
						u = window.document.documentElement.clientHeight - a - A.top - 2;
					if (g.isVerticalResize && g.internalHeight && g.internalHeight > 0 && a > 0 && ((u -= g.VerticalResizeOffset) < 0 && a > l || u > 0 && a < I)) {
						var a = a + u;
						a = a > I ? I : a, a = a < l ? l : a, g.internalHeight = a
					}
					if (g.isHorizontalResize && g.internalWidth && g.internalWidth > 0 && i > 0) {
						var s = this.$el.clientWidth;
						(c <= 0 && s > n || c >= 0 && s < e) && (s = s > e ? e : s, s = s < n ? n : s, g.internalWidth = s, g.changeColumnsWidth(s))
					}
				},
				changeColumnsWidth: function(g) {
					if (this.resizeColumns.length <= 0) return !1;
					var e = g - 2 - this.totalColumnsWidth,
						I = this.initTotalColumnsWidth,
						n = this.$el.querySelector(".v-table-rightview .v-table-body");
					if (g <= I && !this.isTableEmpty ? n.style.overflowX = "scroll" : (this.getTotalColumnsHeight() > this.internalHeight && (e -= t.a.getScrollbarWidth() + 1), n.style.overflowX = "hidden"), g >= I || e > 0) {
						var l = e / this.resizeColumns.length;
						this.internalColumns.map(function(g) {
							return g.isResize && (g.width += l), g
						})
					}
				}
			},
			mounted: function() {
				t.a.bind(window, "resize", this.tableResize)
			},
			beforeDestroy: function() {
				t.a.unbind(window, "resize", this.tableResize)
			}
		}
	}, function(g, e, I) {
		"use strict";
		e.a = {
			computed: {
				getTitleRowspanTotalCount: function() {
					var g = this,
						e = 0,
						I = 0,
						t = void 0,
						n = void 0;
					return this.noFrozenTitleCols.forEach(function(I) {
						t = g.getTitleRowspanCountArr(I), Array.isArray(t) && t.length > 0 && (n = Math.min.apply(null, t), e += n - 1)
					}), this.frozenTitleCols.forEach(function(e) {
						t = g.getTitleRowspanCountArr(e), Array.isArray(t) && t.length > 0 && (n = Math.min.apply(null, t), I += n - 1)
					}), e < I ? e : I
				}
			},
			methods: {
				getTitleRowspanCountArr: function(g) {
					var e = [];
					return g.every(function(g) {
						return !!(g.rowspan && parseInt(g.rowspan) > 1) && (e.push(parseInt(g.rowspan)), !0)
					}) ? e : []
				},
				dealTitleRowspan: function(g, e) {
					var I = e,
						t = void 0,
						n = void 0;
					return t = this.getTitleRowspanCountArr(g), Array.isArray(t) && t.length > 0 && (e = parseInt(e), n = Math.min.apply(null, t), I = e === n ? 1 : e - n + 1), I
				}
			}
		}
	}, function(g, e, I) {
		(function(g, e) {
			var I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(g) {
				return typeof g
			} : function(g) {
				return g && "function" == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g
			}, t = function() {
				"use strict";

				function e(g, e) {
					return null != e && g instanceof e
				}
				function t(n, l, C, A, s) {
					function d(n, C) {
						if (null === n) return null;
						if (0 === C) return n;
						var B, m;
						if ("object" != (void 0 === n ? "undefined" : I(n))) return n;
						if (e(n, a)) B = new a;
						else if (e(n, c)) B = new c;
						else if (e(n, u)) B = new u(function(g, e) {
							n.then(function(e) {
								g(d(e, C - 1))
							}, function(g) {
								e(d(g, C - 1))
							})
						});
						else if (t.__isArray(n)) B = [];
						else if (t.__isRegExp(n)) B = new RegExp(n.source, i(n)), n.lastIndex && (B.lastIndex = n.lastIndex);
						else if (t.__isDate(n)) B = new Date(n.getTime());
						else {
							if (r && g.isBuffer(n)) return B = new g(n.length), n.copy(B), B;
							e(n, Error) ? B = Object.create(n) : void 0 === A ? (m = Object.getPrototypeOf(n), B = Object.create(m)) : (B = Object.create(A), m = A)
						}
						if (l) {
							var G = o.indexOf(n);
							if (-1 != G) return b[G];
							o.push(n), b.push(B)
						}
						e(n, a) && n.forEach(function(g, e) {
							var I = d(e, C - 1),
								t = d(g, C - 1);
							B.set(I, t)
						}), e(n, c) && n.forEach(function(g) {
							var e = d(g, C - 1);
							B.add(e)
						});
						for (var h in n) {
							var Z;
							m && (Z = Object.getOwnPropertyDescriptor(m, h)), Z && null == Z.set || (B[h] = d(n[h], C - 1))
						}
						if (Object.getOwnPropertySymbols) for (var W = Object.getOwnPropertySymbols(n), h = 0; h < W.length; h++) {
							var V = W[h],
								p = Object.getOwnPropertyDescriptor(n, V);
							(!p || p.enumerable || s) && (B[V] = d(n[V], C - 1), p.enumerable || Object.defineProperty(B, V, {
								enumerable: !1
							}))
						}
						if (s) for (var X = Object.getOwnPropertyNames(n), h = 0; h < X.length; h++) {
							var F = X[h],
								p = Object.getOwnPropertyDescriptor(n, F);
							p && p.enumerable || (B[F] = d(n[F], C - 1), Object.defineProperty(B, F, {
								enumerable: !1
							}))
						}
						return B
					}
					"object" === (void 0 === l ? "undefined" : I(l)) && (C = l.depth, A = l.prototype, s = l.includeNonEnumerable, l = l.circular);
					var o = [],
						b = [],
						r = void 0 !== g;
					return void 0 === l && (l = !0), void 0 === C && (C = 1 / 0), d(n, C)
				}
				function n(g) {
					return Object.prototype.toString.call(g)
				}
				function l(g) {
					return "object" === (void 0 === g ? "undefined" : I(g)) && "[object Date]" === n(g)
				}
				function C(g) {
					return "object" === (void 0 === g ? "undefined" : I(g)) && "[object Array]" === n(g)
				}
				function A(g) {
					return "object" === (void 0 === g ? "undefined" : I(g)) && "[object RegExp]" === n(g)
				}
				function i(g) {
					var e = "";
					return g.global && (e += "g"), g.ignoreCase && (e += "i"), g.multiline && (e += "m"), e
				}
				var a;
				try {
					a = Map
				} catch (g) {
					a = function() {}
				}
				var c;
				try {
					c = Set
				} catch (g) {
					c = function() {}
				}
				var u;
				try {
					u = Promise
				} catch (g) {
					u = function() {}
				}
				return t.clonePrototype = function(g) {
					if (null === g) return null;
					var e = function() {};
					return e.prototype = g, new e
				}, t.__objToStr = n, t.__isDate = l, t.__isArray = C, t.__isRegExp = A, t.__getRegExpFlags = i, t
			}();
			"object" === I(e) && e.exports && (e.exports = t)
		}).call(e, I(96).Buffer, I(190)(g))
	}, function(g, e, I) {
		"use strict";
		var t = I(127),
			n = I.n(t),
			l = I(15),
			C = I.n(l),
			A = I(12);
		e.a = {
			name: "aui-pagination",
			props: {
				layout: {
					type: Array,
				default:


					function() {
						return ["total", "prev", "pager", "next", "sizer", "jumper"]
					}
				},
				size: {
					type: String
				},
				total: {
					type: Number,
					require: !0
				},
				pageIndex: {
					type: Number
				},
				showPagingCount: {
					type: Number,
				default:
					5
				},
				pageSize: {
					type: Number,
				default:
					10
				},
				pageSizeOption: {
					type: Array,
				default:


					function() {
						return [10, 20, 30]
					}
				}
			},
			data: function() {
				return {
					newPageIndex: this.pageIndex && this.pageIndex > 0 ? parseInt(this.pageIndex) : 1,
					newPageSize: this.pageSize,
					newPageSizeOption: []
				}
			},
			computed: {
				pageCount: function() {
					return Math.ceil(this.total / this.newPageSize)
				}
			},
			render: function(g) {
				var e = g("ul", {
					class: "v-page-ul"
				}, []),
					I = {
						total: g("total", null, []),
						prev: g("prev", null, []),
						pager: g("pager", {
							attrs: {
								pageCount: this.pageCount,
								pageIndex: this.newPageIndex,
								showPagingCount: this.showPagingCount
							},
							on: {
								jumpPageHandler: this.jumpPageHandler
							}
						}, []),
						next: g("next", null, []),
						sizer: g("sizer", null, []),
						jumper: g("jumper", {
							on: {
								jumpPageHandler: this.jumpPageHandler
							}
						}, [])
					};
				this.layout.forEach(function(g) {
					e.children.push(I[g])
				});
				var t = A.a.sizeMaps[this.size] || A.a.sizeMapDefault,
					n = t === A.a.sizeMaps.large ? " v-page--large" : t === A.a.sizeMaps.middle ? " v-page--middle" : " v-page--small";
				return e.data.class += n, e
			},
			components: {
				Total: {
					render: function(g) {
						return g("span", {
							class: "v-page-total"
						}, [" 共 ", this.$parent.total, " 条 "])
					}
				},
				Prev: {
					render: function(g) {
						return g("li", {
							on: {
								click: this.$parent.prevPage
							},
							class: [1 === this.$parent.newPageIndex ? "v-page-disabled" : "", "v-page-li", "v-page-prev"]
						}, [g("a", null, [g("i", {
							class: "aui-icon-angle-left"
						}, [])])])
					}
				},
				pager: n.a,
				Next: {
					render: function(g) {
						return g("li", {
							on: {
								click: this.$parent.nextPage
							},
							class: [this.$parent.newPageIndex === this.$parent.pageCount ? "v-page-disabled" : "", "v-page-li", "v-page-next"]
						}, [g("a", null, [g("i", {
							class: "aui-icon-angle-right"
						}, [])])])
					}
				},
				Sizer: {
					components: {
						AuiTableSelect: C.a
					},
					render: function(g) {
						return g("aui-table-select", {
							attrs: {
								size: this.$parent.size,
								value: this.$parent.newPageSizeOption
							},
							class: "v-page-select",
							on: {
								input: this.handleChange
							},
							directives: [{
								name: "model",
								value: this.$parent.newPageSizeOption
							}]
						}, [])
					},
					methods: {
						handleChange: function(g) {
							if (Array.isArray(g) && g.length > 0) {
								var e = g.find(function(g) {
									return g.selected
								});
								e && this.$parent.pageSizeChangeHandler(e.value)
							}
						}
					},
					created: function() {}
				},
				Jumper: {
					methods: {
						jumperEnter: function(g) {
							if (13 === g.keyCode) {
								var e = this.$parent.getValidNum(g.target.value);
								this.$parent.newPageIndex = e, this.$emit("jumpPageHandler", e)
							}
						}
					},
					render: function(g) {
						return g("span", {
							class: "v-page-goto"
						}, [" 前往 ", g("input", {
							class: "v-page-goto-input",
							domProps: {
								value: this.$parent.newPageIndex
							},
							on: {
								keyup: this.jumperEnter
							},
							attrs: {
								type: "input"
							}
						}, []), " 页 "])
					}
				}
			},
			methods: {
				getValidNum: function(g) {
					return g = parseInt(g, 10), isNaN(g) || g < 1 ? 1 : g < 1 ? 1 : g > this.pageCount ? this.pageCount : g
				},
				jumpPageHandler: function(g) {
					this.newPageIndex = g, this.$emit("page-change", this.newPageIndex)
				},
				prevPage: function() {
					this.newPageIndex > 1 && (this.newPageIndex = this.newPageIndex - 1, this.$emit("page-change", this.newPageIndex))
				},
				nextPage: function() {
					this.newPageIndex < this.pageCount && (this.newPageIndex = this.newPageIndex + 1, this.$emit("page-change", this.newPageIndex))
				},
				pageSizeChangeHandler: function() {
					var g = this.newPageSizeOption.find(function(g) {
						return g.selected
					});
					g && (this.newPageSize = g.value, this.newPageIndex = 1, this.$emit("page-size-change", this.newPageSize))
				},
				initSelectOption: function() {
					var g = this;
					this.newPageSizeOption = this.pageSizeOption.map(function(e) {
						var I = {};
						return I.value = e, I.label = e + " 条/页", g.newPageSize == e && (I.selected = !0), I
					})
				},
				goBackPageIndex: function() {
					this.newPageIndex = this.pageIndex && this.pageIndex > 0 ? parseInt(this.pageIndex) : 1
				},
				goBackPageSize: function() {
					this.pageSize > 0 && (this.newPageSize = this.pageSize, this.initSelectOption())
				}
			},
			watch: {
				pageIndex: function(g, e) {
					this.newPageIndex = g
				},
				pageSize: function(g, e) {
					this.newPageSize = g, this.initSelectOption()
				}
			},
			created: function() {
				this.initSelectOption()
			}
		}
	}, function(g, e, I) {
		"use strict";

		function t(g, e, I, n, l) {
			var C = this,
				c = this.$validation.errors;
			if (c[e] || A.a.set(c, e, []), a.a.isArray(g)) return g.indexOf("required") > -1 || I ? -1 === g.map(function(g, n) {
				return t.call(C, g, e, I, !0, n)
			}).indexOf(!1) : (c[e] && c[e].length > 0 && (c[e] = []), !0);
			if (!n && "required" !== g && "required" !== g.test && !I) return c[e] && c[e].length > 0 && (c[e] = []), !0;
			var u = a.a.isString(g) ? i.a[g] : a.a.isString(g.test) ? i.a[g.test] : g;
			if (!u || !u.test) return void console.warn("[validator] rule does not exist: " + (g.test || g));
			u.errorMsg = g.errorMsg || u.errorMsg;
			var s = a.a.isFunction(u.test) ? u.test.call(this, I) : u.test.test(I);
			if (void 0 === s) {
				var d = "[validator] custom rule must return error message or boolean value: " + JSON.stringify(g);
				throw new Error(d)
			}
			if (a.a.isString(s) && (u.errorMsg = s, s = !1), n) {
				var o = c[e],
					b = o.findIndex(function(g) {
						return g.index === l
					});
				if (s) b > -1 && o.splice(b, 1);
				else if (b < 0) {
					var r = o.findIndex(function(g) {
						return l < g.index
					});
					r < 0 && (r = o.length), o.splice(r, 0, {
						index: l,
						errorMsg: u.errorMsg
					})
				}
			} else {
				var B = c[e];
				!s && B.length <= 0 && B.push({
					index: l,
					errorMsg: u.errorMsg
				}), s && B.length > 0 && (c[e] = [])
			}
			return s
		}
		function n(g) {
			var e = this;
			Object.keys(g).forEach(function(I) {
				e.$watch(I, function(n) {
					return t.call(e, g[I], I, n)
				})
			})
		}
		function l(g) {
			var e = g.split(".");
			return function(g) {
				for (var I = 0; I < e.length; I++) {
					if (!g) return;
					g = g[e[I]]
				}
				return g
			}
		}
		var C = I(5),
			A = I.n(C),
			i = I(13),
			a = I(3);
		e.a = {
			created: function() {
				var g = this.$options.validators;
				g && (A.a.util.defineReactive(this, "$validation", {
					errors: {}
				}), n.call(this, g))
			},
			methods: {
				$validate: function(g) {
					var e = this,
						I = this.$options.validators;
					return g = g || Object.keys(I), -1 === g.map(function(g) {
						return t.call(e, I[g], g, l(g)(e))
					}).indexOf(!1)
				},
				$clearValidation: function() {
					this.$validation.errors = {}
				}
			}
		}
	}, function(g, e, I) {
		g.exports = I(103)
	}, function(g, e, I) {
		"use strict";

		function t(g) {
			var e = g.length;
			if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			return "=" === g[e - 2] ? 2 : "=" === g[e - 1] ? 1 : 0
		}
		function n(g) {
			return 3 * g.length / 4 - t(g)
		}
		function l(g) {
			var e, I, n, l, C, A, i = g.length;
			C = t(g), A = new u(3 * i / 4 - C), n = C > 0 ? i - 4 : i;
			var a = 0;
			for (e = 0, I = 0; e < n; e += 4, I += 3) l = c[g.charCodeAt(e)] << 18 | c[g.charCodeAt(e + 1)] << 12 | c[g.charCodeAt(e + 2)] << 6 | c[g.charCodeAt(e + 3)], A[a++] = l >> 16 & 255, A[a++] = l >> 8 & 255, A[a++] = 255 & l;
			return 2 === C ? (l = c[g.charCodeAt(e)] << 2 | c[g.charCodeAt(e + 1)] >> 4, A[a++] = 255 & l) : 1 === C && (l = c[g.charCodeAt(e)] << 10 | c[g.charCodeAt(e + 1)] << 4 | c[g.charCodeAt(e + 2)] >> 2, A[a++] = l >> 8 & 255, A[a++] = 255 & l), A
		}
		function C(g) {
			return a[g >> 18 & 63] + a[g >> 12 & 63] + a[g >> 6 & 63] + a[63 & g]
		}
		function A(g, e, I) {
			for (var t, n = [], l = e; l < I; l += 3) t = (g[l] << 16) + (g[l + 1] << 8) + g[l + 2], n.push(C(t));
			return n.join("")
		}
		function i(g) {
			for (var e, I = g.length, t = I % 3, n = "", l = [], C = 0, i = I - t; C < i; C += 16383) l.push(A(g, C, C + 16383 > i ? i : C + 16383));
			return 1 === t ? (e = g[I - 1], n += a[e >> 2], n += a[e << 4 & 63], n += "==") : 2 === t && (e = (g[I - 2] << 8) + g[I - 1], n += a[e >> 10], n += a[e >> 4 & 63], n += a[e << 2 & 63], n += "="), l.push(n), l.join("")
		}
		e.byteLength = n, e.toByteArray = l, e.fromByteArray = i;
		for (var a = [], c = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, o = s.length; d < o; ++d) a[d] = s[d], c[s.charCodeAt(d)] = d;
		c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63
	}, function(g, e, I) {
		"use strict";
		(function(g) {
			function t() {
				return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
			}
			function n(g, e) {
				if (t() < e) throw new RangeError("Invalid typed array length");
				return l.TYPED_ARRAY_SUPPORT ? (g = new Uint8Array(e), g.__proto__ = l.prototype) : (null === g && (g = new l(e)), g.length = e), g
			}
			function l(g, e, I) {
				if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(g, e, I);
				if ("number" == typeof g) {
					if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
					return a(this, g)
				}
				return C(this, g, e, I)
			}
			function C(g, e, I, t) {
				if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
				return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? s(g, e, I, t) : "string" == typeof e ? c(g, e, I) : d(g, e)
			}
			function A(g) {
				if ("number" != typeof g) throw new TypeError('"size" argument must be a number');
				if (g < 0) throw new RangeError('"size" argument must not be negative')
			}
			function i(g, e, I, t) {
				return A(e), e <= 0 ? n(g, e) : void 0 !== I ? "string" == typeof t ? n(g, e).fill(I, t) : n(g, e).fill(I) : n(g, e)
			}
			function a(g, e) {
				if (A(e), g = n(g, e < 0 ? 0 : 0 | o(e)), !l.TYPED_ARRAY_SUPPORT) for (var I = 0; I < e; ++I) g[I] = 0;
				return g
			}
			function c(g, e, I) {
				if ("string" == typeof I && "" !== I || (I = "utf8"), !l.isEncoding(I)) throw new TypeError('"encoding" must be a valid string encoding');
				var t = 0 | r(e, I);
				g = n(g, t);
				var C = g.write(e, I);
				return C !== t && (g = g.slice(0, C)), g
			}
			function u(g, e) {
				var I = e.length < 0 ? 0 : 0 | o(e.length);
				g = n(g, I);
				for (var t = 0; t < I; t += 1) g[t] = 255 & e[t];
				return g
			}
			function s(g, e, I, t) {
				if (e.byteLength, I < 0 || e.byteLength < I) throw new RangeError("'offset' is out of bounds");
				if (e.byteLength < I + (t || 0)) throw new RangeError("'length' is out of bounds");
				return e = void 0 === I && void 0 === t ? new Uint8Array(e) : void 0 === t ? new Uint8Array(e, I) : new Uint8Array(e, I, t), l.TYPED_ARRAY_SUPPORT ? (g = e, g.__proto__ = l.prototype) : g = u(g, e), g
			}
			function d(g, e) {
				if (l.isBuffer(e)) {
					var I = 0 | o(e.length);
					return g = n(g, I), 0 === g.length ? g : (e.copy(g, 0, 0, I), g)
				}
				if (e) {
					if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || P(e.length) ? n(g, 0) : u(g, e);
					if ("Buffer" === e.type && q(e.data)) return u(g, e.data)
				}
				throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
			}
			function o(g) {
				if (g >= t()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + t().toString(16) + " bytes");
				return 0 | g
			}
			function b(g) {
				return +g != g && (g = 0), l.alloc(+g)
			}
			function r(g, e) {
				if (l.isBuffer(g)) return g.length;
				if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(g) || g instanceof ArrayBuffer)) return g.byteLength;
				"string" != typeof g && (g = "" + g);
				var I = g.length;
				if (0 === I) return 0;
				for (var t = !1;;) switch (e) {
				case "ascii":
				case "latin1":
				case "binary":
					return I;
				case "utf8":
				case "utf-8":
				case void 0:
					return k(g).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return 2 * I;
				case "hex":
					return I >>> 1;
				case "base64":
					return M(g).length;
				default:
					if (t) return k(g).length;
					e = ("" + e).toLowerCase(), t = !0
				}
			}
			function B(g, e, I) {
				var t = !1;
				if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
				if ((void 0 === I || I > this.length) && (I = this.length), I <= 0) return "";
				if (I >>>= 0, e >>>= 0, I <= e) return "";
				for (g || (g = "utf8");;) switch (g) {
				case "hex":
					return Y(this, e, I);
				case "utf8":
				case "utf-8":
					return Q(this, e, I);
				case "ascii":
					return v(this, e, I);
				case "latin1":
				case "binary":
					return R(this, e, I);
				case "base64":
					return y(this, e, I);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return U(this, e, I);
				default:
					if (t) throw new TypeError("Unknown encoding: " + g);
					g = (g + "").toLowerCase(), t = !0
				}
			}
			function m(g, e, I) {
				var t = g[e];
				g[e] = g[I], g[I] = t
			}
			function G(g, e, I, t, n) {
				if (0 === g.length) return -1;
				if ("string" == typeof I ? (t = I, I = 0) : I > 2147483647 ? I = 2147483647 : I < -2147483648 && (I = -2147483648), I = +I, isNaN(I) && (I = n ? 0 : g.length - 1), I < 0 && (I = g.length + I), I >= g.length) {
					if (n) return -1;
					I = g.length - 1
				} else if (I < 0) {
					if (!n) return -1;
					I = 0
				}
				if ("string" == typeof e && (e = l.from(e, t)), l.isBuffer(e)) return 0 === e.length ? -1 : h(g, e, I, t, n);
				if ("number" == typeof e) return e &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(g, e, I) : Uint8Array.prototype.lastIndexOf.call(g, e, I) : h(g, [e], I, t, n);
				throw new TypeError("val must be string, number or Buffer")
			}
			function h(g, e, I, t, n) {
				function l(g, e) {
					return 1 === C ? g[e] : g.readUInt16BE(e * C)
				}
				var C = 1,
					A = g.length,
					i = e.length;
				if (void 0 !== t && ("ucs2" === (t = String(t).toLowerCase()) || "ucs-2" === t || "utf16le" === t || "utf-16le" === t)) {
					if (g.length < 2 || e.length < 2) return -1;
					C = 2, A /= 2, i /= 2, I /= 2
				}
				var a;
				if (n) {
					var c = -1;
					for (a = I; a < A; a++) if (l(g, a) === l(e, -1 === c ? 0 : a - c)) {
						if (-1 === c && (c = a), a - c + 1 === i) return c * C
					} else - 1 !== c && (a -= a - c), c = -1
				} else for (I + i > A && (I = A - i), a = I; a >= 0; a--) {
					for (var u = !0, s = 0; s < i; s++) if (l(g, a + s) !== l(e, s)) {
						u = !1;
						break
					}
					if (u) return a
				}
				return -1
			}
			function Z(g, e, I, t) {
				I = Number(I) || 0;
				var n = g.length - I;
				t ? (t = Number(t)) > n && (t = n) : t = n;
				var l = e.length;
				if (l % 2 != 0) throw new TypeError("Invalid hex string");
				t > l / 2 && (t = l / 2);
				for (var C = 0; C < t; ++C) {
					var A = parseInt(e.substr(2 * C, 2), 16);
					if (isNaN(A)) return C;
					g[I + C] = A
				}
				return C
			}
			function W(g, e, I, t) {
				return j(k(e, g.length - I), g, I, t)
			}
			function V(g, e, I, t) {
				return j(L(e), g, I, t)
			}
			function p(g, e, I, t) {
				return V(g, e, I, t)
			}
			function X(g, e, I, t) {
				return j(M(e), g, I, t)
			}
			function F(g, e, I, t) {
				return j(D(e, g.length - I), g, I, t)
			}
			function y(g, e, I) {
				return 0 === e && I === g.length ? K.fromByteArray(g) : K.fromByteArray(g.slice(e, I))
			}
			function Q(g, e, I) {
				I = Math.min(g.length, I);
				for (var t = [], n = e; n < I;) {
					var l = g[n],
						C = null,
						A = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
					if (n + A <= I) {
						var i, a, c, u;
						switch (A) {
						case 1:
							l < 128 && (C = l);
							break;
						case 2:
							i = g[n + 1], 128 == (192 & i) && (u = (31 & l) << 6 | 63 & i) > 127 && (C = u);
							break;
						case 3:
							i = g[n + 1], a = g[n + 2], 128 == (192 & i) && 128 == (192 & a) && (u = (15 & l) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (C = u);
							break;
						case 4:
							i = g[n + 1], a = g[n + 2], c = g[n + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & c) && (u = (15 & l) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & c) > 65535 && u < 1114112 && (C = u)
						}
					}
					null === C ? (C = 65533, A = 1) : C > 65535 && (C -= 65536, t.push(C >>> 10 & 1023 | 55296), C = 56320 | 1023 & C), t.push(C), n += A
				}
				return N(t)
			}
			function N(g) {
				var e = g.length;
				if (e <= $) return String.fromCharCode.apply(String, g);
				for (var I = "", t = 0; t < e;) I += String.fromCharCode.apply(String, g.slice(t, t += $));
				return I
			}
			function v(g, e, I) {
				var t = "";
				I = Math.min(g.length, I);
				for (var n = e; n < I; ++n) t += String.fromCharCode(127 & g[n]);
				return t
			}
			function R(g, e, I) {
				var t = "";
				I = Math.min(g.length, I);
				for (var n = e; n < I; ++n) t += String.fromCharCode(g[n]);
				return t
			}
			function Y(g, e, I) {
				var t = g.length;
				(!e || e < 0) && (e = 0), (!I || I < 0 || I > t) && (I = t);
				for (var n = "", l = e; l < I; ++l) n += w(g[l]);
				return n
			}
			function U(g, e, I) {
				for (var t = g.slice(e, I), n = "", l = 0; l < t.length; l += 2) n += String.fromCharCode(t[l] + 256 * t[l + 1]);
				return n
			}
			function H(g, e, I) {
				if (g % 1 != 0 || g < 0) throw new RangeError("offset is not uint");
				if (g + e > I) throw new RangeError("Trying to access beyond buffer length")
			}
			function x(g, e, I, t, n, C) {
				if (!l.isBuffer(g)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (e > n || e < C) throw new RangeError('"value" argument is out of bounds');
				if (I + t > g.length) throw new RangeError("Index out of range")
			}
			function f(g, e, I, t) {
				e < 0 && (e = 65535 + e + 1);
				for (var n = 0, l = Math.min(g.length - I, 2); n < l; ++n) g[I + n] = (e & 255 << 8 * (t ? n : 1 - n)) >>> 8 * (t ? n : 1 - n)
			}
			function S(g, e, I, t) {
				e < 0 && (e = 4294967295 + e + 1);
				for (var n = 0, l = Math.min(g.length - I, 4); n < l; ++n) g[I + n] = e >>> 8 * (t ? n : 3 - n) & 255
			}
			function J(g, e, I, t, n, l) {
				if (I + t > g.length) throw new RangeError("Index out of range");
				if (I < 0) throw new RangeError("Index out of range")
			}
			function T(g, e, I, t, n) {
				return n || J(g, e, I, 4, 3.4028234663852886e38, -3.4028234663852886e38), _.write(g, e, I, t, 23, 4), I + 4
			}
			function O(g, e, I, t, n) {
				return n || J(g, e, I, 8, 1.7976931348623157e308, -1.7976931348623157e308), _.write(g, e, I, t, 52, 8), I + 8
			}
			function z(g) {
				if (g = E(g).replace(gg, ""), g.length < 2) return "";
				for (; g.length % 4 != 0;) g += "=";
				return g
			}
			function E(g) {
				return g.trim ? g.trim() : g.replace(/^\s+|\s+$/g, "")
			}
			function w(g) {
				return g < 16 ? "0" + g.toString(16) : g.toString(16)
			}
			function k(g, e) {
				e = e || 1 / 0;
				for (var I, t = g.length, n = null, l = [], C = 0; C < t; ++C) {
					if ((I = g.charCodeAt(C)) > 55295 && I < 57344) {
						if (!n) {
							if (I > 56319) {
								(e -= 3) > -1 && l.push(239, 191, 189);
								continue
							}
							if (C + 1 === t) {
								(e -= 3) > -1 && l.push(239, 191, 189);
								continue
							}
							n = I;
							continue
						}
						if (I < 56320) {
							(e -= 3) > -1 && l.push(239, 191, 189), n = I;
							continue
						}
						I = 65536 + (n - 55296 << 10 | I - 56320)
					} else n && (e -= 3) > -1 && l.push(239, 191, 189);
					if (n = null, I < 128) {
						if ((e -= 1) < 0) break;
						l.push(I)
					} else if (I < 2048) {
						if ((e -= 2) < 0) break;
						l.push(I >> 6 | 192, 63 & I | 128)
					} else if (I < 65536) {
						if ((e -= 3) < 0) break;
						l.push(I >> 12 | 224, I >> 6 & 63 | 128, 63 & I | 128)
					} else {
						if (!(I < 1114112)) throw new Error("Invalid code point");
						if ((e -= 4) < 0) break;
						l.push(I >> 18 | 240, I >> 12 & 63 | 128, I >> 6 & 63 | 128, 63 & I | 128)
					}
				}
				return l
			}
			function L(g) {
				for (var e = [], I = 0; I < g.length; ++I) e.push(255 & g.charCodeAt(I));
				return e
			}
			function D(g, e) {
				for (var I, t, n, l = [], C = 0; C < g.length && !((e -= 2) < 0); ++C) I = g.charCodeAt(C), t = I >> 8, n = I % 256, l.push(n), l.push(t);
				return l
			}
			function M(g) {
				return K.toByteArray(z(g))
			}
			function j(g, e, I, t) {
				for (var n = 0; n < t && !(n + I >= e.length || n >= g.length); ++n) e[n + I] = g[n];
				return n
			}
			function P(g) {
				return g !== g
			}
			/*!
			 * The buffer module from node.js, for the browser.
			 *
			 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
			 * @license  MIT
			 */
			var K = I(95),
				_ = I(100),
				q = I(101);
			e.Buffer = l, e.SlowBuffer = b, e.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== g.TYPED_ARRAY_SUPPORT ? g.TYPED_ARRAY_SUPPORT : function() {
				try {
					var g = new Uint8Array(1);
					return g.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					}, 42 === g.foo() && "function" == typeof g.subarray && 0 === g.subarray(1, 1).byteLength
				} catch (g) {
					return !1
				}
			}(), e.kMaxLength = t(), l.poolSize = 8192, l._augment = function(g) {
				return g.__proto__ = l.prototype, g
			}, l.from = function(g, e, I) {
				return C(null, g, e, I)
			}, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
				value: null,
				configurable: !0
			})), l.alloc = function(g, e, I) {
				return i(null, g, e, I)
			}, l.allocUnsafe = function(g) {
				return a(null, g)
			}, l.allocUnsafeSlow = function(g) {
				return a(null, g)
			}, l.isBuffer = function(g) {
				return !(null == g || !g._isBuffer)
			}, l.compare = function(g, e) {
				if (!l.isBuffer(g) || !l.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
				if (g === e) return 0;
				for (var I = g.length, t = e.length, n = 0, C = Math.min(I, t); n < C; ++n) if (g[n] !== e[n]) {
					I = g[n], t = e[n];
					break
				}
				return I < t ? -1 : t < I ? 1 : 0
			}, l.isEncoding = function(g) {
				switch (String(g).toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "latin1":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return !0;
				default:
					return !1
				}
			}, l.concat = function(g, e) {
				if (!q(g)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === g.length) return l.alloc(0);
				var I;
				if (void 0 === e) for (e = 0, I = 0; I < g.length; ++I) e += g[I].length;
				var t = l.allocUnsafe(e),
					n = 0;
				for (I = 0; I < g.length; ++I) {
					var C = g[I];
					if (!l.isBuffer(C)) throw new TypeError('"list" argument must be an Array of Buffers');
					C.copy(t, n), n += C.length
				}
				return t
			}, l.byteLength = r, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
				var g = this.length;
				if (g % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
				for (var e = 0; e < g; e += 2) m(this, e, e + 1);
				return this
			}, l.prototype.swap32 = function() {
				var g = this.length;
				if (g % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
				for (var e = 0; e < g; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
				return this
			}, l.prototype.swap64 = function() {
				var g = this.length;
				if (g % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
				for (var e = 0; e < g; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
				return this
			}, l.prototype.toString = function() {
				var g = 0 | this.length;
				return 0 === g ? "" : 0 === arguments.length ? Q(this, 0, g) : B.apply(this, arguments)
			}, l.prototype.equals = function(g) {
				if (!l.isBuffer(g)) throw new TypeError("Argument must be a Buffer");
				return this === g || 0 === l.compare(this, g)
			}, l.prototype.inspect = function() {
				var g = "",
					I = e.INSPECT_MAX_BYTES;
				return this.length > 0 && (g = this.toString("hex", 0, I).match(/.{2}/g).join(" "), this.length > I && (g += " ... ")), "<Buffer " + g + ">"
			}, l.prototype.compare = function(g, e, I, t, n) {
				if (!l.isBuffer(g)) throw new TypeError("Argument must be a Buffer");
				if (void 0 === e && (e = 0), void 0 === I && (I = g ? g.length : 0), void 0 === t && (t = 0), void 0 === n && (n = this.length), e < 0 || I > g.length || t < 0 || n > this.length) throw new RangeError("out of range index");
				if (t >= n && e >= I) return 0;
				if (t >= n) return -1;
				if (e >= I) return 1;
				if (e >>>= 0, I >>>= 0, t >>>= 0, n >>>= 0, this === g) return 0;
				for (var C = n - t, A = I - e, i = Math.min(C, A), a = this.slice(t, n), c = g.slice(e, I), u = 0; u < i; ++u) if (a[u] !== c[u]) {
					C = a[u], A = c[u];
					break
				}
				return C < A ? -1 : A < C ? 1 : 0
			}, l.prototype.includes = function(g, e, I) {
				return -1 !== this.indexOf(g, e, I)
			}, l.prototype.indexOf = function(g, e, I) {
				return G(this, g, e, I, !0)
			}, l.prototype.lastIndexOf = function(g, e, I) {
				return G(this, g, e, I, !1)
			}, l.prototype.write = function(g, e, I, t) {
				if (void 0 === e) t = "utf8", I = this.length, e = 0;
				else if (void 0 === I && "string" == typeof e) t = e, I = this.length, e = 0;
				else {
					if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
					e |= 0, isFinite(I) ? (I |= 0, void 0 === t && (t = "utf8")) : (t = I, I = void 0)
				}
				var n = this.length - e;
				if ((void 0 === I || I > n) && (I = n), g.length > 0 && (I < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				t || (t = "utf8");
				for (var l = !1;;) switch (t) {
				case "hex":
					return Z(this, g, e, I);
				case "utf8":
				case "utf-8":
					return W(this, g, e, I);
				case "ascii":
					return V(this, g, e, I);
				case "latin1":
				case "binary":
					return p(this, g, e, I);
				case "base64":
					return X(this, g, e, I);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return F(this, g, e, I);
				default:
					if (l) throw new TypeError("Unknown encoding: " + t);
					t = ("" + t).toLowerCase(), l = !0
				}
			}, l.prototype.toJSON = function() {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			};
			var $ = 4096;
			l.prototype.slice = function(g, e) {
				var I = this.length;
				g = ~~g, e = void 0 === e ? I : ~~e, g < 0 ? (g += I) < 0 && (g = 0) : g > I && (g = I), e < 0 ? (e += I) < 0 && (e = 0) : e > I && (e = I), e < g && (e = g);
				var t;
				if (l.TYPED_ARRAY_SUPPORT) t = this.subarray(g, e), t.__proto__ = l.prototype;
				else {
					var n = e - g;
					t = new l(n, void 0);
					for (var C = 0; C < n; ++C) t[C] = this[C + g]
				}
				return t
			}, l.prototype.readUIntLE = function(g, e, I) {
				g |= 0, e |= 0, I || H(g, e, this.length);
				for (var t = this[g], n = 1, l = 0; ++l < e && (n *= 256);) t += this[g + l] * n;
				return t
			}, l.prototype.readUIntBE = function(g, e, I) {
				g |= 0, e |= 0, I || H(g, e, this.length);
				for (var t = this[g + --e], n = 1; e > 0 && (n *= 256);) t += this[g + --e] * n;
				return t
			}, l.prototype.readUInt8 = function(g, e) {
				return e || H(g, 1, this.length), this[g]
			}, l.prototype.readUInt16LE = function(g, e) {
				return e || H(g, 2, this.length), this[g] | this[g + 1] << 8
			}, l.prototype.readUInt16BE = function(g, e) {
				return e || H(g, 2, this.length), this[g] << 8 | this[g + 1]
			}, l.prototype.readUInt32LE = function(g, e) {
				return e || H(g, 4, this.length), (this[g] | this[g + 1] << 8 | this[g + 2] << 16) + 16777216 * this[g + 3]
			}, l.prototype.readUInt32BE = function(g, e) {
				return e || H(g, 4, this.length), 16777216 * this[g] + (this[g + 1] << 16 | this[g + 2] << 8 | this[g + 3])
			}, l.prototype.readIntLE = function(g, e, I) {
				g |= 0, e |= 0, I || H(g, e, this.length);
				for (var t = this[g], n = 1, l = 0; ++l < e && (n *= 256);) t += this[g + l] * n;
				return n *= 128, t >= n && (t -= Math.pow(2, 8 * e)), t
			}, l.prototype.readIntBE = function(g, e, I) {
				g |= 0, e |= 0, I || H(g, e, this.length);
				for (var t = e, n = 1, l = this[g + --t]; t > 0 && (n *= 256);) l += this[g + --t] * n;
				return n *= 128, l >= n && (l -= Math.pow(2, 8 * e)), l
			}, l.prototype.readInt8 = function(g, e) {
				return e || H(g, 1, this.length), 128 & this[g] ? -1 * (255 - this[g] + 1) : this[g]
			}, l.prototype.readInt16LE = function(g, e) {
				e || H(g, 2, this.length);
				var I = this[g] | this[g + 1] << 8;
				return 32768 & I ? 4294901760 | I : I
			}, l.prototype.readInt16BE = function(g, e) {
				e || H(g, 2, this.length);
				var I = this[g + 1] | this[g] << 8;
				return 32768 & I ? 4294901760 | I : I
			}, l.prototype.readInt32LE = function(g, e) {
				return e || H(g, 4, this.length), this[g] | this[g + 1] << 8 | this[g + 2] << 16 | this[g + 3] << 24
			}, l.prototype.readInt32BE = function(g, e) {
				return e || H(g, 4, this.length), this[g] << 24 | this[g + 1] << 16 | this[g + 2] << 8 | this[g + 3]
			}, l.prototype.readFloatLE = function(g, e) {
				return e || H(g, 4, this.length), _.read(this, g, !0, 23, 4)
			}, l.prototype.readFloatBE = function(g, e) {
				return e || H(g, 4, this.length), _.read(this, g, !1, 23, 4)
			}, l.prototype.readDoubleLE = function(g, e) {
				return e || H(g, 8, this.length), _.read(this, g, !0, 52, 8)
			}, l.prototype.readDoubleBE = function(g, e) {
				return e || H(g, 8, this.length), _.read(this, g, !1, 52, 8)
			}, l.prototype.writeUIntLE = function(g, e, I, t) {
				if (g = +g, e |= 0, I |= 0, !t) {
					x(this, g, e, I, Math.pow(2, 8 * I) - 1, 0)
				}
				var n = 1,
					l = 0;
				for (this[e] = 255 & g; ++l < I && (n *= 256);) this[e + l] = g / n & 255;
				return e + I
			}, l.prototype.writeUIntBE = function(g, e, I, t) {
				if (g = +g, e |= 0, I |= 0, !t) {
					x(this, g, e, I, Math.pow(2, 8 * I) - 1, 0)
				}
				var n = I - 1,
					l = 1;
				for (this[e + n] = 255 & g; --n >= 0 && (l *= 256);) this[e + n] = g / l & 255;
				return e + I
			}, l.prototype.writeUInt8 = function(g, e, I) {
				return g = +g, e |= 0, I || x(this, g, e, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (g = Math.floor(g)), this[e] = 255 & g, e + 1
			}, l.prototype.writeUInt16LE = function(g, e, I) {
				return g = +g, e |= 0, I || x(this, g, e, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & g, this[e + 1] = g >>> 8) : f(this, g, e, !0), e + 2
			}, l.prototype.writeUInt16BE = function(g, e, I) {
				return g = +g, e |= 0, I || x(this, g, e, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = g >>> 8, this[e + 1] = 255 & g) : f(this, g, e, !1), e + 2
			}, l.prototype.writeUInt32LE = function(g, e, I) {
				return g = +g, e |= 0, I || x(this, g, e, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[e + 3] = g >>> 24, this[e + 2] = g >>> 16, this[e + 1] = g >>> 8, this[e] = 255 & g) : S(this, g, e, !0), e + 4
			}, l.prototype.writeUInt32BE = function(g, e, I) {
				return g = +g, e |= 0, I || x(this, g, e, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = g >>> 24, this[e + 1] = g >>> 16, this[e + 2] = g >>> 8, this[e + 3] = 255 & g) : S(this, g, e, !1), e + 4
			}, l.prototype.writeIntLE = function(g, e, I, t) {
				if (g = +g, e |= 0, !t) {
					var n = Math.pow(2, 8 * I - 1);
					x(this, g, e, I, n - 1, -n)
				}
				var l = 0,
					C = 1,
					A = 0;
				for (this[e] = 255 & g; ++l < I && (C *= 256);) g < 0 && 0 === A && 0 !== this[e + l - 1] && (A = 1), this[e + l] = (g / C >> 0) - A & 255;
				return e + I
			}, l.prototype.writeIntBE = function(g, e, I, t) {
				if (g = +g, e |= 0, !t) {
					var n = Math.pow(2, 8 * I - 1);
					x(this, g, e, I, n - 1, -n)
				}
				var l = I - 1,
					C = 1,
					A = 0;
				for (this[e + l] = 255 & g; --l >= 0 && (C *= 256);) g < 0 && 0 === A && 0 !== this[e + l + 1] && (A = 1), this[e + l] = (g / C >> 0) - A & 255;
				return e + I
			}, l.prototype.writeInt8 = function(g, e, I) {
				return g = +g, e |= 0, I || x(this, g, e, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (g = Math.floor(g)), g < 0 && (g = 255 + g + 1), this[e] = 255 & g, e + 1
			}, l.prototype.writeInt16LE = function(g, e, I) {
				return g = +g, e |= 0, I || x(this, g, e, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & g, this[e + 1] = g >>> 8) : f(this, g, e, !0), e + 2
			}, l.prototype.writeInt16BE = function(g, e, I) {
				return g = +g, e |= 0, I || x(this, g, e, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[e] = g >>> 8, this[e + 1] = 255 & g) : f(this, g, e, !1), e + 2
			}, l.prototype.writeInt32LE = function(g, e, I) {
				return g = +g, e |= 0, I || x(this, g, e, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & g, this[e + 1] = g >>> 8, this[e + 2] = g >>> 16, this[e + 3] = g >>> 24) : S(this, g, e, !0), e + 4
			}, l.prototype.writeInt32BE = function(g, e, I) {
				return g = +g, e |= 0, I || x(this, g, e, 4, 2147483647, -2147483648), g < 0 && (g = 4294967295 + g + 1), l.TYPED_ARRAY_SUPPORT ? (this[e] = g >>> 24, this[e + 1] = g >>> 16, this[e + 2] = g >>> 8, this[e + 3] = 255 & g) : S(this, g, e, !1), e + 4
			}, l.prototype.writeFloatLE = function(g, e, I) {
				return T(this, g, e, !0, I)
			}, l.prototype.writeFloatBE = function(g, e, I) {
				return T(this, g, e, !1, I)
			}, l.prototype.writeDoubleLE = function(g, e, I) {
				return O(this, g, e, !0, I)
			}, l.prototype.writeDoubleBE = function(g, e, I) {
				return O(this, g, e, !1, I)
			}, l.prototype.copy = function(g, e, I, t) {
				if (I || (I = 0), t || 0 === t || (t = this.length), e >= g.length && (e = g.length), e || (e = 0), t > 0 && t < I && (t = I), t === I) return 0;
				if (0 === g.length || 0 === this.length) return 0;
				if (e < 0) throw new RangeError("targetStart out of bounds");
				if (I < 0 || I >= this.length) throw new RangeError("sourceStart out of bounds");
				if (t < 0) throw new RangeError("sourceEnd out of bounds");
				t > this.length && (t = this.length), g.length - e < t - I && (t = g.length - e + I);
				var n, C = t - I;
				if (this === g && I < e && e < t) for (n = C - 1; n >= 0; --n) g[n + e] = this[n + I];
				else if (C < 1e3 || !l.TYPED_ARRAY_SUPPORT) for (n = 0; n < C; ++n) g[n + e] = this[n + I];
				else Uint8Array.prototype.set.call(g, this.subarray(I, I + C), e);
				return C
			}, l.prototype.fill = function(g, e, I, t) {
				if ("string" == typeof g) {
					if ("string" == typeof e ? (t = e, e = 0, I = this.length) : "string" == typeof I && (t = I, I = this.length), 1 === g.length) {
						var n = g.charCodeAt(0);
						n < 256 && (g = n)
					}
					if (void 0 !== t && "string" != typeof t) throw new TypeError("encoding must be a string");
					if ("string" == typeof t && !l.isEncoding(t)) throw new TypeError("Unknown encoding: " + t)
				} else "number" == typeof g && (g &= 255);
				if (e < 0 || this.length < e || this.length < I) throw new RangeError("Out of range index");
				if (I <= e) return this;
				e >>>= 0, I = void 0 === I ? this.length : I >>> 0, g || (g = 0);
				var C;
				if ("number" == typeof g) for (C = e; C < I; ++C) this[C] = g;
				else {
					var A = l.isBuffer(g) ? g : k(new l(g, t).toString()),
						i = A.length;
					for (C = 0; C < I - e; ++C) this[C + e] = A[C % i]
				}
				return this
			};
			var gg = /[^+\/0-9A-Za-z-_]/g
		}).call(e, I(9))
	}, function(g, e, I) {
		e = g.exports = I(6)(), e.push([g.i, "", ""])
	}, function(g, e, I) {
		e = g.exports = I(6)(), e.push([g.i, "", ""])
	}, function(g, e, I) {
		e = g.exports = I(6)(), e.push([g.i, "", ""])
	}, function(g, e) {
		e.read = function(g, e, I, t, n) {
			var l, C, A = 8 * n - t - 1,
				i = (1 << A) - 1,
				a = i >> 1,
				c = -7,
				u = I ? n - 1 : 0,
				s = I ? -1 : 1,
				d = g[e + u];
			for (u += s, l = d & (1 << -c) - 1, d >>= -c, c += A; c > 0; l = 256 * l + g[e + u], u += s, c -= 8);
			for (C = l & (1 << -c) - 1, l >>= -c, c += t; c > 0; C = 256 * C + g[e + u], u += s, c -= 8);
			if (0 === l) l = 1 - a;
			else {
				if (l === i) return C ? NaN : 1 / 0 * (d ? -1 : 1);
				C += Math.pow(2, t), l -= a
			}
			return (d ? -1 : 1) * C * Math.pow(2, l - t)
		}, e.write = function(g, e, I, t, n, l) {
			var C, A, i, a = 8 * l - n - 1,
				c = (1 << a) - 1,
				u = c >> 1,
				s = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				d = t ? 0 : l - 1,
				o = t ? 1 : -1,
				b = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
			for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (A = isNaN(e) ? 1 : 0, C = c) : (C = Math.floor(Math.log(e) / Math.LN2), e * (i = Math.pow(2, -C)) < 1 && (C--, i *= 2), e += C + u >= 1 ? s / i : s * Math.pow(2, 1 - u), e * i >= 2 && (C++, i /= 2), C + u >= c ? (A = 0, C = c) : C + u >= 1 ? (A = (e * i - 1) * Math.pow(2, n), C += u) : (A = e * Math.pow(2, u - 1) * Math.pow(2, n), C = 0)); n >= 8; g[I + d] = 255 & A, d += o, A /= 256, n -= 8);
			for (C = C << n | A, a += n; a > 0; g[I + d] = 255 & C, d += o, C /= 256, a -= 8);
			g[I + d - o] |= 128 * b
		}
	}, function(g, e) {
		var I = {}.toString;
		g.exports = Array.isArray ||
		function(g) {
			return "[object Array]" == I.call(g)
		}
	}, function(g, e) {
		function I() {
			throw new Error("setTimeout has not been defined")
		}
		function t() {
			throw new Error("clearTimeout has not been defined")
		}
		function n(g) {
			if (c === setTimeout) return setTimeout(g, 0);
			if ((c === I || !c) && setTimeout) return c = setTimeout, setTimeout(g, 0);
			try {
				return c(g, 0)
			} catch (e) {
				try {
					return c.call(null, g, 0)
				} catch (e) {
					return c.call(this, g, 0)
				}
			}
		}
		function l(g) {
			if (u === clearTimeout) return clearTimeout(g);
			if ((u === t || !u) && clearTimeout) return u = clearTimeout, clearTimeout(g);
			try {
				return u(g)
			} catch (e) {
				try {
					return u.call(null, g)
				} catch (e) {
					return u.call(this, g)
				}
			}
		}
		function C() {
			b && d && (b = !1, d.length ? o = d.concat(o) : r = -1, o.length && A())
		}
		function A() {
			if (!b) {
				var g = n(C);
				b = !0;
				for (var e = o.length; e;) {
					for (d = o, o = []; ++r < e;) d && d[r].run();
					r = -1, e = o.length
				}
				d = null, b = !1, l(g)
			}
		}
		function i(g, e) {
			this.fun = g, this.array = e
		}
		function a() {}
		var c, u, s = g.exports = {};
		!
		function() {
			try {
				c = "function" == typeof setTimeout ? setTimeout : I
			} catch (g) {
				c = I
			}
			try {
				u = "function" == typeof clearTimeout ? clearTimeout : t
			} catch (g) {
				u = t
			}
		}();
		var d, o = [],
			b = !1,
			r = -1;
		s.nextTick = function(g) {
			var e = new Array(arguments.length - 1);
			if (arguments.length > 1) for (var I = 1; I < arguments.length; I++) e[I - 1] = arguments[I];
			o.push(new i(g, e)), 1 !== o.length || b || n(A)
		}, i.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = a, s.addListener = a, s.once = a, s.off = a, s.removeListener = a, s.removeAllListeners = a, s.emit = a, s.binding = function(g) {
			throw new Error("process.binding is not supported")
		}, s.cwd = function() {
			return "/"
		}, s.chdir = function(g) {
			throw new Error("process.chdir is not supported")
		}, s.umask = function() {
			return 0
		}
	}, function(g, e, I) {
		(function(e) {
			var t = "object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this,
				n = t.regeneratorRuntime && Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime") >= 0,
				l = n && t.regeneratorRuntime;
			if (t.regeneratorRuntime = void 0, g.exports = I(104), n) t.regeneratorRuntime = l;
			else try {
				delete t.regeneratorRuntime
			} catch (g) {
				t.regeneratorRuntime = void 0
			}
		}).call(e, I(9))
	}, function(g, e, I) {
		(function(e, I) {
			!
			function(e) {
				"use strict";

				function t(g, e, I, t) {
					var n = e && e.prototype instanceof l ? e : l,
						C = Object.create(n.prototype),
						A = new o(t || []);
					return C._invoke = c(g, I, A), C
				}
				function n(g, e, I) {
					try {
						return {
							type: "normal",
							arg: g.call(e, I)
						}
					} catch (g) {
						return {
							type: "throw",
							arg: g
						}
					}
				}
				function l() {}
				function C() {}
				function A() {}
				function i(g) {
					["next", "throw", "return"].forEach(function(e) {
						g[e] = function(g) {
							return this._invoke(e, g)
						}
					})
				}
				function a(g) {
					function e(I, t, l, C) {
						var A = n(g[I], g, t);
						if ("throw" !== A.type) {
							var i = A.arg,
								a = i.value;
							return a && "object" == typeof a && G.call(a, "__await") ? Promise.resolve(a.__await).then(function(g) {
								e("next", g, l, C)
							}, function(g) {
								e("throw", g, l, C)
							}) : Promise.resolve(a).then(function(g) {
								i.value = g, l(i)
							}, C)
						}
						C(A.arg)
					}
					function t(g, I) {
						function t() {
							return new Promise(function(t, n) {
								e(g, I, t, n)
							})
						}
						return l = l ? l.then(t, t) : t()
					}
					"object" == typeof I && I.domain && (e = I.domain.bind(e));
					var l;
					this._invoke = t
				}
				function c(g, e, I) {
					var t = X;
					return function(l, C) {
						if (t === y) throw new Error("Generator is already running");
						if (t === Q) {
							if ("throw" === l) throw C;
							return r()
						}
						for (I.method = l, I.arg = C;;) {
							var A = I.delegate;
							if (A) {
								var i = u(A, I);
								if (i) {
									if (i === N) continue;
									return i
								}
							}
							if ("next" === I.method) I.sent = I._sent = I.arg;
							else if ("throw" === I.method) {
								if (t === X) throw t = Q, I.arg;
								I.dispatchException(I.arg)
							} else "return" === I.method && I.abrupt("return", I.arg);
							t = y;
							var a = n(g, e, I);
							if ("normal" === a.type) {
								if (t = I.done ? Q : F, a.arg === N) continue;
								return {
									value: a.arg,
									done: I.done
								}
							}
							"throw" === a.type && (t = Q, I.method = "throw", I.arg = a.arg)
						}
					}
				}
				function u(g, e) {
					var I = g.iterator[e.method];
					if (I === B) {
						if (e.delegate = null, "throw" === e.method) {
							if (g.iterator.
							return &&(e.method = "return", e.arg = B, u(g, e), "throw" === e.method)) return N;
							e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
						}
						return N
					}
					var t = n(I, g.iterator, e.arg);
					if ("throw" === t.type) return e.method = "throw", e.arg = t.arg, e.delegate = null, N;
					var l = t.arg;
					return l ? l.done ? (e[g.resultName] = l.value, e.next = g.nextLoc, "return" !== e.method && (e.method = "next", e.arg = B), e.delegate = null, N) : l : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, N)
				}
				function s(g) {
					var e = {
						tryLoc: g[0]
					};
					1 in g && (e.catchLoc = g[1]), 2 in g && (e.finallyLoc = g[2], e.afterLoc = g[3]), this.tryEntries.push(e)
				}
				function d(g) {
					var e = g.completion || {};
					e.type = "normal", delete e.arg, g.completion = e
				}
				function o(g) {
					this.tryEntries = [{
						tryLoc: "root"
					}], g.forEach(s, this), this.reset(!0)
				}
				function b(g) {
					if (g) {
						var e = g[Z];
						if (e) return e.call(g);
						if ("function" == typeof g.next) return g;
						if (!isNaN(g.length)) {
							var I = -1,
								t = function e() {
									for (; ++I < g.length;) if (G.call(g, I)) return e.value = g[I], e.done = !1, e;
									return e.value = B, e.done = !0, e
								};
							return t.next = t
						}
					}
					return {
						next: r
					}
				}
				function r() {
					return {
						value: B,
						done: !0
					}
				}
				var B, m = Object.prototype,
					G = m.hasOwnProperty,
					h = "function" == typeof Symbol ? Symbol : {},
					Z = h.iterator || "@@iterator",
					W = h.toStringTag || "@@toStringTag",
					V = "object" == typeof g,
					p = e.regeneratorRuntime;
				if (p) return void(V && (g.exports = p));
				p = e.regeneratorRuntime = V ? g.exports : {}, p.wrap = t;
				var X = "suspendedStart",
					F = "suspendedYield",
					y = "executing",
					Q = "completed",
					N = {},
					v = {};
				v[Z] = function() {
					return this
				};
				var R = Object.getPrototypeOf,
					Y = R && R(R(b([])));
				Y && Y !== m && G.call(Y, Z) && (v = Y);
				var U = A.prototype = l.prototype = Object.create(v);
				C.prototype = U.constructor = A, A.constructor = C, A[W] = C.displayName = "GeneratorFunction", p.isGeneratorFunction = function(g) {
					var e = "function" == typeof g && g.constructor;
					return !!e && (e === C || "GeneratorFunction" === (e.displayName || e.name))
				}, p.mark = function(g) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(g, A) : (g.__proto__ = A, W in g || (g[W] = "GeneratorFunction")), g.prototype = Object.create(U), g
				}, p.awrap = function(g) {
					return {
						__await: g
					}
				}, i(a.prototype), p.AsyncIterator = a, p.async = function(g, e, I, n) {
					var l = new a(t(g, e, I, n));
					return p.isGeneratorFunction(e) ? l : l.next().then(function(g) {
						return g.done ? g.value : l.next()
					})
				}, i(U), U[W] = "Generator", U.toString = function() {
					return "[object Generator]"
				}, p.keys = function(g) {
					var e = [];
					for (var I in g) e.push(I);
					return e.reverse(), function I() {
						for (; e.length;) {
							var t = e.pop();
							if (t in g) return I.value = t, I.done = !1, I
						}
						return I.done = !0, I
					}
				}, p.values = b, o.prototype = {
					constructor: o,
					reset: function(g) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = B, this.done = !1, this.delegate = null, this.method = "next", this.arg = B, this.tryEntries.forEach(d), !g) for (var e in this)"t" === e.charAt(0) && G.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = B)
					},
					stop: function() {
						this.done = !0;
						var g = this.tryEntries[0],
							e = g.completion;
						if ("throw" === e.type) throw e.arg;
						return this.rval
					},
					dispatchException: function(g) {
						function e(e, t) {
							return l.type = "throw", l.arg = g, I.next = e, t && (I.method = "next", I.arg = B), !! t
						}
						if (this.done) throw g;
						for (var I = this, t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t],
								l = n.completion;
							if ("root" === n.tryLoc) return e("end");
							if (n.tryLoc <= this.prev) {
								var C = G.call(n, "catchLoc"),
									A = G.call(n, "finallyLoc");
								if (C && A) {
									if (this.prev < n.catchLoc) return e(n.catchLoc, !0);
									if (this.prev < n.finallyLoc) return e(n.finallyLoc)
								} else if (C) {
									if (this.prev < n.catchLoc) return e(n.catchLoc, !0)
								} else {
									if (!A) throw new Error("try statement without catch or finally");
									if (this.prev < n.finallyLoc) return e(n.finallyLoc)
								}
							}
						}
					},
					abrupt: function(g, e) {
						for (var I = this.tryEntries.length - 1; I >= 0; --I) {
							var t = this.tryEntries[I];
							if (t.tryLoc <= this.prev && G.call(t, "finallyLoc") && this.prev < t.finallyLoc) {
								var n = t;
								break
							}
						}
						n && ("break" === g || "continue" === g) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
						var l = n ? n.completion : {};
						return l.type = g, l.arg = e, n ? (this.method = "next", this.next = n.finallyLoc, N) : this.complete(l)
					},
					complete: function(g, e) {
						if ("throw" === g.type) throw g.arg;
						return "break" === g.type || "continue" === g.type ? this.next = g.arg : "return" === g.type ? (this.rval = this.arg = g.arg, this.method = "return", this.next = "end") : "normal" === g.type && e && (this.next = e), N
					},
					finish: function(g) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var I = this.tryEntries[e];
							if (I.finallyLoc === g) return this.complete(I.completion, I.afterLoc), d(I), N
						}
					},
					catch: function(g) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var I = this.tryEntries[e];
							if (I.tryLoc === g) {
								var t = I.completion;
								if ("throw" === t.type) {
									var n = t.arg;
									d(I)
								}
								return n
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(g, e, I) {
						return this.delegate = {
							iterator: b(g),
							resultName: e,
							nextLoc: I
						}, "next" === this.method && (this.arg = B), N
					}
				}
			}("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
		}).call(e, I(9), I(102))
	}, function(g, e, I) {
		var t = I(0)(I(39), I(162), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(40), I(171), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(41), I(163), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		I(186);
		var t = I(0)(I(42), I(154), "data-v-22a466fb", null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(43), I(166), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(44), I(164), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(45), I(149), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(46), I(151), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(47), I(156), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(48), I(184), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(49), I(183), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		I(188);
		var t = I(0)(I(50), I(161), "data-v-346d1195", null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(51), I(174), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(52), I(153), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		I(187);
		var t = I(0)(I(53), I(157), "data-v-2c609613", null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(54), I(169), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(55), I(182), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(56), I(148), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(57), I(181), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(58), I(165), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(59), I(170), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(60), I(150), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(61), I(180), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(63), I(147), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(64), I(175), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(65), I(158), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(66), I(152), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(67), I(167), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(68), I(179), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(69), I(145), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(70), I(178), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(71), I(159), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(72), I(176), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(73), I(185), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(74), I(173), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(75), I(155), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(76), I(168), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(77), I(172), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(78), I(146), null, null);
		g.exports = t.exports
	}, function(g, e, I) {
		var t = I(0)(I(79), I(160), null, null);
		g.exports = t.exports
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "tile-block",
					style: {
						"background-color": g.themeColor,
						filter: g.enabledColor
					},
					on: {
						click: g.clickItem
					}
				}, [I("img", {
					staticClass: "tile-block-icon",
					attrs: {
						src: g.tileBlockData.icon,
						alt: ""
					}
				}), g._v(" "), I("span", {
					staticClass: "tile-block-title"
				}, [g._v(g._s(g.tileBlockData.tradeName))])])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					ref: "tileMenu",
					staticClass: "tile-menu"
				}, [I("div", {
					ref: "tileMenuWrapper",
					staticClass: "tile-menu-wrapper"
				}, g._l(g.tileMenuData, function(e, t) {
					return I("tile-column", {
						key: t,
						ref: "tileColumns",
						refInFor: !0,
						attrs: {
							"is-only-show-one": g.isOnlyShowOne,
							"tile-size": g.tileSize,
							"tile-space": g.tileSpace,
							"tile-column-data": e,
							"tile-column-index": t,
							"is-expanded": t === g.currentColumnIndex
						},
						on: {
							itemClicked: g.onMenuItemClicked,
							widthChanged: g.moveIntoView
						}
					})
				}))])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "v-table-views v-table-class",
					style: {
						width: g.internalWidth + "px",
						height: g.getTableHeight + "px"
					}
				}, [g.frozenCols.length > 0 ? [I("div", {
					staticClass: "v-table-leftview",
					style: {
						width: g.leftViewWidth + "px"
					}
				}, [I("div", {
					staticClass: "v-table-header v-table-title-class",
					style: {
						width: g.leftViewWidth + "px",
						"background-color": g.titleBgColor
					}
				}, [I("div", {
					staticClass: "v-table-header-inner",
					staticStyle: {
						display: "block"
					}
				}, [I("table", {
					staticClass: "v-table-htable",
					attrs: {
						border: "0",
						cellspacing: "0",
						cellpadding: "0"
					}
				}, [I("tbody", [g.frozenTitleCols.length > 0 ? g._l(g.frozenTitleCols, function(e) {
					return I("tr", g._l(e, function(t) {
						return I("td", {
							class: [t.titleCellClassName],
							attrs: {
								colspan: t.colspan,
								rowspan: g.dealTitleRowspan(e, t.rowspan)
							}
						}, [I("div", {
							class: ["v-table-title-cell", g.showVerticalBorder ? "vertical-border" : "", g.showHorizontalBorder ? "horizontal-border" : ""],
							style: {
								width: g.titleColumnWidth(t.fields) + "px",
								height: g.titleColumnHeight(t.rowspan) + "px",
								"text-align": t.titleAlign
							}
						}, [I("span", {
							staticClass: "table-title"
						}, [I("span", {
							domProps: {
								innerHTML: g._s(t.title)
							}
						}), g._v(" "), g.enableSort(t.orderBy) ? I("span", {
							staticClass: "v-table-sort-icon",
							on: {
								click: function(e) {
									e.stopPropagation(), g.sortControl(t.fields[0], t.orderBy)
								}
							}
						}, [I("i", {
							class: ["aui-icon-angle1", "asc" === t.orderBy ? "checked" : ""]
						}), g._v(" "), I("i", {
							class: ["aui-icon-angle", "desc" === t.orderBy ? "checked" : ""]
						})]) : g._e()])])])
					}))
				}) : [I("tr", {
					staticClass: "v-table-header-row"
				}, g._l(g.frozenCols, function(e) {
					return I("td", {
						class: [e.titleCellClassName]
					}, [I("div", {
						class: ["v-table-title-cell", g.showVerticalBorder ? "vertical-border" : "", g.showHorizontalBorder ? "horizontal-border" : ""],
						style: {
							width: e.width + "px",
							height: g.titleRowHeight + "px",
							"text-align": e.titleAlign
						}
					}, [I("span", {
						staticClass: "table-title"
					}, [I("span", {
						domProps: {
							innerHTML: g._s(e.title)
						}
					}), g._v(" "), g.enableSort(e.orderBy) ? I("span", {
						staticClass: "v-table-sort-icon",
						on: {
							click: function(I) {
								I.stopPropagation(), g.sortControl(e.field, e.orderBy)
							}
						}
					}, [I("i", {
						class: ["aui-icon-angle1", "asc" === e.orderBy ? "checked" : ""]
					}), g._v(" "), I("i", {
						class: ["aui-icon-angle", "desc" === e.orderBy ? "checked" : ""]
					})]) : g._e()])])])
				}))]], 2)])])]), g._v(" "), I("div", {
					staticClass: "v-table-body v-table-body-class",
					style: {
						width: g.leftViewWidth + "px",
						height: g.bodyViewHeight + "px"
					}
				}, [I("div", {
					staticClass: "v-table-body-inner"
				}, [I("table", {
					staticClass: "v-table-btable",
					attrs: {
						cellspacing: "0",
						cellpadding: "0",
						border: "0"
					}
				}, [I("tbody", g._l(g.internalTableData, function(e, t) {
					return I("tr", {
						staticClass: "v-table-row",
						style: [g.trBgColor(t + 1), g.setRowHoverColor(e.__mouseenter__), g.setRowClickColor(e.__columnCellClick__)],
						on: {
							mouseenter: function(e) {
								e.stopPropagation(), g.handleMouseEnter(t)
							},
							mouseleave: function(e) {
								e.stopPropagation(), g.handleMouseOut(t)
							}
						}
					}, g._l(g.frozenCols, function(n, l) {
						return g.cellMergeInit(t, n.field, e, !0) ? I("td", {
							key: l,
							class: [g.setColumnCellClassName(t, n.field, e)],
							attrs: {
								colSpan: g.setColRowSpan(t, n.field, e).colSpan,
								rowSpan: g.setColRowSpan(t, n.field, e).rowSpan
							}
						}, [g.isCellMergeRender(t, n.field, e) ? I("div", {
							class: ["v-table-body-cell", g.showVerticalBorder ? "vertical-border" : "", g.showHorizontalBorder ? "horizontal-border" : ""],
							style: {
								width: g.getRowWidthByColSpan(t, n.field, e) + "px",
								height: g.getRowHeightByRowSpan(t, n.field, e) + "px",
								"line-height": g.getRowHeightByRowSpan(t, n.field, e) + "px",
								"text-align": n.columnAlign
							},
							attrs: {
								title: n.overflowTitle ? g.overflowTitle(e, n) : ""
							},
							on: {
								click: function(I) {
									I.stopPropagation(), g.onCellClick(t, e, n), g.cellEditClick(I, n.isEdit, e, n.field, t)
								}
							}
						}, [g.cellMergeContentType(t, n.field, e).isComponent ? [I(g.cellMerge(t, e, n.field).componentName, {
							tag: "component",
							attrs: {
								rowData: e,
								field: n.field ? n.field : "",
								index: t
							},
							on: {
								"on-custom-comp": g.customCompFunc
							}
						})] : [I("span", {
							domProps: {
								innerHTML: g._s(g.cellMerge(t, e, n.field).content)
							}
						})]], 2) : I("div", {
							class: ["v-table-body-cell", g.showVerticalBorder ? "vertical-border" : "", g.showHorizontalBorder ? "horizontal-border" : ""],
							style: {
								width: n.width + "px",
								height: g.rowHeight + "px",
								"line-height": g.rowHeight + "px",
								"text-align": n.columnAlign
							},
							attrs: {
								title: n.overflowTitle ? g.overflowTitle(e, n) : ""
							},
							on: {
								click: function(I) {
									I.stopPropagation(), g.onCellClick(t, e, n), g.cellEditClick(I, n.isEdit, e, n.field, t)
								}
							}
						}, ["string" == typeof n.componentName && n.componentName.length > 0 ? [I(n.componentName, {
							tag: "component",
							attrs: {
								rowData: e,
								field: n.field ? n.field : "",
								index: t
							},
							on: {
								"on-custom-comp": g.customCompFunc
							}
						})] : ["function" == typeof n.formatter ? I("span", {
							domProps: {
								innerHTML: g._s(n.formatter(e, t, g.pagingIndex, n.field))
							}
						}) : I("span", [g._v("\n                        " + g._s(e[n.field]) + "\n                      ")])]], 2)]) : g._e()
					}))
				}))])])])])] : g._e(), g._v(" "), I("div", {
					staticClass: "v-table-rightview",
					style: {
						width: g.rightViewWidth + "px"
					}
				}, [I("div", {
					staticClass: "v-table-header v-table-title-class",
					style: {
						width: g.rightViewWidth - 1 + "px",
						"background-color": g.titleBgColor
					}
				}, [I("div", {
					staticClass: "v-table-header-inner",
					staticStyle: {
						display: "block"
					}
				}, [I("table", {
					staticClass: "v-table-htable",
					attrs: {
						border: "0",
						cellspacing: "0",
						cellpadding: "0"
					}
				}, [I("tbody", [g.noFrozenTitleCols.length > 0 ? g._l(g.noFrozenTitleCols, function(e) {
					return I("tr", g._l(e, function(t) {
						return I("td", {
							class: [t.titleCellClassName],
							attrs: {
								colspan: t.colspan,
								rowspan: g.dealTitleRowspan(e, t.rowspan)
							}
						}, [I("div", {
							class: ["v-table-title-cell", g.showVerticalBorder ? "vertical-border" : "", g.showHorizontalBorder ? "horizontal-border" : ""],
							style: {
								width: g.titleColumnWidth(t.fields) + "px",
								height: g.titleColumnHeight(t.rowspan) + "px",
								"text-align": t.titleAlign
							}
						}, [I("span", {
							staticClass: "table-title"
						}, [I("span", {
							domProps: {
								innerHTML: g._s(t.title)
							}
						}), g._v(" "), g.enableSort(t.orderBy) ? I("span", {
							staticClass: "v-table-sort-icon",
							on: {
								click: function(e) {
									e.stopPropagation(), g.sortControl(t.fields[0], t.orderBy)
								}
							}
						}, [I("i", {
							class: ["aui-icon-angle1", "asc" === t.orderBy ? "checked" : ""]
						}), g._v(" "), I("i", {
							class: ["aui-icon-angle", "desc" === t.orderBy ? "checked" : ""]
						})]) : g._e()])])])
					}))
				}) : [I("tr", {
					staticClass: "v-table-header-row"
				}, g._l(g.noFrozenCols, function(e, t) {
					return I("td", {
						class: [e.titleCellClassName]
					}, [I("div", {
						class: ["v-table-title-cell", g.showVerticalBorder ? "vertical-border" : "", g.showHorizontalBorder ? "horizontal-border" : ""],
						style: {
							width: e.width + "px",
							height: g.titleRowHeight + "px",
							"text-align": e.titleAlign
						}
					}, [I("span", {
						staticClass: "table-title"
					}, [I("span", {
						domProps: {
							innerHTML: g._s(e.title)
						}
					}), g._v(" "), g.enableSort(e.orderBy) ? I("span", {
						staticClass: "v-table-sort-icon",
						on: {
							click: function(I) {
								I.stopPropagation(), g.sortControl(e.field, e.orderBy)
							}
						}
					}, [I("i", {
						class: ["aui-icon-angle1", "asc" === e.orderBy ? "checked" : ""]
					}), g._v(" "), I("i", {
						class: ["aui-icon-angle", "desc" === e.orderBy ? "checked" : ""]
					})]) : g._e()])])])
				}))]], 2)])])]), g._v(" "), I("div", {
					class: ["v-table-body v-table-body-class", g.hasFrozenColumn ? "" : "v-table-rightview-special-border"],
					style: {
						width: g.rightViewWidth + "px",
						height: g.bodyViewHeight + "px"
					}
				}, [I("table", {
					staticClass: "v-table-btable",
					attrs: {
						cellspacing: "0",
						cellpadding: "0",
						border: "0"
					}
				}, [I("tbody", g._l(g.internalTableData, function(e, t) {
					return I("tr", {
						key: t,
						staticClass: "v-table-row",
						style: [g.trBgColor(t + 1), g.setRowHoverColor(e.__mouseenter__), g.setRowClickColor(e.__columnCellClick__)],
						on: {
							mouseenter: function(e) {
								e.stopPropagation(), g.handleMouseEnter(t)
							},
							mouseleave: function(e) {
								e.stopPropagation(), g.handleMouseOut(t)
							}
						}
					}, g._l(g.noFrozenCols, function(n, l) {
						return g.cellMergeInit(t, n.field, e, !1) ? I("td", {
							key: l,
							class: [g.setColumnCellClassName(t, n.field, e)],
							attrs: {
								colSpan: g.setColRowSpan(t, n.field, e).colSpan,
								rowSpan: g.setColRowSpan(t, n.field, e).rowSpan
							}
						}, [g.isCellMergeRender(t, n.field, e) ? I("div", {
							class: ["v-table-body-cell", g.showVerticalBorder ? "vertical-border" : "", g.showHorizontalBorder ? "horizontal-border" : ""],
							style: {
								width: g.getRowWidthByColSpan(t, n.field, e) + "px",
								height: g.getRowHeightByRowSpan(t, n.field, e) + "px",
								"line-height": g.getRowHeightByRowSpan(t, n.field, e) + "px",
								"text-align": n.columnAlign
							},
							attrs: {
								title: n.overflowTitle ? g.overflowTitle(e, n) : ""
							},
							on: {
								click: function(I) {
									I.stopPropagation(), g.onCellClick(t, e, n), g.cellEditClick(I, n.isEdit, e, n.field, t)
								}
							}
						}, [g.cellMergeContentType(t, n.field, e).isComponent ? [I(g.cellMerge(t, e, n.field).componentName, {
							tag: "component",
							attrs: {
								rowData: e,
								field: n.field ? n.field : "",
								index: t
							},
							on: {
								"on-custom-comp": g.customCompFunc
							}
						})] : [I("span", {
							domProps: {
								innerHTML: g._s(g.cellMerge(t, e, n.field).content)
							}
						})]], 2) : I("div", {
							class: ["v-table-body-cell", g.showVerticalBorder ? "vertical-border" : "", g.showHorizontalBorder ? "horizontal-border" : ""],
							style: {
								width: n.width + "px",
								height: g.rowHeight + "px",
								"line-height": g.rowHeight + "px",
								"text-align": n.columnAlign
							},
							attrs: {
								title: n.overflowTitle ? g.overflowTitle(e, n) : ""
							},
							on: {
								click: function(I) {
									I.stopPropagation(), g.onCellClick(t, e, n), g.cellEditClick(I, n.isEdit, e, n.field, t)
								}
							}
						}, ["string" == typeof n.componentName && n.componentName.length > 0 ? [I(n.componentName, {
							tag: "component",
							attrs: {
								rowData: e,
								field: n.field ? n.field : "",
								index: t
							},
							on: {
								"on-custom-comp": g.customCompFunc
							}
						})] : ["function" == typeof n.formatter ? I("span", {
							domProps: {
								innerHTML: g._s(n.formatter(e, t, g.pagingIndex, n.field))
							}
						}) : I("span", [g._v("\n                    " + g._s(e[n.field]) + "\n                  ")])]], 2)]) : g._e()
					}))
				}))])])]), g._v(" "), g.isTableEmpty ? I("table-empty", {
					attrs: {
						width: g.internalWidth,
						totalColumnsWidth: g.totalColumnsWidth,
						contentHeight: g.errorContentHeight,
						titleHeight: g.getTotalColumnsHeight(),
						errorContent: g.errorContent,
						isLoading: g.isLoading
					}
				}) : g._e(), g._v(" "), g.isLoading ? I("loading", {
					attrs: {
						loadingContent: g.loadingContent
					}
				}) : g._e()], 2)
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					directives: [{
						name: "clickoutside",
						rawName: "v-clickoutside",
						value: g.onSelectFocusOut,
						expression: "onSelectFocusOut"
					}],
					staticClass: "aui-select",
					class: g.className,
					on: {
						click: g.toggleOption
					}
				}, [I("div", {
					staticClass: "aui-select-box"
				}, [I("i", {
					staticClass: "aui-select__icon"
				}, [I("b", {
					class: {
						rem: g.isDown && !g.disabled
					}
				})]), g._v(" "), I("input", {
					staticClass: "aui-input",
					class: {
						disabled: g.disabled
					},
					attrs: {
						type: "text",
						placeholder: g.placeholder,
						readOnly: "false",
						disabled: g.disabled
					},
					domProps: {
						value: g.label
					}
				})]), g._v(" "), g.isHas ? I("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: g.isDown,
						expression: "isDown"
					}],
					staticClass: "aui-option"
				}, [g.isHas ? I("ul", {
					staticClass: "aui-option-list",
					style: {
						maxHeight: g.maxHeight + "px"
					}
				}, [g._t("default")], 2) : g._e()]) : g._e()])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-currency-input"
				}, [I("input", {
					ref: "autoNumericInput",
					class: g.className,
					attrs: {
						type: "text",
						placeholder: g.placeholder,
						onpaste: "return false",
						oncontextmenu: "return false",
						oncopy: "return false",
						oncut: "return false",
						disabled: g.disabled
					},
					on: {
						keydown: g.setUserInteraction,
						paste: g.setUserInteraction,
						drop: g.setUserInteraction,
						keyup: g.resetUserInteraction,
						blur: g.resetUserInteraction,
						"autoNumeric:rawValueModified": g.updateVModel
					}
				})])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-pane"
				}, [I("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: g.isActive,
						expression: "isActive"
					}],
					staticClass: "aui-tabs-pane-container"
				}, [g._t("default")], 2)])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					directives: [{
						name: "clickoutside",
						rawName: "v-clickoutside",
						value: g.evaluation,
						expression: "evaluation"
					}],
					ref: "dateOffset",
					staticClass: "aui-date-picker"
				}, [I("i", {
					staticClass: "aui-icon-date",
					on: {
						click: g.offsetFixed
					}
				}), g._v(" "), I("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: g.value,
						expression: "value"
					}],
					staticClass: "aui-input",
					class: {
						"aui-input-focus": g.isFocus
					},
					attrs: {
						type: "text",
						readOnly: "false",
						placeholder: g.placeholder,
						disabled: g.disabled
					},
					domProps: {
						value: g.value
					},
					on: {
						click: g.offsetFixed,
						input: function(e) {
							e.target.composing || (g.value = e.target.value)
						}
					}
				}), g._v(" "), I("div", {
					staticClass: "aui-dialog-box"
				}, [I("div", {
					staticClass: "aui-date-panel-body",
					style: {
						top: g.setTop,
						left: g.setLeft,
						opacity: g.panelState,
						"z-index": g.zIndex,
						width: g.panelWidth
					}
				}, [I("div", {
					staticClass: "aui-date-panel-year date-container",
					style: {
						width: g.panelYearWidth
					}
				}, [I("div", {
					staticClass: "aui-date-panel-header"
				}, [g._v("年")]), g._v(" "), I("div", {
					staticClass: "aui-date-panel-main"
				}, [I("div", {
					staticClass: "year_box"
				}, [I("ul", {
					style: {
						width: g.panelYearBoxWidth
					}
				}, g._l(g.yearList, function(e, t) {
					return I("li", {
						key: t,
						ref: "a" + t,
						refInFor: !0,
						class: {
							selected: g.yearSelect(e, "a" + t),
							invalid: g.validateYear(e)
						},
						domProps: {
							textContent: g._s(e + "年")
						},
						on: {
							click: function(I) {
								g.selectYear(e)
							}
						}
					})
				}))])])]), g._v(" "), g.panelMonthIsHide ? I("div", {
					staticClass: "aui-date-panel-month date-container",
					style: {
						width: g.panelMonthWidth
					}
				}, [I("div", {
					staticClass: "aui-date-panel-header"
				}, [g._v("月")]), g._v(" "), I("div", {
					staticClass: "aui-date-panel-main"
				}, g._l(g.monthList, function(e, t) {
					return I("div", {
						key: t,
						staticClass: "month_box",
						class: {
							selected: g.monthSelect(t),
							invalid: g.validateMonth(t)
						},
						on: {
							click: function(e) {
								g.selectMonth(t)
							}
						}
					}, [g._v(g._s(e) + "月")])
				}))]) : g._e(), g._v(" "), g.panelDayIsHide ? I("div", {
					staticClass: "aui-date-panel-day date-container"
				}, [I("div", {
					staticClass: "aui-date-panel-header"
				}, [g._v("日")]), g._v(" "), I("div", {
					staticClass: "aui-date-panel-main"
				}, [I("div", {
					staticClass: "day_box"
				}, [I("ul", {
					staticClass: "day-list"
				}, g._l(g.dateList, function(e, t) {
					return I("li", {
						key: t,
						class: {
							preMonth: e.previousMonth,
							nextMonth: e.nextMonth,
							invalid: g.validateDate(e),
							firstItem: t % 7 == 0,
							isDateDisabled: e.isDateDisabled
						},
						on: {
							click: function(I) {
								g.selectDate(e)
							}
						}
					}, [I("div", {
						staticClass: "message",
						class: {
							selected: g.dateSelect(e)
						}
					}, [I("span", {
						domProps: {
							textContent: g._s(e.value)
						}
					})])])
				}))])])]) : g._e(), g._v(" "), I("button", {
					staticClass: "yesBtn",
					on: {
						click: function(e) {
							e.stopPropagation(), g.evaluation(1)
						}
					}
				}, [g._v("确定")])])])])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-text-area"
				}, [I("textarea", {
					attrs: {
						placeholder: g.placeholder,
						disabled: g.disabled,
						maxlength: g.maxlength
					},
					domProps: {
						value: g.value
					},
					on: {
						input: g.handleInput,
						focus: g.handleFocus,
						blur: g.handleBlur
					}
				})])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-password clearfix",
					class: [g.types]
				}, g._l(g.count, function(e, t) {
					return I("div", [I("div", [g.keyCount > t ? I("span", [g._v(" * ")]) : g._e()])])
				}))
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("label", {
					staticClass: "aui-checkbox"
				}, [I("span", {
					staticClass: "aui-checkbox__input",
					class: {
						"is-disabled": g.disabled,
						"is-checked": g.isChecked,
						"is-indeterminate": g.indeterminate,
						"is-focus": g.isFocus
					}
				}, [I("span", {
					staticClass: "aui-checkbox__inner"
				}), g._v(" "), g.trueLabel || g.falseLabel ? I("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: g.model,
						expression: "model"
					}],
					staticClass: "aui-checkbox__original",
					attrs: {
						type: "checkbox",
						name: g.name,
						disabled: g.disabled,
						"true-value": g.trueLabel,
						"false-value": g.falseLabel
					},
					domProps: {
						checked: Array.isArray(g.model) ? g._i(g.model, null) > -1 : g._q(g.model, g.trueLabel)
					},
					on: {
						change: g.handleChange,
						__c: function(e) {
							var I = g.model,
								t = e.target,
								n = t.checked ? g.trueLabel : g.falseLabel;
							if (Array.isArray(I)) {
								var l = g._i(I, null);
								n ? l < 0 && (g.model = I.concat(null)) : l > -1 && (g.model = I.slice(0, l).concat(I.slice(l + 1)))
							} else g.model = n
						}
					}
				}) : I("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: g.model,
						expression: "model"
					}],
					staticClass: "aui-checkbox__original",
					attrs: {
						type: "checkbox",
						disabled: g.disabled,
						name: g.name
					},
					domProps: {
						value: g.label,
						checked: Array.isArray(g.model) ? g._i(g.model, g.label) > -1 : g.model
					},
					on: {
						change: g.handleChange,
						__c: function(e) {
							var I = g.model,
								t = e.target,
								n = !! t.checked;
							if (Array.isArray(I)) {
								var l = g.label,
									C = g._i(I, l);
								n ? C < 0 && (g.model = I.concat(l)) : C > -1 && (g.model = I.slice(0, C).concat(I.slice(C + 1)))
							} else g.model = n
						}
					}
				})]), g._v(" "), g.$slots.
			default ||g.label ? I("span", {
					staticClass: "aui-checkbox__label"
				}, [g._t("default"), g._v(" "), g.$slots.
			default ?g._e():
				[g._v(g._s(g.label))]], 2):
				g._e()])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "tile-group-header",
					style: {
						"background-color": g.themeColor
					}
				}, [I("div", {
					staticClass: "tile-group-header-title"
				}, [g._v(g._s(g.title))]), g._v(" "), g.overWidth ? I("div", [I("div", {
					staticClass: "tile-group-header-expand",
					on: {
						click: g.changeShow
					}
				}, [I("span", [g._v(g._s(g.message))]), g._v(" "), I("img", {
					staticClass: "tile-group-header-expand-icon",
					attrs: {
						src: g.iconSrc
					}
				})])]) : g._e()])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("transition", {
					attrs: {
						name: "dialog-fade"
					},
					on: {
						"after-enter": g.onAfterEnter,
						"after-leave": g.onAfterLeave
					}
				}, [g.visible ? I("div", {
					staticClass: "dialog-window",
					on: {
						click: function(e) {
							if (e.target !== e.currentTarget) return null;
							g.handleWrapperClick(e)
						}
					}
				}, [I(g.content, {
					ref: "dialogContent",
					tag: "component",
					staticClass: "aui-content-presenter",
					attrs: {
						dialogBoxContentArgs: g.dialogBoxContentArgs
					}
				})], 1) : g._e()])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("label", {
					staticClass: "aui-radio"
				}, [I("span", {
					staticClass: "aui-radio__input",
					class: {
						"is-disabled": g.isDisabled,
						"is-checked": g.model === g.label,
						"is-focus": g.isFocus
					}
				}, [I("span", {
					staticClass: "aui-radio__inner"
				}), g._v(" "), I("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: g.model,
						expression: "model"
					}],
					staticClass: "aui-radio__original",
					attrs: {
						type: "radio",
						name: g.name,
						disabled: g.isDisabled
					},
					domProps: {
						value: g.label,
						checked: g._q(g.model, g.label)
					},
					on: {
						__c: function(e) {
							g.model = g.label
						}
					}
				})]), g._v(" "), I("span", {
					staticClass: "aui-radio__label"
				}, [g._t("default"), g._v(" "), g.$slots.
			default ?g._e():
				[g._v(g._s(g.label))]], 2)])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "v-table-empty"
				}, [I("div", {
					staticClass: "v-table-empty-content",
					style: {
						height: g.contentHeight + "px",
						width: g.width + "px",
						top: g.titleHeight + "px"
					}
				}, [I("div", {
					staticClass: "v-table-empty-inner",
					style: {
						height: g.contentHeight + "px",
						width: "100%",
						"line-height": g.contentHeight + "px"
					},
					domProps: {
						innerHTML: g._s(g.getCurrentContent)
					}
				})]), g._v(" "), I("div", {
					staticClass: "v-table-empty-scroll",
					style: {
						height: g.contentHeight + "px",
						width: g.width + "px",
						top: g.titleHeight + "px"
					}
				}, [I("div", {
					staticClass: "v-table-empty-inner",
					style: {
						height: "1px",
						width: g.totalColumnsWidth + "px"
					}
				})])])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "tile-dialog"
				}, [I("div", {
					staticClass: "tile-dialog-header",
					style: {
						"background-color": g.dialogBoxContentArgs.themeColor
					}
				}, [g._v(g._s(g.dialogBoxContentArgs.title))]), g._v(" "), I("dialog-list", {
					attrs: {
						"tile-list-data": g.dialogBoxContentArgs.children,
						width: 184 * g.col > 552 ? 184 * g.col + "px" : "552px",
						height: 170 * g.row + "px"
					},
					on: {
						itemClicked: g.onMenuItemClicked
					}
				})], 1)
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-tip"
				}, [I("span", {
					class: g.sizeClass
				}, [g._t("default")], 2)])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement;
				g._self._c;
				return g._m(0)
			},
			staticRenderFns: [function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-loading"
				}, [I("span"), g._v(" "), I("span"), g._v(" "), I("span"), g._v(" "), I("span"), g._v(" "), I("span"), g._v(" "), I("span"), g._v(" "), I("span"), g._v(" "), I("span")])
			}]
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-admin-input"
				}, [I("input", {
					class: g.iconClass,
					attrs: {
						type: g.type,
						placeholder: g.placeholder,
						disabled: g.disabled,
						minlength: g.minlength,
						maxlength: g.maxlength
					},
					domProps: {
						value: g.value
					},
					on: {
						input: g.handleInput
					}
				})])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("button", {
					staticClass: "aui-button",
					class: [g.types, g.sizes, g.cornerTypes, g.classBtn],
					attrs: {
						disabled: g.disabled,
						fill: g.fill
					},
					on: {
						click: g.handleClick
					}
				}, [g.$slots.
			default ?I("span", [g._t("default")], 2):
				g._e()])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-counter-input",
					class: [g.sizeClass,
					{
						"is-disabled": g.disabled
					}, {
						"is-focus": g.isFocus
					}]
				}, [I("span", {
					staticClass: "aui-input-number__decrease",
					class: [{
						"is-disabled": g.disabled
					}, {
						"min-disabled": g.value === g.min
					}],
					on: {
						mousedown: g.touchstartDecrease,
						mouseup: g.touchendDecrease,
						touchstart: g.touchstartDecrease,
						touchend: g.touchendDecrease,
						focusin: g.onFocusin,
						click: function(e) {
							g.onClick(e, "decrease")
						}
					}
				}, [I("i", [g._v("¯")])]), g._v(" "), I("span", {
					staticClass: "aui-input-number__increase",
					class: [{
						"is-disabled": g.disabled
					}, {
						"max-disabled": g.value === g.max
					}],
					on: {
						mousedown: g.touchstartIncrease,
						mouseup: g.touchendIncrease,
						touchstart: g.touchstartIncrease,
						touchend: g.touchendIncrease,
						focusin: g.onFocusin,
						click: function(e) {
							g.onClick(e, "increase")
						}
					}
				}, [I("i", [g._v("+")])]), g._v(" "), I("input", {
					staticClass: "aui-counter-input__inner",
					attrs: {
						disabled: g.disabled,
						max: g.max,
						min: g.min
					},
					domProps: {
						value: g.value
					},
					on: {
						input: g.handleInput,
						change: g.changeInput,
						blur: g.blur,
						focus: g.focus
					}
				})])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-stepper-item",
					class: ["is-" + g.$parent.direction,
					{
						"is-flex": g.isLast
					}],
					style: g.style
				}, [I("div", {
					ref: "circleSize",
					staticClass: "aui-step__head",
					class: ["is-" + g.currentStatus,
					{
						"is-text": !g.icon
					}]
				}, [I("div", {
					staticClass: "aui-step__line",
					class: ["is-" + g.$parent.direction,
					{
						"is-icon": g.icon
					}],
					style: g.isLast ? "" : {
						marginRight: g.$parent.stepOffset + "px"
					}
				}, [I("i", {
					ref: "line",
					staticClass: "aui-step__line-inner",
					style: g.lineStyle
				})]), g._v(" "), I("span", {
					staticClass: "aui-step__icon"
				}, ["success" !== g.currentStatus && "error" !== g.currentStatus ? g._t("icon", [g.icon ? I("i", {
					class: ["aui-icon-" + g.icon]
				}) : I("div", [g._v(g._s(g.index + 1))])]) : I("i", {
					class: ["aui-icon-" + ("success" === g.currentStatus ? "check" : "close")]
				})], 2)]), g._v(" "), I("div", {
					staticClass: "aui-step__main",
					style: {
						marginLeft: g.mainOffset
					}
				}, [I("div", {
					ref: "title",
					staticClass: "aui-step__title",
					class: ["is-" + g.currentStatus]
				}, [g._t("title", [g._v(g._s(g.title))])], 2), g._v(" "), I("div", {
					staticClass: "aui-step__description",
					class: ["is-" + g.currentStatus]
				}, [g._t("description", [g._v(g._s(g.description))])], 2)])])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement;
				return (g._self._c || e)("div", {
					staticClass: "aui-checkbox-group"
				}, [g._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-text-input"
				}, [I("input", {
					class: g.className,
					attrs: {
						type: g.type,
						placeholder: g.placeholder,
						size: g.size,
						align: g.align,
						maxlength: g.maxlength,
						disabled: g.disabled,
						minlength: g.minlength
					},
					domProps: {
						value: g.value
					},
					on: {
						input: g.handleInput,
						blur: g.blur,
						focus: g.focus
					}
				})])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "tile-item",
					class: {
						"tile-item-disable": !g.isEnabled,
						"item-with-active": g.isEnabled
					},
					style: {
						width: g.itemWidth + "px",
						height: g.itemHeight + "px"
					},
					on: {
						click: g.clickItem
					}
				}, [I("div", {
					staticClass: "tile-item-content"
				}, [g.isShowImg ? I("div", {
					staticClass: "tile-item-icon",
					class: [g.typeIcon]
				}, [I("img", {
					attrs: {
						src: g.imgSrc
					}
				})]) : g._e(), g._v(" "), I("div", {
					staticClass: "tile-item-text",
					class: [g.typeText]
				}, [g._v(g._s(g.title))])])])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement;
				return (g._self._c || e)("div", {
					staticClass: "aui-radio-group"
				}, [g._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-tabs"
				}, [I("div", {
					staticClass: "aui-tabs_header"
				}, g._l(g.tabName, function(e, t) {
					return I("div", {
						key: t,
						staticClass: "aui-tabs_item",
						class: {
							active: g.activeIndex === t,
							"aui-tabs-pane-container--disabled": e._props.disabled
						},
						on: {
							click: function(e) {
								g.activeItemClick(t)
							}
						}
					}, [g._v(g._s(e.label) + "\n    ")])
				})), g._v(" "), I("div", {
					staticClass: "aui-tabs_container"
				}, [g._t("default")], 2)])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement;
				return (g._self._c || e)("div", {
					staticClass: "aui-box",
					style: {
						"flex-direction": g.direction,
						"justify-content": g.justifyContent,
						"align-items": g.alignItems
					}
				}, [g._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "tile-list",
					style: {
						width: g.width + "px",
						height: g.parentHeight + "px"
					}
				}, g._l(g.tileListData, function(e, t) {
					return I("tile-item", {
						key: t,
						ref: "items",
						refInFor: !0,
						attrs: {
							"tile-size": g.tileSize,
							"tile-space": g.tileSpace,
							"img-src": e.icon,
							title: e.tradeName,
							size: e.size,
							"is-enabled": e.isEnabled
						},
						on: {
							itemClicked: function(I) {
								g.onMenuItemClicked(g.tileColumnIndex, g.tileGroupIndex, e)
							}
						}
					})
				}))
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "tile-group"
				}, [g.isShow ? I("tile-group-header", {
					attrs: {
						"tile-column-index": g.tileColumnIndex,
						"tile-group-index": g.tileGroupIndex,
						title: g.tileGroupData.categoryName,
						"theme-color": g.tileGroupData.themeColor,
						"over-width": g.overWidth,
						message: g.message,
						"icon-src": g.iconSrc,
						"is-show-more": g.isShowMore
					},
					on: {
						moreClicked: g.showMore,
						lessClicked: g.showLess
					}
				}) : g._e(), g._v(" "), g.isShow ? I("tile-list", {
					attrs: {
						"tile-size": g.tileSize,
						"tile-space": g.tileSpace,
						"tile-column-index": g.tileColumnIndex,
						"tile-group-index": g.tileGroupIndex,
						"tile-list-data": g.tileGroupData.items,
						row: g.tileGroupData.layout[0],
						col: g.tileGroupData.layout[1],
						width: g.changeWidth,
						height: 170 * g.row + "px"
					},
					on: {
						layoutFinished: g.receiveMsgFromChild,
						itemClicked: g.onMenuItemClicked
					}
				}) : I("tile-block", {
					attrs: {
						"tile-column-index": g.tileColumnIndex,
						"tile-group-index": g.tileGroupIndex,
						"theme-color": g.tileGroupData.themeColor,
						"tile-block-data": g.tileGroupData.items[0]
					},
					on: {
						itemClicked: g.onMenuItemClicked
					}
				})], 1)
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-number-input"
				}, [I("input", {
					class: g.className,
					attrs: {
						type: g.type,
						placeholder: g.placeholder,
						disabled: g.disabled,
						maxlength: g.maxlength,
						minlength: g.minlength,
						max: g.max,
						decimal: g.decimal,
						align: g.align,
						"data-allowed-chars": "0123456789"
					},
					domProps: {
						value: g.value
					},
					on: {
						input: g.handleInput,
						blur: g.blur,
						focus: g.focus,
						textInput: g.handleTextInput
					}
				})])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticStyle: {
						width: "100%",
						height: "100%"
					}
				}, [I("div", {
					staticClass: "v-table-loading"
				}), g._v(" "), I("div", {
					staticClass: "v-table-loading-content",
					domProps: {
						innerHTML: g._s(g.loadingContent)
					}
				})])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "tile-dialog-item-wrapper"
				}, [I("div", {
					staticClass: "tile-dialog-item",
					class: {
						"tile-item-disable": !g.isEnabled
					}
				}, [I("div", {
					staticClass: "tile-dialog-item-content",
					class: {
						"item-with-active": g.isEnabled
					},
					on: {
						click: g.clickItem
					}
				}, [I("div", {
					staticClass: "tile-dialog-item-content-icon"
				}, [I("img", {
					attrs: {
						src: g.imgSrc
					}
				})]), g._v(" "), I("div", [g._v(g._s(g.title))])])])])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("dl", {
					directives: [{
						name: "click-outside",
						rawName: "v-click-outside",
						value: g.clickOutside,
						expression: "clickOutside"
					}],
					class: ["v-select", g.sizeClass]
				}, [I("dt", {
					staticClass: "v-select-dt"
				}, [I("a", {
					staticClass: "v-select-selected",
					style: {
						width: g.width + "px"
					},
					on: {
						click: function(e) {
							e.stopPropagation(), e.preventDefault(), g.toggleItems()
						}
					}
				}, [g.isInput ? [I("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: g.inputValue,
						expression: "inputValue"
					}],
					staticClass: "v-select-input",
					attrs: {
						placeholder: g.placeholder,
						type: "text"
					},
					domProps: {
						value: g.inputValue
					},
					on: {
						input: function(e) {
							e.target.composing || (g.inputValue = e.target.value)
						}
					}
				})] : [I("span", {
					staticClass: "v-select-selected-span"
				}, [g._v(g._s(g.showSelectInfo()))])], g._v(" "), I("i", {
					staticClass: "v-select-selected-i aui-icon-angle"
				})], 2)]), g._v(" "), I("dd", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: g.visible,
						expression: "visible"
					}],
					staticClass: "v-select-dd"
				}, [I("ul", {
					staticClass: "v-select-items",
					style: {
						"min-width": g.width + "px",
						"max-width": g.getMaxWidth + "px"
					}
				}, g._l(g.internalOptions, function(e) {
					return I("li", {
						class: ["v-select-items-li", e.selected ? "active" : ""],
						on: {
							click: function(I) {
								I.stopPropagation(), g.selectOptionClick(e)
							}
						}
					}, [I("a", {
						class: ["v-select-items-li-a", g.getTextAlignClass()],
						attrs: {
							href: "javascript:void(0);"
						}
					}, [g._v(g._s(e.label))])])
				}))])])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "tile-column"
				}, g._l(g.tileColumnData, function(e, t) {
					return I("tile-group", {
						key: t,
						attrs: {
							"tile-group-data": e,
							"is-only-show-one": g.isOnlyShowOne,
							"tile-size": g.tileSize,
							"tile-space": g.tileSpace,
							"tile-column-index": g.tileColumnIndex,
							"tile-group-index": t,
							"is-expanded": g.isExpanded && t === g.currentGroupIndex
						},
						on: {
							itemClicked: g.onMenuItemClicked,
							showMore: g.showMore,
							showLess: g.showLess
						}
					})
				}))
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "aui-text"
				}, [I("div", {
					staticClass: "aui-text-box",
					class: g.alignClass
				}, g._l(g.values, function(e, t) {
					return I("span", {
						key: t
					}, [g._v(g._s(e))])
				}))])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("span", {
					staticClass: "v-page-pager"
				}, [I("li", {
					class: [1 === g.pageIndex ? "v-page-li-active" : "", "v-page-li"],
					on: {
						click: function(e) {
							e.stopPropagation(), e.preventDefault(), g.jumpPage(1)
						}
					}
				}, [I("a", [g._v("1")])]), g._v(" "), g.showJumpPrev ? I("li", {
					class: [1 === g.pageIndex ? "disabled" : "", "v-page-li", "v-page-jump-prev"],
					attrs: {
						title: "向前 " + g.showPagingCount + " 页"
					},
					on: {
						click: function(e) {
							e.stopPropagation(), e.preventDefault(), g.jumpPage(g.pageIndex - g.showPagingCount)
						}
					}
				}, [g._m(0)]) : g._e(), g._v(" "), g._l(g.pagingCounts, function(e) {
					return I("li", {
						class: [e === g.pageIndex ? "v-page-li-active" : "", "v-page-li"],
						on: {
							click: function(I) {
								I.stopPropagation(), I.preventDefault(), g.jumpPage(e)
							}
						}
					}, [I("a", [g._v(g._s(e))])])
				}), g._v(" "), g.showJumpNext ? I("li", {
					staticClass: "v-page-li v-page-jump-next",
					attrs: {
						title: "向后 " + g.showPagingCount + " 页"
					},
					on: {
						click: function(e) {
							e.stopPropagation(), e.preventDefault(), g.jumpPage(g.pageIndex + g.showPagingCount)
						}
					}
				}, [g._m(1)]) : g._e(), g.pageCount > 1 ? I("li", {
					class: [g.pageIndex === g.pageCount ? "v-page-li-active" : "", "v-page-li"],
					on: {
						click: function(e) {
							e.stopPropagation(), e.preventDefault(), g.jumpPage(g.pageCount)
						}
					}
				}, [I("a", [g._v(g._s(g.pageCount))])]) : g._e()], 2)
			},
			staticRenderFns: [function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("a", [I("i", {
					staticClass: "aui-icon-angle-double-left"
				})])
			}, function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("a", [I("i", {
					staticClass: "aui-icon-angle-double-right"
				})])
			}]
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement;
				return (g._self._c || e)("div", {
					staticClass: "aui-stepper",
					class: ["is-" + g.direction, g.center ? "is-center" : ""],
					style: {
						height: g.height,
						width: g.width
					}
				}, [g._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement;
				return (g._self._c || e)("li", {
					staticClass: "aui-option__item",
					class: {
						sel: g.selected
					},
					on: {
						click: g.changeItem
					}
				}, [g._v("\n  " + g._s(g.label))])
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement;
				return (g._self._c || e)("div", {
					staticClass: "aui-row"
				}, [g._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement;
				return (g._self._c || e)("div", {
					staticClass: "aui-col",
					class: g.classObj,
					style: {
						background: g.background
					}
				}, [g._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function(g, e) {
		g.exports = {
			render: function() {
				var g = this,
					e = g.$createElement,
					I = g._self._c || e;
				return I("div", {
					staticClass: "tile-dialog-list",
					style: {
						width: g.width,
						height: g.height
					}
				}, g._l(g.tileListData, function(e, t) {
					return I("tile-item", {
						key: t,
						attrs: {
							"img-src": e.icon,
							title: e.tradeName,
							"is-enabled": e.isEnabled
						},
						on: {
							itemClicked: function(I) {
								g.onMenuItemClicked(g.tileColumnIndex, g.tileGroupIndex, e)
							}
						}
					})
				}))
			},
			staticRenderFns: []
		}
	}, function(g, e, I) {
		var t = I(97);
		"string" == typeof t && (t = [
			[g.i, t, ""]
		]), t.locals && (g.exports = t.locals);
		I(8)("6e209018", t, !0)
	}, function(g, e, I) {
		var t = I(98);
		"string" == typeof t && (t = [
			[g.i, t, ""]
		]), t.locals && (g.exports = t.locals);
		I(8)("1a5bf527", t, !0)
	}, function(g, e, I) {
		var t = I(99);
		"string" == typeof t && (t = [
			[g.i, t, ""]
		]), t.locals && (g.exports = t.locals);
		I(8)("18b6d0c5", t, !0)
	}, function(g, e) {
		g.exports = function(g, e) {
			for (var I = [], t = {}, n = 0; n < e.length; n++) {
				var l = e[n],
					C = l[0],
					A = l[1],
					i = l[2],
					a = l[3],
					c = {
						id: g + ":" + n,
						css: A,
						media: i,
						sourceMap: a
					};
				t[C] ? t[C].parts.push(c) : I.push(t[C] = {
					id: C,
					parts: [c]
				})
			}
			return I
		}
	}, function(g, e) {
		g.exports = function(g) {
			return g.webpackPolyfill || (g.deprecate = function() {}, g.paths = [], g.children || (g.children = []), Object.defineProperty(g, "loaded", {
				enumerable: !0,
				get: function() {
					return g.l
				}
			}), Object.defineProperty(g, "id", {
				enumerable: !0,
				get: function() {
					return g.i
				}
			}), g.webpackPolyfill = 1), g
		}
	}])
});
//# sourceMappingURL=aui-ss.js.map