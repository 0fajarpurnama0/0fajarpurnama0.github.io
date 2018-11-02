$("#sddredpns3").click(function(){
    $(".grid-content").html(`

	
`
);
});

$("#anetwork").click(function(){
    $(".grid-content").html(`

`
);
});

$("#lancpt").click(function(){
    $(".grid-content").html(`

<p>A simple definition of LAN is a connection between more than 2 host. Follow the following tutorial.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/8c1f1e05-2fa4-4be7-bbea-2652dc11ef8c-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 1. Preparing 3 PC</figcaption>
</figure>


<p>Next is preparing a switch. In OSI, switch is a layer 2 (datalink) device.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/f070f873-1e04-4cf9-b3d3-e77046976be4-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 2. Preparing a switch</figcaption>
</figure>


<p>Connect each PC to the switch using a straight UTP cable. Click the cable than click the device.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 3. Connecting each PC to the switch</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 4. FastEthernet is the port's interface</figcaption>
</figure>


<p>
Do the same with other PC.<br />

Configure the IP address and subnet mask of each PC. For example:
</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 5. Going to IP configuration</figcaption>
</figure>


<p>Here I use a private IP class C.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 6. Configuring IP address PC 1</figcaption>
</figure>


<p>NOTE: in subnet 255.255.255.0, 192.168.1, identifies the network and 3 identifies the host.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/a70e463d-e39e-4317-86e0-c6c2a01ae31a-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 7. Configuring IP address PC 2</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 8. Configuring IP address PC 3</figcaption>
</figure>


<p>Use ping to test connection on command prompt.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/b6b90308-85dc-4fd6-9a0f-5f1ce7c4a13a-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 9. Going to command prompt</figcaption>
</figure>



<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 10. Successful connection PC 1 to PC 2</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 11. Successful connection PC 1 to PC 3</figcaption>
</figure>


	`);
});

$("#wancpt").click(function(){
	$(".grid-content").html(`
	
<p>A simple definition of WAN is a connection between network. The next tutorial is connecting 2 network with 1 router.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/5ca148d6-1063-4f3e-90af-de473ba584ff-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 1. Preparing 2 network</figcaption>
</figure>

<p>Place a router.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/072b9936-5d53-4c3b-a762-1f37b1f636a9-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 2. Preparing a router</figcaption>
</figure>

<p>Connect each switch to the router.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 3. Plugging UTP straight cable on switch 2 on port GI 1/1</figcaption>
</figure>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/8568fd8d-4753-40ca-aa14-be18b558ae90-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 4. Plugging UTP straight cable on Router on port FA 0/1</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/965763a2-c135-45dd-8477-157fa226dd82-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 5. Plugging UTP straight cable on switch 1 on port GI 1/1</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 6. Plugging UTP straight cable on router on port FA 0/0</figcaption>
</figure>


<p>If you ever forget of where you plug the cable, just put your cursor on the line.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 7. Viewing plugged interface</figcaption>
</figure>


<p>Set the gateway IP of each interface on the router.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 8. Configuring gateway IP on port int FA 0/0</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/965763a2-c135-45dd-8477-157fa226dd82-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 9. Configuring gateway IP on port int FA 0/1</figcaption>
</figure>


<p>Next is to set the default gateway of each PC.

NOTE: gateway is the door to other network. If a PC wants to call to another network, it will go to the default gateway. The default gateway is the IP address on the router's interface that is connected to that network.



Set the default gateway</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/d44339a0-1290-4103-9507-91684c6bda94-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 10. Configuring default gateway for PC 1</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 11. Configuring default gateway for PC 2</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/16a8d3aa-0c07-41f1-9e24-ec0d0e169bc9-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 12. Configuring default gateway for PC 3</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 13. Configuring default gateway for PC 4</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 14. Configuring default gateway for PC 5</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 15. Configuring default gateway for PC 6</figcaption>
</figure>


<p>Now test the connection.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/a0a9a008-c18a-4780-bef4-ba6e3b518577-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 16. Successful connection PC 1 to R1 port int FA 0/0</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 3. Plugging UTP straight cable on switch 2 on port GI 1/1</figcaption>
</figure>
Figure 17. Successful connection PC 1 to R1 port int FA 0/1

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/89be4a32-206c-4761-ba13-3ed3cb404048-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 18. Successful connection PC1 to PC 4</figcaption>
</figure>


<p>Now that a connection between network is successful, save your router configuration.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 19. Saving router configuration</figcaption>
</figure>


	`);
});

