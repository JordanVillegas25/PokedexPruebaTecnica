"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      pokemones: {},
      countPagination: 1,
      currentPage: 1,
      currentUrl: "https://pokeapi.co/api/v2/pokemon/?limit=6&offset=0",
      //guarda la ruta principal de conexion a la api
      nextUrl: "",
      previousUrl: "",
      form: {
        search: ""
      }
    };
  },
  created: function created() {
    if (localStorage.getItem("token") == null || localStorage.getItem("token") == "") {
      //verificacion de inicio de sesion
      this.$router.push("/loguin");
    } else {
      this.getPokemons();
    }
  },
  methods: {
    getPokemons: function getPokemons() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var vectorPokemon;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //conecta con la api y obtienelos registros de pokemon
                vectorPokemon = [];
                _context.next = 3;
                return _this.axios.get(_this.currentUrl).then(function (all) {
                  //ejecuta la conexion a la api con una url dinamica
                  var data = all.data;
                  _this.nextUrl = data.next; //asigna las nuevas rutas siguientes y anteriores para la paginacion

                  //asigna las nuevas rutas siguientes y anteriores para la paginacion
                  _this.previousUrl = data.previous; //  console.log(this.pokemones);

                  //  console.log(this.pokemones);
                  data.results.forEach(function (item) {
                    //recorre cada pokemon de la lista principal y hace una nueva solicitud por los datos de cada pokemon
                    _this.axios.get(item.url).then(function (res2) {
                      vectorPokemon.push(res2); //inserta los datos en una lista temporal
                    });
                  });
                });

              case 3:
                _this.pokemones = vectorPokemon;
                console.log(_this.pokemones);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addFavoritePokemon: function addFavoritePokemon(idpokemon) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.axios.post("/api/register-favorites", {
                  pokemon_id: idpokemon
                }).then(function (res) {
                  if (res.data.status == 1) {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: res.data.msj,
                      showConfirmButton: false,
                      timer: 1500
                    });
                  }

                  if (res.data.status == 0) {
                    Swal.fire({
                      position: "top-center",
                      icon: "info",
                      title: "Ya tienes este pokemon, como favorito",
                      showConfirmButton: false,
                      timer: 1500
                    });
                  }
                }, function (error) {
                  console.log(error.response.data);
                })["catch"](function (err) {
                  console.log("error" + err);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    nextPagination: function nextPagination() {
      //actualiza las rutas tanto la actual como la siguiente y la enterior
      if (this.nextUrl != null) {
        this.currentPage++;
        this.currentUrl = this.nextUrl;
        this.getPokemons();
      }
    },
    previousPagination: function previousPagination() {
      if (this.previousUrl != null) {
        this.currentPage--;
        this.currentUrl = this.previousUrl;
        this.getPokemons();
      }
    },
    searchPokemon: function searchPokemon() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var vectorPokemon;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                vectorPokemon = [];

                if (!(_this3.form.search != "")) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 4;
                return _this3.axios.get("https://pokeapi.co/api/v2/pokemon/" + _this3.form.search.toLowerCase()).then(function (res) {
                  vectorPokemon.push(res);
                  console.log(_this3.pokemones);
                  _this3.pokemones = vectorPokemon;
                })["catch"](function (err) {
                  Swal.fire({
                    position: "top-center",
                    icon: "info",
                    title: "Sin registros",
                    showConfirmButton: false,
                    timer: 1500
                  });
                });

              case 4:
                _context3.next = 7;
                break;

              case 6:
                _this3.getPokemons();

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row", staticStyle: { "margin-top": "-15px" } },
    [
      _c("div", { staticClass: "col-sm-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-5" }, [
        _c(
          "form",
          {
            staticClass: "d-flex",
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.searchPokemon.apply(null, arguments)
              },
            },
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.search,
                  expression: "form.search",
                },
              ],
              staticClass: "form-control me-2",
              attrs: {
                type: "search",
                placeholder: "Nombre de pokemon o numero pokedex",
                "aria-label": "Search",
              },
              domProps: { value: _vm.form.search },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "search", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-outline-success",
                attrs: { type: "submit" },
              },
              [_vm._v("Buscar")]
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row row-cols-1 row-cols-md-3 g-4" },
        _vm._l(_vm.pokemones, function (pokemon) {
          return _c(
            "div",
            {
              key: pokemon.data.id,
              staticClass: "table--items products__list__item",
            },
            [
              _c(
                "div",
                {
                  staticClass: "card text-center",
                  staticStyle: {
                    "max-width": "300px",
                    "min-height": "350px",
                    "border-radius": "15px",
                    "margin-bottom": "10px",
                    "background-color": "white",
                  },
                },
                [
                  _c(
                    "h5",
                    {
                      staticClass: "card-title",
                      staticStyle: {
                        "background-color": "black",
                        color: "white",
                        "padding-bottom": "5px",
                      },
                    },
                    [
                      _c("b", [
                        _vm._v(
                          "\n            " +
                            _vm._s(pokemon.data.name.toUpperCase()) +
                            "\n          "
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "card-img-top",
                    staticStyle: {
                      height: "350px",
                      width: "100%",
                      "border-radius": "5px",
                    },
                    attrs: {
                      src: pokemon.data.sprites.other["official-artwork"]
                        .front_default,
                      alt: "Sin imagen en los registros",
                    },
                  }),
                  _vm._v(" "),
                  _c("ul", { staticClass: "list-group list-group-flush" }, [
                    _c("li", { staticClass: "list-group-item" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-7 col-form-label",
                            attrs: { for: "staticEmail" },
                          },
                          [_vm._v("Experiencia base :")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-5" }, [
                          _c(
                            "span",
                            {
                              staticClass: "form-control-plaintext",
                              attrs: {
                                type: "text",
                                readonly: "",
                                id: "staticEmail",
                              },
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(pokemon.data.base_experience)
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "list-group-item" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-7 col-form-label",
                            attrs: { for: "staticEmail" },
                          },
                          [_vm._v("peso :")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-5" }, [
                          _c(
                            "span",
                            {
                              staticClass: "form-control-plaintext",
                              attrs: {
                                type: "text",
                                readonly: "",
                                id: "staticEmail",
                              },
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(pokemon.data.weight) +
                                  "Kilos"
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "list-group-item" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-7 col-form-label",
                            attrs: { for: "staticEmail" },
                          },
                          [_vm._v("Abilidad Principal :")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-5" }, [
                          _c(
                            "span",
                            {
                              staticClass: "form-control-plaintext",
                              attrs: {
                                type: "text",
                                readonly: "",
                                id: "staticEmail",
                              },
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(pokemon.data.abilities[0].ability.name)
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "list-group-item" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-7 col-form-label",
                            attrs: { for: "staticEmail" },
                          },
                          [_vm._v("tipos :\n              ")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-5" }, [
                          _c(
                            "span",
                            {
                              staticClass: "form-control-plaintext",
                              attrs: {
                                type: "text",
                                readonly: "",
                                id: "staticEmail",
                              },
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(pokemon.data.types[0].type.name) +
                                  "\n                  " +
                                  _vm._s(
                                    pokemon.data.types.length == 2
                                      ? ", " + pokemon.data.types[1].type.name
                                      : ""
                                  )
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("p", { staticClass: "card-text" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              return _vm.addFavoritePokemon(pokemon.data.id)
                            },
                          },
                        },
                        [_c("i", { staticClass: "far fa-heart" })]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("nav", { attrs: { "aria-label": "..." } }, [
          _c("ul", { staticClass: "pagination" }, [
            _c("li", { staticClass: "page-item" }, [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { href: "#", tabindex: "-1", "aria-disabled": "true" },
                  on: { click: _vm.previousPagination },
                },
                [_vm._v("Previous")]
              ),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v(_vm._s(_vm.currentPage)),
              ]),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { href: "#" },
                  on: { click: _vm.nextPagination },
                },
                [_vm._v("Next")]
              ),
            ]),
          ]),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);