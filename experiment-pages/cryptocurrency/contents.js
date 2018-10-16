const mining_cost_content = `

<p>
  The cost of mining are basically:
  <ul>
    <li>Electricity</li>
    <li>Internet Connection</li>
  </ul>
  If these are free, then it's a guarantee profit. However, do consider resting yout computer sometimes.
</p>

`

const simple_mining_content = `

<p>This page provides information of how to mine quickly and easily (usually instantly) with modern existing tools</p>

`

$("#cryptotab").click(function(){
    $(".grid-content").html(`

${mining_cost_content}
${simple_mining_content}


`
);
});
