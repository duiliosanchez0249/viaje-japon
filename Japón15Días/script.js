
const fmt = n => '$' + Math.round(n).toLocaleString('es-MX');

const img = (k, i) => k.includes('/')
    ? k
    : `https://loremflickr.com/1000/750/${k}?lock=${i}`;

const WA = '52XXXXXXXXXX'; // Cambia por tu WhatsApp: 52 + 10 dígitos

const plans = [
    {
        cls: 'low',
        badge: 'Clase baja',
        name: 'Mochilero inteligente',
        route: 'Tokio 5 · Kioto 4 · Osaka 5 noches',
        photos: [
            ['tokyo,shibuya', 'Cruce de Shibuya, Tokio'],
            ['kyoto,fushimiinari', 'Fushimi Inari, Kioto'],
            ['osaka,dotonbori', 'Dotonbori, Osaka'],
            ['ramen,japan', 'Ramen por menos de $200'],
            ['kyoto,autumn', 'Kioto en otoño'],
            ['japan,streetfood', 'Comida callejera']
        ],
        items: [
            ['Vuelo', 30000, '#5E8A4A'],
            ['Hospedaje', 8400, '#8FB57A'],
            ['Comida', 4300, '#B8D3A5'],
            ['Transporte', 4000, '#E0A93B'],
            ['Actividades', 3500, '#D8452E'],
            ['Extras', 2500, '#9AA5B8']
        ],
        tabs: {
            'Vuelo': [
                '<b>Ida real:</b> American GDL→HND, 1 escala, 21 h 25 m: $16,053',
                'Regreso estimado desde Osaka (±$14,000) con 1 escala',
                'Referencia Google Vuelos: Osaka redondo desde $28,111',
                'Salida 1 nov, regreso 15 nov: 14 noches'
            ],
            'Hoteles': [
                'Hostales o Airbnb sencillo en habitación privada o compartida',
                'Ryokan económico solo como lujo de una noche (desde $865 por persona)',
                'Alrededor de $600 por noche'
            ],
            'Comidas': [
                'Presupuesto de ¥2,000–3,000 al día ($216–324)',
                'Konbini, ramen, gyudon y curry de $120 a $200',
                'Mercados Nishiki (Kioto) y Kuromon (Osaka) para picar'
            ],
            'Actividades': [
                'Senso-ji, Fushimi Inari y Kinkaku-ji',
                'Shibuya, Dotonbori y parques con hojas rojas, casi gratis',
                'Castillo de Osaka (por fuera) y Nara con venados'
            ],
            'Transporte': [
                'Tarjeta IC (Suica): ¥500–1,500 al día',
                'Shinkansen Tokio–Kioto: ¥13,000–14,500 (≈ $1,404–1,566)',
                'Sin JR Pass: ya no compensa en rutas cortas'
            ]
        }
    },

    {
        cls: 'mid',
        badge: 'Clase media',
        name: 'Equilibrio perfecto',
        route: 'Tokio 5 · Hakone 1 · Kioto 4 · Osaka 4 noches',
        photos: [
            ['hakone,onsen', 'Onsen en Hakone'],
            ['kyoto,arashiyama', 'Bosque de bambú, Arashiyama'],
            ['nara,deer', 'Venados de Nara'],
            ['tokyo,senso-ji', 'Senso-ji, Asakusa'],
            ['shinkansen,train', 'Viaje en Shinkansen'],
            ['sushi,japan', 'Sushi de banda']
        ],
        items: [
            ['Vuelo', 32100, '#C4506F'],
            ['Hospedaje', 26600, '#E58AA3'],
            ['Comida', 9700, '#F4C2CF'],
            ['Transporte', 11100, '#E0A93B'],
            ['Actividades', 8000, '#7FA66B'],
            ['Extras', 4000, '#9AA5B8']
        ],
        tabs: {
            'Vuelo': [
                '<b>Real:</b> American GDL→HND o United GDL→NRT, 1 escala',
                'United es la más rápida: 18 h 45 m (05:45 → 15:30 +1)',
                'Ida desde $16,053; redondo ≈ $32,100',
                'Con Aeroméxico o ANA directo desde CDMX ahorras horas'
            ],
            'Hoteles': [
                'Hoteles de negocios 4★ como Dai-ichi Hotel Tokyo (cerca de Ginza), Agora Kyoto Karasuma y Moxy Osaka Umeda',
                '1 noche en ryokan en Hakone con onsen',
                'Alrededor de $1,900 por noche'
            ],
            'Comidas': [
                'Presupuesto de ¥4,000–8,000 al día ($432–864)',
                'Sushi de banda, tempura y yakitori',
                'Una cena kaiseki en el ryokan'
            ],
            'Actividades': [
                'Tokio: Senso-ji, Nakamise, Skytree, Ueno y Akihabara',
                'Hakone: Lago Ashi, Owakudani y vistas del Fuji',
                'Kioto: Kinkaku-ji, Ryoan-ji, Arashiyama y Tenryu-ji',
                'Nara: Todai-ji y Kasuga Taisha; Osaka: castillo y Dotonbori'
            ],
            'Transporte': [
                'JR Pass 14 días 2ª clase: ¥80,000 (≈ $8,640)',
                'Tarjeta IC para metro y autobuses',
                'Asientos reservados en Shinkansen'
            ]
        }
    },

    {
        cls: 'high',
        badge: 'Clase alta',
        name: 'Lujo sin límites',
        route: 'Tokio 5 · Hakone 2 · Kioto 5 · Osaka 2 noches',
        photos: [
            ['mountfuji,japan', 'Monte Fuji'],
            ['ryokan,japan', 'Ryokan de lujo con onsen'],
            ['kaiseki,japan', 'Cena kaiseki'],
            ['ginza,tokyo,night', 'Ginza de noche'],
            ['japanese,teaceremony', 'Ceremonia del té privada'],
            ['kyoto,momiji', 'Momiji en Kioto']
        ],
        items: [
            ['Vuelo', 110000, '#C9A24B'],
            ['Hospedaje', 119000, '#E6C879'],
            ['Comida', 52500, '#F3E9D0'],
            ['Transporte', 26000, '#B07AA1'],
            ['Actividades', 30000, '#7FA66B'],
            ['Extras', 20000, '#9AA5B8']
        ],
        tabs: {
            'Vuelo': [
                'Clase ejecutiva con ANA o Aeroméxico desde CDMX (estimado)',
                'Salas VIP y traslado privado al hotel',
                'Noviembre: temporada alta por las hojas rojas, compra con tiempo'
            ],
            'Hoteles': [
                'Park Hyatt, Ritz-Carlton o Six Senses Kyoto',
                'Ryokan de lujo con onsen privado: de $6,480 a $16,200 por persona',
                'Alrededor de $8,500 por noche'
            ],
            'Comidas': [
                'Más de ¥10,000 por comida ($1,080 o más)',
                'Sushi omakase, wagyu en Kobe y kaiseki en Kioto',
                'Tokio tiene 160 restaurantes con estrella Michelin'
            ],
            'Actividades': [
                'Ceremonia del té privada y guía personal',
                'Taller de katanas y clase de cocina',
                'Helicóptero sobre el Fuji y teatro Kabuki'
            ],
            'Transporte': [
                'JR Pass Green (1ª clase) 14 días: ¥110,000 (≈ $11,880)',
                'Chofer privado y taxis sin límite'
            ]
        }
    }
];

