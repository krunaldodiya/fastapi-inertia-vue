import { ref, unref, withCtx, createTextVNode, useSSRContext, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Link, useForm, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  __name: "IndexPage",
  __ssrInlineRender: true,
  props: {
    message: String
  },
  setup(__props) {
    const counter = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-0f22ba87>`);
      _push(ssrRenderComponent(unref(Link), { href: "/2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Link to other page`);
          } else {
            return [
              createTextVNode("Link to other page")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        only: ["lazy_prop"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Partial reload (only lazy prop)`);
          } else {
            return [
              createTextVNode("Partial reload (only lazy prop)")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button data-v-0f22ba87> Reactive button (clicked ${ssrInterpolate(counter.value)} times) </button><div class="props" data-v-0f22ba87><h1 data-v-0f22ba87>Props</h1><span data-v-0f22ba87> Message: ${ssrInterpolate(__props.message)}</span><span data-v-0f22ba87> Flashed messages: ${ssrInterpolate(_ctx.$page.props.messages)}</span><span data-v-0f22ba87> Lazy prop: ${ssrInterpolate(_ctx.$page.props.lazy_prop)}</span></div></main>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/Pages/IndexPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IndexPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0f22ba87"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: IndexPage
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "OtherPage",
  __ssrInlineRender: true,
  props: {
    message: String
  },
  setup(__props) {
    const form = useForm({
      email: null,
      password: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-28e128bc>`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Link to other page`);
          } else {
            return [
              createTextVNode("Link to other page")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="props" data-v-28e128bc><h1 data-v-28e128bc>Props</h1><span data-v-28e128bc> Message: ${ssrInterpolate(__props.message)}</span><span data-v-28e128bc> Flashed messages: ${ssrInterpolate(_ctx.$page.props.messages)}</span></div><form data-v-28e128bc><input type="text" placeholder="email"${ssrRenderAttr("value", unref(form).email)} data-v-28e128bc>`);
      if (unref(form).errors.email) {
        _push(`<div data-v-28e128bc>${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input type="password" placeholder="password"${ssrRenderAttr("value", unref(form).password)} data-v-28e128bc>`);
      if (unref(form).errors.password) {
        _push(`<div data-v-28e128bc>${ssrInterpolate(unref(form).errors.password)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-28e128bc>Login</button></form></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/Pages/OtherPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OtherPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-28e128bc"]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OtherPage
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/IndexPage.vue": __vite_glob_0_0, "./Pages/OtherPage.vue": __vite_glob_0_1 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
