function sumy(a, b) {
  let summary;
  try {
    summary = parseInt(a) + parseInt(b);
    if (isNaN(summary)) {
      summary = "Error";
    } else {
      summary = summary + " " + typeof (a, b);
    }
  } catch (err) {
    summary = "Error";
  }
  return summary;
}

module.exports = sumy;
