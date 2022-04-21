"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pokemon_Favorites_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pokemon/Favorites.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pokemon/Favorites.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      //establece variables locales en la vista
      pokemones: {},
      currentPage: 1,
      currentUrl: "/api/get-favorites",
      nextUrl: "",
      previousUrl: ""
    };
  },
  created: function created() {
    //ejecuta un metodo al iniciar la vista
    this.getPokemonsFavorites();
  },
  methods: {
    getPokemonsFavorites: function getPokemonsFavorites() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var vectorPokemon;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //obtiene todos los pokemon de la lista de favoritos
                vectorPokemon = [];
                _context.next = 3;
                return _this.axios.post(_this.currentUrl).then(function (res) {
                  if (res.data.status == 1) {
                    _this.nextUrl = res.data.data.next_page_url;
                    _this.previousUrl = res.data.data.prev_page_url;
                    console.log(res.data.data);
                    res.data.data.data.forEach(function (item) {
                      //recorre la lista que obtuvo del back y solicita a la pai de pokemon por media del id mas informacion del pokemon 
                      _this.axios.get("https://pokeapi.co/api/v2/pokemon/" + item.pokemon_id).then(function (res2) {
                        vectorPokemon.push(res2); //guarda cada registro de pokemon en una lista temporal para asignarla a la lista principal y recorrerla en la vista
                      });
                    });
                  }
                }, function (error) {
                  console.log(error.response.data);
                })["catch"](function (err) {
                  console.log("error" + err);
                });

              case 3:
                _this.pokemones = vectorPokemon; //se guarda la lista en la lista global.

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteFavoritePokemon: function deleteFavoritePokemon(idpokemon) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.axios.post("/api/delete-favorites", {
                  pokemon_id: idpokemon
                }).then(function (res) {
                  if (res.data.status == 1) {
                    Swal.fire({
                      position: "top-end",
                      icon: "warning",
                      title: res.data.msj,
                      showConfirmButton: false,
                      timer: 1500
                    });

                    _this2.getPokemonsFavorites();
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
      //se encarga de avanzar en la paginacion y mostrar mas registros
      if (this.nextUrl != null) {
        this.currentPage++;
        this.currentUrl = this.nextUrl;
        this.getPokemonsFavorites();
      }
    },
    previousPagination: function previousPagination() {
      //se encarga de retroceder en la paginacion y mostrar mas registros o registro previos
      if (this.previousUrl != null) {
        this.currentPage--;
        this.currentUrl = this.previousUrl;
        this.getPokemonsFavorites();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pokemon/Favorites.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pokemon/Favorites.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Favorites_vue_vue_type_template_id_2375e7c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Favorites.vue?vue&type=template&id=2375e7c0& */ "./resources/js/components/pokemon/Favorites.vue?vue&type=template&id=2375e7c0&");
/* harmony import */ var _Favorites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Favorites.vue?vue&type=script&lang=js& */ "./resources/js/components/pokemon/Favorites.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Favorites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Favorites_vue_vue_type_template_id_2375e7c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Favorites_vue_vue_type_template_id_2375e7c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pokemon/Favorites.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pokemon/Favorites.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pokemon/Favorites.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Favorites.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pokemon/Favorites.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pokemon/Favorites.vue?vue&type=template&id=2375e7c0&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pokemon/Favorites.vue?vue&type=template&id=2375e7c0& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_template_id_2375e7c0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_template_id_2375e7c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_template_id_2375e7c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Favorites.vue?vue&type=template&id=2375e7c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pokemon/Favorites.vue?vue&type=template&id=2375e7c0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pokemon/Favorites.vue?vue&type=template&id=2375e7c0&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pokemon/Favorites.vue?vue&type=template&id=2375e7c0& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm._m(0),
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
                    src: pokemon.data.sprites.other.dream_world.front_default,
                    alt: "...",
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
                        staticClass: "btn btn-danger",
                        attrs: { href: "#" },
                        on: {
                          click: function ($event) {
                            return _vm.deleteFavoritePokemon(pokemon.data.id)
                          },
                        },
                      },
                      [_c("i", { staticClass: "fas fa-heart" })]
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
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [_c("h1", [_vm._v("Favoritos")])])
  },
]
render._withStripped = true



/***/ })

}]);