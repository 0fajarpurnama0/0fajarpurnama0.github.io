---
layout: post
title: Droptail Simulation and Random Early Detection in Network Simulator 3
category: bachelor
tags: [Network Simulator 3, Random Early Detection, Droptail, traffic, queue, assignment, research writing]
featuredimage: https://images.hive.blog/DQmbnc3nNM2JFUiYsRCRpKiu5Ry7GRGgABBemHBJEVQw1Ay/Gambar%204.7%20Simulasi%20RED%20detil%205.jpg
description: Network Simulator 3 can simulate REDQueue and display animation so it's easier to observe.
canonicalurl: https://0fajarpurnama0.github.io/bachelor/2020/11/15/simulation-droptail-red-ns3
---
## Note

This is my English translated undergraduate assignment for my Telecommunication Queuing System course in the Department of Electrical Engineering, Faculty of Engineering, Udayana University. This task has never been published anywhere and I, as the author and copyright holder, license this assignment as customized CC-BY-SA where anyone can share, copy, republish, and sell it provided that my name is written as the original author and notify that the original and open version available here.

## Chapter 1 Introduction

### 1.1 Background

The queue theory is a theory in which customers must queue to get service from the waiter. Queuing theory aims to regulate the level of service with customer arrival data. In queuing theory there are ways to set the right level of service, the level of waiters busyness, how long a customer has to wait, how many customers are in the queue, how big is the waiting room to be prepared, and so on. In the real world, a service cannot be separated from the queue, including services on the data network. To simulate queues on data networks, there are many software such as Network Simulator, which has now developed into NS3 (Network Simulator 3). In NS3 the queue can be set manually, but there are 2 types of queues that have been made, namely Droptail and RED (Random Early Detection) Queue. There are examples made by Marcos Talau and Duy Nguyen. In this paper we will simulate REDQueue on a simple point-to-point computer network.

### 1.2 Problem

How is the REDQueue simulation provided by Marcos Talau and Duy Nguyen?

### 1.3 Objective

To simulate REDQueue by Marcos Talau and Duy Nguyen on NS3.

### 1.4 Benefit

1.  Get an overview of the REDQueue queue simulation.
2.  Can implement queue simulation by yourself.

### 1.5 Scope and Limitation

1.  Using point-to-point IPv4 networks.
2.  On a 10Mbps network.
3.  Using the Linux version of the NS3 simulator.
4.  Uses Droptail and REDQueue provided on NS3.

## Chapter 2 Literature Review

### 2.1 Queue

A simple queue model can be seen as follows:

