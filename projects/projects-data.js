// Add a new project by adding a new key here — no new HTML file needed.
// The key (e.g. "waterguard") is what goes in the URL: project.html?id=waterguard
const projectsData = {

  waterguard: {
    title: "WaterGuard",
    subtitle: "A real-time IoT water quality monitoring system built for the Capstone project, delivering live sensor readings through a WebSocket-powered dashboard.",
    tags: ["ESP32", "Node.js", "MongoDB", "React", "WebSockets"],
    images: [
      "images/waterguard/img1.jpg",
      "images/waterguard/img2.jpg",
      "images/waterguard/img3.jpg"
    ],
    overview: "WaterGuard is a full-stack IoT application that continuously monitors water safety metrics and streams the data live to a web dashboard. As Capstone Leader, I guided the team through the full development lifecycle from hardware integration to deployment and authored the end-user installation guides and technical documentation.",
    features: [
      "Tracks pH level, Total Dissolved Solids (TDS), turbidity, and temperature using precision sensors",
      "Streams sensor data in real time via an ESP32 microcontroller over WebSockets",
      "Stores and processes readings on a Node.js backend with a MongoDB database",
      "Visualizes live data through a dynamic React dashboard"
    ],
    role: "I led the capstone team end to end. Coordinating development, integrating and testing the sensor hardware, building the real-time data pipeline, and writing the documentation that made the system usable for non-technical end users.",
    links: [
      
    ]
  },

  SOHONetwork: {
    title: "Virtual Small Office Home Office Network",
    subtitle: "A Virtual Small Office Home Office Network created using VMWare ExSI.",
    tags: ["ExSi, VSphere, pfSense, Windows Server 2008 R2, Windows 11 pro"],
    images: [
      "../images/soho/SOHO.png"
    ],
    overview: "This project simulates a small office/home office (SOHO) network environment, built entirely on virtual infrastructure using VMware ESXi. The network is segmented into three VLANs for traffic isolation and security, with a centralized services layer handling authentication, addressing, and file storage all sitting behind a pfSense firewall acting as the network's proxy and security boundary.",
    features: [
        "Deployed and configured VMware ESXi as the virtualization host for all network servers",
        "Set up Active Directory on Windows Server 2008 R2 for centralized user and Organizational Unit management",
        "Configured a DHCP server to automatically assign IP addresses across three separate VLAN subnets",
        "Implemented a DNS server for internal name resolution",
        "Set up a File Server for centralized, access-controlled file storage",
        "Deployed pfSense as a proxy/firewall to secure and filter traffic at the network edge",
        "Segmented the network into three VLANs (10, 20, 30), each on its own /26 subnet with dedicated switch ports and a trunk uplink",
        "Connected Windows 11 Pro client machines to test connectivity, group policy, and DHCP assignment across VLANs"
    ],
    role: "I designed and built the full network topology — from provisioning virtual machines on ESXi to configuring Active Directory, DHCP, DNS, and file services, then securing the network with a pfSense firewall and testing VLAN segmentation and client connectivity end to end.",
    links: [
      
    ]
  },

  // Example of a second project — duplicate this block and edit to add more.
  // exampleproject: {
  //   title: "Project Name",
  //   subtitle: "One or two sentence summary.",
  //   tags: ["Tag1", "Tag2"],
  //   images: ["images/example-1.jpg"],
  //   overview: "Paragraph describing the project.",
  //   features: ["Feature one", "Feature two"],
  //   role: "What you specifically did on this project.",
  //   links: [{ label: "View Repository", url: "#", style: "btn-primary" }]
  // },

};