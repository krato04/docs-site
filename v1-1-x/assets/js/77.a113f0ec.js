(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{238:function(e,t,r){"use strict";r.r(t);var s=r(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("The following information contains procedures and tips for meeting z/OSMF requirements. For complete information, go to "),r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3/en/homepage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Knowledge Center"),r("OutboundLink")],1),e._v(" and read the following documents.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/IZUHPINFO_PartConfiguring.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM z/OS Management Facility Configuration Guide"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izu/izu.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM z/OS Management Facility Help"),r("OutboundLink")],1)])]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("Ensure that the z/OS system meets the following requirements:")]),e._v(" "),r("table",[e._m(2),e._v(" "),r("tbody",[e._m(3),e._v(" "),r("tr",[r("td",[e._v("AXR (System REXX)")]),e._v(" "),r("td",[e._v("z/OS uses AXR (System REXX) component to perform Incident Log tasks. The component enables REXX executable files to run outside of conventional TSO and batch environments.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.ieaa800/systemrexx.htm",title:"System REXX",target:"_blank",rel:"noopener noreferrer"}},[e._v("System REXX"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Common Event Adapter (CEA) server")]),e._v(" "),r("td",[e._v("The CEA server, which is a co-requisite of the Common Information Model (CIM) server, enables the ability for z/OSMF to deliver z/OS events to C-language clients.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.e0zb100/custcea.htm",title:"Customizing for CEA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Customizing for CEA"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Common Information Model (CIM) server")]),e._v(" "),r("td",[e._v("z/OSMF uses the CIM server to perform capacity-provisioning and workload-management tasks. Start the CIM server before you start z/OSMF (the IZU* started tasks).")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/IZUHPINFO_AdditionalCIMStepsForZOS.htm",title:"Reviewing your CIM server setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reviewing your CIM server setup"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("CONSOLE and CONSPROF commands")]),e._v(" "),r("td",[e._v("The CONSOLE and CONSPROF commands must exist in the authorized command table.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.ikjb400/consol.htm",title:"Customizing the CONSOLE and CONSPROF commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("Customizing the CONSOLE and CONSPROF commands"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Java level")]),e._v(" "),r("td",[e._v("IBM® 64-bit SDK for z/OS®, Java Technology Edition V8 or later is required.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/IZUHPINFO_SoftwarePrereqs.htm",title:"Software prerequisites for z/OSMF",target:"_blank",rel:"noopener noreferrer"}},[e._v("Software prerequisites for z/OSMF"),r("OutboundLink")],1)])]),e._v(" "),e._m(4),e._v(" "),e._m(5)])]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),r("ol",[e._m(8),e._v(" "),r("li",[r("p",[e._v("Configure z/OSMF.")]),e._v(" "),r("p",[e._v("z/OSMF is a base element of z/OS V2.2 and V2.3, so it is already installed. But it might not be configured and running on every z/OS V2.2 and V2.3 system.")]),e._v(" "),r("p",[e._v("In short, to configure an instance of z/OSMF, run the IBM-supplied jobs IZUSEC and IZUMKFS, and then start the z/OSMF server.\nThe z/OSMF configuration process occurs in three stages, and in the following order:")]),e._v(" "),e._m(9),e._v(" "),r("p",[e._v("This stage sequence is critical to a successful configuration. For complete information about how to configure z/OSMF, see "),r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.2.0/com.ibm.zos.v2r2.izua300/IZUHPINFO_ConfiguringMain.htm",title:"Configuring z/OSMF",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuring z/OSMF for the first time"),r("OutboundLink")],1),e._v(" if you use z/OS V2.2 or "),r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/IZUHPINFO_ConfiguringMain.htm",title:"Setting up z/OSMF for the first time",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setting up z/OSMF for the first time"),r("OutboundLink")],1),e._v(" if V2.3.")])])]),e._v(" "),e._m(10),e._v(" "),r("p",[e._v("The z/OS Operator Consoles task is new in Version 2.3. Applications that depend on access to the operator console such as Zowe CLI's RestConsoles API require Version 2.3.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://docops.ca.com/ca-top-secret-for-z-os/16-0/en/installing/configure-z-os-management-facility-for-ca-top-secret",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configure z/OS Management Facility for CA Technologies Top Secret"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://docops.ca.com/ca-acf2-for-z-os/16-0/en/installing-and-implementing/configure-z-os-management-facility-for-ca-acf2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configure z/OS Management Facility for CA Technologies ACF2"),r("OutboundLink")],1)])])]),e._v(" "),e._m(13),e._v(" "),r("p",[e._v("The Zowe CLI uses z/OSMF Representational State Transfer (REST) APIs to work with system resources and extract system data. Ensure that the following REST services are configured and available.")]),e._v(" "),r("table",[e._m(14),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Cloud provisioning services")]),e._v(" "),e._m(15),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/izuconfig_CloudProvSecuritySetup.htm",title:"Cloud provisioning services",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud provisioning services"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("TSO/E address space services")]),e._v(" "),e._m(16),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/izuprog_API_TSOServices.htm",title:"TSO/E address space services",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSO/E address space services"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("z/OS console services")]),e._v(" "),e._m(17),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/IZUHPINFO_API_RESTCONSOLE.htm",title:"z/OS console",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS console services"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("z/OS data set and file REST interface")]),e._v(" "),e._m(18),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/IZUHPINFO_API_RESTFILES.htm",title:"z/OS data set and file interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS data set and file REST interface"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("z/OS jobs REST interface")]),e._v(" "),e._m(19),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/IZUHPINFO_API_RESTJOBS.htm",title:"z/OS jobs interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS jobs REST interface"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("z/OSMF workflow services")]),e._v(" "),e._m(20),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/izuprog_API_WorkflowServices.htm",title:"z/OSMF workflow services",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OSMF workflow services"),r("OutboundLink")],1)])])])]),e._v(" "),e._m(21),e._v(" "),r("p",[e._v("For more information, see "),r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/IZUHPINFO_RESTServices.htm",title:"Using the z/OSMF REST services",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using the z/OSMF REST services"),r("OutboundLink")],1),e._v(" in IBM z/OSMF documentation.")]),e._v(" "),r("p",[e._v("To verify that z/OSMF REST services are configured correctly in your environment, enter the REST endpoint into your browser. For example: https://mvs.ibm.com:443/zosmf/restjobs/jobs")]),e._v(" "),e._m(22),e._v(" "),e._m(23)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"configuring-z-osmf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-z-osmf","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring z/OSMF")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"z-os-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#z-os-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" z/OS requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Requirements")]),this._v(" "),t("th",[this._v("Description")]),this._v(" "),t("th",[this._v("Resources in IBM Knowledge Center")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[this._v("Integrated Cryptographic Service Facility (ICSF)")]),this._v(" "),t("td",[this._v("On z/OS, Node requires ICSF to be installed, configured and started.")]),this._v(" "),t("td",[this._v("N/A")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[this._v("TSO region size")]),this._v(" "),t("td",[this._v("To prevent "),t("strong",[this._v("exceeds maximum region size")]),this._v(" errors, verify that the TSO maximum region size is a minimum of 65536 KB for the z/OS system.")]),this._v(" "),t("td",[this._v("N/A")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[this._v("User IDs")]),this._v(" "),t("td",[this._v("User IDs require a TSO segment (access) and an OMVS segment. During workflow processing and REST API requests, z/OSMF might start one or more TSO address spaces under the following job names: userid; substr(userid, 1, 6) CN (Console).")]),this._v(" "),t("td",[this._v("N/A")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"configuring-z-osmf-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-z-osmf-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring z/OSMF")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Follow these steps:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("From the console, issue the following command to verify the version of z/OS:")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("/D IPLINFO\n")])])]),t("p",[this._v("Part of the output contains the release, for example,")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("RELEASE z/OS 02.02.00.\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Stage 1 - Security setup")]),this._v(" "),t("li",[this._v("Stage 2 - Configuration")]),this._v(" "),t("li",[this._v("Stage 3 - Server initialization")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" In z/OS V2.3, the base element z/OSMF is started by default at system initial program load (IPL). Therefore, z/OSMF is available for use as soon as you set up the system. If you prefer not to start z/OSMF automatically, disable the autostart function by checking for "),t("code",[this._v("START")]),this._v(" commands for the z/OSMF started procedures in the "),t("em",[this._v("COMMNDxx parmlib")]),this._v(" member.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",{attrs:{start:"3"}},[r("li",[r("p",[e._v("Verify that the z/OSMF server and angel processes are running. From the command line, issue the following command:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("/D A,IZU*\n")])])]),r("p",[e._v("If jobs IZUANG1 and IZUSVR1 are not active, issue the following command to start the angel process:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("/S IZUANG1\n")])])]),r("p",[e._v('After you see the message ""CWWKB0056I INITIALIZATION COMPLETE FOR ANGEL"", issue the following command to start the server:')]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("/S IZUSVR1\n")])])]),r("p",[e._v('The server might take a few minutes to initialize. The z/OSMF server is available when the message ""CWWKF0011I: The server zosmfServer is ready to run a smarter planet."" is displayed.')])]),e._v(" "),r("li",[r("p",[e._v("Issue the following command to find the startup messages in the SDSF log of the z/OSMF server:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("f IZUG349I\n")])])]),r("p",[e._v("You could see a message similar to the following message, which indicates the port number:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("IZUG349I: The z/OSMF STANDALONE Server home page can be accessed at  https://mvs.hursley.ibm.com:443/zosmf after the z/OSMF server is started on your system.\n")])])]),r("p",[e._v("In this example, the port number is 443. You will need this port number later.")]),e._v(" "),r("p",[e._v("Point your browser at the nominated z/OSMF STANDALONE Server home page and you should see its Welcome Page where you can log in.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" If your implementation uses an external security manager other than RACF (for example, CA Technologies, a Broadcom Company, Top Secret or CA Technologies ACF2), you provide equivalent commands for your environment. For more information, see the following product documentation:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"z-osmf-rest-services-for-the-zowe-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#z-osmf-rest-services-for-the-zowe-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" z/OSMF REST services for the Zowe CLI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("z/OSMF REST services")]),this._v(" "),t("th",[this._v("Requirements")]),this._v(" "),t("th",[this._v("Resources in IBM knowledge Center")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("Cloud provisioning services are required for the Zowe CLI CICS and Db2 command groups. Endpoints begin with "),t("code",[this._v("/zosmf/provisioning/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("TSO/E address space services are required to issue TSO commands in the Zowe CLI. Endpoints begin with "),t("code",[this._v("/zosmf/tsoApp")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("z/OS console services are required to issue console commands in the Zowe CLI. Endpoints begin with "),t("code",[this._v("/zosmf/restconsoles/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("z/OS data set and file REST interface is required to work with mainframe data sets and UNIX System Services files in the Zowe CLI. Endpoints begin with "),t("code",[this._v("/zosmf/restfiles/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("z/OS jobs REST interface is required to use the zos-jobs command group in the Zowe CLI. Endpoints begin with "),t("code",[this._v("/zosmf/restjobs/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("z/OSMF workflow services is required to create and manage z/OSMF workflows on a z/OS system. Endpoints begin with "),t("code",[this._v("/zosmf/workflow/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Zowe uses symbolic links to the z/OSMF "),t("code",[this._v("bootstrap.properties")]),this._v(", "),t("code",[this._v("jvm.security.override.properties")]),this._v(", and "),t("code",[this._v("ltpa.keys")]),this._v(" files. Zowe reuses SAF, SSL, and LTPA configurations; therefore, they must be valid and complete.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Notes:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Browsing z/OSMF endpoints requests your user ID and password for defaultRealm; these are your TSO user credentials.")]),this._v(" "),t("li",[this._v("The browser returns the status code 200 and a list of all jobs on the z/OS system. The list is in raw JSON format.")])])}],!1,null,null,null);o.options.__file="systemrequirements-zosmf.md";t.default=o.exports}}]);