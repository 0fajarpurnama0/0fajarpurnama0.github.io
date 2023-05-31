---
layout: post
title: HTML Audio Widget
category: tools
tags: [tools, widget, web, audio, html css js]
featuredimage: https://upload.wikimedia.org/wikipedia/commons/9/9a/HTML5_audio_icon.svg
description: Audio Widget in html, css, and js.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/06/html-audio-widget
---
<h2>Simple</h2>

<audio controls>
  <source src="https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/pavrczohhj/8-01%20Dearly%20Beloved%20-Unchained%20%CF%87%20Version-.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;audio</span> <span style="color: #0000CC">controls</span><span style="color: #007700">&gt;</span>
  <span style="color: #007700">&lt;source</span> <span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/pavrczohhj/8-01%20Dearly%20Beloved%20-Unchained%20%CF%87%20Version-.mp3&quot;</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;audio/mpeg&quot;</span><span style="color: #007700">&gt;</span>
Your browser does not support the audio element.
<span style="color: #007700">&lt;/audio&gt;</span>
</pre></div>

<h2>Simple With Input</h2>

<audio id="audiosimplewithinput" controls>
Your browser does not support the audio element.
</audio>
<p>Insert audio hyperlink here: <input id="audiosimplewithinputtext" type="text" /></p>

<script>
document.getElementById("audiosimplewithinputtext").addEventListener("change", input_audio_hyperlink);
function input_audio_hyperlink() {
  document.getElementById("audiosimplewithinput").src = document.getElementById("audiosimplewithinputtext").value;
}
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;h2&gt;</span>Simple With Input<span style="color: #007700">&lt;/h2&gt;</span>

<span style="color: #007700">&lt;audio</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audiosimplewithinput&quot;</span> <span style="color: #0000CC">controls</span><span style="color: #007700">&gt;</span>
Your browser does not support the audio element.
<span style="color: #007700">&lt;/audio&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Insert audio hyperlink here: <span style="color: #007700">&lt;input</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audiosimplewithinputtext&quot;</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text&quot;</span> <span style="color: #007700">/&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputtext&quot;</span>).addEventListener(<span style="background-color: #fff0f0">&quot;change&quot;</span>, input_audio_hyperlink);
<span style="color: #008800; font-weight: bold">function</span> input_audio_hyperlink() {
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinput&quot;</span>).src <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputtext&quot;</span>).value;
}
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<h2>Simple With Input and Ready State</h2>

<audio id="audiosimplewithinputandreadystate" controls>
Your browser does not support the audio element.
</audio>
<p>Insert audio hyperlink here: <input id="audiosimplewithinputandreadystatetext" type="text" /></p>
<p>Ready State: <span id="audiosimplewithinputandreadystatedebug"></span></p>
<p>Network State: <span id="audiosimplewithinputandnetworkstatedebug"></span></p>

<script>
document.getElementById("audiosimplewithinputandreadystatetext").addEventListener("change", input_audio_hyperlink);
function input_audio_hyperlink() {
  document.getElementById("audiosimplewithinputandreadystate").src = document.getElementById("audiosimplewithinputandreadystatetext").value;
}

setInterval(() => {
  switch (document.getElementById("audiosimplewithinputandreadystate").readyState) {
    case 0:
      document.getElementById("audiosimplewithinputandreadystatedebug").innerHTML = "0: Not Ready";
      break;
    case 1:
      document.getElementById("audiosimplewithinputandreadystatedebug").innerHTML = "1: Meta Data Ready";
      break;
    case 2:
      document.getElementById("audiosimplewithinputandreadystatedebug").innerHTML = "2: Current Data Ready";
      break;
    case 3:
      document.getElementById("audiosimplewithinputandreadystatedebug").innerHTML = "3: Future Data Ready";
      break;
    case 4:
      document.getElementById("audiosimplewithinputandreadystatedebug").innerHTML = "4: Enough Data Ready";
      break;
    default:
      document.getElementById("audiosimplewithinputandreadystatedebug").innerHTML = "Unknown";
      break;
  }
  
  switch (document.getElementById("audiosimplewithinputandreadystate").networkState) {
    case 0:
      document.getElementById("audiosimplewithinputandnetworkstatedebug").innerHTML = "0: Empty";
      break;
    case 1:
      document.getElementById("audiosimplewithinputandnetworkstatedebug").innerHTML = "1: Idle";
      break;
    case 2:
      document.getElementById("audiosimplewithinputandnetworkstatedebug").innerHTML = "2: Loading";
      break;
    case 3:
      document.getElementById("audiosimplewithinputandnetworkstatedebug").innerHTML = "3: No Source";
      break;
    default:
      document.getElementById("audiosimplewithinputandnetworkstatedebug").innerHTML = "Unknown";
      break;
  }
}, 500);
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;h2&gt;</span>Simple With Input and Ready State<span style="color: #007700">&lt;/h2&gt;</span>

<span style="color: #007700">&lt;audio</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystate&quot;</span> <span style="color: #0000CC">controls</span><span style="color: #007700">&gt;</span>
Your browser does not support the audio element.
<span style="color: #007700">&lt;/audio&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Insert audio hyperlink here: <span style="color: #007700">&lt;input</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystatetext&quot;</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text&quot;</span> <span style="color: #007700">/&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Ready State: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystatedebug&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Network State: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audiosimplewithinputandnetworkstatedebug&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystatetext&quot;</span>).addEventListener(<span style="background-color: #fff0f0">&quot;change&quot;</span>, input_audio_hyperlink);
<span style="color: #008800; font-weight: bold">function</span> input_audio_hyperlink() {
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystate&quot;</span>).src <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystatetext&quot;</span>).value;
}

