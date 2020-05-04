function speak(text, callback) {
  var utterThis = new SpeechSynthesisUtterance(text);
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    if (callback) {
      callback();
    }
    return;
  }
  utterThis.onend = function (event) {
    console.log('SpeechSynthesisUtterance.onend');
    if (callback) {
      callback();
    }
  };
  utterThis.onerror = function (event) {
    console.error('SpeechSynthesisUtterance.onerror');
    if (callback) {
      callback();
    }
  };
  utterThis.rate = 0.8;
  synth.speak(utterThis);
}

