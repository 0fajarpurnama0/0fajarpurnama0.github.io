---
layout: post
title: Ask Anything with Expert Chat Open AI GPT Widget
category: tools
tags: [tools, widget, web, artificial intelligence, chatgpt]
featuredimage: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/OpenAI_Logo_%282%29.svg/2560px-OpenAI_Logo_%282%29.svg.png
description: A widget for chat open ai gpt only in html, css, and javascript for any website.
canonicalurl: https://0fajarpurnama0.github.io/tools/2022/12/01/chat-open-ai-gpt-widget
---
<p>Source: <a href="https://chat.openai.com/">https://chat.openai.com/</a></p>
<p>API Key:<input type="text" id="openaiapikey" value="input your api key here"></p>
<p>API url:<input type="text" id="openaiapiurl" value="https://api.openai.com/v1/completions"></p>
<p>Ask Open AI ChatGPT</p>
<textarea id="userinput" name="userinput" rows="4" cols="50"></textarea>
<button onclick="senduserinput()">Send</button>
<div id="aichatresponse"></div>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">&lt;!DOCTYPE html&gt;</span>
<span style="color: #007700">&lt;html&gt;</span>
<span style="color: #007700">&lt;head&gt;</span>
  <span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
  <span style="color: #007700">&lt;script </span><span style="color: #0000CC">src=</span><span style="background-color: #fff0f0">&quot;https://cdn.jsdelivr.net/npm/openai&quot;</span><span style="color: #007700">&gt;&lt;/script&gt;</span>
<span style="color: #007700">&lt;/head&gt;</span>
<span style="color: #007700">&lt;body&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Source: <span style="color: #007700">&lt;a</span> <span style="color: #0000CC">href=</span><span style="background-color: #fff0f0">&quot;https://chat.openai.com/&quot;</span><span style="color: #007700">&gt;</span>https://chat.openai.com/<span style="color: #007700">&lt;/a&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>API Key:<span style="color: #007700">&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;openaiapikey&quot;</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;input your api key here&quot;</span><span style="color: #007700">&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>API url:<span style="color: #007700">&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;openaiapiurl&quot;</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;https://api.openai.com/v1/completions&quot;</span><span style="color: #007700">&gt;&lt;/p&gt;</span>
<span style="color: #007700">&lt;p&gt;</span>Ask Open AI ChatGPT<span style="color: #007700">&lt;/p&gt;</span>
<span style="color: #007700">&lt;textarea</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;userinput&quot;</span> <span style="color: #0000CC">name=</span><span style="background-color: #fff0f0">&quot;userinput&quot;</span> <span style="color: #0000CC">rows=</span><span style="background-color: #fff0f0">&quot;4&quot;</span> <span style="color: #0000CC">cols=</span><span style="background-color: #fff0f0">&quot;50&quot;</span><span style="color: #007700">&gt;</span>

<span style="color: #007700">&lt;/textarea&gt;</span>
<span style="color: #007700">&lt;button</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;senduserinput()&quot;</span><span style="color: #007700">&gt;</span>Send<span style="color: #007700">&lt;/button&gt;</span>