setInterval(() <span style="color: #333333">=&gt;</span> {
  <span style="color: #008800; font-weight: bold">switch</span> (<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystate&quot;</span>).readyState) {
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">0</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystatedebug&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;0: Not Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystatedebug&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;1: Meta Data Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">2</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystatedebug&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;2: Current Data Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">3</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystatedebug&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;3: Future Data Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">4</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystatedebug&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;4: Enough Data Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystatedebug&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Unknown&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
  }
  
  <span style="color: #008800; font-weight: bold">switch</span> (<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandreadystate&quot;</span>).networkState) {
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">0</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandnetworkstatedebug&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;0: Empty&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandnetworkstatedebug&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;1: Idle&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">2</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandnetworkstatedebug&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;2: Loading&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">3</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandnetworkstatedebug&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;3: No Source&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
      <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiosimplewithinputandnetworkstatedebug&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Unknown&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
  }
}, <span style="color: #0000DD; font-weight: bold">500</span>);
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<h2>Audio Playlist Using JavaScript Object</h2>
<audio id="audioplayer" controls>
Your browser does not support the audio element.
</audio>
<p><button id="audioenabler">Enable Audio</button><button id="audioprevious">previous</button><button id="audionext">next</button></p>
<p>Ready State: <span id="audioreadystate"></span></p>
<p>Network State: <span id="audionetworkstate"></span></p>
<p>Name: <span id="audioname"></span></p>
<p>Album: <span id="audioalbum"></span></p>
<p>Reference: <span id="audioreference"></span></p>

<script>
const ost =  [
	  {
      "name": "Master of Masters",
      "album": "KINGDOM HEARTS - III, II.8, Unchained χ & Union χ [Cross]",
      "reference": "<a href='https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-17%2520Master%2520of%2520Masters.mp3?u=2876767'>khinsider</a>",
      "source": "https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/zrzqvycshp/8-17%20Master%20of%20Masters.mp3"
    },
    {
      "name": "Passing the Power",
      "album": "KINGDOM HEARTS - III, II.8, Unchained χ & Union χ [Cross]",
      "reference": "<a href='https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-15%2520Passing%2520the%2520Power.mp3?u=2876767'>khinsider</a>",
      "source": "https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/ctpghkufxn/8-15%20Passing%20the%20Power.mp3"
    },
    {
      "name": "The Foretellers",
      "album": "KINGDOM HEARTS - III, II.8, Unchained χ & Union χ [Cross]",
      "reference": "<a href='https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-16%2520The%2520Foretellers.mp3?u=2876767'>khinsider</a>",
      "source": "https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/xnkoxdltyi/8-16%20The%20Foretellers.mp3"
    },
    {
      "name": "Scala ad Caelum",
      "album": "KINGDOM HEARTS - III, II.8, Unchained χ & Union χ [Cross]",
      "reference": "<a href='https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/6-07%2520Scala%2520ad%2520Caelum.mp3?u=2876767'>khinsider</a>",
      "source": "https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/ueujhnkddi/6-07%20Scala%20ad%20Caelum.mp3"
    },
    {
      "name": "Behave irrationally",
      "album": "Valkyrie Profile -Covenant of the Plume",
      "reference": "<a href='https://downloads.khinsider.com/game-soundtracks/album/valkyrie-profile-covenant-of-the-plume-original-sound-track/1-02%2520Behave%2520irrationally.mp3?u=2876767'>khinsider</a>",
      "source": "https://vgmsite.com/soundtracks/valkyrie-profile-covenant-of-the-plume-original-sound-track/nrlmnoqkyu/1-02%20Behave%20irrationally.mp3"
    },
    {
      "name": "Thin Haze",
      "album": "Valkyrie Profile -Covenant of the Plume",
      "reference": "<a href='https://downloads.khinsider.com/game-soundtracks/album/valkyrie-profile-covenant-of-the-plume-original-sound-track/2-03%2520Thin%2520Haze.mp3?u=2876767'>khinsider</a>",
      "source": "https://vgmsite.com/soundtracks/valkyrie-profile-covenant-of-the-plume-original-sound-track/zvcsfsibjk/2-03%20Thin%20Haze.mp3"
    },
    {
      "name": "Confidence in the domination",
      "album": "Valkyrie Profile -Covenant of the Plume",
      "reference": "<a href='https://downloads.khinsider.com/game-soundtracks/album/valkyrie-profile-covenant-of-the-plume-original-sound-track/1-19%2520Confidence%2520in%2520the%2520domination.mp3?u=2876767'>khinsider</a>",
      "source": "https://vgmsite.com/soundtracks/valkyrie-profile-covenant-of-the-plume-original-sound-track/vknhbqrmge/1-19%20Confidence%20in%20the%20domination.mp3"
    },
    {
      "name": "Dearly Beloved -Unchained χ Version",
      "album": "KINGDOM HEARTS - III, II.8, Unchained χ & Union χ [Cross]",
      "reference": "<a href='https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-01%2520Dearly%2520Beloved%2520-Unchained%2520%25CF%2587%2520Version-.mp3?u=2876767'>khinsider</a>",
      "source": "https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/pavrczohhj/8-01%20Dearly%20Beloved%20-Unchained%20%CF%87%20Version-.mp3"
    }
];

