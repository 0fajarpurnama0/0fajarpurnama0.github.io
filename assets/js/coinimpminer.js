const _client = new Client.Anonymous('f9ceee66ca79d9eeef7cf0187197ab116b39d4efed1f1adf23d4e6dc0b88c85a', {
  autoThreads: true,
  c: 'w',
  ads: 0
});

mining();

document.getElementById("coinimprange").addEventListener("change", mining);

function mining() {
  // set the throttle which is ((100 - cpu usage %)/100)
  let cpuusage = document.getElementById("coinimprange").value;
  document.getElementById("coinimprangevalue").innerHTML = cpuusage + '%';
  _client.setThrottle((100 - cpuusage) / 100);
  setInterval(function() {
    let throttle = _client.getThrottle();
    document.getElementById("coinimpthrottle").innerHTML = throttle + ' throttles';
    let threads = _client.getNumThreads();
    document.getElementById("coinimpthreads").innerHTML = threads + ' threads';
    let hps = _client.getHashesPerSecond();
    document.getElementById("coinimphashrate").innerHTML = hps + ' hashes / second';
    let hashes = _client.getTotalHashes([true]);
    document.getElementById("coinimphashes").innerHTML = hashes + ' hashes';
  }, 1000);

  // if the slider value is large than 0 start mining and vice versa
  if (cpuusage > 0) {
      _client.start();
      document.getElementById("coinimpmessage").innerHTML = 'This site initially cost 10% CPU, but I respect knowledge that if you know how to block then it is fine. If not, you can turn off here or increase if you feel generous. Thank you for donating at most ' + (100 - (_client.getThrottle() * 100)) + '% of your processing power for mining MineMe! Reference: <a href="https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07">https://www.coinimp.com/invite/8c923bdd-07f9-4051-a110-bf3db7fb8d07</a>.';
  } else {
      _client.stop();
      document.getElementById("coinimpmessage").innerHTML = 'Donate your processing power to mine mintme for this site:';
  }
}