$("#staticrouting").click(function(){
    $(".grid-content").html(`

<p>Here we will study about static route. Make a figure like below.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/305b309e-52b9-408f-8ef0-3f88d37f66a3-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 1. Network layout</figcaption>
</figure>


<p>Set the ip and gateway of the computer base on previous session.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 2. IP configuration of computers</figcaption>
</figure>


<p>Configure the routers base on the gateway we gave our computers.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 3. Configuring network gateway on routers</figcaption>
</figure>


<p>Configure the point-to-point IP.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 4. Configuring Point-to-Point</figcaption>
</figure>


<p>As you can see, network 192.168.1.0/24 cannot connect to 192.168.2.0/24 yet. The router doesn't have an IP table that could forward to another network.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 5. Request time out when trace routing between 2 network</figcaption>
</figure>


<p>Here's a static route configuration for R1.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/ea5d70e8-e1b1-4020-8cfa-94851fa19cc8-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 6. Static Route Configuration of R1</figcaption>
</figure>


<p>
Network: which network we want to reach. <br />

Next Hop: which gate we want to use. <br />

Here the network we want to reach is 192.168.2.0/24 through 192.168.2.2. Here's a static route configuration of R2. <br />
</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 7. Static route configuration of R2</figcaption>
</figure>


<p>Here the network we want to reach is 192.168.1.0/24 through 192.168.2.1. Now the traceroute succeed.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 8. Traceroute from 192.168.1.2 to 192.168.2.2</figcaption>
</figure>


	`);
});

$("#dhcpcpt").click(function(){
    $(".grid-content").html(`

<p>Today when connecting to a hotspot, we don’t need to configure our PC’s or Laptop IP manually. Instead we set it to automatic and ask DHCP to give us IP configuration. It’s also the work of RARP (Reverse Address Resolution Protocol). <br />

Set the default gateway and dns, don’t forget the subnet. Save.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/e7a041a5-e2f2-4d9f-9d4e-bc91a3245013-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 1. Configuring DHCP</figcaption>
</figure>


<p>Why start with 192.168.1.3? Because 192.168.1.1 is already used for default gateway and 192.168.1.2 is already use for the server. Assign DHCP (automatic IP in computer) for each PC connected to the network 192.168.1.0.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/11279284-587c-46b0-8bfd-9ea5695a8a59-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 2. DHCP setting for PC1</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 3. DHCP setting for PC2</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 4. DHCP setting for PC 3</figcaption>
</figure>


<p>One Reply to “DHCP (Dynamic Host Configuration Protocol) Server”</p>
	
`
);
});

$("#dnscpt").click(function(){
    $(".grid-content").html(`

<p>The function of DNS is to translate domain name into IP. Instead of calling a device through IP, we can call it through Domain Name.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/99abb965-23a4-47c1-bf05-ce3324b798bb-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 1. Placing a server</figcaption>
</figure>


<p>Connect the server with a straight UTP Cable to switch 1.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/9fa6839b-08e7-40a6-bda4-76bb72a48416-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 2. Plugging straight UTP cable to switch 1 port GI 1/2</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 3. Plugging straight UTP cable to server on port FA</figcaption>
</figure>


<p>Configure the IP address of your server.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 4. Configuring IP address of server</figcaption>
</figure>


<p>Finally the DNS setting is in config.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 5. Configuring DNS pool</figcaption>
</figure>


<p>Set your DNS IP on each PC.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/81e5be97-198d-4d8c-8f89-65bb078b6f02-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 6. Configuring DNS IP on PC 1</figcaption>
</figure>


<p>Ping using Domain Name.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/7bb0c2c0-af8e-4b2e-b6e2-74a62de524fc-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 7. Successful ping using domain name</figcaption>
</figure>

	
`
);
});

$("#webcpt").click(function(){
    $(".grid-content").html(`

<p>HTTP is what we usually see in browser. Most page on the web are HTTP. There is HTTPS where "S" = secure. <br />

There is HTTP menu in config. You can edit the html as you like.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/1444139d-96a9-4546-b655-cd2deddacf8b-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 1. Enabling HTTP</figcaption>
</figure>


<p>Open the browser on any PC and type http://192.168.1.2 </p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/b49f1e58-3bc7-4456-a3b0-053166aa08f0-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 2. Browser menu</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/7509a26d-2ecb-4c48-a2cf-b7bc1821b349-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Figure 3. When it is connected to HTTP server</figcaption>
</figure>


<p>You can use DNS.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 4. Adding a domain name for server 192.168.1.2</figcaption>
</figure>


<p>Open the web page.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Figure 5. Calling www.myserver.com</figcaption>
</figure>

	
`
);
});