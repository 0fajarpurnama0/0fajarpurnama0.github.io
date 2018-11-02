$("#sddredpns3").click(function(){
    $(".grid-content").html(`

	<h1>SIMULASI DROPTAIL DAN RANDOM EARLY DETECTION PADA NETWORK SIMULATOR 3<h1>


<h2>Nama: Fajar Purnama <br />

NIM: 1004405045 <br />

Jurusan: Teknik Elektro <br />

Mata Kuliah: Kualitas Layanan dan Kehandalan Sistel <br />

Fakultas Teknik Universitas Udayana </h2>

<h2>BAB I PENDAHULUAN </h2>

<h3>1.1 Latar Belakang</h3>

<p>
Teori antrean merupakan suatu teori dimana pelanggan harus antri untuk mendapatkan pelayanan dari pelayan. Teori antrean bertujuan untuk mengatur tingkat pelayanan dengan data kedatangan pelanggan. Pada teori antrean terdapat cara untuk mengatur tingkat pelayanan yang tepat, tingkat kesibukkan pelayan, berapa lama suatu pelanggan harus menunggu, berapa jumlah pelanggan dalam antrean, berapa besar ruang tunggu yang harus disiapkan, dan lain-lain. <br />

Di dunia nyata suatu pelayanan tidak terlepas dari antrean, termasuk pelayanan pada jaringan data. Untuk mensimulasikan antrean pada jaringan data telah tersedia banyak perangkat lunak seperti Network Simulator, yang kini telah berkembang menjadi NS3 (Network Simulator 3). <br />

Pada NS3 antrean dapat diatur secara manual namun telah tersedia 2 jenis antrean yang sudah jadi yaitu Droptail dan RED(Random Early Detection)Queue. Sudah tersedia contoh yang dibuat oleh Marcos Talau dan Duy Nguyen. <br />

Pada makalah ini akan disimulasikan REDQueue pada jaringan komputer point-to-point sederhana.
</p>

<h3>1.2	Rumusan Masalah </h3>

<p>Bagaimana simulasi REDQueue yang telah disediakan oleh Marcos Talau dan Duy Nguyen? </p>

<h3>1.3	Tujuan </h3>

<p>Untuk mensimulasikan REDQueue oleh Marcos Talau dan Duy Nguyen pada NS3.</p>

<h3> 1.4 Manfaat </h3>

<ol>
<li> 
Mendapatkan gambaran simulasi antrean REDQueue. </li>
<li>Dapat menerapkan simulasi antrean sendiri.</li>
</ol>

<h3>1.5 Ruang Lingkup dan Batasan</h3>

<ol>
<li> Menggunakan jaringan Ipv4 point-to-point. </li>
<li> Pada jaringan &lt; 10Mbps. </li>
<li> Menggunakan simulator NS3 versi Linux. </li>
<li> Menggunakan Droptail dan REDQueue yang disediakan pada NS3. </li>
</ol>

<h2>BAB II TINJAUAN PUSTAKA</h2>

<h3>2.1 Antrean </h3>

<p>Model antrean sederhana dapat dilihat seperti berikut: </p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/732abe69-fe11-4768-9f6c-980e346a0223-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 2.1 Model antrean sederhana </figcaption>
</figure>



<p>Pada gambar 2.1 terlihat kedatangan pelanggan λ dalam satuan erlang, pada sistem disediakan ruang tunggu maksimum w dengan masing-masing pelanggan ada waktu tunggu Tw, dan ada pelayan s dengan waktu pelayanan Ts dimana tingkat kesibukannya adalah p. Tr merupakan waktu rata – rata suatu pelanggan menunggu di sistem, dan r merupakan jumlah pelanggan dalam sistem. Untuk perhitungan dapat dilihat gambar berikut (Stalling, 1998): </p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/aa6fb543-36ca-4b99-8e6d-652dd0411913-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 2.2 Perhitungan antrean dasar</figcaption>
</figure>


<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/3621da80-faf0-4422-999b-f7a84d959a44-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 2.3 Perhitungan 3 jenis antrean</figcaption>
</figure>



<h3>2.2 Droptail dan RED(Random Early Detection)Queue</h3>

<p>Droptail menggunakan antrean dasar yaitu FIFO (first in first out) dengan membuang paket bila buffer pada node penuh, sedangkan Random Early Detection memerintahkan suatu koneksi untuk mengurangi kecepatan sebelum buffer penuh. Tujuan RED adalah congestion avoidance lebih untuk menghindari kongesti dari pada mengatasi, global synchronization avoidance, Avoidance of bias against bursty traffic, dan bound on average queue length untuk mempertahankan rata-rata panjang antrean maka mempertahankan rata-rata delay.</p>

<p>Secara umum algoritma dari RED adalah rata-rata panjang antrean lebih kecil dari batasan minimal yang ditentukan, maka paket akan antre. Bila rata-rata panjang antrean diantara batasan minimal dan batasan maksimal maka akan ada probabiltas pembuangan paket. Bila diatas maksimal maka akan terjadi pembuangan paket (Stallings, 1998).</p>

<h3>2.3 Network Simulator 3</h3>

<p>ns-3 adalah simulator jaringan kejadian diskrit, ditargetkan terutama untuk penelitian dan penggunaan pendidikan. ns-3 adalah perangkat lunak bebas, dilisensikan di bawah lisensi GNU GPLv2, dan publik untuk penelitian, pengembangan, dan penggunaan (ns3-project, 2012).</p>

<h2>BAB III METODE PERCOBAAN </h2>

<h2>3.1 Tempat dan Waktu Percobaan </h2>

<p>Percobaan dilakukan di Rumah pada tanggal 30 Mei 2013.</p>

<h2>3.2 Alat</h2>

Tabel 3.1 Alat yang digunakan

<table>
<tr>
<th>NO</th>
<th>Alat</th>
<th>Spesifikasi</th>
</tr>

<tr>
<td>1</td>
<td>Laptop ACER</td>
<td>
Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache)
Mobile Intel® Graphics Media Accelerator 4500MHD
1GB DDR2
128 WXGA Acer CrystalBriteTM LCD
250GB HDD
Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller
Atheros Communications Inc. AR928X Wireless Network Adapter
Operating System Linux Backtrack 5 R3
</td> 
</tr>

<tr>
<td>2</td>
<td>Software</td>
<td>NS3 (Network Simulator 3)</td>
</tr>
</table>
<h3>3.3 Program</h3>
<p>
Program pertama mengambil contoh dari John Abraham yaitu perbandingan Droptail dengan RED. Program kedua adalah tentang REDQueue dari Marcos Talau dan Duy Nguyen.
</p>

<pre>
<code>
/* -*- Mode:C++; c-file-style:”gnu”; indent-tabs-mode:nil; -*- */
 
/*

* This program is free software; you can redistribute it and/or modify
* it under the terms of the GNU General Public License version 2 as
* published by the Free Software Foundation;

*

* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.

*

* You should have received a copy of the GNU General Public License
* along with this program; if not, write to the Free Software
* Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA

*

* Author: John Abraham <john.abraham@gatech.edu>

*

*/

#include “ns3/core-module.h”
#include “ns3/network-module.h”
#include “ns3/internet-module.h”
#include “ns3/point-to-point-module.h”
#include “ns3/applications-module.h”
#include “ns3/point-to-point-layout-module.h”

#include <iostream>
#include <iomanip>
#include <map>

using namespace ns3;

int main (int argc, char *argv[])

{

uint32_t nLeaf = 5;
uint32_t maxPackets = 100;
uint32_t modeBytes = 0;
double minTh = 50;
double maxTh = 80;
uint32_t pktSize = 512;
std::string appDataRate = “10Mbps”;
std::string queueType = “DropTail”;
uint16_t port = 5001;
std::string bottleNeckLinkBw = “1Mbps”;
std::string bottleNeckLinkDelay = “50ms”;

CommandLine cmd;

cmd.AddValue (“nLeaf”, “Number of left and right side leaf nodes”, nLeaf);
cmd.AddValue (“maxPackets”,”Max Packets allowed in the queue”, maxPackets);
cmd.AddValue (“queueType”, “Set Queue type to DropTail or RED”, queueType);
cmd.AddValue (“appPktSize”, “Set OnOff App Packet Size”, pktSize);
cmd.AddValue (“appDataRate”, “Set OnOff App DataRate”, appDataRate);
cmd.AddValue (“modeBytes”, “Set Queue mode to Packets <0> or bytes <1>”, modeBytes);
cmd.AddValue (“redMinTh”, “RED queue minimum threshold”, minTh);
cmd.AddValue (“redMaxTh”, “RED queue maximum threshold”, maxTh);
cmd.Parse (argc,argv);

if ((queueType != “RED”) && (queueType != “DropTail”))
{
NS_ABORT_MSG (“Invalid queue type: Use –queueType=RED or –queueType=DropTail”);
}

Config::SetDefault (“ns3::OnOffApplication::PacketSize”, UintegerValue (pktSize));
Config::SetDefault (“ns3::OnOffApplication::DataRate”, StringValue (appDataRate));

if (!modeBytes)
{
Config::SetDefault (“ns3::DropTailQueue::Mode”, StringValue (“QUEUE_MODE_PACKETS”));
Config::SetDefault (“ns3::DropTailQueue::MaxPackets”, UintegerValue (maxPackets));
Config::SetDefault (“ns3::RedQueue::Mode”, StringValue (“QUEUE_MODE_PACKETS”));
Config::SetDefault (“ns3::RedQueue::QueueLimit”, UintegerValue (maxPackets));
} 
else
{
Config::SetDefault (“ns3::DropTailQueue::Mode”, StringValue (“QUEUE_MODE_BYTES”));
Config::SetDefault (“ns3::DropTailQueue::MaxBytes”, UintegerValue (maxPackets * pktSize));
Config::SetDefault (“ns3::RedQueue::Mode”, StringValue (“QUEUE_MODE_BYTES”));
Config::SetDefault (“ns3::RedQueue::QueueLimit”, UintegerValue (maxPackets * pktSize));
minTh *= pktSize;
maxTh *= pktSize;
}

// Create the point-to-point link helpers

PointToPointHelper bottleNeckLink;
bottleNeckLink.SetDeviceAttribute (“DataRate”, StringValue (bottleNeckLinkBw));
bottleNeckLink.SetChannelAttribute (“Delay”, StringValue (bottleNeckLinkDelay));

if (queueType == “RED”)
{
bottleNeckLink.SetQueue (“ns3::RedQueue”,
“MinTh”, DoubleValue (minTh),
“MaxTh”, DoubleValue (maxTh),
“LinkBandwidth”, StringValue (bottleNeckLinkBw),
“LinkDelay”, StringValue (bottleNeckLinkDelay));
}

PointToPointHelper pointToPointLeaf;
pointToPointLeaf.SetDeviceAttribute (“DataRate”, StringValue (“10Mbps”));
pointToPointLeaf.SetChannelAttribute (“Delay”, StringValue (“1ms”));

PointToPointDumbbellHelper d (nLeaf, pointToPointLeaf,
nLeaf, pointToPointLeaf,
bottleNeckLink);

// Install Stack
InternetStackHelper stack;
d.InstallStack (stack);

// Assign IP Addresses

d.AssignIpv4Addresses (Ipv4AddressHelper (“10.1.1.0”, “255.255.255.0”),
Ipv4AddressHelper (“10.2.1.0”, “255.255.255.0”),
Ipv4AddressHelper (“10.3.1.0”, “255.255.255.0”));

// Install on/off app on all right side nodes
OnOffHelper clientHelper (“ns3::TcpSocketFactory”, Address ());
clientHelper.SetAttribute (“OnTime”, StringValue (“ns3::UniformRandomVariable[Min=0.,Max=1.]”));
clientHelper.SetAttribute (“OffTime”, StringValue (“ns3::UniformRandomVariable[Min=0.,Max=1.]”));
Address sinkLocalAddress (InetSocketAddress (Ipv4Address::GetAny (), port));
PacketSinkHelper packetSinkHelper (“ns3::TcpSocketFactory”, sinkLocalAddress);

ApplicationContainer sinkApps;

for (uint32_t i = 0; i < d.LeftCount (); ++i)
{
sinkApps.Add (packetSinkHelper.Install (d.GetLeft (i)));
}

sinkApps.Start (Seconds (0.0));
sinkApps.Stop (Seconds (30.0));

ApplicationContainer clientApps;

for (uint32_t i = 0; i < d.RightCount (); ++i)
{
// Create an on/off app sending packets to the left side
AddressValue remoteAddress (InetSocketAddress (d.GetLeftIpv4Address (i), port));
clientHelper.SetAttribute (“Remote”, remoteAddress);
clientApps.Add (clientHelper.Install (d.GetRight (i)));
}

clientApps.Start (Seconds (1.0)); // Start 1 second after sink
clientApps.Stop (Seconds (15.0)); // Stop before the sink

Ipv4GlobalRoutingHelper::PopulateRoutingTables ();

std::cout << “Running the simulation” << std::endl;

Simulator::Run ();

uint32_t totalRxBytesCounter = 0;
for (uint32_t i = 0; i < sinkApps.GetN (); i++)
{
Ptr <Application> app = sinkApps.Get (i);
Ptr <PacketSink> pktSink = DynamicCast <PacketSink> (app);
totalRxBytesCounter += pktSink->GetTotalRx ();
}

NS_LOG_UNCOND (“—————————-nQueue Type:”

<< queueType
<< “nGoodput Bytes/sec:”
<< totalRxBytesCounter/Simulator::Now ().GetSeconds ());
NS_LOG_UNCOND (“—————————-“);

std::cout << “Destroying the simulation” << std::endl;
Simulator::Destroy ();
return 0;
}
</code>
</pre>


<p>Kode 3.1 Program Droptail_vs_RED.cc</p>

<pre>
<code>
/* -*- Mode:C++; c-file-style:”gnu”; indent-tabs-mode:nil; -*- */
 
/*
* This program is free software; you can redistribute it and/or modify
* it under the terms of the GNU General Public License version 2 as
* published by the Free Software Foundation;
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program; if not, write to the Free Software
* Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
*
* Authors: Marcos Talau <talau@users.sourceforge.net>
* Duy Nguyen <duy@soe.ucsc.edu>
*
*/

#include “ns3/core-module.h”
#include “ns3/network-module.h”
#include “ns3/internet-module.h”
#include “ns3/flow-monitor-helper.h”
#include “ns3/point-to-point-module.h”
#include “ns3/applications-module.h”

using namespace ns3;
NS_LOG_COMPONENT_DEFINE (“RedTests”);
uint32_t checkTimes;
double avgQueueSize;

// The times
double global_start_time;
double global_stop_time;
double sink_start_time;
double sink_stop_time;
double client_start_time;
double client_stop_time;

NodeContainer n0n2;
NodeContainer n1n2;
NodeContainer n2n3;
NodeContainer n3n4;
NodeContainer n3n5;

Ipv4InterfaceContainer i0i2;
Ipv4InterfaceContainer i1i2;
Ipv4InterfaceContainer i2i3;
Ipv4InterfaceContainer i3i4;
Ipv4InterfaceContainer i3i5;

std::stringstream filePlotQueue;
std::stringstream filePlotQueueAvg;

void

CheckQueueSize (Ptr<Queue> queue)
{
uint32_t qSize = StaticCast<RedQueue> (queue)->GetQueueSize ();

avgQueueSize += qSize;
checkTimes++;

// check queue size every 1/100 of a second

Simulator::Schedule (Seconds (0.01), &CheckQueueSize, queue);
std::ofstream fPlotQueue (filePlotQueue.str ().c_str (), std::ios::out|std::ios::app);
fPlotQueue << Simulator::Now ().GetSeconds () << ” ” << qSize << std::endl;
fPlotQueue.close ();

std::ofstream fPlotQueueAvg (filePlotQueueAvg.str ().c_str (), std::ios::out|std::ios::app);
fPlotQueueAvg << Simulator::Now ().GetSeconds () << ” ” << avgQueueSize / checkTimes << std::endl;
fPlotQueueAvg.close ();
}

void
BuildAppsTest (uint32_t test)
{
if ( (test == 1) || (test == 3) )
{
// SINK is in the right side
uint16_t port = 50000;
Address sinkLocalAddress (InetSocketAddress (Ipv4Address::GetAny (), port));
PacketSinkHelper sinkHelper (“ns3::TcpSocketFactory”, sinkLocalAddress);
ApplicationContainer sinkApp = sinkHelper.Install (n3n4.Get (1));
sinkApp.Start (Seconds (sink_start_time));
sinkApp.Stop (Seconds (sink_stop_time));

// Connection one

// Clients are in left side

/*
* Create the OnOff applications to send TCP to the server
* onoffhelper is a client that send data to TCP destination
*/

OnOffHelper clientHelper1 (“ns3::TcpSocketFactory”, Address ());
clientHelper1.SetAttribute (“OnTime”, StringValue (“ns3::ConstantRandomVariable[Constant=1]”));
clientHelper1.SetAttribute (“OffTime”, StringValue (“ns3::ConstantRandomVariable[Constant=0]”));
clientHelper1.SetAttribute
(“DataRate”, DataRateValue (DataRate (“10Mb/s”)));
clientHelper1.SetAttribute
(“PacketSize”, UintegerValue (1000));

ApplicationContainer clientApps1;
AddressValue remoteAddress
(InetSocketAddress (i3i4.GetAddress (1), port));
clientHelper1.SetAttribute (“Remote”, remoteAddress);
clientApps1.Add (clientHelper1.Install (n0n2.Get (0)));
clientApps1.Start (Seconds (client_start_time));
clientApps1.Stop (Seconds (client_stop_time));

// Connection two

OnOffHelper clientHelper2 (“ns3::TcpSocketFactory”, Address ());
clientHelper2.SetAttribute (“OnTime”, StringValue (“ns3::ConstantRandomVariable[Constant=1]”));
clientHelper2.SetAttribute (“OffTime”, StringValue (“ns3::ConstantRandomVariable[Constant=0]”));
clientHelper2.SetAttribute
(“DataRate”, DataRateValue (DataRate (“10Mb/s”)));
clientHelper2.SetAttribute
(“PacketSize”, UintegerValue (1000));

ApplicationContainer clientApps2;
clientHelper2.SetAttribute (“Remote”, remoteAddress);
clientApps2.Add (clientHelper2.Install (n1n2.Get (0)));
clientApps2.Start (Seconds (3.0));
clientApps2.Stop (Seconds (client_stop_time));
}
else // 4 or 5
{
// SINKs
// #1
uint16_t port1 = 50001;
Address sinkLocalAddress1 (InetSocketAddress (Ipv4Address::GetAny (), port1));
PacketSinkHelper sinkHelper1 (“ns3::TcpSocketFactory”, sinkLocalAddress1);
ApplicationContainer sinkApp1 = sinkHelper1.Install (n3n4.Get (1));
sinkApp1.Start (Seconds (sink_start_time));
sinkApp1.Stop (Seconds (sink_stop_time));
// #2
uint16_t port2 = 50002;
Address sinkLocalAddress2 (InetSocketAddress (Ipv4Address::GetAny (), port2));
PacketSinkHelper sinkHelper2 (“ns3::TcpSocketFactory”, sinkLocalAddress2);
ApplicationContainer sinkApp2 = sinkHelper2.Install (n3n5.Get (1));
sinkApp2.Start (Seconds (sink_start_time));
sinkApp2.Stop (Seconds (sink_stop_time));
// #3
uint16_t port3 = 50003;
Address sinkLocalAddress3 (InetSocketAddress (Ipv4Address::GetAny (), port3));
PacketSinkHelper sinkHelper3 (“ns3::TcpSocketFactory”, sinkLocalAddress3);
ApplicationContainer sinkApp3 = sinkHelper3.Install (n0n2.Get (0));
sinkApp3.Start (Seconds (sink_start_time));
sinkApp3.Stop (Seconds (sink_stop_time));
// #4
uint16_t port4 = 50004;
Address sinkLocalAddress4 (InetSocketAddress (Ipv4Address::GetAny (), port4));
PacketSinkHelper sinkHelper4 (“ns3::TcpSocketFactory”, sinkLocalAddress4);
ApplicationContainer sinkApp4 = sinkHelper4.Install (n1n2.Get (0));
sinkApp4.Start (Seconds (sink_start_time));
sinkApp4.Stop (Seconds (sink_stop_time));

// Connection #1
/*
* Create the OnOff applications to send TCP to the server
* onoffhelper is a client that send data to TCP destination
*/

OnOffHelper clientHelper1 (“ns3::TcpSocketFactory”, Address ());
clientHelper1.SetAttribute (“OnTime”, StringValue (“ns3::ConstantRandomVariable[Constant=1]”));
clientHelper1.SetAttribute (“OffTime”, StringValue (“ns3::ConstantRandomVariable[Constant=0]”));
clientHelper1.SetAttribute
(“DataRate”, DataRateValue (DataRate (“10Mb/s”)));
clientHelper1.SetAttribute
(“PacketSize”, UintegerValue (1000));

ApplicationContainer clientApps1;
AddressValue remoteAddress1
(InetSocketAddress (i3i4.GetAddress (1), port1));
clientHelper1.SetAttribute (“Remote”, remoteAddress1);
clientApps1.Add (clientHelper1.Install (n0n2.Get (0)));
clientApps1.Start (Seconds (client_start_time));
clientApps1.Stop (Seconds (client_stop_time));

// Connection #2

OnOffHelper clientHelper2 (“ns3::TcpSocketFactory”, Address ());
clientHelper2.SetAttribute (“OnTime”, StringValue (“ns3::ConstantRandomVariable[Constant=1]”));
clientHelper2.SetAttribute (“OffTime”, StringValue (“ns3::ConstantRandomVariable[Constant=0]”));
clientHelper2.SetAttribute
(“DataRate”, DataRateValue (DataRate (“10Mb/s”)));
clientHelper2.SetAttribute
(“PacketSize”, UintegerValue (1000));

ApplicationContainer clientApps2;
AddressValue remoteAddress2
(InetSocketAddress (i3i5.GetAddress (1), port2));
clientHelper2.SetAttribute (“Remote”, remoteAddress2);
clientApps2.Add (clientHelper2.Install (n1n2.Get (0)));
clientApps2.Start (Seconds (2.0));
clientApps2.Stop (Seconds (client_stop_time));

// Connection #3

OnOffHelper clientHelper3 (“ns3::TcpSocketFactory”, Address ());
clientHelper3.SetAttribute (“OnTime”, StringValue (“ns3::ConstantRandomVariable[Constant=1]”));
clientHelper3.SetAttribute (“OffTime”, StringValue (“ns3::ConstantRandomVariable[Constant=0]”));
clientHelper3.SetAttribute
(“DataRate”, DataRateValue (DataRate (“10Mb/s”)));
clientHelper3.SetAttribute
(“PacketSize”, UintegerValue (1000));

ApplicationContainer clientApps3;
AddressValue remoteAddress3
(InetSocketAddress (i0i2.GetAddress (0), port3));
clientHelper3.SetAttribute (“Remote”, remoteAddress3);
clientApps3.Add (clientHelper3.Install (n3n4.Get (1)));
clientApps3.Start (Seconds (3.5));
clientApps3.Stop (Seconds (client_stop_time));

// Connection #4
OnOffHelper clientHelper4 (“ns3::TcpSocketFactory”, Address ());
clientHelper4.SetAttribute (“OnTime”, StringValue (“ns3::ConstantRandomVariable[Constant=1]”));
clientHelper4.SetAttribute (“OffTime”, StringValue (“ns3::ConstantRandomVariable[Constant=0]”));
clientHelper4.SetAttribute
(“DataRate”, DataRateValue (DataRate (“40b/s”)));
clientHelper4.SetAttribute
(“PacketSize”, UintegerValue (5 * 8)); // telnet

ApplicationContainer clientApps4;
AddressValue remoteAddress4
(InetSocketAddress (i1i2.GetAddress (0), port4));
clientHelper4.SetAttribute (“Remote”, remoteAddress4);
clientApps4.Add (clientHelper4.Install (n3n5.Get (1)));
clientApps4.Start (Seconds (1.0));
clientApps4.Stop (Seconds (client_stop_time));
}

}

int main (int argc, char *argv[])
{
// LogComponentEnable (“RedExamples”, LOG_LEVEL_INFO);
// LogComponentEnable (“TcpNewReno”, LOG_LEVEL_INFO);
// LogComponentEnable (“RedQueue”, LOG_LEVEL_FUNCTION);
LogComponentEnable (“RedQueue”, LOG_LEVEL_INFO);

uint32_t redTest;
std::string redLinkDataRate = “1.5Mbps”;
std::string redLinkDelay = “20ms”;
std::string pathOut;

bool writeForPlot = false;
bool writePcap = false;
bool flowMonitor = false;
bool printRedStats = true;

global_start_time = 0.0;
global_stop_time = 11;

sink_start_time = global_start_time;
sink_stop_time = global_stop_time + 3.0;
client_start_time = sink_start_time + 0.2;
client_stop_time = global_stop_time – 2.0;

// Configuration and command line parameter parsing

redTest = 1;

// Will only save in the directory if enable opts below

pathOut = “.”; // Current directory

CommandLine cmd;
cmd.AddValue (“testNumber”, “Run test 1, 3, 4 or 5”, redTest);
cmd.AddValue (“pathOut”, “Path to save results from –writeForPlot/–writePcap/–writeFlowMonitor”, pathOut);
cmd.AddValue (“writeForPlot”, “<0/1> to write results for plot (gnuplot)”, writeForPlot);
cmd.AddValue (“writePcap”, “<0/1> to write results in pcapfile”, writePcap);
cmd.AddValue (“writeFlowMonitor”, “<0/1> to enable Flow Monitor and write their results”, flowMonitor);

cmd.Parse (argc, argv);

if ( (redTest != 1) && (redTest != 3) && (redTest != 4) && (redTest != 5) )
{
NS_ABORT_MSG (“Invalid test number. Supported tests are 1, 3, 4 or 5”);
}

NS_LOG_INFO (“Create nodes”);
NodeContainer c;
c.Create (6);
Names::Add ( “N0”, c.Get (0));
Names::Add ( “N1”, c.Get (1));
Names::Add ( “N2”, c.Get (2));
Names::Add ( “N3”, c.Get (3));
Names::Add ( “N4”, c.Get (4));
Names::Add ( “N5”, c.Get (5));

n0n2 = NodeContainer (c.Get (0), c.Get (2));
n1n2 = NodeContainer (c.Get (1), c.Get (2));
n2n3 = NodeContainer (c.Get (2), c.Get (3));
n3n4 = NodeContainer (c.Get (3), c.Get (4));
n3n5 = NodeContainer (c.Get (3), c.Get (5));

Config::SetDefault (“ns3::TcpL4Protocol::SocketType”, StringValue (“ns3::TcpReno”));

// 42 = headers size

Config::SetDefault (“ns3::TcpSocket::SegmentSize”, UintegerValue (1000 – 42));
Config::SetDefault (“ns3::TcpSocket::DelAckCount”, UintegerValue (1));
GlobalValue::Bind (“ChecksumEnabled”, BooleanValue (false));

uint32_t meanPktSize = 500;

// RED params

NS_LOG_INFO (“Set RED params”);
Config::SetDefault (“ns3::RedQueue::Mode”, StringValue (“QUEUE_MODE_PACKETS”));
Config::SetDefault (“ns3::RedQueue::MeanPktSize”, UintegerValue (meanPktSize));
Config::SetDefault (“ns3::RedQueue::Wait”, BooleanValue (true));
Config::SetDefault (“ns3::RedQueue::Gentle”, BooleanValue (true));
Config::SetDefault (“ns3::RedQueue::QW”, DoubleValue (0.002));
Config::SetDefault (“ns3::RedQueue::MinTh”, DoubleValue (5));
Config::SetDefault (“ns3::RedQueue::MaxTh”, DoubleValue (15));
Config::SetDefault (“ns3::RedQueue::QueueLimit”, UintegerValue (25));

if (redTest == 3) // test like 1, but with bad params
{
Config::SetDefault (“ns3::RedQueue::MaxTh”, DoubleValue (10));
Config::SetDefault (“ns3::RedQueue::QW”, DoubleValue (0.003));
}
else if (redTest == 5) // test 5, same of test 4, but in byte mode
{
Config::SetDefault (“ns3::RedQueue::Mode”, StringValue (“QUEUE_MODE_BYTES”));
Config::SetDefault (“ns3::RedQueue::Ns1Compat”, BooleanValue (true));
Config::SetDefault (“ns3::RedQueue::MinTh”, DoubleValue (5 * meanPktSize));
Config::SetDefault (“ns3::RedQueue::MaxTh”, DoubleValue (15 * meanPktSize));
Config::SetDefault (“ns3::RedQueue::QueueLimit”, UintegerValue (25 * meanPktSize));
}

NS_LOG_INFO (“Install internet stack on all nodes.”);

InternetStackHelper internet;
internet.Install (c);

NS_LOG_INFO (“Create channels”);
PointToPointHelper p2p;

p2p.SetQueue (“ns3::DropTailQueue”);
p2p.SetDeviceAttribute (“DataRate”, StringValue (“10Mbps”));
p2p.SetChannelAttribute (“Delay”, StringValue (“2ms”));
NetDeviceContainer devn0n2 = p2p.Install (n0n2);

p2p.SetQueue (“ns3::DropTailQueue”);
p2p.SetDeviceAttribute (“DataRate”, StringValue (“10Mbps”));
p2p.SetChannelAttribute (“Delay”, StringValue (“3ms”));
NetDeviceContainer devn1n2 = p2p.Install (n1n2);

p2p.SetQueue (“ns3::RedQueue”, // only backbone link has RED queue
“LinkBandwidth”, StringValue (redLinkDataRate),
“LinkDelay”, StringValue (redLinkDelay));
p2p.SetDeviceAttribute (“DataRate”, StringValue (redLinkDataRate));
p2p.SetChannelAttribute (“Delay”, StringValue (redLinkDelay));
NetDeviceContainer devn2n3 = p2p.Install (n2n3);

p2p.SetQueue (“ns3::DropTailQueue”);
p2p.SetDeviceAttribute (“DataRate”, StringValue (“10Mbps”));
p2p.SetChannelAttribute (“Delay”, StringValue (“4ms”));
NetDeviceContainer devn3n4 = p2p.Install (n3n4);

p2p.SetQueue (“ns3::DropTailQueue”);
p2p.SetDeviceAttribute (“DataRate”, StringValue (“10Mbps”));
p2p.SetChannelAttribute (“Delay”, StringValue (“5ms”));
NetDeviceContainer devn3n5 = p2p.Install (n3n5);

NS_LOG_INFO (“Assign IP Addresses”);
Ipv4AddressHelper ipv4;

ipv4.SetBase (“10.1.1.0”, “255.255.255.0”);
i0i2 = ipv4.Assign (devn0n2);

ipv4.SetBase (“10.1.2.0”, “255.255.255.0”);
i1i2 = ipv4.Assign (devn1n2);

ipv4.SetBase (“10.1.3.0”, “255.255.255.0”);
i2i3 = ipv4.Assign (devn2n3);

ipv4.SetBase (“10.1.4.0”, “255.255.255.0”);
i3i4 = ipv4.Assign (devn3n4);

ipv4.SetBase (“10.1.5.0”, “255.255.255.0”);
i3i5 = ipv4.Assign (devn3n5);

// Set up the routing

Ipv4GlobalRoutingHelper::PopulateRoutingTables ();

if (redTest == 5)
{
// like in ns2 test, r2 -> r1, have a queue in packet mode
Ptr<PointToPointNetDevice> nd = StaticCast<PointToPointNetDevice> (devn2n3.Get (1));
Ptr<Queue> queue = nd->GetQueue ();

StaticCast<RedQueue> (queue)->SetMode (RedQueue::QUEUE_MODE_PACKETS);
StaticCast<RedQueue> (queue)->SetTh (5, 15);
StaticCast<RedQueue> (queue)->SetQueueLimit (25);
}

BuildAppsTest (redTest);

if (writePcap)
{
PointToPointHelper ptp;
std::stringstream stmp;
stmp << pathOut << “/red”;
ptp.EnablePcapAll (stmp.str ().c_str ());
}

Ptr<FlowMonitor> flowmon;
if (flowMonitor)
{
FlowMonitorHelper flowmonHelper;
flowmon = flowmonHelper.InstallAll ();
}

if (writeForPlot)
{
filePlotQueue << pathOut << “/” << “red-queue.plotme”;
filePlotQueueAvg << pathOut << “/” << “red-queue_avg.plotme”;

remove (filePlotQueue.str ().c_str ());
remove (filePlotQueueAvg.str ().c_str ());
Ptr<PointToPointNetDevice> nd = StaticCast<PointToPointNetDevice> (devn2n3.Get (0));
Ptr<Queue> queue = nd->GetQueue ();
Simulator::ScheduleNow (&CheckQueueSize, queue);
}

Simulator::Stop (Seconds (sink_stop_time));
Simulator::Run ();

if (flowMonitor)
{
std::stringstream stmp;
stmp << pathOut << “/red.flowmon”;

flowmon->SerializeToXmlFile (stmp.str ().c_str (), false, false);
}

if (printRedStats)
{
Ptr<PointToPointNetDevice> nd = StaticCast<PointToPointNetDevice> (devn2n3.Get (0));
RedQueue::Stats st = StaticCast<RedQueue> (nd->GetQueue ())->GetStats ();
std::cout << “*** RED stats from Node 2 queue ***” << std::endl;
std::cout << “t ” << st.unforcedDrop << ” drops due prob mark” << std::endl;
std::cout << “t ” << st.forcedDrop << ” drops due hard mark” << std::endl;
std::cout << “t ” << st.qLimDrop << ” drops due queue full” << std::endl;

nd = StaticCast<PointToPointNetDevice> (devn2n3.Get (1));
st = StaticCast<RedQueue> (nd->GetQueue ())->GetStats ();
std::cout << “*** RED stats from Node 3 queue ***” << std::endl;
std::cout << “t ” << st.unforcedDrop << ” drops due prob mark” << std::endl;
std::cout << “t ” << st.forcedDrop << ” drops due hard mark” << std::endl;
std::cout << “t ” << st.qLimDrop << ” drops due queue full” << std::endl;
}

Simulator::Destroy ();

return 0;
}
</code>
</pre>

<p>Kode 3.2 Program red_tests.cc</p>

<h2>BAB IV PEMBAHASAN </h2>

<h3>4.1 Simulasi perbandingan Droptail dan RED</h3>

<p>Terlihat pada gambar 4.1 dan gambar 4.2 bekerja menurut Stallings, 1998, yaitu pada droptail simpul akan menunggu sampai kapasitas antrean penuh baru melakukan pembuangan, sehingga terlihat terjadi penurunan kecepatan yang besar yaitu sekitar 300 Kbps pada saat penuh.</p>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/0dc6ed8a-8117-472a-940f-6de713a46dc9-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.1 Simulasi Droptail</figcaption>
</figure>


<p>
Sedangkan pada RED terjadi usaha pencegahan agar kapasitas tidak penuh sehingga telah terjadi pembuangan sebelum kapasitas penuh. Pembuangan paket terjadi berdasarkan potensi terjadinya kelebihan kapasitas. Sehingga terlihat penurun kecepatan bertahap tetapi tidak sebesar pada Droptail yaitu sekitar 50 Kbps.
</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Gambar 4.2 Simulasi RED</figcaption>
</figure>

<h3>4.2 Simulasi RED pada topologi sederhana</h3>

<p>Pertama terjadi inisialisasi yaitu penyesuaian dengan penurunnan kecepat yang sangat besar yaitu sekitar 1000 Kbps.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Gambar 4.3 Simulasi RED detil 1</figcaption>
</figure>

<p>Setelah itu terlihat pada gambar 4.4 simpul berusaha agar kapasitas tidak melebihi 25000 paket dengan melakukan penurunan speed secara bertahap.</p>

<p>Pada gambar setelah gambar 4.4 simpul melakukan penurunan speed secara bertahap ditinjau dari potensi terjadi kapasitas penuh. Menurut Stallings, 1998, kerja REDQueue adalah paket akan antre bila kapasitas antrean rata-rata tidak melebihi batasan minimal yang ditentukan oleh RED. Bila kapasitas antrean rata-rata diatara batas minimal dan batas maksimal maka pembuangan terjadi berdasarkan probabilatas akan terjadinya kapasitas penuh. Bila kapasitas antrean rata-rata melembih batas maksimal maka akan terjadi pembuangan paket.</p>

<p>Terlihat pada hasil berikutnya sesuai dengan teori.</p>

<figure>
  <img src="" alt="" width="100%">
  <figcaption>Gambar 4.4 Simulasi RED detil 2</figcaption>
</figure>


<figure>
  <img src="" alt="" width="100%">
  <figcaption>Gambar 4.5 Simulasi RED detil 3</figcaption>
</figure>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/26993eed-20d3-4a18-987b-525d5b4c688b-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.6 Simulasi RED detil 4</figcaption>
</figure>

<figure>
  <img src="https://beta-static.photobucket.com/images/ii560/0fajarpurnama0/0/a736f775-afb0-4948-af60-89b1209cadcd-original.png?width=1920&height=1080&fit=bounds" alt="" width="100%">
  <figcaption>Gambar 4.7 Simulasi RED detil 5</figcaption>
</figure>

<h2>BAB V PENUTUP </h3>
 
<h2>DAFTAR PUSTAKA</h3>

<ul>
<li>Ns3-project. 2012. http://www.nsnam.org. diakses 27 Mei 2013.</li>
<li>Stallings, W. 1998. High-Speed Networks. Prentice-Hall,inc : New Jersey.</li>
</ul>
`
);
});