<span style="color: #007700">&lt;div</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;aichatresponse&quot;</span><span style="color: #007700">&gt;&lt;/div&gt;</span>

  <span style="color: #007700">&lt;script&gt;</span>

    async <span style="color: #008800; font-weight: bold">function</span> sendMessage(message) {
      <span style="color: #008800; font-weight: bold">let</span> API_KEY <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;openaiapikey&quot;</span>).value;
      <span style="color: #008800; font-weight: bold">let</span> url <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;openaiapiurl&quot;</span>).value;
      <span style="color: #008800; font-weight: bold">const</span> headers <span style="color: #333333">=</span> {
        <span style="background-color: #fff0f0">&#39;Content-Type&#39;</span><span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;application/json&#39;</span>,
        <span style="background-color: #fff0f0">&#39;Authorization&#39;</span><span style="color: #333333">:</span> <span style="color: #FF0000; background-color: #FFAAAA">`</span>Bearer ${API_KEY}<span style="color: #FF0000; background-color: #FFAAAA">`</span>
      };

      <span style="color: #008800; font-weight: bold">const</span> data <span style="color: #333333">=</span> {
        prompt<span style="color: #333333">:</span> message,
        temperature<span style="color: #333333">:</span> <span style="color: #6600EE; font-weight: bold">0.7</span>,
  		max_tokens<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">256</span>,
  		top_p<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">1</span>,
  		frequency_penalty<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">0</span>,
  		presence_penalty<span style="color: #333333">:</span> <span style="color: #0000DD; font-weight: bold">0</span>,
        model<span style="color: #333333">:</span> <span style="background-color: #fff0f0">&#39;text-davinci-003&#39;</span> <span style="color: #888888">// Use &#39;text-davinci-003&#39; for GPT-3.5-turbo</span>
      };

      <span style="color: #008800; font-weight: bold">try</span> {
        <span style="color: #008800; font-weight: bold">const</span> response <span style="color: #333333">=</span> await axios.post(url, data, { headers });
        <span style="color: #008800; font-weight: bold">const</span> reply <span style="color: #333333">=</span> response.data.choices[<span style="color: #0000DD; font-weight: bold">0</span>].text.trim();
        <span style="color: #008800; font-weight: bold">return</span> reply;
      } <span style="color: #008800; font-weight: bold">catch</span> (error) {
        console.error(<span style="background-color: #fff0f0">&#39;Error:&#39;</span>, error.response.data);
        <span style="color: #008800; font-weight: bold">return</span> error.response.data.error.message;
      }
    }

	async <span style="color: #008800; font-weight: bold">function</span> senduserinput(){
    	<span style="color: #008800; font-weight: bold">let</span> user_input <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;userinput&quot;</span>).value;
        <span style="color: #008800; font-weight: bold">let</span> response <span style="color: #333333">=</span> await sendMessage(user_input);
		<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;aichatresponse&quot;</span>).innerHTML <span style="color: #333333">=</span> response;
    }
    <span style="color: #888888">/*</span>
<span style="color: #888888">    (async () =&gt; {</span>
<span style="color: #888888">      while (true) {</span>
<span style="color: #888888">        const user_input = prompt(&#39;User: &#39;);</span>
<span style="color: #888888">        const response = await sendMessage(user_input);</span>
<span style="color: #888888">        console.log(&#39;ChatGPT: &#39; + response);</span>
<span style="color: #888888">      }</span>
<span style="color: #888888">    })();</span>
<span style="color: #888888">    */</span>
  <span style="color: #007700">&lt;/script&gt;</span>
<span style="color: #007700">&lt;/body&gt;</span>
<span style="color: #007700">&lt;/html&gt;</span>
</pre></div>

  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/openai"></script>
  <script>

    async function sendMessage(message) {
      let API_KEY = document.getElementById("openaiapikey").value;
      let url = document.getElementById("openaiapiurl").value;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      };

      const data = {
        prompt: message,
        temperature: 0.7,
  		max_tokens: 256,
  		top_p: 1,
  		frequency_penalty: 0,
  		presence_penalty: 0,
        model: 'text-davinci-003' // Use 'text-davinci-003' for GPT-3.5-turbo
      };

      try {
        const response = await axios.post(url, data, { headers });
        const reply = response.data.choices[0].text.trim();
        return reply;
      } catch (error) {
        console.error('Error:', error.response.data);
        return error.response.data.error.message;
      }
    }

	async function senduserinput(){
    	let user_input = document.getElementById("userinput").value;
        let response = await sendMessage(user_input);
		document.getElementById("aichatresponse").innerHTML = response;
    }
    /*
    (async () => {
      while (true) {
        const user_input = prompt('User: ');
        const response = await sendMessage(user_input);
        console.log('ChatGPT: ' + response);
      }
    })();
    */
  </script>