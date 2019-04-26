(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{225:function(e,t,i){"use strict";i.r(t);var s=i(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("Learn about what is new, changed, removed, and known issues in Zowe.")]),e._v(" "),i("p",[e._v("Zowe Version 1.1.0 and later releases include the following enhancements, release by release.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("Version 1.1.0 contains the following changes since the last 1.0.x version.")]),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("z/OSMF Lite is now available for non-production use such as development, proof-of-concept, demo and so on. It simplifies the setup of z/OSMF with only a minimal amount of z/OS customization, but provides key functions that are required. For more information, see "),i("router-link",{attrs:{to:"./../user-guide/systemrequirements-zosmf-lite.html"}},[e._v("Configuring z/OSMF Lite (for non-production use)")]),e._v(".")],1),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("This release of Zowe CLI contains the following new and improved capabilities:")]),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("This release of the Plug-in for IBM DB2 Database contains the following new and improved capabilities:")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"release-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Release notes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"#version-1-1-0-april-2019"}},[this._v("Version 1.1.0 (April 2019)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"version-1-1-0-april-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-1-1-0-april-2019","aria-hidden":"true"}},[this._v("#")]),this._v(" Version 1.1.0 (April 2019)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"what-s-new-in-zowe-system-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new-in-zowe-system-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" What's new in Zowe system requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"what-s-new-in-the-zowe-app-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new-in-the-zowe-app-server","aria-hidden":"true"}},[this._v("#")]),this._v(" What's new in the Zowe App Server")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Made the following user experience improvements:\n"),i("ul",[i("li",[e._v("Enabled the Desktop to react to session expiration information from the Zowe Application Server. If a user is active the Desktop renews their session before it expires. If a user appears inactive they are prompted  and can click to renew the session. If they don't click, they are logged out with a session expired message.")]),e._v(" "),i("li",[e._v('Added the ability to programmatically dismiss popups created with the "zlux-widgets" popup manager.')])])]),e._v(" "),i("li",[e._v("Made the following security improvements:\n"),i("ul",[i("li",[e._v("Encoded URIs shown in the App Server 404 handler, which prevents  some browsers from loading malicious scripts.")]),e._v(" "),i("li",[e._v("Documented and support configuring HTTPS on ZSS.")]),e._v(" "),i("li",[e._v("For ZSS API callers, added HTTP response headers to instruct clients not to cache HTTPS responses from potentially sensitive APIs.")])])]),e._v(" "),i("li",[e._v("Improved the Zowe Editor App by adding app2app communication support that allows the application to open requested directories, dataset listings, and files.")]),e._v(" "),i("li",[e._v("Improved the Zowe App API by allowing subscription to close events on viewports instead of windows, which allows applications to better support Single App Mode.")]),e._v(" "),i("li",[e._v("Fixed a bug that generated an extraneous RACF audit message when you started ZSS.")]),e._v(" "),i("li",[e._v("Fixed a bug that would sometimes move application windows when you attempted to resized them.")]),e._v(" "),i("li",[e._v('Fixed a bug in the "Getting started with the ZOWE WebUi" tutorial documentation.')]),e._v(" "),i("li",[e._v("Fixed a bug that caused applications that made ZSS service requests to fail with an HTTP 401 error because of dropped session cookies.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"what-s-new-in-the-zowe-cli-and-plug-ins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new-in-the-zowe-cli-and-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" What's new in the Zowe CLI and Plug-ins")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Added APIs to allow the definition of workflows")]),e._v(" "),i("li",[e._v("Added the option "),i("code",[e._v("max-concurrent-requests")]),e._v(" to the "),i("code",[e._v("zowe zos-files upload dir-to-uss")]),e._v(" command")]),e._v(" "),i("li",[e._v("Added the option "),i("code",[e._v("overwrite")]),e._v(" to the "),i("code",[e._v("zowe zos-workflows create")]),e._v(" commands")]),e._v(" "),i("li",[e._v("Added the option "),i("code",[e._v("workflow-name")]),e._v(" to the "),i("code",[e._v("zowe zos-workflows")]),e._v(" commands")]),e._v(" "),i("li",[e._v("Added the following commands along with their APIs:\n"),i("ul",[i("li",[i("code",[e._v("zowe zos-workflows archive active-workflow")])]),e._v(" "),i("li",[i("code",[e._v("zowe zos-workflows create workflow-from-data-set")])]),e._v(" "),i("li",[i("code",[e._v("zowe zos-workflows create workflow-from-uss-file")])]),e._v(" "),i("li",[i("code",[e._v("zowe zos-workflows delete active-workflow")])]),e._v(" "),i("li",[i("code",[e._v("zowe zos-files list uss-files")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Implemented command line precedence, which lets users issue commands without the need of a DB2 profile.")]),this._v(" "),t("li",[this._v("The DB2 plug-in can now be influenced by the "),t("code",[this._v("ZOWE_OPT_")]),this._v(" environment variables.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"what-s-new-in-api-mediation-layer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new-in-api-mediation-layer","aria-hidden":"true"}},[this._v("#")]),this._v(" What's new in API Mediation Layer")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Made the following user experience improvements:\n"),i("ul",[i("li",[e._v("Documented the procedure for changing the log level of individual code components in "),i("em",[e._v("Troubleshooting API ML")]),e._v(".")]),e._v(" "),i("li",[e._v("Documented a known issue when the API ML stops accepting connections after z/OS TCP/IP is recycled in the "),i("em",[e._v("Troubleshooting API ML")]),e._v(".")])])])])}],!1,null,null,null);o.options.__file="summaryofchanges.md";t.default=o.exports}}]);