const BASE_URL = "https://www.enmcine.uk";

async function search(query, type) {
    const res = await fetch(`${BASE_URL}/?s=${encodeURIComponent(query)}`);
    const html = await res.text();
    // Aquí va el código para parsear la web y sacar titulos, links, poster
    // Necesito ver la estructura de enmcine.uk para hacerlo exacto
    return [];
}

async function getStream(id) {
    const res = await fetch(`${BASE_URL}/?p=${id}`);
    const html = await res.text();
    // Aquí sacamos los links de reproducción de la ficha
    return [];
}

module.exports = { search, getStream };