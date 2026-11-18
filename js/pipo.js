/* Dibujo del personaje guía: Pipo (pose estática "happy").
   El personaje sigue llamándose Kiko en todos los mensajes.
   Origen: Mascota.zip (index.html L52-156) con las rotaciones de
   styles.css horneadas como atributos transform (sin clases CSS). */
(function () {
  "use strict";

  window.PIPO = {
    svg: function () {
      return (
        '<svg viewBox="0 0 400 560" role="img" aria-label="Kiko el loro">' +
        '<defs>' +
        '<linearGradient id="pipo-gBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3be0a0"/><stop offset="1" stop-color="#0a8a58"/></linearGradient>' +
        '<radialGradient id="pipo-gBelly" cx=".5" cy=".4" r=".6"><stop offset="0" stop-color="#fff2a0"/><stop offset="1" stop-color="#fff2a0" stop-opacity="0"/></radialGradient>' +
        '<linearGradient id="pipo-gHead" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4be8ac"/><stop offset="1" stop-color="#0f9d66"/></linearGradient>' +
        '<linearGradient id="pipo-gBeak" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd26a"/><stop offset="1" stop-color="#f08a00"/></linearGradient>' +
        '<radialGradient id="pipo-gIris" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#ffe27a"/><stop offset="1" stop-color="#b8650f"/></radialGradient>' +
        '<radialGradient id="pipo-gSph" cx=".35" cy=".28" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".34"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#03281a" stop-opacity=".45"/></radialGradient>' +
        '<radialGradient id="pipo-gSpec"><stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>' +
        '<linearGradient id="pipo-gChest" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffec73"/><stop offset="1" stop-color="#ffb800"/></linearGradient>' +
        '<linearGradient id="pipo-gWp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#15a3b0"/><stop offset="1" stop-color="#075e6b"/></linearGradient>' +
        '<linearGradient id="pipo-gWs" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2cc9c4"/><stop offset="1" stop-color="#0e8a96"/></linearGradient>' +
        '<linearGradient id="pipo-gWc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6ff0dc"/><stop offset="1" stop-color="#19b5b0"/></linearGradient>' +
        /* Ala en tres capas (coverteras, secundarias, primarias) */
        '<g id="pipo-cov"><path d="M140 225 C104 236 90 276 95 320 C120 310 140 282 152 250Z" fill="url(#pipo-gWc)"/>' +
        '<path d="M104 262 q8 10 16 0 M100 288 q8 10 16 0 M116 276 q8 10 16 0 M112 302 q8 10 16 0 M128 258 q8 9 16 0" stroke="#c9fff3" stroke-width="3" fill="none" stroke-linecap="round"/></g>' +
        '<g id="pipo-sec"><path d="M138 242 C90 272 72 332 78 396 C110 376 138 332 152 272Z" fill="url(#pipo-gWs)"/>' +
        '<path d="M78 396 C86 372 96 352 110 338 M92 380 C100 350 118 326 134 304" stroke="#06505c" stroke-width="2" fill="none" opacity=".5"/></g>' +
        '<g id="pipo-prim"><path d="M136 262 C84 308 64 380 72 452 C104 430 136 380 150 300Z" fill="url(#pipo-gWp)"/>' +
        '<path d="M72 452 C80 436 90 424 100 416 C98 432 88 444 72 452Z" fill="#a6fff0"/>' +
        '<path d="M136 262 C84 308 64 380 72 452" stroke="#ffd23f" stroke-width="3" fill="none"/>' +
        '<path d="M84 430 C98 400 118 366 134 322" stroke="#7ff0df" stroke-width="3" fill="none" opacity=".6"/></g>' +
        '</defs>' +
        '<g>' +
        /* COLA: cinco plumas con rotaciones horneadas (origen 200,396) */
        '<path transform="rotate(-30 200 396)" d="M192 396 C176 450 182 510 200 556 C218 510 224 450 208 396Z" fill="#0b7a4b"/>' +
        '<path transform="rotate(30 200 396)" d="M192 396 C176 450 182 510 200 556 C218 510 224 450 208 396Z" fill="#0b7a4b"/>' +
        '<path transform="rotate(-15 200 396)" d="M192 396 C176 450 182 510 200 556 C218 510 224 450 208 396Z" fill="#14b8a6"/>' +
        '<path transform="rotate(15 200 396)" d="M192 396 C176 450 182 510 200 556 C218 510 224 450 208 396Z" fill="#14b8a6"/>' +
        '<path d="M190 396 C170 460 178 520 200 560 C222 520 230 460 210 396Z" fill="#f05a28"/>' +
        /* PATAS */
        '<g><path d="M178 414 V438" stroke="#6b7280" stroke-width="9" stroke-linecap="round"/>' +
        '<path d="M178 438 q-14 2 -18 14 M178 438 q0 10 -1 18 M178 438 q14 2 17 14" stroke="#6b7280" stroke-width="7" stroke-linecap="round" fill="none"/>' +
        '<g fill="#1f2937"><circle cx="160" cy="453" r="3.2"/><circle cx="177" cy="458" r="3.2"/><circle cx="195" cy="453" r="3.2"/></g></g>' +
        '<g><path d="M222 414 V438" stroke="#6b7280" stroke-width="9" stroke-linecap="round"/>' +
        '<path d="M222 438 q-14 2 -17 14 M222 438 q0 10 1 18 M222 438 q14 2 18 14" stroke="#6b7280" stroke-width="7" stroke-linecap="round" fill="none"/>' +
        '<g fill="#1f2937"><circle cx="205" cy="453" r="3.2"/><circle cx="223" cy="458" r="3.2"/><circle cx="240" cy="453" r="3.2"/></g></g>' +
        /* CUERPO con volumen, plumaje y luz */
        '<path d="M200 200 C262 204 290 268 280 340 C272 396 240 428 200 430 C160 428 128 396 120 340 C110 268 138 204 200 200Z" fill="url(#pipo-gBody)"/>' +
        '<path d="M200 236 C236 240 256 290 248 340 C240 388 220 410 200 412 C180 410 160 388 152 340 C144 290 164 240 200 236Z" fill="url(#pipo-gChest)"/>' +
        '<ellipse cx="200" cy="320" rx="62" ry="86" fill="url(#pipo-gBelly)"/>' +
        '<path d="M142 262 q11 10 22 0 q11 10 22 0 q11 10 22 0 q11 10 22 0 M150 288 q11 10 22 0 q11 10 22 0 q11 10 22 0 M158 314 q11 10 22 0 q11 10 22 0 M166 340 q11 10 22 0" stroke="#0b6b43" stroke-width="3" fill="none" stroke-linecap="round" opacity=".55"/>' +
        '<path d="M262 250 C292 300 282 380 238 424 C262 380 270 320 262 250Z" fill="#04412a" opacity=".3"/>' +
        '<path d="M142 250 C124 300 130 360 156 402 C142 352 140 300 150 262Z" fill="#fff" opacity=".22"/>' +
        '<path d="M200 200 C262 204 290 268 280 340 C272 396 240 428 200 430 C160 428 128 396 120 340 C110 268 138 204 200 200Z" fill="url(#pipo-gSph)"/>' +
        '<ellipse cx="160" cy="262" rx="16" ry="40" fill="url(#pipo-gSpec)" transform="rotate(14 160 262)"/>' +
        '<path d="M262 250 C292 300 282 380 238 424" stroke="#5ff2d0" stroke-width="5" fill="none" opacity=".4" stroke-linecap="round"/>' +
        '<ellipse cx="180" cy="412" rx="22" ry="24" fill="#14a868"/><ellipse cx="220" cy="412" rx="22" ry="24" fill="#14a868"/>' +
        /* ALAS: tres capas por <use>; el ala derecha espejada */
        '<g><use href="#pipo-prim"/><use href="#pipo-sec"/><use href="#pipo-cov"/></g>' +
        '<g transform="matrix(-1 0 0 1 400 0)"><g><use href="#pipo-prim"/><use href="#pipo-sec"/><use href="#pipo-cov"/></g></g>' +
        /* CABEZA (sin transform: tilt 0 en happy) */
        '<g>' +
        '<ellipse cx="200" cy="216" rx="62" ry="24" fill="#10a068"/>' +
        /* CRESTA: 5 plumas con rotate(--r 200 88) y scaleY(--l) horneados */
        '<path transform="rotate(-46 200 88) translate(0 88) scale(1 .8) translate(0 -88)" d="M200 90 C188 58 192 26 200 4 C208 26 212 58 200 90Z" fill="#ef3b2d"/>' +
        '<path transform="rotate(-23 200 88)" d="M200 90 C188 58 192 26 200 4 C208 26 212 58 200 90Z" fill="#ff9f1c"/>' +
        '<path transform="translate(0 88) scale(1 1.2) translate(0 -88)" d="M200 90 C188 58 192 26 200 4 C208 26 212 58 200 90Z" fill="#ef3b2d"/>' +
        '<path transform="rotate(23 200 88)" d="M200 90 C188 58 192 26 200 4 C208 26 212 58 200 90Z" fill="#ff9f1c"/>' +
        '<path transform="rotate(46 200 88) translate(0 88) scale(1 .8) translate(0 -88)" d="M200 90 C188 58 192 26 200 4 C208 26 212 58 200 90Z" fill="#ef3b2d"/>' +
        '<circle cx="200" cy="140" r="76" fill="url(#pipo-gHead)"/>' +
        '<circle cx="200" cy="140" r="76" fill="url(#pipo-gSph)"/>' +
        '<path d="M126 132 C126 82 160 62 200 62 C240 62 274 82 274 132 C250 108 150 108 126 132Z" fill="#0f8a5a"/>' +
        '<ellipse cx="172" cy="92" rx="28" ry="12" fill="url(#pipo-gSpec)" transform="rotate(-24 172 92)"/>' +
        '<path d="M150 100 q8 7 16 0 q8 7 16 0 M190 84 q8 7 16 0 q8 7 16 0 M168 90 q8 7 16 0 M232 98 q8 7 16 0" stroke="#064e33" stroke-width="2.5" fill="none" opacity=".45" stroke-linecap="round"/>' +
        /* CARA: máscara clara, líneas, mejillas al 80% (happy) */
        '<ellipse cx="200" cy="162" rx="58" ry="48" fill="#fff9ee" stroke="#e8d9bd" stroke-width="1.5"/>' +
        '<path d="M148 176 q12 8 24 0 M152 187 q10 7 20 0 M228 176 q12 8 24 0 M228 187 q10 7 20 0 M176 200 q24 8 48 0" stroke="#b9a37a" stroke-width="1.6" fill="none" opacity=".7" stroke-linecap="round"/>' +
        '<circle cx="146" cy="180" r="11" fill="#ff7a95" opacity=".8"/><circle cx="254" cy="180" r="11" fill="#ff7a95" opacity=".8"/>' +
        /* OJOS: esclerótica, iris, pupila y reflejos (sin párpados ni clases) */
        '<g><circle cx="172" cy="150" r="24" fill="#fff" stroke="#2a1a12" stroke-width="3.5"/>' +
        '<circle cx="172" cy="150" r="15" fill="url(#pipo-gIris)"/><circle cx="172" cy="150" r="9" fill="#140b05"/><circle cx="177" cy="143" r="5" fill="#fff"/><circle cx="166" cy="156" r="2.5" fill="#fff" opacity=".85"/></g>' +
        '<g><circle cx="228" cy="150" r="24" fill="#fff" stroke="#2a1a12" stroke-width="3.5"/>' +
        '<circle cx="228" cy="150" r="15" fill="url(#pipo-gIris)"/><circle cx="228" cy="150" r="9" fill="#140b05"/><circle cx="233" cy="143" r="5" fill="#fff"/><circle cx="222" cy="156" r="2.5" fill="#fff" opacity=".85"/></g>' +
        /* CEJAS: translateY(-4) horneado de --by:-4px */
        '<path transform="translate(0 -4)" d="M148 120 Q172 108 196 120" stroke="#0a3d28" stroke-width="6" fill="none" stroke-linecap="round"/>' +
        '<path transform="translate(0 -4)" d="M204 120 Q228 108 252 120" stroke="#0a3d28" stroke-width="6" fill="none" stroke-linecap="round"/>' +
        /* PICO: interior, lengua, mandíbula estática y pico superior con gancho */
        '<ellipse cx="200" cy="220" rx="16" ry="10" fill="#6b0f1a"/><ellipse cx="200" cy="224" rx="9" ry="4" fill="#ff7b9c"/>' +
        '<path d="M178 208 Q200 202 222 208 Q218 238 200 242 Q182 238 178 208Z" fill="#e07b00" stroke="#a45600" stroke-width="2"/>' +
        '<path d="M160 166 C160 138 240 138 240 166 C240 192 228 212 212 226 C204 232 196 224 194 210 C174 202 160 188 160 166Z" fill="url(#pipo-gBeak)" stroke="#b45309" stroke-width="2.5"/>' +
        '<path d="M178 150 Q198 136 222 150" stroke="#fff" stroke-opacity=".65" stroke-width="4" fill="none" stroke-linecap="round"/>' +
        '<circle cx="188" cy="162" r="2.6" fill="#a45600"/><circle cx="212" cy="162" r="2.6" fill="#a45600"/>' +
        '</g>' +
        "</g>" +
        "</svg>"
      );
    },
  };
})();