const audio_player = document.getElementById("audioplayer");
const audio_ready_state = document.getElementById("audioreadystate");
const audio_network_state = document.getElementById("audionetworkstate");
const audio_name = document.getElementById("audioname");
const audio_album = document.getElementById("audioalbum");
const audio_reference = document.getElementById("audioreference");
let audio_number = 0;
const audio_enabler = document.getElementById("audioenabler");
audio_enabler.addEventListener("click", audio_enabling);
const audio_next = document.getElementById("audionext");
audio_next.addEventListener("click", audio_nexting);
const audio_previous = document.getElementById("audioprevious");
audio_previous.addEventListener("click", audio_previousing);
audio_player.addEventListener("ended", audio_nexting);

audio_info();

function audio_info() {
  audio_name.innerHTML = ost[audio_number].name;
  audio_album.innerHTML = ost[audio_number].album;
  audio_reference.innerHTML = ost[audio_number].reference;
  audio_player.src = ost[audio_number].source;
}

function audio_enabling() {
  if(audio_player.autoplay){
    audio_player.pause();
    audio_player.autoplay = false;
    audio_enabler.innerHTML = "Enable Audio";
  } else {
    audio_player.play();
    audio_player.autoplay = true;
    audio_enabler.innerHTML = "Disable Audio";
  }
}

function audio_nexting(){
  if(audio_number == ost.length - 1){
    audio_number = 0;
    audio_info();
  } else {
    audio_number++;
    audio_info();
  }
}

function audio_previousing(){
  if(audio_number == 0){
    audio_number = ost.length - 1;
    audio_info();
  } else {
    audio_number--;
    audio_info();
  }
}

