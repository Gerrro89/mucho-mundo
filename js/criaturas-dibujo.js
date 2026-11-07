/* =========================================================
   WEB LEER — Ilustraciones detalladas de las criaturas
   ---------------------------------------------------------
   Dibujos SVG hechos a mano (como Kiko el loro): plumaje,
   escamas, garras, brillos y partes animadas por CSS.

   Uso: window.DIBUJOCRIATURA.svg(id, etapaId, etiqueta)
     · id       = "dragon" | "gato" | "dino" | "buho"
     · etapaId  = 0 huevo, 1 cría, 2 joven, 3 legendaria
   La etapa 1..3 usa el mismo dibujo (crece con --escala /
   --tam en CSS, igual que antes hacía el emoji).
   La etapa 3 añade aura y destellos de leyenda.

   Clases animables dentro del SVG (PARTE R de styles.css):
     cri-respira, cri-parpadeo, cri-cola, cri-ala-izq,
     cri-ala-der, cri-orejas, cri-huevo, cri-aura,
     cri-destello
   ========================================================= */

window.DIBUJOCRIATURA = (function () {
  "use strict";

  /* Sombra en el suelo (todas las criaturas) */
  const sombra = '<ellipse cx="110" cy="230" rx="50" ry="9" fill="rgba(0,0,0,.12)"/>';

  /* Destellos de leyenda: estrellitas de 4 puntas */
  function destello(x, y, t, c) {
    return (
      '<path class="cri-destello" style="animation-delay:' + t + 's" transform="translate(' + x + " " + y + ')" ' +
      'd="M0 -9 L2.2 -2.2 L9 0 L2.2 2.2 L0 9 L-2.2 2.2 L-9 0 L-2.2 -2.2 Z" fill="' + c + '"/>'
    );
  }

  function aura(id, color, cuerpo, etiqueta) {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="' + etiqueta + '">' +
      "<defs>" +
      '<radialGradient id="' + id + 'Aura" cx="0.5" cy="0.5" r="0.5">' +
      '<stop offset="0.45" stop-color="' + color + '" stop-opacity="0.34"/>' +
      '<stop offset="1" stop-color="' + color + '" stop-opacity="0"/>' +
      "</radialGradient>" +
      "</defs>" +
      '<circle class="cri-aura" cx="110" cy="122" r="104" fill="url(#' + id + 'Aura)"/>' +
      destello(38, 74, 0, "#ffd166") +
      destello(184, 96, 0.6, "#fff") +
      destello(166, 188, 1.2, "#ffd166") +
      destello(52, 176, 1.8, "#fff") +
      cuerpo +
      "</svg>"
    );
  }

  /* =========================================================
     1) GATO — atigrado naranja: rayas, orejas, bigotes y cola
     ========================================================= */
  function gato() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Gato">' +
      "<defs>" +
      '<linearGradient id="gtCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f8bd6d"/><stop offset="1" stop-color="#ef9440"/></linearGradient>' +
      '<radialGradient id="gtCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#fbc987"/><stop offset="1" stop-color="#f2a04a"/></radialGradient>' +
      "</defs>" +
      sombra +
      /* cola con rayas y punta de lana */
      '<g class="cri-cola">' +
      '<path d="M146 196 Q200 184 194 138 Q190 112 170 102 Q163 99 162 110 Q176 130 172 158 Q166 182 144 188 Z" fill="#f2994a" stroke="#c96f1e" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M186 118 q6 14 2 26 M192 150 q1 12 -4 22 M184 174 q-5 9 -13 15" stroke="#e08b2e" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.85"/>' +
      '<circle cx="167" cy="107" r="7" fill="#fff3e2"/>' +
      "</g>" +
      "<g class=\"cri-respira\">" +
      /* ancas con rayas de atigrado */
      '<ellipse cx="72" cy="196" rx="17" ry="21" fill="#ef9440" stroke="#c96f1e" stroke-width="2.5"/>' +
      '<ellipse cx="148" cy="196" rx="17" ry="21" fill="#ef9440" stroke="#c96f1e" stroke-width="2.5"/>' +
      '<path d="M62 188 q9 4 17 1 M64 200 q9 4 16 1 M141 189 q9 4 17 1 M140 201 q9 4 16 1" stroke="#e08b2e" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8"/>' +
      /* cuerpo y pecho lanudo */
      '<path d="M110 124 C76 126 64 158 68 188 C72 214 90 226 110 226 C130 226 148 214 152 188 C156 158 144 126 110 124 Z" fill="url(#gtCuerpo)" stroke="#c96f1e" stroke-width="2.5"/>' +
      '<ellipse cx="110" cy="192" rx="30" ry="32" fill="#fff3e2"/>' +
      '<path d="M86 182 q12 9 24 0 q12 9 24 0 M88 206 q11 8 22 0 q11 8 22 0" stroke="#e6cdaa" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>' +
      /* patitas con almohadilla clara y deditos */
      '<rect x="84" y="204" width="16" height="23" rx="8" fill="#ef9440" stroke="#c96f1e" stroke-width="2.5"/>' +
      '<rect x="120" y="204" width="16" height="23" rx="8" fill="#ef9440" stroke="#c96f1e" stroke-width="2.5"/>' +
      '<ellipse cx="92" cy="226" rx="9" ry="5" fill="#fff3e2" stroke="#e3c6a2" stroke-width="1.5"/>' +
      '<ellipse cx="128" cy="226" rx="9" ry="5" fill="#fff3e2" stroke="#e3c6a2" stroke-width="1.5"/>' +
      '<path d="M88 226 v-4 M96 226 v-4 M124 226 v-4 M132 226 v-4" stroke="#e3c6a2" stroke-width="1.6" stroke-linecap="round"/>' +
      "</g>" +
      /* orejas con interior rosita (tiemblan de alegría) */
      '<g class="cri-orejas">' +
      '<path d="M76 62 Q68 26 82 20 Q96 28 106 52 Z" fill="#ef9440" stroke="#c96f1e" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M144 62 Q152 26 138 20 Q124 28 114 52 Z" fill="#ef9440" stroke="#c96f1e" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M83 52 Q80 34 87 30 Q94 38 99 50 Z" fill="#f7c4d0"/>' +
      '<path d="M137 52 Q140 34 133 30 Q126 38 121 50 Z" fill="#f7c4d0"/>' +
      "</g>" +
      /* cabeza y rayita en la frente */
      '<circle cx="110" cy="88" r="46" fill="url(#gtCabeza)" stroke="#c96f1e" stroke-width="2.5"/>' +
      '<path d="M100 52 q4 10 2 15 M110 50 v17 M120 52 q-4 10 -2 15" stroke="#e08b2e" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      /* hocico claro */
      '<ellipse cx="110" cy="110" rx="26" ry="16" fill="#fff3e2" stroke="#ecd0b0" stroke-width="1.5"/>' +
      /* ojos verdosos con pupila de ranura */
      '<circle cx="88" cy="90" r="11" fill="#fff" stroke="#f0d8be" stroke-width="1.5"/>' +
      '<circle cx="132" cy="90" r="11" fill="#fff" stroke="#f0d8be" stroke-width="1.5"/>' +
      '<circle cx="88" cy="90" r="8" fill="#5fbf7f" stroke="#3d9a63" stroke-width="2"/>' +
      '<circle cx="132" cy="90" r="8" fill="#5fbf7f" stroke="#3d9a63" stroke-width="2"/>' +
      '<ellipse cx="88" cy="90" rx="2.4" ry="5.5" fill="#2d3142"/>' +
      '<ellipse cx="132" cy="90" rx="2.4" ry="5.5" fill="#2d3142"/>' +
      '<circle cx="90.5" cy="87" r="2.2" fill="#fff"/><circle cx="134.5" cy="87" r="2.2" fill="#fff"/>' +
      '<circle cx="85" cy="93" r="1.1" fill="#fff"/><circle cx="129" cy="93" r="1.1" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="88" cy="90" rx="12" ry="11" fill="#f6b35e"/>' +
      '<ellipse class="cri-parpadeo" cx="132" cy="90" rx="12" ry="11" fill="#f6b35e"/>' +
      /* pecas de bigotes, como los gatos reales */
      '<path d="M136 95 l4 -2 M138 99 l5 1 M138 104 l4 3 M84 95 l-4 -2 M82 99 l-5 1 M82 104 l-4 3" stroke="#d9a06a" stroke-width="1.6" stroke-linecap="round" fill="none"/>' +
      /* morrito: naricita, boquita y bigotes */
      '<path d="M104 104 q6 -3 12 0 q-1 6 -6 7 q-5 -1 -6 -7 z" fill="#e8899c" stroke="#d06a80" stroke-width="1.5"/>' +
      '<path d="M110 111 q-1 6 -8 6 M110 111 q1 6 8 6" stroke="#b97a5e" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M80 104 Q62 100 48 96 M80 109 Q60 110 46 112 M82 114 Q66 120 54 126 M140 104 Q158 100 172 96 M140 109 Q160 110 174 112 M138 114 Q154 120 166 126" stroke="#d9a06a" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
      '<circle cx="74" cy="106" r="7" fill="#ef6a8e" opacity="0.3"/><circle cx="146" cy="106" r="7" fill="#ef6a8e" opacity="0.3"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     2) DRAGÓN — escamas, alas de murciélago, cuernos y colita
        con punta de diamante
     ========================================================= */
  function dragon() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Dragón">' +
      "<defs>" +
      '<linearGradient id="dgCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#55c46a"/><stop offset="1" stop-color="#2f8040"/></linearGradient>' +
      '<radialGradient id="dgCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#64d178"/><stop offset="1" stop-color="#3fa34d"/></radialGradient>' +
      "</defs>" +
      sombra +
      /* cola con diamante dorado y púas */
      '<g class="cri-cola">' +
      '<path d="M146 198 Q196 186 192 140 Q189 116 172 106 Q165 103 164 114 Q176 132 172 158 Q166 182 144 190 Z" fill="#3fa34d" stroke="#2f8040" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M176 140 l11 -8 l4 11 z M188 122 l9 -10 l6 10 z" fill="#2f8040"/>' +
      '<path d="M172 92 L186 82 L196 100 L178 108 Z" fill="#ffd166" stroke="#d9a01e" stroke-width="2" stroke-linejoin="round"/>' +
      "</g>" +
      "<g class=\"cri-respira\">" +
      /* cuerpo del dragón */
      '<path d="M110 126 C78 128 66 158 70 188 C74 214 90 226 110 226 C130 226 148 214 152 188 C156 158 144 128 110 126 Z" fill="url(#dgCuerpo)" stroke="#2f8040" stroke-width="2.5"/>' +
      /* escamas del costado */
      '<path d="M74 148 q6 8 12 2 q6 8 12 2" stroke="rgba(255,255,255,.3)" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      '<path d="M146 148 q-6 8 -12 2 q-6 8 -12 2" stroke="rgba(255,255,255,.3)" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      /* panza con placas de dragón */
      '<rect x="82" y="152" width="56" height="13" rx="6.5" fill="#ffe9b8" stroke="#e3c88e" stroke-width="1.5"/>' +
      '<rect x="85" y="167" width="50" height="13" rx="6.5" fill="#ffe9b8" stroke="#e3c88e" stroke-width="1.5"/>' +
      '<rect x="88" y="182" width="44" height="13" rx="6.5" fill="#ffe9b8" stroke="#e3c88e" stroke-width="1.5"/>' +
      '<rect x="91" y="196" width="38" height="12" rx="6" fill="#ffe9b8" stroke="#e3c88e" stroke-width="1.5"/>' +
      /* patas con garras crema */
      '<rect x="84" y="206" width="15" height="21" rx="7" fill="#3fa34d" stroke="#2f8040" stroke-width="2.5"/>' +
      '<rect x="121" y="206" width="15" height="21" rx="7" fill="#3fa34d" stroke="#2f8040" stroke-width="2.5"/>' +
      '<path d="M87 229 l-1 5 M92 230 v5 M97 229 l1 5 M124 229 l-1 5 M129 230 v5 M134 229 l1 5" stroke="#f4e7c8" stroke-width="2.4" stroke-linecap="round"/>' +
      "</g>" +
      /* alas de murciélago con nervaduras (aletean al hablar) */
      '<g class="cri-ala-izq">' +
      '<path d="M80 136 Q40 126 22 92 Q50 98 58 82 Q66 102 76 118 Z" fill="#8fe0b0" stroke="#2f8040" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M74 122 Q52 112 34 96 M78 118 Q60 104 56 88" stroke="#2f8040" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      "</g>" +
      '<g class="cri-ala-der">' +
      '<path d="M140 136 Q180 126 198 92 Q170 98 162 82 Q154 102 144 118 Z" fill="#8fe0b0" stroke="#2f8040" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M146 122 Q168 112 186 96 M142 118 Q160 104 164 88" stroke="#2f8040" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      "</g>" +
      /* cuernos crema y cresta dorada */
      '<path d="M84 54 Q74 32 82 18 Q94 30 98 50 Z" fill="#f4e7c8" stroke="#d9c391" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M136 54 Q146 32 138 18 Q126 30 122 50 Z" fill="#f4e7c8" stroke="#d9c391" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M102 46 l8 -14 l8 14 z" fill="#ffd166" stroke="#d9a01e" stroke-width="2" stroke-linejoin="round"/>' +
      /* cabeza */
      '<circle cx="110" cy="86" r="44" fill="url(#dgCabeza)" stroke="#2f8040" stroke-width="2.5"/>' +
      /* hocico con fosas nasales y sonrisa */
      '<ellipse cx="110" cy="106" rx="23" ry="14" fill="#a8e6c3" stroke="#2f8040" stroke-width="2"/>' +
      '<circle cx="101" cy="101" r="2.3" fill="#2f8040"/><circle cx="119" cy="101" r="2.3" fill="#2f8040"/>' +
      '<path d="M96 100 q10 -5 20 0" stroke="rgba(255,255,255,.5)" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="110" cy="120" rx="16" ry="8" fill="#ffe9b8"/>' +
      '<path d="M96 119 q14 8 28 0" stroke="#2f8040" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M99 120 l3 6 l3 -6 z" fill="#fff"/>' +
      /* ojos ámbar felices */
      '<circle cx="86" cy="84" r="10.5" fill="#fff" stroke="#bfdfc8" stroke-width="1.5"/>' +
      '<circle cx="134" cy="84" r="10.5" fill="#fff" stroke="#bfdfc8" stroke-width="1.5"/>' +
      '<circle cx="86" cy="84" r="7.5" fill="#f2a93b" stroke="#c97b1c" stroke-width="2"/>' +
      '<circle cx="134" cy="84" r="7.5" fill="#f2a93b" stroke="#c97b1c" stroke-width="2"/>' +
      '<circle cx="86" cy="84" r="4.5" fill="#2d3142"/><circle cx="134" cy="84" r="4.5" fill="#2d3142"/>' +
      '<circle cx="88" cy="81.5" r="2" fill="#fff"/><circle cx="136" cy="81.5" r="2" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="86" cy="84" rx="11.5" ry="10.5" fill="#46ad57"/>' +
      '<ellipse class="cri-parpadeo" cx="134" cy="84" rx="11.5" ry="10.5" fill="#46ad57"/>' +
      '<path d="M74 70 q12 -7 24 -2 M122 68 q12 -5 24 2" stroke="#2f8040" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<circle cx="68" cy="100" r="7" fill="#ef6a6a" opacity="0.25"/><circle cx="152" cy="100" r="7" fill="#ef6a6a" opacity="0.25"/>' +
      /* pecas de dragoncito */
      '<circle cx="78" cy="93" r="1.5" fill="#2f8040" opacity="0.5"/><circle cx="82" cy="97" r="1.5" fill="#2f8040" opacity="0.5"/>' +
      '<circle cx="142" cy="93" r="1.5" fill="#2f8040" opacity="0.5"/><circle cx="138" cy="97" r="1.5" fill="#2f8040" opacity="0.5"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     3) DINOSAURIO — escamas, crestas doradas, dientecitos,
        bracitos chiquitos y cola maciza
     ========================================================= */
  function dino() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Dinosaurio">' +
      "<defs>" +
      '<linearGradient id="dnCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#54a2f5"/><stop offset="1" stop-color="#2f80ed"/></linearGradient>' +
      '<radialGradient id="dnCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#67aef8"/><stop offset="1" stop-color="#3d8df2"/></radialGradient>' +
      "</defs>" +
      sombra +
      /* cola maciza con crestas doradas */
      '<g class="cri-cola">' +
      '<path d="M148 170 Q200 164 208 196 Q210 214 200 226 Q190 216 178 212 Q158 206 146 206 Z" fill="#3f8ef0" stroke="#1f5fae" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M162 168 l10 -4 l4 10 z M188 174 l10 -6 l6 10 z M204 198 l6 -10 l8 8 z" fill="#ffd166" stroke="#d9a01e" stroke-width="1.6" stroke-linejoin="round"/>' +
      "</g>" +
      "<g class=\"cri-respira\">" +
      /* cuerpo robusto y panza clara */
      '<path d="M110 132 C74 134 62 166 67 192 C71 216 89 226 110 226 C131 226 149 216 153 192 C158 166 146 134 110 132 Z" fill="url(#dnCuerpo)" stroke="#1f5fae" stroke-width="2.5"/>' +
      '<ellipse cx="110" cy="190" rx="32" ry="34" fill="#e8f4ff"/>' +
      '<path d="M84 178 q13 10 26 0 q13 10 26 0 M86 202 q12 9 24 0 q12 9 24 0" stroke="#cfe3f7" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.85"/>' +
      /* motas de las escamas */
      '<circle cx="80" cy="156" r="5" fill="#1f5fae" opacity="0.75"/><circle cx="140" cy="150" r="5" fill="#1f5fae" opacity="0.75"/><circle cx="144" cy="176" r="4" fill="#1f5fae" opacity="0.75"/><circle cx="76" cy="178" r="4" fill="#1f5fae" opacity="0.75"/>' +
      /* bracitos chiquitos con garritas */
      '<path d="M80 158 q-11 2 -13 11 q6 4 13 0 z" fill="#3f8ef0" stroke="#1f5fae" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M140 158 q11 2 13 11 q-6 4 -13 0 z" fill="#3f8ef0" stroke="#1f5fae" stroke-width="2" stroke-linejoin="round"/>' +
      /* muslos con las patas gruesas y pies de 3 deditos */
      '<ellipse cx="88" cy="202" rx="15" ry="18" fill="#3f8ef0" stroke="#1f5fae" stroke-width="2.5"/>' +
      '<ellipse cx="132" cy="202" rx="15" ry="18" fill="#3f8ef0" stroke="#1f5fae" stroke-width="2.5"/>' +
      '<ellipse cx="86" cy="227" rx="13" ry="5" fill="#3f8ef0" stroke="#1f5fae" stroke-width="2"/>' +
      '<ellipse cx="134" cy="227" rx="13" ry="5" fill="#3f8ef0" stroke="#1f5fae" stroke-width="2"/>' +
      '<path d="M80 228 v-3 M86 229 v-3 M92 228 v-3 M128 228 v-3 M134 229 v-3 M140 228 v-3" stroke="#1f5fae" stroke-width="1.6" stroke-linecap="round"/>' +
      /* brillo de los muslos */
      '<path d="M74 196 q7 7 13 1 M128 196 q7 7 13 1" stroke="rgba(255,255,255,.35)" stroke-width="2.2" fill="none" stroke-linecap="round"/>' +
      "</g>" +
      /* crestas doradas sobre el lomo (detrás de la cabeza) */
      '<path d="M94 130 l8 -15 l9 13 z M112 124 l8 -15 l9 14 z M130 132 l7 -12 l8 10 z" fill="#ffd166" stroke="#d9a01e" stroke-width="1.8" stroke-linejoin="round"/>' +
      /* cabeza */
      '<circle cx="110" cy="90" r="45" fill="url(#dnCabeza)" stroke="#1f5fae" stroke-width="2.5"/>' +
      /* hocico con fosas y dientecitos */
      '<rect x="84" y="102" width="52" height="24" rx="12" fill="#a9d6f8" stroke="#1f5fae" stroke-width="2"/>' +
      '<circle cx="97" cy="109" r="2.4" fill="#1f5fae"/><circle cx="123" cy="109" r="2.4" fill="#1f5fae"/>' +
      /* escamita dorada del hocico */
      '<path d="M103 103 l7 -10 l7 10 z" fill="#ffd166" stroke="#d9a01e" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M92 122 q18 8 36 0" stroke="#1f5fae" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      '<path d="M100 124 l4 6 l4 -6 z M112 125 l4 6 l4 -6 z" fill="#fff" stroke="#cfe3f7" stroke-width="0.8"/>' +
      /* ojos ámbar */
      '<circle cx="86" cy="82" r="10.5" fill="#fff" stroke="#cfe0f5" stroke-width="1.5"/>' +
      '<circle cx="134" cy="82" r="10.5" fill="#fff" stroke="#cfe0f5" stroke-width="1.5"/>' +
      '<circle cx="86" cy="82" r="7.5" fill="#f2a93b" stroke="#c97b1c" stroke-width="2"/>' +
      '<circle cx="134" cy="82" r="7.5" fill="#f2a93b" stroke="#c97b1c" stroke-width="2"/>' +
      '<circle cx="86" cy="82" r="4.5" fill="#2d3142"/><circle cx="134" cy="82" r="4.5" fill="#2d3142"/>' +
      '<circle cx="88" cy="79.5" r="2" fill="#fff"/><circle cx="136" cy="79.5" r="2" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="86" cy="82" rx="11.5" ry="10.5" fill="#54a2f5"/>' +
      '<ellipse class="cri-parpadeo" cx="134" cy="82" rx="11.5" ry="10.5" fill="#54a2f5"/>' +
      '<path d="M74 68 q12 -7 24 -2 M122 66 q12 -5 24 2" stroke="#1f5fae" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<circle cx="70" cy="98" r="7" fill="#ef6a8e" opacity="0.25"/><circle cx="150" cy="98" r="7" fill="#ef6a8e" opacity="0.25"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     4) BÚHO — disco facial en corazón, plumitas del pecho,
        manchitas, cejas serias y garras
     ========================================================= */
  function buho() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Búho">' +
      "<defs>" +
      '<linearGradient id="bhCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c987e8"/><stop offset="1" stop-color="#9b51e0"/></linearGradient>' +
      "</defs>" +
      sombra +
      /* plumitas de las orejitas (paradas y atentas) */
      '<g class="cri-orejas">' +
      '<path d="M76 54 Q74 38 84 30 Q90 44 96 52 Z" fill="#a566d9" stroke="#7a3fa8" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M144 54 Q146 38 136 30 Q130 44 124 52 Z" fill="#a566d9" stroke="#7a3fa8" stroke-width="2" stroke-linejoin="round"/>' +
      "</g>" +
      "<g class=\"cri-respira\">" +
      /* cuerpo de huevo de búho */
      '<path d="M110 112 C74 114 62 152 66 186 C70 214 88 226 110 226 C132 226 150 214 154 186 C158 152 146 114 110 112 Z" fill="url(#bhCuerpo)" stroke="#7a3fa8" stroke-width="2.5"/>' +
      /* pecho con hileras de plumitas */
      '<rect x="76" y="140" width="68" height="76" rx="30" fill="#e8d4f5"/>' +
      '<path d="M82 154 q9 7 18 0 q9 7 18 0 q9 7 18 0 M82 170 q9 7 18 0 q9 7 18 0 q9 7 18 0 M84 186 q9 7 18 0 q9 7 18 0 q9 7 18 0 M86 202 q9 6 18 0 q9 6 18 0 q9 6 18 0" stroke="#cdaee6" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.9"/>' +
      "</g>" +
      /* alas plegadas con plumitas separadas */
      '<g class="cri-ala-izq">' +
      '<path d="M70 138 Q42 158 46 196 Q62 214 92 208 Q82 172 80 142 Z" fill="#a566d9" stroke="#7a3fa8" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M56 160 Q50 178 56 198 M66 156 Q62 178 68 202" stroke="#7a3fa8" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 186 q10 16 28 14 q-16 -4 -22 -20 z" fill="#cf9ff0" opacity="0.9"/>' +
      "</g>" +
      '<g class="cri-ala-der">' +
      '<path d="M150 138 Q178 158 174 196 Q158 214 128 208 Q138 172 140 142 Z" fill="#a566d9" stroke="#7a3fa8" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M164 160 Q170 178 164 198 M154 156 Q158 178 152 202" stroke="#7a3fa8" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M170 186 q-10 16 -28 14 q16 -4 22 -20 z" fill="#cf9ff0" opacity="0.9"/>' +
      "</g>" +
      /* disco facial de dos hojas con pico en medio */
      '<circle cx="88" cy="94" r="30" fill="#f6ecfc" stroke="#d9b8ec" stroke-width="2"/>' +
      '<circle cx="132" cy="94" r="30" fill="#f6ecfc" stroke="#d9b8ec" stroke-width="2"/>' +
      '<path d="M102 70 L110 84 L118 70 Z" fill="#b877e2"/>' +
      /* cejas de sabio */
      '<path d="M70 78 L96 68 M150 78 L124 68" stroke="#7a3fa8" stroke-width="3.5" stroke-linecap="round"/>' +
      /* ojos enormes con iris ámbar */
      '<circle cx="88" cy="92" r="15" fill="#fff" stroke="#d9b8ec" stroke-width="2"/>' +
      '<circle cx="132" cy="92" r="15" fill="#fff" stroke="#d9b8ec" stroke-width="2"/>' +
      '<circle cx="88" cy="92" r="9.5" fill="#f2b63b" stroke="#c9862a" stroke-width="2"/>' +
      '<circle cx="132" cy="92" r="9.5" fill="#f2b63b" stroke="#c9862a" stroke-width="2"/>' +
      '<circle cx="88" cy="92" r="5.5" fill="#2d3142"/><circle cx="132" cy="92" r="5.5" fill="#2d3142"/>' +
      '<circle cx="90.5" cy="89" r="2.6" fill="#fff"/><circle cx="134.5" cy="89" r="2.6" fill="#fff"/>' +
      '<circle cx="84.5" cy="95" r="1.3" fill="#fff"/><circle cx="128.5" cy="95" r="1.3" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="88" cy="92" rx="16" ry="15" fill="#c987e8"/>' +
      '<ellipse class="cri-parpadeo" cx="132" cy="92" rx="16" ry="15" fill="#c987e8"/>' +
      /* pico de diamante naranja */
      '<path d="M103 104 Q110 99 117 104 L112 124 Q110 128 108 124 Z" fill="#f6ae2d" stroke="#d9822b" stroke-width="2" stroke-linejoin="round"/>' +
      /* cachitos rosados de búho */
      '<circle cx="66" cy="112" r="6.5" fill="#ef6a8e" opacity="0.28"/><circle cx="154" cy="112" r="6.5" fill="#ef6a8e" opacity="0.28"/>' +
      /* plumitas del borde de la cara */
      '<path d="M60 82 q-6 9 -2 18 M160 82 q6 9 2 18" stroke="#d9b8ec" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* manchitas del costado */
      '<circle cx="70" cy="150" r="3" fill="#7a3fa8" opacity="0.35"/><circle cx="150" cy="150" r="3" fill="#7a3fa8" opacity="0.35"/>' +
      /* garras naranjas en el suelo */
      '<ellipse cx="92" cy="228" rx="11" ry="5" fill="#f6ae2d" stroke="#d9822b" stroke-width="2"/>' +
      '<ellipse cx="128" cy="228" rx="11" ry="5" fill="#f6ae2d" stroke="#d9822b" stroke-width="2"/>' +
      '<path d="M87 231 l-1 4 M92 232 l0 4 M97 231 l1 4 M123 231 l-1 4 M128 232 l0 4 M133 231 l1 4" stroke="#d9822b" stroke-width="2" stroke-linecap="round"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     5) CONEJO — orejas larguitas, denticitos, patitas y bolita
        de cola
     ========================================================= */
  function conejo() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Conejo">' +
      "<defs>" +
      '<linearGradient id="cjCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe3ea"/><stop offset="1" stop-color="#f8a8c4"/></linearGradient>' +
      '<radialGradient id="cjCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#ffeef3"/><stop offset="1" stop-color="#f9bed6"/></radialGradient>' +
      "</defs>" +
      sombra +
      /* bolita de cola esponjita */
      '<circle cx="158" cy="196" r="10" fill="#fff" stroke="#e8a7bd" stroke-width="2"/>' +
      '<path d="M152 192 q4 -4 8 0 M154 200 q4 -4 8 0" stroke="#e8a7bd" stroke-width="1.4" fill="none" stroke-linecap="round"/>' +
      '<g class=" cri-respira">' +
      /* cuerpecito sentadito */
      '<path d="M110 124 C82 126 72 152 75 176 C79 198 92 208 110 208 C128 208 141 198 145 176 C148 152 138 126 110 124 Z" fill="url(#cjCuerpo)" stroke="#e288ad" stroke-width="2.5"/>' +
      '<ellipse cx="110" cy="182" rx="26" ry="24" fill="#fff"/>' +
      '<path d="M88 176 q11 8 22 0 q11 8 22 0 M90 194 q10 8 20 0 q10 8 20 0" stroke="#f3d0dc" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* patitas y pies de tambor */
      '<circle cx="92" cy="196" r="8" fill="#ffe3ea" stroke="#e288ad" stroke-width="2"/>' +
      '<circle cx="128" cy="196" r="8" fill="#ffe3ea" stroke="#e288ad" stroke-width="2"/>' +
      '<ellipse cx="84" cy="206" rx="16" ry="9" fill="#f8d3e0" stroke="#e288ad" stroke-width="2"/>' +
      '<ellipse cx="136" cy="206" rx="16" ry="9" fill="#f8d3e0" stroke="#e288ad" stroke-width="2"/>' +
      '<path d="M78 206 v-3 M84 207 v-3 M90 206 v-3 M130 206 v-3 M136 207 v-3 M142 206 v-3" stroke="#e288ad" stroke-width="1.5" stroke-linecap="round"/>' +
      "</g>" +
      /* orejitas larguitas (tiemblan de oído atento) */
      '<g class="cri-orejas">' +
      '<path d="M84 58 Q70 20 86 12 Q104 24 112 56 Z" fill="#f9bed6" stroke="#e288ad" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M136 58 Q150 20 134 12 Q116 24 108 56 Z" fill="#f9bed6" stroke="#e288ad" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M90 48 Q83 28 91 24 Q100 34 105 48 Z" fill="#ffdbe8"/>' +
      '<path d="M130 48 Q137 28 129 24 Q120 34 115 48 Z" fill="#ffdbe8"/>' +
      "</g>" +
      /* cabecera redonda */
      '<circle cx="110" cy="96" r="45" fill="url(#cjCabeza)" stroke="#e288ad" stroke-width="2.5"/>' +
      /* ojos grandes con doble destello */
      '<circle cx="88" cy="94" r="9" fill="#4a2b3b" stroke="#3a2333" stroke-width="1.5"/>' +
      '<circle cx="132" cy="94" r="9" fill="#4a2b3b" stroke="#3a2333" stroke-width="1.5"/>' +
      '<circle cx="91" cy="91" r="3" fill="#fff"/><circle cx="135" cy="91" r="3" fill="#fff"/>' +
      '<circle cx="85" cy="96" r="1.4" fill="#fff"/><circle cx="129" cy="96" r="1.4" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="88" cy="94" rx="10" ry="9" fill="#fbd2df"/>' +
      '<ellipse class="cri-parpadeo" cx="132" cy="94" rx="10" ry="9" fill="#fbd2df"/>' +
      /* morro: nariz, dentecitos y boquita en w */
      '<path d="M104 106 q6 -4 12 0 q-1 7 -6 8 q-5 -1 -6 -8 z" fill="#ff8fae" stroke="#e288ad" stroke-width="1.5"/>' +
      '<path d="M110 114 q-2 6 -8 5 M110 114 q2 6 8 5" stroke="#b8627d" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<rect x="106" y="117" width="8" height="7" rx="2" fill="#fff" stroke="#e3d3d8" stroke-width="1"/>' +
      '<path d="M78 106 Q64 102 54 98 M78 110 Q62 112 52 114 M142 106 Q156 102 166 98 M142 110 Q158 112 168 114" stroke="#e288ad" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="74" cy="112" rx="10" ry="6" fill="#ff9ec0" opacity="0.5"/>' +
      '<ellipse cx="146" cy="112" rx="10" ry="6" fill="#ff9ec0" opacity="0.5"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     6) ZORRO — cuello de plumón claro, patitas oscuras,
        sonrisa ladina y cola con punta blanca
     ========================================================= */
  function zorro() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Zorro">' +
      "<defs>" +
      '<linearGradient id="zrCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffab77"/><stop offset="1" stop-color="#f27a45"/></linearGradient>' +
      '<radialGradient id="zrCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#ffc194"/><stop offset="1" stop-color="#f47c46"/></radialGradient>' +
      "</defs>" +
      sombra +
      /* cola gigante esponjosa con punta de lana blanca */
      '<g class="cri-cola">' +
      '<path d="M148 198 Q198 190 198 138 Q197 112 176 100 Q168 96 166 108 Q180 128 176 156 Q170 182 146 190 Z" fill="#f27a45" stroke="#d96a33" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M176 100 Q186 106 190 120 Q182 122 174 118 Q176 110 176 100 Z" fill="#fff5e9" stroke="#f3ddc2" stroke-width="1.5"/>' +
      '<path d="M186 146 q1 10 -4 20 M182 168 q-5 10 -14 16" stroke="#d96a33" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>' +
      "</g>" +
      '<g class=" cri-respira">' +
      /* ancas y cuerpo */
      '<ellipse cx="72" cy="196" rx="17" ry="21" fill="#f27a45" stroke="#d96a33" stroke-width="2.5"/>' +
      '<ellipse cx="148" cy="196" rx="17" ry="21" fill="#f27a45" stroke="#d96a33" stroke-width="2.5"/>' +
      '<path d="M110 124 C76 126 64 158 68 188 C72 214 90 226 110 226 C130 226 148 214 152 188 C156 158 144 126 110 124 Z" fill="url(#zrCuerpo)" stroke="#d96a33" stroke-width="2.5"/>' +
      /* pecho de plumón blanco */
      '<ellipse cx="110" cy="190" rx="32" ry="34" fill="#fff5e9" stroke="#f0dcc4" stroke-width="1.5"/>' +
      '<path d="M86 182 q12 9 24 0 q12 9 24 0 M88 206 q11 8 22 0 q11 8 22 0" stroke="#eed4b8" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* patitas con botas oscuras */
      '<rect x="84" y="202" width="16" height="14" rx="7" fill="#f27a45" stroke="#d96a33" stroke-width="2.5"/>' +
      '<rect x="120" y="202" width="16" height="14" rx="7" fill="#f27a45" stroke="#d96a33" stroke-width="2.5"/>' +
      '<rect x="84" y="213" width="16" height="14" rx="7" fill="#4a3b3c" stroke="#3a2e2f" stroke-width="2"/>' +
      '<rect x="120" y="213" width="16" height="14" rx="7" fill="#4a3b3c" stroke="#3a2e2f" stroke-width="2"/>' +
      '<path d="M88 228 v-3 M95 228 v-3 M124 228 v-3 M131 228 v-3" stroke="#cbb8a8" stroke-width="1.5" stroke-linecap="round"/>' +
      "</g>" +
      /* orejas grandes con interior oscuro */
      '<path d="M74 58 Q64 20 84 14 Q102 26 108 50 Z" fill="#f27a45" stroke="#d96a33" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M146 58 Q156 20 136 14 Q118 26 112 50 Z" fill="#f27a45" stroke="#d96a33" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M82 48 Q78 32 88 28 Q96 38 100 46 Z" fill="#5d4647"/>' +
      '<path d="M138 48 Q142 32 132 28 Q124 38 120 46 Z" fill="#5d4647"/>' +
      /* cabeza con boquitas lanudas a los costados */
      '<circle cx="110" cy="88" r="45" fill="url(#zrCabeza)" stroke="#d96a33" stroke-width="2.5"/>' +
      '<path d="M70 86 Q54 96 58 118 Q66 112 72 104 Z M70 104 Q56 116 62 134 Q72 124 76 114 Z" fill="#ffd9b8" stroke="#e8b98e" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M150 86 Q166 96 162 118 Q154 112 148 104 Z M150 104 Q164 116 158 134 Q148 124 144 114 Z" fill="#ffd9b8" stroke="#e8b98e" stroke-width="1.5" stroke-linejoin="round"/>' +
      /* ojos ámbar ladinos */
      '<circle cx="88" cy="88" r="10" fill="#fff" stroke="#f3d8bc" stroke-width="1.5"/>' +
      '<circle cx="132" cy="88" r="10" fill="#fff" stroke="#f3d8bc" stroke-width="1.5"/>' +
      '<circle cx="88" cy="88" r="7.5" fill="#e8942a" stroke="#bf7a1a" stroke-width="2"/>' +
      '<circle cx="132" cy="88" r="7.5" fill="#e8942a" stroke="#bf7a1a" stroke-width="2"/>' +
      '<circle cx="88" cy="88" r="4" fill="#2d3142"/><circle cx="132" cy="88" r="4" fill="#2d3142"/>' +
      '<circle cx="90" cy="85.5" r="2" fill="#fff"/><circle cx="134" cy="85.5" r="2" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="88" cy="88" rx="11" ry="10" fill="#f6a063"/>' +
      '<ellipse class="cri-parpadeo" cx="132" cy="88" rx="11" ry="10" fill="#f6a063"/>' +
      '<path d="M76 74 q12 -7 24 -2 M120 72 q12 -5 24 2" stroke="#d96a33" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      /* morro claro con nariz negra y sonrisa ladina */
      '<ellipse cx="110" cy="108" rx="24" ry="15" fill="#fff5e9"/>' +
      '<ellipse cx="110" cy="101" rx="5.5" ry="4.5" fill="#3a2e2f"/>' +
      '<circle cx="108.5" cy="99.5" r="1.2" fill="#fff"/>' +
      '<path d="M110 108 q0 5 -7 6 M110 108 q3 6 10 4" stroke="#a5623a" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<circle cx="76" cy="106" r="6.5" fill="#ff8f6a" opacity="0.35"/><circle cx="144" cy="106" r="6.5" fill="#ff8f6a" opacity="0.35"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     7) PANDA — parches negros, manchita del antifaz, banda
        de hombros y chango de bambú al lado
     ========================================================= */
  function panda() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Panda">' +
      "<defs>" +
      '<linearGradient id="pdCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eef1f4"/></linearGradient>' +
      '<radialGradient id="pdCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f0f3f6"/></radialGradient>' +
      "</defs>" +
      /* ramita de bambú al lado (el panda la adora) */
      '<g aria-hidden="true">' +
      '<path d="M28 228 q2 -30 7 -30 q4 0 4 30 z" fill="#8fce8f" stroke="#4c9a4d" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M28 198 q-12 -6 -14 2 q10 4 14 -2 z M40 206 q12 -6 14 2 q-10 4 -14 -2 z" fill="#6abf69" stroke="#4c9a4d" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M30 210 h6 M30 190 h6" stroke="#4c9a4d" stroke-width="1.4"/>' +
      "</g>" +
      sombra +
      /* colita negra detrás */
      '<circle cx="154" cy="196" r="9" fill="#2d3142" stroke="#22252c" stroke-width="2"/>' +
      '<g class=" cri-respira">' +
      /* cuerpo blanco */
      '<path d="M110 126 C78 128 66 158 70 188 C74 214 90 226 110 226 C130 226 148 214 152 188 C156 158 144 128 110 126 Z" fill="url(#pdCuerpo)" stroke="#3a4653" stroke-width="2.5"/>' +
      /* banda negra de hombros con brazos cariñosos */
      '<path d="M66 154 Q110 138 154 154 Q151 170 110 175 Q69 170 66 154 Z" fill="#2d3142"/>' +
      '<ellipse cx="64" cy="174" rx="11" ry="18" fill="#2d3142" transform="rotate(14 64 174)"/>' +
      '<ellipse cx="156" cy="174" rx="11" ry="18" fill="#2d3142" transform="rotate(-14 156 174)"/>' +
      '<circle cx="59" cy="192" r="7" fill="#2d3142"/><circle cx="161" cy="192" r="7" fill="#2d3142"/>' +
      '<path d="M56 197 l-2 4 M59 198 l0 4 M62 197 l2 4 M158 197 l-2 4 M161 198 l0 4 M164 197 l2 4" stroke="#f4e7c8" stroke-width="1.8" stroke-linecap="round"/>' +
      /* barriguita blanca con pelito suave */
      '<ellipse cx="110" cy="198" rx="28" ry="26" fill="#fff"/>' +
      '<path d="M90 190 q10 8 20 0 q10 8 20 0 M92 208 q9 7 18 0 q9 7 18 0" stroke="#dfe5ea" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* ancas y pies negros con uñitas claras */
      '<ellipse cx="78" cy="202" rx="14" ry="16" fill="#2d3142"/>' +
      '<ellipse cx="142" cy="202" rx="14" ry="16" fill="#2d3142"/>' +
      '<ellipse cx="74" cy="227" rx="12" ry="5.5" fill="#2d3142"/>' +
      '<ellipse cx="146" cy="227" rx="12" ry="5.5" fill="#2d3142"/>' +
      '<path d="M68 228 l-1 3 M74 229 l0 3 M80 228 l1 3 M140 228 l-1 3 M146 229 l0 3 M152 228 l1 3" stroke="#f4e7c8" stroke-width="1.8" stroke-linecap="round"/>' +
      "</g>" +
      /* orejas negras redonditas con pelito */
      '<circle cx="76" cy="52" r="13" fill="#2d3142" stroke="#22252c" stroke-width="2"/>' +
      '<circle cx="144" cy="52" r="13" fill="#2d3142" stroke="#22252c" stroke-width="2"/>' +
      '<path d="M71 49 q4 -5 8 -1 M139 45 q4 5 8 1" stroke="rgba(255,255,255,.2)" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
      /* cabeza clara */
      '<circle cx="110" cy="88" r="45" fill="url(#pdCabeza)" stroke="#3a4653" stroke-width="2.5"/>' +
      /* antifaces negros con ojos chiquitos alertas */
      '<ellipse cx="84" cy="92" rx="13" ry="16" fill="#2d3142" transform="rotate(-18 84 92)"/>' +
      '<ellipse cx="136" cy="92" rx="13" ry="16" fill="#2d3142" transform="rotate(18 136 92)"/>' +
      '<circle cx="87" cy="90" r="4.5" fill="#fff"/><circle cx="133" cy="90" r="4.5" fill="#fff"/>' +
      '<circle cx="87" cy="90" r="2.4" fill="#2d3142"/><circle cx="133" cy="90" r="2.4" fill="#2d3142"/>' +
      '<circle cx="88.2" cy="88.6" r="1.1" fill="#fff"/><circle cx="134.2" cy="88.6" r="1.1" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="87" cy="90" rx="5.5" ry="5" fill="#3a4653"/>' +
      '<ellipse class="cri-parpadeo" cx="133" cy="90" rx="5.5" ry="5" fill="#3a4653"/>' +
      /* nariz y sonrisita */
      '<path d="M104 104 q6 -4 12 0 q1 7 -6 9 q-7 -2 -6 -9 z" fill="#2d3142"/>' +
      '<path d="M110 113 q2 5 8 5 M110 113 q-2 5 -8 5" stroke="#3a4653" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     8) UNICORNIO — cuerno de espiral dorado, melena de
        arcoíris, cascos de oro y marcas de cariño
     ========================================================= */
  function unicornio() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Unicornio">' +
      "<defs>" +
      '<linearGradient id="unCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fffdf8"/><stop offset="1" stop-color="#f2ecf7"/></linearGradient>' +
      '<radialGradient id="unCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f5effa"/></radialGradient>' +
      '<linearGradient id="unCuerno" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#e6a72e"/></linearGradient>' +
      "</defs>" +
      sombra +
      /* cola de arcoíris (tres mechones) */
      '<g class="cri-cola">' +
      '<path d="M147 198 Q196 188 193 136 Q190 112 172 102 Q166 99 165 110 Q178 130 174 158 Q168 184 144 190 Z" fill="#f79ad3" stroke="#e07fc0" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M150 192 Q188 182 187 140 Q184 120 170 108 Q164 106 164 116 Q175 132 172 156 Q167 178 146 186 Z" fill="#9ad0f5" opacity="0.9"/>' +
      '<path d="M154 186 Q180 176 179 144 Q176 126 166 116 Q162 114 162 122 Q170 136 168 154 Q164 172 148 180 Z" fill="#c9a0f0" opacity="0.85"/>' +
      "</g>" +
      '<g class=" cri-respira">' +
      /* ancas + cuerpo esbelto */
      '<ellipse cx="76" cy="198" rx="13" ry="17" fill="#fffdf8" stroke="#cbb8dd" stroke-width="2.5"/>' +
      '<ellipse cx="144" cy="198" rx="13" ry="17" fill="#fffdf8" stroke="#cbb8dd" stroke-width="2.5"/>' +
      '<path d="M110 140 C80 142 70 168 74 196 C78 218 94 226 110 226 C126 226 142 218 146 196 C150 168 140 142 110 140 Z" fill="url(#unCuerpo)" stroke="#cbb8dd" stroke-width="2.5"/>' +
      /* patitas finas con cascos de oro */
      '<rect x="82" y="196" width="11" height="27" rx="5.5" fill="#fffdf8" stroke="#cbb8dd" stroke-width="2"/>' +
      '<rect x="112" y="196" width="11" height="27" rx="5.5" fill="#fffdf8" stroke="#cbb8dd" stroke-width="2"/>' +
      '<rect x="72" y="200" width="12" height="23" rx="5.5" fill="#fffdf8" stroke="#cbb8dd" stroke-width="2"/>' +
      '<rect x="136" y="200" width="12" height="23" rx="5.5" fill="#fffdf8" stroke="#cbb8dd" stroke-width="2"/>' +
      '<rect x="81" y="219" width="13" height="8" rx="3" fill="#f2b63b" stroke="#d9a01e" stroke-width="1.6"/>' +
      '<rect x="111" y="219" width="13" height="8" rx="3" fill="#f2b63b" stroke="#d9a01e" stroke-width="1.6"/>' +
      '<rect x="71" y="219" width="14" height="8" rx="3" fill="#f2b63b" stroke="#d9a01e" stroke-width="1.6"/>' +
      '<rect x="135" y="219" width="14" height="8" rx="3" fill="#f2b63b" stroke="#d9a01e" stroke-width="1.6"/>' +
      /* marcas de cariño en el costado: corazoncitos */
      '<path d="M0 -3.2 C0 -6.2 -4.4 -6.2 -4.4 -3.2 C-4.4 -1.2 -2 0.4 0 2.4 C2 0.4 4.4 -1.2 4.4 -3.2 C4.4 -6.2 0 -6.2 0 -3.2 Z" transform="translate(86 180) scale(1.15)" fill="#f79ad3"/>' +
      '<path d="M0 -3.2 C0 -6.2 -4.4 -6.2 -4.4 -3.2 C-4.4 -1.2 -2 0.4 0 2.4 C2 0.4 4.4 -1.2 4.4 -3.2 C4.4 -6.2 0 -6.2 0 -3.2 Z" transform="translate(95 189) scale(0.85)" fill="#9ad0f5"/>' +
      '<path d="M0 -3.2 C0 -6.2 -4.4 -6.2 -4.4 -3.2 C-4.4 -1.2 -2 0.4 0 2.4 C2 0.4 4.4 -1.2 4.4 -3.2 C4.4 -6.2 0 -6.2 0 -3.2 Z" transform="translate(78 190) scale(0.7)" fill="#c9a0f0"/>' +
      "</g>" +
      /* orejas blancas con interior rosita */
      '<path d="M84 56 Q78 28 92 26 Q100 40 104 54 Z" fill="#fffdf8" stroke="#cbb8dd" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M136 56 Q142 28 128 26 Q120 40 116 54 Z" fill="#fffdf8" stroke="#cbb8dd" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M90 52 Q87 38 93 36 Q98 44 100 50 Z" fill="#ffd9ea"/>' +
      '<path d="M130 52 Q133 38 127 36 Q122 44 120 50 Z" fill="#ffd9ea"/>' +
      /* cabecera clara */
      '<circle cx="110" cy="92" r="45" fill="url(#unCabeza)" stroke="#cbb8dd" stroke-width="2.5"/>' +
      /* melena de arcoíris: flequillo rizado y mechones al costado */
      '<circle cx="76" cy="62" r="11" fill="#f79ad3"/>' +
      '<circle cx="96" cy="55" r="11" fill="#9ad0f5"/>' +
      '<circle cx="124" cy="55" r="11" fill="#a8e6c3"/>' +
      '<circle cx="144" cy="62" r="11" fill="#c9a0f0"/>' +
      '<circle cx="80" cy="74" r="8" fill="#f79ad3" opacity="0.9"/>' +
      '<circle cx="122" cy="64" r="8" fill="#9ad0f5" opacity="0.9"/>' +
      '<path d="M64 76 Q50 100 56 128 Q64 136 70 128 Q60 102 72 80 Z" fill="#f79ad3" stroke="#e07fc0" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M156 76 Q170 100 164 128 Q156 136 150 128 Q160 102 148 80 Z" fill="#9ad0f5" stroke="#7cb8e2" stroke-width="1.8" stroke-linejoin="round"/>' +
      /* cuerno dorado con espiral */
      '<path d="M104 52 L110 8 L116 52 Z" fill="url(#unCuerno)" stroke="#d9a01e" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M105.5 40 l9 4 M104 30 l13 6 M103 20 l15 7" stroke="rgba(255,255,255,.55)" stroke-width="2" stroke-linecap="round" fill="none"/>' +
      /* ojos violetas con pestañitas */
      '<circle cx="88" cy="96" r="11" fill="#fff" stroke="#e0d3ea" stroke-width="1.5"/>' +
      '<circle cx="132" cy="96" r="11" fill="#fff" stroke="#e0d3ea" stroke-width="1.5"/>' +
      '<circle cx="88" cy="96" r="8" fill="#a56de2" stroke="#8a4fc8" stroke-width="2"/>' +
      '<circle cx="132" cy="96" r="8" fill="#a56de2" stroke="#8a4fc8" stroke-width="2"/>' +
      '<circle cx="88" cy="96" r="4.5" fill="#2d3142"/><circle cx="132" cy="96" r="4.5" fill="#2d3142"/>' +
      '<circle cx="90.5" cy="93" r="2.4" fill="#fff"/><circle cx="134.5" cy="93" r="2.4" fill="#fff"/>' +
      '<circle cx="85" cy="99" r="1.2" fill="#fff"/><circle cx="129" cy="99" r="1.2" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="88" cy="96" rx="12" ry="11" fill="#f4edf6"/>' +
      '<ellipse class="cri-parpadeo" cx="132" cy="96" rx="12" ry="11" fill="#f4edf6"/>' +
      '<path d="M77 88 l-5 -4 M79 84 l-3 -5 M84 81 l-1 -5 M143 88 l5 -4 M141 84 l3 -5 M136 81 l1 -5" stroke="#6b4a8c" stroke-width="2" stroke-linecap="round" fill="none"/>' +
      /* hocico suave de poni */
      '<ellipse cx="110" cy="114" rx="20" ry="12" fill="#f7ecf2" stroke="#e8d5e5" stroke-width="1.5"/>' +
      '<circle cx="103" cy="112" r="2" fill="#c69cc4"/><circle cx="117" cy="112" r="2" fill="#c69cc4"/>' +
      '<path d="M104 118 q6 5 12 0" stroke="#b98db8" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<circle cx="74" cy="112" r="7" fill="#f9a8c9" opacity="0.4"/><circle cx="146" cy="112" r="7" fill="#f9a8c9" opacity="0.4"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     9) PERRITO — orejas caídas, parche del ojo, lengua afuera
        y collar con chapita
     ========================================================= */
  function perrito() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Perrito">' +
      "<defs>" +
      '<linearGradient id="peCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2c48c"/><stop offset="1" stop-color="#e8a860"/></linearGradient>' +
      '<radialGradient id="peCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#f8d2a0"/><stop offset="1" stop-color="#eaa95e"/></radialGradient>' +
      "</defs>" +
      sombra +
      /* colita jolgorio */
      '<g class="cri-cola">' +
      '<path d="M148 198 q20 4 26 -12 q-14 2 -18 4 q4 -8 14 -14 q-20 2 -26 12 z" fill="#eaa95e" stroke="#c98d5f" stroke-width="2" stroke-linejoin="round"/>' +
      "</g>" +
      '<g class=" cri-respira">' +
      /* manchitas del lomo y cuerpo */
      '<path d="M110 124 C76 126 64 158 68 188 C72 214 90 226 110 226 C130 226 148 214 152 188 C156 158 144 126 110 124 Z" fill="url(#peCuerpo)" stroke="#c98d5f" stroke-width="2.5"/>' +
      '<ellipse cx="78" cy="168" rx="10" ry="12" fill="#c98d5f" opacity="0.55"/>' +
      '<ellipse cx="144" cy="160" rx="9" ry="10" fill="#c98d5f" opacity="0.55"/>' +
      /* pecho clarito */
      '<ellipse cx="110" cy="192" rx="30" ry="32" fill="#fff3e0"/>' +
      '<path d="M86 184 q12 9 24 0 q12 9 24 0 M88 208 q11 8 22 0 q11 8 22 0" stroke="#eed9b8" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* patitas con deditos y oliolitos */
      '<rect x="84" y="204" width="16" height="23" rx="8" fill="#eaa95e" stroke="#c98d5f" stroke-width="2.5"/>' +
      '<rect x="120" y="204" width="16" height="23" rx="8" fill="#eaa95e" stroke="#c98d5f" stroke-width="2.5"/>' +
      '<path d="M88 227 v-4 M96 227 v-4 M124 227 v-4 M132 227 v-4" stroke="#e0bd8a" stroke-width="1.6" stroke-linecap="round"/>' +
      "</g>" +
      /* collar con chapita dorada */
      '<ellipse cx="110" cy="136" rx="33" ry="9" fill="#ef476f" stroke="#c73a5a" stroke-width="2"/>' +
      '<circle cx="110" cy="148" r="5.5" fill="#ffd166" stroke="#d9a01e" stroke-width="1.6"/>' +
      /* orejas caídas de chocolate */
      '<path d="M80 48 Q60 44 54 68 Q54 86 74 86 Q88 80 92 62 Z" fill="#7c4a2a" stroke="#5f3823" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M140 48 Q160 44 166 68 Q166 86 146 86 Q132 80 128 62 Z" fill="#7c4a2a" stroke="#5f3823" stroke-width="2.5" stroke-linejoin="round"/>' +
      /* cabeza con parche del ojo */
      '<circle cx="110" cy="90" r="45" fill="url(#peCabeza)" stroke="#c98d5f" stroke-width="2.5"/>' +
      '<ellipse cx="86" cy="88" rx="11" ry="14" fill="#7c4a2a" transform="rotate(-12 86 88)"/>' +
      /* ojitos brillantes */
      '<circle cx="88" cy="90" r="9" fill="#fff" stroke="#e8d3b6" stroke-width="1.4"/>' +
      '<circle cx="88" cy="90" r="6" fill="#5d4433" stroke="#3a2e2f" stroke-width="1.8"/>' +
      '<circle cx="88" cy="90" r="2.4" fill="#2d3142"/>' +
      '<circle cx="132" cy="88" r="9" fill="#fff" stroke="#e8d3b6" stroke-width="1.4"/>' +
      '<circle cx="132" cy="88" r="6" fill="#5d4433" stroke="#3a2e2f" stroke-width="1.8"/>' +
      '<circle cx="132" cy="88" r="2.4" fill="#2d3142"/>' +
      '<circle cx="90" cy="87.5" r="2" fill="#fff"/><circle cx="134" cy="85.5" r="2" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="88" cy="90" rx="10" ry="9" fill="#f2c48c"/>' +
      '<ellipse class="cri-parpadeo" cx="132" cy="88" rx="10" ry="9" fill="#f2c48c"/>' +
      '<path d="M78 76 q10 -6 20 -2 M122 74 q10 -4 20 2" stroke="#7c4a2a" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
      /* hocico claro, trufita negra y lengua afuera */
      '<ellipse cx="110" cy="110" rx="24" ry="14" fill="#fff3e0" stroke="#eed9b8" stroke-width="1.5"/>' +
      '<ellipse cx="110" cy="103" rx="6" ry="5" fill="#3a2e2f"/>' +
      '<circle cx="108.5" cy="101.5" r="1.2" fill="#fff"/>' +
      '<path d="M110 110 q0 5 -7 5 M110 110 q0 5 7 5" stroke="#a5623a" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M103 115 q7 3 14 0 q2 12 -7 13 q-9 -1 -7 -13 z" fill="#ff8fae" stroke="#e06a92" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M110 117 v8" stroke="#e06a92" stroke-width="1.2"/>' +
      '<circle cx="76" cy="106" r="6.5" fill="#ef6a8e" opacity="0.3"/><circle cx="144" cy="106" r="6.5" fill="#ef6a8e" opacity="0.3"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     10) PINGÜINO — esmoquin continuo de cabeza a patas:
         panza nevada, aletas, máscara facial y pico de pera
     ========================================================= */
  function pinguino() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Pingüino">' +
      "<defs>" +
      '<linearGradient id="pgCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4d617f"/><stop offset="1" stop-color="#3b4a63"/></linearGradient>' +
      "</defs>" +
      sombra +
      '<g class=" cri-respira">' +
      /* esmoquin completo: la cabeza nace del mismo bloque oscuro */
      '<path d="M110 66 C72 68 60 130 63 178 C67 214 87 227 110 227 C133 227 153 214 157 178 C160 130 148 68 110 66 Z" fill="url(#pgCuerpo)" stroke="#2c3a4e" stroke-width="2.5"/>' +
      /* panza nevada */
      '<ellipse cx="110" cy="184" rx="34" ry="38" fill="#f4f8fb"/>' +
      '<path d="M82 172 q14 10 28 0 q14 10 28 0 M84 200 q13 9 26 0 q13 9 26 0" stroke="#dbe7ef" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* aletas con plumas */
      '<path d="M72 138 Q46 162 52 198 Q66 212 88 206 Q78 172 78 142 Z" fill="#3b4a63" stroke="#2c3a4e" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M60 162 Q54 180 60 198 M70 158 Q66 178 72 200" stroke="#2c3a4e" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M148 138 Q174 162 168 198 Q154 212 132 206 Q142 172 142 142 Z" fill="#3b4a63" stroke="#2c3a4e" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M160 162 Q166 180 160 198 M150 158 Q154 178 148 200" stroke="#2c3a4e" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* patitas naranjas de tres deditos */
      '<ellipse cx="92" cy="228" rx="12" ry="5.5" fill="#f6ae2d" stroke="#d9822b" stroke-width="2"/>' +
      '<ellipse cx="128" cy="228" rx="12" ry="5.5" fill="#f6ae2d" stroke="#d9822b" stroke-width="2"/>' +
      '<path d="M87 230 l-1 3 M92 231 l0 3 M97 230 l1 3 M123 230 l-1 3 M128 231 l0 3 M133 230 l1 3" stroke="#d9822b" stroke-width="1.8" stroke-linecap="round"/>' +
      "</g>" +
      /* manchitas amarillas del emperador junto a las aletas de cara */
      '<circle cx="80" cy="104" r="5.5" fill="#ffd166" stroke="#e0a72e" stroke-width="1.5"/>' +
      '<circle cx="140" cy="104" r="5.5" fill="#ffd166" stroke="#e0a72e" stroke-width="1.5"/>' +
      /* máscara facial nevada integrada en la cabeza */
      '<ellipse cx="110" cy="106" rx="24" ry="19" fill="#f4f8fb" stroke="#dbe7ef" stroke-width="1.6"/>' +
      /* ojitos traviesos */
      '<circle cx="96" cy="100" r="6.5" fill="#2c3a4e" stroke="#22252c" stroke-width="1.4"/>' +
      '<circle cx="124" cy="100" r="6.5" fill="#2c3a4e" stroke="#22252c" stroke-width="1.4"/>' +
      '<circle cx="98.2" cy="98" r="2.1" fill="#fff"/><circle cx="126.2" cy="98" r="2.1" fill="#fff"/>' +
      '<circle cx="93.8" cy="103" r="1.1" fill="#fff"/><circle cx="121.8" cy="103" r="1.1" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="96" cy="100" rx="8" ry="7.5" fill="#4d617f"/>' +
      '<ellipse class="cri-parpadeo" cx="124" cy="100" rx="8" ry="7.5" fill="#4d617f"/>' +
      /* pico naranja de pera chiquita */
      '<path d="M103 108 Q110 104 117 108 L111 124 Q110 127 109 124 Z" fill="#f6ae2d" stroke="#d9822b" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M106 109 l8 0" stroke="rgba(255,255,255,.5)" stroke-width="1.6" stroke-linecap="round"/>' +
      '<circle cx="78" cy="118" r="5.5" fill="#ff8fae" opacity="0.4"/><circle cx="142" cy="118" r="5.5" fill="#ff8fae" opacity="0.4"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     11) LEÓN — melena radiante de pétalos, morro blando,
         colita con penacho y patitas con almohadilla
     ========================================================= */
  function leon() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="León">' +
      "<defs>" +
      '<linearGradient id="lnCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6c76a"/><stop offset="1" stop-color="#eeae4e"/></linearGradient>' +
      '<radialGradient id="lnCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#ffd97e"/><stop offset="1" stop-color="#f2b63b"/></radialGradient>' +
      "</defs>" +
      sombra +
      /* cola con penacho de león */
      '<g class="cri-cola">' +
      '<path d="M148 196 Q184 186 180 150 Q178 136 168 126" stroke="#f2b63b" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<circle cx="166" cy="120" r="9" fill="#7c4a2a" stroke="#5f3823" stroke-width="1.5"/>' +
      '<path d="M162 116 q4 -3 8 0 M161 124 q5 3 9 0" stroke="rgba(255,255,255,.25)" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
      "</g>" +
      '<g class=" cri-respira">' +
      /* cuerpo dorado y patas con almohadilla */
      '<path d="M110 136 C82 138 72 164 75 194 C79 216 93 226 110 226 C127 226 141 216 145 194 C148 164 138 138 110 136 Z" fill="url(#lnCuerpo)" stroke="#c9791f" stroke-width="2.5"/>' +
      '<rect x="84" y="202" width="15" height="24" rx="7" fill="#f6c76a" stroke="#c9791f" stroke-width="2.5"/>' +
      '<rect x="121" y="202" width="15" height="24" rx="7" fill="#f6c76a" stroke="#c9791f" stroke-width="2.5"/>' +
      '<ellipse cx="91" cy="226" rx="9" ry="5" fill="#ffe9c4" stroke="#e3c88e" stroke-width="1.5"/>' +
      '<ellipse cx="129" cy="226" rx="9" ry="5" fill="#ffe9c4" stroke="#e3c88e" stroke-width="1.5"/>' +
      '<path d="M87 226 v-4 M95 226 v-4 M125 226 v-4 M133 226 v-4" stroke="#e3c88e" stroke-width="1.5" stroke-linecap="round"/>' +
      "</g>" +
      /* melena radiante: pétalos alrededor de la cabeza */
      '<g class="cri-melena">' +
      '<circle cx="110" cy="86" r="60" fill="#e8963c"/>' +
      '<circle cx="164" cy="86" r="17" fill="#e8963c" stroke="#c97b26" stroke-width="2"/>' +
      '<circle cx="148" cy="124" r="17" fill="#e8963c" stroke="#c97b26" stroke-width="2"/>' +
      '<circle cx="110" cy="140" r="17" fill="#e8963c" stroke="#c97b26" stroke-width="2"/>' +
      '<circle cx="72" cy="124" r="17" fill="#e8963c" stroke="#c97b26" stroke-width="2"/>' +
      '<circle cx="56" cy="86" r="17" fill="#e8963c" stroke="#c97b26" stroke-width="2"/>' +
      '<circle cx="72" cy="48" r="17" fill="#e8963c" stroke="#c97b26" stroke-width="2"/>' +
      '<circle cx="110" cy="32" r="17" fill="#e8963c" stroke="#c97b26" stroke-width="2"/>' +
      '<circle cx="148" cy="48" r="17" fill="#e8963c" stroke="#c97b26" stroke-width="2"/>' +
      '<path d="M64 62 q6 6 4 14 M156 62 q-6 6 -4 14 M74 112 q8 2 12 6 M146 112 q-8 2 -12 6 M96 130 q6 4 12 4 M124 130 q-6 4 -12 4" stroke="rgba(255,255,255,.3)" stroke-width="2.2" fill="none" stroke-linecap="round"/>' +
      "</g>" +
      /* orejitas redondas */
      '<circle cx="78" cy="46" r="10" fill="#f2b63b" stroke="#c9791f" stroke-width="2"/>' +
      '<circle cx="142" cy="46" r="10" fill="#f2b63b" stroke="#c9791f" stroke-width="2"/>' +
      '<circle cx="78" cy="46" r="4.5" fill="#ffe9c4"/><circle cx="142" cy="46" r="4.5" fill="#ffe9c4"/>' +
      /* cara dorada */
      '<circle cx="110" cy="86" r="45" fill="url(#lnCabeza)" stroke="#c9791f" stroke-width="2.5"/>' +
      '<circle cx="88" cy="84" r="9.5" fill="#fff" stroke="#ead9b3" stroke-width="1.4"/>' +
      '<circle cx="132" cy="84" r="9.5" fill="#fff" stroke="#ead9b3" stroke-width="1.4"/>' +
      '<circle cx="88" cy="84" r="6" fill="#a56de2" stroke="#8a4fc8" stroke-width="1.8"/>' +
      '<circle cx="132" cy="84" r="6" fill="#a56de2" stroke="#8a4fc8" stroke-width="1.8"/>' +
      '<circle cx="88" cy="84" r="3" fill="#2d3142"/><circle cx="132" cy="84" r="3" fill="#2d3142"/>' +
      '<circle cx="90" cy="81.5" r="1.8" fill="#fff"/><circle cx="134" cy="81.5" r="1.8" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="88" cy="84" rx="10.5" ry="9.5" fill="#f8c95e"/>' +
      '<ellipse class="cri-parpadeo" cx="132" cy="84" rx="10.5" ry="9.5" fill="#f8c95e"/>' +
      /* morro blandito con bigotes y sonrería */
      '<ellipse cx="110" cy="106" rx="26" ry="18" fill="#ffe9c4" stroke="#e3c88e" stroke-width="1.5"/>' +
      '<path d="M104 99 q6 -3 12 0 q-1 6 -6 7 q-5 -1 -6 -7 z" fill="#8a5a3b"/>' +
      '<path d="M110 106 q-1 5 -7 5 M110 106 q1 5 7 5" stroke="#a5623a" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M138 99 l4 -2 M140 103 l5 1 M140 108 l4 3 M82 99 l-4 -2 M80 103 l-5 1 M80 108 l-4 3" stroke="#d9ab6e" stroke-width="1.5" stroke-linecap="round" fill="none"/>' +
      '<circle cx="72" cy="100" r="6" fill="#ff8f6a" opacity="0.3"/><circle cx="148" cy="100" r="6" fill="#ff8f6a" opacity="0.3"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     12) TORTUGA — cabecita asomando sobre el cascarón con
         placas, pecho caladito, patitas gorditas y sonrisa
         serenita
     ========================================================= */
  function tortuga() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Tortuga">' +
      "<defs>" +
      '<linearGradient id="tgCasa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9cb26b"/><stop offset="1" stop-color="#6f8248"/></linearGradient>' +
      '<linearGradient id="tgPiel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a8d594"/><stop offset="1" stop-color="#7db56a"/></linearGradient>' +
      "</defs>" +
      sombra +
      '<g class=" cri-respira">' +
      /* patitas gorditas debajo del pecho */
      '<rect x="74" y="200" width="16" height="30" rx="8" fill="url(#tgPiel)" stroke="#5f944e" stroke-width="2.5"/>' +
      '<rect x="130" y="200" width="16" height="30" rx="8" fill="url(#tgPiel)" stroke="#5f944e" stroke-width="2.5"/>' +
      '<path d="M78 230 l-2 -4 M82 231 l0 -4 M86 230 l2 -4 M134 230 l-2 -4 M138 231 l0 -4 M142 230 l2 -4" stroke="#5f944e" stroke-width="1.8" stroke-linecap="round"/>' +
      /* pecho caladito asoma debajo del domo */
      '<rect x="78" y="176" width="64" height="26" rx="12" fill="#e8d49b" stroke="#c9b273" stroke-width="2"/>' +
      /* caparazón domo con placas completas */
      '<path d="M62 176 C56 136 82 110 110 110 C138 110 164 136 158 176 Q156 186 144 186 L76 186 Q64 186 62 176 Z" fill="url(#tgCasa)" stroke="#55663e" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M110 130 l18 9 l0 22 l-18 9 l-18 -9 l0 -22 z" fill="#b8c88a" stroke="#55663e" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M80 142 l14 8 l0 18 l-14 8 z M140 142 l-14 8 l0 18 l14 8 z" fill="#8a9a5b" stroke="#55663e" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M70 170 q40 10 80 0" stroke="#55663e" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      '<path d="M86 122 q-4 12 0 22 M134 122 q4 12 0 22" stroke="rgba(255,255,255,.35)" stroke-width="2.2" fill="none" stroke-linecap="round"/>' +
      "</g>" +
      /* cabecera serenita asomando por arriba del cascarón */
      '<circle cx="110" cy="76" r="36" fill="url(#tgPiel)" stroke="#5f944e" stroke-width="2.5"/>' +
      '<path d="M97 68 q-4 12 0 22 M123 68 q4 12 0 22" stroke="rgba(255,255,255,.3)" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* ojitos redondos de refresco */
      '<circle cx="97" cy="70" r="8" fill="#fff" stroke="#cfe3c4" stroke-width="1.4"/>' +
      '<circle cx="123" cy="70" r="8" fill="#fff" stroke="#cfe3c4" stroke-width="1.4"/>' +
      '<circle cx="97" cy="70" r="5" fill="#5d8a4c" stroke="#4a7140" stroke-width="1.6"/>' +
      '<circle cx="123" cy="70" r="5" fill="#5d8a4c" stroke="#4a7140" stroke-width="1.6"/>' +
      '<circle cx="97" cy="70" r="2.5" fill="#2d3142"/><circle cx="123" cy="70" r="2.5" fill="#2d3142"/>' +
      '<circle cx="98.6" cy="68" r="1.4" fill="#fff"/><circle cx="124.6" cy="68" r="1.4" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="97" cy="70" rx="9" ry="8" fill="#a8d594"/>' +
      '<ellipse class="cri-parpadeo" cx="123" cy="70" rx="9" ry="8" fill="#a8d594"/>' +
      '<path d="M86 60 q9 -5 18 -2 M116 58 q9 -3 18 2" stroke="#5f944e" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
      /* naricitas y sonrisa serenita bajo el domo */
      '<circle cx="105" cy="84" r="1.8" fill="#4a7140"/><circle cx="115" cy="84" r="1.8" fill="#4a7140"/>' +
      '<path d="M102 92 q8 5 16 0" stroke="#4a7140" stroke-width="2.2" fill="none" stroke-linecap="round"/>' +
      '<circle cx="86" cy="88" r="5.5" fill="#ff9ec0" opacity="0.35"/><circle cx="134" cy="88" r="5.5" fill="#ff9ec0" opacity="0.35"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     13) OSITO — orejas redonditas, hocico de miel y ollita
         de miel a su lado
     ========================================================= */
  function osito() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Osito">' +
      "<defs>" +
      '<linearGradient id="osCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d3a06b"/><stop offset="1" stop-color="#a87848"/></linearGradient>' +
      '<radialGradient id="osCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#dca874"/><stop offset="1" stop-color="#b07b46"/></radialGradient>' +
      "</defs>" +
      /* ollita de miel al lado */
      '<g aria-hidden="true">' +
      '<ellipse cx="43" cy="231" rx="17" ry="4" fill="rgba(0,0,0,.10)"/>' +
      '<path d="M30 206 q-6 14 2 22 q12 6 22 0 q8 -8 2 -22 z" fill="#c98d5f" stroke="#9a6a3a" stroke-width="2" stroke-linejoin="round"/>' +
      '<ellipse cx="43" cy="206" rx="14" ry="5" fill="#ffd166" stroke="#d9a01e" stroke-width="1.6"/>' +
      '<path d="M46 208 q2 8 -2 12 q-4 3 -6 -2 q2 4 4 -10 z" fill="#ffd166"/>' +
      '<path d="M35 216 q8 4 16 0" stroke="rgba(255,255,255,.35)" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      "</g>" +
      sombra +
      '<g class=" cri-respira">' +
      /* cuerpo panzón */
      '<path d="M110 130 C76 132 64 162 68 190 C72 214 90 226 110 226 C130 226 148 214 152 190 C156 162 144 132 110 130 Z" fill="url(#osCuerpo)" stroke="#7c4a2a" stroke-width="2.5"/>' +
      '<ellipse cx="110" cy="194" rx="30" ry="30" fill="#c9a26b"/>' +
      '<path d="M86 186 q12 9 24 0 q12 9 24 0 M88 208 q11 8 22 0 q11 8 22 0" stroke="#b3804f" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* brazos gorditos y patas con deditos */
      '<ellipse cx="66" cy="180" rx="12" ry="18" fill="url(#osCuerpo)" stroke="#7c4a2a" stroke-width="2.5" transform="rotate(16 66 180)"/>' +
      '<ellipse cx="154" cy="180" rx="12" ry="18" fill="url(#osCuerpo)" stroke="#7c4a2a" stroke-width="2.5" transform="rotate(-16 154 180)"/>' +
      '<rect x="84" y="206" width="16" height="22" rx="8" fill="#c98d5f" stroke="#7c4a2a" stroke-width="2.5"/>' +
      '<rect x="120" y="206" width="16" height="22" rx="8" fill="#c98d5f" stroke="#7c4a2a" stroke-width="2.5"/>' +
      '<path d="M88 228 v-4 M96 228 v-4 M124 228 v-4 M132 228 v-4" stroke="#8a5c34" stroke-width="1.6" stroke-linecap="round"/>' +
      "</g>" +
      /* orejas redondas de peluche */
      '<circle cx="76" cy="50" r="14" fill="#c98d5f" stroke="#7c4a2a" stroke-width="2.5"/>' +
      '<circle cx="144" cy="50" r="14" fill="#c98d5f" stroke="#7c4a2a" stroke-width="2.5"/>' +
      '<circle cx="76" cy="50" r="6.5" fill="#e8c9a0"/><circle cx="144" cy="50" r="6.5" fill="#e8c9a0"/>' +
      /* cabeza de peluche */
      '<circle cx="110" cy="88" r="45" fill="url(#osCabeza)" stroke="#7c4a2a" stroke-width="2.5"/>' +
      /* ojitos de chispa */
      '<circle cx="88" cy="88" r="9" fill="#fff" stroke="#e0c8a4" stroke-width="1.4"/>' +
      '<circle cx="132" cy="88" r="9" fill="#fff" stroke="#e0c8a4" stroke-width="1.4"/>' +
      '<circle cx="88" cy="88" r="5.5" fill="#5d4433"/><circle cx="132" cy="88" r="5.5" fill="#5d4433"/>' +
      '<circle cx="90" cy="85.5" r="1.9" fill="#fff"/><circle cx="134" cy="85.5" r="1.9" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="88" cy="88" rx="10" ry="9" fill="#d3a06b"/>' +
      '<ellipse class="cri-parpadeo" cx="132" cy="88" rx="10" ry="9" fill="#d3a06b"/>' +
      '<path d="M78 76 q10 -6 20 -2 M122 74 q10 -4 20 2" stroke="#7c4a2a" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
      /* hocico de miel */
      '<ellipse cx="110" cy="108" rx="24" ry="16" fill="#e8c9a0" stroke="#d3b98f" stroke-width="1.5"/>' +
      '<path d="M103 100 q7 -4 14 0 q-1 8 -7 9 q-6 -1 -7 -9 z" fill="#3a2e2f"/>' +
      '<path d="M110 110 q0 5 -7 5 M110 110 q0 5 7 5" stroke="#a5623a" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<circle cx="72" cy="104" r="6" fill="#ff8f6a" opacity="0.3"/><circle cx="148" cy="104" r="6" fill="#ff8f6a" opacity="0.3"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     14) KOALA — orejas lanudas, narizota negra brillante y
         ramita de eucalipto que abraza
     ========================================================= */
  function koala() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Koala">' +
      "<defs>" +
      '<linearGradient id="klCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfd5da"/><stop offset="1" stop-color="#adb5bd"/></linearGradient>' +
      '<radialGradient id="klCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#e2e6ea"/><stop offset="1" stop-color="#b8bfc6"/></radialGradient>' +
      "</defs>" +
      sombra +
      '<g class=" cri-respira">' +
      /* cuerpecito apegadizo */
      '<path d="M110 126 C80 128 70 154 73 180 C77 202 92 212 110 212 C128 212 143 202 147 180 C150 154 140 128 110 126 Z" fill="url(#klCuerpo)" stroke="#8a95a0" stroke-width="2.5"/>' +
      /* pecho con pelaje blanco suave */
      '<ellipse cx="110" cy="182" rx="26" ry="28" fill="#f2f3f4"/>' +
      '<path d="M96 168 v26 M110 164 v30 M124 168 v26" stroke="#dfe3e7" stroke-width="2.4" stroke-linecap="round"/>' +
      /* brazos abrazando y ancas */
      '<ellipse cx="76" cy="176" rx="11" ry="16" fill="#c2cad1" stroke="#8a95a0" stroke-width="2.5" transform="rotate(18 76 176)"/>' +
      '<ellipse cx="144" cy="176" rx="11" ry="16" fill="#c2cad1" stroke="#8a95a0" stroke-width="2.5" transform="rotate(-18 144 176)"/>' +
      '<ellipse cx="84" cy="210" rx="13" ry="7" fill="#c2cad1" stroke="#8a95a0" stroke-width="2"/>' +
      '<ellipse cx="136" cy="210" rx="13" ry="7" fill="#c2cad1" stroke="#8a95a0" stroke-width="2"/>' +
      '<path d="M79 211 q4 2 8 0 M131 211 q4 2 8 0" stroke="#8a95a0" stroke-width="1.5" stroke-linecap="round"/>' +
      "</g>" +
      /* orejas lanudas gigantes con pelito asomando */
      '<circle cx="72" cy="52" r="18" fill="#cfd5da" stroke="#8a95a0" stroke-width="2.5"/>' +
      '<circle cx="148" cy="52" r="18" fill="#cfd5da" stroke="#8a95a0" stroke-width="2.5"/>' +
      '<circle cx="72" cy="52" r="9" fill="#efd8d8"/><circle cx="148" cy="52" r="9" fill="#efd8d8"/>' +
      '<path d="M60 40 q-4 6 -2 12 M64 34 q-6 6 -6 14 M160 40 q4 6 2 12 M156 34 q6 6 6 14" stroke="rgba(255,255,255,.5)" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
      /* cara grisecita */
      '<circle cx="110" cy="92" r="42" fill="url(#klCabeza)" stroke="#8a95a0" stroke-width="2.5"/>' +
      /* ojitosumirosos con chispa */
      '<circle cx="88" cy="88" r="6.5" fill="#3d434b" stroke="#2c3138" stroke-width="1.2"/>' +
      '<circle cx="132" cy="88" r="6.5" fill="#3d434b" stroke="#2c3138" stroke-width="1.2"/>' +
      '<circle cx="90.5" cy="86" r="1.9" fill="#fff"/><circle cx="134.5" cy="86" r="1.9" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="88" cy="88" rx="7.5" ry="7" fill="#b8bfc6"/>' +
      '<ellipse class="cri-parpadeo" cx="132" cy="88" rx="7.5" ry="7" fill="#b8bfc6"/>' +
      /* la gran nariz negra del koala con brillo */
      '<ellipse cx="110" cy="104" rx="10" ry="12" fill="#3d434b" stroke="#2c3138" stroke-width="1.5"/>' +
      '<ellipse cx="107" cy="100" rx="2.6" ry="4" fill="rgba(255,255,255,.45)" transform="rotate(-12 107 100)"/>' +
      /* sonrisita afable */
      '<path d="M104 120 q6 4 12 0" stroke="#8a95a0" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<circle cx="72" cy="104" r="5.5" fill="#ef9eb8" opacity="0.35"/><circle cx="148" cy="104" r="5.5" fill="#ef9eb8" opacity="0.35"/>' +
      /* ramita de eucalipto al lado */
      '<g aria-hidden="true">' +
      '<path d="M178 228 q-2 -22 4 -34" stroke="#6f8248" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="186" cy="196" rx="5" ry="10" fill="#8fce8f" stroke="#6f8248" stroke-width="1.6" transform="rotate(24 186 196)"/>' +
      '<ellipse cx="172" cy="200" rx="5" ry="10" fill="#8fce8f" stroke="#6f8248" stroke-width="1.6" transform="rotate(-24 172 200)"/>' +
      '<ellipse cx="188" cy="210" rx="4.5" ry="9" fill="#8fce8f" stroke="#6f8248" stroke-width="1.6" transform="rotate(20 188 210)"/>' +
      "</g>" +
      "</svg>"
    );
  }

  /* =========================================================
     15) ELEFANTE — orejones con perlita rosada, trompa que
         ondea y patas de safarí
     ========================================================= */
  function elefante() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Elefante">' +
      "<defs>" +
      '<linearGradient id="elCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a8bcc8"/><stop offset="1" stop-color="#8aa1b3"/></linearGradient>' +
      '<radialGradient id="elCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#c2d3dd"/><stop offset="1" stop-color="#94abb9"/></radialGradient>' +
      "</defs>" +
      sombra +
      '<g class=" cri-respira">' +
      /* cuerpo redondo de safarí */
      '<path d="M110 130 C74 132 62 164 66 192 C70 216 88 226 110 226 C132 226 150 216 154 192 C158 164 146 132 110 130 Z" fill="url(#elCuerpo)" stroke="#6f8798" stroke-width="2.5"/>' +
      '<ellipse cx="110" cy="196" rx="30" ry="28" fill="#c3d4de"/>' +
      /* colita con borla */
      '<path d="M152 176 Q172 182 174 200" stroke="#8aa1b3" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<circle cx="176" cy="204" r="6" fill="#6f8798" stroke="#5d7386" stroke-width="1.5"/>' +
      /* patas fatietas con pie plano */
      '<rect x="78" y="200" width="20" height="26" rx="9" fill="#a8bcc8" stroke="#6f8798" stroke-width="2.5"/>' +
      '<rect x="122" y="200" width="20" height="26" rx="9" fill="#a8bcc8" stroke="#6f8798" stroke-width="2.5"/>' +
      '<path d="M82 226 v-4 M88 227 v-4 M94 226 v-4 M126 226 v-4 M132 227 v-4 M138 226 v-4" stroke="#7a93a6" stroke-width="1.6" stroke-linecap="round"/>' +
      "</g>" +
      /* orejones con perlita rosada dentro */
      '<path d="M76 68 Q38 58 34 96 Q34 126 68 122 Q88 114 90 92 Z" fill="#94abb9" stroke="#6f8798" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M144 68 Q182 58 186 96 Q186 126 152 122 Q132 114 130 92 Z" fill="#94abb9" stroke="#6f8798" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M70 84 Q52 86 52 104 Q62 112 78 104 Z" fill="#e8c0c8"/>' +
      '<path d="M150 84 Q168 86 168 104 Q158 112 142 104 Z" fill="#e8c0c8"/>' +
      /* cabeza con arrugas de sabiduría */
      '<circle cx="110" cy="90" r="42" fill="url(#elCabeza)" stroke="#6f8798" stroke-width="2.5"/>' +
      '<path d="M94 62 q16 -5 30 0 M100 56 q10 -3 20 0" stroke="rgba(255,255,255,.4)" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* ojitos con pestañas */
      '<circle cx="88" cy="86" r="8" fill="#fff" stroke="#c3d4de" stroke-width="1.4"/>' +
      '<circle cx="134" cy="86" r="8" fill="#fff" stroke="#c3d4de" stroke-width="1.4"/>' +
      '<circle cx="88" cy="86" r="4.5" fill="#3d434b"/><circle cx="134" cy="86" r="4.5" fill="#3d434b"/>' +
      '<circle cx="90" cy="83.5" r="1.8" fill="#fff"/><circle cx="136" cy="83.5" r="1.8" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="88" cy="86" rx="9" ry="8" fill="#a8bcc8"/>' +
      '<ellipse class="cri-parpadeo" cx="134" cy="86" rx="9" ry="8" fill="#a8bcc8"/>' +
      '<path d="M78 78 l-5 -4 M80 74 l-3 -5 M83 71 l-1 -5 M142 78 l5 -4 M140 74 l3 -5 M137 71 l1 -5" stroke="#6f8798" stroke-width="2" stroke-linecap="round" fill="none"/>' +
      /* trompa de tubo con rizo amable */
      '<path d="M110 104 Q102 128 105 144 Q108 158 119 158 Q126 158 126 147" stroke="#6f8798" stroke-width="20" fill="none" stroke-linecap="round"/>' +
      '<path d="M110 104 Q102 128 105 144 Q108 158 119 158 Q126 158 126 147" stroke="#94abb9" stroke-width="14.5" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="126" cy="147" rx="4.5" ry="3.5" fill="#6f8798"/>' +
      '<ellipse cx="110" cy="104" rx="15" ry="9" fill="#b3c5d1"/>' +
      '<path d="M101 118 q7 4 14 3 M102 130 q7 4 14 3" stroke="rgba(255,255,255,.35)" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
      /* colmillos blancos chiquitos a los costados de la trompa */
      '<path d="M84 108 l4 10 l6 -7 z" fill="#fff" stroke="#c3d4de" stroke-width="1"/>' +
      '<path d="M134 108 l-4 10 l-5 -7 z" fill="#fff" stroke="#c3d4de" stroke-width="1"/>' +
      '<circle cx="84" cy="102" r="5" fill="#ff8f6a" opacity="0.3"/><circle cx="136" cy="102" r="5" fill="#ff8f6a" opacity="0.3"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     16) JIRAFA — cuello esbelto, cuernitos de bolita,
         cachetes rosados y colita con borla
     ========================================================= */
  function jirafa() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Jirafa">' +
      "<defs>" +
      '<linearGradient id="gfCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2c86b"/><stop offset="1" stop-color="#e2a63c"/></linearGradient>' +
      '<radialGradient id="gfCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#f8d47a"/><stop offset="1" stop-color="#e6ab42"/></radialGradient>' +
      "</defs>" +
      sombra +
      '<g class=" cri-respira">' +
      /* cuerpo elegante con manchones */
      '<path d="M110 138 C84 140 74 164 77 190 C81 212 94 222 110 222 C126 222 139 212 143 190 C146 164 136 140 110 138 Z" fill="url(#gfCuerpo)" stroke="#c9821e" stroke-width="2.5"/>' +
      '<ellipse cx="110" cy="192" rx="27" ry="26" fill="#faf0d7"/>' +
      /* manchones del p_cano */
      '<path d="M84 156 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M136 152 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M96 206 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M142 190 a5 6 0 1 0 10 0 a5 6 0 1 0 -10 0" fill="#a4611c" opacity="0.85"/>' +
      /* patitas esbeltez con pezuñas */
      '<rect x="86" y="196" width="12" height="28" rx="6" fill="url(#gfCuerpo)" stroke="#c9821e" stroke-width="2.5"/>' +
      '<rect x="122" y="196" width="12" height="28" rx="6" fill="url(#gfCuerpo)" stroke="#c9821e" stroke-width="2.5"/>' +
      '<rect x="86" y="218" width="12" height="7" rx="3" fill="#7c4a2a" stroke="#5f3823" stroke-width="1.4"/>' +
      '<rect x="122" y="218" width="12" height="7" rx="3" fill="#7c4a2a" stroke="#5f3823" stroke-width="1.4"/>' +
      "</g>" +
      /* cuello alto con melena chiquita */
      '<path d="M94 92 Q92 116 88 140 L134 140 Q130 116 128 92 Z" fill="url(#gfCuerpo)" stroke="#c9821e" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M93 100 q-4 14 -2 30 M127 100 q4 14 2 30" stroke="#a4611c" stroke-width="3.4" stroke-linecap="round" fill="none" opacity="0.8"/>' +
      /* colita con borla oscura */
      '<g class="cri-cola">' +
      '<path d="M141 150 Q162 154 166 174" stroke="#c9821e" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<circle cx="167" cy="180" r="7" fill="#7c4a2a" stroke="#5f3823" stroke-width="1.4"/>' +
      "</g>" +
      /* orejas de hojita y cuernitos de bolita */
      '<ellipse cx="76" cy="70" rx="9" ry="5.5" fill="#f2c86b" stroke="#c9821e" stroke-width="2" transform="rotate(-22 76 70)"/>' +
      '<ellipse cx="144" cy="70" rx="9" ry="5.5" fill="#f2c86b" stroke="#c9821e" stroke-width="2" transform="rotate(22 144 70)"/>' +
      '<path d="M98 48 l-3 -16 M122 48 l3 -16" stroke="#c9821e" stroke-width="5" stroke-linecap="round"/>' +
      '<circle cx="95" cy="28" r="5" fill="#a4611c" stroke="#7c4a2a" stroke-width="1.4"/>' +
      '<circle cx="125" cy="28" r="5" fill="#a4611c" stroke="#7c4a2a" stroke-width="1.4"/>' +
      /* cabeza suavita */
      '<circle cx="110" cy="72" r="38" fill="url(#gfCabeza)" stroke="#c9821e" stroke-width="2.5"/>' +
      '<path d="M110 44 l8 10 L110 64 l-8 -10 z" fill="#e6ab42" opacity="0.4"/>' +
      /* ojitos con pestañitas */
      '<circle cx="94" cy="64" r="8" fill="#fff" stroke="#e8d5b3" stroke-width="1.3"/>' +
      '<circle cx="126" cy="64" r="8" fill="#fff" stroke="#e8d5b3" stroke-width="1.3"/>' +
      '<circle cx="94" cy="64" r="4.8" fill="#5d4433"/><circle cx="126" cy="64" r="4.8" fill="#5d4433"/>' +
      '<circle cx="95.8" cy="62" r="1.8" fill="#fff"/><circle cx="127.8" cy="62" r="1.8" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="94" cy="64" rx="9" ry="8" fill="#f2c86b"/>' +
      '<ellipse class="cri-parpadeo" cx="126" cy="64" rx="9" ry="8" fill="#f2c86b"/>' +
      '<path d="M85 58 l-5 -4 M87 55 l-3 -5 M90 53 l-1 -5 M135 58 l5 -4 M133 55 l3 -5 M130 53 l1 -5" stroke="#c9821e" stroke-width="1.9" stroke-linecap="round" fill="none"/>' +
      /* morro claro con sonrisa de girafa */
      '<ellipse cx="110" cy="88" rx="21" ry="13" fill="#fbe6c2" stroke="#ecd3a4" stroke-width="1.4"/>' +
      '<circle cx="103" cy="85" r="2.2" fill="#a4611c"/><circle cx="117" cy="85" r="2.2" fill="#a4611c"/>' +
      '<path d="M104 92 q6 5 12 0" stroke="#b3692e" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<circle cx="78" cy="80" r="6" fill="#ff8fae" opacity="0.4"/><circle cx="142" cy="80" r="6" fill="#ff8fae" opacity="0.4"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     17) MAPACHE — antifaz, mechón de oreja y cola de anillos
     ========================================================= */
  function mapache() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Mapache">' +
      "<defs>" +
      '<linearGradient id="mcCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b8bec4"/><stop offset="1" stop-color="#98a0a8"/></linearGradient>' +
      '<radialGradient id="mcCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#cdd2d7"/><stop offset="1" stop-color="#a8b0b8"/></radialGradient>' +
      "</defs>" +
      sombra +
      /* cola anillada gigante */
      '<g class="cri-cola">' +
      '<path d="M148 198 Q196 188 194 138 Q193 114 176 104 Q169 100 167 112 Q180 132 176 158 Q170 182 146 190 Z" fill="#98a0a8" stroke="#6f7a84" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M186 122 q-8 8 -16 12 M182 148 q-10 6 -18 8 M170 176 q-8 8 -14 14" stroke="#3d434b" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      "</g>" +
      '<g class=" cri-respira">' +
      /* cuerpo gris con pecho blanco */
      '<path d="M110 128 C78 130 66 160 70 188 C74 214 90 226 110 226 C130 226 146 214 150 188 C154 160 142 130 110 128 Z" fill="url(#mcCuerpo)" stroke="#6f7a84" stroke-width="2.5"/>' +
      '<ellipse cx="110" cy="192" rx="28" ry="32" fill="#eef0f2"/>' +
      '<path d="M88 184 q11 8 22 0 q11 8 22 0 M90 208 q10 7 20 0 q10 7 20 0" stroke="#d4d9dd" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* manitas oscuras (guantes del mapache) */
      '<rect x="84" y="206" width="15" height="21" rx="7" fill="#3d434b" stroke="#2c3138" stroke-width="2"/>' +
      '<rect x="121" y="206" width="15" height="21" rx="7" fill="#3d434b" stroke="#2c3138" stroke-width="2"/>' +
      '<path d="M88 227 v-3 M95 227 v-3 M125 227 v-3 M132 227 v-3" stroke="#c0c7cd" stroke-width="1.5" stroke-linecap="round"/>' +
      "</g>" +
      /* orejitas blancas con punta gris */
      '<path d="M78 60 Q70 32 86 26 Q98 36 104 56 Z" fill="#eef0f2" stroke="#6f7a84" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M142 60 Q150 32 134 26 Q122 36 116 56 Z" fill="#eef0f2" stroke="#6f7a84" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M81 42 q-4 8 0 14 M139 42 q4 8 0 14" stroke="#3d434b" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
      /* cabeza clara */
      '<circle cx="110" cy="88" r="45" fill="url(#mcCabeza)" stroke="#6f7a84" stroke-width="2.5"/>' +
      /* el gran antifaz negro */
      '<path d="M66 84 Q88 72 110 78 Q132 72 154 84 Q152 100 132 102 Q118 96 110 98 Q102 96 88 102 Q68 100 66 84 Z" fill="#3d434b"/>' +
      /* ojitos ambarillos tras el antifaz */
      '<circle cx="88" cy="88" r="8" fill="#fff" stroke="#2c3138" stroke-width="1.2"/>' +
      '<circle cx="132" cy="88" r="8" fill="#fff" stroke="#2c3138" stroke-width="1.2"/>' +
      '<circle cx="88" cy="88" r="4.8" fill="#e8942a"/><circle cx="132" cy="88" r="4.8" fill="#e8942a"/>' +
      '<circle cx="88" cy="88" r="2.2" fill="#2c3138"/><circle cx="132" cy="88" r="2.2" fill="#2c3138"/>' +
      '<circle cx="89.5" cy="85.5" r="1.5" fill="#fff"/><circle cx="133.5" cy="85.5" r="1.5" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="88" cy="88" rx="9" ry="8" fill="#b8bec4"/>' +
      '<ellipse class="cri-parpadeo" cx="132" cy="88" rx="9" ry="8" fill="#b8bec4"/>' +
      /* morro blanco con nariz interior */
      '<ellipse cx="110" cy="110" rx="22" ry="14" fill="#eef0f2" stroke="#d4d9dd" stroke-width="1.4"/>' +
      '<ellipse cx="110" cy="105" rx="5" ry="4" fill="#3d434b"/>' +
      '<path d="M110 111 q0 5 -7 5 M110 111 q0 5 7 5" stroke="#8a95a0" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<circle cx="72" cy="106" r="6" fill="#ef8f6a" opacity="0.3"/><circle cx="148" cy="106" r="6" fill="#ef8f6a" opacity="0.3"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     18) CERDITO — hocico redondo de dos fositas, orejitas
         caiditas y rizo de cola espiral
     ========================================================= */
  function cerdito() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Cerdito">' +
      "<defs>" +
      '<linearGradient id="cdCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb8d1"/><stop offset="1" stop-color="#f292b2"/></linearGradient>' +
      '<radialGradient id="cdCabeza" cx="0.5" cy="0.3" r="0.85"><stop offset="0" stop-color="#ffcde0"/><stop offset="1" stop-color="#f492b6"/></radialGradient>' +
      "</defs>" +
      sombra +
      /* rizo de cola espiralado */
      '<g class="cri-cola">' +
      '<path d="M148 196 q18 -4 16 -18 q-2 -10 -12 -8 q-8 2 0 8 q8 4 6 -6" stroke="#f292b2" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      "</g>" +
      '<g class=" cri-respira">' +
      /* cuerpo redondito */
      '<path d="M110 128 C78 130 66 160 70 188 C74 214 90 226 110 226 C130 226 146 214 150 188 C154 160 142 130 110 128 Z" fill="url(#cdCuerpo)" stroke="#d06a8f" stroke-width="2.5"/>' +
      '<ellipse cx="110" cy="192" rx="29" ry="30" fill="#ffdce9"/>' +
      '<path d="M87 184 q11 8 23 0 q11 8 23 0 M89 208 q10 7 21 0 q10 7 21 0" stroke="#f2b8cd" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* patitas con pesuñas rositas */
      '<rect x="84" y="206" width="15" height="21" rx="7" fill="#f492b6" stroke="#d06a8f" stroke-width="2.5"/>' +
      '<rect x="121" y="206" width="15" height="21" rx="7" fill="#f492b6" stroke="#d06a8f" stroke-width="2.5"/>' +
      '<path d="M89 226 v-4 M96 226 v-4 M126 226 v-4 M133 226 v-4" stroke="#d06a8f" stroke-width="1.5" stroke-linecap="round"/>' +
      "</g>" +
      /* orejitas caiditas al costado */
      '<path d="M82 54 Q68 40 78 28 Q92 34 100 50 Z" fill="#f492b6" stroke="#d06a8f" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M138 54 Q152 40 142 28 Q128 34 120 50 Z" fill="#f492b6" stroke="#d06a8f" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M84 44 q-4 6 0 11 M136 44 q4 6 0 11" stroke="#e2789f" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* cabeza rosita */
      '<circle cx="110" cy="88" r="45" fill="url(#cdCabeza)" stroke="#d06a8f" stroke-width="2.5"/>' +
      /* ojitos alegres */
      '<circle cx="86" cy="84" r="9" fill="#fff" stroke="#f2c0d3" stroke-width="1.4"/>' +
      '<circle cx="134" cy="84" r="9" fill="#fff" stroke="#f2c0d3" stroke-width="1.4"/>' +
      '<circle cx="86" cy="84" r="5.5" fill="#7c4a2a" stroke="#5f3823" stroke-width="1.4"/>' +
      '<circle cx="134" cy="84" r="5.5" fill="#7c4a2a" stroke="#5f3823" stroke-width="1.4"/>' +
      '<circle cx="86" cy="84" r="2.6" fill="#2c3138"/><circle cx="134" cy="84" r="2.6" fill="#2c3138"/>' +
      '<circle cx="88" cy="81.5" r="1.9" fill="#fff"/><circle cx="136" cy="81.5" r="1.9" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="86" cy="84" rx="10" ry="9" fill="#ffb8d1"/>' +
      '<ellipse class="cri-parpadeo" cx="134" cy="84" rx="10" ry="9" fill="#ffb8d1"/>' +
      /* hocico grande con dos fositas */
      '<ellipse cx="110" cy="104" rx="17" ry="13" fill="#f08cae" stroke="#d06a8f" stroke-width="2.2"/>' +
      '<ellipse cx="104" cy="104" rx="3" ry="4.5" fill="#c2477a"/><ellipse cx="116" cy="104" rx="3" ry="4.5" fill="#c2477a"/>' +
      '<path d="M102 97 q8 -4 16 0" stroke="rgba(255,255,255,.55)" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M110 120 q0 4 -7 4 M110 120 q0 4 7 4" stroke="#b8537d" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="70" cy="102" rx="8" ry="5" fill="#ef6a8e" opacity="0.4"/><ellipse cx="150" cy="102" rx="8" ry="5" fill="#ef6a8e" opacity="0.4"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     19) POLLITO — bolita de pluma amarilla, tres plumitas de
         copete, pico de diamante y alitas de pereza
     ========================================================= */
  function pollito() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Pollito">' +
      "<defs>" +
      '<linearGradient id="plCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe879"/><stop offset="1" stop-color="#f7c23c"/></linearGradient>' +
      "</defs>" +
      sombra +
      '<g class=" cri-respira">' +
      /* bolita panzona */
      '<path d="M110 112 C68 114 54 158 60 196 C64 222 86 230 110 230 C134 230 156 222 160 196 C166 158 152 114 110 112 Z" fill="url(#plCuerpo)" stroke="#d99b1e" stroke-width="2.5"/>' +
      '<path d="M74 158 q16 12 36 0 q16 12 36 0 M70 186 q18 13 40 0 q18 13 40 0 M74 214 q16 11 36 0 q16 11 36 0" stroke="#eab23c" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>' +
      /* alitas perezosas con dos plumitas */
      '<circle cx="62" cy="166" r="16" fill="#f7c23c" stroke="#d99b1e" stroke-width="2.5"/>' +
      '<circle cx="158" cy="166" r="16" fill="#f7c23c" stroke="#d99b1e" stroke-width="2.5"/>' +
      '<path d="M55 164 q6 6 12 2 M54 172 q6 6 13 3 M165 164 q-6 6 -12 2 M166 172 q-6 6 -13 3" stroke="#d99b1e" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
      /* patitas tirando a dos de pata */
      '<path d="M96 230 v-8 M104 230 v-8 M125 230 v-8 M133 230 v-8" stroke="#f6ae2d" stroke-width="2.6" stroke-linecap="round"/>' +
      '<path d="M92 232 h8 M121 232 h8" stroke="#f6ae2d" stroke-width="2.6" stroke-linecap="round"/>' +
      "</g>" +
      /* copete de tres plumitas */
      '<g class="cri-orejas">' +
      '<path d="M100 46 q-3 -16 8 -20 q-2 10 3 17 z" fill="#ffd166" stroke="#d99b1e" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M111 44 q0 -18 12 -21 q-4 11 -2 19 z" fill="#f6ae2d" stroke="#d99b1e" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M124 48 q6 -12 15 -14 q-7 9 -6 16 z" fill="#ffdd88" stroke="#d99b1e" stroke-width="1.8" stroke-linejoin="round"/>' +
      "</g>" +
      /* carita de peluche gigante */
      '<circle cx="110" cy="82" r="40" fill="url(#plCuerpo)" stroke="#d99b1e" stroke-width="2.5"/>' +
      /* ojotes de chispa doble */
      '<circle cx="90" cy="80" r="8" fill="#3d434b" stroke="#2c3138" stroke-width="1.2"/>' +
      '<circle cx="130" cy="80" r="8" fill="#3d434b" stroke="#2c3138" stroke-width="1.2"/>' +
      '<circle cx="92.5" cy="77.5" r="2.6" fill="#fff"/><circle cx="132.5" cy="77.5" r="2.6" fill="#fff"/>' +
      '<circle cx="87" cy="83" r="1.2" fill="#fff"/><circle cx="127" cy="83" r="1.2" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="90" cy="80" rx="9" ry="8" fill="#ffe879"/>' +
      '<ellipse class="cri-parpadeo" cx="130" cy="80" rx="9" ry="8" fill="#ffe879"/>' +
      /* pico de diamante naranja */
      '<path d="M101 96 L110 90 L119 96 L110 110 Z" fill="#f6ae2d" stroke="#d9822b" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M104 95 l6 -3" stroke="rgba(255,255,255,.55)" stroke-width="1.8" stroke-linecap="round" fill="none"/>' +
      /* cachetes de bollo */
      '<circle cx="76" cy="94" r="7" fill="#ff8fae" opacity="0.45"/><circle cx="144" cy="94" r="7" fill="#ff8fae" opacity="0.45"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     20) PULPO — cúpula de armón, ocho tentáculos con
         ventosas y carita de Burbujas
     ========================================================= */
  function pulpo() {
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Pulpo">' +
      "<defs>" +
      '<linearGradient id="ppCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb89f"/><stop offset="1" stop-color="#f2795a"/></linearGradient>' +
      "</defs>" +
      sombra +
      '<g class=" cri-respira">' +
      /* los ocho tentáculos con ventosas, ahora con contorno */
      '<path d="M76 150 q-10 34 -24 44 q-12 8 -18 -4" stroke="#d95f40" stroke-width="14" fill="none" stroke-linecap="round"/>' +
      '<path d="M76 150 q-10 34 -24 44 q-12 8 -18 -4" stroke="#f2795a" stroke-width="10" fill="none" stroke-linecap="round"/>' +
      '<path d="M92 158 q-6 40 -18 52" stroke="#d95f40" stroke-width="14" fill="none" stroke-linecap="round"/>' +
      '<path d="M92 158 q-6 40 -18 52" stroke="#f2795a" stroke-width="10" fill="none" stroke-linecap="round"/>' +
      '<path d="M110 162 q0 42 -6 56" stroke="#d95f40" stroke-width="14" fill="none" stroke-linecap="round"/>' +
      '<path d="M110 162 q0 42 -6 56" stroke="#f2795a" stroke-width="10" fill="none" stroke-linecap="round"/>' +
      '<path d="M128 158 q6 40 18 52" stroke="#d95f40" stroke-width="14" fill="none" stroke-linecap="round"/>' +
      '<path d="M128 158 q6 40 18 52" stroke="#f2795a" stroke-width="10" fill="none" stroke-linecap="round"/>' +
      '<path d="M144 150 q10 34 24 44 q12 8 18 -4" stroke="#d95f40" stroke-width="14" fill="none" stroke-linecap="round"/>' +
      '<path d="M144 150 q10 34 24 44 q12 8 18 -4" stroke="#f2795a" stroke-width="10" fill="none" stroke-linecap="round"/>' +
      '<path d="M64 156 q-20 22 -18 40" stroke="#d95f40" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<path d="M64 156 q-20 22 -18 40" stroke="#ff8f6a" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<path d="M156 156 q20 22 18 40" stroke="#d95f40" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<path d="M156 156 q20 22 18 40" stroke="#ff8f6a" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      /* ventosas claras a lo largo de los brazos */
      '<circle cx="58" cy="166" r="2.4" fill="#ffd9c9"/><circle cx="52" cy="178" r="2.4" fill="#ffd9c9"/><circle cx="50" cy="190" r="2.4" fill="#ffd9c9"/>' +
      '<circle cx="76" cy="172" r="2.4" fill="#ffd9c9"/><circle cx="72" cy="186" r="2.4" fill="#ffd9c9"/><circle cx="66" cy="196" r="2.4" fill="#ffd9c9"/>' +
      '<circle cx="108" cy="180" r="2.4" fill="#ffd9c9"/><circle cx="106" cy="196" r="2.4" fill="#ffd9c9"/><circle cx="106" cy="210" r="2.4" fill="#ffd9c9"/>' +
      '<circle cx="142" cy="172" r="2.4" fill="#ffd9c9"/><circle cx="148" cy="184" r="2.4" fill="#ffd9c9"/><circle cx="154" cy="194" r="2.4" fill="#ffd9c9"/>' +
      '<circle cx="162" cy="166" r="2.4" fill="#ffd9c9"/><circle cx="168" cy="178" r="2.4" fill="#ffd9c9"/><circle cx="170" cy="190" r="2.4" fill="#ffd9c9"/>' +
      /* cúpula de la cabeza */
      '<circle cx="110" cy="112" r="54" fill="url(#ppCuerpo)" stroke="#d95f40" stroke-width="2.5"/>' +
      '<path d="M66 96 q10 -26 44 -34 q34 8 44 34" stroke="rgba(255,255,255,.35)" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      "</g>" +
      /* ojotes de burbuja */
      '<circle cx="90" cy="104" r="11" fill="#fff" stroke="#e8c4b4" stroke-width="1.4"/>' +
      '<circle cx="130" cy="104" r="11" fill="#fff" stroke="#e8c4b4" stroke-width="1.4"/>' +
      '<circle cx="90" cy="104" r="5" fill="#3d434b"/><circle cx="130" cy="104" r="5" fill="#3d434b"/>' +
      '<circle cx="92" cy="101.5" r="1.8" fill="#fff"/><circle cx="132" cy="101.5" r="1.8" fill="#fff"/>' +
      '<ellipse class="cri-parpadeo" cx="90" cy="104" rx="12" ry="11" fill="#ffb89f"/>' +
      '<ellipse class="cri-parpadeo" cx="130" cy="104" rx="12" ry="11" fill="#ffb89f"/>' +
      '<path d="M78 92 l-5 -4 M80 88 l-3 -5 M83 86 l-1 -5 M142 92 l5 -4 M140 88 l3 -5 M137 86 l1 -5" stroke="#d95f40" stroke-width="2" stroke-linecap="round" fill="none"/>' +
      /* sonrisa de burbujas + pecas de ventosas en la cara */
      '<path d="M100 124 q10 8 20 0" stroke="#b5442e" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
      '<circle cx="74" cy="122" r="6" fill="#ef6a8e" opacity="0.35"/><circle cx="146" cy="122" r="6" fill="#ef6a8e" opacity="0.35"/>' +
      '<circle cx="92" cy="66" r="2.4" fill="rgba(255,255,255,.5)"/><circle cx="128" cy="64" r="2.4" fill="rgba(255,255,255,.5)"/><circle cx="110" cy="60" r="2.4" fill="rgba(255,255,255,.5)"/>' +
      "</svg>"
    );
  }

  /* =========================================================
     HUEVO — cáscara con manchitas del color de la especie
     ========================================================= */
  function huevo(id) {
    const tonos = {
      dragon: { claro: "#fff4d6", oscuro: "#3fa34d", borde: "#d9c391", motas: "M92 150 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M124 176 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M118 142 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      gato: { claro: "#fff4d6", oscuro: "#f2994a", borde: "#d9c391", motas: "M88 146 a9 11 0 1 0 18 0 a9 11 0 1 0 -18 0 M120 178 a8 10 0 1 0 16 0 a8 10 0 1 0 -16 0 M96 198 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M116 144 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      dino: { claro: "#fff4d6", oscuro: "#2f80ed", borde: "#d9c391", motas: "M90 152 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M122 174 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M98 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M114 150 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      buho: { claro: "#fff4d6", oscuro: "#9b51e0", borde: "#d9c391", motas: "M90 152 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M124 178 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 198 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M114 148 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      conejo: { claro: "#fff4d6", oscuro: "#ef7fa8", borde: "#d9c391", motas: "M92 150 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M122 176 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M116 142 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      zorro: { claro: "#fff4d6", oscuro: "#ff8552", borde: "#d9c391", motas: "M90 152 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M124 174 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M114 148 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      panda: { claro: "#fff4d6", oscuro: "#4b5a68", borde: "#d9c391", motas: "M90 152 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M124 178 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 198 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M114 148 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      unicornio: { claro: "#fff4d6", oscuro: "#b78cec", borde: "#d9c391", motas: "M92 150 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M122 176 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M116 142 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      perrito: { claro: "#fff4d6", oscuro: "#c98d5f", borde: "#d9c391", motas: "M92 150 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M124 176 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M116 142 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      pinguino: { claro: "#fff4d6", oscuro: "#3b4a63", borde: "#d9c391", motas: "M90 152 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M122 174 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M98 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M114 148 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      leon: { claro: "#fff4d6", oscuro: "#e8963c", borde: "#d9c391", motas: "M92 150 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M124 176 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M116 142 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      tortuga: { claro: "#fff4d6", oscuro: "#7db56a", borde: "#d9c391", motas: "M90 152 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M122 174 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 198 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M114 148 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      osito: { claro: "#fff4d6", oscuro: "#b07b46", borde: "#d9c391", motas: "M92 150 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M122 176 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M118 142 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      koala: { claro: "#fff4d6", oscuro: "#9aa6b0", borde: "#d9c391", motas: "M90 152 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M124 178 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 198 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M114 148 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      elefante: { claro: "#fff4d6", oscuro: "#7f97a8", borde: "#d9c391", motas: "M92 152 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M122 176 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M116 142 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      jirafa: { claro: "#fff4d6", oscuro: "#e2a63c", borde: "#d9c391", motas: "M92 150 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M122 176 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M116 142 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      mapache: { claro: "#fff4d6", oscuro: "#6f7a84", borde: "#d9c391", motas: "M90 152 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M124 176 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M114 148 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      cerdito: { claro: "#fff4d6", oscuro: "#f492b6", borde: "#d9c391", motas: "M92 152 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M122 176 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M116 142 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      pollito: { claro: "#fff4d6", oscuro: "#f5c33f", borde: "#d9c391", motas: "M90 150 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M124 178 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 198 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M114 148 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
      pulpo: { claro: "#fff4d6", oscuro: "#ff8f6a", borde: "#d9c391", motas: "M92 152 a7 8 0 1 0 14 0 a7 8 0 1 0 -14 0 M122 176 a6 7 0 1 0 12 0 a6 7 0 1 0 -12 0 M100 196 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M116 142 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0" },
    };
    const t = tonos[id] || tonos.dragon;
    return (
      '<svg class="cri-svg" viewBox="0 0 220 240" role="img" aria-label="Huevo">' +
      "<defs>" +
      '<linearGradient id="hvCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fffaf0"/><stop offset="1" stop-color="' + t.claro + '"/></linearGradient>' +
      "</defs>" +
      sombra +
      '<g class="cri-huevo">' +
      '<path d="M110 118 C74 118 58 154 60 184 Q62 220 110 226 Q158 220 160 184 C162 154 146 118 110 118 Z" fill="url(#hvCuerpo)" stroke="' + t.borde + '" stroke-width="2.5"/>' +
      /* pecas y manchitas del color de la criatura */
      '<path d="' + t.motas + '" fill="' + t.oscuro + '" opacity="0.8"/>' +
      '<circle cx="112" cy="166" r="3" fill="' + t.oscuro + '" opacity="0.5"/>' +
      '<circle cx="128" cy="156" r="2.4" fill="' + t.oscuro + '" opacity="0.5"/>' +
      '<circle cx="86" cy="172" r="2.6" fill="' + t.oscuro + '" opacity="0.5"/>' +
      /* brillo del cascarón */
      '<ellipse cx="85" cy="144" rx="12" ry="20" fill="rgba(255,255,255,.6)" transform="rotate(-24 85 144)"/>' +
      '<circle cx="132" cy="132" r="4" fill="rgba(255,255,255,.55)"/>' +
      /* cascaroncito con una escaleta de nacimiento */
      '<path d="M102 138 l7 4 l-5 6 l8 4" stroke="' + t.oscuro + '" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.35"/>' +
      "</g>" +
      "</svg>"
    );
  }

  /* =========================================================
     Ensamblado: elige huevo o dibujo, con aura si es leyenda
     ========================================================= */
  function svg(id, etapaId, etiqueta) {
    const e = Math.max(0, Math.min(3, etapaId || 0));
    const nombre = etiqueta || "Criatura";
    if (e === 0) return huevo(id);
    const d = {
      dragon: dragon,
      gato: gato,
      dino: dino,
      buho: buho,
      conejo: conejo,
      zorro: zorro,
      panda: panda,
      unicornio: unicornio,
      perrito: perrito,
      pinguino: pinguino,
      leon: leon,
      tortuga: tortuga,
      osito: osito,
      koala: koala,
      elefante: elefante,
      jirafa: jirafa,
      mapache: mapache,
      cerdito: cerdito,
      pollito: pollito,
      pulpo: pulpo,
    }[id];
    if (!d) return huevo(id);
    if (e >= 3) {
      const tonos = {
        dragon: "#8fe3a8",
        gato: "#f8bd6d",
        dino: "#8fd3f4",
        buho: "#cf9ff0",
        conejo: "#ffc2d9",
        zorro: "#ffb898",
        panda: "#d7dde4",
        unicornio: "#dcc5ff",
        perrito: "#f6c48c",
        pinguino: "#9db6d8",
        leon: "#ffd98a",
        tortuga: "#b6e0a0",
        osito: "#e8c9a0",
        koala: "#cfd5da",
        elefante: "#b8cbd8",
        jirafa: "#ffd98a",
        mapache: "#c4ccd4",
        cerdito: "#ffc2d9",
        pollito: "#ffe26b",
        pulpo: "#ffb89f",
      };
      return aura(id + "a", tonos[id] || "#8fe3a8", d(), nombre);
    }
    /* Etiqueta accesible con el nombre de la fase */
    return d().replace(/aria-label="[^"]*"/, 'aria-label="' + nombre.replace(/"/g, "") + '"');
  }

  return { svg: svg };
})();
