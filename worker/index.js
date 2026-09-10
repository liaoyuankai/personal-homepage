// 只做一件事：把 www 永久跳转到根域名，其余请求原样交给静态资源服务。
// 放在 src/ 之外，这样 `tsc -b`（只编译 src）不会去类型检查它。
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