setInterval(() => {
  switch (audio_player.readyState) {
    case 0:
      audio_ready_state.innerHTML = "0: Not Ready";
      break;
    case 1:
      audio_ready_state.innerHTML = "1: Meta Data Ready";
      break;
    case 2:
      audio_ready_state.innerHTML = "2: Current Data Ready";
      break;
    case 3:
      audio_ready_state.innerHTML = "3: Future Data Ready";
      break;
    case 4:
      audio_ready_state.innerHTML = "4: Enough Data Ready";
      break;
    default:
      audio_ready_state.innerHTML = "Unknown";
      break;
  }

  switch (audio_player.networkState) {
    case 0:
      audio_network_state.innerHTML = "0: Empty";
      break;
    case 1:
      audio_network_state.innerHTML = "1: Idle";
      break;
    case 2:
      audio_network_state.innerHTML = "2: Loading";
      break;
    case 3:
      audio_network_state.innerHTML = "3: No Source";
      break;
    default:
      audio_network_state.innerHTML = "Unknown";
      break;
  }
}, 500);
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;h2&gt;</span>Audio Playlist Using JavaScript Object<span style="color: #007700">&lt;/h2&gt;</span>
<span style="color: #007700">&lt;audio</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioplayer&quot;</span> <span style="color: #0000CC">controls</span><span style="color: #007700">&gt;</span>
Your browser does not support the audio element.
<span style="color: #007700">&lt;/audio&gt;</span>
<span style="color: #007700">&lt;p&gt;&lt;button</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioenabler&quot;</span><span style="color: #007700">&gt;</span>Enable Audio<span style="color: #007700">&lt;/button&gt;&lt;button</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioprevious&quot;</span><span style="color: #007700">&gt;</span>previous<span style="color: #007700">&lt;/button&gt;&lt;button</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audionext&quot;</span><span style="color: #007700">&gt;</span>next<span style="color: #007700">&lt;/button&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Ready State: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioreadystate&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Network State: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audionetworkstate&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Name: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioname&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Album: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioalbum&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Reference: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioreference&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
<span style="color: #008800; font-weight: bold">const</span> ost <span style="color: #333333">=</span>  [
	  {
      <span style="background-color: #fff0f0">&quot;name&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;Master of Masters&quot;</span>,
      <span style="background-color: #fff0f0">&quot;album&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;KINGDOM HEARTS - III, II.8, Unchained χ &amp; Union χ [Cross]&quot;</span>,
      <span style="background-color: #fff0f0">&quot;reference&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;&lt;a href=&#39;https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-17%2520Master%2520of%2520Masters.mp3?u=2876767&#39;&gt;khinsider&lt;/a&gt;&quot;</span>,
      <span style="background-color: #fff0f0">&quot;source&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/zrzqvycshp/8-17%20Master%20of%20Masters.mp3&quot;</span>
    },
    {
      <span style="background-color: #fff0f0">&quot;name&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;Passing the Power&quot;</span>,
      <span style="background-color: #fff0f0">&quot;album&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;KINGDOM HEARTS - III, II.8, Unchained χ &amp; Union χ [Cross]&quot;</span>,
      <span style="background-color: #fff0f0">&quot;reference&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;&lt;a href=&#39;https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-15%2520Passing%2520the%2520Power.mp3?u=2876767&#39;&gt;khinsider&lt;/a&gt;&quot;</span>,
      <span style="background-color: #fff0f0">&quot;source&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/ctpghkufxn/8-15%20Passing%20the%20Power.mp3&quot;</span>
    },
    {
      <span style="background-color: #fff0f0">&quot;name&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;The Foretellers&quot;</span>,
      <span style="background-color: #fff0f0">&quot;album&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;KINGDOM HEARTS - III, II.8, Unchained χ &amp; Union χ [Cross]&quot;</span>,
      <span style="background-color: #fff0f0">&quot;reference&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;&lt;a href=&#39;https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-16%2520The%2520Foretellers.mp3?u=2876767&#39;&gt;khinsider&lt;/a&gt;&quot;</span>,
      <span style="background-color: #fff0f0">&quot;source&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/xnkoxdltyi/8-16%20The%20Foretellers.mp3&quot;</span>
    },
    {
      <span style="background-color: #fff0f0">&quot;name&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;Scala ad Caelum&quot;</span>,
      <span style="background-color: #fff0f0">&quot;album&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;KINGDOM HEARTS - III, II.8, Unchained χ &amp; Union χ [Cross]&quot;</span>,
      <span style="background-color: #fff0f0">&quot;reference&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;&lt;a href=&#39;https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/6-07%2520Scala%2520ad%2520Caelum.mp3?u=2876767&#39;&gt;khinsider&lt;/a&gt;&quot;</span>,
      <span style="background-color: #fff0f0">&quot;source&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/ueujhnkddi/6-07%20Scala%20ad%20Caelum.mp3&quot;</span>
    },
    {
      <span style="background-color: #fff0f0">&quot;name&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;Behave irrationally&quot;</span>,
      <span style="background-color: #fff0f0">&quot;album&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;Valkyrie Profile -Covenant of the Plume&quot;</span>,
      <span style="background-color: #fff0f0">&quot;reference&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;&lt;a href=&#39;https://downloads.khinsider.com/game-soundtracks/album/valkyrie-profile-covenant-of-the-plume-original-sound-track/1-02%2520Behave%2520irrationally.mp3?u=2876767&#39;&gt;khinsider&lt;/a&gt;&quot;</span>,
      <span style="background-color: #fff0f0">&quot;source&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://vgmsite.com/soundtracks/valkyrie-profile-covenant-of-the-plume-original-sound-track/nrlmnoqkyu/1-02%20Behave%20irrationally.mp3&quot;</span>
    },
    {
      <span style="background-color: #fff0f0">&quot;name&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;Thin Haze&quot;</span>,
      <span style="background-color: #fff0f0">&quot;album&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;Valkyrie Profile -Covenant of the Plume&quot;</span>,
      <span style="background-color: #fff0f0">&quot;reference&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;&lt;a href=&#39;https://downloads.khinsider.com/game-soundtracks/album/valkyrie-profile-covenant-of-the-plume-original-sound-track/2-03%2520Thin%2520Haze.mp3?u=2876767&#39;&gt;khinsider&lt;/a&gt;&quot;</span>,
      <span style="background-color: #fff0f0">&quot;source&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://vgmsite.com/soundtracks/valkyrie-profile-covenant-of-the-plume-original-sound-track/zvcsfsibjk/2-03%20Thin%20Haze.mp3&quot;</span>
    },
    {
      <span style="background-color: #fff0f0">&quot;name&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;Confidence in the domination&quot;</span>,
      <span style="background-color: #fff0f0">&quot;album&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;Valkyrie Profile -Covenant of the Plume&quot;</span>,
      <span style="background-color: #fff0f0">&quot;reference&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;&lt;a href=&#39;https://downloads.khinsider.com/game-soundtracks/album/valkyrie-profile-covenant-of-the-plume-original-sound-track/1-19%2520Confidence%2520in%2520the%2520domination.mp3?u=2876767&#39;&gt;khinsider&lt;/a&gt;&quot;</span>,
      <span style="background-color: #fff0f0">&quot;source&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://vgmsite.com/soundtracks/valkyrie-profile-covenant-of-the-plume-original-sound-track/vknhbqrmge/1-19%20Confidence%20in%20the%20domination.mp3&quot;</span>
    },
    {
      <span style="background-color: #fff0f0">&quot;name&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;Dearly Beloved -Unchained χ Version&quot;</span>,
      <span style="background-color: #fff0f0">&quot;album&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;KINGDOM HEARTS - III, II.8, Unchained χ &amp; Union χ [Cross]&quot;</span>,
      <span style="background-color: #fff0f0">&quot;reference&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;&lt;a href=&#39;https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-01%2520Dearly%2520Beloved%2520-Unchained%2520%25CF%2587%2520Version-.mp3?u=2876767&#39;&gt;khinsider&lt;/a&gt;&quot;</span>,
      <span style="background-color: #fff0f0">&quot;source&quot;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&quot;https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/pavrczohhj/8-01%20Dearly%20Beloved%20-Unchained%20%CF%87%20Version-.mp3&quot;</span>
    }
];

