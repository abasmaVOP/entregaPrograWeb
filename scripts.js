// Datos de las runas (sin cambios)
const runeData = {
    precision: {
        keystones: [
            { nombre: "Estrategia Ofensiva", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png" },
            { nombre: "Cadencia Letal", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png" },
            { nombre: "Sobre la Marcha", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png" },
            { nombre: "Conquistador", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Precision/Conqueror/Conqueror.png" }
        ],
        slots: [
            [
                { nombre: "Absorber Vida", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Precision/AbsorbLife/AbsorbLife.png" },
                { nombre: "Triunfo", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Precision/Triumph.png" },
                { nombre: "Concentración Profunda", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" },
            ],
            [
                { nombre: "Leyenda: Celeridad", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" },
                { nombre: "Leyenda: Aceleración", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Precision/LegendHaste/LegendHaste.png" },
                { nombre: "Leyenda: Linaje", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
            ],
            [
                { nombre: "Golpe de Gracia", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" },
                { nombre: "Corte", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Precision/CutDown/CutDown.png" },
                { nombre: "La última Batalla", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Sorcery/LastStand/LastStand.png" } 
            ]
        ]
    },
    domination: {
        keystones: [
            { nombre: "Electrocutar", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Domination/Electrocute/Electrocute.png" },
            { nombre: "Cosecha Oscura", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png" },
            { nombre: "LLuvia de Espadas", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png" }
        ],
        slots: [
            [
                { nombre: "Golpe Bajo", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Domination/CheapShot/CheapShot.png" },
                { nombre: "Sabor a Sangre", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }, 
                { nombre: "Impacto Súbito", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
            ],
            [
                { nombre: "Sexto Sentido", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Domination/SixthSense/SixthSense.png" },
                { nombre: "Recuerdos Macabros", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Domination/GrislyMementos/GrislyMementos.png" },
                { nombre: "Centinela Profundo", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Domination/DeepWard/DeepWard.png" }
            ],
            [
                { nombre: "Cazador de Tesoros", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" },
                { nombre: "Cazador Implacable", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" },
                { nombre: "Cazador Definitivo", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
            ]
        ]
    },
    sorcery: {
        keystones: [
            { nombre: "Invocación: Aery", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png" },
            { nombre: "Cometa Arcano", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png" },
            { nombre: "Fase Veloz", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png" }
        ],
        slots: [
            [
                { nombre: "Arcanista Axiomático", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Sorcery/NullifyingOrb/Axiom_Arcanist.png" },
                { nombre: "Anillo de Flujo de Maná", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" },
                { nombre: "Capa del Nimbo", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
            ],
            [
                { nombre: "Trascendencia", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png" },
                { nombre: "Celeridad", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Sorcery/Celerity/CelerityTemp.png" },
                { nombre: "Concentración Absoluta", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
            ],
            [
                { nombre: "Quemadura", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Sorcery/Scorch/Scorch.png" },
                { nombre: "Caminata Sobre Agua", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png" },
                { nombre: "Tormenta Creciente", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
            ]
        ]
    },
    resolve: {
        keystones: [
            { nombre: "Agarre del Perpetuo", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png" },
            { nombre: "Réplica", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png" },
            { nombre: "Guardián", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Resolve/Guardian/Guardian.png" }
        ],
        slots: [
            [
                { nombre: "Demolición", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Resolve/Demolish/Demolish.png" },
                { nombre: "Fuente de Vida", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" },
                { nombre: "Golpe de Escudo", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
            ],
            [
                { nombre: "Acondicionamiento", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Resolve/Conditioning/Conditioning.png" },
                { nombre: "Segundo Aire", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png" },
                { nombre: "Coraza Ósea", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
            ],
            [
                { nombre: "Crecimiento Excesivo", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" },
                { nombre: "Revitalizar", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Resolve/Revitalize/Revitalize.png" },
                { nombre: "Inquebrantable", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
            ]
        ]
    },
    inspiration: {
        keystones: [
            { nombre: "Aumento Glacial", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png" },
            { nombre: "Libro de Hechizos Abierto", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png" },
            { nombre: "Primer Golpe", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png" }
        ],
        slots: [
            [
                { nombre: "Destello Hextech", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" },
                { nombre: "Calzado Mágico", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" },
                { nombre: "Reembolso", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Inspiration/CashBack/CashBack2.png" }
            ],
            [
                { nombre: "Tónico Triple", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Inspiration/PerfectTiming/AlchemistCabinet.png" },
                { nombre: "Tónico de Distorsión Temporal", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png" },
                { nombre: "Entrega de Galletas", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
            ],
            [
                { nombre: "Perspicacia Cósmica", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" },
                { nombre: "Velocidad de Aproximación", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png" }, 
                { nombre: "Comodín", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/small-perk-images/Styles/Inspiration/JackOfAllTrades/JackofAllTrades2.png" }
            ]
        ]
    }
};

// Nuevo: Datos de los stat shards
const statData = {
    slots: [
        [
            { nombre: "Fuerza Adaptativa", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png" },
            { nombre: "Velocidad de Ataque", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/StatMods/StatModsAttackSpeedIcon.png" },
            { nombre: "Aceleración de Habilidad", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/StatMods/StatModsCDRScalingIcon.png" }
        ],
        [
            { nombre: "Fuerza Adaptativa", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png" },
            { nombre: "Velocidad de Movimiento", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/StatMods/StatModsMovementSpeedIcon.png" },
            { nombre: "Vida", img: "https://static.bigbrain.gg/assets/lol/riot_static/14.2.1/img/perk-images/StatMods/StatModsHealthPlusIcon.webp" }
        ],
        [
            { nombre: "Vida Escalable", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/StatMods/StatModsHealthScalingIcon.png" },
            { nombre: "Tenacidad", img: "https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/perk-images/StatMods/StatModsTenacityIcon.png" },
            { nombre: "Vida", img: "https://static.bigbrain.gg/assets/lol/riot_static/14.2.1/img/perk-images/StatMods/StatModsHealthPlusIcon.webp" }
        ]
    ]
};

// Variables iniciales
let rutaPrimariaSelec = 'precision';
let rutaSecundariaSelec = 'domination';
let runasSecundariasSelec = [];
let statShardsSelec = [];
let selectionOrder = 0;
let savedRunes = [];


// Inicialización
cargarRunasPrimarias(rutaPrimariaSelec);
cargarRunasSecundarias(rutaSecundariaSelec);
cargarStatShards();
actualizarOpcionesRutaSecundaria();

// rama primaria
document.querySelectorAll('.rutaPrim img').forEach(img => {
    img.addEventListener('click', () => {
        rutaPrimariaSelec = img.getAttribute('data-path');
        document.querySelectorAll('.rutaPrim img').forEach(i => i.classList.remove('selected'));
        img.classList.add('selected');
        document.querySelector('.rutaPrimSelec').innerHTML = `<img src="${img.src}" alt="${rutaPrimariaSelec}">`;
        document.querySelector('.primClaveSelec').innerHTML = '';
        document.querySelector('.primSlotsSelec').innerHTML = '<img src="" alt=""><img src="" alt=""><img src="" alt="">';
        cargarRunasPrimarias(rutaPrimariaSelec);
        actualizarOpcionesRutaSecundaria();
    });
});

// rama secundaria
document.querySelector('.rutaSec').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        rutaSecundariaSelec = e.target.getAttribute('data-path');
        document.querySelectorAll('.rutaSec img').forEach(i => i.classList.remove('selected'));
        e.target.classList.add('selected');
        document.querySelector('.rutaSecSelec').innerHTML = `<img src="${e.target.src}" alt="${rutaSecundariaSelec}">`;
        document.querySelector('.secSlotsSelec').innerHTML = '<img src="" alt=""><img src="" alt="">';
        runasSecundariasSelec = [];
        selectionOrder = 0;
        cargarRunasSecundarias(rutaSecundariaSelec);
    }
});

// runas primarias
function cargarRunasPrimarias(ruta) {
    // runas clave
    const runaClaveContainer = document.querySelector('.primClave');
    runaClaveContainer.innerHTML = '';
    runeData[ruta].keystones.forEach(runa => {
        const img = document.createElement('img');
        img.src = runa.img;
        img.alt = runa.nombre;
        img.addEventListener('click', () => {
            runaClaveContainer.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
            img.classList.add('selected');
            document.querySelector('.primClaveSelec').innerHTML = `<img src="${runa.img}" alt="${runa.nombre}">`;
        });
        runaClaveContainer.appendChild(img);
    });

    // runas menores
    const minorRows = document.querySelectorAll('.primSlots .slotRow');
    minorRows.forEach((row, rowIndex) => {
        row.innerHTML = '';
        runeData[ruta].slots[rowIndex].forEach(runa => {
            const img = document.createElement('img');
            img.src = runa.img;
            img.alt = runa.nombre;
            img.addEventListener('click', () => {
                row.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
                img.classList.add('selected');
                actualizarRunasMenoresPrimarias();
            });
            row.appendChild(img);
        });
    });
}

// runas secundarias
function cargarRunasSecundarias(ruta) {
    const minorRows = document.querySelectorAll('.secSlots .slotRow');
    minorRows.forEach((row, rowIndex) => {
        row.innerHTML = '';
        runeData[ruta].slots[rowIndex].forEach(runa => {
            const img = document.createElement('img');
            img.src = runa.img;
            img.alt = runa.nombre;
            img.setAttribute('data-row', rowIndex);
            img.addEventListener('click', () => {
                const rowSelected = parseInt(img.getAttribute('data-row'));
                const existingRuneInThisRow = runasSecundariasSelec.find(r => r.row === rowSelected);

                if (existingRuneInThisRow) {
                    runasSecundariasSelec = runasSecundariasSelec.filter(r => r.row !== rowSelected);
                    row.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
                    img.classList.add('selected');
                    runasSecundariasSelec.push({ runa, row: rowSelected, order: selectionOrder++ });
                    actualizarRunasMenoresSecundarias();
                } else if (runasSecundariasSelec.length < 2) {
                    row.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
                    img.classList.add('selected');
                    runasSecundariasSelec.push({ runa, row: rowSelected, order: selectionOrder++ });
                    actualizarRunasMenoresSecundarias();
                } else {
                    const oldestRune = runasSecundariasSelec.reduce((oldest, current) => 
                        oldest.order < current.order ? oldest : current
                    );
                    const oldestRow = document.querySelectorAll('.secSlots .slotRow')[oldestRune.row];
                    oldestRow.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
                    runasSecundariasSelec = runasSecundariasSelec.filter(r => r.order !== oldestRune.order);
                    row.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
                    img.classList.add('selected');
                    runasSecundariasSelec.push({ runa, row: rowSelected, order: selectionOrder++ });
                    actualizarRunasMenoresSecundarias();
                }
            });
            row.appendChild(img);
        });
    });
}

// stat shards
function cargarStatShards() {
    const statRows = document.querySelectorAll('.stats .statsRow');
    statRows.forEach((row, rowIndex) => {
        row.innerHTML = '';
        statData.slots[rowIndex].forEach(stat => {
            const img = document.createElement('img');
            img.src = stat.img;
            img.alt = stat.nombre;
            img.setAttribute('data-row', rowIndex);
            img.addEventListener('click', () => {
                const rowSelected = parseInt(img.getAttribute('data-row'));
                const existingStatInThisRow = statShardsSelec.find(s => s.row === rowSelected);

                if (existingStatInThisRow) {
                    statShardsSelec = statShardsSelec.filter(s => s.row !== rowSelected);
                    row.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
                }
                row.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
                img.classList.add('selected');
                statShardsSelec.push({ stat, row: rowSelected });
                actualizarStatShards();
            });
            row.appendChild(img);
        });
    });
}

// stat shards seleccionados
function actualizarStatShards() {
    const selectedStats = [];
    statShardsSelec.forEach(s => {
        selectedStats.push(`<img src="${s.stat.img}" alt="${s.stat.nombre}">`);
    });
    // cargar imagenes vacias
    while (selectedStats.length < 3) {
        selectedStats.push('<img src="" alt="">');
    }
    document.querySelector('.statsCol').innerHTML = selectedStats.join('');
}

// actualizar rama secundaria
function actualizarOpcionesRutaSecundaria() {
    const secondaryPathSelector = document.querySelector('.rutaSec');
    secondaryPathSelector.innerHTML = '';
    const paths = ['precision', 'domination', 'sorcery', 'resolve', 'inspiration'].filter(path => path !== rutaPrimariaSelec);
    const pathImages = {
        precision: "https://static.bigbrain.gg/assets/lol/runes/8000.png",
        domination: "https://static.bigbrain.gg/assets/lol/runes/8100.png",
        sorcery: "https://static.bigbrain.gg/assets/lol/runes/8200.png",
        inspiration: "https://static.bigbrain.gg/assets/lol/runes/8300.png",
        resolve: "https://static.bigbrain.gg/assets/lol/runes/8400.png"
    };

    paths.forEach(path => {
        const img = document.createElement('img');
        img.src = pathImages[path];
        img.alt = path;
        img.setAttribute('data-path', path);
        if (path === rutaSecundariaSelec) {
            img.classList.add('selected');
        }
        secondaryPathSelector.appendChild(img);
    });

    if (rutaSecundariaSelec === rutaPrimariaSelec) {
        rutaSecundariaSelec = paths[0];
        document.querySelector('.rutaSecSelec').innerHTML = `<img src="${pathImages[rutaSecundariaSelec]}" alt="${rutaSecundariaSelec}">`;
        document.querySelector('.secSlotsSelec').innerHTML = '<img src="" alt=""><img src="" alt="">';
        runasSecundariasSelec = [];
        selectionOrder = 0; // Resetear el orden de selección
        cargarRunasSecundarias(rutaSecundariaSelec);
    }
}

// actualizar las runas menores primarias
function actualizarRunasMenoresPrimarias() {
    const selectedMinors = [];
    document.querySelectorAll('.primSlots .slotRow').forEach(row => {
        const selected = row.querySelector('.selected');
        if (selected) {
            selectedMinors.push(`<img src="${selected.src}" alt="${selected.alt}">`);
        }
    });
    document.querySelector('.primSlotsSelec').innerHTML = selectedMinors.join('');
}

// actualizar las runas menores secundarias
function actualizarRunasMenoresSecundarias() {
    const selectedMinors = runasSecundariasSelec.map(r => `<img src="${r.runa.img}" alt="${r.runa.nombre}">`);
    document.querySelector('.secSlotsSelec').innerHTML = selectedMinors.join('');
}

function actualizarStatShards() {
    const sortedStats = statShardsSelec.slice().sort((a, b) => a.row - b.row);
    const selectedStats = sortedStats.map(s => `<img src="${s.stat.img}" alt="${s.stat.nombre}">`);
    
    while (selectedStats.length < 3) {
        selectedStats.push('<img src="" alt="">');
    }
    
    document.querySelector('.statsCol').innerHTML = selectedStats.join('');
}

const urlParams = new URLSearchParams(window.location.search);
const champion = urlParams.get('champion');
if (champion) {
    document.querySelector('h1 span').textContent = champion;
    document.querySelector('.imgChamp').innerHTML = `<img src="https://static.bigbrain.gg/assets/lol/riot_static/15.10.1/img/champion/${champion}.png" alt="${champion}">`;
}


// Función para verificar si todas las runas están seleccionadas
function checkAllRunesSelected() {
    const keystoneSelected = document.querySelector('.primClaveSelec img[src]');
    const primaryMinorsSelected = document.querySelectorAll('.primSlotsSelec img[src]').length === 3;
    const secondaryPathSelected = document.querySelector('.rutaSecSelec img[src]');
    const secondaryMinorsSelected = document.querySelectorAll('.secSlotsSelec img[src]').length === 2;
    const statsSelected = document.querySelectorAll('.statsCol img[src]').length === 3;

    return keystoneSelected && primaryMinorsSelected && secondaryPathSelected && secondaryMinorsSelected && statsSelected;
}

// Actualizar el estado del botón Guardar
function updateSaveButton() {
    const saveButton = document.getElementById('saveRunes');
    saveButton.disabled = !checkAllRunesSelected();
}

// Función para renderizar las runas guardadas en el DOM
function renderSavedRunes() {
    const savedRunesList = document.getElementById('savedRunesList');
    savedRunesList.innerHTML = '';

    savedRunes.forEach((config, index) => {
        const runeDiv = document.createElement('div');
        runeDiv.className = 'saved-rune';
        runeDiv.innerHTML = `
            <input type="text" value="${config.name}" data-index="${index}">
            <div class="saved-rune-runes">
                <img src="${document.querySelector('.rutaPrimSelec img').src}" alt="${config.primaryPath}">
                <img src="${document.querySelector('.primClaveSelec img').src}" alt="${config.keystone}">
                ${config.primaryMinors.map(src => `<img src="${src}" alt="">`).join('')}
                <img src="${document.querySelector('.rutaSecSelec img').src}" alt="${config.secondaryPath}">
                ${config.secondaryMinors.map(src => `<img src="${src}" alt="">`).join('')}
                ${config.stats.map(src => `<img src="${src}" alt="">`).join('')}
            </div>
            <button onclick="deleteRune(${index})">Eliminar</button>
        `;
        savedRunesList.appendChild(runeDiv);

        // Evento para renombrar
        const input = runeDiv.querySelector('input');
        input.addEventListener('change', () => {
            savedRunes[index].name = input.value;
            renderSavedRunes(); // Re-renderizar para actualizar
        });
    });
}

// Función para guardar las runas
function saveRunes() {
    const champion = urlParams.get('champion') || 'Sin Campeón';
    const keystone = document.querySelector('.primClaveSelec img').src;
    const primaryMinors = Array.from(document.querySelectorAll('.primSlotsSelec img')).map(img => img.src);
    const secondaryPath = document.querySelector('.rutaSecSelec img').src;
    const secondaryMinors = Array.from(document.querySelectorAll('.secSlotsSelec img')).map(img => img.src);
    const stats = Array.from(document.querySelectorAll('.statsCol img')).map(img => img.src);

    const runeConfig = {
        name: `Build para ${champion} #${savedRunes.length + 1}`,
        champion,
        keystone,
        primaryMinors,
        primaryPath: rutaPrimariaSelec,
        secondaryPath: rutaSecundariaSelec,
        secondaryMinors,
        stats
    };

    savedRunes.push(runeConfig);
    renderSavedRunes();
}

function deleteRune(index) {
    savedRunes.splice(index, 1);
    renderSavedRunes();
}

document.querySelectorAll('.rutaPrim img, .primClave img, .primSlots img, .rutaSec img, .secSlots img, .stats img').forEach(img => {
    img.addEventListener('click', updateSaveButton);
});


document.getElementById('saveRunes').addEventListener('click', saveRunes);


updateSaveButton();