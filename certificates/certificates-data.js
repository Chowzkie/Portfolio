// Add a new certificate by adding a new key here — no new HTML file needed.
// The key (e.g. "cert1") is what goes in the URL: certificate.html?id=cert1
const certificatesData = {

  cert1: {
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "January 2024",
    image: "certimg/cert1.png",
    description: "Covers foundational networking concepts including the OSI and TCP/IP models, IP addressing and subnetting, Ethernet fundamentals, and basic configuration of routers and switches.",
    credentialId: "",       // optional — leave blank ("") to hide
    credentialUrl: "",      // optional — leave blank ("") to hide the verify link
  },
  cert2: {
    title: "CCNAv7: Switching, Routing, and Wireless Essential",
    issuer: "Cisco Networking Academy",
    date: "November 2024",
    image: "certimg/cert2.png",
    description: "Focuses on configuring and troubleshooting VLANs, inter-VLAN routing, wireless LANs, and access control lists along with core switching and routing concepts needed to build and secure small to medium-sized networks.",
    credentialId: "",       // optional — leave blank ("") to hide
    credentialUrl: "",      // optional — leave blank ("") to hide the verify link
  },
  cert3: {
    title: "CCNA: Enterprise Networking Security and Automation",
    issuer: "Cisco Networking Academy",
    date: "December 2024",
    image: "certimg/cert3.png",
    description: "Covers advanced enterprise networking topics including WAN technologies and network security concepts",
    credentialId: "",       // optional — leave blank ("") to hide
    credentialUrl: "",      // optional — leave blank ("") to hide the verify link
  },
  cert4: {
    title: "Google IT Support",
    issuer: "Coursera",
    date: "May 2025",
    image: "certimg/cert4.png",
    description: "A comprehensive IT support program covering troubleshooting, customer service, networking, operating systems, system administration, and security fundamentals, designed to build practical, job-ready help desk and technical support skills.",
    credentialId: "",       // optional — leave blank ("") to hide
    credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/ZMB6XJ72TEOI",      // optional — leave blank ("") to hide the verify link
  },
  cert5: {
    title: "Cybesecurity Essential",
    issuer: "Cisco Networking Academy",
    date: "June 2025",
    image: "certimg/cert5.png",
    description: "Covers foundational cybersecurity concepts including threat types, attack methods, and defense strategies. It includes cryptography, network security, endpoint protection, and the principles behind protecting data, devices, and organizations from cyber threats.",
    credentialId: "",       // optional — leave blank ("") to hide
    credentialUrl: "",      // optional — leave blank ("") to hide the verify link
  },

  // Example of a second certificate — duplicate this block and edit to add more.
  // cert2: {
  //   title: "Certificate Title",
  //   issuer: "Issuing Organization",
  //   date: "Month Year",
  //   image: "images/cert2.jpg",
  //   description: "Short description.",
  //   credentialId: "ABC123",
  //   credentialUrl: "https://verify.example.com/ABC123",
  // },

};