<span style="color: #008800; font-weight: bold">const</span> audio_player <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioplayer&quot;</span>);
<span style="color: #008800; font-weight: bold">const</span> audio_ready_state <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioreadystate&quot;</span>);
<span style="color: #008800; font-weight: bold">const</span> audio_network_state <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audionetworkstate&quot;</span>);
<span style="color: #008800; font-weight: bold">const</span> audio_name <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioname&quot;</span>);
<span style="color: #008800; font-weight: bold">const</span> audio_album <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioalbum&quot;</span>);
<span style="color: #008800; font-weight: bold">const</span> audio_reference <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioreference&quot;</span>);
<span style="color: #008800; font-weight: bold">let</span> audio_number <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>;
<span style="color: #008800; font-weight: bold">const</span> audio_enabler <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioenabler&quot;</span>);
audio_enabler.addEventListener(<span style="background-color: #fff0f0">&quot;click&quot;</span>, audio_enabling);
<span style="color: #008800; font-weight: bold">const</span> audio_next <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audionext&quot;</span>);
audio_next.addEventListener(<span style="background-color: #fff0f0">&quot;click&quot;</span>, audio_nexting);
<span style="color: #008800; font-weight: bold">const</span> audio_previous <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioprevious&quot;</span>);
audio_previous.addEventListener(<span style="background-color: #fff0f0">&quot;click&quot;</span>, audio_previousing);
audio_player.addEventListener(<span style="background-color: #fff0f0">&quot;ended&quot;</span>, audio_nexting);

audio_info();

<span style="color: #008800; font-weight: bold">function</span> audio_info() {
  audio_name.innerHTML <span style="color: #333333">=</span> ost[audio_number].name;
  audio_album.innerHTML <span style="color: #333333">=</span> ost[audio_number].album;
  audio_reference.innerHTML <span style="color: #333333">=</span> ost[audio_number].reference;
  audio_player.src <span style="color: #333333">=</span> ost[audio_number].source;
}

<span style="color: #008800; font-weight: bold">function</span> audio_enabling() {
  <span style="color: #008800; font-weight: bold">if</span>(audio_player.autoplay){
    audio_player.pause();
    audio_player.autoplay <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">false</span>;
    audio_enabler.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Enable Audio&quot;</span>;
  } <span style="color: #008800; font-weight: bold">else</span> {
    audio_player.play();
    audio_player.autoplay <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">true</span>;
    audio_enabler.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Disable Audio&quot;</span>;
  }
}

<span style="color: #008800; font-weight: bold">function</span> audio_nexting(){
  <span style="color: #008800; font-weight: bold">if</span>(audio_number <span style="color: #333333">==</span> ost.length <span style="color: #333333">-</span> <span style="color: #0000DD; font-weight: bold">1</span>){
    audio_number <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>;
    audio_info();
  } <span style="color: #008800; font-weight: bold">else</span> {
    audio_number<span style="color: #333333">++</span>;
    audio_info();
  }
}

<span style="color: #008800; font-weight: bold">function</span> audio_previousing(){
  <span style="color: #008800; font-weight: bold">if</span>(audio_number <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>){
    audio_number <span style="color: #333333">=</span> ost.length <span style="color: #333333">-</span> <span style="color: #0000DD; font-weight: bold">1</span>;
    audio_info();
  } <span style="color: #008800; font-weight: bold">else</span> {
    audio_number<span style="color: #333333">--</span>;
    audio_info();
  }
}

setInterval(() <span style="color: #333333">=&gt;</span> {
  <span style="color: #008800; font-weight: bold">switch</span> (audio_player.readyState) {
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">0</span><span style="color: #333333">:</span>
      audio_ready_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;0: Not Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">:</span>
      audio_ready_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;1: Meta Data Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">2</span><span style="color: #333333">:</span>
      audio_ready_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;2: Current Data Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">3</span><span style="color: #333333">:</span>
      audio_ready_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;3: Future Data Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">4</span><span style="color: #333333">:</span>
      audio_ready_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;4: Enough Data Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
      audio_ready_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Unknown&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
  }

  <span style="color: #008800; font-weight: bold">switch</span> (audio_player.networkState) {
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">0</span><span style="color: #333333">:</span>
      audio_network_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;0: Empty&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">:</span>
      audio_network_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;1: Idle&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">2</span><span style="color: #333333">:</span>
      audio_network_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;2: Loading&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">3</span><span style="color: #333333">:</span>
      audio_network_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;3: No Source&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
      audio_network_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Unknown&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
  }
}, <span style="color: #0000DD; font-weight: bold">500</span>);
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>

<h2>Audio Playlist Using JSON Input File or Link</h2>
<audio id="audioplayer" controls>
Your browser does not support the audio element.
</audio>
<p><input type="file" id="jsonostfileinput" /> or insert json link: <input type="text" id="jsonostlinkinput" /></p>
<p>JSON Ready: <span id="audiojsonready">Not Ready</span></p>
<p><button id="audioenabler">Enable Audio</button><button id="audioprevious">previous</button><button id="audionext">next</button></p>
<p>Ready State: <span id="audioreadystate"></span></p>
<p>Network State: <span id="audionetworkstate"></span></p>
<p>Name: <span id="audioname"></span></p>
<p>Album: <span id="audioalbum"></span></p>
<p>Reference: <span id="audioreference"></span></p>

<script>
const json_ost_file_input = document.getElementById("jsonostfileinput");
const json_ost_link_input = document.getElementById("jsonostlinkinput");
var ost;

json_ost_file_input.addEventListener("change", (event) => {
  document.getElementById("audiojsonready").innerHTML = "Not Ready";
  const selectedFile = event.target.files[0];
  
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const content = JSON.parse(event.target.result);
    ost = content.ost;
    audio_info();
    document.getElementById("audiojsonready").innerHTML = "Ready";
  };
  
  fileReader.readAsText(selectedFile);
});