![Gambar 2.1 Model antrean sederhana.png](https://images.hive.blog/DQmcbAbSiJjhZEHfZu5osrxr3bkCUdKejdu8DATqF2NWWEM/Gambar%202.1%20Model%20antrean%20sederhana.png)

Figure 2.1 Simple queuing model



Figure 2.1 shows the arrival of the customer λ in erlang units, the system provides a maximum waiting room w with each customer having a waiting time of Tw, and there is a waiter s with service time Ts where the level of activity is p. Tr is the average time a customer waits in the system, and r is the number of customers in the system. For calculations, see the following image (Stalling, 1998):

![Gambar 2.2 Perhitungan antrean dasar.png](https://images.hive.blog/DQmfEQRnTLMA7XxyfMyfmPDqvfoDdiGnHSWmhUkT97FYTHb/Gambar%202.2%20Perhitungan%20antrean%20dasar.png)

Figure 2.2 Calculation of the basic queue

![Gambar 2.3 Perhitungan 3 jenis antrean.png](https://images.hive.blog/DQmcynVUvLrUsifH7qYqirt7T9cejdFGeCMvgVy4ja1E9BL/Gambar%202.3%20Perhitungan%203%20jenis%20antrean.png)

Figure 2.3 Calculation of 3 types of queues



### 2.2 Droptail and RED (Random Early Detection) Queue

Droptail uses a basic queue, namely FIFO (first in first out) by discarding packets when the buffer at the node is full, while Random Early Detection instructs a connection to slow down before the buffer is full. The aim of RED is congestion avoidance to avoid congestion rather than to overcome, global synchronization avoidance, avoidance of bias against bursty traffic, and bound on average queue length to maintain the average queue length so that it maintains the average delay. In general, the algorithm from RED is that the average queue length is less than the minimum limit, so the packet will be queued. If the average queue length is between the minimum and maximum limits, there will be a probability of discarding the package. If it is above the maximum, the package will be discarded (Stallings, 1998).

### 2.3 Network Simulator 3

ns-3 is a discrete event network simulator, targeted primarily for research and educational use. ns-3 is free software, licensed under the GNU GPLv2 license, and the public for research, development and use (ns3-project, 2012).

## Chapter 3 Experimental Method

### 3.1 Place and Time of Experiment

The experiment was carried out at home on May 30, 2013.

## 3.2 Tools

<table border="1">Table 3.1 Tools used

<tbody>

<tr>

<th>NO</th>

<th>Tools</th>

<th>Specification</th>

</tr>

<tr>

<td>1</td>

<td>ACER Laptop</td>

<td>Intel® Pentium® dual – core processor T4200 (2.0 GHz, 800 MHz FSB, 1 MB L2 cache) Mobile Intel® Graphics Media Accelerator 4500MHD 1GB DDR2 128 WXGA Acer CrystalBriteTM LCD 250GB HDD Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet Controller Atheros Communications Inc. AR928X Wireless Network Adapter Operating System Linux Backtrack 5 R3</td>

</tr>

<tr>

<td>2</td>

<td>Software</td>

<td>NS3 (Network Simulator 3)</td>

</tr>

</tbody>

</table>

### 3.3 Program

The first program takes an example from John Abraham, namely the comparison of Droptail with RED. The second program is about REDQueue by Marcos Talau and Duy Nguyen.

<pre style="background-color:black; color:lightgreen">
/* -*- Mode:C++; c-file-style:"gnu"; indent-tabs-mode:nil; -*- */
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
 
#include "ns3/core-module.h"
#include "ns3/network-module.h"
#include "ns3/internet-module.h"
#include "ns3/point-to-point-module.h"
#include "ns3/applications-module.h"
#include "ns3/point-to-point-layout-module.h"

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
 std::string appDataRate = "10Mbps";
 std::string queueType = "DropTail";
 uint16_t port = 5001;
 std::string bottleNeckLinkBw = "1Mbps";
 std::string bottleNeckLinkDelay = "50ms";

 CommandLine cmd;
 cmd.AddValue ("nLeaf", "Number of left and right side leaf nodes", nLeaf);
 cmd.AddValue ("maxPackets","Max Packets allowed in the queue", maxPackets);
 cmd.AddValue ("queueType", "Set Queue type to DropTail or RED", queueType);
 cmd.AddValue ("appPktSize", "Set OnOff App Packet Size", pktSize);
 cmd.AddValue ("appDataRate", "Set OnOff App DataRate", appDataRate);
 cmd.AddValue ("modeBytes", "Set Queue mode to Packets <0> or bytes <1>", modeBytes);

 cmd.AddValue ("redMinTh", "RED queue minimum threshold", minTh);
 cmd.AddValue ("redMaxTh", "RED queue maximum threshold", maxTh);
 cmd.Parse (argc,argv);

 if ((queueType != "RED") && (queueType != "DropTail"))
 {
 NS_ABORT_MSG ("Invalid queue type: Use --queueType=RED or --queueType=DropTail");
 }

 Config::SetDefault ("ns3::OnOffApplication::PacketSize", UintegerValue (pktSize));
 Config::SetDefault ("ns3::OnOffApplication::DataRate", StringValue (appDataRate));


 if (!modeBytes)
 {
 Config::SetDefault ("ns3::DropTailQueue::Mode", StringValue ("QUEUE_MODE_PACKETS"));
 Config::SetDefault ("ns3::DropTailQueue::MaxPackets", UintegerValue (maxPackets));
 Config::SetDefault ("ns3::RedQueue::Mode", StringValue ("QUEUE_MODE_PACKETS"));
 Config::SetDefault ("ns3::RedQueue::QueueLimit", UintegerValue (maxPackets));
 }
 else 
 {
 Config::SetDefault ("ns3::DropTailQueue::Mode", StringValue ("QUEUE_MODE_BYTES"));
 Config::SetDefault ("ns3::DropTailQueue::MaxBytes", UintegerValue (maxPackets * pktSize));
 Config::SetDefault ("ns3::RedQueue::Mode", StringValue ("QUEUE_MODE_BYTES"));
 Config::SetDefault ("ns3::RedQueue::QueueLimit", UintegerValue (maxPackets * pktSize));
 minTh *= pktSize; 
 maxTh *= pktSize;
 }

 // Create the point-to-point link helpers
 PointToPointHelper bottleNeckLink;
 bottleNeckLink.SetDeviceAttribute ("DataRate", StringValue (bottleNeckLinkBw));
 bottleNeckLink.SetChannelAttribute ("Delay", StringValue (bottleNeckLinkDelay));
 if (queueType == "RED")
 {
 bottleNeckLink.SetQueue ("ns3::RedQueue",
 "MinTh", DoubleValue (minTh),
 "MaxTh", DoubleValue (maxTh),
 "LinkBandwidth", StringValue (bottleNeckLinkBw),
 "LinkDelay", StringValue (bottleNeckLinkDelay));
 }
 PointToPointHelper pointToPointLeaf;
 pointToPointLeaf.SetDeviceAttribute ("DataRate", StringValue ("10Mbps"));
 pointToPointLeaf.SetChannelAttribute ("Delay", StringValue ("1ms"));

 PointToPointDumbbellHelper d (nLeaf, pointToPointLeaf,
 nLeaf, pointToPointLeaf,
 bottleNeckLink);

 // Install Stack
 InternetStackHelper stack;
 d.InstallStack (stack);

 // Assign IP Addresses
 d.AssignIpv4Addresses (Ipv4AddressHelper ("10.1.1.0", "255.255.255.0"),
 Ipv4AddressHelper ("10.2.1.0", "255.255.255.0"),
 Ipv4AddressHelper ("10.3.1.0", "255.255.255.0"));

 // Install on/off app on all right side nodes
 OnOffHelper clientHelper ("ns3::TcpSocketFactory", Address ());
 clientHelper.SetAttribute ("OnTime", StringValue ("ns3::UniformRandomVariable[Min=0.,Max=1.]"));
 clientHelper.SetAttribute ("OffTime", StringValue ("ns3::UniformRandomVariable[Min=0.,Max=1.]"));
 Address sinkLocalAddress (InetSocketAddress (Ipv4Address::GetAny (), port));
 PacketSinkHelper packetSinkHelper ("ns3::TcpSocketFactory", sinkLocalAddress);
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
 clientHelper.SetAttribute ("Remote", remoteAddress);
 clientApps.Add (clientHelper.Install (d.GetRight (i)));
 }
 clientApps.Start (Seconds (1.0)); // Start 1 second after sink
 clientApps.Stop (Seconds (15.0)); // Stop before the sink

 Ipv4GlobalRoutingHelper::PopulateRoutingTables ();

 std::cout << "Running the simulation" << std::endl;
 Simulator::Run ();

 uint32_t totalRxBytesCounter = 0;
 for (uint32_t i = 0; i < sinkApps.GetN (); i++)
 {
 Ptr <Application> app = sinkApps.Get (i);
 Ptr <PacketSink> pktSink = DynamicCast <PacketSink> (app);
 totalRxBytesCounter += pktSink->GetTotalRx ();
 }
 NS_LOG_UNCOND ("----------------------------\nQueue Type:" 
 << queueType 
 << "\nGoodput Bytes/sec:" 
 << totalRxBytesCounter/Simulator::Now ().GetSeconds ()); 
 NS_LOG_UNCOND ("----------------------------");


 std::cout << "Destroying the simulation" << std::endl;
 Simulator::Destroy ();
 return 0;
}
</pre>

Code 3.1 Droptail_vs_RED.cc Program

<pre style="background-color:black; color:lightgreen">
/* -*- Mode:C++; c-file-style:"gnu"; indent-tabs-mode:nil; -*- */
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

#include "ns3/core-module.h"
#include "ns3/network-module.h"
#include "ns3/internet-module.h"
#include "ns3/flow-monitor-helper.h"
#include "ns3/point-to-point-module.h"
#include "ns3/applications-module.h"

using namespace ns3;

NS_LOG_COMPONENT_DEFINE ("RedTests");

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
 fPlotQueue << Simulator::Now ().GetSeconds () << " " << qSize << std::endl;
 fPlotQueue.close ();

 std::ofstream fPlotQueueAvg (filePlotQueueAvg.str ().c_str (), std::ios::out|std::ios::app);
 fPlotQueueAvg << Simulator::Now ().GetSeconds () << " " << avgQueueSize / checkTimes << std::endl;
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
 PacketSinkHelper sinkHelper ("ns3::TcpSocketFactory", sinkLocalAddress);
 ApplicationContainer sinkApp = sinkHelper.Install (n3n4.Get (1));
 sinkApp.Start (Seconds (sink_start_time));
 sinkApp.Stop (Seconds (sink_stop_time));

 // Connection one
 // Clients are in left side
 /*
 * Create the OnOff applications to send TCP to the server
 * onoffhelper is a client that send data to TCP destination
 */
 OnOffHelper clientHelper1 ("ns3::TcpSocketFactory", Address ());
 clientHelper1.SetAttribute ("OnTime", StringValue ("ns3::ConstantRandomVariable[Constant=1]"));
 clientHelper1.SetAttribute ("OffTime", StringValue ("ns3::ConstantRandomVariable[Constant=0]"));
 clientHelper1.SetAttribute 
 ("DataRate", DataRateValue (DataRate ("10Mb/s")));
 clientHelper1.SetAttribute 
 ("PacketSize", UintegerValue (1000));

 ApplicationContainer clientApps1;
 AddressValue remoteAddress
 (InetSocketAddress (i3i4.GetAddress (1), port));
 clientHelper1.SetAttribute ("Remote", remoteAddress);
 clientApps1.Add (clientHelper1.Install (n0n2.Get (0)));
 clientApps1.Start (Seconds (client_start_time));
 clientApps1.Stop (Seconds (client_stop_time));

 // Connection two
 OnOffHelper clientHelper2 ("ns3::TcpSocketFactory", Address ());
 clientHelper2.SetAttribute ("OnTime", StringValue ("ns3::ConstantRandomVariable[Constant=1]"));
 clientHelper2.SetAttribute ("OffTime", StringValue ("ns3::ConstantRandomVariable[Constant=0]"));
 clientHelper2.SetAttribute 
 ("DataRate", DataRateValue (DataRate ("10Mb/s")));
 clientHelper2.SetAttribute 
 ("PacketSize", UintegerValue (1000));

 ApplicationContainer clientApps2;
 clientHelper2.SetAttribute ("Remote", remoteAddress);
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
 PacketSinkHelper sinkHelper1 ("ns3::TcpSocketFactory", sinkLocalAddress1);
 ApplicationContainer sinkApp1 = sinkHelper1.Install (n3n4.Get (1));
 sinkApp1.Start (Seconds (sink_start_time));
 sinkApp1.Stop (Seconds (sink_stop_time));
 // #2
 uint16_t port2 = 50002;
 Address sinkLocalAddress2 (InetSocketAddress (Ipv4Address::GetAny (), port2));
 PacketSinkHelper sinkHelper2 ("ns3::TcpSocketFactory", sinkLocalAddress2);
 ApplicationContainer sinkApp2 = sinkHelper2.Install (n3n5.Get (1));
 sinkApp2.Start (Seconds (sink_start_time));
 sinkApp2.Stop (Seconds (sink_stop_time));
 // #3
 uint16_t port3 = 50003;
 Address sinkLocalAddress3 (InetSocketAddress (Ipv4Address::GetAny (), port3));
 PacketSinkHelper sinkHelper3 ("ns3::TcpSocketFactory", sinkLocalAddress3);
 ApplicationContainer sinkApp3 = sinkHelper3.Install (n0n2.Get (0));
 sinkApp3.Start (Seconds (sink_start_time));
 sinkApp3.Stop (Seconds (sink_stop_time));
 // #4
 uint16_t port4 = 50004;
 Address sinkLocalAddress4 (InetSocketAddress (Ipv4Address::GetAny (), port4));
 PacketSinkHelper sinkHelper4 ("ns3::TcpSocketFactory", sinkLocalAddress4);
 ApplicationContainer sinkApp4 = sinkHelper4.Install (n1n2.Get (0));
 sinkApp4.Start (Seconds (sink_start_time));
 sinkApp4.Stop (Seconds (sink_stop_time));

 // Connection #1
 /*
 * Create the OnOff applications to send TCP to the server
 * onoffhelper is a client that send data to TCP destination
 */
 OnOffHelper clientHelper1 ("ns3::TcpSocketFactory", Address ());
 clientHelper1.SetAttribute ("OnTime", StringValue ("ns3::ConstantRandomVariable[Constant=1]"));
 clientHelper1.SetAttribute ("OffTime", StringValue ("ns3::ConstantRandomVariable[Constant=0]"));
 clientHelper1.SetAttribute 
 ("DataRate", DataRateValue (DataRate ("10Mb/s")));
 clientHelper1.SetAttribute 
 ("PacketSize", UintegerValue (1000));

 ApplicationContainer clientApps1;
 AddressValue remoteAddress1
 (InetSocketAddress (i3i4.GetAddress (1), port1));
 clientHelper1.SetAttribute ("Remote", remoteAddress1);
 clientApps1.Add (clientHelper1.Install (n0n2.Get (0)));
 clientApps1.Start (Seconds (client_start_time));
 clientApps1.Stop (Seconds (client_stop_time));

 // Connection #2
 OnOffHelper clientHelper2 ("ns3::TcpSocketFactory", Address ());
 clientHelper2.SetAttribute ("OnTime", StringValue ("ns3::ConstantRandomVariable[Constant=1]"));
 clientHelper2.SetAttribute ("OffTime", StringValue ("ns3::ConstantRandomVariable[Constant=0]"));
 clientHelper2.SetAttribute 
 ("DataRate", DataRateValue (DataRate ("10Mb/s")));
 clientHelper2.SetAttribute 
 ("PacketSize", UintegerValue (1000));

 ApplicationContainer clientApps2;
 AddressValue remoteAddress2
 (InetSocketAddress (i3i5.GetAddress (1), port2));
 clientHelper2.SetAttribute ("Remote", remoteAddress2);
 clientApps2.Add (clientHelper2.Install (n1n2.Get (0)));
 clientApps2.Start (Seconds (2.0));
 clientApps2.Stop (Seconds (client_stop_time));

 // Connection #3
 OnOffHelper clientHelper3 ("ns3::TcpSocketFactory", Address ());
 clientHelper3.SetAttribute ("OnTime", StringValue ("ns3::ConstantRandomVariable[Constant=1]"));
 clientHelper3.SetAttribute ("OffTime", StringValue ("ns3::ConstantRandomVariable[Constant=0]"));
 clientHelper3.SetAttribute 
 ("DataRate", DataRateValue (DataRate ("10Mb/s")));
 clientHelper3.SetAttribute 
 ("PacketSize", UintegerValue (1000));

 ApplicationContainer clientApps3;
 AddressValue remoteAddress3
 (InetSocketAddress (i0i2.GetAddress (0), port3));
 clientHelper3.SetAttribute ("Remote", remoteAddress3);
 clientApps3.Add (clientHelper3.Install (n3n4.Get (1)));
 clientApps3.Start (Seconds (3.5));
 clientApps3.Stop (Seconds (client_stop_time));

 // Connection #4
 OnOffHelper clientHelper4 ("ns3::TcpSocketFactory", Address ());
 clientHelper4.SetAttribute ("OnTime", StringValue ("ns3::ConstantRandomVariable[Constant=1]"));
 clientHelper4.SetAttribute ("OffTime", StringValue ("ns3::ConstantRandomVariable[Constant=0]"));
 clientHelper4.SetAttribute 
 ("DataRate", DataRateValue (DataRate ("40b/s")));
 clientHelper4.SetAttribute 
 ("PacketSize", UintegerValue (5 * 8)); // telnet

 ApplicationContainer clientApps4;
 AddressValue remoteAddress4
 (InetSocketAddress (i1i2.GetAddress (0), port4));
 clientHelper4.SetAttribute ("Remote", remoteAddress4);
 clientApps4.Add (clientHelper4.Install (n3n5.Get (1)));
 clientApps4.Start (Seconds (1.0));
 clientApps4.Stop (Seconds (client_stop_time));
 }
}

