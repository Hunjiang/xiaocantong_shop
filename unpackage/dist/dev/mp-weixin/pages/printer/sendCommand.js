(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/printer/sendCommand"],{

/***/ 61:
/*!**************************************************************************************!*\
  !*** C:/Users/57697/Desktop/校餐通商户端/main.js?{"page":"pages%2Fprinter%2FsendCommand"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _sendCommand = _interopRequireDefault(__webpack_require__(/*! ./pages/printer/sendCommand.vue */ 62));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_sendCommand.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 62:
/*!*******************************************************************!*\
  !*** C:/Users/57697/Desktop/校餐通商户端/pages/printer/sendCommand.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sendCommand_vue_vue_type_template_id_81249376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendCommand.vue?vue&type=template&id=81249376& */ 63);
/* harmony import */ var _sendCommand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendCommand.vue?vue&type=script&lang=js& */ 65);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sendCommand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sendCommand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sendCommand_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendCommand.vue?vue&type=style&index=0&lang=less& */ 67);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sendCommand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sendCommand_vue_vue_type_template_id_81249376___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sendCommand_vue_vue_type_template_id_81249376___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _sendCommand_vue_vue_type_template_id_81249376___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/printer/sendCommand.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/*!**************************************************************************************************!*\
  !*** C:/Users/57697/Desktop/校餐通商户端/pages/printer/sendCommand.vue?vue&type=template&id=81249376& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_template_id_81249376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./sendCommand.vue?vue&type=template&id=81249376& */ 64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_template_id_81249376___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_template_id_81249376___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_template_id_81249376___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_template_id_81249376___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 64:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/57697/Desktop/校餐通商户端/pages/printer/sendCommand.vue?vue&type=template&id=81249376& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 65:
/*!********************************************************************************************!*\
  !*** C:/Users/57697/Desktop/校餐通商户端/pages/printer/sendCommand.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./sendCommand.vue?vue&type=script&lang=js& */ 66);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 66:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/57697/Desktop/校餐通商户端/pages/printer/sendCommand.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


