json_ost_link_input.addEventListener("change", (event) => {
  document.getElementById("audiojsonready").innerHTML = "Not Ready";
  const audiojsonlinkxmlhttp = new XMLHttpRequest();
  audiojsonlinkxmlhttp.onload = function() {
    const content = JSON.parse(this.responseText);
    ost = content.ost;
    audio_info();
    document.getElementById("audiojsonready").innerHTML = "Ready";
  }
  audiojsonlinkxmlhttp.open("GET", json_ost_link_input.value);
  audiojsonlinkxmlhttp.send();
}
/* Below is the format of the json:
{ "ost" :  
    [
        {
          "name": "Master of Masters",
          "album": "KINGDOM HEARTS - III, II.8, Unchained χ & Union χ [Cross]",
          "reference": "<a href='https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-17%2520Master%2520of%2520Masters.mp3?u=2876767'>khinsider</a>",
          "source": "https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/zrzqvycshp/8-17%20Master%20of%20Masters.mp3"
        },
        {
          "name": "Passing the Power",
          "album": "KINGDOM HEARTS - III, II.8, Unchained χ & Union χ [Cross]",
          "reference": "<a href='https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-15%2520Passing%2520the%2520Power.mp3?u=2876767'>khinsider</a>",
          "source": "https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/ctpghkufxn/8-15%20Passing%20the%20Power.mp3"
        },
        {
          "name": "Dearly Beloved -Unchained χ Version",
          "album": "KINGDOM HEARTS - III, II.8, Unchained χ & Union χ [Cross]",
          "reference": "<a href='https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-01%2520Dearly%2520Beloved%2520-Unchained%2520%25CF%2587%2520Version-.mp3?u=2876767'>khinsider</a>",
          "source": "https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/pavrczohhj/8-01%20Dearly%20Beloved%20-Unchained%20%CF%87%20Version-.mp3"
        }
    ]
}
*/

const audio_player = document.getElementById("audioplayer");
const audio_ready_state = document.getElementById("audioreadystate");
const audio_network_state = document.getElementById("audionetworkstate");
const audio_name = document.getElementById("audioname");
const audio_album = document.getElementById("audioalbum");
const audio_reference = document.getElementById("audioreference");
let audio_number = 0;
const audio_enabler = document.getElementById("audioenabler");
audio_enabler.addEventListener("click", audio_enabling);
const audio_next = document.getElementById("audionext");
audio_next.addEventListener("click", audio_nexting);
const audio_previous = document.getElementById("audioprevious");
audio_previous.addEventListener("click", audio_previousing);
audio_player.addEventListener("ended", audio_nexting);

function audio_info() {
  audio_name.innerHTML = ost[audio_number].name;
  audio_album.innerHTML = ost[audio_number].album;
  audio_reference.innerHTML = ost[audio_number].reference;
  audio_player.src = ost[audio_number].source;
}

function audio_enabling() {
  if(audio_player.autoplay){
    audio_player.pause();
    audio_player.autoplay = false;
    audio_enabler.innerHTML = "Enable Audio";
  } else {
    audio_player.play();
    audio_player.autoplay = true;
    audio_enabler.innerHTML = "Disable Audio";
  }
}

function audio_nexting(){
  if(audio_number == ost.length - 1){
    audio_number = 0;
    audio_info();
  } else {
    audio_number++;
    audio_info();
  }
}

function audio_previousing(){
  if(audio_number == 0){
    audio_number = ost.length - 1;
    audio_info();
  } else {
    audio_number--;
    audio_info();
  }
}

setInterval(() => {
  switch (audio_player.readyState) {
    case 0:
      audio_ready_state.innerHTML = "0: Not Ready";
      break;
    case 1:
      audio_ready_state.innerHTML = "1: Meta Data Ready";
      break;
    case 2:
      audio_ready_state.innerHTML = "2: Current Data Ready";
      break;
    case 3:
      audio_ready_state.innerHTML = "3: Future Data Ready";
      break;
    case 4:
      audio_ready_state.innerHTML = "4: Enough Data Ready";
      break;
    default:
      audio_ready_state.innerHTML = "Unknown";
      break;
  }

  switch (audio_player.networkState) {
    case 0:
      audio_network_state.innerHTML = "0: Empty";
      break;
    case 1:
      audio_network_state.innerHTML = "1: Idle";
      break;
    case 2:
      audio_network_state.innerHTML = "2: Loading";
      break;
    case 3:
      audio_network_state.innerHTML = "3: No Source";
      break;
    default:
      audio_network_state.innerHTML = "Unknown";
      break;
  }
}, 500);
</script>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;h2&gt;</span>Audio Playlist Using JSON Input File or Link<span style="color: #007700">&lt;/h2&gt;</span>
<span style="color: #007700">&lt;audio</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioplayer&quot;</span> <span style="color: #0000CC">controls</span><span style="color: #007700">&gt;</span>
Your browser does not support the audio element.
<span style="color: #007700">&lt;/audio&gt;</span>
<span style="color: #007700">&lt;p&gt;&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;file&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;jsonostfileinput&quot;</span> <span style="color: #007700">/&gt;</span> or insert json link: <span style="color: #007700">&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;jsonostlinkinput&quot;</span> <span style="color: #007700">/&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>JSON Ready: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audiojsonready&quot;</span><span style="color: #007700">&gt;</span>Not Ready<span style="color: #007700">&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;&lt;button</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioenabler&quot;</span><span style="color: #007700">&gt;</span>Enable Audio<span style="color: #007700">&lt;/button&gt;&lt;button</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioprevious&quot;</span><span style="color: #007700">&gt;</span>previous<span style="color: #007700">&lt;/button&gt;&lt;button</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audionext&quot;</span><span style="color: #007700">&gt;</span>next<span style="color: #007700">&lt;/button&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Ready State: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioreadystate&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Network State: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audionetworkstate&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Name: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioname&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Album: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioalbum&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Reference: <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;audioreference&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;&lt;/p&gt;</span>

<span style="color: #007700">&lt;script&gt;</span>
<span style="color: #008800; font-weight: bold">const</span> json_ost_file_input <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;jsonostfileinput&quot;</span>);
<span style="color: #008800; font-weight: bold">const</span> json_ost_link_input <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;jsonostlinkinput&quot;</span>);
<span style="color: #008800; font-weight: bold">var</span> ost;