int
main (int argc, char *argv[])
{
 // LogComponentEnable ("RedExamples", LOG_LEVEL_INFO);
 // LogComponentEnable ("TcpNewReno", LOG_LEVEL_INFO);
 // LogComponentEnable ("RedQueue", LOG_LEVEL_FUNCTION);
 LogComponentEnable ("RedQueue", LOG_LEVEL_INFO);

 uint32_t redTest;
 std::string redLinkDataRate = "1.5Mbps";
 std::string redLinkDelay = "20ms";

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
 client_stop_time = global_stop_time - 2.0;

 // Configuration and command line parameter parsing
 redTest = 1;
 // Will only save in the directory if enable opts below
 pathOut = "."; // Current directory
 CommandLine cmd;
 cmd.AddValue ("testNumber", "Run test 1, 3, 4 or 5", redTest);
 cmd.AddValue ("pathOut", "Path to save results from --writeForPlot/--writePcap/--writeFlowMonitor", pathOut);
 cmd.AddValue ("writeForPlot", "<0/1> to write results for plot (gnuplot)", writeForPlot);
 cmd.AddValue ("writePcap", "<0/1> to write results in pcapfile", writePcap);
 cmd.AddValue ("writeFlowMonitor", "<0/1> to enable Flow Monitor and write their results", flowMonitor);

 cmd.Parse (argc, argv);
 if ( (redTest != 1) && (redTest != 3) && (redTest != 4) && (redTest != 5) )
 {
 NS_ABORT_MSG ("Invalid test number. Supported tests are 1, 3, 4 or 5");
 }

 NS_LOG_INFO ("Create nodes");
 NodeContainer c;
 c.Create (6);
 Names::Add ( "N0", c.Get (0));
 Names::Add ( "N1", c.Get (1));
 Names::Add ( "N2", c.Get (2));
 Names::Add ( "N3", c.Get (3));
 Names::Add ( "N4", c.Get (4));
 Names::Add ( "N5", c.Get (5));
 n0n2 = NodeContainer (c.Get (0), c.Get (2));
 n1n2 = NodeContainer (c.Get (1), c.Get (2));
 n2n3 = NodeContainer (c.Get (2), c.Get (3));
 n3n4 = NodeContainer (c.Get (3), c.Get (4));
 n3n5 = NodeContainer (c.Get (3), c.Get (5));

 Config::SetDefault ("ns3::TcpL4Protocol::SocketType", StringValue ("ns3::TcpReno"));
 // 42 = headers size
 Config::SetDefault ("ns3::TcpSocket::SegmentSize", UintegerValue (1000 - 42));
 Config::SetDefault ("ns3::TcpSocket::DelAckCount", UintegerValue (1));
 GlobalValue::Bind ("ChecksumEnabled", BooleanValue (false));

 uint32_t meanPktSize = 500;

 // RED params
 NS_LOG_INFO ("Set RED params");
 Config::SetDefault ("ns3::RedQueue::Mode", StringValue ("QUEUE_MODE_PACKETS"));
 Config::SetDefault ("ns3::RedQueue::MeanPktSize", UintegerValue (meanPktSize));
 Config::SetDefault ("ns3::RedQueue::Wait", BooleanValue (true));
 Config::SetDefault ("ns3::RedQueue::Gentle", BooleanValue (true));
 Config::SetDefault ("ns3::RedQueue::QW", DoubleValue (0.002));
 Config::SetDefault ("ns3::RedQueue::MinTh", DoubleValue (5));
 Config::SetDefault ("ns3::RedQueue::MaxTh", DoubleValue (15));
 Config::SetDefault ("ns3::RedQueue::QueueLimit", UintegerValue (25));

 if (redTest == 3) // test like 1, but with bad params
 {
 Config::SetDefault ("ns3::RedQueue::MaxTh", DoubleValue (10));
 Config::SetDefault ("ns3::RedQueue::QW", DoubleValue (0.003));
 }
 else if (redTest == 5) // test 5, same of test 4, but in byte mode
 {
 Config::SetDefault ("ns3::RedQueue::Mode", StringValue ("QUEUE_MODE_BYTES"));
 Config::SetDefault ("ns3::RedQueue::Ns1Compat", BooleanValue (true));
 Config::SetDefault ("ns3::RedQueue::MinTh", DoubleValue (5 * meanPktSize));
 Config::SetDefault ("ns3::RedQueue::MaxTh", DoubleValue (15 * meanPktSize));
 Config::SetDefault ("ns3::RedQueue::QueueLimit", UintegerValue (25 * meanPktSize));
 }

 NS_LOG_INFO ("Install internet stack on all nodes.");
 InternetStackHelper internet;
 internet.Install (c);

 NS_LOG_INFO ("Create channels");
 PointToPointHelper p2p;

 p2p.SetQueue ("ns3::DropTailQueue");
 p2p.SetDeviceAttribute ("DataRate", StringValue ("10Mbps"));
 p2p.SetChannelAttribute ("Delay", StringValue ("2ms"));
 NetDeviceContainer devn0n2 = p2p.Install (n0n2);

 p2p.SetQueue ("ns3::DropTailQueue");
 p2p.SetDeviceAttribute ("DataRate", StringValue ("10Mbps"));
 p2p.SetChannelAttribute ("Delay", StringValue ("3ms"));
 NetDeviceContainer devn1n2 = p2p.Install (n1n2);

 p2p.SetQueue ("ns3::RedQueue", // only backbone link has RED queue
 "LinkBandwidth", StringValue (redLinkDataRate),
 "LinkDelay", StringValue (redLinkDelay)); 
 p2p.SetDeviceAttribute ("DataRate", StringValue (redLinkDataRate));
 p2p.SetChannelAttribute ("Delay", StringValue (redLinkDelay));
 NetDeviceContainer devn2n3 = p2p.Install (n2n3);

 p2p.SetQueue ("ns3::DropTailQueue");
 p2p.SetDeviceAttribute ("DataRate", StringValue ("10Mbps"));
 p2p.SetChannelAttribute ("Delay", StringValue ("4ms"));
 NetDeviceContainer devn3n4 = p2p.Install (n3n4);

 p2p.SetQueue ("ns3::DropTailQueue");
 p2p.SetDeviceAttribute ("DataRate", StringValue ("10Mbps"));
 p2p.SetChannelAttribute ("Delay", StringValue ("5ms"));
 NetDeviceContainer devn3n5 = p2p.Install (n3n5);

 NS_LOG_INFO ("Assign IP Addresses");
 Ipv4AddressHelper ipv4;

 ipv4.SetBase ("10.1.1.0", "255.255.255.0");
 i0i2 = ipv4.Assign (devn0n2);

 ipv4.SetBase ("10.1.2.0", "255.255.255.0");
 i1i2 = ipv4.Assign (devn1n2);

 ipv4.SetBase ("10.1.3.0", "255.255.255.0");
 i2i3 = ipv4.Assign (devn2n3);

 ipv4.SetBase ("10.1.4.0", "255.255.255.0");
 i3i4 = ipv4.Assign (devn3n4);

 ipv4.SetBase ("10.1.5.0", "255.255.255.0");
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
 stmp << pathOut << "/red";
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
 filePlotQueue << pathOut << "/" << "red-queue.plotme";
 filePlotQueueAvg << pathOut << "/" << "red-queue_avg.plotme";

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
 stmp << pathOut << "/red.flowmon";

 flowmon->SerializeToXmlFile (stmp.str ().c_str (), false, false);
 }

 if (printRedStats)
 {
 Ptr<PointToPointNetDevice> nd = StaticCast<PointToPointNetDevice> (devn2n3.Get (0));
 RedQueue::Stats st = StaticCast<RedQueue> (nd->GetQueue ())->GetStats ();
 std::cout << "*** RED stats from Node 2 queue ***" << std::endl;
 std::cout << "\t " << st.unforcedDrop << " drops due prob mark" << std::endl;
 std::cout << "\t " << st.forcedDrop << " drops due hard mark" << std::endl;
 std::cout << "\t " << st.qLimDrop << " drops due queue full" << std::endl;

 nd = StaticCast<PointToPointNetDevice> (devn2n3.Get (1));
 st = StaticCast<RedQueue> (nd->GetQueue ())->GetStats ();
 std::cout << "*** RED stats from Node 3 queue ***" << std::endl;
 std::cout << "\t " << st.unforcedDrop << " drops due prob mark" << std::endl;
 std::cout << "\t " << st.forcedDrop << " drops due hard mark" << std::endl;
 std::cout << "\t " << st.qLimDrop << " drops due queue full" << std::endl;
 }

 Simulator::Destroy ();

 return 0;
}
</pre>

