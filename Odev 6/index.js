const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  const path = ctx.path;

  if (path === '/') {
    ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>';
  } else if (path === '/hakkimda') {
    ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>';
  } else if (path === '/iletisim') {
    ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>';
  } else {
    ctx.status = 404;
    ctx.body = '<h1>404 - Sayfa bulunamadı</h1>';
  }
});

app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor...');
});