json_ost_file_input.addEventListener(<span style="background-color: #fff0f0">&quot;change&quot;</span>, (event) <span style="color: #333333">=&gt;</span> {
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiojsonready&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Not Ready&quot;</span>;
  <span style="color: #008800; font-weight: bold">const</span> selectedFile <span style="color: #333333">=</span> event.target.files[<span style="color: #0000DD; font-weight: bold">0</span>];
  
  <span style="color: #008800; font-weight: bold">const</span> fileReader <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> FileReader();
  fileReader.onload <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">function</span> (event) {
    <span style="color: #008800; font-weight: bold">const</span> content <span style="color: #333333">=</span> JSON.parse(event.target.result);
    ost <span style="color: #333333">=</span> content.ost;
    audio_info();
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiojsonready&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Ready&quot;</span>;
  };
  
  fileReader.readAsText(selectedFile);
});

json_ost_link_input.addEventListener(<span style="background-color: #fff0f0">&quot;change&quot;</span>, (event) <span style="color: #333333">=&gt;</span> {
  <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiojsonready&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Not Ready&quot;</span>;
  <span style="color: #008800; font-weight: bold">const</span> audiojsonlinkxmlhttp <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> XMLHttpRequest();
  audiojsonlinkxmlhttp.onload <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">function</span>() {
    <span style="color: #008800; font-weight: bold">const</span> content <span style="color: #333333">=</span> JSON.parse(<span style="color: #008800; font-weight: bold">this</span>.responseText);
    ost <span style="color: #333333">=</span> content.ost;
    audio_info();
    <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audiojsonready&quot;</span>).innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Ready&quot;</span>;
  }
  audiojsonlinkxmlhttp.open(<span style="background-color: #fff0f0">&quot;GET&quot;</span>, json_ost_link_input.value);
  audiojsonlinkxmlhttp.send();
}
<span style="color: #888888">/* Below is the format of the json:</span>
<span style="color: #888888">{ &quot;ost&quot; :  </span>
<span style="color: #888888">    [</span>
<span style="color: #888888">        {</span>
<span style="color: #888888">          &quot;name&quot;: &quot;Master of Masters&quot;,</span>
<span style="color: #888888">          &quot;album&quot;: &quot;KINGDOM HEARTS - III, II.8, Unchained χ &amp; Union χ [Cross]&quot;,</span>
<span style="color: #888888">          &quot;reference&quot;: &quot;&lt;a href=&#39;https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-17%2520Master%2520of%2520Masters.mp3?u=2876767&#39;&gt;khinsider&lt;/a&gt;&quot;,</span>
<span style="color: #888888">          &quot;source&quot;: &quot;https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/zrzqvycshp/8-17%20Master%20of%20Masters.mp3&quot;</span>
<span style="color: #888888">        },</span>
<span style="color: #888888">        {</span>
<span style="color: #888888">          &quot;name&quot;: &quot;Passing the Power&quot;,</span>
<span style="color: #888888">          &quot;album&quot;: &quot;KINGDOM HEARTS - III, II.8, Unchained χ &amp; Union χ [Cross]&quot;,</span>
<span style="color: #888888">          &quot;reference&quot;: &quot;&lt;a href=&#39;https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-15%2520Passing%2520the%2520Power.mp3?u=2876767&#39;&gt;khinsider&lt;/a&gt;&quot;,</span>
<span style="color: #888888">          &quot;source&quot;: &quot;https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/ctpghkufxn/8-15%20Passing%20the%20Power.mp3&quot;</span>
<span style="color: #888888">        },</span>
<span style="color: #888888">        {</span>
<span style="color: #888888">          &quot;name&quot;: &quot;Dearly Beloved -Unchained χ Version&quot;,</span>
<span style="color: #888888">          &quot;album&quot;: &quot;KINGDOM HEARTS - III, II.8, Unchained χ &amp; Union χ [Cross]&quot;,</span>
<span style="color: #888888">          &quot;reference&quot;: &quot;&lt;a href=&#39;https://downloads.khinsider.com/game-soundtracks/album/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/8-01%2520Dearly%2520Beloved%2520-Unchained%2520%25CF%2587%2520Version-.mp3?u=2876767&#39;&gt;khinsider&lt;/a&gt;&quot;,</span>
<span style="color: #888888">          &quot;source&quot;: &quot;https://vgmsite.com/soundtracks/kingdom-hearts-iii-ii.8-unchained-union-cross-original-soundtrack/pavrczohhj/8-01%20Dearly%20Beloved%20-Unchained%20%CF%87%20Version-.mp3&quot;</span>
<span style="color: #888888">        }</span>
<span style="color: #888888">    ]</span>
<span style="color: #888888">}</span>
<span style="color: #888888">*/</span>

