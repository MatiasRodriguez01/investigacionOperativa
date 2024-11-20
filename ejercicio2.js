function calcularFrigorias(alto, ancho, profundidad) {
    if (alto <= 0 || ancho <= 0 || profundidad <= 0) {
        return ("Las dimensiones deben ser mayores a cero.");
    }
    const volumen = alto * ancho * profundidad;
    return volumen * 50; // 50 frigorías por m3
}


