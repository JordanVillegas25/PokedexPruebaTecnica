"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_autentication_Loguin_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/autentication/Loguin.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/autentication/Loguin.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      //datos a nivel local que almacenan los datos de formulario para ser enviados al back para validar
      user: {},
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.axios.post("/api/login", _this.form).then(function (res) {
                  if (res.data.status == 1) {
                    _this.axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.access_token; //asigna el token a encabezado de las consultas a la pai para la validacion

                    //asigna el token a encabezado de las consultas a la pai para la validacion
                    localStorage.setItem("token", res.data.access_token); //asigna el token creado para el usuario a una variable storage para usar en el front

                    //asigna el token creado para el usuario a una variable storage para usar en el front
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Iniciando sesion",
                      showConfirmButton: false,
                      timer: 1500
                    });

                    _this.$router.push("/"); //redirecciona al home al iniciar sesion


                    //redirecciona al home al iniciar sesion
                    window.location.reload();
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: "Error en credenciales",
                      text: res.data.msg
                    });
                  }
                }, function (error) {
                  //imprime los errores de formulario que el back encuentre
                  var temp = "";
                  if (error.response.data.errors.email != null) temp += error.response.data.errors.email + " ";
                  if (error.response.data.errors.password != null) temp += error.response.data.errors.password + " ";
                  Swal.fire({
                    icon: "error",
                    title: "Error en credenciales",
                    text: temp
                  });
                })["catch"](function (err) {
                  console.log("error" + err);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/autentication/Loguin.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/autentication/Loguin.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loguin_vue_vue_type_template_id_39ce4e60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loguin.vue?vue&type=template&id=39ce4e60& */ "./resources/js/components/autentication/Loguin.vue?vue&type=template&id=39ce4e60&");
/* harmony import */ var _Loguin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loguin.vue?vue&type=script&lang=js& */ "./resources/js/components/autentication/Loguin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Loguin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loguin_vue_vue_type_template_id_39ce4e60___WEBPACK_IMPORTED_MODULE_0__.render,
  _Loguin_vue_vue_type_template_id_39ce4e60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/autentication/Loguin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/autentication/Loguin.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/autentication/Loguin.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loguin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Loguin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/autentication/Loguin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loguin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/autentication/Loguin.vue?vue&type=template&id=39ce4e60&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/autentication/Loguin.vue?vue&type=template&id=39ce4e60& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loguin_vue_vue_type_template_id_39ce4e60___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loguin_vue_vue_type_template_id_39ce4e60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loguin_vue_vue_type_template_id_39ce4e60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Loguin.vue?vue&type=template&id=39ce4e60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/autentication/Loguin.vue?vue&type=template&id=39ce4e60&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/autentication/Loguin.vue?vue&type=template&id=39ce4e60&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/autentication/Loguin.vue?vue&type=template&id=39ce4e60& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6" }, [
        _c(
          "form",
          {
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.login.apply(null, arguments)
              },
            },
          },
          [
            _c("div", { staticClass: "mb-3 row" }, [
              _c(
                "label",
                {
                  staticClass: "col-sm-2 col-form-label",
                  attrs: { for: "staticEmail" },
                },
                [_vm._v("Email")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-10" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.email,
                      expression: "form.email",
                    },
                  ],
                  staticClass: "form-control-plaintext",
                  attrs: {
                    type: "text",
                    id: "staticEmail",
                    placeholder: "email@example.com",
                  },
                  domProps: { value: _vm.form.email },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "email", $event.target.value)
                    },
                  },
                }),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3 row" }, [
              _c(
                "label",
                {
                  staticClass: "col-sm-2 col-form-label",
                  attrs: { for: "inputPassword" },
                },
                [_vm._v("Contrase??a")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-10" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.password,
                      expression: "form.password",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "password", id: "inputPassword" },
                  domProps: { value: _vm.form.password },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "password", $event.target.value)
                    },
                  },
                }),
              ]),
            ]),
            _vm._v(" "),
            _vm._m(0),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mb-3 row" }, [
          _c("div", { staticClass: "col-sm-12 card-footer" }, [
            _c(
              "a",
              { staticClass: "btn-light" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link logoutbutton",
                    attrs: {
                      "exact-active-class": "active",
                      to: "/registerUser",
                    },
                  },
                  [_vm._v("Registro")]
                ),
              ],
              1
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-3" }),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-5" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-3" }, [
        _c("button", { staticClass: "btn btn-light" }, [_vm._v("Enviar")]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-3" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);