<span style="color: #008800; font-weight: bold">const</span> audio_player <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioplayer&quot;</span>);
<span style="color: #008800; font-weight: bold">const</span> audio_ready_state <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioreadystate&quot;</span>);
<span style="color: #008800; font-weight: bold">const</span> audio_network_state <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audionetworkstate&quot;</span>);
<span style="color: #008800; font-weight: bold">const</span> audio_name <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioname&quot;</span>);
<span style="color: #008800; font-weight: bold">const</span> audio_album <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioalbum&quot;</span>);
<span style="color: #008800; font-weight: bold">const</span> audio_reference <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioreference&quot;</span>);
<span style="color: #008800; font-weight: bold">let</span> audio_number <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>;
<span style="color: #008800; font-weight: bold">const</span> audio_enabler <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioenabler&quot;</span>);
audio_enabler.addEventListener(<span style="background-color: #fff0f0">&quot;click&quot;</span>, audio_enabling);
<span style="color: #008800; font-weight: bold">const</span> audio_next <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audionext&quot;</span>);
audio_next.addEventListener(<span style="background-color: #fff0f0">&quot;click&quot;</span>, audio_nexting);
<span style="color: #008800; font-weight: bold">const</span> audio_previous <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;audioprevious&quot;</span>);
audio_previous.addEventListener(<span style="background-color: #fff0f0">&quot;click&quot;</span>, audio_previousing);
audio_player.addEventListener(<span style="background-color: #fff0f0">&quot;ended&quot;</span>, audio_nexting);

<span style="color: #008800; font-weight: bold">function</span> audio_info() {
  audio_name.innerHTML <span style="color: #333333">=</span> ost[audio_number].name;
  audio_album.innerHTML <span style="color: #333333">=</span> ost[audio_number].album;
  audio_reference.innerHTML <span style="color: #333333">=</span> ost[audio_number].reference;
  audio_player.src <span style="color: #333333">=</span> ost[audio_number].source;
}

<span style="color: #008800; font-weight: bold">function</span> audio_enabling() {
  <span style="color: #008800; font-weight: bold">if</span>(audio_player.autoplay){
    audio_player.pause();
    audio_player.autoplay <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">false</span>;
    audio_enabler.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Enable Audio&quot;</span>;
  } <span style="color: #008800; font-weight: bold">else</span> {
    audio_player.play();
    audio_player.autoplay <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">true</span>;
    audio_enabler.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Disable Audio&quot;</span>;
  }
}

<span style="color: #008800; font-weight: bold">function</span> audio_nexting(){
  <span style="color: #008800; font-weight: bold">if</span>(audio_number <span style="color: #333333">==</span> ost.length <span style="color: #333333">-</span> <span style="color: #0000DD; font-weight: bold">1</span>){
    audio_number <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>;
    audio_info();
  } <span style="color: #008800; font-weight: bold">else</span> {
    audio_number<span style="color: #333333">++</span>;
    audio_info();
  }
}

<span style="color: #008800; font-weight: bold">function</span> audio_previousing(){
  <span style="color: #008800; font-weight: bold">if</span>(audio_number <span style="color: #333333">==</span> <span style="color: #0000DD; font-weight: bold">0</span>){
    audio_number <span style="color: #333333">=</span> ost.length <span style="color: #333333">-</span> <span style="color: #0000DD; font-weight: bold">1</span>;
    audio_info();
  } <span style="color: #008800; font-weight: bold">else</span> {
    audio_number<span style="color: #333333">--</span>;
    audio_info();
  }
}

setInterval(() <span style="color: #333333">=&gt;</span> {
  <span style="color: #008800; font-weight: bold">switch</span> (audio_player.readyState) {
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">0</span><span style="color: #333333">:</span>
      audio_ready_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;0: Not Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">:</span>
      audio_ready_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;1: Meta Data Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">2</span><span style="color: #333333">:</span>
      audio_ready_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;2: Current Data Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">3</span><span style="color: #333333">:</span>
      audio_ready_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;3: Future Data Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">4</span><span style="color: #333333">:</span>
      audio_ready_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;4: Enough Data Ready&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
      audio_ready_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Unknown&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
  }

  <span style="color: #008800; font-weight: bold">switch</span> (audio_player.networkState) {
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">0</span><span style="color: #333333">:</span>
      audio_network_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;0: Empty&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">:</span>
      audio_network_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;1: Idle&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">2</span><span style="color: #333333">:</span>
      audio_network_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;2: Loading&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">case</span> <span style="color: #0000DD; font-weight: bold">3</span><span style="color: #333333">:</span>
      audio_network_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;3: No Source&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
    <span style="color: #008800; font-weight: bold">default</span><span style="color: #333333">:</span>
      audio_network_state.innerHTML <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;Unknown&quot;</span>;
      <span style="color: #008800; font-weight: bold">break</span>;
  }
}, <span style="color: #0000DD; font-weight: bold">500</span>);
<span style="color: #007700">&lt;/script&gt;</span>
</pre></div>