/* Mucho Mundo — Service Worker
   Permite que el sitio funcione sin conexión después de la primera carga. */

const CACHE = "webleer-v199";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icono.svg",
  "./css/styles.css",
  "./js/data.js",
  "./js/curriculo-dba-g1.js",
  "./js/curriculo-dba-g2.js",
  "./js/curriculo-dba-g3.js",
  "./js/curriculo-dba-g4.js",
  "./js/curriculo-dba-g5.js",
  "./js/curriculo.js",
  "./reportes-docente/reporte-duplicados.html",
  "./reportes-docente/validacion-unidades.html",
  "./js/core.js",
  "./js/cuentas.js",
  "./js/activities.js",
  "./js/juegos.js",
  "./js/misiones.js",
  "./js/mascota.js",
  "./js/escape.js",
  "./js/taller.js",
  "./js/detective.js",
  "./js/concurso.js",
  "./js/laboratorio.js",
  "./js/aventurero/accesorios.js",
  "./js/aventurero/motor3d.js",
  "./js/aventurero/gltf.js",
  "./js/aventurero/modelo.js",
  "./js/aventurero/personaje.js",
  "./js/aventurero/misiones.js",
  "./js/aventurero/progreso.js",
  "./js/app.js",
  "./js/curriculo-ui.js",
  "./js/materias-home.js",
  "./js/unidades.js",
  "./js/profe.js",
  "./css/unidades.css",
  "./css/tema-infantil.css",
  "./js/tema-infantil.js",
  "./css/mucho-mundo.css",
  "./js/mucho-mundo.js",
  "./js/gestos.js",
  "./js/kiko-vivo.js",
  "./img/marca/logo-vivo-450.webp",
  "./img/marca/emblema-240.webp",
  "./img/marca/favicon-32.png",
  "./img/marca/favicon-48.png",
  "./img/marca/apple-touch-icon-180.png",
  "./img/marca/icon-192.png",
  "./img/marca/icon-512.png",
  "./img/marca/icon-maskable-512.png",
  "./img/marca/gmail-logo.svg",
  "./img/marca/puerta-vivo.webp",
  "./img/inicio.jpg",
  "./img/mascota.jpg",
  "./img/lectura.jpg",
  "./img/matematicas.jpg",
  "./img/mapa.jpg",

  /* Accesorios 3D (uno por pieza del armario) */
  "./accesorios3d/alas.glb",
  "./accesorios3d/botas-aventurero.glb",
  "./accesorios3d/botas.glb",
  "./accesorios3d/bufanda.glb",
  "./accesorios3d/burbujas.glb",
  "./accesorios3d/camiseta-azul.glb",
  "./accesorios3d/camiseta-verde.glb",
  "./accesorios3d/capa-alada.glb",
  "./accesorios3d/capa-azul.glb",
  "./accesorios3d/capa-roja.glb",
  "./accesorios3d/casco.glb",
  "./accesorios3d/chaleco-explorador.glb",
  "./accesorios3d/confeti.glb",
  "./accesorios3d/corona-estrella.glb",
  "./accesorios3d/estrellas.glb",
  "./accesorios3d/falda.glb",
  "./accesorios3d/gafas-aventurero.glb",
  "./accesorios3d/gafas-redondas.glb",
  "./accesorios3d/gafas-sol.glb",
  "./accesorios3d/gorro-explorador.glb",
  "./accesorios3d/gorro-lana.glb",
  "./accesorios3d/llave-aventura.glb",
  "./accesorios3d/mochila-explorador.glb",
  "./accesorios3d/mochila-simple.glb",
  "./accesorios3d/pantalon.glb",
  "./accesorios3d/pelo-corto.glb",
  "./accesorios3d/pelo-largo.glb",
  "./accesorios3d/pelo-rizos.glb",
  "./accesorios3d/pelo-trenzas.glb",
  "./accesorios3d/sandalias.glb",
  "./accesorios3d/sombrero-aventurero.glb",
  "./accesorios3d/sudadera.glb",
  "./accesorios3d/vaqueros.glb",
  "./accesorios3d/zapatillas.glb",
  /* Modelo 3D propio del usuario (si existe; si no, se ignora) */
  "./modelo/aventurero.glb",

  /* Cultura general (módulo, galería, zonas y carátulas) */
  "./js/cultura.js",
  "./js/criaturas-dibujo.js",
  "./img/cul-castillo.webp",
  "./img/cul-montanas.webp",
  "./img/cul-bosque.webp",
  "./img/cul-rio.webp",
  "./img/cul-animales.webp",
  "./img/cul-exploradores.webp",
  "./img/z1-dragon.webp",
  "./img/z2-ballena.webp",
  "./img/z3-raton.webp",
  "./img/z4-tren.webp",
  "./img/z5-escultor.webp",
  "./img/z7-bosque.webp",
  "./img/z8-noche.webp",
  "./img/z9-rio.webp",
  "./img/z10-meta.webp",
  "./img/z6-tesoro.webp",
  "./img/s-escape.webp",
  "./img/s-taller.webp",
  "./img/s-detective.webp",
  "./img/s-concurso.webp",
  "./img/s-laboratorio.webp",
  "./img/s-armario.webp",
  "./img/s-perfil.webp",
  "./img/g01-vikingo.webp",
  "./img/g02-cacao.webp",
  "./img/g03-tamal.webp",
  "./img/g04-colombia.webp",
  "./img/g05-acordeon.webp",
  "./img/g06-piano.webp",
  "./img/g07-tambores.webp",
  "./img/g08-artistas.webp",
  "./img/g09-desayuno.webp",
  "./img/g10-pizza.webp",
  "./img/g11-volcan.webp",
  "./img/g12-salto.webp",
  "./img/g13-tatacoa.webp",
  "./img/g14-selva.webp",
  "./img/g15-sabana.webp",
  "./img/g16-abejas.webp",
  "./img/g17-egipto.webp",
  "./img/g18-escritura.webp",
  "./img/g19-imprenta.webp",
  "./img/g20-muralla.webp",
  "./img/g21-eiffel.webp",
  "./img/g22-pulpo.webp",
  "./img/g23-colibri.webp",
  "./img/g24-jirafa.webp",
  "./img/g25-camaleon.webp",
  "./img/g26-perezoso.webp",
  "./img/g27-delfin.webp",
  "./img/g28-espacio.webp",
  "./img/g29-astronauta.webp",
  "./img/g30-cohete.webp",
  "./img/g31-estacion.webp",
  "./img/g32-dinosaurios.webp",
  "./img/g33-ballena.webp",
];