// Calcular el presupuesto total de cada plan
plans.forEach(p => {
    p.total = p.items.reduce((s, i) => s + i[1], 0);
});

// Si una fotografía no carga, se elimina y queda el fondo
function fb(e) {
    e.target.remove();
}

// Crear las tarjetas de presupuestos
document.getElementById('grid').innerHTML = plans.map((p, n) => `
    <article class="card ${p.cls}"
        tabindex="0"
        role="button"
        data-n="${n}"
        aria-label="Abrir ${p.badge}">

        <div class="ph">
            <img src="${img(p.photos[0][0], n + 10)}"
                alt="${p.photos[0][1]}"
                onerror="fb(event)">
        </div>

        <div class="in">
            <span class="badge">${p.badge}</span>
            <h3>${p.name}</h3>
            <div class="route">${p.route}</div>

            <div class="price">
                ${fmt(p.total)} <small>MXN</small>
            </div>

            <span class="more">
                Ver fotos y detalle <span>›</span>
            </span>
        </div>
    </article>
`).join('');

// Variables del modal
const dlg = document.getElementById('dlg');
let cur = 0;
let P = null;
let tm;

// Mostrar una fotografía de la galería
function show(i) {
    cur = (i + P.photos.length) % P.photos.length;

    const [k, c] = P.photos[cur];

    dlg.querySelector('.stage').innerHTML = `
        <img src="${img(k, cur + 1)}"
            alt="${c}"
            onerror="fb(event)">

        <div class="cap">${c}</div>

        <button class="nav prev" aria-label="Anterior">‹</button>
        <button class="nav next" aria-label="Siguiente">›</button>
    `;

    dlg.querySelectorAll('.thumbs button').forEach((b, j) => {
        b.classList.toggle('on', j === cur);
    });
}

// Animar el contador del presupuesto
function count(el, to) {
    const t0 = performance.now();

    (function f(t) {
        const r = Math.min((t - t0) / 1100, 1);

        el.firstChild.textContent =
            fmt(to * (1 - Math.pow(1 - r, 3))) + ' ';

        if (r < 1) {
            requestAnimationFrame(f);
        }
    })(t0);
}