var _vuex = __webpack_require__(/*! vuex */ 12); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var tsc = __webpack_require__(/*! ../../util/ble/tsc.js */ 55);var esc = __webpack_require__(/*! ../../util/ble/esc.js */ 58);var encode = __webpack_require__(/*! ../../util/ble/encoding.js */ 56);var _default = { data: function data() {return { sendContent: "", looptime: 0, currentTime: 1, lastData: 0, oneTimeData: 0, returnResult: "", canvasWidth: 180, canvasHeight: 180, imageSrc: '../../static/img/abc_ic_star_black_16dp.png', buffSize: [], buffIndex: 0, printNum: [], printNumIndex: 0, printerNum: 1, currentPrint: 1, isReceiptSend: false, isLabelSend: false, list: [] };}, computed: (0, _vuex.mapState)(['sysinfo', 'Bluetooth']), onLoad: function onLoad() {var that = this;var BLEInformation = that.Bluetooth.BLEInformation;
    // uni.notifyBLECharacteristicValueChange({
    //   deviceId: BLEInformation.deviceId,
    //   serviceId: BLEInformation.notifyServiceId,
    //   characteristicId: BLEInformation.notifyCharaterId,
    //   state: true,
    //   success(res) {
    // 	uni.onBLECharacteristicValueChange(function(r) {
    // 	  console.log(`characteristic ${r.characteristicId} has changed, now is ${r}`)
    // 	})
    //   },
    //   fail: function(e) {
    // 	console.log(e)
    //   },
    //   complete: function(e) {
    // 	console.log(e)
    //   }
    // })
  },
  onReady: function onReady() {
    var list = [];
    var numList = [];
    var j = 0;
    for (var i = 20; i < 200; i += 10) {
      list[j] = i;
      j++;
    }
    for (var _i = 1; _i < 10; _i++) {
      numList[_i - 1] = _i;
    }
    this.buffSize = list;
    this.oneTimeData = list[0];
    this.printNum = numList;
    this.printerNum = numList[0];
  },
  onShow: function onShow() {
    var that = this;
    var width;
    var height;
    uni.getImageInfo({
      src: that.imageSrc,
      success: function success(res) {
        console.log(res.width);
        console.log(res.height);
        width = res.width;
        height = res.height;
        that.canvasWidth = res.width;
        that.canvasHeight = res.height;
      } });

    var ctx = uni.createCanvasContext("edit_area_canvas", this);
    // if (app.globalData.platform == "android") {
    //   ctx.translate(width, height)
    //   ctx.rotate(180 * Math.PI / 180)
    // }
    ctx.drawImage(this.imageSrc, 0, 0, width, height);
    ctx.draw();
  },
  onUnload: function onUnload() {
    var that = this;var

    BLEInformation =
    that.Bluetooth.BLEInformation;
    // uni.closeBLEConnection({
    //      deviceId: BLEInformation.deviceId,
    //      success: function(res) {
    //        console.log("关闭蓝牙成功")
    //      },
    //    })	
  },
  methods: {
    getList: function getList() {var _this = this;
      this.$u.get('/api/shop_order/print').then(function (res) {
        console.log(res);
        _this.list = res.data;
      });
    },
    //获取输入内容
    inputEvent: function inputEvent(e) {
      this.sendContent = e.detail.value;
    },
    //输入框点击发送
    sendData: function sendData() {
      var data = this.sendContent + "\n";
      this.looptime = 0;
      var content = new encode.TextEncoder(
      'gb18030', {
        NONSTANDARD_allowLegacyEncoding: true }).
      encode(data);

      this.prepareSend(content);
    },
    //标签测试
    labelTest: function labelTest() {
      var that = this;
      var canvasWidth = that.canvasWidth;
      var canvasHeight = that.canvasHeight;
      var command = tsc.jpPrinter.createNew();
      command.setSize(48, 40);
      command.setGap(0);
      command.setCls();
      command.setText(0, 30, "TSS24.BF2", 1, 1, "图片");
      command.setQR(40, 120, "L", 5, "A", "www.smarnet.cc佳博智汇");
      command.setText(60, 90, "TSS24.BF2", 1, 1, "佳博智汇");
      command.setText(170, 50, "TSS24.BF2", 1, 1, "小程序测试");
      command.setText(170, 90, "TSS24.BF2", 1, 1, "测试数字12345678");
      command.setText(170, 120, "TSS24.BF2", 1, 1, "测试英文abcdefg");
      command.setText(170, 150, "TSS24.BF2", 1, 1, "测试符号/*-+!@#$");
      command.setBarCode(170, 180, "EAN8", 64, 1, 3, 3, "1234567");
      uni.canvasGetImageData({
        canvasId: 'edit_area_canvas',
        x: 0,
        y: 0,
        width: canvasWidth,
        height: canvasHeight,
        success: function success(res) {
          command.setBitmap(60, 0, 1, res);
        },
        complete: function complete() {
          command.setPagePrint();
          that.isLabelSend = true;
          that.prepareSend(command.getData());
        } });

    },

    //票据测试
    receiptTest: function receiptTest() {
      var that = this;
      var canvasWidth = that.canvasWidth;
      var canvasHeight = that.canvasHeight;
      var command = esc.jpPrinter.createNew();
      var item = this.list;
      command.init();
      // 标题
      command.bold(1); //加粗
      command.setFontSize(10); //字体大小
      command.setSelectJustification(1); //居中
      command.rowSpace(100);
      command.setText(item.shop[0].name + ' ' + item.shop[0].campus_name);
      command.setPrint();
      command.rowSpace(60);

      command.bold(0); //取消加粗
      command.setFontSize(0); //正常字体
      //时间
      command.setSelectJustification(0); //居左
      command.setText("时间：" + item.pay_time_text);
      command.setPrint();
      //编号
      command.setSelectJustification(0); //居左
      command.setText("订单号：" + item.order_number);
      command.setPrintAndFeed(80); //打印并走纸feed个单位
      //列表
      command.rowSpace(80); //间距
      command.bold(5); //加粗
      command.setText("商品名");
      command.setAbsolutePrintPosition(100);
      command.setText("规格");
      command.setAbsolutePrintPosition(180);
      command.setText("数量");
      command.setAbsolutePrintPosition(270);
      command.setText("单价");
      command.setPrint();
      command.bold(0); //加粗
      item.goods.forEach(function (item1) {
        // -------1
        command.setText(item1.goods_name);
        command.setAbsolutePrintPosition(100);
        command.setText(item1.goods_spec_name);
        command.setAbsolutePrintPosition(180);
        command.setText(item1.total_num);
        command.setAbsolutePrintPosition(270);
        command.setText(item1.goods_price);
        command.setPrint();
      });



      //合计
      command.bold(5); //加粗
      command.setText("总数：" + item.goods_num);
      command.setAbsolutePrintPosition(375);
      command.setText("合计：" + item.pay_price);
      command.setPrint();
      // // 收银员
      // command.rowSpace(120);//间距
      // command.setAbsolutePrintPosition(120);
      // command.setText("店员：何丹");
      // command.setAbsolutePrintPosition(320);
      // command.setText("会员：1000000000");
      // command.setPrint()

      //收货地址
      command.rowSpace(80); //间距
      command.bold(2); //加粗
      command.setSelectJustification(1); //居中
      command.setText(item.user_address[0].name + ' ' + item.user_address[0].phone);
      command.setPrint();
      command.setText(item.user_address[0].campus_name + ' ' + item.user_address[0].address);
      command.setPrint();

      //备注，约定时间
      command.setSelectJustification(0); //居左
      command.setText("约定送达时间:" + item.user_delivery_time);
      command.setPrint();
      command.setText("客户备注:" + item.buyer_remark);
      command.setPrint();

      command.setPrintAndFeedRow(3);

      that.isReceiptSend = true;
      that.prepareSend(command.getData());





    },

    //准备发送，根据每次发送字节数来处理分包数量
    prepareSend: function prepareSend(buff) {
      console.log(buff);
      var that = this;
      var time = that.oneTimeData;
      var looptime = parseInt(buff.length / time);
      var lastData = parseInt(buff.length % time);
      console.log(looptime + "---" + lastData);
      this.looptime = looptime + 1;
      this.lastData = lastData;
      this.currentTime = 1;
      that.Send(buff);
    },
    //查询打印机状态
    queryStatus: function queryStatus() {
      var command = esc.jpPrinter.Query();
      command.getRealtimeStatusTransmission(1);
    },
    //分包发送
    Send: function Send(buff) {
      var that = this;var
      currentTime = that.currentTime,loopTime = that.looptime,lastData = that.lastData,onTimeData = that.oneTimeData,printNum = that.printerNum,currentPrint = that.currentPrint;
      var buf;
      var dataView;
      if (currentTime < loopTime) {
        buf = new ArrayBuffer(onTimeData);
        dataView = new DataView(buf);
        for (var i = 0; i < onTimeData; ++i) {
          dataView.setUint8(i, buff[(currentTime - 1) * onTimeData + i]);
        }
      } else {
        buf = new ArrayBuffer(lastData);
        dataView = new DataView(buf);
        for (var i = 0; i < lastData; ++i) {
          dataView.setUint8(i, buff[(currentTime - 1) * onTimeData + i]);
        }
      }
      console.log("第" + currentTime + "次发送数据大小为：" + buf.byteLength);var

      BLEInformation =
      that.Bluetooth.BLEInformation;

      plus.bluetooth.writeBLECharacteristicValue({
        deviceId: BLEInformation.deviceId,
        serviceId: BLEInformation.writeServiceId,
        characteristicId: BLEInformation.writeCharaterId,
        value: buf,
        success: function success(res) {
          console.log(res);
          this.$u.get('/api/shop_order/printNotify', {
            order_id: this.list.id }).
          then(function (res) {
            uni.showToast({
              title: '新订单打印成功',
              icon: 'success' });

          });
        },
        fail: function fail(e) {
          console.log(e);
        },
        complete: function complete() {
          currentTime++;
          if (currentTime <= loopTime) {
            that.currentTime = currentTime;
            that.Send(buff);
          } else {
            uni.showToast({
              title: '已打印第' + currentPrint + '张' });

            if (currentPrint == printNum) {
              that.looptime = 0;
              that.lastData = 0;
              that.currentTime = 1;
              that.isReceiptSend = false;
              that.isLabelSend = false;
              that.currentPrint = 1;
            } else {
              currentPrint++;
              that.currentPrint = currentPrint;
              that.currentTime = 1;
              that.Send(buff);
            }
          }
        } });

    },
    buffBindChange: function buffBindChange(res) {//更改打印字节数
      var index = res.detail.value;
      var time = this.buffSize[index];
      this.buffIndex = index;
      this.oneTimeData = time;
    },
    printNumBindChange: function printNumBindChange(res) {//更改打印份数
      var index = res.detail.value;
      var num = this.printNum[index];
      this.printNumIndex = index;
      this.printerNum = num;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 67:
/*!*****************************************************************************************************!*\
  !*** C:/Users/57697/Desktop/校餐通商户端/pages/printer/sendCommand.vue?vue&type=style&index=0&lang=less& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./sendCommand.vue?vue&type=style&index=0&lang=less& */ 68);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sendCommand_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 68:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/57697/Desktop/校餐通商户端/pages/printer/sendCommand.vue?vue&type=style&index=0&lang=less& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[61,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/printer/sendCommand.js.map