/* Rellena la caché con todos los archivos. Si alguno falla, se
   reintenta uno por uno para que un solo fallo no impida cachear
   el resto (la web seguiría funcionando sin conexión). */
async function cachearTodo() {
  const c = await caches.open(CACHE);
  /* Se descarga cada archivo con cache:"reload" para no guardar
     copias viejas de la caché del navegador. Si alguno falla, se
     sigue con los demás (la web sigue funcionando sin conexión). */
  await Promise.all(
    ARCHIVOS.map(async (r) => {
      try {
        const resp = await fetch(r, { cache: "reload" });
        if (resp && resp.ok) await c.put(r, resp);
      } catch (err) {
        /* este archivo no se pudo guardar: se sigue con los demás */
      }
    })
  );
}

/* Comprueba que la caché está completa. El navegador puede
   vaciarla por falta de espacio; en ese caso la volvemos a
   llenar para que la web siga funcionando sin conexión. */
let cacheRevisada = false;
async function asegurarCache() {
  if (cacheRevisada) return; /* antes se comprobaba en CADA petición; basta una vez por vida del worker */
  cacheRevisada = true;
  try {
    const c = await caches.open(CACHE);
    const hay = await c.match("./index.html");
    if (!hay) await cachearTodo();
  } catch (e) {
    cacheRevisada = false; /* sin caché: se vuelve a intentar más adelante */
  }
}

self.addEventListener("install", (e) => {
  e.waitUntil(cachearTodo().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => asegurarCache())
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) {
    return;
  }
  const path = url.pathname;
  const esNavegacion =
    e.request.mode === "navigate" ||
    (e.request.destination === "" && (path === "/" || path.endsWith(".html")));

  /* Cada petición revisa que la caché esté sana (una sola vez) */
  asegurarCache();

  if (esNavegacion) {
    e.respondWith(
      fetch(e.request)
        .catch(() => caches.match("./index.html"))
        .then((r) => r || new Response("Fuera de línea", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then((cached) => {
      /* Los modelos 3D se piden primero a la red: si el usuario
         cambia su archivo, se ve el nuevo sin limpiar la caché. */
      if (/\.(glb|gltf)$/i.test(path)) {
        return fetch(e.request)
          .then((resp) => {
            if (resp && resp.ok) {
              const copia = resp.clone();
              caches.open(CACHE).then((c) => c.put(e.request, copia)).catch(() => {});
            }
            return resp;
          })
          .catch(() => cached || new Response("Recurso no disponible sin conexión", { status: 503 }));
      }
      if (cached) return cached;
      return fetch(e.request)
        .then((resp) => {
          if (resp && resp.ok) {
            const copia = resp.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copia)).catch(() => {});
          }
          return resp;
        })
        .catch(() => {
          if (path.endsWith(".html")) return caches.match("./index.html");
          return new Response("Recurso no disponible sin conexión", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
        });
    })
  );
});
