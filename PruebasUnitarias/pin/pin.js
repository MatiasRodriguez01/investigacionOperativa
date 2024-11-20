function validar_pin(pin) {
  if (Number.isFinite(pin)) {
    if (pin.toString().length === 6 || pin.toString().length === 4) return true;
    return false
  }
  return false;
}

module.exports = validar_pin;
