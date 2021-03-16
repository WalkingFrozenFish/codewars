// Kata 17 - Regex validate PIN code
function validatePIN(pin) {
  let one = /\b\d{4}\b|\b\d{6}\b/;
  let two = /\D/;

  if (one.test(pin)) {
    if (two.test(pin)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}