Code 3.2 red_tests.cc Program

## Chapter 4 Discussion

### 4.1 Droptail and RED comparison simulation

It can be seen in Figure 4.1 and Figure 4.2 that according to Stallings, 1998, the droptail node will wait until the queue capacity is full before dumping it, so that a large decrease in speed is seen, which is around 300 Kbps at full time.

![Gambar 4.1 Simulasi Droptail.jpg](https://images.hive.blog/DQmYxZ9QKH9B7K3N4xwmypoC2WVLjyhDV2hCscEgvf3XvSZ/Gambar%204.1%20Simulasi%20Droptail.jpg)

Figure 4.1 Droptail Simulation



Meanwhile, in RED there is a preventive effort so that the capacity will not be full so disposal occurs before full capacity. Disposal of packages occurs based on the potential for excess capacity. So that you can see a gradual decrease in speed but not as big as in Droptail, which is around 50 Kbps.

![Gambar 4.2 Simulasi RED.jpg](https://images.hive.blog/DQmev9tksM6sTCgzHwWPuK3ter656QBDqQWe8f3hWMptfwk/Gambar%204.2%20Simulasi%20RED.jpg)

Figure 4.2 RED Simulation



### 4.2 RED simulation on simple topology

First, initialization occurs, namely adjustment with a very large decrease in speed, which is around 1000 Kbps.

![Gambar 4.3 Simulasi RED detil 1.jpg](https://images.hive.blog/DQmbMr7dsftQGPVG2eeswaZP3uYQ9bgEVeDjvvf6nVk4ZLe/Gambar%204.3%20Simulasi%20RED%20detil%201.jpg)

Figure 4.3 Detailed RED Simulation 1



After that, it can be seen in Figure 4.4 that the node tries to keep the capacity from exceeding 25,000 packages by gradually decreasing the speed. In the figure after Figure 4.4 the node decreases speed gradually in terms of the potential for full capacity. According to Stallings, 1998, REDQueue's work is that packets will queue if the average queue capacity does not exceed the minimum limit specified by RED. If the average queue capacity is between the minimum and the maximum limits then disposal occurs based on the probability that full capacity will occur. If the average queue capacity exceeds the maximum limit, a package discard will occur. It can be seen in the next result according to the theory.

![Gambar 4.4 Simulasi RED detil 2.jpg](https://images.hive.blog/DQmfARdPyTr9hkXVeJEfffyuWtsrjw4UtC1p5J55oChAMyv/Gambar%204.4%20Simulasi%20RED%20detil%202.jpg)

Figure 4.4 Detailed RED Simulation 2

![Gambar 4.5 Simulasi RED detil 3.jpg](https://images.hive.blog/DQmRJVYmcjh3NbP6CwziUvhmgWmRSSQPtSuyypcAP1ZGsMT/Gambar%204.5%20Simulasi%20RED%20detil%203.jpg)

Figure 4.5 Detailed RED Simulation 3

![Gambar 4.6 Simulasi RED detil 4.jpg](https://images.hive.blog/DQmRSAZLETDy71ixGN1NPnqZmF6MttKu7ek531Yhr8SybPB/Gambar%204.6%20Simulasi%20RED%20detil%204.jpg)

Figure 4.6 Detailed RED Simulation 4

![Gambar 4.7 Simulasi RED detil 5.jpg](https://images.hive.blog/DQmbnc3nNM2JFUiYsRCRpKiu5Ry7GRGgABBemHBJEVQw1Ay/Gambar%204.7%20Simulasi%20RED%20detil%205.jpg)

Figure 4.7 Detailed RED Simulation 5



## Chapter 5 Closing

### 5.1 Conclusion

Network Simulator 3 can simulate REDQueue and display animation so it's easier to observe. While this simple queue simulation is in accordance with the theory where the animation shows packet dumping in the droptail when the traffic exceeds the capacity which could potentially be negative on the system, whereas in random early detection (RED) the animation shows packet dumping before the traffic exceeds capacity which can reduce the negative potential on the system.

### 5.2 Future Work

This simulation is just a simple experiment. Actually Network Simulator is made to simulate more complicated experiments.

## Bibliography

*   Ns3-project. 2012\. [http://www.nsnam.org](http://www.nsnam.org). Access 27 Mei 2013.
*   Stallings, W. 1998\. High-Speed Networks. Prentice-Hall,inc : New Jersey.