// Abrir el modal con la información del plan
function open(n) {
    P = plans[n];
    dlg.className = P.cls;

    const names = Object.keys(P.tabs);

    dlg.innerHTML = `
        <button class="x" aria-label="Cerrar">×</button>

        <div class="mg">
            <div>
                <div class="stage"></div>

                <div class="thumbs">
                    ${P.photos.map((ph, j) => `
                        <button aria-label="${ph[1]}">
                            <img src="${img(ph[0], j + 1)}"
                                alt=""
                                loading="lazy"
                                onerror="fb(event)">
                        </button>
                    `).join('')}
                </div>
            </div>

            <div class="dt">
                <span class="badge"
                    style="background:var(--c);color:var(--ai);padding:.25rem .9rem;border-radius:99px;font-weight:700;font-size:.85rem">
                    ${P.badge}
                </span>

                <h2>${P.name}</h2>
                <div class="route">${P.route}</div>

                <div class="price">
                    <span>0</span>
                    <small>MXN por persona</small>
                </div>

                <div class="bars">
                    ${P.items.map((i, x) => `
                        <i style="width:${i[1] / P.total * 100}%;background:${i[2]};animation-delay:${x * .08}s"></i>
                    `).join('')}
                </div>

                <div class="legend">
                    ${P.items.map(i => `
                        <span>
                            <em style="background:${i[2]}"></em>
                            ${i[0]}
                            <b>${fmt(i[1])}</b>
                        </span>
                    `).join('')}
                </div>

                <div class="tabs">
                    ${names.map((t, x) => `
                        <button class="${x ? '' : 'on'}">${t}</button>
                    `).join('')}
                </div>

                <div class="panel">
                    <ul>
                        ${P.tabs[names[0]].map(x => `<li>${x}</li>`).join('')}
                    </ul>
                </div>

                <a class="btn cta"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/${WA}?text=${encodeURIComponent('Hola, me interesa el plan ' + P.badge + ' a Japón')}">
                    Quiero este plan por WhatsApp
                </a>
            </div>
        </div>
    `;

    dlg.showModal();

    show(0);
    count(dlg.querySelector('.price span'), P.total);

    clearInterval(tm);

    tm = setInterval(() => {
        if (dlg.open && !document.fullscreenElement) {
            show(cur + 1);
        }
    }, 5000);
}

// Abrir las tarjetas con clic, Enter o espacio
document.querySelectorAll('.card').forEach(c => {
    c.onclick = () => open(c.dataset.n);

    c.onkeydown = e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open(c.dataset.n);
        }
    };
});

// Eventos del modal
dlg.addEventListener('click', e => {
    const t = e.target;

    if (t === dlg || t.closest('.x')) {
        return dlg.close();
    }

    if (t.closest('.prev')) {
        return show(cur - 1);
    }

    if (t.closest('.next')) {
        return show(cur + 1);
    }

    const th = t.closest('.thumbs button');

    if (th) {
        return show([...th.parentNode.children].indexOf(th));
    }

    if (t.closest('.stage')) {
        const s = dlg.querySelector('.stage');

        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (s.requestFullscreen) {
            s.requestFullscreen();
        }

        return;
    }

    const tb = t.closest('.tabs button');

    if (tb) {
        dlg.querySelectorAll('.tabs button').forEach(b => {
            b.classList.toggle('on', b === tb);
        });

        dlg.querySelector('.panel').innerHTML = `
            <ul>
                ${P.tabs[tb.textContent].map(x => `<li>${x}</li>`).join('')}
            </ul>
        `;
    }
});

// Navegar por la galería con las flechas del teclado
dlg.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') show(cur + 1);
    if (e.key === 'ArrowLeft') show(cur - 1);
});

// Detener el cambio automático al cerrar el modal
dlg.addEventListener('close', () => {
    clearInterval(tm);
});

// Hojas cayendo en el encabezado
const cols = ['#D8452E', '#E58A3B', '#C9A24B', '#F4C2CF'];

for (let i = 0; i < 16; i++) {
    const l = document.createElement('i');

    l.className = 'leaf';

    l.style.cssText = `
        left:${Math.random() * 100}%;
        background:${cols[i % 4]};
        animation-duration:${9 + Math.random() * 9}s;
        animation-delay:${-Math.random() * 14}s
    `;

    document.querySelector('.hero').appendChild(l);
}

// Mostrar elementos conforme aparecen al desplazarse
const io = new IntersectionObserver(es => {
    es.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
        }
    });
}, {
    threshold: .2
});

document.querySelectorAll('.rv').forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * .12 + 's';
    io.observe(el);
});

// Efecto 3D en los boletos
document.querySelectorAll('.ticket').forEach(t => {
    t.addEventListener('mousemove', e => {
        const r = t.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;

        t.style.transform = `
            perspective(700px)
            rotateY(${x * 14}deg)
            rotateX(${-y * 14}deg)
            scale(1.05)
        `;
    });

    t.addEventListener('mouseleave', () => {
        t.style.transform = '';
    });
});


