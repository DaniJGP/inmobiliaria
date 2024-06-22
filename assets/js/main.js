// Arrays de propieaades

const propiedades_venta = [
    {
        nombre: 'Casa en la playa',
        src: 'assets/img/casa-playa.jpg',
        descripcion: 'Hermosa casa con vista al mar',
        ubicacion: 'Avenida del Sol 123',
        habitaciones: 3,
        banos: 1,
        costo: '250.000.000',
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Apartamento céntrico',
        src: 'assets/img/mo-mMunIrPfO-Q-unsplash.jpg',
        descripcion: 'Moderno apartamento en el corazón de la ciudad',
        ubicacion: 'Calle Principal 456',
        habitaciones: 2,
        banos: 1,
        costo: '180.000.000',
        smoke: true,
        pets: false,
    },
    {
        nombre: 'Chalet en la montaña',
        src: 'assets/img/david-dvoracek-83zPlx177kk-unsplash.jpg',
        descripcion: 'Refugio acogedor rodeado de naturaleza',
        ubicacion: 'Camino de los Pinos 789',
        habitaciones: 1,
        banos: 1,
        costo: '35.000.000',
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Villa frente al mar',
        src: 'assets/img/deric-MnOFq6BeGFc-unsplash.jpg',
        descripcion: 'Disfruta de la brisa marina en esta lujosa villa con acceso directo a la playa.',
        ubicacion: 'Paseo Marítimo 789',
        habitaciones: 5,
        banos: 3,
        costo: '800.000.000',
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Loft artístico',
        src: 'assets/img/myhq-workspaces-VCoh27vHEh0-unsplash.jpg',
        descripcion: 'Espacio creativo con techos altos',
        ubicacion: 'Calle Creativa 222',
        habitaciones: 0,
        banos: 1,
        costo: '120.000.000',
        smoke: false,
        pets: false,
    },
    {
        nombre: 'Casa colonial',
        src: 'assets/img/y-s-h0x8E4mtLNw-unsplash.jpg',
        descripcion: 'Antigua casa con patio interior',
        ubicacion: 'Plaza Histórica 33',
        habitaciones: 6,
        banos: 1,
        costo: '420.000.000',
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Casa de ensueño junto al lago',
        src: 'assets/img/vincentiu-solomon-7MH4ped6_Mo-unsplash.jpg',
        descripcion: 'Relájate en esta hermosa casa con vista panorámica al lago.',
        ubicacion: 'Avenida del Sol 567',
        habitaciones: 3,
        banos: 1,
        costo: '350.000.000',
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Loft moderno en el corazón de la ciudad',
        src: 'assets/img/huy-nguyen-fQgYAnWVFeo-unsplash.jpg',
        descripcion: 'Espacio minimalista con diseño vanguardista y todas las comodidades.',
        ubicacion: 'Calle Principal 123',
        habitaciones: 1,
        banos: 1,
        costo: '200.000.000',
        smoke: true,
        pets: false,
    },
];

const propiedades_alquiler = [
    {
        nombre: 'Estudio minimalista',
        src: 'assets/img/naomi-hebert-MP0bgaS_d1c-unsplash.jpg',
        descripcion: 'Espacio funcional con diseño moderno',
        ubicacion: 'Avenida Simple 555',
        habitaciones: 1,
        banos: 1,
        costo: '270.000',
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Cabaña junto al lago',
        src: 'assets/img/jon-flobrant-xbkGzekJ-iM-unsplash.jpg',
        descripcion: 'Refugio tranquilo rodeado de bosque',
        ubicacion: 'Lago Sereno 777',
        habitaciones: 2,
        banos: 1,
        costo: '380.000',
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Ático con vistas',
        src: 'assets/img/andrea-davis-IWfe63thJxk-unsplash.jpg',
        descripcion: 'Piso alto con panorámicas impresionantes',
        ubicacion: 'Calle Vista 888',
        habitaciones: 3,
        banos: 1,
        costo: '420.000',
        smoke: true,
        pets: false,
    },
    {
        nombre: 'Habitación en casa familiar',
        src: 'assets/img/sanju-pandita-M2bXLb4KH38-unsplash.jpg',
        descripcion: 'Ambiente acogedor en casa compartida',
        ubicacion: 'Calle Familiar 999',
        habitaciones: 3,
        banos: 2,
        costo: '100.000',
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Dúplex elegante',
        src: 'assets/img/ferdinand-asakome-7W6O8y7U30s-unsplash.jpg',
        descripcion: 'Dos plantas con acabados de lujo',
        ubicacion: 'Avenida Elegancia 111',
        habitaciones: 4,
        banos: 3,
        costo: '550.000',
        smoke: true,
        pets: false,
    },
    {
        nombre: 'Ático con vistas panorámicas',
        src: 'assets/img/shawnanggg-yyKsGgQXukY-unsplash.jpg',
        descripcion: 'Contempla la ciudad desde las alturas en este ático elegante.',
        ubicacion: 'Calle Alta 789',
        habitaciones: 3,
        banos: 1,
        costo: '380.000',
        smoke: false,
        pets: false,
    },
    {
        nombre: 'Estudio frente al parque',
        src: 'assets/img/andrea-davis-NngNVT74o6s-unsplash.jpg',
        descripcion: 'Inspírate rodeado de naturaleza en este estudio con grandes ventanales.',
        ubicacion: 'Avenida del Parque 123',
        habitaciones: 1,
        banos: 1,
        costo: '280.000',
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Piso luminoso con terraza',
        src: 'assets/img/garrett-parker-xQWLtlQb7L0-unsplash.jpg',
        descripcion: 'Disfruta del sol y las vistas desde la amplia terraza de este piso moderno.',
        ubicacion: 'Calle del Sol 234',
        habitaciones: 2,
        banos: 2,
        costo: '320.000',
        smoke: true,
        pets: false,
    },
    {
        nombre: 'Casa familiar en zona residencial tranquila',
        src: 'assets/img/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
        descripcion: 'Perfecta para familias, con jardín y espacio de juegos para niños.',
        ubicacion: 'Calle de los Rosales 18',
        habitaciones: 4,
        banos: 3,
        costo: '500.000',
        smoke: true,
        pets: true,
    },
];

// Interactividad del navbar

const navbarLinks = document.querySelector('.nav-links');
const navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('mousedown', () => {
    navbarLinks.classList.toggle('open');
});

// Funciones

function fillProps(propArray, container, max = null) {
    let newHTML = '';
    if (max === null || max > propArray.length) {
        max = propArray.length;
    }
    for (let i = 0; i < max; i++) {
        newHTML += `
        <article class="card">
          <img src="${propArray[i].src}" alt="imagen de la propiedad" class="card-img">
          <div class="card-body">
            <h3 class="card-title">${propArray[i].nombre}</h3>
            <p class="card-desc">${propArray[i].descripcion}</p>
            <div class="card-extra">
              <p>${propArray[i].ubicacion}</p>
              <p>${propArray[i].habitaciones} Habitaciones | ${propArray[i].banos} Baños</p>
              <p class="price">$ ${propArray[i].costo}</p>
              ${propArray[i].smoke ? '<p class="ok"> Se permite fumar</p>' : '<p class="notok">No se permite fumar</p>'}
              ${
                  propArray[i].pets
                      ? '<p class="ok">Se permiten mascotas</p>'
                      : '<p class="notok">No se permiten mascotas</p>'
              }
            </div>
          </div>
        </article>
        `;
    }
    container.innerHTML = newHTML;
}
