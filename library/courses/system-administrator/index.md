---
layout: blank
title: System Administrator
---

<style>
  :root {
    --primary-color: #004d40;
    --secondary-color: #00796b;
    --bg-color: #f4f7f6;
    --card-bg: #ffffff;
    --text-main: #333333;
    --text-muted: #666666;
    --accent: #ffb300;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-main);
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }
  header {
    background-color: var(--primary-color);
    color: white;
    padding: 2rem 1rem;
    text-align: center;
    border-bottom: 5px solid var(--accent);
  }
  .container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
  .phase-title {
    color: var(--primary-color);
    border-bottom: 2px solid var(--secondary-color);
    padding-bottom: 0.5rem;
    margin-top: 3rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  .card {
    background-color: var(--card-bg);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-left: 4px solid var(--secondary-color);
    transition: transform 0.2s ease;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  }
  .code-tag {
    display: inline-block;
    background-color: #e0f2f1;
    color: var(--secondary-color);
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  h3 {
    margin-top: 0;
    color: var(--primary-color);
    font-size: 1.2rem;
  }
  .explanation {
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-size: 0.95rem;
    border: 1px dashed #ccc;
  }
  .explanation strong {
    color: var(--secondary-color);
  }
</style>

<header>
    <h1>System Administrator Competency Handbook</h1>
    <p>Comprehensive descriptions and explanations for the 25 Core IT Infrastructure Competencies</p>
</header>

<div class="container">

    <h2 class="phase-title"><a href="planning-and-design">Phase 1: Planning & Design</a></h2>
    <div class="grid">
        <div class="card">
            <span class="code-tag">J.63SAM00.001.2</span>
            <h3>Gathering User Requirements</h3>
            <p><strong>Description:</strong> The process of interviewing stakeholders, analyzing business workflows, and determining exactly what the IT system needs to achieve to support the organization.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> This bridges the gap between IT and business. It involves defining metrics like Expected Uptime (SLA), Storage Capacity needs, and Concurrent User counts.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.002.2</span>
            <h3>Identifying System Environment</h3>
            <p><strong>Description:</strong> Selecting the appropriate hardware, software, and cloud technologies that fulfill the user requirements gathered in the previous step.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> <em>Sizing and Compatibility.</em> Choosing between Linux vs. Windows, On-Premise vs. Cloud (AWS/Azure), and calculating necessary CPU/RAM/Disk resources.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.003.2</span>
            <h3>Designing Server Architecture</h3>
            <p><strong>Description:</strong> Creating the technical blueprint of how servers, databases, and networks will connect and interact with each other.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Designing for <em>High Availability (HA)</em> and <em>Redundancy</em>. E.g., placing Web Servers behind a Load Balancer and separating the Database into a protected backend tier.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.004.2</span>
            <h3>Designing Security System</h3>
            <p><strong>Description:</strong> Planning the defense mechanisms for the infrastructure to protect against unauthorized access, data breaches, and service disruptions.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> <em>Defense in Depth.</em> Planning network firewalls, Identity and Access Management (IAM), encryption at rest/transit, and VPN access policies.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.005.1</span>
            <h3>Designing Testing Scenarios</h3>
            <p><strong>Description:</strong> Formulating a plan to stress-test and validate the server environment before it goes live to the public or enterprise.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Includes <em>Load Testing</em> (simulating heavy traffic) and <em>Failover Testing</em> (purposely crashing a primary server to see if the backup takes over).
            </div>
        </div>
    </div>

    <h2 class="phase-title"><a href="installation-and-provisioning">Phase 2: Installation & Provisioning</a></h2>
    <div class="grid">
        <div class="card">
            <span class="code-tag">J.63SAM00.006.1</span>
            <h3>Installing Server Operating System</h3>
            <p><strong>Description:</strong> The deployment of the base OS on physical bare-metal hardware or virtual machines.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Involves disk partitioning (LVM), setting root/admin credentials, and choosing installation types (e.g., GUI vs. Server Core/Headless for better performance).
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.010.1</span>
            <h3>Installing Virtual Server</h3>
            <p><strong>Description:</strong> Setting up hypervisors and creating Virtual Machines (VMs) or containerized environments.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Utilizing Type-1 Hypervisors (VMware ESXi, Proxmox, Hyper-V) to maximize physical hardware efficiency by running multiple isolated servers on one machine.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.007.2</span>
            <h3>Installing Shared Resources</h3>
            <p><strong>Description:</strong> Setting up centralized storage or hardware that multiple servers or users can access simultaneously.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Technologies include NAS (Network Attached Storage), SAN (Storage Area Network), NFS (Network File System) for Linux, and SMB/CIFS for Windows.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.011.2</span>
            <h3>Installing Common Network Services</h3>
            <p><strong>Description:</strong> Deploying the foundational services that allow devices on a network to communicate and find each other.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Core infrastructure services like <em>DNS</em> (domain name resolution), <em>DHCP</em> (automatic IP assignment), and <em>NTP</em> (time synchronization).
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.012.2</span>
            <h3>Installing Common Application Services</h3>
            <p><strong>Description:</strong> Installing the software that actually serves the end-users or clients.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Web Servers (Apache, Nginx, IIS), Database Servers (MySQL, PostgreSQL, SQL Server), and Mail Servers (Postfix, Exchange).
            </div>
        </div>
    </div>

    <h2 class="phase-title"><a href="configuration-and-integration">Phase 3: Configuration & Integration</a></h2>
    <div class="grid">
        <div class="card">
            <span class="code-tag">J.63SAM00.013.1</span>
            <h3>Configuring Server OS</h3>
            <p><strong>Description:</strong> Tuning the operating system post-installation to meet specific performance and policy requirements.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Setting static IP addresses, modifying kernel parameters (sysctl), managing local user groups, and setting up log rotation.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.016.1</span>
            <h3>Configuring Virtual Server</h3>
            <p><strong>Description:</strong> Allocating hardware resources and virtual networks to VMs.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Modifying vCPUs, dynamically allocating RAM, creating virtual switches, and taking VM snapshots.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.014.2</span>
            <h3>Configuring Network Services</h3>
            <p><strong>Description:</strong> Editing the configuration files of network services to dictate how they behave on the network.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Creating DNS Forward/Reverse lookup zones, defining DHCP IP address pools and lease times, and setting NTP stratum servers.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.015.2</span>
            <h3>Configuring Application Services</h3>
            <p><strong>Description:</strong> Optimizing databases and web servers to handle data securely and efficiently.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Setting up Virtual Hosts in Nginx/Apache, configuring SSL/TLS certificates, and tweaking database memory buffers.
            </div>
        </div>
    </div>

    <h2 class="phase-title"><a href="operations-and-security">Phase 4: Operations & Security</a></h2>
    <div class="grid">
        <div class="card">
            <span class="code-tag">J.63SAM00.017.2</span>
            <h3>Creating Program Code (Scripting)</h3>
            <p><strong>Description:</strong> Writing code to automate repetitive administrative tasks and system management.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Using <em>Bash</em> or <em>Python</em> in Linux, and <em>PowerShell</em> in Windows to automate backups, bulk user creation, or log parsing.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.018.2</span>
            <h3>Implementing System Security</h3>
            <p><strong>Description:</strong> Applying the security designs (from Phase 1) directly to the servers.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> <em>Server Hardening.</em> Disabling root SSH login, configuring host-based firewalls (UFW/firewalld), implementing Fail2Ban, and applying SELinux/AppArmor policies.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.008.1</span>
            <h3>Upgrading Server</h3>
            <p><strong>Description:</strong> Keeping the server's software and hardware current to ensure features and security are up to date.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> <em>Patch Management.</em> Safely applying OS updates and security patches without causing application downtime.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.009.1</span>
            <h3>Migrating Server</h3>
            <p><strong>Description:</strong> Moving data, applications, or entire operating systems from one environment to another.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Physical-to-Virtual (P2V) migrations, moving from local data centers to the Cloud, and ensuring zero data loss during transit.
            </div>
        </div>
    </div>

    <h2 class="phase-title"><a href="monitoring-and-maintenance">Phase 5: Monitoring & Maintenance</a></h2>
    <div class="grid">
        <div class="card">
            <span class="code-tag">J.63SAM00.019.1</span>
            <h3>Monitoring System Availability</h3>
            <p><strong>Description:</strong> Ensuring that servers and services are online and responding to requests.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Measuring <em>Uptime</em>. Using tools like Ping, HTTP checks, and software like Uptime Kuma or Nagios to alert admins if a server goes offline.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.020.1</span>
            <h3>Monitoring System Performance</h3>
            <p><strong>Description:</strong> Tracking resource utilization to ensure the system is running efficiently, not just merely "online."</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Monitoring CPU load, RAM usage, and Disk I/O bottlenecks using modern stack tools like Prometheus and Grafana.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.021.2</span>
            <h3>Monitoring System Security</h3>
            <p><strong>Description:</strong> Actively watching for unauthorized access attempts, malware, or unusual network traffic.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> <em>Log Analysis & SIEM.</em> Collecting authentication logs (/var/log/auth.log) and using tools like Wazuh or Splunk to detect anomalies.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.022.1</span>
            <h3>Investigating System Faults</h3>
            <p><strong>Description:</strong> The troubleshooting process used to determine exactly *why* a system failed or degraded.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> <em>Root Cause Analysis (RCA).</em> Tracing errors through system logs (journalctl, Event Viewer) to find the core issue rather than just treating the symptom.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.023.1</span>
            <h3>Repairing System Faults</h3>
            <p><strong>Description:</strong> Taking corrective action to restore normal service operation after a fault is identified.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> Can range from simple service restarts (systemctl restart nginx), to restoring corrupted configuration files, or replacing failed hard drives.
            </div>
        </div>
    </div>

    <h2 class="phase-title"><a href="future-proofing-and-recovery">Phase 6: Future-Proofing & Recovery</a></h2>
    <div class="grid">
        <div class="card">
            <span class="code-tag">J.63SAM00.024.1</span>
            <h3>Evaluating System for Future Dev</h3>
            <p><strong>Description:</strong> Analyzing current system trends to plan for future hardware purchases or architecture redesigns.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> <em>Capacity Planning.</em> Recognizing that storage will run out in 6 months based on current data growth, and budgeting for upgrades in advance.
            </div>
        </div>
        <div class="card">
            <span class="code-tag">J.63SAM00.025.2</span>
            <h3>Performing System Restore</h3>
            <p><strong>Description:</strong> Recovering data, configurations, or entire servers from backup archives following a catastrophic failure.</p>
            <div class="explanation">
                <strong>Key Concept:</strong> <em>Disaster Recovery (DR).</em> Meeting RTO (Recovery Time Objective) and RPO (Recovery Point Objective) by restoring database dumps or full VM snapshots.
            </div>
        </div>
    </div>

</div>