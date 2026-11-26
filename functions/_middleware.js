export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.pathname !== "/404" && url.pathname !== "/404.html") {
    return context.next();
  }

  url.pathname = "/404";
  const asset = await context.env.ASSETS.fetch(new Request(url, context.request));
  const headers = new Headers(asset.headers);
  headers.set("X-Robots-Tag", "noindex");
  return new Response(asset.body, { status: 404, headers });
}
