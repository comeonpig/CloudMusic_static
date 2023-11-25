"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  setup() {
    const list = common_vendor.ref([]);
    const new_list = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      common_vendor.index.request({
        url: "http://localhost:3000/personalized/newsong?limit=20",
        success(res) {
          new_list.value = res.data.result;
        }
      });
      common_vendor.index.request({
        method: "GET",
        url: "http://localhost:3000/personalized?limit=6",
        success(res) {
          list.value = res.data.result;
        }
      });
    });
    return {
      list,
      new_list
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.list, (item, k0, i0) => {
      return {
        a: item.picUrl,
        b: common_vendor.t(item.name),
        c: item.id
      };
    }),
    b: common_vendor.f($setup.new_list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.song.artists[0].name),
        c: common_vendor.t(item.name),
        d: item.id
      };
    }),
    c: common_assets._imports_0
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Dudu/Desktop/music/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
