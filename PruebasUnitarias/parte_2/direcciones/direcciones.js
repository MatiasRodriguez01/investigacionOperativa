function validarDireccion(direccion) {
    if (!direccion) {
        return false;
    }

    if (typeof direccion.street !== 'string' || !direccion.street) {
        return false;
    }

    if (typeof direccion.number !== 'number' || isNaN(direccion.number)) {
        return false;
    }

    if (direccion.floor_apartment && typeof direccion.floor_apartment !== 'string') {
        return false;
    }

    if (typeof direccion.zip_code !== 'number' || isNaN(direccion.zip_code)) {
        return false;
    }

    if (direccion.town && typeof direccion.town !== 'string') {
        return false;
    }

    if (typeof direccion.city !== 'string' || !direccion.city) {
        return false;
    }

    if (typeof direccion.province !== 'string' || !direccion.province) {
        return false;
    }

    return true;
}

module.exports = validarDireccion;
