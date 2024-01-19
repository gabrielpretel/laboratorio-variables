interface Grupos{
    nombre: string,
    fundacion: number,
    activo: boolean,
    genero: string,
}

const popRock : string = "🎵 Pop Rock";
const rock : string = "🎸 Rock";
const hardRock : string = "🤘 Hard Rock";
const clasica : string = "🎼 Clásica";

const formato : string = "color: green; font-size:18px; font-weight:bold";


const grupoA : Grupos = {
    nombre: "The Beatles",
    fundacion: 1960,
    activo: true,
    genero: popRock,
};

console.log(`Grupo A 
Nombre: ${grupoA.nombre}
Año de fundación: ${grupoA.fundacion}
Activo: ${grupoA.activo}
Género:`
);
console.log(`%c${popRock}`,formato);


const grupoB : Grupos = {
    nombre: "Queen",
    fundacion: 1970,
    activo: false,
    genero: rock,
};

console.log(`Grupo B 
Nombre: ${grupoB.nombre}
Año de fundación: ${grupoB.fundacion}
Activo: ${grupoB.activo}
Género:`
);
console.log(`%c${rock}`,formato);


const grupoC : Grupos = {
    nombre: "AC DC",
    fundacion: 1973,
    activo: true,
    genero: hardRock,
};

console.log(`Grupo C 
Nombre: ${grupoC.nombre}
Año de fundación: ${grupoC.fundacion}
Activo: ${grupoC.activo}
Género:`
);
console.log(`%c${hardRock}`,formato);


const grupoD : Grupos = {
    nombre: "Ludwig van Beethoven",
    fundacion: 1770,
    activo: false,
    genero: clasica,
};

console.log(`Grupo D 
Nombre: ${grupoD.nombre}
Año de fundación: ${grupoD.fundacion}
Activo: ${grupoD.activo}
Género:`
);
console.log(`%c${clasica}`,formato);


const grupoE : Grupos = {
    nombre: "The Rolling Stones",
    fundacion: 1962,
    activo: true,
    genero: rock,
};

console.log(`Grupo E 
Nombre: ${grupoE.nombre}
Año de fundación: ${grupoE.fundacion}
Activo: ${grupoE.activo}
Género:`
);
console.log(`%c${rock}`,formato);