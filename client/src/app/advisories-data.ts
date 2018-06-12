const ISODate = (date) => date;
const ObjectId = (id) => id;
export const advisories = [
/* 1 */
{
    "_id" : ObjectId("5a845fecc86da389e17084b5"),
    "sourceId" : "20151120",
    "module" : "cordova-android",
    "pubDate" : ISODate("2017-06-21T14:07:49.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : " Weak Randomization of BridgeSecret in cordova-android",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:cordova-android:20151120",
    "source" : "snyk"
},

/* 2 */
{
    "_id" : ObjectId("5a845fecc86da389e1708727"),
    "sourceId" : "20130307",
    "module" : "tomato",
    "pubDate" : ISODate("2013-03-07T19:52:30.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "API Admin Auth Weakness in tomato",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:tomato:20130307",
    "source" : "snyk"
},

/* 3 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbfd"),
    "sourceId" : "20180222",
    "module" : "npm",
    "pubDate" : ISODate("2018-03-21T09:26:19.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "Access Restriction Bypass in npm",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:npm:20180222",
    "source" : "snyk"
},

/* 4 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c10"),
    "url" : "https://snyk.io/vuln/npm:gifsicle:20170810",
    "severity" : "high",
    "title" : "Arbitrary Code Execution",
    "module" : "gifsicle",
    "sourceId" : "20170810",
    "pubDate" : ISODate("2018-02-21T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Injection Attack"
},

/* 5 */
{
    "_id" : ObjectId("5a845fecc86da389e17084b6"),
    "sourceId" : "20151120-1",
    "module" : "cordova-android",
    "pubDate" : ISODate("2017-06-21T14:07:49.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Execution in cordova-android",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:cordova-android:20151120-1",
    "source" : "snyk"
},

/* 6 */
{
    "_id" : ObjectId("5a845fecc86da389e17083e4"),
    "sourceId" : "20170527",
    "module" : "mathjs",
    "pubDate" : ISODate("2018-01-28T11:12:08.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Execution in mathjs",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mathjs:20170527",
    "source" : "snyk"
},

/* 7 */
{
    "_id" : ObjectId("5a845fecc86da389e1708416"),
    "sourceId" : "20171118",
    "module" : "mathjs",
    "pubDate" : ISODate("2017-11-28T14:47:22.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Execution in mathjs",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mathjs:20171118",
    "source" : "snyk"
},

/* 8 */
{
    "_id" : ObjectId("5a845fecc86da389e1708580"),
    "sourceId" : "20161120",
    "module" : "nodebb",
    "pubDate" : ISODate("2017-04-03T10:38:24.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Execution in nodebb",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:nodebb:20161120",
    "source" : "snyk"
},

/* 9 */
{
    "_id" : ObjectId("5a845fecc86da389e170859f"),
    "sourceId" : "20160916",
    "module" : "quill",
    "pubDate" : ISODate("2017-02-28T08:40:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Execution in quill",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:quill:20160916",
    "source" : "snyk"
},

/* 10 */
{
    "_id" : ObjectId("5a845fecc86da389e170841c"),
    "sourceId" : "20160821",
    "module" : "sandbox",
    "pubDate" : ISODate("2017-11-07T15:27:55.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Execution in sandbox",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sandbox:20160821",
    "source" : "snyk"
},

/* 11 */
{
    "_id" : ObjectId("5a845fecc86da389e1708422"),
    "sourceId" : "20171016",
    "module" : "static-eval",
    "pubDate" : ISODate("2017-10-18T11:05:41.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Execution in static-eval",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:static-eval:20171016",
    "source" : "snyk"
},

/* 12 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758bd"),
    "sourceId" : 317,
    "module" : "mobile-icon-resizer",
    "pubDate" : ISODate("2018-01-15T18:13:27.024Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection",
    "severity" : "critical",
    "url" : "https://nodesecurity.io/advisories/317",
    "source" : "nsp"
},

/* 13 */
{
    "_id" : ObjectId("5a845fecc86da389e1708554"),
    "sourceId" : "20160721",
    "module" : "growl",
    "pubDate" : ISODate("2017-05-01T08:50:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in growl",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:growl:20160721",
    "source" : "snyk"
},

/* 14 */
{
    "_id" : ObjectId("5a845fecc86da389e170855b"),
    "sourceId" : "20160407",
    "module" : "kmc",
    "pubDate" : ISODate("2017-05-01T08:00:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in kmc",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:kmc:20160407",
    "source" : "snyk"
},

/* 15 */
{
    "_id" : ObjectId("5a845fecc86da389e1708565"),
    "sourceId" : "20160408",
    "module" : "m-log",
    "pubDate" : ISODate("2017-05-01T07:25:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in m-log",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:m-log:20160408",
    "source" : "snyk"
},

/* 16 */
{
    "_id" : ObjectId("5a845fecc86da389e1708566"),
    "sourceId" : "20160408",
    "module" : "m2m-supervisor",
    "pubDate" : ISODate("2017-05-01T07:20:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in m2m-supervisor",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:m2m-supervisor:20160408",
    "source" : "snyk"
},

/* 17 */
{
    "_id" : ObjectId("5a845fecc86da389e1708559"),
    "sourceId" : "20160408",
    "module" : "microservicebus.node",
    "pubDate" : ISODate("2017-05-01T08:04:16.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in microservicebus.node",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:microservicebus.node:20160408",
    "source" : "snyk"
},

/* 18 */
{
    "_id" : ObjectId("5a845fecc86da389e1708568"),
    "sourceId" : "20160407",
    "module" : "mixin-pro",
    "pubDate" : ISODate("2017-05-01T06:40:59.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in mixin-pro",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mixin-pro:20160407",
    "source" : "snyk"
},

/* 19 */
{
    "_id" : ObjectId("5a845fecc86da389e1708567"),
    "sourceId" : "20160408",
    "module" : "mobile-icon-resizer",
    "pubDate" : ISODate("2017-05-01T06:47:16.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in mobile-icon-resizer",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mobile-icon-resizer:20160408",
    "source" : "snyk"
},

/* 20 */
{
    "_id" : ObjectId("5a845fecc86da389e170855e"),
    "sourceId" : "20160408",
    "module" : "mock2easy",
    "pubDate" : ISODate("2017-05-01T07:50:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in mock2easy",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mock2easy:20160408",
    "source" : "snyk"
},

/* 21 */
{
    "_id" : ObjectId("5a845fecc86da389e1708564"),
    "sourceId" : "20160407",
    "module" : "modjs",
    "pubDate" : ISODate("2017-05-01T07:25:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in modjs",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:modjs:20160407",
    "source" : "snyk"
},

/* 22 */
{
    "_id" : ObjectId("5a845fecc86da389e1708563"),
    "sourceId" : "20160407",
    "module" : "modulify",
    "pubDate" : ISODate("2017-05-01T07:25:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in modulify",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:modulify:20160407",
    "source" : "snyk"
},

/* 23 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbf3"),
    "sourceId" : "20160407",
    "module" : "mol-proto",
    "pubDate" : ISODate("2018-04-08T12:56:16.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in mol-proto",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mol-proto:20160407",
    "source" : "snyk"
},

/* 24 */
{
    "_id" : ObjectId("5a845fecc86da389e170855c"),
    "sourceId" : "20160408",
    "module" : "mongo-edit",
    "pubDate" : ISODate("2017-05-01T08:00:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in mongo-edit",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mongo-edit:20160408",
    "source" : "snyk"
},

/* 25 */
{
    "_id" : ObjectId("5a845fecc86da389e170855a"),
    "sourceId" : "20160408",
    "module" : "mongo-parse",
    "pubDate" : ISODate("2017-05-01T08:02:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in mongo-parse",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mongo-parse:20160408",
    "source" : "snyk"
},

/* 26 */
{
    "_id" : ObjectId("5a845fecc86da389e170855f"),
    "sourceId" : "20160408",
    "module" : "mongoosemask",
    "pubDate" : ISODate("2017-05-01T07:45:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in mongoosemask",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mongoosemask:20160408",
    "source" : "snyk"
},

/* 27 */
{
    "_id" : ObjectId("5a845fecc86da389e1708560"),
    "sourceId" : "20160408",
    "module" : "mongoosify",
    "pubDate" : ISODate("2017-05-01T07:40:16.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in mongoosify",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mongoosify:20160408",
    "source" : "snyk"
},

/* 28 */
{
    "_id" : ObjectId("5a845fecc86da389e170855d"),
    "sourceId" : "20160408",
    "module" : "mongui",
    "pubDate" : ISODate("2017-05-01T07:55:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in mongui",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mongui:20160408",
    "source" : "snyk"
},

/* 29 */
{
    "_id" : ObjectId("5a845fecc86da389e1708562"),
    "sourceId" : "20160408",
    "module" : "nameless-cli",
    "pubDate" : ISODate("2017-05-01T07:25:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in nameless-cli",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:nameless-cli:20160408",
    "source" : "snyk"
},

/* 30 */
{
    "_id" : ObjectId("5a845fecc86da389e1708561"),
    "sourceId" : "20160408",
    "module" : "nd-validator",
    "pubDate" : ISODate("2017-05-01T07:25:31.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in nd-validator",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:nd-validator:20160408",
    "source" : "snyk"
},

/* 31 */
{
    "_id" : ObjectId("5a845fecc86da389e170868f"),
    "sourceId" : "20160830",
    "module" : "pouchdb",
    "pubDate" : ISODate("2016-10-17T00:00:00.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in pouchdb",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:pouchdb:20160830",
    "source" : "snyk"
},

/* 32 */
{
    "_id" : ObjectId("5a845fecc86da389e1708558"),
    "sourceId" : "20160407",
    "module" : "protojs",
    "pubDate" : ISODate("2017-05-01T08:05:16.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in protojs",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:protojs:20160407",
    "source" : "snyk"
},

/* 33 */
{
    "_id" : ObjectId("5a845fecc86da389e1708691"),
    "sourceId" : "20160913",
    "module" : "reduce-css-calc",
    "pubDate" : ISODate("2016-10-17T00:00:00.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Code Injection in reduce-css-calc",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:reduce-css-calc:20160913",
    "source" : "snyk"
},

/* 34 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c2d"),
    "url" : "https://snyk.io/vuln/npm:pullit:20180214",
    "severity" : "high",
    "title" : "Arbitrary Command Execution",
    "module" : "pullit",
    "sourceId" : "20180214",
    "pubDate" : ISODate("2018-02-14T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Injection Attack"
},

/* 35 */
{
    "_id" : ObjectId("5a845fecc86da389e17085d5"),
    "sourceId" : "20150821",
    "module" : "clamscan",
    "pubDate" : ISODate("2017-01-18T14:00:00.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Command Execution in clamscan",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:clamscan:20150821",
    "source" : "snyk"
},

/* 36 */
{
    "_id" : ObjectId("5a845fecc86da389e1708541"),
    "sourceId" : "20170417",
    "module" : "windows-cpu",
    "pubDate" : ISODate("2017-05-19T15:05:56.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Command Execution in windows-cpu",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:windows-cpu:20170417",
    "source" : "snyk"
},

/* 37 */
{
    "_id" : ObjectId("5a845fecc86da389e170870e"),
    "sourceId" : "20141111",
    "module" : "dns-sync",
    "pubDate" : ISODate("2014-11-11T17:33:48.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Command Injection in dns-sync",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:dns-sync:20141111",
    "source" : "snyk"
},

/* 38 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbf8"),
    "sourceId" : "20180401",
    "module" : "whereis",
    "pubDate" : ISODate("2018-04-02T06:53:40.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Command Injection in whereis",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:whereis:20180401",
    "source" : "snyk"
},

/* 39 */
{
    "_id" : ObjectId("5a845fecc86da389e170858c"),
    "sourceId" : "20160710",
    "module" : "youtransfer",
    "pubDate" : ISODate("2017-03-13T08:00:23.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Arbitrary File Upload in youtransfer",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:youtransfer:20160710",
    "source" : "snyk"
},

/* 40 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a67"),
    "sourceId" : 95,
    "module" : "cli",
    "pubDate" : ISODate("2016-06-15T23:22:22.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Arbitrary File Write",
    "severity" : "low",
    "url" : "https://nodesecurity.io/advisories/95",
    "source" : "nsp"
},

/* 41 */
{
    "_id" : ObjectId("5a845fecc86da389e17084c7"),
    "sourceId" : "20170511",
    "module" : "connect-parse-php",
    "pubDate" : ISODate("2017-06-07T12:36:58.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Arbitrary File Write in connect-parse-php",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:connect-parse-php:20170511",
    "source" : "snyk"
},

/* 42 */
{
    "_id" : ObjectId("5a845fecc86da389e17084c5"),
    "sourceId" : "20170511",
    "module" : "frvr",
    "pubDate" : ISODate("2017-06-07T12:36:59.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Arbitrary File Write in frvr",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:frvr:20170511",
    "source" : "snyk"
},

/* 43 */
{
    "_id" : ObjectId("5a845fecc86da389e17084c6"),
    "sourceId" : "20170518",
    "module" : "innomon",
    "pubDate" : ISODate("2017-06-07T12:36:58.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Arbitrary File Write in innomon",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:innomon:20170518",
    "source" : "snyk"
},

/* 44 */
{
    "_id" : ObjectId("5a845fecc86da389e17084dc"),
    "sourceId" : "20170510",
    "module" : "lam",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Arbitrary File Write in lam",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:lam:20170510",
    "source" : "snyk"
},

/* 45 */
{
    "_id" : ObjectId("5a845fecc86da389e17084c9"),
    "sourceId" : "20170510",
    "module" : "mysql2csv",
    "pubDate" : ISODate("2017-06-07T12:36:58.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Arbitrary File Write in mysql2csv",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mysql2csv:20170510",
    "source" : "snyk"
},

/* 46 */
{
    "_id" : ObjectId("5a845fecc86da389e17084e0"),
    "sourceId" : "20170518",
    "module" : "parse-ssi",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Arbitrary File Write in parse-ssi",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:parse-ssi:20170518",
    "source" : "snyk"
},

/* 47 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc12"),
    "sourceId" : "20170510",
    "module" : "terminal-share",
    "pubDate" : ISODate("2018-03-15T15:30:10.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Arbitrary File Write in terminal-share",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:terminal-share:20170510",
    "source" : "snyk"
},

/* 48 */
{
    "_id" : ObjectId("5a845fecc86da389e17084d4"),
    "sourceId" : "20170509",
    "module" : "thrushs",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Arbitrary File Write in thrushs",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:thrushs:20170509",
    "source" : "snyk"
},

/* 49 */
{
    "_id" : ObjectId("5a845fecc86da389e17084d3"),
    "sourceId" : "20170509",
    "module" : "wisper",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Arbitrary File Write in wisper",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:wisper:20170509",
    "source" : "snyk"
},

/* 50 */
{
    "_id" : ObjectId("5a845fecc86da389e1708710"),
    "sourceId" : "20140927",
    "module" : "bassmaster",
    "pubDate" : ISODate("2014-09-27T05:44:48.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary JavaScript Code Injection in bassmaster",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:bassmaster:20140927",
    "source" : "snyk"
},

/* 51 */
{
    "_id" : ObjectId("5a845fecc86da389e17085cf"),
    "sourceId" : "20130625",
    "module" : "angular",
    "pubDate" : ISODate("2017-01-23T10:20:00.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary Script Injection in angular",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:angular:20130625",
    "source" : "snyk"
},

/* 52 */
{
    "_id" : ObjectId("5a845fecc86da389e17084b4"),
    "sourceId" : "20141024",
    "module" : "cordova-ios",
    "pubDate" : ISODate("2017-06-21T14:07:49.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Arbitrary execution in cordova-ios",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:cordova-ios:20141024",
    "source" : "snyk"
},

/* 53 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b86"),
    "url" : "https://snyk.io/vuln/npm:loopback:20171027",
    "severity" : "medium",
    "title" : "Authentication Bypass",
    "module" : "loopback",
    "sourceId" : "20171027",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Broken Access Control"
},

/* 54 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a6e"),
    "sourceId" : 90,
    "module" : "console-io",
    "pubDate" : ISODate("2016-04-18T21:17:58.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "Authentication Bypass",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/90",
    "source" : "nsp"
},

/* 55 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a78"),
    "sourceId" : 81,
    "module" : "hapi-auth-jwt2",
    "pubDate" : ISODate("2016-01-28T07:56:52.379Z"),
    "attackType" : "Broken Access Control",
    "title" : "Authentication Bypass in Try Mode",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/81",
    "source" : "nsp"
},

/* 56 */
{
    "_id" : ObjectId("5a845fecc86da389e17084b0"),
    "sourceId" : "20150213",
    "module" : "crumb",
    "pubDate" : ISODate("2017-06-21T14:07:50.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "Authentication Bypass in crumb",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:crumb:20150213",
    "source" : "snyk"
},

/* 57 */
{
    "_id" : ObjectId("5a845fecc86da389e170853b"),
    "sourceId" : "20150303-4",
    "module" : "ghost",
    "pubDate" : ISODate("2017-05-30T09:56:36.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "Authentication Bypass in ghost",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ghost:20150303-4",
    "source" : "snyk"
},

/* 58 */
{
    "_id" : ObjectId("5a845fecc86da389e1708688"),
    "sourceId" : "20150531",
    "module" : "jsjws",
    "pubDate" : ISODate("2016-10-20T18:30:00.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "Authentication Bypass in jsjws",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:jsjws:20150531",
    "source" : "snyk"
},

/* 59 */
{
    "_id" : ObjectId("5a845fecc86da389e1708702"),
    "sourceId" : "20150331",
    "module" : "jsonwebtoken",
    "pubDate" : ISODate("2015-03-31T16:00:00.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Authentication Bypass in jsonwebtoken",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:jsonwebtoken:20150331",
    "source" : "snyk"
},

/* 60 */
{
    "_id" : ObjectId("5a845fecc86da389e17083e1"),
    "sourceId" : "20170425",
    "module" : "keycloak-auth-utils",
    "pubDate" : ISODate("2018-01-31T15:47:55.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "Authentication Bypass in keycloak-auth-utils",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:keycloak-auth-utils:20170425",
    "source" : "snyk"
},

/* 61 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a89"),
    "sourceId" : 60,
    "module" : "keystone",
    "pubDate" : ISODate("2015-12-04T17:52:25.832Z"),
    "attackType" : "Broken Access Control",
    "title" : "Authentication Weakness",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/60",
    "source" : "nsp"
},

/* 62 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a3b"),
    "sourceId" : 151,
    "module" : "passport-azure-ad",
    "pubDate" : ISODate("2016-12-06T01:10:10.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "Authentication bypass",
    "severity" : "critical",
    "url" : "https://nodesecurity.io/advisories/151",
    "source" : "nsp"
},

/* 63 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758b2"),
    "sourceId" : 567,
    "module" : "saml2-js",
    "pubDate" : ISODate("2018-02-27T22:32:52.317Z"),
    "attackType" : "Broken Access Control",
    "title" : "Authentication bypass via incorrect XML canonicalization and DOM traversal",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/567",
    "source" : "nsp"
},

/* 64 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a77"),
    "sourceId" : 85,
    "module" : "grunt-gh-pages",
    "pubDate" : ISODate("2016-03-16T16:29:31.778Z"),
    "attackType" : "Broken Access Control",
    "title" : "Authentication credentails logged in clear text",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/85",
    "source" : "nsp"
},

/* 65 */
{
    "_id" : ObjectId("5a845fecc86da389e17084b3"),
    "sourceId" : "20141029",
    "module" : "cordova-ios",
    "pubDate" : ISODate("2017-06-21T14:07:50.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "Authorization Bypass in cordova-ios",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:cordova-ios:20141029",
    "source" : "snyk"
},

/* 66 */
{
    "_id" : ObjectId("5a845fecc86da389e170868d"),
    "sourceId" : "20161013",
    "module" : "sails",
    "pubDate" : ISODate("2016-10-20T00:00:00.000Z"),
    "attackType" : "Security Misconfiguration",
    "title" : "Broken CORS in sails",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sails:20161013",
    "source" : "snyk"
},

/* 67 */
{
    "_id" : ObjectId("5a845fecc86da389e1708715"),
    "sourceId" : "20140801",
    "module" : "crumb",
    "pubDate" : ISODate("2014-08-01T06:40:57.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "CORS Token Disclosure in crumb",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:crumb:20140801",
    "source" : "snyk"
},

/* 68 */
{
    "_id" : ObjectId("5a845fecc86da389e17084b1"),
    "sourceId" : "20150826",
    "module" : "cordova-plugin-file-transfer",
    "pubDate" : ISODate("2017-06-21T14:07:50.000Z"),
    "attackType" : "Injection Attack",
    "title" : "CRLF Injection in cordova-plugin-file-transfer",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:cordova-plugin-file-transfer:20150826",
    "source" : "snyk"
},

/* 69 */
{
    "_id" : ObjectId("5a845fecc86da389e1708690"),
    "sourceId" : "20160808-1",
    "module" : "plotly.js",
    "pubDate" : ISODate("2016-10-17T00:00:00.000Z"),
    "attackType" : "Injection Attack",
    "title" : "CSS Injection in plotly.js",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:plotly.js:20160808-1",
    "source" : "snyk"
},

/* 70 */
{
    "_id" : ObjectId("5a845fecc86da389e170841e"),
    "sourceId" : "20170918-2",
    "module" : "keystone",
    "pubDate" : ISODate("2017-11-05T13:55:23.000Z"),
    "attackType" : "Injection Attack",
    "title" : "CSV Injection in keystone",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:keystone:20170918-2",
    "source" : "snyk"
},

/* 71 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475917"),
    "sourceId" : 539,
    "module" : "electron",
    "pubDate" : ISODate("2017-09-28T15:50:14.310Z"),
    "attackType" : "Injection Attack",
    "title" : "Chromium Remote Code Execution",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/539",
    "source" : "nsp"
},

/* 72 */
{
    "_id" : ObjectId("5a845fecc86da389e17085c7"),
    "sourceId" : "20150807-1",
    "module" : "angular",
    "pubDate" : ISODate("2017-01-23T11:50:00.000Z"),
    "attackType" : "Clickjacking",
    "title" : "Clickjacking in angular",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:angular:20150807-1",
    "source" : "snyk"
},

/* 73 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759ad"),
    "sourceId" : 313,
    "module" : "serialize-to-js",
    "pubDate" : ISODate("2017-02-10T19:01:20.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Code Execution Through IIFE",
    "severity" : "critical",
    "url" : "https://nodesecurity.io/advisories/313",
    "source" : "nsp"
},

/* 74 */
{
    "_id" : ObjectId("5a845fecc86da389e1708723"),
    "sourceId" : "20130623",
    "module" : "js-yaml",
    "pubDate" : ISODate("2013-06-23T19:23:50.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Code Execution due to Deserialization in js-yaml",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:js-yaml:20130623",
    "source" : "snyk"
},

/* 75 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759ae"),
    "sourceId" : 311,
    "module" : "node-serialize",
    "pubDate" : ISODate("2017-02-09T16:38:36.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Code Execution through IIFE",
    "severity" : "critical",
    "url" : "https://nodesecurity.io/advisories/311",
    "source" : "nsp"
},

/* 76 */
{
    "_id" : ObjectId("5a845fecc86da389e170869e"),
    "sourceId" : "20160819",
    "module" : "crossbow-lang",
    "pubDate" : ISODate("2016-09-18T00:00:00.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Code Injection in crossbow-lang",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:crossbow-lang:20160819",
    "source" : "snyk"
},

/* 77 */
{
    "_id" : ObjectId("5a845fecc86da389e170869f"),
    "sourceId" : "20160819",
    "module" : "dustjs-linkedin",
    "pubDate" : ISODate("2016-09-14T00:00:00.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Code Injection in dustjs-linkedin",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:dustjs-linkedin:20160819",
    "source" : "snyk"
},

/* 78 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475957"),
    "sourceId" : 360,
    "module" : "fs-git",
    "pubDate" : ISODate("2017-08-29T16:47:06.975Z"),
    "attackType" : "Injection Attack",
    "title" : "Command Injection",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/360",
    "source" : "nsp"
},

/* 79 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647598c"),
    "sourceId" : 356,
    "module" : "pidusage",
    "pubDate" : ISODate("2017-06-05T12:29:13.017Z"),
    "attackType" : "Injection Attack",
    "title" : "Command Injection",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/356",
    "source" : "nsp"
},

/* 80 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647599f"),
    "sourceId" : 153,
    "module" : "dns-sync",
    "pubDate" : ISODate("2017-04-11T23:30:26.191Z"),
    "attackType" : "Injection Attack",
    "title" : "Command Injection",
    "severity" : "critical",
    "url" : "https://nodesecurity.io/advisories/153",
    "source" : "nsp"
},

/* 81 */
{
    "_id" : ObjectId("5a845fecc86da389e170871a"),
    "sourceId" : "20140306",
    "module" : "printer",
    "pubDate" : ISODate("2014-03-06T07:33:48.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Command Injection due to untrusted input in printer",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:printer:20140306",
    "source" : "snyk"
},

/* 82 */
{
    "_id" : ObjectId("5a845fecc86da389e1708725"),
    "sourceId" : "20130515",
    "module" : "hubot-scripts",
    "pubDate" : ISODate("2013-05-15T19:14:38.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Command Injection in email.coffee in hubot-scripts",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:hubot-scripts:20130515",
    "source" : "snyk"
},

/* 83 */
{
    "_id" : ObjectId("5a845fecc86da389e1708720"),
    "sourceId" : "20130707",
    "module" : "codem-transcode",
    "pubDate" : ISODate("2013-07-07T06:33:48.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Command Injection in ffprobe in codem-transcode",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:codem-transcode:20130707",
    "source" : "snyk"
},

/* 84 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a8d"),
    "sourceId" : 54,
    "module" : "gm",
    "pubDate" : ISODate("2015-10-26T20:12:18.990Z"),
    "attackType" : "Injection Attack",
    "title" : "Command Injection in gm.compare function",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/54",
    "source" : "nsp"
},

/* 85 */
{
    "_id" : ObjectId("5a845fecc86da389e17085a5"),
    "sourceId" : "20140723",
    "module" : "shelljs",
    "pubDate" : ISODate("2017-02-13T15:39:20.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Command Injection in shelljs",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:shelljs:20140723",
    "source" : "snyk"
},

/* 86 */
{
    "_id" : ObjectId("5a845fecc86da389e1708704"),
    "sourceId" : "20150122",
    "module" : "ungit",
    "pubDate" : ISODate("2015-01-22T07:33:48.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Command Injection in ungit",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ungit:20150122",
    "source" : "snyk"
},

/* 87 */
{
    "_id" : ObjectId("5a845fecc86da389e17086a0"),
    "sourceId" : "20160906",
    "module" : "nunjucks",
    "pubDate" : ISODate("2016-09-09T22:59:30.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Content & Code Injection (XSS) in nunjucks",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nunjucks:20160906",
    "source" : "snyk"
},

/* 88 */
{
    "_id" : ObjectId("5a845fecc86da389e170870c"),
    "sourceId" : "20141113",
    "module" : "remarkable",
    "pubDate" : ISODate("2014-11-13T10:33:48.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Content Injection in remarkable",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:remarkable:20141113",
    "source" : "snyk"
},

/* 89 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a7e"),
    "sourceId" : 74,
    "module" : "mapbox.js",
    "pubDate" : ISODate("2016-01-12T23:35:56.853Z"),
    "attackType" : "Injection Attack",
    "title" : "Content Injection via TileJSON Name",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/74",
    "source" : "nsp"
},

/* 90 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a91"),
    "sourceId" : 49,
    "module" : "mapbox.js",
    "pubDate" : ISODate("2015-10-24T21:00:40.189Z"),
    "attackType" : "Injection Attack",
    "title" : "Content Injection via TileJSON attribute",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/49",
    "source" : "nsp"
},

/* 91 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647599b"),
    "sourceId" : 159,
    "module" : "gitbook",
    "pubDate" : ISODate("2017-04-14T18:31:32.771Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross Site Scripting",
    "severity" : "low",
    "url" : "https://nodesecurity.io/advisories/159",
    "source" : "nsp"
},

/* 92 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647599e"),
    "sourceId" : 154,
    "module" : "sanitize-html",
    "pubDate" : ISODate("2017-04-11T23:49:58.283Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross Site Scripting",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/154",
    "source" : "nsp"
},

/* 93 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a68"),
    "sourceId" : 108,
    "module" : "backbone",
    "pubDate" : ISODate("2016-05-23T17:50:20.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross Site Scripting",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/108",
    "source" : "nsp"
},

/* 94 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a69"),
    "sourceId" : 107,
    "module" : "dojo",
    "pubDate" : ISODate("2016-05-23T16:48:27.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross Site Scripting",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/107",
    "source" : "nsp"
},

/* 95 */
{
    "_id" : ObjectId("5a845fecc86da389e17084b7"),
    "sourceId" : "20140804",
    "module" : "cordova-android",
    "pubDate" : ISODate("2017-06-21T14:07:49.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-Application Scripting in cordova-android",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:cordova-android:20140804",
    "source" : "snyk"
},

/* 96 */
{
    "_id" : ObjectId("5a845fecc86da389e170854f"),
    "sourceId" : "20160723",
    "module" : "eslint_d",
    "pubDate" : ISODate("2017-05-08T12:34:45.000Z"),
    "attackType" : "Cross-Site Request Forgery (CSRF)",
    "title" : "Cross-Site Request Forgery (CSRF) in eslint_d",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:eslint_d:20160723",
    "source" : "snyk"
},

/* 97 */
{
    "_id" : ObjectId("5a845fecc86da389e170840a"),
    "sourceId" : "20141129",
    "module" : "keystone",
    "pubDate" : ISODate("2017-12-25T14:45:01.000Z"),
    "attackType" : "Cross-Site Request Forgery (CSRF)",
    "title" : "Cross-Site Request Forgery (CSRF) in keystone",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:keystone:20141129",
    "source" : "snyk"
},

/* 98 */
{
    "_id" : ObjectId("5a845fecc86da389e1708700"),
    "sourceId" : "20150624",
    "module" : "jquery-ujs",
    "pubDate" : ISODate("2015-06-24T06:00:00.000Z"),
    "attackType" : "Cross-Site Request Forgery (CSRF)",
    "title" : "Cross-Site Request Forgery in jquery-ujs",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:jquery-ujs:20150624",
    "source" : "snyk"
},

/* 99 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b81"),
    "url" : "https://snyk.io/vuln/npm:simplehttpserver:20180226",
    "severity" : "high",
    "title" : "Cross-Site Scripting (XSS)",
    "module" : "simplehttpserver",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Cross Site Scripting (XSS)"
},

/* 100 */
{
    "_id" : ObjectId("5a845fecc86da389e17083f2"),
    "sourceId" : "20160627",
    "module" : "bootstrap",
    "pubDate" : ISODate("2018-01-19T09:37:48.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-Site Scripting (XSS) in bootstrap",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:bootstrap:20160627",
    "source" : "snyk"
},

/* 101 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b7d"),
    "url" : "https://snyk.io/vuln/npm:auth0-js:20180226",
    "severity" : "high",
    "title" : "Cross-site Request Forgery (CSRF)",
    "module" : "auth0-js",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-08T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Cross-Site Request Forgery (CSRF)"
},

/* 102 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c0e"),
    "url" : "https://snyk.io/vuln/npm:pym.js:20180215",
    "severity" : "high",
    "title" : "Cross-site Request Forgery (CSRF)",
    "module" : "pym.js",
    "sourceId" : "20180215",
    "pubDate" : ISODate("2018-02-21T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Cross-Site Request Forgery (CSRF)"
},

/* 103 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbf1"),
    "sourceId" : "20180409",
    "module" : "auth0-lock",
    "pubDate" : ISODate("2018-04-09T15:17:27.000Z"),
    "attackType" : "Cross-Site Request Forgery (CSRF)",
    "title" : "Cross-site Request Forgery (CSRF) in auth0-lock",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:auth0-lock:20180409",
    "source" : "snyk"
},

/* 104 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b76"),
    "url" : "https://snyk.io/vuln/npm:zeroclipboard:20130104",
    "severity" : "low",
    "title" : "Cross-site Scripting (XSS)",
    "module" : "zeroclipboard",
    "sourceId" : "20130104",
    "pubDate" : ISODate("2018-03-15T04:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Cross Site Scripting (XSS)"
},

/* 105 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b82"),
    "url" : "https://snyk.io/vuln/npm:mrk.js:20180303",
    "severity" : "high",
    "title" : "Cross-site Scripting (XSS)",
    "module" : "mrk.js",
    "sourceId" : "20180303",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Cross Site Scripting (XSS)"
},

/* 106 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b83"),
    "url" : "https://snyk.io/vuln/npm:anywhere:20180226",
    "severity" : "high",
    "title" : "Cross-site Scripting (XSS)",
    "module" : "anywhere",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Cross Site Scripting (XSS)"
},

/* 107 */
{
    "_id" : ObjectId("5adbc7097085b362b9001ba6"),
    "url" : "https://snyk.io/vuln/npm:simditor:20180131",
    "severity" : "medium",
    "title" : "Cross-site Scripting (XSS)",
    "module" : "simditor",
    "sourceId" : "20180131",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Cross Site Scripting (XSS)"
},

/* 108 */
{
    "_id" : ObjectId("5adbc7097085b362b9001ba7"),
    "url" : "https://snyk.io/vuln/npm:knockout:20180213",
    "severity" : "medium",
    "title" : "Cross-site Scripting (XSS)",
    "module" : "knockout",
    "sourceId" : "20180213",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Cross Site Scripting (XSS)"
},

/* 109 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c11"),
    "url" : "https://snyk.io/vuln/npm:crud-file-server:20180217",
    "severity" : "high",
    "title" : "Cross-site Scripting (XSS)",
    "module" : "crud-file-server",
    "sourceId" : "20180217",
    "pubDate" : ISODate("2018-02-21T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Cross Site Scripting (XSS)"
},

/* 110 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c18"),
    "url" : "https://snyk.io/vuln/npm:angular:20180202",
    "severity" : "medium",
    "title" : "Cross-site Scripting (XSS)",
    "module" : "angular",
    "sourceId" : "20180202",
    "pubDate" : ISODate("2018-02-19T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Cross Site Scripting (XSS)"
},

/* 111 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c31"),
    "url" : "https://snyk.io/vuln/npm:dijit:20180205",
    "severity" : "medium",
    "title" : "Cross-site Scripting (XSS)",
    "module" : "dijit",
    "sourceId" : "20180205",
    "pubDate" : ISODate("2018-02-14T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Cross Site Scripting (XSS)"
},

/* 112 */
{
    "_id" : ObjectId("5a845fecc86da389e1708552"),
    "sourceId" : "20161027",
    "module" : "actionhero",
    "pubDate" : ISODate("2017-05-08T12:34:45.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in actionhero",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:actionhero:20161027",
    "source" : "snyk"
},

/* 113 */
{
    "_id" : ObjectId("5a845fecc86da389e17085d1"),
    "sourceId" : "20130621",
    "module" : "angular",
    "pubDate" : ISODate("2017-01-23T10:00:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in angular",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:angular:20130621",
    "source" : "snyk"
},

/* 114 */
{
    "_id" : ObjectId("5a845fecc86da389e17085d2"),
    "sourceId" : "20140624",
    "module" : "angular-gettext",
    "pubDate" : ISODate("2017-01-23T09:50:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in angular-gettext",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:angular-gettext:20140624",
    "source" : "snyk"
},

/* 115 */
{
    "_id" : ObjectId("5a845fecc86da389e17086f7"),
    "sourceId" : "20110701",
    "module" : "backbone",
    "pubDate" : ISODate("2015-11-06T02:09:36.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in backbone",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:backbone:20110701",
    "source" : "snyk"
},

/* 116 */
{
    "_id" : ObjectId("5a845fecc86da389e17083f9"),
    "sourceId" : "20160910",
    "module" : "blocks",
    "pubDate" : ISODate("2018-01-19T09:35:47.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in blocks",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:blocks:20160910",
    "source" : "snyk"
},

/* 117 */
{
    "_id" : ObjectId("5a845fecc86da389e1708695"),
    "sourceId" : "20130209",
    "module" : "boom",
    "pubDate" : ISODate("2016-10-05T07:46:29.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in boom",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:boom:20130209",
    "source" : "snyk"
},

/* 118 */
{
    "_id" : ObjectId("5a845fecc86da389e170857d"),
    "sourceId" : "20120510",
    "module" : "bootstrap",
    "pubDate" : ISODate("2017-04-10T09:39:59.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in bootstrap",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:bootstrap:20120510",
    "source" : "snyk"
},

/* 119 */
{
    "_id" : ObjectId("5a845fecc86da389e1708540"),
    "sourceId" : "20140826",
    "module" : "bootstrap-markdown",
    "pubDate" : ISODate("2017-05-30T09:56:36.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in bootstrap-markdown",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:bootstrap-markdown:20140826",
    "source" : "snyk"
},

/* 120 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbee"),
    "sourceId" : "20180409",
    "module" : "bracket-template",
    "pubDate" : ISODate("2018-04-15T13:00:21.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in bracket-template",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:bracket-template:20180409",
    "source" : "snyk"
},

/* 121 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc00"),
    "sourceId" : "20180314",
    "module" : "bui",
    "pubDate" : ISODate("2018-03-21T09:26:19.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in bui",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:bui:20180314",
    "source" : "snyk"
},

/* 122 */
{
    "_id" : ObjectId("5a845fecc86da389e1708689"),
    "sourceId" : "20120311",
    "module" : "cheerio",
    "pubDate" : ISODate("2016-10-20T18:25:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in cheerio",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:cheerio:20120311",
    "source" : "snyk"
},

/* 123 */
{
    "_id" : ObjectId("5a845fecc86da389e170869c"),
    "sourceId" : "20160822",
    "module" : "ckeditor-dev",
    "pubDate" : ISODate("2016-09-19T00:00:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in ckeditor-dev",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ckeditor-dev:20160822",
    "source" : "snyk"
},

/* 124 */
{
    "_id" : ObjectId("5a845fecc86da389e1708650"),
    "sourceId" : "20150429",
    "module" : "clusterize.js",
    "pubDate" : ISODate("2016-12-26T00:00:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in clusterize.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:clusterize.js:20150429",
    "source" : "snyk"
},

/* 125 */
{
    "_id" : ObjectId("5a845fecc86da389e1708550"),
    "sourceId" : "20151106",
    "module" : "datatables",
    "pubDate" : ISODate("2017-05-08T12:34:45.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in datatables",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:datatables:20151106",
    "source" : "snyk"
},

/* 126 */
{
    "_id" : ObjectId("5a845fecc86da389e17086fc"),
    "sourceId" : "20150918",
    "module" : "datatables",
    "pubDate" : ISODate("2015-09-18T09:29:10.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in datatables",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:datatables:20150918",
    "source" : "snyk"
},

/* 127 */
{
    "_id" : ObjectId("5a845fecc86da389e17086f2"),
    "sourceId" : "20100614-6",
    "module" : "dojo",
    "pubDate" : ISODate("2015-11-06T02:09:36.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in dojo",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:dojo:20100614-6",
    "source" : "snyk"
},

/* 128 */
{
    "_id" : ObjectId("5a845fecc86da389e1708570"),
    "sourceId" : "20141008",
    "module" : "dompurify",
    "pubDate" : ISODate("2017-04-24T09:10:58.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in dompurify",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:dompurify:20141008",
    "source" : "snyk"
},

/* 129 */
{
    "_id" : ObjectId("5a845fecc86da389e170853f"),
    "sourceId" : "20130110",
    "module" : "easyxdm",
    "pubDate" : ISODate("2017-05-30T09:56:36.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in easyxdm",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:easyxdm:20130110",
    "source" : "snyk"
},

/* 130 */
{
    "_id" : ObjectId("5a845fecc86da389e1708672"),
    "sourceId" : "20161130",
    "module" : "ejs",
    "pubDate" : ISODate("2016-12-06T15:00:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in ejs",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ejs:20161130",
    "source" : "snyk"
},

/* 131 */
{
    "_id" : ObjectId("5a845fecc86da389e1708431"),
    "sourceId" : "20170423",
    "module" : "electron",
    "pubDate" : ISODate("2017-10-09T15:29:35.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in electron",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:electron:20170423",
    "source" : "snyk"
},

/* 132 */
{
    "_id" : ObjectId("5a845fecc86da389e1708712"),
    "sourceId" : "20140912",
    "module" : "express",
    "pubDate" : ISODate("2014-09-12T04:46:45.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in express",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:express:20140912",
    "source" : "snyk"
},

/* 133 */
{
    "_id" : ObjectId("5a845fecc86da389e17084af"),
    "sourceId" : "20160211",
    "module" : "express-graphql",
    "pubDate" : ISODate("2017-06-21T14:07:50.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in express-graphql",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:express-graphql:20160211",
    "source" : "snyk"
},

/* 134 */
{
    "_id" : ObjectId("5a845fecc86da389e170854e"),
    "sourceId" : "20150907",
    "module" : "favico.js",
    "pubDate" : ISODate("2017-05-08T12:34:45.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in favico.js",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:favico.js:20150907",
    "source" : "snyk"
},

/* 135 */
{
    "_id" : ObjectId("5a845fecc86da389e1708598"),
    "sourceId" : "20150619",
    "module" : "foundation-sites",
    "pubDate" : ISODate("2017-03-13T08:00:22.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in foundation-sites",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:foundation-sites:20150619",
    "source" : "snyk"
},

/* 136 */
{
    "_id" : ObjectId("5a845fecc86da389e170854d"),
    "sourceId" : "20151207",
    "module" : "fullpage.js",
    "pubDate" : ISODate("2017-05-08T12:34:45.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in fullpage.js",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:fullpage.js:20151207",
    "source" : "snyk"
},

/* 137 */
{
    "_id" : ObjectId("5a845fecc86da389e1708537"),
    "sourceId" : "20161007",
    "module" : "ghost",
    "pubDate" : ISODate("2017-05-30T09:56:36.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in ghost",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ghost:20161007",
    "source" : "snyk"
},

/* 138 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbe8"),
    "sourceId" : "20180415",
    "module" : "glance",
    "pubDate" : ISODate("2018-04-17T07:45:48.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in glance",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:glance:20180415",
    "source" : "snyk"
},

/* 139 */
{
    "_id" : ObjectId("5a845fecc86da389e17086fa"),
    "sourceId" : "20110425",
    "module" : "handlebars",
    "pubDate" : ISODate("2015-11-06T02:09:36.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in handlebars",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:handlebars:20110425",
    "source" : "snyk"
},

/* 140 */
{
    "_id" : ObjectId("5a845fecc86da389e170867e"),
    "sourceId" : "20130320",
    "module" : "hapi",
    "pubDate" : ISODate("2016-11-22T11:04:19.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in hapi",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:hapi:20130320",
    "source" : "snyk"
},

/* 141 */
{
    "_id" : ObjectId("5a845fecc86da389e1708681"),
    "sourceId" : "20130326",
    "module" : "hoek",
    "pubDate" : ISODate("2016-11-10T00:00:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in hoek",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:hoek:20130326",
    "source" : "snyk"
},

/* 142 */
{
    "_id" : ObjectId("5a845fecc86da389e17083de"),
    "sourceId" : "20180123",
    "module" : "html-janitor",
    "pubDate" : ISODate("2018-02-11T15:31:53.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in html-janitor",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:html-janitor:20180123",
    "source" : "snyk"
},

/* 143 */
{
    "_id" : ObjectId("5a845fecc86da389e17085ba"),
    "sourceId" : "20151018",
    "module" : "i18next",
    "pubDate" : ISODate("2017-02-13T08:35:35.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in i18next",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:i18next:20151018",
    "source" : "snyk"
},

/* 144 */
{
    "_id" : ObjectId("5a845fecc86da389e170868a"),
    "sourceId" : "20110606",
    "module" : "jquery",
    "pubDate" : ISODate("2016-10-20T14:16:53.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in jquery",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:jquery:20110606",
    "source" : "snyk"
},

/* 145 */
{
    "_id" : ObjectId("5a845fecc86da389e170840b"),
    "sourceId" : "20171115",
    "module" : "jquery-colorbox",
    "pubDate" : ISODate("2017-12-25T14:45:01.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in jquery-colorbox",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:jquery-colorbox:20171115",
    "source" : "snyk"
},

/* 146 */
{
    "_id" : ObjectId("5a845fecc86da389e170864f"),
    "sourceId" : "20130419",
    "module" : "jquery-migrate",
    "pubDate" : ISODate("2016-12-26T09:46:52.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in jquery-migrate",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:jquery-migrate:20130419",
    "source" : "snyk"
},

/* 147 */
{
    "_id" : ObjectId("5a845fecc86da389e170864e"),
    "sourceId" : "20120802",
    "module" : "jquery-mobile",
    "pubDate" : ISODate("2016-12-26T11:28:34.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in jquery-mobile",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:jquery-mobile:20120802",
    "source" : "snyk"
},

/* 148 */
{
    "_id" : ObjectId("5a845fecc86da389e17085aa"),
    "sourceId" : "20100903",
    "module" : "jquery-ui",
    "pubDate" : ISODate("2017-02-13T14:37:13.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in jquery-ui",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:jquery-ui:20100903",
    "source" : "snyk"
},

/* 149 */
{
    "_id" : ObjectId("5a845fecc86da389e17083f8"),
    "sourceId" : "20150812",
    "module" : "js-xss",
    "pubDate" : ISODate("2018-01-19T09:35:48.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in js-xss",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:js-xss:20150812",
    "source" : "snyk"
},

/* 150 */
{
    "_id" : ObjectId("5a845fecc86da389e1708583"),
    "sourceId" : "20140327",
    "module" : "jspdf",
    "pubDate" : ISODate("2017-03-28T08:29:28.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in jspdf",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:jspdf:20140327",
    "source" : "snyk"
},

/* 151 */
{
    "_id" : ObjectId("5a845fecc86da389e17084ad"),
    "sourceId" : "20140710",
    "module" : "jstree",
    "pubDate" : ISODate("2017-06-21T14:07:50.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in jstree",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:jstree:20140710",
    "source" : "snyk"
},

/* 152 */
{
    "_id" : ObjectId("5a845fecc86da389e170841d"),
    "sourceId" : "20170918",
    "module" : "keystone",
    "pubDate" : ISODate("2017-11-05T13:55:23.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in keystone",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:keystone:20170918",
    "source" : "snyk"
},

/* 153 */
{
    "_id" : ObjectId("5a845fecc86da389e17083ff"),
    "sourceId" : "20170928",
    "module" : "kibana",
    "pubDate" : ISODate("2018-01-04T11:23:50.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in kibana",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:kibana:20170928",
    "source" : "snyk"
},

/* 154 */
{
    "_id" : ObjectId("5a845fecc86da389e1708409"),
    "sourceId" : "20160628",
    "module" : "kibana",
    "pubDate" : ISODate("2017-12-25T14:45:02.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in kibana",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:kibana:20160628",
    "source" : "snyk"
},

/* 155 */
{
    "_id" : ObjectId("5a845fecc86da389e1708597"),
    "sourceId" : "20130701",
    "module" : "knockout",
    "pubDate" : ISODate("2017-03-13T08:00:22.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in knockout",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:knockout:20130701",
    "source" : "snyk"
},

/* 156 */
{
    "_id" : ObjectId("5a845fecc86da389e170859d"),
    "sourceId" : "20160810",
    "module" : "lets-chat",
    "pubDate" : ISODate("2017-03-06T08:39:43.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in lets-chat",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:lets-chat:20160810",
    "source" : "snyk"
},

/* 157 */
{
    "_id" : ObjectId("5a845fecc86da389e170854b"),
    "sourceId" : "20170208",
    "module" : "mediaelement",
    "pubDate" : ISODate("2017-05-08T12:34:45.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in mediaelement",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mediaelement:20170208",
    "source" : "snyk"
},

/* 158 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbf9"),
    "sourceId" : "20180328",
    "module" : "metascraper",
    "pubDate" : ISODate("2018-04-02T06:53:40.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in metascraper",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:metascraper:20180328",
    "source" : "snyk"
},

/* 159 */
{
    "_id" : ObjectId("5a845fecc86da389e1708578"),
    "sourceId" : "20140717",
    "module" : "morris.js",
    "pubDate" : ISODate("2017-04-16T07:00:20.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in morris.js",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:morris.js:20140717",
    "source" : "snyk"
},

/* 160 */
{
    "_id" : ObjectId("5a845fecc86da389e17086f8"),
    "sourceId" : "20110814",
    "module" : "mustache",
    "pubDate" : ISODate("2015-11-06T02:09:36.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in mustache",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mustache:20110814",
    "source" : "snyk"
},

/* 161 */
{
    "_id" : ObjectId("5a845fecc86da389e17084ba"),
    "sourceId" : "20170607",
    "module" : "next",
    "pubDate" : ISODate("2017-06-13T14:18:28.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in next",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:next:20170607",
    "source" : "snyk"
},

/* 162 */
{
    "_id" : ObjectId("5a845fecc86da389e1708581"),
    "sourceId" : "20150413",
    "module" : "nodebb",
    "pubDate" : ISODate("2017-04-03T10:38:24.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in nodebb",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:nodebb:20150413",
    "source" : "snyk"
},

/* 163 */
{
    "_id" : ObjectId("5a845fecc86da389e1708533"),
    "sourceId" : "20160613",
    "module" : "octotree",
    "pubDate" : ISODate("2017-05-30T09:56:37.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in octotree",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:octotree:20160613",
    "source" : "snyk"
},

/* 164 */
{
    "_id" : ObjectId("5a845fecc86da389e17086a3"),
    "sourceId" : "20160817",
    "module" : "pivottable",
    "pubDate" : ISODate("2016-08-17T15:13:32.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in pivottable",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:pivottable:20160817",
    "source" : "snyk"
},

/* 165 */
{
    "_id" : ObjectId("5a845fecc86da389e17085a0"),
    "sourceId" : "20151210",
    "module" : "plotly.js",
    "pubDate" : ISODate("2017-02-28T08:40:31.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in plotly.js",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:plotly.js:20151210",
    "source" : "snyk"
},

/* 166 */
{
    "_id" : ObjectId("5a845fecc86da389e1708692"),
    "sourceId" : "20160808",
    "module" : "plotly.js",
    "pubDate" : ISODate("2016-10-17T00:00:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in plotly.js",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:plotly.js:20160808",
    "source" : "snyk"
},

/* 167 */
{
    "_id" : ObjectId("5a845fecc86da389e1708549"),
    "sourceId" : "20160126",
    "module" : "polyfill-service",
    "pubDate" : ISODate("2017-05-08T12:34:46.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in polyfill-service",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:polyfill-service:20160126",
    "source" : "snyk"
},

/* 168 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbe4"),
    "sourceId" : "20180415",
    "module" : "public",
    "pubDate" : ISODate("2018-04-17T07:45:49.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in public",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:public:20180415",
    "source" : "snyk"
},

/* 169 */
{
    "_id" : ObjectId("5a845fecc86da389e1708408"),
    "sourceId" : "20170529",
    "module" : "pure",
    "pubDate" : ISODate("2017-12-25T14:45:02.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in pure",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:pure:20170529",
    "source" : "snyk"
},

/* 170 */
{
    "_id" : ObjectId("5a845fecc86da389e1708548"),
    "sourceId" : "20120214",
    "module" : "ql.io-engine",
    "pubDate" : ISODate("2017-05-08T12:34:46.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in ql.io-engine",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ql.io-engine:20120214",
    "source" : "snyk"
},

/* 171 */
{
    "_id" : ObjectId("5a845fecc86da389e17085d4"),
    "sourceId" : "20131217",
    "module" : "react",
    "pubDate" : ISODate("2017-01-18T14:00:21.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in react",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:react:20131217",
    "source" : "snyk"
},

/* 172 */
{
    "_id" : ObjectId("5a845fecc86da389e1708546"),
    "sourceId" : "20160311",
    "module" : "rendr",
    "pubDate" : ISODate("2017-05-08T12:34:46.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in rendr",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:rendr:20160311",
    "source" : "snyk"
},

/* 173 */
{
    "_id" : ObjectId("5a845fecc86da389e1708532"),
    "sourceId" : "20140722",
    "module" : "rendr-handlebars",
    "pubDate" : ISODate("2017-05-30T09:56:37.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in rendr-handlebars",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:rendr-handlebars:20140722",
    "source" : "snyk"
},

/* 174 */
{
    "_id" : ObjectId("5a845fecc86da389e17085a8"),
    "sourceId" : "20160225",
    "module" : "restify",
    "pubDate" : ISODate("2017-02-13T15:04:38.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in restify",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:restify:20160225",
    "source" : "snyk"
},

/* 175 */
{
    "_id" : ObjectId("5a845fecc86da389e1708593"),
    "sourceId" : "20150514",
    "module" : "rethinkdb",
    "pubDate" : ISODate("2017-03-13T08:00:22.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in rethinkdb",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:rethinkdb:20150514",
    "source" : "snyk"
},

/* 176 */
{
    "_id" : ObjectId("5a845fecc86da389e1708592"),
    "sourceId" : "20131024",
    "module" : "reveal.js",
    "pubDate" : ISODate("2017-03-13T08:00:22.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in reveal.js",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:reveal.js:20131024",
    "source" : "snyk"
},

/* 177 */
{
    "_id" : ObjectId("5a845fecc86da389e1708545"),
    "sourceId" : "20131114",
    "module" : "riot",
    "pubDate" : ISODate("2017-05-08T12:34:46.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in riot",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:riot:20131114",
    "source" : "snyk"
},

/* 178 */
{
    "_id" : ObjectId("5a845fecc86da389e1708591"),
    "sourceId" : "20130108",
    "module" : "select2",
    "pubDate" : ISODate("2017-03-13T08:00:22.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in select2",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:select2:20130108",
    "source" : "snyk"
},

/* 179 */
{
    "_id" : ObjectId("5a845fecc86da389e17084ab"),
    "sourceId" : "20170130",
    "module" : "semantic-ui",
    "pubDate" : ISODate("2017-06-21T14:07:50.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in semantic-ui",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:semantic-ui:20170130",
    "source" : "snyk"
},

/* 180 */
{
    "_id" : ObjectId("5a845fecc86da389e17083ee"),
    "sourceId" : "20171125",
    "module" : "shiba",
    "pubDate" : ISODate("2018-01-22T12:29:52.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in shiba",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:shiba:20171125",
    "source" : "snyk"
},

/* 181 */
{
    "_id" : ObjectId("5a845fecc86da389e1708682"),
    "sourceId" : "20160913",
    "module" : "shout",
    "pubDate" : ISODate("2016-10-31T17:00:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in shout",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:shout:20160913",
    "source" : "snyk"
},

/* 182 */
{
    "_id" : ObjectId("5a845fecc86da389e17083f5"),
    "sourceId" : "20150602",
    "module" : "showdown-xss-filter",
    "pubDate" : ISODate("2018-01-19T09:35:48.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in showdown-xss-filter",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:showdown-xss-filter:20150602",
    "source" : "snyk"
},

/* 183 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc01"),
    "sourceId" : "20180126",
    "module" : "simple-server",
    "pubDate" : ISODate("2018-03-18T14:30:02.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in simple-server",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:simple-server:20180126",
    "source" : "snyk"
},

/* 184 */
{
    "_id" : ObjectId("5a845fecc86da389e17085ad"),
    "sourceId" : "20120417",
    "module" : "socket.io",
    "pubDate" : ISODate("2017-02-13T13:28:52.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in socket.io",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:socket.io:20120417",
    "source" : "snyk"
},

/* 185 */
{
    "_id" : ObjectId("5a845fecc86da389e1708590"),
    "sourceId" : "20160606",
    "module" : "squire-rte",
    "pubDate" : ISODate("2017-03-13T08:00:22.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in squire-rte",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:squire-rte:20160606",
    "source" : "snyk"
},

/* 186 */
{
    "_id" : ObjectId("5a845fecc86da389e170858f"),
    "sourceId" : "20160901",
    "module" : "swagger-ui",
    "pubDate" : ISODate("2017-03-13T08:00:22.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in swagger-ui",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:swagger-ui:20160901",
    "source" : "snyk"
},

/* 187 */
{
    "_id" : ObjectId("5a845fecc86da389e17085af"),
    "sourceId" : "20150213",
    "module" : "textangular",
    "pubDate" : ISODate("2017-02-13T13:21:37.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in textangular",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:textangular:20150213",
    "source" : "snyk"
},

/* 188 */
{
    "_id" : ObjectId("5a845fecc86da389e170859c"),
    "sourceId" : "20160404",
    "module" : "thelounge",
    "pubDate" : ISODate("2017-03-06T08:39:43.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in thelounge",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:thelounge:20160404",
    "source" : "snyk"
},

/* 189 */
{
    "_id" : ObjectId("5a845fecc86da389e17085d7"),
    "sourceId" : "20150610",
    "module" : "tinymce",
    "pubDate" : ISODate("2017-01-09T14:00:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in tinymce",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:tinymce:20150610",
    "source" : "snyk"
},

/* 190 */
{
    "_id" : ObjectId("5a845fecc86da389e1708686"),
    "sourceId" : "20150813",
    "module" : "tinymce",
    "pubDate" : ISODate("2016-10-27T13:49:24.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in tinymce",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:tinymce:20150813",
    "source" : "snyk"
},

/* 191 */
{
    "_id" : ObjectId("5a845fecc86da389e17085be"),
    "sourceId" : "20150313",
    "module" : "validator",
    "pubDate" : ISODate("2017-01-30T15:00:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in validator",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:validator:20150313",
    "source" : "snyk"
},

/* 192 */
{
    "_id" : ObjectId("5a845fecc86da389e170858e"),
    "sourceId" : "20151121",
    "module" : "vega",
    "pubDate" : ISODate("2017-03-13T08:00:22.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in vega",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:vega:20151121",
    "source" : "snyk"
},

/* 193 */
{
    "_id" : ObjectId("5a845fecc86da389e1708404"),
    "sourceId" : "20170829",
    "module" : "vue",
    "pubDate" : ISODate("2017-12-25T14:45:02.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in vue",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:vue:20170829",
    "source" : "snyk"
},

/* 194 */
{
    "_id" : ObjectId("5a845fecc86da389e17083f4"),
    "sourceId" : "20130324",
    "module" : "weyland",
    "pubDate" : ISODate("2018-01-19T09:35:48.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in weyland",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:weyland:20130324",
    "source" : "snyk"
},

/* 195 */
{
    "_id" : ObjectId("5a845fecc86da389e170858d"),
    "sourceId" : "20121229",
    "module" : "wysihtml",
    "pubDate" : ISODate("2017-03-13T08:00:23.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in wysihtml",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:wysihtml:20121229",
    "source" : "snyk"
},

/* 196 */
{
    "_id" : ObjectId("5a845fecc86da389e170859b"),
    "sourceId" : "20160516",
    "module" : "yms",
    "pubDate" : ISODate("2017-03-06T08:39:43.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in yms",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:yms:20160516",
    "source" : "snyk"
},

/* 197 */
{
    "_id" : ObjectId("5a845fecc86da389e17085b8"),
    "sourceId" : "20130515",
    "module" : "yui",
    "pubDate" : ISODate("2017-02-13T08:54:05.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in yui",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:yui:20130515",
    "source" : "snyk"
},

/* 198 */
{
    "_id" : ObjectId("5a845fecc86da389e170858a"),
    "sourceId" : "20140131",
    "module" : "zeroclipboard",
    "pubDate" : ISODate("2017-03-13T08:00:23.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) in zeroclipboard",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:zeroclipboard:20140131",
    "source" : "snyk"
},

/* 199 */
{
    "_id" : ObjectId("5a845fecc86da389e170869b"),
    "sourceId" : "20160913",
    "module" : "brisket",
    "pubDate" : ISODate("2016-09-21T00:00:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) via Bootstrapped data URL in brisket",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:brisket:20160913",
    "source" : "snyk"
},

/* 200 */
{
    "_id" : ObjectId("5a845fecc86da389e17085b2"),
    "sourceId" : "20150702",
    "module" : "markdown-it",
    "pubDate" : ISODate("2017-02-13T12:49:26.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) via Class Injection in markdown-it",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:markdown-it:20150702",
    "source" : "snyk"
},

/* 201 */
{
    "_id" : ObjectId("5a845fecc86da389e1708697"),
    "sourceId" : "20160912",
    "module" : "markdown-it",
    "pubDate" : ISODate("2016-09-27T00:00:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) via Data URIs in markdown-it",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:markdown-it:20160912",
    "source" : "snyk"
},

/* 202 */
{
    "_id" : ObjectId("5a845fecc86da389e17085bc"),
    "sourceId" : "20170112",
    "module" : "marked",
    "pubDate" : ISODate("2017-01-30T18:00:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) via Data URIs in marked",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:marked:20170112",
    "source" : "snyk"
},

/* 203 */
{
    "_id" : ObjectId("5a845fecc86da389e17085ab"),
    "sourceId" : "20160820",
    "module" : "remarkable",
    "pubDate" : ISODate("2017-02-13T14:30:59.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting (XSS) via Data Uri in remarkable",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:remarkable:20160820",
    "source" : "snyk"
},

/* 204 */
{
    "_id" : ObjectId("5a845fecc86da389e1708703"),
    "sourceId" : "20150314",
    "module" : "serve-index",
    "pubDate" : ISODate("2015-03-13T23:24:28.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Cross-site Scripting due to improper file and directory names escaping in serve-index",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:serve-index:20150314",
    "source" : "snyk"
},

/* 205 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a5e"),
    "sourceId" : 125,
    "module" : "gmail-js",
    "pubDate" : ISODate("2016-07-21T14:59:33.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "DOM-based XSS",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/125",
    "source" : "nsp"
},

/* 206 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758c3"),
    "sourceId" : 553,
    "module" : "ecstatic",
    "pubDate" : ISODate("2017-12-13T21:56:27.632Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/553",
    "source" : "nsp"
},

/* 207 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758c7"),
    "sourceId" : 550,
    "module" : "ws",
    "pubDate" : ISODate("2017-11-08T19:26:00.965Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/550",
    "source" : "nsp"
},

/* 208 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475995"),
    "sourceId" : 331,
    "module" : "nes",
    "pubDate" : ISODate("2017-04-14T21:06:38.005Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/331",
    "source" : "nsp"
},

/* 209 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a4c"),
    "sourceId" : 149,
    "module" : "uws",
    "pubDate" : ISODate("2016-10-17T16:18:55.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/149",
    "source" : "nsp"
},

/* 210 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a7d"),
    "sourceId" : 75,
    "module" : "mqtt-packet",
    "pubDate" : ISODate("2016-01-15T17:01:49.053Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/75",
    "source" : "nsp"
},

/* 211 */
{
    "_id" : ObjectId("5a845fecc86da389e170840d"),
    "sourceId" : "20161220",
    "module" : "botkit",
    "pubDate" : ISODate("2017-12-25T14:45:01.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DDoS) in botkit",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:botkit:20161220",
    "source" : "snyk"
},

/* 212 */
{
    "_id" : ObjectId("5a845fecc86da389e17085b0"),
    "sourceId" : "20120107",
    "module" : "connect",
    "pubDate" : ISODate("2017-02-13T13:05:48.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in connect",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:connect:20120107",
    "source" : "snyk"
},

/* 213 */
{
    "_id" : ObjectId("5a845fecc86da389e1708673"),
    "sourceId" : "20161130-1",
    "module" : "ejs",
    "pubDate" : ISODate("2016-12-06T15:00:00.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in ejs",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ejs:20161130-1",
    "source" : "snyk"
},

/* 214 */
{
    "_id" : ObjectId("5a845fecc86da389e1708432"),
    "sourceId" : "20170422",
    "module" : "electron",
    "pubDate" : ISODate("2017-10-09T15:29:35.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in electron",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:electron:20170422",
    "source" : "snyk"
},

/* 215 */
{
    "_id" : ObjectId("5a845fecc86da389e170867f"),
    "sourceId" : "20140212",
    "module" : "engine.io",
    "pubDate" : ISODate("2016-11-15T07:41:29.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in engine.io",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:engine.io:20140212",
    "source" : "snyk"
},

/* 216 */
{
    "_id" : ObjectId("5a845fecc86da389e170853a"),
    "sourceId" : "20150303-5",
    "module" : "ghost",
    "pubDate" : ISODate("2017-05-30T09:56:36.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in ghost",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ghost:20150303-5",
    "source" : "snyk"
},

/* 217 */
{
    "_id" : ObjectId("5a845fecc86da389e170864b"),
    "sourceId" : "20160529",
    "module" : "jquery",
    "pubDate" : ISODate("2016-12-26T15:37:35.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in jquery",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:jquery:20160529",
    "source" : "snyk"
},

/* 218 */
{
    "_id" : ObjectId("5a845fecc86da389e170845f"),
    "sourceId" : "20161202",
    "module" : "js-quantities",
    "pubDate" : ISODate("2017-08-02T13:11:45.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in js-quantities",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:js-quantities:20161202",
    "source" : "snyk"
},

/* 219 */
{
    "_id" : ObjectId("5a845fecc86da389e17083fc"),
    "sourceId" : "20170214",
    "module" : "kibana",
    "pubDate" : ISODate("2018-01-04T11:23:52.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in kibana",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:kibana:20170214",
    "source" : "snyk"
},

/* 220 */
{
    "_id" : ObjectId("5a845fecc86da389e1708400"),
    "sourceId" : "20171225",
    "module" : "mqtt",
    "pubDate" : ISODate("2018-01-03T11:22:02.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in mqtt",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mqtt:20171225",
    "source" : "snyk"
},

/* 221 */
{
    "_id" : ObjectId("5a845fecc86da389e17086a5"),
    "sourceId" : "20160817",
    "module" : "mqtt",
    "pubDate" : ISODate("2016-08-17T15:13:32.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in mqtt",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mqtt:20160817",
    "source" : "snyk"
},

/* 222 */
{
    "_id" : ObjectId("5a845fecc86da389e1708596"),
    "sourceId" : "20160916",
    "module" : "ng-dialog",
    "pubDate" : ISODate("2017-03-13T08:00:22.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in ng-dialog",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ng-dialog:20160916",
    "source" : "snyk"
},

/* 223 */
{
    "_id" : ObjectId("5a845fecc86da389e170867b"),
    "sourceId" : "20111130",
    "module" : "node-uuid",
    "pubDate" : ISODate("2016-11-23T07:29:58.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in node-uuid",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:node-uuid:20111130",
    "source" : "snyk"
},

/* 224 */
{
    "_id" : ObjectId("5a845fecc86da389e1708659"),
    "sourceId" : "20160913",
    "module" : "podium",
    "pubDate" : ISODate("2016-12-20T15:04:57.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in podium",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:podium:20160913",
    "source" : "snyk"
},

/* 225 */
{
    "_id" : ObjectId("5a845fecc86da389e1708407"),
    "sourceId" : "20160318",
    "module" : "ractive",
    "pubDate" : ISODate("2017-12-25T14:45:02.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in ractive",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ractive:20160318",
    "source" : "snyk"
},

/* 226 */
{
    "_id" : ObjectId("5a845fecc86da389e17085c0"),
    "sourceId" : "20150604",
    "module" : "sails",
    "pubDate" : ISODate("2017-01-30T14:30:47.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in sails",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sails:20150604",
    "source" : "snyk"
},

/* 227 */
{
    "_id" : ObjectId("5a845fecc86da389e170857f"),
    "sourceId" : "20130612",
    "module" : "share",
    "pubDate" : ISODate("2017-04-03T10:38:24.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in share",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:share:20130612",
    "source" : "snyk"
},

/* 228 */
{
    "_id" : ObjectId("5a845fecc86da389e17085bd"),
    "sourceId" : "20131012",
    "module" : "websocket-driver",
    "pubDate" : ISODate("2017-01-30T15:00:00.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in websocket-driver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:websocket-driver:20131012",
    "source" : "snyk"
},

/* 229 */
{
    "_id" : ObjectId("5a845fecc86da389e1708719"),
    "sourceId" : "20140616",
    "module" : "yar",
    "pubDate" : ISODate("2014-06-16T09:29:10.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) in yar",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:yar:20140616",
    "source" : "snyk"
},

/* 230 */
{
    "_id" : ObjectId("5a845fecc86da389e1708670"),
    "sourceId" : "20150925",
    "module" : "mongoose",
    "pubDate" : ISODate("2016-12-13T08:55:28.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (DoS) via Infinite Loop in mongoose",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mongoose:20150925",
    "source" : "snyk"
},

/* 231 */
{
    "_id" : ObjectId("5a845fecc86da389e1708714"),
    "sourceId" : "20140806",
    "module" : "qs",
    "pubDate" : ISODate("2014-08-06T06:10:22.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service (Memory Exhaustion) in qs",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:qs:20140806",
    "source" : "snyk"
},

/* 232 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a85"),
    "sourceId" : 64,
    "module" : "ecstatic",
    "pubDate" : ISODate("2015-12-23T23:21:25.322Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service - Illegal access crash from if-modified-since header",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/64",
    "source" : "nsp"
},

/* 233 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a7a"),
    "sourceId" : 80,
    "module" : "i18n-node-angular",
    "pubDate" : ISODate("2016-01-25T17:56:55.455Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service and Content Injection",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/80",
    "source" : "nsp"
},

/* 234 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759a2"),
    "sourceId" : 335,
    "module" : "hapi",
    "pubDate" : ISODate("2017-04-05T18:16:00.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of Service via malformed accept-encoding header",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/335",
    "source" : "nsp"
},

/* 235 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a86"),
    "sourceId" : 63,
    "module" : "hapi",
    "pubDate" : ISODate("2015-12-23T23:17:51.134Z"),
    "attackType" : "Denial of Service",
    "title" : "Denial of service - Potential socket exhaustion",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/63",
    "source" : "nsp"
},

/* 236 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b73"),
    "url" : "https://snyk.io/vuln/npm:jacobj66-weather:20180315",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "jacobj66-weather",
    "sourceId" : "20180315",
    "pubDate" : ISODate("2018-03-15T04:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 237 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b74"),
    "url" : "https://snyk.io/vuln/npm:hdsdhhksjd:20180315",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "hdsdhhksjd",
    "sourceId" : "20180315",
    "pubDate" : ISODate("2018-03-15T04:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 238 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b75"),
    "url" : "https://snyk.io/vuln/npm:gyfserver:20180315",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "gyfserver",
    "sourceId" : "20180315",
    "pubDate" : ISODate("2018-03-15T04:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 239 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b7a"),
    "url" : "https://snyk.io/vuln/npm:node-srv:20180125",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "node-srv",
    "sourceId" : "20180125",
    "pubDate" : ISODate("2018-03-08T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 240 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b7b"),
    "url" : "https://snyk.io/vuln/npm:glance:20180129",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "glance",
    "sourceId" : "20180129",
    "pubDate" : ISODate("2018-03-08T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 241 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b7e"),
    "url" : "https://snyk.io/vuln/npm:angular-http-server:20180302",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "angular-http-server",
    "sourceId" : "20180302",
    "pubDate" : ISODate("2018-03-08T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 242 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b87"),
    "url" : "https://snyk.io/vuln/npm:hekto:20180215",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "hekto",
    "sourceId" : "20180215",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 243 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b89"),
    "url" : "https://snyk.io/vuln/npm:626:20180226",
    "severity" : "medium",
    "title" : "Directory Traversal",
    "module" : "626",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 244 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b8a"),
    "url" : "https://snyk.io/vuln/npm:zxyserver:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "zxyserver",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 245 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b8b"),
    "url" : "https://snyk.io/vuln/npm:yypsulie11:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "yypsulie11",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 246 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b8c"),
    "url" : "https://snyk.io/vuln/npm:yxxserver:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "yxxserver",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 247 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b8d"),
    "url" : "https://snyk.io/vuln/npm:wuzhuangserver:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "wuzhuangserver",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 248 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b8e"),
    "url" : "https://snyk.io/vuln/npm:wrlc:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "wrlc",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 249 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b8f"),
    "url" : "https://snyk.io/vuln/npm:wenluhong111:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "wenluhong111",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 250 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b90"),
    "url" : "https://snyk.io/vuln/npm:web-server-mock:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "web-server-mock",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 251 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b91"),
    "url" : "https://snyk.io/vuln/npm:web-node-server:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "web-node-server",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 252 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b92"),
    "url" : "https://snyk.io/vuln/npm:weathertest.bryceperkins:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "weathertest.bryceperkins",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 253 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b93"),
    "url" : "https://snyk.io/vuln/npm:songcaihong:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "songcaihong",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 254 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b94"),
    "url" : "https://snyk.io/vuln/npm:shenliru3:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "shenliru3",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 255 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b95"),
    "url" : "https://snyk.io/vuln/npm:servewuqianqianqian:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "servewuqianqianqian",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 256 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b96"),
    "url" : "https://snyk.io/vuln/npm:serveryyl:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "serveryyl",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 257 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b97"),
    "url" : "https://snyk.io/vuln/npm:serverfff:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "serverfff",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 258 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b98"),
    "url" : "https://snyk.io/vuln/npm:rapid-httpserver:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "rapid-httpserver",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 259 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b99"),
    "url" : "https://snyk.io/vuln/npm:proxey:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "proxey",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 260 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b9a"),
    "url" : "https://snyk.io/vuln/npm:nodeload:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "nodeload",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 261 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b9b"),
    "url" : "https://snyk.io/vuln/npm:myserve111:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "myserve111",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 262 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b9c"),
    "url" : "https://snyk.io/vuln/npm:iceman178.weather.cs360:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "iceman178.weather.cs360",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 263 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b9d"),
    "url" : "https://snyk.io/vuln/npm:cs360getcity:20180306",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "cs360getcity",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 264 */
{
    "_id" : ObjectId("5adbc7097085b362b9001ba1"),
    "url" : "https://snyk.io/vuln/npm:localhost-now:20180206",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "localhost-now",
    "sourceId" : "20180206",
    "pubDate" : ISODate("2018-03-05T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 265 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bac"),
    "url" : "https://snyk.io/vuln/npm:xingbaohai:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "xingbaohai",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 266 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bad"),
    "url" : "https://snyk.io/vuln/npm:willvdb_test_server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "willvdb_test_server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 267 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bae"),
    "url" : "https://snyk.io/vuln/npm:websvr:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "websvr",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 268 */
{
    "_id" : ObjectId("5adbc7097085b362b9001baf"),
    "url" : "https://snyk.io/vuln/npm:simple-mock-server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "simple-mock-server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 269 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bb0"),
    "url" : "https://snyk.io/vuln/npm:mime_web_server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "mime_web_server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 270 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bb1"),
    "url" : "https://snyk.io/vuln/npm:express-blinker:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "express-blinker",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 271 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bb2"),
    "url" : "https://snyk.io/vuln/npm:easy-router:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "easy-router",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 272 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bb3"),
    "url" : "https://snyk.io/vuln/npm:caolilinode1:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "caolilinode1",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 273 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bb4"),
    "url" : "https://snyk.io/vuln/npm:caihong:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "caihong",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 274 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bb5"),
    "url" : "https://snyk.io/vuln/npm:binocular-lamp:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "binocular-lamp",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 275 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bba"),
    "url" : "https://snyk.io/vuln/npm:cuiaiguang:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "cuiaiguang",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-27T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 276 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bbb"),
    "url" : "https://snyk.io/vuln/npm:wuzhuang:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "wuzhuang",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-27T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 277 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bbc"),
    "url" : "https://snyk.io/vuln/npm:asset-cache:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "asset-cache",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-27T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 278 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bbd"),
    "url" : "https://snyk.io/vuln/npm:ptest:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "ptest",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-27T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 279 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bbe"),
    "url" : "https://snyk.io/vuln/npm:micra:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "micra",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-27T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 280 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bbf"),
    "url" : "https://snyk.io/vuln/npm:m-server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "m-server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 281 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bc0"),
    "url" : "https://snyk.io/vuln/npm:static-cling:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "static-cling",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 282 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bc1"),
    "url" : "https://snyk.io/vuln/npm:html-pages:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "html-pages",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 283 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bc2"),
    "url" : "https://snyk.io/vuln/npm:api-proxy:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "api-proxy",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 284 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bc3"),
    "url" : "https://snyk.io/vuln/npm:basic-static:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "basic-static",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 285 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bc4"),
    "url" : "https://snyk.io/vuln/npm:hserver-static:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "hserver-static",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 286 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bc5"),
    "url" : "https://snyk.io/vuln/npm:sabu:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "sabu",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 287 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bc6"),
    "url" : "https://snyk.io/vuln/npm:awning:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "awning",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 288 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bc7"),
    "url" : "https://snyk.io/vuln/npm:atropa-server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "atropa-server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 289 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bc8"),
    "url" : "https://snyk.io/vuln/npm:atropa-ide:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "atropa-ide",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 290 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bc9"),
    "url" : "https://snyk.io/vuln/npm:aso-server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "aso-server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 291 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bca"),
    "url" : "https://snyk.io/vuln/npm:stattic:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "stattic",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 292 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bcb"),
    "url" : "https://snyk.io/vuln/npm:pico-static-server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "pico-static-server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 293 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bcc"),
    "url" : "https://snyk.io/vuln/npm:bae-nodejs:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "bae-nodejs",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 294 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bcd"),
    "url" : "https://snyk.io/vuln/npm:crud-file-server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "crud-file-server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 295 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bce"),
    "url" : "https://snyk.io/vuln/npm:node-staticserver:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "node-staticserver",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 296 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bcf"),
    "url" : "https://snyk.io/vuln/npm:server-static:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "server-static",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 297 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bd0"),
    "url" : "https://snyk.io/vuln/npm:bruteser:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "bruteser",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 298 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bd1"),
    "url" : "https://snyk.io/vuln/npm:butler-server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "butler-server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 299 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bd2"),
    "url" : "https://snyk.io/vuln/npm:canvas-designer:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "canvas-designer",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 300 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bd3"),
    "url" : "https://snyk.io/vuln/npm:glurp:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "glurp",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 301 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bd4"),
    "url" : "https://snyk.io/vuln/npm:der-server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "der-server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 302 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bd5"),
    "url" : "https://snyk.io/vuln/npm:ex-http-frame:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "ex-http-frame",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 303 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bd6"),
    "url" : "https://snyk.io/vuln/npm:btnode:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "btnode",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 304 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bd7"),
    "url" : "https://snyk.io/vuln/npm:gfm-srv:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "gfm-srv",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 305 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bd8"),
    "url" : "https://snyk.io/vuln/npm:getstats:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "getstats",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 306 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bd9"),
    "url" : "https://snyk.io/vuln/npm:gamebutler:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "gamebutler",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 307 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bda"),
    "url" : "https://snyk.io/vuln/npm:fast-http:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "fast-http",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 308 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bdb"),
    "url" : "https://snyk.io/vuln/npm:easy-node-server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "easy-node-server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 309 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bdc"),
    "url" : "https://snyk.io/vuln/npm:dilu:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "dilu",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 310 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bdd"),
    "url" : "https://snyk.io/vuln/npm:isv-http:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "isv-http",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 311 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bde"),
    "url" : "https://snyk.io/vuln/npm:httpea:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "httpea",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 312 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bdf"),
    "url" : "https://snyk.io/vuln/npm:markdown-server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "markdown-server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 313 */
{
    "_id" : ObjectId("5adbc7097085b362b9001be0"),
    "url" : "https://snyk.io/vuln/npm:serverxh:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "serverxh",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 314 */
{
    "_id" : ObjectId("5adbc7097085b362b9001be1"),
    "url" : "https://snyk.io/vuln/npm:lab6.1:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "lab6.1",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 315 */
{
    "_id" : ObjectId("5adbc7097085b362b9001be2"),
    "url" : "https://snyk.io/vuln/npm:less-livereload:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "less-livereload",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 316 */
{
    "_id" : ObjectId("5adbc7097085b362b9001be3"),
    "url" : "https://snyk.io/vuln/npm:lander:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "lander",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 317 */
{
    "_id" : ObjectId("5adbc7097085b362b9001be4"),
    "url" : "https://snyk.io/vuln/npm:litedoc:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "litedoc",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 318 */
{
    "_id" : ObjectId("5adbc7097085b362b9001be5"),
    "url" : "https://snyk.io/vuln/npm:censorify.matt.shurtz:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "censorify.matt.shurtz",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 319 */
{
    "_id" : ObjectId("5adbc7097085b362b9001be6"),
    "url" : "https://snyk.io/vuln/npm:zhanglina:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "zhanglina",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 320 */
{
    "_id" : ObjectId("5adbc7097085b362b9001be7"),
    "url" : "https://snyk.io/vuln/npm:node-http-server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "node-http-server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 321 */
{
    "_id" : ObjectId("5adbc7097085b362b9001be8"),
    "url" : "https://snyk.io/vuln/npm:node-static-webserver:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "node-static-webserver",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 322 */
{
    "_id" : ObjectId("5adbc7097085b362b9001be9"),
    "url" : "https://snyk.io/vuln/npm:server12311:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "server12311",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 323 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bea"),
    "url" : "https://snyk.io/vuln/npm:fakelearnnodejs:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "fakelearnnodejs",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 324 */
{
    "_id" : ObjectId("5adbc7097085b362b9001beb"),
    "url" : "https://snyk.io/vuln/npm:servershuai:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "servershuai",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 325 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bec"),
    "url" : "https://snyk.io/vuln/npm:lab6-wclaibor:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "lab6-wclaibor",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 326 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bed"),
    "url" : "https://snyk.io/vuln/npm:ussasasa:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "ussasasa",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 327 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bee"),
    "url" : "https://snyk.io/vuln/npm:grunt-serve:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "grunt-serve",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 328 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bef"),
    "url" : "https://snyk.io/vuln/npm:grunt-fileserver:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "grunt-fileserver",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 329 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bf0"),
    "url" : "https://snyk.io/vuln/npm:nitro-server:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "nitro-server",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 330 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bf1"),
    "url" : "https://snyk.io/vuln/npm:wenluhong11:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "wenluhong11",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 331 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bf2"),
    "url" : "https://snyk.io/vuln/npm:my-sn:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "my-sn",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 332 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bf3"),
    "url" : "https://snyk.io/vuln/npm:zhangranbigman:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "zhangranbigman",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 333 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bf4"),
    "url" : "https://snyk.io/vuln/npm:secure-servedir:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "secure-servedir",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 334 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bf5"),
    "url" : "https://snyk.io/vuln/npm:servedir:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "servedir",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 335 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bfd"),
    "url" : "https://snyk.io/vuln/npm:node-cxc:20180226",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "node-cxc",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 336 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c05"),
    "url" : "https://snyk.io/vuln/npm:resolve-path:20180222",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "resolve-path",
    "sourceId" : "20180222",
    "pubDate" : ISODate("2018-02-25T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 337 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c0f"),
    "url" : "https://snyk.io/vuln/npm:public:20180217",
    "severity" : "high",
    "title" : "Directory Traversal",
    "module" : "public",
    "sourceId" : "20180217",
    "pubDate" : ISODate("2018-02-21T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Insecure Access to File System"
},

/* 338 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758b8"),
    "sourceId" : 561,
    "module" : "serve",
    "pubDate" : ISODate("2018-01-23T17:02:39.653Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/561",
    "source" : "nsp"
},

/* 339 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758b9"),
    "sourceId" : 411,
    "module" : "ltt.js",
    "pubDate" : ISODate("2018-01-23T16:43:20.402Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/411",
    "source" : "nsp"
},

/* 340 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758ba"),
    "sourceId" : 451,
    "module" : "yjmyjmyjm",
    "pubDate" : ISODate("2018-01-23T16:42:58.027Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/451",
    "source" : "nsp"
},

/* 341 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758bb"),
    "sourceId" : 560,
    "module" : "lactate",
    "pubDate" : ISODate("2018-01-23T16:40:27.500Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/560",
    "source" : "nsp"
},

/* 342 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758bc"),
    "sourceId" : 559,
    "module" : "augustine",
    "pubDate" : ISODate("2018-01-23T16:29:48.657Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/559",
    "source" : "nsp"
},

/* 343 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758bf"),
    "sourceId" : 556,
    "module" : "featurebook",
    "pubDate" : ISODate("2018-01-15T18:08:24.248Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/556",
    "source" : "nsp"
},

/* 344 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758c1"),
    "sourceId" : 557,
    "module" : "@vivaxy/here",
    "pubDate" : ISODate("2018-01-15T04:52:05.294Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/557",
    "source" : "nsp"
},

/* 345 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758c2"),
    "sourceId" : 554,
    "module" : "serve-here",
    "pubDate" : ISODate("2018-01-12T00:03:03.500Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/554",
    "source" : "nsp"
},

/* 346 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475913"),
    "sourceId" : 383,
    "module" : "fast-http-cli",
    "pubDate" : ISODate("2017-09-28T16:57:52.545Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/383",
    "source" : "nsp"
},

/* 347 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475928"),
    "sourceId" : 472,
    "module" : "http_static_simple",
    "pubDate" : ISODate("2017-09-26T23:54:54.544Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/472",
    "source" : "nsp"
},

/* 348 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647594d"),
    "sourceId" : 342,
    "module" : "tiny-http",
    "pubDate" : ISODate("2017-09-06T19:11:21.694Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/342",
    "source" : "nsp"
},

/* 349 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475950"),
    "sourceId" : 343,
    "module" : "iter-http",
    "pubDate" : ISODate("2017-09-06T19:10:32.286Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/343",
    "source" : "nsp"
},

/* 350 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475988"),
    "sourceId" : 346,
    "module" : "f2e-server",
    "pubDate" : ISODate("2017-06-27T20:03:55.193Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/346",
    "source" : "nsp"
},

/* 351 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475989"),
    "sourceId" : 350,
    "module" : "gomeplus-h5-proxy",
    "pubDate" : ISODate("2017-06-05T13:02:16.496Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/350",
    "source" : "nsp"
},

/* 352 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647598a"),
    "sourceId" : 349,
    "module" : "badjs-sourcemap-server",
    "pubDate" : ISODate("2017-06-05T13:01:57.070Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/349",
    "source" : "nsp"
},

/* 353 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475991"),
    "sourceId" : 303,
    "module" : "hostr",
    "pubDate" : ISODate("2017-04-14T22:44:30.535Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/303",
    "source" : "nsp"
},

/* 354 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a3a"),
    "sourceId" : 150,
    "module" : "bitty",
    "pubDate" : ISODate("2016-12-07T16:41:46.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/150",
    "source" : "nsp"
},

/* 355 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a74"),
    "sourceId" : 89,
    "module" : "restafary",
    "pubDate" : ISODate("2016-03-28T22:21:23.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/89",
    "source" : "nsp"
},

/* 356 */
{
    "_id" : ObjectId("5a845fecc86da389e170852f"),
    "sourceId" : "20170509",
    "module" : "11xiaoli",
    "pubDate" : ISODate("2017-06-07T12:36:50.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in 11xiaoli",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:11xiaoli:20170509",
    "source" : "snyk"
},

/* 357 */
{
    "_id" : ObjectId("5a845fecc86da389e170852e"),
    "sourceId" : "20170511",
    "module" : "22lixian",
    "pubDate" : ISODate("2017-06-07T12:36:50.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in 22lixian",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:22lixian:20170511",
    "source" : "snyk"
},

/* 358 */
{
    "_id" : ObjectId("5a845fecc86da389e1708493"),
    "sourceId" : "20170617",
    "module" : "360class.jansenhm",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in 360class.jansenhm",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:360class.jansenhm:20170617",
    "source" : "snyk"
},

/* 359 */
{
    "_id" : ObjectId("5a845fecc86da389e1708553"),
    "sourceId" : "20121127",
    "module" : "actionhero",
    "pubDate" : ISODate("2017-05-08T12:34:45.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in actionhero",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:actionhero:20121127",
    "source" : "snyk"
},

/* 360 */
{
    "_id" : ObjectId("5a845fecc86da389e17084c2"),
    "sourceId" : "20170525",
    "module" : "byucslabsix",
    "pubDate" : ISODate("2017-06-12T13:43:45.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in byucslabsix",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:byucslabsix:20170525",
    "source" : "snyk"
},

/* 361 */
{
    "_id" : ObjectId("5a845fecc86da389e170852c"),
    "sourceId" : "20170516",
    "module" : "calmquist.static-server",
    "pubDate" : ISODate("2017-06-07T12:36:50.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in calmquist.static-server",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:calmquist.static-server:20170516",
    "source" : "snyk"
},

/* 362 */
{
    "_id" : ObjectId("5a845fecc86da389e170849a"),
    "sourceId" : "20170617",
    "module" : "caolilinode",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in caolilinode",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:caolilinode:20170617",
    "source" : "snyk"
},

/* 363 */
{
    "_id" : ObjectId("5a845fecc86da389e170852b"),
    "sourceId" : "20170509",
    "module" : "censorify.tanisjr",
    "pubDate" : ISODate("2017-06-07T12:36:50.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in censorify.tanisjr",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:censorify.tanisjr:20170509",
    "source" : "snyk"
},

/* 364 */
{
    "_id" : ObjectId("5a845fecc86da389e170849b"),
    "sourceId" : "20170612",
    "module" : "chatbyvista",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in chatbyvista",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:chatbyvista:20170612",
    "source" : "snyk"
},

/* 365 */
{
    "_id" : ObjectId("5a845fecc86da389e170852a"),
    "sourceId" : "20170521",
    "module" : "city-weather-abe",
    "pubDate" : ISODate("2017-06-07T12:36:50.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in city-weather-abe",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:city-weather-abe:20170521",
    "source" : "snyk"
},

/* 366 */
{
    "_id" : ObjectId("5a845fecc86da389e17084c4"),
    "sourceId" : "20170516",
    "module" : "citypredict.whauwiller",
    "pubDate" : ISODate("2017-06-12T13:42:45.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in citypredict.whauwiller",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:citypredict.whauwiller:20170516",
    "source" : "snyk"
},

/* 367 */
{
    "_id" : ObjectId("5a845fecc86da389e170849c"),
    "sourceId" : "20170617",
    "module" : "commentapp.stetsonwood",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in commentapp.stetsonwood",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:commentapp.stetsonwood:20170617",
    "source" : "snyk"
},

/* 368 */
{
    "_id" : ObjectId("5a845fecc86da389e1708528"),
    "sourceId" : "20170511",
    "module" : "cuciuci",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in cuciuci",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:cuciuci:20170511",
    "source" : "snyk"
},

/* 369 */
{
    "_id" : ObjectId("5a845fecc86da389e170848c"),
    "sourceId" : "20170730",
    "module" : "cxy",
    "pubDate" : ISODate("2017-08-02T13:08:41.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in cxy",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:cxy:20170730",
    "source" : "snyk"
},

/* 370 */
{
    "_id" : ObjectId("5a845fecc86da389e1708527"),
    "sourceId" : "20170418",
    "module" : "cyber-js",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in cyber-js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:cyber-js:20170418",
    "source" : "snyk"
},

/* 371 */
{
    "_id" : ObjectId("5a845fecc86da389e170849d"),
    "sourceId" : "20170617",
    "module" : "cypserver",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in cypserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:cypserver:20170617",
    "source" : "snyk"
},

/* 372 */
{
    "_id" : ObjectId("5a845fecc86da389e1708526"),
    "sourceId" : "20170509",
    "module" : "dasafio",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in dasafio",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:dasafio:20170509",
    "source" : "snyk"
},

/* 373 */
{
    "_id" : ObjectId("5a845fecc86da389e1708525"),
    "sourceId" : "20170418",
    "module" : "datachannel-client",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in datachannel-client",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:datachannel-client:20170418",
    "source" : "snyk"
},

/* 374 */
{
    "_id" : ObjectId("5a845fecc86da389e1708495"),
    "sourceId" : "20170617",
    "module" : "dcdcdcdcdc",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in dcdcdcdcdc",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:dcdcdcdcdc:20170617",
    "source" : "snyk"
},

/* 375 */
{
    "_id" : ObjectId("5a845fecc86da389e1708524"),
    "sourceId" : "20170516",
    "module" : "dcserver",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in dcserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:dcserver:20170516",
    "source" : "snyk"
},

/* 376 */
{
    "_id" : ObjectId("5a845fecc86da389e1708523"),
    "sourceId" : "20170429",
    "module" : "desafio",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in desafio",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:desafio:20170429",
    "source" : "snyk"
},

/* 377 */
{
    "_id" : ObjectId("5a845fecc86da389e1708522"),
    "sourceId" : "20170516",
    "module" : "dgard8.lab6",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in dgard8.lab6",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:dgard8.lab6:20170516",
    "source" : "snyk"
},

/* 378 */
{
    "_id" : ObjectId("5a845fecc86da389e17084c3"),
    "sourceId" : "20170525",
    "module" : "dmmcquay.lab6",
    "pubDate" : ISODate("2017-06-12T13:42:45.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in dmmcquay.lab6",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:dmmcquay.lab6:20170525",
    "source" : "snyk"
},

/* 379 */
{
    "_id" : ObjectId("5a845fecc86da389e1708521"),
    "sourceId" : "20170518",
    "module" : "dylmomo",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in dylmomo",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:dylmomo:20170518",
    "source" : "snyk"
},

/* 380 */
{
    "_id" : ObjectId("5a845fecc86da389e1708520"),
    "sourceId" : "20170418",
    "module" : "earlybird",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in earlybird",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:earlybird:20170418",
    "source" : "snyk"
},

/* 381 */
{
    "_id" : ObjectId("5a845fecc86da389e170851f"),
    "sourceId" : "20170418",
    "module" : "easyquick",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in easyquick",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:easyquick:20170418",
    "source" : "snyk"
},

/* 382 */
{
    "_id" : ObjectId("5a845fecc86da389e17084bd"),
    "sourceId" : "20170525",
    "module" : "elding",
    "pubDate" : ISODate("2017-06-12T13:48:45.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in elding",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:elding:20170525",
    "source" : "snyk"
},

/* 383 */
{
    "_id" : ObjectId("5a845fecc86da389e17083e9"),
    "sourceId" : "20180123",
    "module" : "electron",
    "pubDate" : ISODate("2018-01-25T13:56:29.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in electron",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:electron:20180123",
    "source" : "snyk"
},

/* 384 */
{
    "_id" : ObjectId("5a845fecc86da389e170851e"),
    "sourceId" : "20170516",
    "module" : "enserver",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in enserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:enserver:20170516",
    "source" : "snyk"
},

/* 385 */
{
    "_id" : ObjectId("5a845fecc86da389e170851d"),
    "sourceId" : "20170510",
    "module" : "ewgaddis.lab6",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in ewgaddis.lab6",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:ewgaddis.lab6:20170510",
    "source" : "snyk"
},

/* 386 */
{
    "_id" : ObjectId("5a845fecc86da389e170851c"),
    "sourceId" : "20170510",
    "module" : "exxxxxxxxxxx",
    "pubDate" : ISODate("2017-06-07T12:36:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in exxxxxxxxxxx",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:exxxxxxxxxxx:20170510",
    "source" : "snyk"
},

/* 387 */
{
    "_id" : ObjectId("5a845fecc86da389e170870a"),
    "sourceId" : "20141114",
    "module" : "fancy-server",
    "pubDate" : ISODate("2014-11-14T18:00:48.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in fancy-server",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:fancy-server:20141114",
    "source" : "snyk"
},

/* 388 */
{
    "_id" : ObjectId("5a845fecc86da389e170851b"),
    "sourceId" : "20170418",
    "module" : "fast-http-cli",
    "pubDate" : ISODate("2017-06-07T12:36:52.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in fast-http-cli",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:fast-http-cli:20170418",
    "source" : "snyk"
},

/* 389 */
{
    "_id" : ObjectId("5a845fecc86da389e170851a"),
    "sourceId" : "20170510",
    "module" : "fbr-client",
    "pubDate" : ISODate("2017-06-07T12:36:52.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in fbr-client",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:fbr-client:20170510",
    "source" : "snyk"
},

/* 390 */
{
    "_id" : ObjectId("5a845fecc86da389e1708519"),
    "sourceId" : "20170419",
    "module" : "fsk-server",
    "pubDate" : ISODate("2017-06-07T12:36:52.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in fsk-server",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:fsk-server:20170419",
    "source" : "snyk"
},

/* 391 */
{
    "_id" : ObjectId("5a845fecc86da389e17085d6"),
    "sourceId" : "20161024",
    "module" : "fury-adapter-swagger",
    "pubDate" : ISODate("2017-01-11T15:29:26.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in fury-adapter-swagger",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:fury-adapter-swagger:20161024",
    "source" : "snyk"
},

/* 392 */
{
    "_id" : ObjectId("5a845fecc86da389e1708518"),
    "sourceId" : "20170510",
    "module" : "gaoxiaotingtingting",
    "pubDate" : ISODate("2017-06-07T12:36:52.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in gaoxiaotingtingting",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:gaoxiaotingtingting:20170510",
    "source" : "snyk"
},

/* 393 */
{
    "_id" : ObjectId("5a845fecc86da389e1708517"),
    "sourceId" : "20170505",
    "module" : "gaoxuyan",
    "pubDate" : ISODate("2017-06-07T12:36:52.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in gaoxuyan",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:gaoxuyan:20170505",
    "source" : "snyk"
},

/* 394 */
{
    "_id" : ObjectId("5a845fecc86da389e17086ff"),
    "sourceId" : "20150727",
    "module" : "geddy",
    "pubDate" : ISODate("2015-07-27T12:33:48.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in geddy",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:geddy:20150727",
    "source" : "snyk"
},

/* 395 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc03"),
    "sourceId" : "20180131",
    "module" : "general-file-server",
    "pubDate" : ISODate("2018-03-18T14:30:02.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in general-file-server",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:general-file-server:20180131",
    "source" : "snyk"
},

/* 396 */
{
    "_id" : ObjectId("5a845fecc86da389e1708516"),
    "sourceId" : "20170518",
    "module" : "getcityapi.yoehoehne",
    "pubDate" : ISODate("2017-06-07T12:36:52.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in getcityapi.yoehoehne",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:getcityapi.yoehoehne:20170518",
    "source" : "snyk"
},

/* 397 */
{
    "_id" : ObjectId("5a845fecc86da389e1708488"),
    "sourceId" : "20170730",
    "module" : "ghod5servercs360",
    "pubDate" : ISODate("2017-08-02T13:08:43.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in ghod5servercs360",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:ghod5servercs360:20170730",
    "source" : "snyk"
},

/* 398 */
{
    "_id" : ObjectId("5a845fecc86da389e17084a1"),
    "sourceId" : "20170612",
    "module" : "goserv",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in goserv",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:goserv:20170612",
    "source" : "snyk"
},

/* 399 */
{
    "_id" : ObjectId("5a845fecc86da389e1708557"),
    "sourceId" : "20170418",
    "module" : "guaycuru",
    "pubDate" : ISODate("2017-05-01T08:19:03.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in guaycuru",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:guaycuru:20170418",
    "source" : "snyk"
},

/* 400 */
{
    "_id" : ObjectId("5a845fecc86da389e1708514"),
    "sourceId" : "20170429",
    "module" : "hcbserver",
    "pubDate" : ISODate("2017-06-07T12:36:52.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in hcbserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:hcbserver:20170429",
    "source" : "snyk"
},

/* 401 */
{
    "_id" : ObjectId("5a845fecc86da389e1708486"),
    "sourceId" : "20170730",
    "module" : "hechatroom",
    "pubDate" : ISODate("2017-08-02T13:08:44.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in hechatroom",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:hechatroom:20170730",
    "source" : "snyk"
},

/* 402 */
{
    "_id" : ObjectId("5a845fecc86da389e17084c8"),
    "sourceId" : "20170422",
    "module" : "hftp",
    "pubDate" : ISODate("2017-06-07T12:36:58.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in hftp",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:hftp:20170422",
    "source" : "snyk"
},

/* 403 */
{
    "_id" : ObjectId("5a845fecc86da389e1708656"),
    "sourceId" : "20161211",
    "module" : "hostr",
    "pubDate" : ISODate("2016-12-20T17:34:26.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in hostr",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:hostr:20161211",
    "source" : "snyk"
},

/* 404 */
{
    "_id" : ObjectId("5a845fecc86da389e1708497"),
    "sourceId" : "20170612",
    "module" : "http_static_simple",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in http_static_simple",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:http_static_simple:20170612",
    "source" : "snyk"
},

/* 405 */
{
    "_id" : ObjectId("5a845fecc86da389e1708512"),
    "sourceId" : "20170518",
    "module" : "infraserver",
    "pubDate" : ISODate("2017-06-07T12:36:52.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in infraserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:infraserver:20170518",
    "source" : "snyk"
},

/* 406 */
{
    "_id" : ObjectId("5a845fecc86da389e1708511"),
    "sourceId" : "20170511",
    "module" : "intsol-package",
    "pubDate" : ISODate("2017-06-07T12:36:53.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in intsol-package",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:intsol-package:20170511",
    "source" : "snyk"
},

/* 407 */
{
    "_id" : ObjectId("5a845fecc86da389e1708510"),
    "sourceId" : "20170418",
    "module" : "iter-http",
    "pubDate" : ISODate("2017-06-07T12:36:53.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in iter-http",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:iter-http:20170418",
    "source" : "snyk"
},

/* 408 */
{
    "_id" : ObjectId("5a845fecc86da389e170850f"),
    "sourceId" : "20170511",
    "module" : "iter-server",
    "pubDate" : ISODate("2017-06-07T12:36:53.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in iter-server",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:iter-server:20170511",
    "source" : "snyk"
},

/* 409 */
{
    "_id" : ObjectId("5a845fecc86da389e170850e"),
    "sourceId" : "20170518",
    "module" : "jansenstuffpleasework",
    "pubDate" : ISODate("2017-06-07T12:36:53.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in jansenstuffpleasework",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:jansenstuffpleasework:20170518",
    "source" : "snyk"
},

/* 410 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc14"),
    "sourceId" : "20180315",
    "module" : "jiazhipeng",
    "pubDate" : ISODate("2018-03-15T15:30:10.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in jiazhipeng",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:jiazhipeng:20180315",
    "source" : "snyk"
},

/* 411 */
{
    "_id" : ObjectId("5a845fecc86da389e17084c1"),
    "sourceId" : "20170518",
    "module" : "jikes",
    "pubDate" : ISODate("2017-06-12T13:45:45.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in jikes",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:jikes:20170518",
    "source" : "snyk"
},

/* 412 */
{
    "_id" : ObjectId("5a845fecc86da389e170850d"),
    "sourceId" : "20170422",
    "module" : "jn_jj_server",
    "pubDate" : ISODate("2017-06-07T12:36:53.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in jn_jj_server",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:jn_jj_server:20170422",
    "source" : "snyk"
},

/* 413 */
{
    "_id" : ObjectId("5a845fecc86da389e17084a5"),
    "sourceId" : "20170613",
    "module" : "koa-static-cache",
    "pubDate" : ISODate("2017-06-28T13:33:13.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in koa-static-cache",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:koa-static-cache:20170613",
    "source" : "snyk"
},

/* 414 */
{
    "_id" : ObjectId("5a845fecc86da389e170850c"),
    "sourceId" : "20170518",
    "module" : "lab6.brit95",
    "pubDate" : ISODate("2017-06-07T12:36:53.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in lab6.brit95",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:lab6.brit95:20170518",
    "source" : "snyk"
},

/* 415 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc13"),
    "sourceId" : "20180315",
    "module" : "lab6_agolotin",
    "pubDate" : ISODate("2018-03-15T15:30:10.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in lab6_agolotin",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:lab6_agolotin:20180315",
    "source" : "snyk"
},

/* 416 */
{
    "_id" : ObjectId("5a845fecc86da389e17084a0"),
    "sourceId" : "20170612",
    "module" : "lab6drewfusbyu",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in lab6drewfusbyu",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:lab6drewfusbyu:20170612",
    "source" : "snyk"
},

/* 417 */
{
    "_id" : ObjectId("5a845fecc86da389e170850b"),
    "sourceId" : "20170425",
    "module" : "lessindex",
    "pubDate" : ISODate("2017-06-07T12:36:53.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in lessindex",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:lessindex:20170425",
    "source" : "snyk"
},

/* 418 */
{
    "_id" : ObjectId("5a845fecc86da389e1708483"),
    "sourceId" : "20170730",
    "module" : "lihuini",
    "pubDate" : ISODate("2017-08-02T13:08:45.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in lihuini",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:lihuini:20170730",
    "source" : "snyk"
},

/* 419 */
{
    "_id" : ObjectId("5a845fecc86da389e170856b"),
    "sourceId" : "20170418",
    "module" : "list-n-stream",
    "pubDate" : ISODate("2017-04-24T09:55:36.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in list-n-stream",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:list-n-stream:20170418",
    "source" : "snyk"
},

/* 420 */
{
    "_id" : ObjectId("5a845fecc86da389e170850a"),
    "sourceId" : "20170521",
    "module" : "liuyaserver",
    "pubDate" : ISODate("2017-06-07T12:36:53.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in liuyaserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:liuyaserver:20170521",
    "source" : "snyk"
},

/* 421 */
{
    "_id" : ObjectId("5a845fecc86da389e1708509"),
    "sourceId" : "20170510",
    "module" : "liyujing",
    "pubDate" : ISODate("2017-06-07T12:36:53.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in liyujing",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:liyujing:20170510",
    "source" : "snyk"
},

/* 422 */
{
    "_id" : ObjectId("5a845fecc86da389e1708423"),
    "sourceId" : "20171006",
    "module" : "ljjnodeserve",
    "pubDate" : ISODate("2017-10-17T10:45:45.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in ljjnodeserve",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:ljjnodeserve:20171006",
    "source" : "snyk"
},

/* 423 */
{
    "_id" : ObjectId("5a845fecc86da389e1708508"),
    "sourceId" : "20170518",
    "module" : "looppake",
    "pubDate" : ISODate("2017-06-07T12:36:53.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in looppake",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:looppake:20170518",
    "source" : "snyk"
},

/* 424 */
{
    "_id" : ObjectId("5a845fecc86da389e17084d0"),
    "sourceId" : "20170503",
    "module" : "ltt",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in ltt",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:ltt:20170503",
    "source" : "snyk"
},

/* 425 */
{
    "_id" : ObjectId("5a845fecc86da389e17084d2"),
    "sourceId" : "20170503",
    "module" : "ltt.js",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in ltt.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:ltt.js:20170503",
    "source" : "snyk"
},

/* 426 */
{
    "_id" : ObjectId("5a845fecc86da389e1708482"),
    "sourceId" : "20170730",
    "module" : "lzl123",
    "pubDate" : ISODate("2017-08-02T13:08:45.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in lzl123",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:lzl123:20170730",
    "source" : "snyk"
},

/* 427 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc11"),
    "sourceId" : "20180315",
    "module" : "meryl",
    "pubDate" : ISODate("2018-03-15T15:30:11.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in meryl",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:meryl:20180315",
    "source" : "snyk"
},

/* 428 */
{
    "_id" : ObjectId("5a845fecc86da389e17084ce"),
    "sourceId" : "20170427",
    "module" : "mfrs",
    "pubDate" : ISODate("2017-06-07T12:36:58.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in mfrs",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mfrs:20170427",
    "source" : "snyk"
},

/* 429 */
{
    "_id" : ObjectId("5a845fecc86da389e1708507"),
    "sourceId" : "20170505",
    "module" : "mfrserver",
    "pubDate" : ISODate("2017-06-07T12:36:54.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in mfrserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mfrserver:20170505",
    "source" : "snyk"
},

/* 430 */
{
    "_id" : ObjectId("5a845fecc86da389e1708506"),
    "sourceId" : "20170423",
    "module" : "mockserve",
    "pubDate" : ISODate("2017-06-07T12:36:54.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in mockserve",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mockserve:20170423",
    "source" : "snyk"
},

/* 431 */
{
    "_id" : ObjectId("5a845fecc86da389e1708505"),
    "sourceId" : "20170505",
    "module" : "myprolyz",
    "pubDate" : ISODate("2017-06-07T12:36:54.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in myprolyz",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:myprolyz:20170505",
    "source" : "snyk"
},

/* 432 */
{
    "_id" : ObjectId("5a845fecc86da389e1708504"),
    "sourceId" : "20170518",
    "module" : "myserver.alexcthomas18",
    "pubDate" : ISODate("2017-06-07T12:36:54.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in myserver.alexcthomas18",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:myserver.alexcthomas18:20170518",
    "source" : "snyk"
},

/* 433 */
{
    "_id" : ObjectId("5a845fecc86da389e17083e0"),
    "sourceId" : "20180124",
    "module" : "next",
    "pubDate" : ISODate("2018-01-31T15:47:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in next",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:next:20180124",
    "source" : "snyk"
},

/* 434 */
{
    "_id" : ObjectId("5a845fecc86da389e17084bc"),
    "sourceId" : "20170601",
    "module" : "next",
    "pubDate" : ISODate("2017-06-12T13:50:46.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in next",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:next:20170601",
    "source" : "snyk"
},

/* 435 */
{
    "_id" : ObjectId("5a845fecc86da389e170870b"),
    "sourceId" : "20141114",
    "module" : "nhouston",
    "pubDate" : ISODate("2014-11-13T23:30:48.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in nhouston",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nhouston:20141114",
    "source" : "snyk"
},

/* 436 */
{
    "_id" : ObjectId("5a845fecc86da389e1708502"),
    "sourceId" : "20170521",
    "module" : "node-server-forfront",
    "pubDate" : ISODate("2017-06-07T12:36:54.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in node-server-forfront",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:node-server-forfront:20170521",
    "source" : "snyk"
},

/* 437 */
{
    "_id" : ObjectId("5a845fecc86da389e17084bf"),
    "sourceId" : "20170523",
    "module" : "node-simple-router",
    "pubDate" : ISODate("2017-06-12T13:46:46.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in node-simple-router",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:node-simple-router:20170523",
    "source" : "snyk"
},

/* 438 */
{
    "_id" : ObjectId("5a845fecc86da389e1708501"),
    "sourceId" : "20170430",
    "module" : "nodeaaaaa",
    "pubDate" : ISODate("2017-06-07T12:36:54.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in nodeaaaaa",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodeaaaaa:20170430",
    "source" : "snyk"
},

/* 439 */
{
    "_id" : ObjectId("5a845fecc86da389e170842c"),
    "sourceId" : "20170910",
    "module" : "nodejs.jseidl",
    "pubDate" : ISODate("2017-10-09T15:29:36.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in nodejs.jseidl",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodejs.jseidl:20170910",
    "source" : "snyk"
},

/* 440 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc10"),
    "sourceId" : "20180315",
    "module" : "nodejs_liamgb",
    "pubDate" : ISODate("2018-03-15T15:30:11.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in nodejs_liamgb",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodejs_liamgb:20180315",
    "source" : "snyk"
},

/* 441 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc0f"),
    "sourceId" : "20180315",
    "module" : "nodejsccc",
    "pubDate" : ISODate("2018-03-15T15:30:12.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in nodejsccc",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodejsccc:20180315",
    "source" : "snyk"
},

/* 442 */
{
    "_id" : ObjectId("5a845fecc86da389e1708500"),
    "sourceId" : "20170418",
    "module" : "nodeload-nmickuli",
    "pubDate" : ISODate("2017-06-07T12:36:54.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in nodeload-nmickuli",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodeload-nmickuli:20170418",
    "source" : "snyk"
},

/* 443 */
{
    "_id" : ObjectId("5a845fecc86da389e1708424"),
    "sourceId" : "20171006",
    "module" : "nodeserver-jta",
    "pubDate" : ISODate("2017-10-17T10:45:45.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in nodeserver-jta",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodeserver-jta:20171006",
    "source" : "snyk"
},

/* 444 */
{
    "_id" : ObjectId("5a845fecc86da389e170842b"),
    "sourceId" : "20170910",
    "module" : "nopach",
    "pubDate" : ISODate("2017-10-09T15:29:36.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in nopach",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nopach:20170910",
    "source" : "snyk"
},

/* 445 */
{
    "_id" : ObjectId("5a845fecc86da389e17084ff"),
    "sourceId" : "20170430",
    "module" : "open-device",
    "pubDate" : ISODate("2017-06-07T12:36:54.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in open-device",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:open-device:20170430",
    "source" : "snyk"
},

/* 446 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc0e"),
    "sourceId" : "20180315",
    "module" : "paopao613",
    "pubDate" : ISODate("2018-03-15T15:30:13.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in paopao613",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:paopao613:20180315",
    "source" : "snyk"
},

/* 447 */
{
    "_id" : ObjectId("5a845fecc86da389e17084fe"),
    "sourceId" : "20170518",
    "module" : "peiserver",
    "pubDate" : ISODate("2017-06-07T12:36:54.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in peiserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:peiserver:20170518",
    "source" : "snyk"
},

/* 448 */
{
    "_id" : ObjectId("5a845fecc86da389e17084fd"),
    "sourceId" : "20170510",
    "module" : "picard",
    "pubDate" : ISODate("2017-06-07T12:36:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in picard",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:picard:20170510",
    "source" : "snyk"
},

/* 449 */
{
    "_id" : ObjectId("5a845fecc86da389e170856a"),
    "sourceId" : "20170420",
    "module" : "pooledwebsocket",
    "pubDate" : ISODate("2017-04-25T08:25:22.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in pooledwebsocket",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:pooledwebsocket:20170420",
    "source" : "snyk"
},

/* 450 */
{
    "_id" : ObjectId("5a845fecc86da389e17084fb"),
    "sourceId" : "20170508",
    "module" : "pytservce",
    "pubDate" : ISODate("2017-06-07T12:36:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in pytservce",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:pytservce:20170508",
    "source" : "snyk"
},

/* 451 */
{
    "_id" : ObjectId("5a845fecc86da389e17084fa"),
    "sourceId" : "20170510",
    "module" : "qinserve",
    "pubDate" : ISODate("2017-06-07T12:36:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in qinserve",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:qinserve:20170510",
    "source" : "snyk"
},

/* 452 */
{
    "_id" : ObjectId("5a845fecc86da389e17084f9"),
    "sourceId" : "20170425",
    "module" : "quickserver",
    "pubDate" : ISODate("2017-06-07T12:36:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in quickserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:quickserver:20170425",
    "source" : "snyk"
},

/* 453 */
{
    "_id" : ObjectId("5a845fecc86da389e17084f8"),
    "sourceId" : "20170425",
    "module" : "reecerver",
    "pubDate" : ISODate("2017-06-07T12:36:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in reecerver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:reecerver:20170425",
    "source" : "snyk"
},

/* 454 */
{
    "_id" : ObjectId("5a845fecc86da389e17084f7"),
    "sourceId" : "20170508",
    "module" : "ritp",
    "pubDate" : ISODate("2017-06-07T12:36:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in ritp",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:ritp:20170508",
    "source" : "snyk"
},

/* 455 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc0d"),
    "sourceId" : "20180315",
    "module" : "rjpserver",
    "pubDate" : ISODate("2018-03-15T15:30:13.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in rjpserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:rjpserver:20180315",
    "source" : "snyk"
},

/* 456 */
{
    "_id" : ObjectId("5a845fecc86da389e17084da"),
    "sourceId" : "20170425",
    "module" : "rtcmulticonnection-client",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in rtcmulticonnection-client",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:rtcmulticonnection-client:20170425",
    "source" : "snyk"
},

/* 457 */
{
    "_id" : ObjectId("5a845fecc86da389e17084f6"),
    "sourceId" : "20170508",
    "module" : "run-this-place",
    "pubDate" : ISODate("2017-06-07T12:36:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in run-this-place",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:run-this-place:20170508",
    "source" : "snyk"
},

/* 458 */
{
    "_id" : ObjectId("5a845fecc86da389e17084c0"),
    "sourceId" : "20170505",
    "module" : "scott-blanch-weather-app",
    "pubDate" : ISODate("2017-06-12T13:45:46.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in scott-blanch-weather-app",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:scott-blanch-weather-app:20170505",
    "source" : "snyk"
},

/* 459 */
{
    "_id" : ObjectId("5a845fecc86da389e1708499"),
    "sourceId" : "20170617",
    "module" : "section2.madisonjbrooks12",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in section2.madisonjbrooks12",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:section2.madisonjbrooks12:20170617",
    "source" : "snyk"
},

/* 460 */
{
    "_id" : ObjectId("5a845fecc86da389e1708555"),
    "sourceId" : "20170418",
    "module" : "sencisho",
    "pubDate" : ISODate("2017-05-01T08:40:45.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in sencisho",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sencisho:20170418",
    "source" : "snyk"
},

/* 461 */
{
    "_id" : ObjectId("5a845fecc86da389e1708711"),
    "sourceId" : "20140912",
    "module" : "send",
    "pubDate" : ISODate("2014-09-12T05:06:33.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in send",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:send:20140912",
    "source" : "snyk"
},

/* 462 */
{
    "_id" : ObjectId("5a845fecc86da389e17084bb"),
    "sourceId" : "20170601",
    "module" : "serve",
    "pubDate" : ISODate("2017-06-12T13:50:46.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serve",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serve:20170601",
    "source" : "snyk"
},

/* 463 */
{
    "_id" : ObjectId("5a845fecc86da389e170849f"),
    "sourceId" : "20170612",
    "module" : "serve46",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serve46",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serve46:20170612",
    "source" : "snyk"
},

/* 464 */
{
    "_id" : ObjectId("5a845fecc86da389e17084f5"),
    "sourceId" : "20170518",
    "module" : "serverabc",
    "pubDate" : ISODate("2017-06-07T12:36:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serverabc",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serverabc:20170518",
    "source" : "snyk"
},

/* 465 */
{
    "_id" : ObjectId("5a845fecc86da389e170846a"),
    "sourceId" : "20170730",
    "module" : "servergmf",
    "pubDate" : ISODate("2017-08-02T13:08:54.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in servergmf",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:servergmf:20170730",
    "source" : "snyk"
},

/* 466 */
{
    "_id" : ObjectId("5a845fecc86da389e17084f4"),
    "sourceId" : "20170516",
    "module" : "serverhuwenhui",
    "pubDate" : ISODate("2017-06-07T12:36:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serverhuwenhui",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serverhuwenhui:20170516",
    "source" : "snyk"
},

/* 467 */
{
    "_id" : ObjectId("5a845fecc86da389e17084f3"),
    "sourceId" : "20170518",
    "module" : "serverliujiayi1",
    "pubDate" : ISODate("2017-06-07T12:36:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serverliujiayi1",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serverliujiayi1:20170518",
    "source" : "snyk"
},

/* 468 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc0c"),
    "sourceId" : "20180315",
    "module" : "serverlyj333",
    "pubDate" : ISODate("2018-03-15T15:30:14.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serverlyj333",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serverlyj333:20180315",
    "source" : "snyk"
},

/* 469 */
{
    "_id" : ObjectId("5a845fecc86da389e17084f2"),
    "sourceId" : "20170518",
    "module" : "serverlyr",
    "pubDate" : ISODate("2017-06-07T12:36:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serverlyr",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serverlyr:20170518",
    "source" : "snyk"
},

/* 470 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc0b"),
    "sourceId" : "20180315",
    "module" : "serversyysyy",
    "pubDate" : ISODate("2018-03-15T15:30:14.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serversyysyy",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serversyysyy:20180315",
    "source" : "snyk"
},

/* 471 */
{
    "_id" : ObjectId("5a845fecc86da389e17084f1"),
    "sourceId" : "20170511",
    "module" : "serverwg",
    "pubDate" : ISODate("2017-06-07T12:36:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serverwg",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serverwg:20170511",
    "source" : "snyk"
},

/* 472 */
{
    "_id" : ObjectId("5a845fecc86da389e17084f0"),
    "sourceId" : "20170511",
    "module" : "serverwzl",
    "pubDate" : ISODate("2017-06-07T12:36:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serverwzl",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serverwzl:20170511",
    "source" : "snyk"
},

/* 473 */
{
    "_id" : ObjectId("5a845fecc86da389e1708491"),
    "sourceId" : "20170612",
    "module" : "serverxxx",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serverxxx",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serverxxx:20170612",
    "source" : "snyk"
},

/* 474 */
{
    "_id" : ObjectId("5a845fecc86da389e17084ef"),
    "sourceId" : "20170504",
    "module" : "serveryaozeyan",
    "pubDate" : ISODate("2017-06-07T12:36:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serveryaozeyan",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serveryaozeyan:20170504",
    "source" : "snyk"
},

/* 475 */
{
    "_id" : ObjectId("5a845fecc86da389e17084ee"),
    "sourceId" : "20170516",
    "module" : "serveryztyzt",
    "pubDate" : ISODate("2017-06-07T12:36:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serveryztyzt",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serveryztyzt:20170516",
    "source" : "snyk"
},

/* 476 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc0a"),
    "sourceId" : "20180315",
    "module" : "serverzyqzyq",
    "pubDate" : ISODate("2018-03-15T15:30:15.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serverzyqzyq",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serverzyqzyq:20180315",
    "source" : "snyk"
},

/* 477 */
{
    "_id" : ObjectId("5a845fecc86da389e17084ed"),
    "sourceId" : "20170430",
    "module" : "serverzyy",
    "pubDate" : ISODate("2017-06-07T12:36:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in serverzyy",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serverzyy:20170430",
    "source" : "snyk"
},

/* 478 */
{
    "_id" : ObjectId("5a845fecc86da389e1708425"),
    "sourceId" : "20171006",
    "module" : "severzlt",
    "pubDate" : ISODate("2017-10-17T10:45:45.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in severzlt",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:severzlt:20171006",
    "source" : "snyk"
},

/* 479 */
{
    "_id" : ObjectId("5a845fecc86da389e17084ec"),
    "sourceId" : "20170518",
    "module" : "sgqserve",
    "pubDate" : ISODate("2017-06-07T12:36:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in sgqserve",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sgqserve:20170518",
    "source" : "snyk"
},

/* 480 */
{
    "_id" : ObjectId("5a845fecc86da389e170849e"),
    "sourceId" : "20170612",
    "module" : "shenliru",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in shenliru",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:shenliru:20170612",
    "source" : "snyk"
},

/* 481 */
{
    "_id" : ObjectId("5a845fecc86da389e17084eb"),
    "sourceId" : "20170511",
    "module" : "shit-server",
    "pubDate" : ISODate("2017-06-07T12:36:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in shit-server",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:shit-server:20170511",
    "source" : "snyk"
},

/* 482 */
{
    "_id" : ObjectId("5a845fecc86da389e1708492"),
    "sourceId" : "20170612",
    "module" : "simple-npm-registry",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in simple-npm-registry",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:simple-npm-registry:20170612",
    "source" : "snyk"
},

/* 483 */
{
    "_id" : ObjectId("5a845fecc86da389e17084ea"),
    "sourceId" : "20170518",
    "module" : "sly07",
    "pubDate" : ISODate("2017-06-07T12:36:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in sly07",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sly07:20170518",
    "source" : "snyk"
},

/* 484 */
{
    "_id" : ObjectId("5a845fecc86da389e1708464"),
    "sourceId" : "20170730",
    "module" : "srverqq",
    "pubDate" : ISODate("2017-08-02T13:08:55.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in srverqq",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:srverqq:20170730",
    "source" : "snyk"
},

/* 485 */
{
    "_id" : ObjectId("5a845fecc86da389e17084e9"),
    "sourceId" : "20170510",
    "module" : "sspa",
    "pubDate" : ISODate("2017-06-07T12:36:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in sspa",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sspa:20170510",
    "source" : "snyk"
},

/* 486 */
{
    "_id" : ObjectId("5a845fecc86da389e170871b"),
    "sourceId" : "20140206",
    "module" : "st",
    "pubDate" : ISODate("2014-02-06T07:33:48.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in st",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:st:20140206",
    "source" : "snyk"
},

/* 487 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc09"),
    "sourceId" : "20180315",
    "module" : "starfruit",
    "pubDate" : ISODate("2018-03-15T15:30:15.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in starfruit",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:starfruit:20180315",
    "source" : "snyk"
},

/* 488 */
{
    "_id" : ObjectId("5a845fecc86da389e17084e8"),
    "sourceId" : "20170418",
    "module" : "static-html-server",
    "pubDate" : ISODate("2017-06-07T12:36:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in static-html-server",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:static-html-server:20170418",
    "source" : "snyk"
},

/* 489 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc08"),
    "sourceId" : "20180315",
    "module" : "stevenc4.server",
    "pubDate" : ISODate("2018-03-15T15:30:16.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in stevenc4.server",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:stevenc4.server:20180315",
    "source" : "snyk"
},

/* 490 */
{
    "_id" : ObjectId("5a845fecc86da389e1708494"),
    "sourceId" : "20170617",
    "module" : "susu-sum",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in susu-sum",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:susu-sum:20170617",
    "source" : "snyk"
},

/* 491 */
{
    "_id" : ObjectId("5a845fecc86da389e17084e7"),
    "sourceId" : "20170503",
    "module" : "tencent-server",
    "pubDate" : ISODate("2017-06-07T12:36:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in tencent-server",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:tencent-server:20170503",
    "source" : "snyk"
},

/* 492 */
{
    "_id" : ObjectId("5a845fecc86da389e17084e6"),
    "sourceId" : "20170418",
    "module" : "tiny-http",
    "pubDate" : ISODate("2017-06-07T12:36:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in tiny-http",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:tiny-http:20170418",
    "source" : "snyk"
},

/* 493 */
{
    "_id" : ObjectId("5a845fecc86da389e170842a"),
    "sourceId" : "20170910",
    "module" : "tinyserver",
    "pubDate" : ISODate("2017-10-09T15:29:36.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in tinyserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:tinyserver:20170910",
    "source" : "snyk"
},

/* 494 */
{
    "_id" : ObjectId("5a845fecc86da389e17084e5"),
    "sourceId" : "20170503",
    "module" : "tinyserver2",
    "pubDate" : ISODate("2017-06-07T12:36:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in tinyserver2",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:tinyserver2:20170503",
    "source" : "snyk"
},

/* 495 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc07"),
    "sourceId" : "20180315",
    "module" : "tmadserver",
    "pubDate" : ISODate("2018-03-15T15:30:17.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in tmadserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:tmadserver:20180315",
    "source" : "snyk"
},

/* 496 */
{
    "_id" : ObjectId("5a845fecc86da389e17084e4"),
    "sourceId" : "20170420",
    "module" : "tmock",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in tmock",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:tmock:20170420",
    "source" : "snyk"
},

/* 497 */
{
    "_id" : ObjectId("5a845fecc86da389e17084e3"),
    "sourceId" : "20170509",
    "module" : "uekw1511server",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in uekw1511server",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:uekw1511server:20170509",
    "source" : "snyk"
},

/* 498 */
{
    "_id" : ObjectId("5a845fecc86da389e17084e2"),
    "sourceId" : "20170510",
    "module" : "unicorn-list",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in unicorn-list",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:unicorn-list:20170510",
    "source" : "snyk"
},

/* 499 */
{
    "_id" : ObjectId("5a845fecc86da389e17084e1"),
    "sourceId" : "20170510",
    "module" : "utahcityfinder",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in utahcityfinder",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:utahcityfinder:20170510",
    "source" : "snyk"
},

/* 500 */
{
    "_id" : ObjectId("5a845fecc86da389e17084df"),
    "sourceId" : "20170509",
    "module" : "uv-tj-demo",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in uv-tj-demo",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:uv-tj-demo:20170509",
    "source" : "snyk"
},

/* 501 */
{
    "_id" : ObjectId("5a845fecc86da389e17084de"),
    "sourceId" : "20170518",
    "module" : "wangguojing123",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in wangguojing123",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:wangguojing123:20170518",
    "source" : "snyk"
},

/* 502 */
{
    "_id" : ObjectId("5a845fecc86da389e1708429"),
    "sourceId" : "20170910",
    "module" : "wangshuai",
    "pubDate" : ISODate("2017-10-09T15:29:36.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in wangshuai",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:wangshuai:20170910",
    "source" : "snyk"
},

/* 503 */
{
    "_id" : ObjectId("5a845fecc86da389e17084db"),
    "sourceId" : "20170427",
    "module" : "weather.swlyons",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in weather.swlyons",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:weather.swlyons:20170427",
    "source" : "snyk"
},

/* 504 */
{
    "_id" : ObjectId("5a845fecc86da389e17084a8"),
    "sourceId" : "20170112",
    "module" : "web-debug",
    "pubDate" : ISODate("2017-06-28T13:20:51.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in web-debug",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:web-debug:20170112",
    "source" : "snyk"
},

/* 505 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc06"),
    "sourceId" : "20180315",
    "module" : "webrepl",
    "pubDate" : ISODate("2018-03-15T15:30:17.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in webrepl",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:webrepl:20180315",
    "source" : "snyk"
},

/* 506 */
{
    "_id" : ObjectId("5a845fecc86da389e1708496"),
    "sourceId" : "20170617",
    "module" : "welcomyzt",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in welcomyzt",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:welcomyzt:20170617",
    "source" : "snyk"
},

/* 507 */
{
    "_id" : ObjectId("5a845fecc86da389e17084d9"),
    "sourceId" : "20170509",
    "module" : "wenluhong1",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in wenluhong1",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:wenluhong1:20170509",
    "source" : "snyk"
},

/* 508 */
{
    "_id" : ObjectId("5a845fecc86da389e17084be"),
    "sourceId" : "20170525",
    "module" : "wffserve",
    "pubDate" : ISODate("2017-06-12T13:46:46.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in wffserve",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:wffserve:20170525",
    "source" : "snyk"
},

/* 509 */
{
    "_id" : ObjectId("5a845fecc86da389e17084d8"),
    "sourceId" : "20170511",
    "module" : "whispercast",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in whispercast",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:whispercast:20170511",
    "source" : "snyk"
},

/* 510 */
{
    "_id" : ObjectId("5a845fecc86da389e17084d7"),
    "sourceId" : "20170503",
    "module" : "wind-mvc",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in wind-mvc",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:wind-mvc:20170503",
    "source" : "snyk"
},

/* 511 */
{
    "_id" : ObjectId("5a845fecc86da389e17084d5"),
    "sourceId" : "20170521",
    "module" : "wintiwebdev",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in wintiwebdev",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:wintiwebdev:20170521",
    "source" : "snyk"
},

/* 512 */
{
    "_id" : ObjectId("5a845fecc86da389e1708428"),
    "sourceId" : "20170910",
    "module" : "xbhxbh",
    "pubDate" : ISODate("2017-10-09T15:29:36.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in xbhxbh",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:xbhxbh:20170910",
    "source" : "snyk"
},

/* 513 */
{
    "_id" : ObjectId("5a845fecc86da389e17084d1"),
    "sourceId" : "20170504",
    "module" : "xiongrui-httpserver",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in xiongrui-httpserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:xiongrui-httpserver:20170504",
    "source" : "snyk"
},

/* 514 */
{
    "_id" : ObjectId("5a845fecc86da389e17084cf"),
    "sourceId" : "20170418",
    "module" : "xtalk",
    "pubDate" : ISODate("2017-06-07T12:36:58.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in xtalk",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:xtalk:20170418",
    "source" : "snyk"
},

/* 515 */
{
    "_id" : ObjectId("5a845fecc86da389e1708462"),
    "sourceId" : "20170730",
    "module" : "xxf11",
    "pubDate" : ISODate("2017-08-02T13:08:56.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in xxf11",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:xxf11:20170730",
    "source" : "snyk"
},

/* 516 */
{
    "_id" : ObjectId("5a845fecc86da389e1708498"),
    "sourceId" : "20170617",
    "module" : "yjmyjmyjm",
    "pubDate" : ISODate("2017-07-11T06:59:47.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in yjmyjmyjm",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:yjmyjmyjm:20170617",
    "source" : "snyk"
},

/* 517 */
{
    "_id" : ObjectId("5a845fecc86da389e17084cd"),
    "sourceId" : "20170521",
    "module" : "yttivy",
    "pubDate" : ISODate("2017-06-07T12:36:58.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in yttivy",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:yttivy:20170521",
    "source" : "snyk"
},

/* 518 */
{
    "_id" : ObjectId("5a845fecc86da389e17084cc"),
    "sourceId" : "20170516",
    "module" : "yyooopack",
    "pubDate" : ISODate("2017-06-07T12:36:58.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in yyooopack",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:yyooopack:20170516",
    "source" : "snyk"
},

/* 519 */
{
    "_id" : ObjectId("5a845fecc86da389e17084cb"),
    "sourceId" : "20170509",
    "module" : "yzt",
    "pubDate" : ISODate("2017-06-07T12:36:58.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in yzt",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:yzt:20170509",
    "source" : "snyk"
},

/* 520 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc05"),
    "sourceId" : "20180315",
    "module" : "zhaolei1111",
    "pubDate" : ISODate("2018-03-15T15:30:18.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in zhaolei1111",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:zhaolei1111:20180315",
    "source" : "snyk"
},

/* 521 */
{
    "_id" : ObjectId("5a845fecc86da389e17084ca"),
    "sourceId" : "20170509",
    "module" : "zjjserver",
    "pubDate" : ISODate("2017-06-07T12:36:58.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in zjjserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:zjjserver:20170509",
    "source" : "snyk"
},

/* 522 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc04"),
    "sourceId" : "20180315",
    "module" : "zs123",
    "pubDate" : ISODate("2018-03-15T15:30:18.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in zs123",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:zs123:20180315",
    "source" : "snyk"
},

/* 523 */
{
    "_id" : ObjectId("5a845fecc86da389e1708503"),
    "sourceId" : "20170516",
    "module" : "zwserver",
    "pubDate" : ISODate("2017-06-07T12:36:54.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Directory Traversal in zwserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:zwserver:20170516",
    "source" : "snyk"
},

/* 524 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a63"),
    "sourceId" : 120,
    "module" : "ws",
    "pubDate" : ISODate("2016-06-24T17:13:33.000Z"),
    "attackType" : "Denial of Service",
    "title" : "DoS due to excessively large websocket message",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/120",
    "source" : "nsp"
},

/* 525 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475985"),
    "sourceId" : 249,
    "module" : "ikst",
    "pubDate" : ISODate("2017-07-05T21:41:01.426Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/249",
    "source" : "nsp"
},

/* 526 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475986"),
    "sourceId" : 291,
    "module" : "gfe-sass",
    "pubDate" : ISODate("2017-07-05T21:40:42.794Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/291",
    "source" : "nsp"
},

/* 527 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759b0"),
    "sourceId" : 304,
    "module" : "windows-build-tools",
    "pubDate" : ISODate("2017-01-06T16:50:17.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/304",
    "source" : "nsp"
},

/* 528 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759b1"),
    "sourceId" : 301,
    "module" : "mystem-fix",
    "pubDate" : ISODate("2017-01-01T04:33:32.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/301",
    "source" : "nsp"
},

/* 529 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759b2"),
    "sourceId" : 302,
    "module" : "react-native-baidu-voice-synthesizer",
    "pubDate" : ISODate("2017-01-01T04:32:48.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/302",
    "source" : "nsp"
},

/* 530 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759b3"),
    "sourceId" : 295,
    "module" : "windows-latestchromedriver",
    "pubDate" : ISODate("2017-01-01T04:32:34.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/295",
    "source" : "nsp"
},

/* 531 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759b4"),
    "sourceId" : 297,
    "module" : "npm-test-sqlite3-trunk",
    "pubDate" : ISODate("2017-01-01T04:32:09.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/297",
    "source" : "nsp"
},

/* 532 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759b5"),
    "sourceId" : 172,
    "module" : "alto-saxophone",
    "pubDate" : ISODate("2017-01-01T04:31:50.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/172",
    "source" : "nsp"
},

/* 533 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759b6"),
    "sourceId" : 299,
    "module" : "pm2-kafka",
    "pubDate" : ISODate("2017-01-01T04:30:52.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/299",
    "source" : "nsp"
},

/* 534 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759b7"),
    "sourceId" : 300,
    "module" : "haxeshim",
    "pubDate" : ISODate("2017-01-01T04:30:46.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/300",
    "source" : "nsp"
},

/* 535 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759b8"),
    "sourceId" : 296,
    "module" : "windows-seleniumjar",
    "pubDate" : ISODate("2017-01-01T04:30:42.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/296",
    "source" : "nsp"
},

/* 536 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759b9"),
    "sourceId" : 298,
    "module" : "openframe-ascii-image",
    "pubDate" : ISODate("2017-01-01T04:30:36.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/298",
    "source" : "nsp"
},

/* 537 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759ba"),
    "sourceId" : 293,
    "module" : "windows-iedriver",
    "pubDate" : ISODate("2017-01-01T04:29:03.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/293",
    "source" : "nsp"
},

/* 538 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759bb"),
    "sourceId" : 294,
    "module" : "haxe3",
    "pubDate" : ISODate("2017-01-01T04:28:58.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/294",
    "source" : "nsp"
},

/* 539 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759bc"),
    "sourceId" : 285,
    "module" : "windows-selenium-chromedriver",
    "pubDate" : ISODate("2017-01-01T04:28:55.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/285",
    "source" : "nsp"
},

/* 540 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759bd"),
    "sourceId" : 287,
    "module" : "fis-sass-all",
    "pubDate" : ISODate("2017-01-01T04:28:49.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/287",
    "source" : "nsp"
},

/* 541 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759be"),
    "sourceId" : 289,
    "module" : "pk-app-wonderbox",
    "pubDate" : ISODate("2017-01-01T04:28:45.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/289",
    "source" : "nsp"
},

/* 542 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759bf"),
    "sourceId" : 288,
    "module" : "healthcenter",
    "pubDate" : ISODate("2017-01-01T04:28:41.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/288",
    "source" : "nsp"
},

/* 543 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759c0"),
    "sourceId" : 286,
    "module" : "arcanist",
    "pubDate" : ISODate("2017-01-01T04:28:35.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/286",
    "source" : "nsp"
},

/* 544 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759c1"),
    "sourceId" : 290,
    "module" : "massif",
    "pubDate" : ISODate("2017-01-01T04:28:30.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/290",
    "source" : "nsp"
},

/* 545 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759c2"),
    "sourceId" : 292,
    "module" : "roslib-socketio",
    "pubDate" : ISODate("2017-01-01T04:28:25.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/292",
    "source" : "nsp"
},

/* 546 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759c3"),
    "sourceId" : 283,
    "module" : "adamvr-geoip-lite",
    "pubDate" : ISODate("2017-01-01T04:26:36.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/283",
    "source" : "nsp"
},

/* 547 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759c4"),
    "sourceId" : 284,
    "module" : "selenium-standalone-painful",
    "pubDate" : ISODate("2017-01-01T04:26:31.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/284",
    "source" : "nsp"
},

/* 548 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759c5"),
    "sourceId" : 277,
    "module" : "serc.js",
    "pubDate" : ISODate("2017-01-01T04:26:28.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/277",
    "source" : "nsp"
},

/* 549 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759c6"),
    "sourceId" : 274,
    "module" : "google-closure-tools-latest",
    "pubDate" : ISODate("2017-01-01T04:26:21.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/274",
    "source" : "nsp"
},

/* 550 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759c7"),
    "sourceId" : 273,
    "module" : "rs-brightcove",
    "pubDate" : ISODate("2017-01-01T04:26:16.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/273",
    "source" : "nsp"
},

/* 551 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759c8"),
    "sourceId" : 275,
    "module" : "libsbmlsim",
    "pubDate" : ISODate("2017-01-01T04:26:11.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/275",
    "source" : "nsp"
},

/* 552 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759c9"),
    "sourceId" : 276,
    "module" : "limbus-buildgen",
    "pubDate" : ISODate("2017-01-01T04:26:05.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/276",
    "source" : "nsp"
},

/* 553 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759ca"),
    "sourceId" : 279,
    "module" : "ipip-coffee",
    "pubDate" : ISODate("2017-01-01T04:25:56.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/279",
    "source" : "nsp"
},

/* 554 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759cb"),
    "sourceId" : 282,
    "module" : "cloudpub-redis",
    "pubDate" : ISODate("2017-01-01T04:25:51.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/282",
    "source" : "nsp"
},

/* 555 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759cc"),
    "sourceId" : 280,
    "module" : "mystem-wrapper",
    "pubDate" : ISODate("2017-01-01T04:25:47.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/280",
    "source" : "nsp"
},

/* 556 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759cd"),
    "sourceId" : 281,
    "module" : "windows-seleniumjar-mirror",
    "pubDate" : ISODate("2017-01-01T04:24:49.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/281",
    "source" : "nsp"
},

/* 557 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759ce"),
    "sourceId" : 270,
    "module" : "soci",
    "pubDate" : ISODate("2017-01-01T04:24:05.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/270",
    "source" : "nsp"
},

/* 558 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759cf"),
    "sourceId" : 272,
    "module" : "libsbml",
    "pubDate" : ISODate("2017-01-01T04:24:00.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/272",
    "source" : "nsp"
},

/* 559 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759d0"),
    "sourceId" : 260,
    "module" : "selenium-portal",
    "pubDate" : ISODate("2017-01-01T04:23:54.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/260",
    "source" : "nsp"
},

/* 560 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759d1"),
    "sourceId" : 261,
    "module" : "tomita-parser",
    "pubDate" : ISODate("2017-01-01T04:23:49.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/261",
    "source" : "nsp"
},

/* 561 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759d2"),
    "sourceId" : 258,
    "module" : "herbivore",
    "pubDate" : ISODate("2017-01-01T04:23:42.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/258",
    "source" : "nsp"
},

/* 562 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759d3"),
    "sourceId" : 259,
    "module" : "mystem",
    "pubDate" : ISODate("2017-01-01T04:23:35.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/259",
    "source" : "nsp"
},

/* 563 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759d4"),
    "sourceId" : 264,
    "module" : "wixtoolset",
    "pubDate" : ISODate("2017-01-01T04:23:30.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/264",
    "source" : "nsp"
},

/* 564 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759d5"),
    "sourceId" : 267,
    "module" : "tomita",
    "pubDate" : ISODate("2017-01-01T04:23:24.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/267",
    "source" : "nsp"
},

/* 565 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759d6"),
    "sourceId" : 262,
    "module" : "phantomjs-cheniu",
    "pubDate" : ISODate("2017-01-01T04:23:20.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/262",
    "source" : "nsp"
},

/* 566 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759d7"),
    "sourceId" : 269,
    "module" : "fis-parser-sass-bin",
    "pubDate" : ISODate("2017-01-01T04:23:14.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/269",
    "source" : "nsp"
},

/* 567 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759d8"),
    "sourceId" : 271,
    "module" : "poco",
    "pubDate" : ISODate("2017-01-01T04:21:54.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/271",
    "source" : "nsp"
},

/* 568 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759d9"),
    "sourceId" : 263,
    "module" : "native-opencv",
    "pubDate" : ISODate("2017-01-01T04:21:37.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/263",
    "source" : "nsp"
},

/* 569 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759da"),
    "sourceId" : 268,
    "module" : "co-cli-installer",
    "pubDate" : ISODate("2017-01-01T04:21:17.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/268",
    "source" : "nsp"
},

/* 570 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759db"),
    "sourceId" : 266,
    "module" : "qbs",
    "pubDate" : ISODate("2017-01-01T04:20:31.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/266",
    "source" : "nsp"
},

/* 571 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759dc"),
    "sourceId" : 265,
    "module" : "clang-extra",
    "pubDate" : ISODate("2017-01-01T04:19:53.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/265",
    "source" : "nsp"
},

/* 572 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759dd"),
    "sourceId" : 256,
    "module" : "sfml",
    "pubDate" : ISODate("2017-01-01T04:18:11.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/256",
    "source" : "nsp"
},

/* 573 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759de"),
    "sourceId" : 257,
    "module" : "xd-testing",
    "pubDate" : ISODate("2017-01-01T04:17:53.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/257",
    "source" : "nsp"
},

/* 574 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759df"),
    "sourceId" : 248,
    "module" : "prebuild-lwip",
    "pubDate" : ISODate("2017-01-01T04:17:35.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/248",
    "source" : "nsp"
},

/* 575 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759e0"),
    "sourceId" : 246,
    "module" : "webdriver-launcher",
    "pubDate" : ISODate("2017-01-01T04:17:18.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/246",
    "source" : "nsp"
},

/* 576 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759e1"),
    "sourceId" : 253,
    "module" : "ntfserver",
    "pubDate" : ISODate("2017-01-01T04:16:54.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/253",
    "source" : "nsp"
},

/* 577 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759e2"),
    "sourceId" : 247,
    "module" : "frames-compiler",
    "pubDate" : ISODate("2017-01-01T04:16:38.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/247",
    "source" : "nsp"
},

/* 578 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759e3"),
    "sourceId" : 252,
    "module" : "marionette-socket-host",
    "pubDate" : ISODate("2017-01-01T04:16:17.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/252",
    "source" : "nsp"
},

/* 579 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759e4"),
    "sourceId" : 250,
    "module" : "node-air-sdk",
    "pubDate" : ISODate("2017-01-01T04:15:51.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/250",
    "source" : "nsp"
},

/* 580 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759e5"),
    "sourceId" : 254,
    "module" : "resourcehacker",
    "pubDate" : ISODate("2017-01-01T04:15:36.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/254",
    "source" : "nsp"
},

/* 581 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759e6"),
    "sourceId" : 255,
    "module" : "grunt-images",
    "pubDate" : ISODate("2017-01-01T04:15:19.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/255",
    "source" : "nsp"
},

/* 582 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759e7"),
    "sourceId" : 243,
    "module" : "slimerjs-edge",
    "pubDate" : ISODate("2017-01-01T04:14:35.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/243",
    "source" : "nsp"
},

/* 583 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759e8"),
    "sourceId" : 244,
    "module" : "jstestdriver",
    "pubDate" : ISODate("2017-01-01T04:14:03.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/244",
    "source" : "nsp"
},

/* 584 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759e9"),
    "sourceId" : 233,
    "module" : "cmake",
    "pubDate" : ISODate("2017-01-01T04:13:46.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/233",
    "source" : "nsp"
},

/* 585 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759ea"),
    "sourceId" : 234,
    "module" : "node-bsdiff-android",
    "pubDate" : ISODate("2017-01-01T04:13:31.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/234",
    "source" : "nsp"
},

/* 586 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759eb"),
    "sourceId" : 236,
    "module" : "node-thulac",
    "pubDate" : ISODate("2017-01-01T04:13:17.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/236",
    "source" : "nsp"
},

/* 587 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759ec"),
    "sourceId" : 238,
    "module" : "redis-srvr",
    "pubDate" : ISODate("2017-01-01T04:13:00.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/238",
    "source" : "nsp"
},

/* 588 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759ed"),
    "sourceId" : 241,
    "module" : "js-given",
    "pubDate" : ISODate("2017-01-01T04:12:33.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/241",
    "source" : "nsp"
},

/* 589 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759ee"),
    "sourceId" : 237,
    "module" : "haxe-dev",
    "pubDate" : ISODate("2017-01-01T04:12:22.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/237",
    "source" : "nsp"
},

/* 590 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759ef"),
    "sourceId" : 239,
    "module" : "grunt-ccompiler",
    "pubDate" : ISODate("2017-01-01T04:12:04.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/239",
    "source" : "nsp"
},

/* 591 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759f0"),
    "sourceId" : 242,
    "module" : "broccoli-closure",
    "pubDate" : ISODate("2017-01-01T04:11:20.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/242",
    "source" : "nsp"
},

/* 592 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759f1"),
    "sourceId" : 231,
    "module" : "scalajs-standalone-bin",
    "pubDate" : ISODate("2017-01-01T04:08:42.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/231",
    "source" : "nsp"
},

/* 593 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759f2"),
    "sourceId" : 232,
    "module" : "dwebp-bin",
    "pubDate" : ISODate("2017-01-01T04:08:35.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/232",
    "source" : "nsp"
},

/* 594 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759f3"),
    "sourceId" : 223,
    "module" : "apk-parser2",
    "pubDate" : ISODate("2017-01-01T04:05:59.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/223",
    "source" : "nsp"
},

/* 595 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759f4"),
    "sourceId" : 225,
    "module" : "jvminstall",
    "pubDate" : ISODate("2017-01-01T04:05:26.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/225",
    "source" : "nsp"
},

/* 596 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759f5"),
    "sourceId" : 228,
    "module" : "install-g-test",
    "pubDate" : ISODate("2017-01-01T04:05:18.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/228",
    "source" : "nsp"
},

/* 597 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759f6"),
    "sourceId" : 226,
    "module" : "nw-with-arm",
    "pubDate" : ISODate("2017-01-01T04:02:03.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/226",
    "source" : "nsp"
},

/* 598 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759f7"),
    "sourceId" : 224,
    "module" : "selenium-wrapper",
    "pubDate" : ISODate("2017-01-01T04:01:45.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/224",
    "source" : "nsp"
},

/* 599 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759f8"),
    "sourceId" : 227,
    "module" : "scala-bin",
    "pubDate" : ISODate("2017-01-01T04:01:30.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/227",
    "source" : "nsp"
},

/* 600 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759f9"),
    "sourceId" : 229,
    "module" : "mystem3",
    "pubDate" : ISODate("2017-01-01T04:01:11.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/229",
    "source" : "nsp"
},

/* 601 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759fa"),
    "sourceId" : 230,
    "module" : "headless-browser-lite",
    "pubDate" : ISODate("2017-01-01T04:00:47.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/230",
    "source" : "nsp"
},

/* 602 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759fb"),
    "sourceId" : 222,
    "module" : "selenium-chromedriver",
    "pubDate" : ISODate("2017-01-01T03:59:57.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/222",
    "source" : "nsp"
},

/* 603 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759fc"),
    "sourceId" : 221,
    "module" : "macaca-chromedriver-zxa",
    "pubDate" : ISODate("2017-01-01T03:59:47.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/221",
    "source" : "nsp"
},

/* 604 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759fd"),
    "sourceId" : 212,
    "module" : "nodeschnaps",
    "pubDate" : ISODate("2017-01-01T03:59:28.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/212",
    "source" : "nsp"
},

/* 605 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759fe"),
    "sourceId" : 217,
    "module" : "fibjs",
    "pubDate" : ISODate("2017-01-01T03:59:19.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/217",
    "source" : "nsp"
},

/* 606 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759ff"),
    "sourceId" : 216,
    "module" : "atom-node-module-installer",
    "pubDate" : ISODate("2017-01-01T03:58:58.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/216",
    "source" : "nsp"
},

/* 607 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a00"),
    "sourceId" : 213,
    "module" : "pennyworth",
    "pubDate" : ISODate("2017-01-01T03:58:39.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/213",
    "source" : "nsp"
},

/* 608 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a01"),
    "sourceId" : 214,
    "module" : "node-browser",
    "pubDate" : ISODate("2017-01-01T03:57:10.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/214",
    "source" : "nsp"
},

/* 609 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a02"),
    "sourceId" : 219,
    "module" : "box2d-native",
    "pubDate" : ISODate("2017-01-01T03:56:45.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/219",
    "source" : "nsp"
},

/* 610 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a03"),
    "sourceId" : 218,
    "module" : "openframe-image",
    "pubDate" : ISODate("2017-01-01T03:56:23.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/218",
    "source" : "nsp"
},

/* 611 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a04"),
    "sourceId" : 215,
    "module" : "curses",
    "pubDate" : ISODate("2017-01-01T03:56:03.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/215",
    "source" : "nsp"
},

/* 612 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a05"),
    "sourceId" : 210,
    "module" : "httpsync",
    "pubDate" : ISODate("2017-01-01T02:29:36.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/210",
    "source" : "nsp"
},

/* 613 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a06"),
    "sourceId" : 211,
    "module" : "bionode-sra",
    "pubDate" : ISODate("2017-01-01T02:29:22.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/211",
    "source" : "nsp"
},

/* 614 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a07"),
    "sourceId" : 205,
    "module" : "dalek-browser-ie-canary",
    "pubDate" : ISODate("2017-01-01T02:29:11.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/205",
    "source" : "nsp"
},

/* 615 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a08"),
    "sourceId" : 202,
    "module" : "strider-sauce",
    "pubDate" : ISODate("2017-01-01T02:29:00.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/202",
    "source" : "nsp"
},

/* 616 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a09"),
    "sourceId" : 206,
    "module" : "unicode-json",
    "pubDate" : ISODate("2017-01-01T02:28:49.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/206",
    "source" : "nsp"
},

/* 617 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a0a"),
    "sourceId" : 203,
    "module" : "chromedriver126",
    "pubDate" : ISODate("2017-01-01T02:28:37.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/203",
    "source" : "nsp"
},

/* 618 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a0b"),
    "sourceId" : 201,
    "module" : "robot-js",
    "pubDate" : ISODate("2017-01-01T02:28:23.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/201",
    "source" : "nsp"
},

/* 619 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a0c"),
    "sourceId" : 208,
    "module" : "openframe-glslviewer",
    "pubDate" : ISODate("2017-01-01T02:28:15.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/208",
    "source" : "nsp"
},

/* 620 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a0d"),
    "sourceId" : 207,
    "module" : "grunt-webdriver-qunit",
    "pubDate" : ISODate("2017-01-01T02:27:58.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/207",
    "source" : "nsp"
},

/* 621 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a0e"),
    "sourceId" : 209,
    "module" : "dalek-browser-ie",
    "pubDate" : ISODate("2017-01-01T02:27:48.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/209",
    "source" : "nsp"
},

/* 622 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a0f"),
    "sourceId" : 199,
    "module" : "dalek-browser-chrome",
    "pubDate" : ISODate("2017-01-01T01:47:59.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/199",
    "source" : "nsp"
},

/* 623 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a10"),
    "sourceId" : 200,
    "module" : "air-sdk",
    "pubDate" : ISODate("2017-01-01T01:47:48.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/200",
    "source" : "nsp"
},

/* 624 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a11"),
    "sourceId" : 177,
    "module" : "haxe",
    "pubDate" : ISODate("2017-01-01T01:47:19.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/177",
    "source" : "nsp"
},

/* 625 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a12"),
    "sourceId" : 193,
    "module" : "webdrvr",
    "pubDate" : ISODate("2017-01-01T01:43:37.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/193",
    "source" : "nsp"
},

/* 626 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a13"),
    "sourceId" : 176,
    "module" : "webrtc-native",
    "pubDate" : ISODate("2017-01-01T01:43:16.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/176",
    "source" : "nsp"
},

/* 627 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a14"),
    "sourceId" : 186,
    "module" : "sauce-connect",
    "pubDate" : ISODate("2017-01-01T01:42:58.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/186",
    "source" : "nsp"
},

/* 628 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a15"),
    "sourceId" : 192,
    "module" : "arrayfire-js",
    "pubDate" : ISODate("2017-01-01T01:42:01.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/192",
    "source" : "nsp"
},

/* 629 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a16"),
    "sourceId" : 197,
    "module" : "cobalt-cli",
    "pubDate" : ISODate("2017-01-01T01:40:41.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/197",
    "source" : "nsp"
},

/* 630 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a17"),
    "sourceId" : 194,
    "module" : "imageoptim",
    "pubDate" : ISODate("2017-01-01T01:40:25.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/194",
    "source" : "nsp"
},

/* 631 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a18"),
    "sourceId" : 198,
    "module" : "jdf-sass",
    "pubDate" : ISODate("2017-01-01T01:38:49.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/198",
    "source" : "nsp"
},

/* 632 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a19"),
    "sourceId" : 184,
    "module" : "ipip",
    "pubDate" : ISODate("2016-12-21T23:50:49.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/184",
    "source" : "nsp"
},

/* 633 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a1a"),
    "sourceId" : 182,
    "module" : "ibapi",
    "pubDate" : ISODate("2016-12-21T23:49:49.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/182",
    "source" : "nsp"
},

/* 634 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a1b"),
    "sourceId" : 188,
    "module" : "jser-stat",
    "pubDate" : ISODate("2016-12-21T23:49:12.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/188",
    "source" : "nsp"
},

/* 635 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a1c"),
    "sourceId" : 185,
    "module" : "prince",
    "pubDate" : ISODate("2016-12-21T23:46:48.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/185",
    "source" : "nsp"
},

/* 636 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a1d"),
    "sourceId" : 190,
    "module" : "cue-sdk-node",
    "pubDate" : ISODate("2016-12-21T23:44:26.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/190",
    "source" : "nsp"
},

/* 637 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a1e"),
    "sourceId" : 175,
    "module" : "selenium-binaries",
    "pubDate" : ISODate("2016-12-18T22:51:41.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/175",
    "source" : "nsp"
},

/* 638 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a1f"),
    "sourceId" : 166,
    "module" : "nw",
    "pubDate" : ISODate("2016-12-18T22:51:25.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/166",
    "source" : "nsp"
},

/* 639 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a20"),
    "sourceId" : 179,
    "module" : "wasdk",
    "pubDate" : ISODate("2016-12-18T22:51:00.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/179",
    "source" : "nsp"
},

/* 640 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a21"),
    "sourceId" : 180,
    "module" : "macaca-chromedriver",
    "pubDate" : ISODate("2016-12-18T22:50:43.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/180",
    "source" : "nsp"
},

/* 641 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a22"),
    "sourceId" : 178,
    "module" : "libxl",
    "pubDate" : ISODate("2016-12-18T22:48:43.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/178",
    "source" : "nsp"
},

/* 642 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a23"),
    "sourceId" : 181,
    "module" : "dalek-browser-chrome-canary",
    "pubDate" : ISODate("2016-12-18T22:48:30.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/181",
    "source" : "nsp"
},

/* 643 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a24"),
    "sourceId" : 165,
    "module" : "closure-util",
    "pubDate" : ISODate("2016-12-18T22:47:57.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/165",
    "source" : "nsp"
},

/* 644 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a25"),
    "sourceId" : 169,
    "module" : "closurecompiler",
    "pubDate" : ISODate("2016-12-18T22:47:42.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/169",
    "source" : "nsp"
},

/* 645 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a26"),
    "sourceId" : 168,
    "module" : "steroids",
    "pubDate" : ISODate("2016-12-18T22:47:19.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/168",
    "source" : "nsp"
},

/* 646 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a27"),
    "sourceId" : 173,
    "module" : "nodewebkit",
    "pubDate" : ISODate("2016-12-18T22:47:03.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/173",
    "source" : "nsp"
},

/* 647 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a28"),
    "sourceId" : 160,
    "module" : "chromedriver",
    "pubDate" : ISODate("2016-12-18T22:46:48.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/160",
    "source" : "nsp"
},

/* 648 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a29"),
    "sourceId" : 161,
    "module" : "unicode",
    "pubDate" : ISODate("2016-12-18T22:46:36.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/161",
    "source" : "nsp"
},

/* 649 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a2a"),
    "sourceId" : 163,
    "module" : "ibm_db",
    "pubDate" : ISODate("2016-12-18T22:46:16.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/163",
    "source" : "nsp"
},

/* 650 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a2b"),
    "sourceId" : 278,
    "module" : "fuseki",
    "pubDate" : ISODate("2016-12-16T00:27:09.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/278",
    "source" : "nsp"
},

/* 651 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a2c"),
    "sourceId" : 251,
    "module" : "kindlegen",
    "pubDate" : ISODate("2016-12-16T00:26:26.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/251",
    "source" : "nsp"
},

/* 652 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a2d"),
    "sourceId" : 245,
    "module" : "apk-parser3",
    "pubDate" : ISODate("2016-12-16T00:25:54.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/245",
    "source" : "nsp"
},

/* 653 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a2e"),
    "sourceId" : 240,
    "module" : "baryton-saxophone",
    "pubDate" : ISODate("2016-12-16T00:25:27.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/240",
    "source" : "nsp"
},

/* 654 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a2f"),
    "sourceId" : 235,
    "module" : "mongodb-instance",
    "pubDate" : ISODate("2016-12-16T00:24:46.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/235",
    "source" : "nsp"
},

/* 655 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a30"),
    "sourceId" : 220,
    "module" : "bkjs-wand",
    "pubDate" : ISODate("2016-12-16T00:24:26.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/220",
    "source" : "nsp"
},

/* 656 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a31"),
    "sourceId" : 189,
    "module" : "pngcrush-installer",
    "pubDate" : ISODate("2016-12-16T00:24:02.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/189",
    "source" : "nsp"
},

/* 657 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a32"),
    "sourceId" : 187,
    "module" : "embedza",
    "pubDate" : ISODate("2016-12-16T00:23:52.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/187",
    "source" : "nsp"
},

/* 658 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a33"),
    "sourceId" : 183,
    "module" : "geoip-lite-country",
    "pubDate" : ISODate("2016-12-16T00:23:22.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/183",
    "source" : "nsp"
},

/* 659 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a34"),
    "sourceId" : 171,
    "module" : "product-monitor",
    "pubDate" : ISODate("2016-12-16T00:22:56.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/171",
    "source" : "nsp"
},

/* 660 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a35"),
    "sourceId" : 204,
    "module" : "install-nw",
    "pubDate" : ISODate("2016-12-16T00:22:03.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/204",
    "source" : "nsp"
},

/* 661 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a36"),
    "sourceId" : 196,
    "module" : "operadriver",
    "pubDate" : ISODate("2016-12-16T00:21:23.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/196",
    "source" : "nsp"
},

/* 662 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a37"),
    "sourceId" : 195,
    "module" : "apk-parser",
    "pubDate" : ISODate("2016-12-16T00:21:12.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/195",
    "source" : "nsp"
},

/* 663 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a38"),
    "sourceId" : 156,
    "module" : "go-ipfs-dep",
    "pubDate" : ISODate("2016-12-16T00:20:49.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/156",
    "source" : "nsp"
},

/* 664 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a39"),
    "sourceId" : 174,
    "module" : "iedriver",
    "pubDate" : ISODate("2016-12-16T00:19:37.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/174",
    "source" : "nsp"
},

/* 665 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a3c"),
    "sourceId" : 170,
    "module" : "galenframework-cli",
    "pubDate" : ISODate("2016-12-06T01:09:10.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/170",
    "source" : "nsp"
},

/* 666 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a3d"),
    "sourceId" : 164,
    "module" : "selenium-download",
    "pubDate" : ISODate("2016-12-06T01:08:20.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/164",
    "source" : "nsp"
},

/* 667 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a3e"),
    "sourceId" : 167,
    "module" : "aerospike",
    "pubDate" : ISODate("2016-12-06T01:05:40.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/167",
    "source" : "nsp"
},

/* 668 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475a3f"),
    "sourceId" : 162,
    "module" : "appium-chromedriver",
    "pubDate" : ISODate("2016-12-06T01:04:28.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads Resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/162",
    "source" : "nsp"
},

/* 669 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647598b"),
    "sourceId" : 334,
    "module" : "hubl-server",
    "pubDate" : ISODate("2017-06-05T12:37:07.359Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Downloads resources over HTTP",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/334",
    "source" : "nsp"
},

/* 670 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475993"),
    "sourceId" : 330,
    "module" : "jquery",
    "pubDate" : ISODate("2017-04-14T22:04:14.245Z"),
    "attackType" : "Denial of Service",
    "title" : "Exceeding Stack Call Limit DoS",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/330",
    "source" : "nsp"
},

/* 671 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758df"),
    "sourceId" : 545,
    "module" : "discordi.js",
    "pubDate" : ISODate("2017-10-09T16:59:58.947Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Exfiltrates Discord login tokens to pastebin",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/545",
    "source" : "nsp"
},

/* 672 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758e0"),
    "sourceId" : 540,
    "module" : "cofee-script",
    "pubDate" : ISODate("2017-10-06T06:55:27.158Z"),
    "attackType" : "Malicious Package",
    "title" : "Exfiltrates data on installation",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/540",
    "source" : "nsp"
},

/* 673 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758e1"),
    "sourceId" : 542,
    "module" : "coffescript",
    "pubDate" : ISODate("2017-10-06T06:55:16.817Z"),
    "attackType" : "Malicious Package",
    "title" : "Exfiltrates data on installation",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/542",
    "source" : "nsp"
},

/* 674 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758e2"),
    "sourceId" : 544,
    "module" : "jquey",
    "pubDate" : ISODate("2017-10-06T06:55:01.969Z"),
    "attackType" : "Malicious Package",
    "title" : "Exfiltrates data on installation",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/544",
    "source" : "nsp"
},

/* 675 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758e3"),
    "sourceId" : 543,
    "module" : "coffe-script",
    "pubDate" : ISODate("2017-10-06T06:54:52.137Z"),
    "attackType" : "Malicious Package",
    "title" : "Exfiltrates data on installation",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/543",
    "source" : "nsp"
},

/* 676 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758e4"),
    "sourceId" : 541,
    "module" : "cofeescript",
    "pubDate" : ISODate("2017-10-06T06:54:38.827Z"),
    "attackType" : "Malicious Package",
    "title" : "Exfiltrates data on installation",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/541",
    "source" : "nsp"
},

/* 677 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758b5"),
    "sourceId" : 564,
    "module" : "fastify",
    "pubDate" : ISODate("2018-01-25T17:24:36.306Z"),
    "attackType" : "Denial of Service",
    "title" : "Fastify denial-of-service vulnerability with large JSON payloads",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/564",
    "source" : "nsp"
},

/* 678 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475ab4"),
    "sourceId" : 11,
    "module" : "hapi",
    "pubDate" : ISODate("2014-02-14T17:33:48.000Z"),
    "attackType" : "Denial of Service",
    "title" : "File Descriptor Leak Can Cause DoS Vulnerability",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/11",
    "source" : "nsp"
},

/* 679 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a55"),
    "sourceId" : 88,
    "module" : "jws",
    "pubDate" : ISODate("2016-07-26T17:21:17.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Forgeable Public/Private Tokens",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/88",
    "source" : "nsp"
},

/* 680 */
{
    "_id" : ObjectId("5a845fecc86da389e1708683"),
    "sourceId" : "20160804",
    "module" : "jwt-simple",
    "pubDate" : ISODate("2016-10-31T03:44:13.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Forgeable public/private tokens in jwt-simple",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:jwt-simple:20160804",
    "source" : "snyk"
},

/* 681 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758cd"),
    "sourceId" : 546,
    "module" : "aegir",
    "pubDate" : ISODate("2017-10-13T23:37:30.166Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Github Token Leak",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/546",
    "source" : "nsp"
},

/* 682 */
{
    "_id" : ObjectId("5a845fecc86da389e1708587"),
    "sourceId" : "20160519",
    "module" : "ag-grid",
    "pubDate" : ISODate("2017-03-16T09:05:41.000Z"),
    "attackType" : "Injection Attack",
    "title" : "HTML Injection in ag-grid",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ag-grid:20160519",
    "source" : "snyk"
},

/* 683 */
{
    "_id" : ObjectId("5a845fecc86da389e17085a3"),
    "sourceId" : "20150122",
    "module" : "shout",
    "pubDate" : ISODate("2017-02-13T17:29:14.000Z"),
    "attackType" : "Injection Attack",
    "title" : "HTML Injection in shout",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:shout:20150122",
    "source" : "snyk"
},

/* 684 */
{
    "_id" : ObjectId("5a845fecc86da389e170871c"),
    "sourceId" : "20140204",
    "module" : "libyaml",
    "pubDate" : ISODate("2014-02-04T07:31:34.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Heap-based Buffer Overflow in libyaml",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:libyaml:20140204",
    "source" : "snyk"
},

/* 685 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475aa3"),
    "sourceId" : 14,
    "module" : "inert",
    "pubDate" : ISODate("2014-12-16T03:13:48.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Hidden Directories Always Served",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/14",
    "source" : "nsp"
},

/* 686 */
{
    "_id" : ObjectId("5a845fecc86da389e1708708"),
    "sourceId" : "20141215",
    "module" : "inert",
    "pubDate" : ISODate("2014-12-15T17:13:48.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Hidden Directories Leakage in inert",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:inert:20141215",
    "source" : "snyk"
},

/* 687 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758c0"),
    "sourceId" : 558,
    "module" : "libp2p-secio",
    "pubDate" : ISODate("2018-01-15T17:07:03.984Z"),
    "attackType" : "Broken Access Control",
    "title" : "Identity Spoofing",
    "severity" : "critical",
    "url" : "https://nodesecurity.io/advisories/558",
    "source" : "nsp"
},

/* 688 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a40"),
    "sourceId" : 102,
    "module" : "sequelize",
    "pubDate" : ISODate("2016-10-31T20:33:10.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Improper Escaping of Bound Arrays",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/102",
    "source" : "nsp"
},

/* 689 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbfb"),
    "sourceId" : "20180209",
    "module" : "insight-api",
    "pubDate" : ISODate("2018-03-27T02:42:10.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Improper Input Validation in insight-api",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:insight-api:20180209",
    "source" : "snyk"
},

/* 690 */
{
    "_id" : ObjectId("5a845fecc86da389e17086fe"),
    "sourceId" : "20150824",
    "module" : "uglify-js",
    "pubDate" : ISODate("2015-08-24T09:29:10.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Improper minification of non-boolean comparisons in uglify-js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:uglify-js:20150824",
    "source" : "snyk"
},

/* 691 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a94"),
    "sourceId" : 45,
    "module" : "hapi",
    "pubDate" : ISODate("2015-10-20T18:29:09.702Z"),
    "attackType" : "Security Misconfiguration",
    "title" : "Incorrect handling of CORS preflight request headers",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/45",
    "source" : "nsp"
},

/* 692 */
{
    "_id" : ObjectId("5a845fecc86da389e1708539"),
    "sourceId" : "20150303",
    "module" : "ghost",
    "pubDate" : ISODate("2017-05-30T09:56:36.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Information Disclosure in ghost",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ghost:20150303",
    "source" : "snyk"
},

/* 693 */
{
    "_id" : ObjectId("5a845fecc86da389e170854a"),
    "sourceId" : "20131218",
    "module" : "nforce",
    "pubDate" : ISODate("2017-05-08T12:34:46.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Information Disclosure in nforce",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:nforce:20131218",
    "source" : "snyk"
},

/* 694 */
{
    "_id" : ObjectId("5a845fecc86da389e1708594"),
    "sourceId" : "20150514-1",
    "module" : "rethinkdb",
    "pubDate" : ISODate("2017-03-13T08:00:22.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Information Disclosure in rethinkdb",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:rethinkdb:20150514-1",
    "source" : "snyk"
},

/* 695 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c0d"),
    "url" : "https://snyk.io/vuln/npm:converse.js:20180208",
    "severity" : "high",
    "title" : "Information Exposure",
    "module" : "converse.js",
    "sourceId" : "20180208",
    "pubDate" : ISODate("2018-02-22T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Sensitive Data Exposure"
},

/* 696 */
{
    "_id" : ObjectId("5a845fecc86da389e1708551"),
    "sourceId" : "20130925",
    "module" : "brunch",
    "pubDate" : ISODate("2017-05-08T12:34:45.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Information Exposure in brunch",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:brunch:20130925",
    "source" : "snyk"
},

/* 697 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbff"),
    "sourceId" : "20180306",
    "module" : "cordova-plugin-ios-keychain",
    "pubDate" : ISODate("2018-03-21T09:26:19.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Information Exposure in cordova-plugin-ios-keychain",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:cordova-plugin-ios-keychain:20180306",
    "source" : "snyk"
},

/* 698 */
{
    "_id" : ObjectId("5a845fecc86da389e17083fe"),
    "sourceId" : "20170628",
    "module" : "kibana",
    "pubDate" : ISODate("2018-01-04T11:23:51.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Information Exposure in kibana",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:kibana:20170628",
    "source" : "snyk"
},

/* 699 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfc02"),
    "sourceId" : "20180318",
    "module" : "serve",
    "pubDate" : ISODate("2018-03-18T14:30:02.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Information Exposure in serve",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:serve:20180318",
    "source" : "snyk"
},

/* 700 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a90"),
    "sourceId" : 50,
    "module" : "secure-compare",
    "pubDate" : ISODate("2015-10-24T21:00:53.201Z"),
    "attackType" : "Logic Issues",
    "title" : "Insecure Comparison",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/50",
    "source" : "nsp"
},

/* 701 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c2c"),
    "url" : "https://snyk.io/vuln/npm:safe-compare:20180210",
    "severity" : "medium",
    "title" : "Insecure Credential Comparison",
    "module" : "safe-compare",
    "sourceId" : "20180210",
    "pubDate" : ISODate("2018-02-14T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Logic Issues"
},

/* 702 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbe3"),
    "sourceId" : "20180417",
    "module" : "safe-compare",
    "pubDate" : ISODate("2018-04-17T13:22:50.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Insecure Credential Comparison in safe-compare",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:safe-compare:20180417",
    "source" : "snyk"
},

/* 703 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a72"),
    "sourceId" : 96,
    "module" : "airbrake",
    "pubDate" : ISODate("2016-03-28T22:48:46.000Z"),
    "attackType" : "Security Misconfiguration",
    "title" : "Insecure Default Configuration",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/96",
    "source" : "nsp"
},

/* 704 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a6a"),
    "sourceId" : 99,
    "module" : "engine.io-client",
    "pubDate" : ISODate("2016-04-26T16:24:32.000Z"),
    "attackType" : "Security Misconfiguration",
    "title" : "Insecure Defaults Allow MITM Over TLS",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/99",
    "source" : "nsp"
},

/* 705 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a54"),
    "sourceId" : 114,
    "module" : "ezseed-transmission",
    "pubDate" : ISODate("2016-07-29T22:27:11.000Z"),
    "attackType" : "Security Misconfiguration",
    "title" : "Insecure Defaults Leads to Potential MITM",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/114",
    "source" : "nsp"
},

/* 706 */
{
    "_id" : ObjectId("5a845fecc86da389e1708419"),
    "sourceId" : "20140219",
    "module" : "cordova-plugin-file-transfer",
    "pubDate" : ISODate("2017-11-09T02:50:38.000Z"),
    "attackType" : "Security Misconfiguration",
    "title" : "Insecure Defaults in cordova-plugin-file-transfer",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:cordova-plugin-file-transfer:20140219",
    "source" : "snyk"
},

/* 707 */
{
    "_id" : ObjectId("5a845fecc86da389e1708571"),
    "sourceId" : "20140308",
    "module" : "dompurify",
    "pubDate" : ISODate("2017-04-24T08:56:39.000Z"),
    "attackType" : "Security Misconfiguration",
    "title" : "Insecure Defaults in dompurify",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:dompurify:20140308",
    "source" : "snyk"
},

/* 708 */
{
    "_id" : ObjectId("5a845fecc86da389e1708582"),
    "sourceId" : "20121107",
    "module" : "faye",
    "pubDate" : ISODate("2017-03-28T08:30:28.000Z"),
    "attackType" : "Security Misconfiguration",
    "title" : "Insecure Defaults in faye",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:faye:20121107",
    "source" : "snyk"
},

/* 709 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a75"),
    "sourceId" : 93,
    "module" : "node-uuid",
    "pubDate" : ISODate("2016-03-28T21:29:30.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Insecure Entropy Source - Math.random()",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/93",
    "source" : "nsp"
},

/* 710 */
{
    "_id" : ObjectId("5a845fecc86da389e17084a6"),
    "sourceId" : "20170303",
    "module" : "contwidgetor",
    "pubDate" : ISODate("2017-06-28T13:32:13.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Insecure Hashing Algorithm in contwidgetor",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:contwidgetor:20170303",
    "source" : "snyk"
},

/* 711 */
{
    "_id" : ObjectId("5a845fecc86da389e170840c"),
    "sourceId" : "20140722",
    "module" : "crypto-browserify",
    "pubDate" : ISODate("2017-12-25T14:45:01.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Insecure Randomness in crypto-browserify",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:crypto-browserify:20140722",
    "source" : "snyk"
},

/* 712 */
{
    "_id" : ObjectId("5a845fecc86da389e17085ac"),
    "sourceId" : "20120323",
    "module" : "socket.io",
    "pubDate" : ISODate("2017-02-13T13:46:59.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Insecure Randomness in socket.io",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:socket.io:20120323",
    "source" : "snyk"
},

/* 713 */
{
    "_id" : ObjectId("5a845fecc86da389e17085a7"),
    "sourceId" : "20111230",
    "module" : "uuid",
    "pubDate" : ISODate("2017-02-13T15:24:29.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Insecure Randomness in uuid",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:uuid:20111230",
    "source" : "snyk"
},

/* 714 */
{
    "_id" : ObjectId("5a845fecc86da389e17085bb"),
    "sourceId" : "20160920",
    "module" : "ws",
    "pubDate" : ISODate("2017-02-07T18:12:00.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Insecure Randomness in ws",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ws:20160920",
    "source" : "snyk"
},

/* 715 */
{
    "_id" : ObjectId("5a845fecc86da389e17083fb"),
    "sourceId" : "20171222",
    "module" : "node-jose",
    "pubDate" : ISODate("2018-01-10T20:47:00.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Insecure Token Validation in node-jose",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:node-jose:20171222",
    "source" : "snyk"
},

/* 716 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759a1"),
    "sourceId" : 323,
    "module" : "http-proxy",
    "pubDate" : ISODate("2017-04-11T23:25:24.169Z"),
    "attackType" : "Logic Issues",
    "title" : "Insufficient Error Handling",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/323",
    "source" : "nsp"
},

/* 717 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759aa"),
    "sourceId" : 324,
    "module" : "node-jose",
    "pubDate" : ISODate("2017-03-13T19:22:12.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Invalid Curve Attack",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/324",
    "source" : "nsp"
},

/* 718 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a62"),
    "sourceId" : 121,
    "module" : "call",
    "pubDate" : ISODate("2016-07-05T18:05:37.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Invalid input to route validation rules",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/121",
    "source" : "nsp"
},

/* 719 */
{
    "_id" : ObjectId("5a845fecc86da389e17085a2"),
    "sourceId" : "20150315",
    "module" : "angular",
    "pubDate" : ISODate("2017-02-13T18:30:00.000Z"),
    "attackType" : "JSONP Vulnerability",
    "title" : "JSONP Callback Attack in angular",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:angular:20150315",
    "source" : "snyk"
},

/* 720 */
{
    "_id" : ObjectId("5a845fecc86da389e17086fb"),
    "sourceId" : "20150918",
    "module" : "ldapauth",
    "pubDate" : ISODate("2015-09-18T09:30:10.000Z"),
    "attackType" : "Injection Attack",
    "title" : "LDAP Injection in ldapauth",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ldapauth:20150918",
    "source" : "snyk"
},

/* 721 */
{
    "_id" : ObjectId("5a845fecc86da389e17086fd"),
    "sourceId" : "20150918",
    "module" : "ldapauth-fork",
    "pubDate" : ISODate("2015-09-18T09:29:10.000Z"),
    "attackType" : "Injection Attack",
    "title" : "LDAP Injection in ldapauth-fork",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ldapauth-fork:20150918",
    "source" : "snyk"
},

/* 722 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759a0"),
    "sourceId" : 158,
    "module" : "forms",
    "pubDate" : ISODate("2017-04-11T23:25:46.449Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Lack of HTML Escaping",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/158",
    "source" : "nsp"
},

/* 723 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647592d"),
    "sourceId" : 479,
    "module" : "superagent",
    "pubDate" : ISODate("2017-09-26T23:42:10.322Z"),
    "attackType" : "Denial of Service",
    "title" : "Large gzip Denial of Service",
    "severity" : "low",
    "url" : "https://nodesecurity.io/advisories/479",
    "source" : "nsp"
},

/* 724 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647592e"),
    "sourceId" : 481,
    "module" : "npm-script-demo",
    "pubDate" : ISODate("2017-09-26T23:32:05.745Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Module",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/481",
    "source" : "nsp"
},

/* 725 */
{
    "_id" : ObjectId("5a845fecc86da389e170844c"),
    "sourceId" : "20170917",
    "module" : "anarchy",
    "pubDate" : ISODate("2017-09-17T08:19:23.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in anarchy",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:anarchy:20170917",
    "source" : "snyk"
},

/* 726 */
{
    "_id" : ObjectId("5a845fecc86da389e170848f"),
    "sourceId" : "20170802",
    "module" : "babelcli",
    "pubDate" : ISODate("2017-08-02T13:08:41.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in babelcli",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:babelcli:20170802",
    "source" : "snyk"
},

/* 727 */
{
    "_id" : ObjectId("5a845fecc86da389e170844e"),
    "sourceId" : "20170917",
    "module" : "botbait",
    "pubDate" : ISODate("2017-09-17T08:19:22.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in botbait",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:botbait:20170917",
    "source" : "snyk"
},

/* 728 */
{
    "_id" : ObjectId("5a845fecc86da389e170848e"),
    "sourceId" : "20170802",
    "module" : "cross-env.js",
    "pubDate" : ISODate("2017-08-02T13:08:41.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in cross-env.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:cross-env.js:20170802",
    "source" : "snyk"
},

/* 729 */
{
    "_id" : ObjectId("5a845fecc86da389e170848d"),
    "sourceId" : "20170802",
    "module" : "crossenv",
    "pubDate" : ISODate("2017-08-02T13:08:41.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in crossenv",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:crossenv:20170802",
    "source" : "snyk"
},

/* 730 */
{
    "_id" : ObjectId("5a845fecc86da389e170848b"),
    "sourceId" : "20170802",
    "module" : "d3.js",
    "pubDate" : ISODate("2017-08-02T13:08:42.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in d3.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:d3.js:20170802",
    "source" : "snyk"
},

/* 731 */
{
    "_id" : ObjectId("5a845fecc86da389e1708454"),
    "sourceId" : "20170917",
    "module" : "deasyncp",
    "pubDate" : ISODate("2017-09-17T08:08:17.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in deasyncp",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:deasyncp:20170917",
    "source" : "snyk"
},

/* 732 */
{
    "_id" : ObjectId("5a845fecc86da389e1708421"),
    "sourceId" : "20171009",
    "module" : "discordi.js",
    "pubDate" : ISODate("2017-10-19T15:29:36.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in discordi.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:discordi.js:20171009",
    "source" : "snyk"
},

/* 733 */
{
    "_id" : ObjectId("5a845fecc86da389e170848a"),
    "sourceId" : "20170802",
    "module" : "fabric-js",
    "pubDate" : ISODate("2017-08-02T13:08:42.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in fabric-js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:fabric-js:20170802",
    "source" : "snyk"
},

/* 734 */
{
    "_id" : ObjectId("5a845fecc86da389e1708489"),
    "sourceId" : "20170802",
    "module" : "ffmepg",
    "pubDate" : ISODate("2017-08-02T13:08:43.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in ffmepg",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:ffmepg:20170802",
    "source" : "snyk"
},

/* 735 */
{
    "_id" : ObjectId("5a845fecc86da389e1708487"),
    "sourceId" : "20170802",
    "module" : "gruntcli",
    "pubDate" : ISODate("2017-08-02T13:08:43.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in gruntcli",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:gruntcli:20170802",
    "source" : "snyk"
},

/* 736 */
{
    "_id" : ObjectId("5a845fecc86da389e1708453"),
    "sourceId" : "20170917",
    "module" : "harmlesspackage",
    "pubDate" : ISODate("2017-09-17T08:08:17.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in harmlesspackage",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:harmlesspackage:20170917",
    "source" : "snyk"
},

/* 737 */
{
    "_id" : ObjectId("5a845fecc86da389e1708485"),
    "sourceId" : "20170802",
    "module" : "http-proxy.js",
    "pubDate" : ISODate("2017-08-02T13:08:44.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in http-proxy.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:http-proxy.js:20170802",
    "source" : "snyk"
},

/* 738 */
{
    "_id" : ObjectId("5a845fecc86da389e170844f"),
    "sourceId" : "20170917",
    "module" : "ikst",
    "pubDate" : ISODate("2017-09-17T08:19:22.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in ikst",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:ikst:20170917",
    "source" : "snyk"
},

/* 739 */
{
    "_id" : ObjectId("5a845fecc86da389e1708484"),
    "sourceId" : "20170802",
    "module" : "jquery.js",
    "pubDate" : ISODate("2017-08-02T13:08:44.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in jquery.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:jquery.js:20170802",
    "source" : "snyk"
},

/* 740 */
{
    "_id" : ObjectId("5a845fecc86da389e1708481"),
    "sourceId" : "20170802",
    "module" : "mariadb",
    "pubDate" : ISODate("2017-08-02T13:08:46.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in mariadb",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mariadb:20170802",
    "source" : "snyk"
},

/* 741 */
{
    "_id" : ObjectId("5a845fecc86da389e1708455"),
    "sourceId" : "20170917",
    "module" : "maybemaliciouspackage",
    "pubDate" : ISODate("2017-09-17T08:08:17.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in maybemaliciouspackage",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:maybemaliciouspackage:20170917",
    "source" : "snyk"
},

/* 742 */
{
    "_id" : ObjectId("5a845fecc86da389e170844d"),
    "sourceId" : "20170917",
    "module" : "mktmpio",
    "pubDate" : ISODate("2017-09-17T08:19:23.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in mktmpio",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mktmpio:20170917",
    "source" : "snyk"
},

/* 743 */
{
    "_id" : ObjectId("5a845fecc86da389e1708480"),
    "sourceId" : "20170802",
    "module" : "mongose",
    "pubDate" : ISODate("2017-08-02T13:08:46.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in mongose",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mongose:20170802",
    "source" : "snyk"
},

/* 744 */
{
    "_id" : ObjectId("5a845fecc86da389e170847f"),
    "sourceId" : "20170802",
    "module" : "mssql-node",
    "pubDate" : ISODate("2017-08-02T13:08:46.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in mssql-node",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mssql-node:20170802",
    "source" : "snyk"
},

/* 745 */
{
    "_id" : ObjectId("5a845fecc86da389e170847e"),
    "sourceId" : "20170802",
    "module" : "mssql.js",
    "pubDate" : ISODate("2017-08-02T13:08:47.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in mssql.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mssql.js:20170802",
    "source" : "snyk"
},

/* 746 */
{
    "_id" : ObjectId("5a845fecc86da389e170847d"),
    "sourceId" : "20170802",
    "module" : "mysqljs",
    "pubDate" : ISODate("2017-08-02T13:08:47.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in mysqljs",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mysqljs:20170802",
    "source" : "snyk"
},

/* 747 */
{
    "_id" : ObjectId("5a845fecc86da389e170847c"),
    "sourceId" : "20170802",
    "module" : "node-fabric",
    "pubDate" : ISODate("2017-08-02T13:08:47.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in node-fabric",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:node-fabric:20170802",
    "source" : "snyk"
},

/* 748 */
{
    "_id" : ObjectId("5a845fecc86da389e170847b"),
    "sourceId" : "20170802",
    "module" : "node-opencv",
    "pubDate" : ISODate("2017-08-02T13:08:48.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in node-opencv",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:node-opencv:20170802",
    "source" : "snyk"
},

/* 749 */
{
    "_id" : ObjectId("5a845fecc86da389e170847a"),
    "sourceId" : "20170802",
    "module" : "node-opensl",
    "pubDate" : ISODate("2017-08-02T13:08:48.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in node-opensl",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:node-opensl:20170802",
    "source" : "snyk"
},

/* 750 */
{
    "_id" : ObjectId("5a845fecc86da389e1708479"),
    "sourceId" : "20170802",
    "module" : "node-openssl",
    "pubDate" : ISODate("2017-08-02T13:08:48.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in node-openssl",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:node-openssl:20170802",
    "source" : "snyk"
},

/* 751 */
{
    "_id" : ObjectId("5a845fecc86da389e1708478"),
    "sourceId" : "20170802",
    "module" : "node-sqlite",
    "pubDate" : ISODate("2017-08-02T13:08:49.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in node-sqlite",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:node-sqlite:20170802",
    "source" : "snyk"
},

/* 752 */
{
    "_id" : ObjectId("5a845fecc86da389e1708477"),
    "sourceId" : "20170802",
    "module" : "node-tkinter",
    "pubDate" : ISODate("2017-08-02T13:08:49.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in node-tkinter",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:node-tkinter:20170802",
    "source" : "snyk"
},

/* 753 */
{
    "_id" : ObjectId("5a845fecc86da389e1708476"),
    "sourceId" : "20170802",
    "module" : "nodecaffe",
    "pubDate" : ISODate("2017-08-02T13:08:50.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in nodecaffe",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodecaffe:20170802",
    "source" : "snyk"
},

/* 754 */
{
    "_id" : ObjectId("5a845fecc86da389e1708475"),
    "sourceId" : "20170802",
    "module" : "nodefabric",
    "pubDate" : ISODate("2017-08-02T13:08:50.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in nodefabric",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodefabric:20170802",
    "source" : "snyk"
},

/* 755 */
{
    "_id" : ObjectId("5a845fecc86da389e1708474"),
    "sourceId" : "20170802",
    "module" : "nodeffmpeg",
    "pubDate" : ISODate("2017-08-02T13:08:50.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in nodeffmpeg",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodeffmpeg:20170802",
    "source" : "snyk"
},

/* 756 */
{
    "_id" : ObjectId("5a845fecc86da389e1708473"),
    "sourceId" : "20170802",
    "module" : "nodemailer-js",
    "pubDate" : ISODate("2017-08-02T13:08:51.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in nodemailer-js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodemailer-js:20170802",
    "source" : "snyk"
},

/* 757 */
{
    "_id" : ObjectId("5a845fecc86da389e1708472"),
    "sourceId" : "20170802",
    "module" : "nodemailer.js",
    "pubDate" : ISODate("2017-08-02T13:08:51.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in nodemailer.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodemailer.js:20170802",
    "source" : "snyk"
},

/* 758 */
{
    "_id" : ObjectId("5a845fecc86da389e1708471"),
    "sourceId" : "20170802",
    "module" : "nodemssql",
    "pubDate" : ISODate("2017-08-02T13:08:51.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in nodemssql",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodemssql:20170802",
    "source" : "snyk"
},

/* 759 */
{
    "_id" : ObjectId("5a845fecc86da389e1708470"),
    "sourceId" : "20170802",
    "module" : "noderequest",
    "pubDate" : ISODate("2017-08-02T13:08:52.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in noderequest",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:noderequest:20170802",
    "source" : "snyk"
},

/* 760 */
{
    "_id" : ObjectId("5a845fecc86da389e170846f"),
    "sourceId" : "20170802",
    "module" : "nodesass",
    "pubDate" : ISODate("2017-08-02T13:08:52.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in nodesass",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodesass:20170802",
    "source" : "snyk"
},

/* 761 */
{
    "_id" : ObjectId("5a845fecc86da389e170846e"),
    "sourceId" : "20170802",
    "module" : "nodesqlite",
    "pubDate" : ISODate("2017-08-02T13:08:52.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in nodesqlite",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodesqlite:20170802",
    "source" : "snyk"
},

/* 762 */
{
    "_id" : ObjectId("5a845fecc86da389e1708452"),
    "sourceId" : "20170917",
    "module" : "npm-exploit",
    "pubDate" : ISODate("2017-09-17T08:08:18.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in npm-exploit",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:npm-exploit:20170917",
    "source" : "snyk"
},

/* 763 */
{
    "_id" : ObjectId("5a845fecc86da389e1708451"),
    "sourceId" : "20170917",
    "module" : "npm_scripts_test_metrics",
    "pubDate" : ISODate("2017-09-17T08:19:21.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in npm_scripts_test_metrics",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:npm_scripts_test_metrics:20170917",
    "source" : "snyk"
},

/* 764 */
{
    "_id" : ObjectId("5a845fecc86da389e170846d"),
    "sourceId" : "20170802",
    "module" : "opencv.js",
    "pubDate" : ISODate("2017-08-02T13:08:53.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in opencv.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:opencv.js:20170802",
    "source" : "snyk"
},

/* 765 */
{
    "_id" : ObjectId("5a845fecc86da389e170846c"),
    "sourceId" : "20170802",
    "module" : "openssl.js",
    "pubDate" : ISODate("2017-08-02T13:08:53.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in openssl.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:openssl.js:20170802",
    "source" : "snyk"
},

/* 766 */
{
    "_id" : ObjectId("5a845fecc86da389e1708448"),
    "sourceId" : "20170917",
    "module" : "pandora-doomsday",
    "pubDate" : ISODate("2017-09-17T08:32:02.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in pandora-doomsday",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:pandora-doomsday:20170917",
    "source" : "snyk"
},

/* 767 */
{
    "_id" : ObjectId("5a845fecc86da389e170846b"),
    "sourceId" : "20170802",
    "module" : "proxy.js",
    "pubDate" : ISODate("2017-08-02T13:08:53.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in proxy.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:proxy.js:20170802",
    "source" : "snyk"
},

/* 768 */
{
    "_id" : ObjectId("5a845fecc86da389e170844b"),
    "sourceId" : "20170917",
    "module" : "sdfjghlkfjdshlkjdhsfg",
    "pubDate" : ISODate("2017-09-17T08:30:04.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in sdfjghlkfjdshlkjdhsfg",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sdfjghlkfjdshlkjdhsfg:20170917",
    "source" : "snyk"
},

/* 769 */
{
    "_id" : ObjectId("5a845fecc86da389e1708469"),
    "sourceId" : "20170802",
    "module" : "shadowsock",
    "pubDate" : ISODate("2017-08-02T13:08:54.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in shadowsock",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:shadowsock:20170802",
    "source" : "snyk"
},

/* 770 */
{
    "_id" : ObjectId("5a845fecc86da389e170844a"),
    "sourceId" : "20170917",
    "module" : "shrugging-logging",
    "pubDate" : ISODate("2017-09-17T08:32:02.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in shrugging-logging",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:shrugging-logging:20170917",
    "source" : "snyk"
},

/* 771 */
{
    "_id" : ObjectId("5a845fecc86da389e1708468"),
    "sourceId" : "20170802",
    "module" : "smb",
    "pubDate" : ISODate("2017-08-02T13:08:54.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in smb",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:smb:20170802",
    "source" : "snyk"
},

/* 772 */
{
    "_id" : ObjectId("5a845fecc86da389e1708467"),
    "sourceId" : "20170802",
    "module" : "sqlite.js",
    "pubDate" : ISODate("2017-08-02T13:08:54.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in sqlite.js",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sqlite.js:20170802",
    "source" : "snyk"
},

/* 773 */
{
    "_id" : ObjectId("5a845fecc86da389e1708466"),
    "sourceId" : "20170802",
    "module" : "sqliter",
    "pubDate" : ISODate("2017-08-02T13:08:55.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in sqliter",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sqliter:20170802",
    "source" : "snyk"
},

/* 774 */
{
    "_id" : ObjectId("5a845fecc86da389e1708465"),
    "sourceId" : "20170802",
    "module" : "sqlserver",
    "pubDate" : ISODate("2017-08-02T13:08:55.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in sqlserver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sqlserver:20170802",
    "source" : "snyk"
},

/* 775 */
{
    "_id" : ObjectId("5a845fecc86da389e1708450"),
    "sourceId" : "20170917",
    "module" : "subtitles-lib",
    "pubDate" : ISODate("2017-09-17T08:19:22.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in subtitles-lib",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:subtitles-lib:20170917",
    "source" : "snyk"
},

/* 776 */
{
    "_id" : ObjectId("5a845fecc86da389e1708449"),
    "sourceId" : "20170917",
    "module" : "test-module-a",
    "pubDate" : ISODate("2017-09-17T08:32:02.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in test-module-a",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:test-module-a:20170917",
    "source" : "snyk"
},

/* 777 */
{
    "_id" : ObjectId("5a845fecc86da389e1708463"),
    "sourceId" : "20170802",
    "module" : "tkinter",
    "pubDate" : ISODate("2017-08-02T13:08:56.000Z"),
    "attackType" : "Malicious Package",
    "title" : "Malicious Package in tkinter",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:tkinter:20170802",
    "source" : "snyk"
},

/* 778 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b77"),
    "url" : "https://snyk.io/vuln/npm:tiny-json-http:20180214",
    "severity" : "medium",
    "title" : "Man-in-the-Middle (MitM)",
    "module" : "tiny-json-http",
    "sourceId" : "20180214",
    "pubDate" : ISODate("2018-03-15T04:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Sensitive Data Exposure"
},

/* 779 */
{
    "_id" : ObjectId("5a845fecc86da389e1708434"),
    "sourceId" : "20161210",
    "module" : "electron",
    "pubDate" : ISODate("2017-10-09T15:29:35.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Man-in-the-Middle (MitM) in electron",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:electron:20161210",
    "source" : "snyk"
},

/* 780 */
{
    "_id" : ObjectId("5a845fecc86da389e1708535"),
    "sourceId" : "20160322",
    "module" : "hotel",
    "pubDate" : ISODate("2017-05-30T09:56:37.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Man-in-the-Middle (MitM) in hotel",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:hotel:20160322",
    "source" : "snyk"
},

/* 781 */
{
    "_id" : ObjectId("5a845fecc86da389e1708585"),
    "sourceId" : "20140428",
    "module" : "generator-jhipster",
    "pubDate" : ISODate("2017-03-28T07:30:28.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "Mishandled Logout Function in generator-jhipster",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:generator-jhipster:20140428",
    "source" : "snyk"
},

/* 782 */
{
    "_id" : ObjectId("5a845fecc86da389e1708721"),
    "sourceId" : "20130705-2",
    "module" : "validator",
    "pubDate" : ISODate("2013-07-05T09:29:10.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Multiple XSS Filter Bypasses in validator",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:validator:20130705-2",
    "source" : "snyk"
},

/* 783 */
{
    "_id" : ObjectId("5a845fecc86da389e17086d2"),
    "sourceId" : "20151214",
    "module" : "libxmljs",
    "pubDate" : ISODate("2016-02-14T07:31:34.000Z"),
    "attackType" : "Insecure Version of Embedded Dependencies",
    "title" : "Multiple vulnerabilities in embedded binary version of libxml2 in libxmljs",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:libxmljs:20151214",
    "source" : "snyk"
},

/* 784 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a73"),
    "sourceId" : 91,
    "module" : "droppy",
    "pubDate" : ISODate("2016-03-28T22:40:54.000Z"),
    "attackType" : "Cross-Site Request Forgery (CSRF)",
    "title" : "No CSRF Validation",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/91",
    "source" : "nsp"
},

/* 785 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a6b"),
    "sourceId" : 94,
    "module" : "csrf-lite",
    "pubDate" : ISODate("2016-04-23T03:42:03.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Non-Constant Time String Comparison",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/94",
    "source" : "nsp"
},

/* 786 */
{
    "_id" : ObjectId("5a845fecc86da389e17086a1"),
    "sourceId" : "20160804",
    "module" : "cookie-signature",
    "pubDate" : ISODate("2016-08-29T00:00:00.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Non-Constant Time String Comparison in cookie-signature",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:cookie-signature:20160804",
    "source" : "snyk"
},

/* 787 */
{
    "_id" : ObjectId("5a845fecc86da389e17086bc"),
    "sourceId" : "20160423",
    "module" : "csrf-lite",
    "pubDate" : ISODate("2016-06-22T00:00:00.000Z"),
    "attackType" : "Cross-Site Request Forgery (CSRF)",
    "title" : "Non-Constant Time String Comparison in csrf-lite",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:csrf-lite:20160423",
    "source" : "snyk"
},

/* 788 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758ce"),
    "sourceId" : 547,
    "module" : "st",
    "pubDate" : ISODate("2017-10-13T23:01:42.775Z"),
    "attackType" : "Open Redirection",
    "title" : "Open Redirect",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/547",
    "source" : "nsp"
},

/* 789 */
{
    "_id" : ObjectId("5a845fecc86da389e1708538"),
    "sourceId" : "20160823",
    "module" : "ghost",
    "pubDate" : ISODate("2017-05-30T09:56:36.000Z"),
    "attackType" : "Open Redirection",
    "title" : "Open Redirect in ghost",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ghost:20160823",
    "source" : "snyk"
},

/* 790 */
{
    "_id" : ObjectId("5a845fecc86da389e1708586"),
    "sourceId" : "20140316",
    "module" : "keystone",
    "pubDate" : ISODate("2017-03-21T15:40:44.000Z"),
    "attackType" : "Open Redirection",
    "title" : "Open Redirect in keystone",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:keystone:20140316",
    "source" : "snyk"
},

/* 791 */
{
    "_id" : ObjectId("5a845fecc86da389e17083f0"),
    "sourceId" : "20171206-1",
    "module" : "kibana",
    "pubDate" : ISODate("2018-01-22T12:29:52.000Z"),
    "attackType" : "Open Redirection",
    "title" : "Open Redirect in kibana",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:kibana:20171206-1",
    "source" : "snyk"
},

/* 792 */
{
    "_id" : ObjectId("5a845fecc86da389e1708707"),
    "sourceId" : "20150113",
    "module" : "serve-static",
    "pubDate" : ISODate("2015-01-13T12:50:48.000Z"),
    "attackType" : "Open Redirection",
    "title" : "Open Redirect in serve-static",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:serve-static:20150113",
    "source" : "snyk"
},

/* 793 */
{
    "_id" : ObjectId("5a845fecc86da389e17084b2"),
    "sourceId" : "20170207",
    "module" : "cordova-ios",
    "pubDate" : ISODate("2017-06-21T14:07:50.000Z"),
    "attackType" : "Open Redirection",
    "title" : "Open Redirection in cordova-ios",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:cordova-ios:20170207",
    "source" : "snyk"
},

/* 794 */
{
    "_id" : ObjectId("5a845fecc86da389e1708460"),
    "sourceId" : "20161111",
    "module" : "js-quantities",
    "pubDate" : ISODate("2017-08-02T13:10:45.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Out of Memory Crash in js-quantities",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:js-quantities:20161111",
    "source" : "snyk"
},

/* 795 */
{
    "_id" : ObjectId("5a845fecc86da389e17086f6"),
    "sourceId" : "20141024",
    "module" : "sanitize-html",
    "pubDate" : ISODate("2015-11-06T02:09:36.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Partial Sanitization in sanitize-html",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:sanitize-html:20141024",
    "source" : "snyk"
},

/* 796 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a64"),
    "sourceId" : 117,
    "module" : "shell-quote",
    "pubDate" : ISODate("2016-06-21T17:40:40.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Potential Command Injection",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/117",
    "source" : "nsp"
},

/* 797 */
{
    "_id" : ObjectId("5a845fecc86da389e1708724"),
    "sourceId" : "20130515",
    "module" : "libnotify",
    "pubDate" : ISODate("2013-05-15T19:30:05.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Potential Command Injection in libnotify",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:libnotify:20130515",
    "source" : "snyk"
},

/* 798 */
{
    "_id" : ObjectId("5a845fecc86da389e17086f1"),
    "sourceId" : "20130105",
    "module" : "ember",
    "pubDate" : ISODate("2015-11-06T02:09:36.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Potential Cross-site Scripting (XSS) in ember",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ember:20130105",
    "source" : "snyk"
},

/* 799 */
{
    "_id" : ObjectId("5a845fecc86da389e1708716"),
    "sourceId" : "20140715",
    "module" : "syntax-error",
    "pubDate" : ISODate("2014-07-15T06:33:48.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Potential Script Injection in syntax-error",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:syntax-error:20140715",
    "source" : "snyk"
},

/* 800 */
{
    "_id" : ObjectId("5a845fecc86da389e17086dd"),
    "sourceId" : "20151228",
    "module" : "hapi",
    "pubDate" : ISODate("2016-01-05T12:38:01.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Potentially loose security restrictions in hapi",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:hapi:20151228",
    "source" : "snyk"
},

/* 801 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a6d"),
    "sourceId" : 92,
    "module" : "express-restify-mongoose",
    "pubDate" : ISODate("2016-04-19T23:24:17.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Private Data Disclosure",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/92",
    "source" : "nsp"
},

/* 802 */
{
    "_id" : ObjectId("5a845fecc86da389e1708413"),
    "sourceId" : "20171204",
    "module" : "auth0-js",
    "pubDate" : ISODate("2017-12-07T16:23:00.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "Privilege Escalation in auth0-js",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:auth0-js:20171204",
    "source" : "snyk"
},

/* 803 */
{
    "_id" : ObjectId("5a845fecc86da389e170841a"),
    "sourceId" : "20140219",
    "module" : "cordova-plugin-inappbrowser",
    "pubDate" : ISODate("2017-11-09T02:34:10.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Privilege Escalation in cordova-plugin-inappbrowser",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:cordova-plugin-inappbrowser:20140219",
    "source" : "snyk"
},

/* 804 */
{
    "_id" : ObjectId("5a845fecc86da389e17085ce"),
    "sourceId" : "20131113",
    "module" : "angular",
    "pubDate" : ISODate("2017-01-23T10:30:00.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Protection Bypass in angular",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:angular:20131113",
    "source" : "snyk"
},

/* 805 */
{
    "_id" : ObjectId("5a845fecc86da389e170859e"),
    "sourceId" : "20170213",
    "module" : "qs",
    "pubDate" : ISODate("2017-03-01T10:00:54.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Prototype Override Protection Bypass in qs",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:qs:20170213",
    "source" : "snyk"
},

/* 806 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c1e"),
    "url" : "https://snyk.io/vuln/npm:assign-deep:20180215",
    "severity" : "low",
    "title" : "Prototype Pollution",
    "module" : "assign-deep",
    "sourceId" : "20180215",
    "pubDate" : ISODate("2018-02-16T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Logic Issues"
},

/* 807 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c1f"),
    "url" : "https://snyk.io/vuln/npm:defaults-deep:20180215",
    "severity" : "low",
    "title" : "Prototype Pollution",
    "module" : "defaults-deep",
    "sourceId" : "20180215",
    "pubDate" : ISODate("2018-02-16T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Logic Issues"
},

/* 808 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c20"),
    "url" : "https://snyk.io/vuln/npm:merge-deep:20180215",
    "severity" : "low",
    "title" : "Prototype Pollution",
    "module" : "merge-deep",
    "sourceId" : "20180215",
    "pubDate" : ISODate("2018-02-16T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Logic Issues"
},

/* 809 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c21"),
    "url" : "https://snyk.io/vuln/npm:mixin-deep:20180215",
    "severity" : "low",
    "title" : "Prototype Pollution",
    "module" : "mixin-deep",
    "sourceId" : "20180215",
    "pubDate" : ISODate("2018-02-16T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Logic Issues"
},

/* 810 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c2e"),
    "url" : "https://snyk.io/vuln/npm:lodash:20180130",
    "severity" : "low",
    "title" : "Prototype Pollution",
    "module" : "lodash",
    "sourceId" : "20180130",
    "pubDate" : ISODate("2018-02-14T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Logic Issues"
},

/* 811 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c30"),
    "url" : "https://snyk.io/vuln/npm:hoek:20180212",
    "severity" : "low",
    "title" : "Prototype Pollution",
    "module" : "hoek",
    "sourceId" : "20180212",
    "pubDate" : ISODate("2018-02-14T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Logic Issues"
},

/* 812 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbe9"),
    "sourceId" : "20180415",
    "module" : "deap",
    "pubDate" : ISODate("2018-04-17T07:45:48.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Prototype Pollution in deap",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:deap:20180415",
    "source" : "snyk"
},

/* 813 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbe7"),
    "sourceId" : "20180415",
    "module" : "merge-objects",
    "pubDate" : ISODate("2018-04-17T07:45:49.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Prototype Pollution in merge-objects",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:merge-objects:20180415",
    "source" : "snyk"
},

/* 814 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbe6"),
    "sourceId" : "20180415",
    "module" : "merge-options",
    "pubDate" : ISODate("2018-04-17T07:45:49.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Prototype Pollution in merge-options",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:merge-options:20180415",
    "source" : "snyk"
},

/* 815 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbe5"),
    "sourceId" : "20180415",
    "module" : "merge-recursive",
    "pubDate" : ISODate("2018-04-17T07:45:49.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Prototype Pollution in merge-recursive",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:merge-recursive:20180415",
    "source" : "snyk"
},

/* 816 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758b3"),
    "sourceId" : 566,
    "module" : "hoek",
    "pubDate" : ISODate("2018-02-15T16:59:37.240Z"),
    "attackType" : "Logic Issues",
    "title" : "Prototype pollution attack",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/566",
    "source" : "nsp"
},

/* 817 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a87"),
    "sourceId" : 62,
    "module" : "mustache",
    "pubDate" : ISODate("2015-12-14T17:13:57.565Z"),
    "attackType" : "Injection Attack",
    "title" : "Quoteless Attributes in Templates can lead to Content Injection",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/62",
    "source" : "nsp"
},

/* 818 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a88"),
    "sourceId" : 61,
    "module" : "handlebars",
    "pubDate" : ISODate("2015-12-14T16:52:07.962Z"),
    "attackType" : "Injection Attack",
    "title" : "Quoteless Attributes in Templates can lead to Content Injection",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/61",
    "source" : "nsp"
},

/* 819 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475992"),
    "sourceId" : 157,
    "module" : "react-native-meteor-oauth",
    "pubDate" : ISODate("2017-04-14T22:07:15.405Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Random Token based off Math.random()",
    "severity" : "low",
    "url" : "https://nodesecurity.io/advisories/157",
    "source" : "nsp"
},

/* 820 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647598e"),
    "sourceId" : 338,
    "module" : "brace-expansion",
    "pubDate" : ISODate("2017-04-25T18:17:23.074Z"),
    "attackType" : "Denial of Service",
    "title" : "ReDoS",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/338",
    "source" : "nsp"
},

/* 821 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758b4"),
    "sourceId" : 565,
    "module" : "ssri",
    "pubDate" : ISODate("2018-02-14T20:39:06.993Z"),
    "attackType" : "Denial of Service",
    "title" : "ReDoS in ssri",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/565",
    "source" : "nsp"
},

/* 822 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475958"),
    "sourceId" : 316,
    "module" : "ua-parser",
    "pubDate" : ISODate("2017-08-29T16:44:27.805Z"),
    "attackType" : "Denial of Service",
    "title" : "ReDoS via long UserAgent header",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/316",
    "source" : "nsp"
},

/* 823 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475990"),
    "sourceId" : 312,
    "module" : "useragent",
    "pubDate" : ISODate("2017-04-14T22:45:42.742Z"),
    "attackType" : "Denial of Service",
    "title" : "ReDoS via long UserAgent header",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/312",
    "source" : "nsp"
},

/* 824 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a5b"),
    "sourceId" : 130,
    "module" : "tough-cookie",
    "pubDate" : ISODate("2016-07-22T19:49:26.000Z"),
    "attackType" : "Denial of Service",
    "title" : "ReDoS via long string of semicolons",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/130",
    "source" : "nsp"
},

/* 825 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758b7"),
    "sourceId" : 562,
    "module" : "redis-commander",
    "pubDate" : ISODate("2018-01-23T17:42:42.631Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Reflected Cross-Site Scripting",
    "severity" : "low",
    "url" : "https://nodesecurity.io/advisories/562",
    "source" : "nsp"
},

/* 826 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475999"),
    "sourceId" : 100,
    "module" : "uri-js",
    "pubDate" : ISODate("2017-04-14T18:44:23.702Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial Of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/100",
    "source" : "nsp"
},

/* 827 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758c6"),
    "sourceId" : 532,
    "module" : "moment",
    "pubDate" : ISODate("2017-11-27T17:56:00.056Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/532",
    "source" : "nsp"
},

/* 828 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475926"),
    "sourceId" : 538,
    "module" : "method-override",
    "pubDate" : ISODate("2017-09-27T18:22:26.253Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/538",
    "source" : "nsp"
},

/* 829 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475937"),
    "sourceId" : 526,
    "module" : "fresh",
    "pubDate" : ISODate("2017-09-26T16:06:50.827Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/526",
    "source" : "nsp"
},

/* 830 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475938"),
    "sourceId" : 527,
    "module" : "forwarded",
    "pubDate" : ISODate("2017-09-26T16:03:33.583Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/527",
    "source" : "nsp"
},

/* 831 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475939"),
    "sourceId" : 537,
    "module" : "slug",
    "pubDate" : ISODate("2017-09-25T19:20:56.983Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/537",
    "source" : "nsp"
},

/* 832 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647593a"),
    "sourceId" : 536,
    "module" : "string",
    "pubDate" : ISODate("2017-09-25T19:16:01.330Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/536",
    "source" : "nsp"
},

/* 833 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647593b"),
    "sourceId" : 533,
    "module" : "timespan",
    "pubDate" : ISODate("2017-09-25T19:11:21.202Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "low",
    "url" : "https://nodesecurity.io/advisories/533",
    "source" : "nsp"
},

/* 834 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647593d"),
    "sourceId" : 528,
    "module" : "parsejson",
    "pubDate" : ISODate("2017-09-21T04:16:33.512Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/528",
    "source" : "nsp"
},

/* 835 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647593e"),
    "sourceId" : 525,
    "module" : "tough-cookie",
    "pubDate" : ISODate("2017-09-21T04:01:51.361Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/525",
    "source" : "nsp"
},

/* 836 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647593f"),
    "sourceId" : 530,
    "module" : "content",
    "pubDate" : ISODate("2017-09-12T21:49:15.718Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/530",
    "source" : "nsp"
},

/* 837 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647594b"),
    "sourceId" : 529,
    "module" : "no-case",
    "pubDate" : ISODate("2017-09-08T20:49:27.619Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/529",
    "source" : "nsp"
},

/* 838 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647594c"),
    "sourceId" : 524,
    "module" : "charset",
    "pubDate" : ISODate("2017-09-08T17:57:17.567Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/524",
    "source" : "nsp"
},

/* 839 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475997"),
    "sourceId" : 308,
    "module" : "decamelize",
    "pubDate" : ISODate("2017-04-14T20:58:05.019Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/308",
    "source" : "nsp"
},

/* 840 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a65"),
    "sourceId" : 118,
    "module" : "minimatch",
    "pubDate" : ISODate("2016-06-20T15:52:52.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/118",
    "source" : "nsp"
},

/* 841 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a66"),
    "sourceId" : 106,
    "module" : "negotiator",
    "pubDate" : ISODate("2016-06-16T17:36:06.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/106",
    "source" : "nsp"
},

/* 842 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a76"),
    "sourceId" : 86,
    "module" : "riot-compiler",
    "pubDate" : ISODate("2016-03-21T21:27:58.413Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/86",
    "source" : "nsp"
},

/* 843 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a79"),
    "sourceId" : 55,
    "module" : "moment",
    "pubDate" : ISODate("2016-01-26T20:04:21.225Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/55",
    "source" : "nsp"
},

/* 844 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a7b"),
    "sourceId" : 77,
    "module" : "hawk",
    "pubDate" : ISODate("2016-01-19T21:51:35.396Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/77",
    "source" : "nsp"
},

/* 845 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a7c"),
    "sourceId" : 76,
    "module" : "is-my-json-valid",
    "pubDate" : ISODate("2016-01-18T04:29:55.903Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/76",
    "source" : "nsp"
},

/* 846 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a7f"),
    "sourceId" : 53,
    "module" : "jshamcrest",
    "pubDate" : ISODate("2016-01-05T23:05:18.308Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/53",
    "source" : "nsp"
},

/* 847 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a80"),
    "sourceId" : 52,
    "module" : "jadedown",
    "pubDate" : ISODate("2016-01-05T23:00:45.777Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/52",
    "source" : "nsp"
},

/* 848 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a8a"),
    "sourceId" : 59,
    "module" : "milliseconds",
    "pubDate" : ISODate("2015-11-20T18:52:47.394Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/59",
    "source" : "nsp"
},

/* 849 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a8e"),
    "sourceId" : 51,
    "module" : "ansi2html",
    "pubDate" : ISODate("2015-10-25T01:35:01.611Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/51",
    "source" : "nsp"
},

/* 850 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a8f"),
    "sourceId" : 48,
    "module" : "uglify-js",
    "pubDate" : ISODate("2015-10-24T21:01:32.155Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/48",
    "source" : "nsp"
},

/* 851 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a92"),
    "sourceId" : 47,
    "module" : "bleach",
    "pubDate" : ISODate("2015-10-24T20:46:42.522Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/47",
    "source" : "nsp"
},

/* 852 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a93"),
    "sourceId" : 46,
    "module" : "ms",
    "pubDate" : ISODate("2015-10-24T20:39:59.852Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/46",
    "source" : "nsp"
},

/* 853 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475aa0"),
    "sourceId" : 23,
    "module" : "marked",
    "pubDate" : ISODate("2015-01-22T17:33:48.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/23",
    "source" : "nsp"
},

/* 854 */
{
    "_id" : ObjectId("5a845fecc86da389e170871e"),
    "sourceId" : "20140131-1",
    "module" : "marked",
    "pubDate" : ISODate("2014-01-30T22:33:12.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (DoS) in marked",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:marked:20140131-1",
    "source" : "snyk"
},

/* 855 */
{
    "_id" : ObjectId("5a845fecc86da389e17086e6"),
    "sourceId" : "20151120",
    "module" : "millisecond",
    "pubDate" : ISODate("2015-11-25T12:00:05.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (DoS) in millisecond",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:millisecond:20151120",
    "source" : "snyk"
},

/* 856 */
{
    "_id" : ObjectId("5a845fecc86da389e1708701"),
    "sourceId" : "20150403",
    "module" : "semver",
    "pubDate" : ISODate("2015-04-03T16:00:00.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (DoS) in semver",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:semver:20150403",
    "source" : "snyk"
},

/* 857 */
{
    "_id" : ObjectId("5a845fecc86da389e1708694"),
    "sourceId" : "20160530",
    "module" : "uc.micro",
    "pubDate" : ISODate("2016-10-06T00:00:00.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (DoS) in uc.micro",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:uc.micro:20160530",
    "source" : "snyk"
},

/* 858 */
{
    "_id" : ObjectId("5a845fecc86da389e170870d"),
    "sourceId" : "20130705",
    "module" : "validator",
    "pubDate" : ISODate("2014-11-12T08:45:48.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (DoS) in validator",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:validator:20130705",
    "source" : "snyk"
},

/* 859 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b79"),
    "url" : "https://snyk.io/vuln/npm:path-complete-extname:20180307",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "path-complete-extname",
    "sourceId" : "20180307",
    "pubDate" : ISODate("2018-03-08T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 860 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b7f"),
    "url" : "https://snyk.io/vuln/npm:clean-css:20180306",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "clean-css",
    "sourceId" : "20180306",
    "pubDate" : ISODate("2018-03-07T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 861 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b80"),
    "url" : "https://snyk.io/vuln/npm:diff:20180305",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "diff",
    "sourceId" : "20180305",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 862 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b84"),
    "url" : "https://snyk.io/vuln/npm:useragent:20170308",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "useragent",
    "sourceId" : "20170308",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 863 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b85"),
    "url" : "https://snyk.io/vuln/npm:ua-parser-js:20171012",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "ua-parser-js",
    "sourceId" : "20171012",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 864 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b88"),
    "url" : "https://snyk.io/vuln/npm:aws-lambda-multipart-parser:20180303",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "aws-lambda-multipart-parser",
    "sourceId" : "20180303",
    "pubDate" : ISODate("2018-03-06T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 865 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b9e"),
    "url" : "https://snyk.io/vuln/npm:phpjs:20180305",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "phpjs",
    "sourceId" : "20180305",
    "pubDate" : ISODate("2018-03-05T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 866 */
{
    "_id" : ObjectId("5adbc7097085b362b9001b9f"),
    "url" : "https://snyk.io/vuln/npm:nwmatcher:20180305",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "nwmatcher",
    "sourceId" : "20180305",
    "pubDate" : ISODate("2018-03-05T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 867 */
{
    "_id" : ObjectId("5adbc7097085b362b9001ba0"),
    "url" : "https://snyk.io/vuln/npm:content:20180305",
    "severity" : "high",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "content",
    "sourceId" : "20180305",
    "pubDate" : ISODate("2018-03-05T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 868 */
{
    "_id" : ObjectId("5adbc7097085b362b9001ba2"),
    "url" : "https://snyk.io/vuln/npm:uas-parser:20180305",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "uas-parser",
    "sourceId" : "20180305",
    "pubDate" : ISODate("2018-03-05T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 869 */
{
    "_id" : ObjectId("5adbc7097085b362b9001ba3"),
    "url" : "https://snyk.io/vuln/npm:protobufjs:20180305",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "protobufjs",
    "sourceId" : "20180305",
    "pubDate" : ISODate("2018-03-05T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 870 */
{
    "_id" : ObjectId("5adbc7097085b362b9001ba4"),
    "url" : "https://snyk.io/vuln/npm:emailjs-mime-codec:20180225",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "emailjs-mime-codec",
    "sourceId" : "20180225",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 871 */
{
    "_id" : ObjectId("5adbc7097085b362b9001ba5"),
    "url" : "https://snyk.io/vuln/npm:highcharts:20180225",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "highcharts",
    "sourceId" : "20180225",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 872 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bb7"),
    "url" : "https://snyk.io/vuln/npm:wicket:20180225",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "wicket",
    "sourceId" : "20180225",
    "pubDate" : ISODate("2018-02-27T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 873 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bb8"),
    "url" : "https://snyk.io/vuln/npm:marked:20180225",
    "severity" : "high",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "marked",
    "sourceId" : "20180225",
    "pubDate" : ISODate("2018-02-27T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 874 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bb9"),
    "url" : "https://snyk.io/vuln/npm:bson:20180225",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "bson",
    "sourceId" : "20180225",
    "pubDate" : ISODate("2018-02-27T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 875 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bf6"),
    "url" : "https://snyk.io/vuln/npm:node-json-db:20180226",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "node-json-db",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 876 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bf7"),
    "url" : "https://snyk.io/vuln/npm:node-forge:20180226",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "node-forge",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 877 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bf8"),
    "url" : "https://snyk.io/vuln/npm:mongoose-beautiful-unique-validation:20180226",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "mongoose-beautiful-unique-validation",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 878 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bf9"),
    "url" : "https://snyk.io/vuln/npm:github-url-to-object:20180226",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "github-url-to-object",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 879 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bfa"),
    "url" : "https://snyk.io/vuln/npm:git-username:20180226",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "git-username",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 880 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bfb"),
    "url" : "https://snyk.io/vuln/npm:compromise:20180226",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "compromise",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 881 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bfc"),
    "url" : "https://snyk.io/vuln/npm:checkit:20180226",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "checkit",
    "sourceId" : "20180226",
    "pubDate" : ISODate("2018-02-26T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 882 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bfe"),
    "url" : "https://snyk.io/vuln/npm:truncate:20180225",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "truncate",
    "sourceId" : "20180225",
    "pubDate" : ISODate("2018-02-25T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 883 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bff"),
    "url" : "https://snyk.io/vuln/npm:skeemas:20180225",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "skeemas",
    "sourceId" : "20180225",
    "pubDate" : ISODate("2018-02-25T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 884 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c00"),
    "url" : "https://snyk.io/vuln/npm:sanitize:20180225",
    "severity" : "high",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "sanitize",
    "sourceId" : "20180225",
    "pubDate" : ISODate("2018-02-25T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 885 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c01"),
    "url" : "https://snyk.io/vuln/npm:email-existence:20180225",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "email-existence",
    "sourceId" : "20180225",
    "pubDate" : ISODate("2018-02-25T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 886 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c02"),
    "url" : "https://snyk.io/vuln/npm:datatype-expansion:20180225",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "datatype-expansion",
    "sourceId" : "20180225",
    "pubDate" : ISODate("2018-02-25T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 887 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c03"),
    "url" : "https://snyk.io/vuln/npm:astronomia:20180225",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "astronomia",
    "sourceId" : "20180225",
    "pubDate" : ISODate("2018-02-25T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 888 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c04"),
    "url" : "https://snyk.io/vuln/npm:address-rfc2822:20180225",
    "severity" : "high",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "address-rfc2822",
    "sourceId" : "20180225",
    "pubDate" : ISODate("2018-02-25T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 889 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c06"),
    "url" : "https://snyk.io/vuln/npm:xlsx:20180222",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "xlsx",
    "sourceId" : "20180222",
    "pubDate" : ISODate("2018-02-22T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 890 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c07"),
    "url" : "https://snyk.io/vuln/npm:vue:20180222",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "vue",
    "sourceId" : "20180222",
    "pubDate" : ISODate("2018-02-22T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 891 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c08"),
    "url" : "https://snyk.io/vuln/npm:valid-email:20180222",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "valid-email",
    "sourceId" : "20180222",
    "pubDate" : ISODate("2018-02-22T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 892 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c09"),
    "url" : "https://snyk.io/vuln/npm:shaka-player:20180222",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "shaka-player",
    "sourceId" : "20180222",
    "pubDate" : ISODate("2018-02-22T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 893 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c0a"),
    "url" : "https://snyk.io/vuln/npm:moddle-xml:20180222",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "moddle-xml",
    "sourceId" : "20180222",
    "pubDate" : ISODate("2018-02-22T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 894 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c0b"),
    "url" : "https://snyk.io/vuln/npm:markdown-js:20180221",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "markdown-js",
    "sourceId" : "20180221",
    "pubDate" : ISODate("2018-02-22T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 895 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c0c"),
    "url" : "https://snyk.io/vuln/npm:harb:20180222",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "harb",
    "sourceId" : "20180222",
    "pubDate" : ISODate("2018-02-22T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 896 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c12"),
    "url" : "https://snyk.io/vuln/npm:node-pg-migrate:20180220",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "node-pg-migrate",
    "sourceId" : "20180220",
    "pubDate" : ISODate("2018-02-20T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 897 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c13"),
    "url" : "https://snyk.io/vuln/npm:html-dom-parser:20180220",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "html-dom-parser",
    "sourceId" : "20180220",
    "pubDate" : ISODate("2018-02-20T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 898 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c14"),
    "url" : "https://snyk.io/vuln/npm:gettext-parser:20180220",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "gettext-parser",
    "sourceId" : "20180220",
    "pubDate" : ISODate("2018-02-20T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 899 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c15"),
    "url" : "https://snyk.io/vuln/npm:deckardcain:20180220",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "deckardcain",
    "sourceId" : "20180220",
    "pubDate" : ISODate("2018-02-20T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 900 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c16"),
    "url" : "https://snyk.io/vuln/npm:abaaso:20180220",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "abaaso",
    "sourceId" : "20180220",
    "pubDate" : ISODate("2018-02-20T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 901 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c17"),
    "url" : "https://snyk.io/vuln/npm:braces:20180219",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "braces",
    "sourceId" : "20180219",
    "pubDate" : ISODate("2018-02-19T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 902 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c19"),
    "url" : "https://snyk.io/vuln/npm:validator:20180218",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "validator",
    "sourceId" : "20180218",
    "pubDate" : ISODate("2018-02-18T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 903 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c1b"),
    "url" : "https://snyk.io/vuln/npm:postcss-inline-base64:20180216",
    "severity" : "high",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "postcss-inline-base64",
    "sourceId" : "20180216",
    "pubDate" : ISODate("2018-02-18T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 904 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c1c"),
    "url" : "https://snyk.io/vuln/npm:jasmine-core:20180216",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "jasmine-core",
    "sourceId" : "20180216",
    "pubDate" : ISODate("2018-02-18T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 905 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c1d"),
    "url" : "https://snyk.io/vuln/npm:cejs:20180217",
    "severity" : "high",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "cejs",
    "sourceId" : "20180217",
    "pubDate" : ISODate("2018-02-18T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 906 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c22"),
    "url" : "https://snyk.io/vuln/npm:valid-data-url:20180214",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "valid-data-url",
    "sourceId" : "20180214",
    "pubDate" : ISODate("2018-02-15T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 907 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c24"),
    "url" : "https://snyk.io/vuln/npm:q-io:20180212",
    "severity" : "high",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "q-io",
    "sourceId" : "20180212",
    "pubDate" : ISODate("2018-02-15T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 908 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c25"),
    "url" : "https://snyk.io/vuln/npm:nicest:20180213",
    "severity" : "high",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "nicest",
    "sourceId" : "20180213",
    "pubDate" : ISODate("2018-02-15T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 909 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c26"),
    "url" : "https://snyk.io/vuln/npm:mimer:20180210",
    "severity" : "medium",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "mimer",
    "sourceId" : "20180210",
    "pubDate" : ISODate("2018-02-15T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 910 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c27"),
    "url" : "https://snyk.io/vuln/npm:jquery.csssr.validation:20180215",
    "severity" : "high",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "jquery.csssr.validation",
    "sourceId" : "20180215",
    "pubDate" : ISODate("2018-02-15T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 911 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c28"),
    "url" : "https://snyk.io/vuln/npm:is-my-json-valid:20180214",
    "severity" : "low",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "is-my-json-valid",
    "sourceId" : "20180214",
    "pubDate" : ISODate("2018-02-15T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 912 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c29"),
    "url" : "https://snyk.io/vuln/npm:htmllint:20180213",
    "severity" : "high",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "htmllint",
    "sourceId" : "20180213",
    "pubDate" : ISODate("2018-02-15T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 913 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c2a"),
    "url" : "https://snyk.io/vuln/npm:dirty-json:20180213",
    "severity" : "high",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "dirty-json",
    "sourceId" : "20180213",
    "pubDate" : ISODate("2018-02-15T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 914 */
{
    "_id" : ObjectId("5adbc7097085b362b9001c2b"),
    "url" : "https://snyk.io/vuln/npm:citeproc:20180214",
    "severity" : "high",
    "title" : "Regular Expression Denial of Service (ReDoS)",
    "module" : "citeproc",
    "sourceId" : "20180214",
    "pubDate" : ISODate("2018-02-15T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Denial of Service"
},

/* 915 */
{
    "_id" : ObjectId("5a845fecc86da389e1708542"),
    "sourceId" : "20170515",
    "module" : "amqp-match",
    "pubDate" : ISODate("2017-05-15T07:36:52.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in amqp-match",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:amqp-match:20170515",
    "source" : "snyk"
},

/* 916 */
{
    "_id" : ObjectId("5a845fecc86da389e1708410"),
    "sourceId" : "20170905",
    "module" : "content-type-parser",
    "pubDate" : ISODate("2017-12-10T06:02:45.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in content-type-parser",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:content-type-parser:20170905",
    "source" : "snyk"
},

/* 917 */
{
    "_id" : ObjectId("5a845fecc86da389e1708444"),
    "sourceId" : "20170905",
    "module" : "debug",
    "pubDate" : ISODate("2017-09-26T03:55:05.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in debug",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:debug:20170905",
    "source" : "snyk"
},

/* 918 */
{
    "_id" : ObjectId("5a845fecc86da389e1708457"),
    "sourceId" : "20170909",
    "module" : "dns-sync",
    "pubDate" : ISODate("2017-09-10T13:38:40.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in dns-sync",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:dns-sync:20170909",
    "source" : "snyk"
},

/* 919 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbec"),
    "sourceId" : "20180219",
    "module" : "ducktype",
    "pubDate" : ISODate("2018-04-15T15:16:33.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in ducktype",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:ducktype:20180219",
    "source" : "snyk"
},

/* 920 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbfc"),
    "sourceId" : "20180222",
    "module" : "eslint",
    "pubDate" : ISODate("2018-03-22T17:37:05.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in eslint",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:eslint:20180222",
    "source" : "snyk"
},

/* 921 */
{
    "_id" : ObjectId("5a845fecc86da389e17085a6"),
    "sourceId" : "20110901",
    "module" : "http-proxy",
    "pubDate" : ISODate("2017-02-13T15:35:44.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in http-proxy",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:http-proxy:20110901",
    "source" : "snyk"
},

/* 922 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbeb"),
    "sourceId" : "20180319",
    "module" : "is-url",
    "pubDate" : ISODate("2018-04-15T15:16:33.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in is-url",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:is-url:20180319",
    "source" : "snyk"
},

/* 923 */
{
    "_id" : ObjectId("5a845fecc86da389e1708446"),
    "sourceId" : "20170907",
    "module" : "marked",
    "pubDate" : ISODate("2017-09-21T08:07:51.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in marked",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:marked:20170907",
    "source" : "snyk"
},

/* 924 */
{
    "_id" : ObjectId("5a845fecc86da389e1708440"),
    "sourceId" : "20170907",
    "module" : "mime",
    "pubDate" : ISODate("2017-09-27T05:48:40.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in mime",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:mime:20170907",
    "source" : "snyk"
},

/* 925 */
{
    "_id" : ObjectId("5a845fecc86da389e1708411"),
    "sourceId" : "20170907",
    "module" : "mobile-detect",
    "pubDate" : ISODate("2017-12-10T06:02:45.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in mobile-detect",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mobile-detect:20170907",
    "source" : "snyk"
},

/* 926 */
{
    "_id" : ObjectId("5a845fecc86da389e1708543"),
    "sourceId" : "20170412",
    "module" : "ms",
    "pubDate" : ISODate("2017-05-15T06:02:45.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in ms",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:ms:20170412",
    "source" : "snyk"
},

/* 927 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbea"),
    "sourceId" : "20180219",
    "module" : "plist",
    "pubDate" : ISODate("2018-04-15T15:16:33.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in plist",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:plist:20180219",
    "source" : "snyk"
},

/* 928 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbed"),
    "sourceId" : "20180219",
    "module" : "simpl-schema",
    "pubDate" : ISODate("2018-04-15T15:16:32.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in simpl-schema",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:simpl-schema:20180219",
    "source" : "snyk"
},

/* 929 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbef"),
    "sourceId" : "20180409",
    "module" : "sshpk",
    "pubDate" : ISODate("2018-04-09T15:17:27.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in sshpk",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sshpk:20180409",
    "source" : "snyk"
},

/* 930 */
{
    "_id" : ObjectId("5a845fecc86da389e1708544"),
    "sourceId" : "20160701",
    "module" : "uikit",
    "pubDate" : ISODate("2017-05-08T12:34:46.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in uikit",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:uikit:20160701",
    "source" : "snyk"
},

/* 931 */
{
    "_id" : ObjectId("5a845fecc86da389e1708412"),
    "sourceId" : "20170907",
    "module" : "whatwg-mimetype",
    "pubDate" : ISODate("2017-12-10T06:02:45.000Z"),
    "attackType" : "Denial of Service",
    "title" : "Regular Expression Denial of Service (ReDoS) in whatwg-mimetype",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:whatwg-mimetype:20170907",
    "source" : "snyk"
},

/* 932 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758b6"),
    "sourceId" : 563,
    "module" : "electron",
    "pubDate" : ISODate("2018-01-23T18:57:03.334Z"),
    "attackType" : "Injection Attack",
    "title" : "Remote Code Execution",
    "severity" : "critical",
    "url" : "https://nodesecurity.io/advisories/563",
    "source" : "nsp"
},

/* 933 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647595c"),
    "sourceId" : 521,
    "module" : "pg",
    "pubDate" : ISODate("2017-08-13T04:34:53.158Z"),
    "attackType" : "Injection Attack",
    "title" : "Remote Code Execution",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/521",
    "source" : "nsp"
},

/* 934 */
{
    "_id" : ObjectId("5a845fecc86da389e1708679"),
    "sourceId" : "20161128",
    "module" : "ejs",
    "pubDate" : ISODate("2016-11-28T18:44:12.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Remote Code Execution in ejs",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:ejs:20161128",
    "source" : "snyk"
},

/* 935 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a81"),
    "sourceId" : 68,
    "module" : "bittorrent-dht",
    "pubDate" : ISODate("2016-01-04T19:52:32.207Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Remote Memory Disclosure",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/68",
    "source" : "nsp"
},

/* 936 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a82"),
    "sourceId" : 67,
    "module" : "ws",
    "pubDate" : ISODate("2016-01-04T19:34:19.734Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Remote Memory Disclosure",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/67",
    "source" : "nsp"
},

/* 937 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475994"),
    "sourceId" : 309,
    "module" : "request",
    "pubDate" : ISODate("2017-04-14T21:44:24.494Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Remote Memory Exposure",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/309",
    "source" : "nsp"
},

/* 938 */
{
    "_id" : ObjectId("5a845fecc86da389e17086d6"),
    "sourceId" : "20160116",
    "module" : "mongoose",
    "pubDate" : ISODate("2016-01-23T12:00:05.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Remote Memory Exposure in mongoose",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mongoose:20160116",
    "source" : "snyk"
},

/* 939 */
{
    "_id" : ObjectId("5a845fecc86da389e17086cf"),
    "sourceId" : "20160119",
    "module" : "request",
    "pubDate" : ISODate("2016-03-22T12:00:05.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Remote Memory Exposure in request",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:request:20160119",
    "source" : "snyk"
},

/* 940 */
{
    "_id" : ObjectId("5a845fecc86da389e17086c7"),
    "sourceId" : "20160115",
    "module" : "sequelize",
    "pubDate" : ISODate("2016-04-01T02:09:36.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Remote Memory Exposure in sequelize",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:sequelize:20160115",
    "source" : "snyk"
},

/* 941 */
{
    "_id" : ObjectId("5adbc7097085b362b9001bab"),
    "url" : "https://snyk.io/vuln/npm:gatsby-cli:20170202",
    "severity" : "medium",
    "title" : "Resources Downloaded over Insecure Protocol",
    "module" : "gatsby-cli",
    "sourceId" : "20170202",
    "pubDate" : ISODate("2018-03-01T05:00:00.000Z"),
    "source" : "snyk",
    "attackType" : "Sensitive Data Exposure"
},

/* 942 */
{
    "_id" : ObjectId("5a845fecc86da389e17083dd"),
    "sourceId" : "20170127",
    "module" : "cordova-android",
    "pubDate" : ISODate("2018-02-12T14:51:05.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources Downloaded over Insecure Protocol in cordova-android",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:cordova-android:20170127",
    "source" : "snyk"
},

/* 943 */
{
    "_id" : ObjectId("5a845fecc86da389e17084a7"),
    "sourceId" : "20170330",
    "module" : "edp-package",
    "pubDate" : ISODate("2017-06-28T13:30:13.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources Downloaded over Insecure Protocol in edp-package",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:edp-package:20170330",
    "source" : "snyk"
},

/* 944 */
{
    "_id" : ObjectId("5a845fecc86da389e1708646"),
    "sourceId" : "20161113",
    "module" : "fuseki",
    "pubDate" : ISODate("2017-01-04T00:27:09.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources Downloaded over Insecure Protocol in fuseki",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:fuseki:20161113",
    "source" : "snyk"
},

/* 945 */
{
    "_id" : ObjectId("5a845fecc86da389e1708648"),
    "sourceId" : "20161116",
    "module" : "geoip-lite-country",
    "pubDate" : ISODate("2017-01-04T00:23:22.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources Downloaded over Insecure Protocol in geoip-lite-country",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:geoip-lite-country:20161116",
    "source" : "snyk"
},

/* 946 */
{
    "_id" : ObjectId("5a845fecc86da389e170864a"),
    "sourceId" : "20161111",
    "module" : "iedriver",
    "pubDate" : ISODate("2017-01-04T00:19:37.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources Downloaded over Insecure Protocol in iedriver",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:iedriver:20161111",
    "source" : "snyk"
},

/* 947 */
{
    "_id" : ObjectId("5a845fecc86da389e1708649"),
    "sourceId" : "20161104",
    "module" : "install-nw",
    "pubDate" : ISODate("2017-01-04T00:22:03.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources Downloaded over Insecure Protocol in install-nw",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:install-nw:20161104",
    "source" : "snyk"
},

/* 948 */
{
    "_id" : ObjectId("5a845fecc86da389e1708647"),
    "sourceId" : "20161102",
    "module" : "mongodb-instance",
    "pubDate" : ISODate("2017-01-04T00:24:46.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources Downloaded over Insecure Protocol in mongodb-instance",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mongodb-instance:20161102",
    "source" : "snyk"
},

/* 949 */
{
    "_id" : ObjectId("5a845fecc86da389e170856c"),
    "sourceId" : "20170424",
    "module" : "nodux-core",
    "pubDate" : ISODate("2017-04-24T09:49:36.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources Downloaded over Insecure Protocol in nodux-core",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:nodux-core:20170424",
    "source" : "snyk"
},

/* 950 */
{
    "_id" : ObjectId("5a845fecc86da389e1708556"),
    "sourceId" : "20170418",
    "module" : "ec2-price",
    "pubDate" : ISODate("2017-05-01T08:20:03.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources downloaded over Insecure Protocol in ec2-price",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:ec2-price:20170418",
    "source" : "snyk"
},

/* 951 */
{
    "_id" : ObjectId("5a845fecc86da389e1708529"),
    "sourceId" : "20170514",
    "module" : "craft-ai-icons",
    "pubDate" : ISODate("2017-06-07T12:36:50.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources downloaded over insecure protocol in craft-ai-icons",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:craft-ai-icons:20170514",
    "source" : "snyk"
},

/* 952 */
{
    "_id" : ObjectId("5a845fecc86da389e17084dd"),
    "sourceId" : "20170514",
    "module" : "given-html-report",
    "pubDate" : ISODate("2017-06-07T12:36:57.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources downloaded over insecure protocol in given-html-report",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:given-html-report:20170514",
    "source" : "snyk"
},

/* 953 */
{
    "_id" : ObjectId("5a845fecc86da389e1708685"),
    "sourceId" : "20160804",
    "module" : "igniteui",
    "pubDate" : ISODate("2016-10-31T00:00:00.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources downloaded over insecure protocol in igniteui",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:igniteui:20160804",
    "source" : "snyk"
},

/* 954 */
{
    "_id" : ObjectId("5a845fecc86da389e1708530"),
    "sourceId" : "20170514",
    "module" : "rocketmake-nuget",
    "pubDate" : ISODate("2017-06-07T11:57:31.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Resources downloaded over insecure protocol in rocketmake-nuget",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:rocketmake-nuget:20170514",
    "source" : "snyk"
},

/* 955 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a8c"),
    "sourceId" : 56,
    "module" : "send",
    "pubDate" : ISODate("2015-11-03T07:12:20.676Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Root Path Disclosure",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/56",
    "source" : "nsp"
},

/* 956 */
{
    "_id" : ObjectId("5a845fecc86da389e1708705"),
    "sourceId" : "20150120",
    "module" : "serve-static",
    "pubDate" : ISODate("2015-01-20T04:46:45.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Root Path Disclosure in serve-static",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:serve-static:20150120",
    "source" : "snyk"
},

/* 957 */
{
    "_id" : ObjectId("5a845fecc86da389e1708717"),
    "sourceId" : "20140708-1",
    "module" : "hapi",
    "pubDate" : ISODate("2014-07-08T06:33:48.000Z"),
    "attackType" : "JSONP Vulnerability",
    "title" : "Rosetta-flash jsonp vulnerability in hapi",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:hapi:20140708-1",
    "source" : "snyk"
},

/* 958 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a83"),
    "sourceId" : 66,
    "module" : "mysql",
    "pubDate" : ISODate("2015-12-28T18:37:37.178Z"),
    "attackType" : "Injection Attack",
    "title" : "SQL Injection due to unescaped object keys",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/66",
    "source" : "nsp"
},

/* 959 */
{
    "_id" : ObjectId("5a845fecc86da389e17086df"),
    "sourceId" : "20151228",
    "module" : "mysql",
    "pubDate" : ISODate("2016-01-05T12:38:01.000Z"),
    "attackType" : "Injection Attack",
    "title" : "SQL Injection due to unescaped object keys in mysql",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mysql:20151228",
    "source" : "snyk"
},

/* 960 */
{
    "_id" : ObjectId("5a845fecc86da389e1708706"),
    "sourceId" : "20150118",
    "module" : "sequelize",
    "pubDate" : ISODate("2015-01-18T20:00:00.000Z"),
    "attackType" : "Injection Attack",
    "title" : "SQL Injection in Order in sequelize",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sequelize:20150118",
    "source" : "snyk"
},

/* 961 */
{
    "_id" : ObjectId("5a845fecc86da389e1708658"),
    "sourceId" : "20150413",
    "module" : "knex",
    "pubDate" : ISODate("2016-12-20T16:43:39.000Z"),
    "attackType" : "Injection Attack",
    "title" : "SQL Injection in knex",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:knex:20150413",
    "source" : "snyk"
},

/* 962 */
{
    "_id" : ObjectId("5a845fecc86da389e17085dc"),
    "sourceId" : "20150108",
    "module" : "loopback-connector-mssql",
    "pubDate" : ISODate("2017-01-04T18:22:12.000Z"),
    "attackType" : "Injection Attack",
    "title" : "SQL Injection in loopback-connector-mssql",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:loopback-connector-mssql:20150108",
    "source" : "snyk"
},

/* 963 */
{
    "_id" : ObjectId("5a845fecc86da389e17085da"),
    "sourceId" : "20150108",
    "module" : "loopback-connector-mysql",
    "pubDate" : ISODate("2017-01-04T18:22:12.000Z"),
    "attackType" : "Injection Attack",
    "title" : "SQL Injection in loopback-connector-mysql",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:loopback-connector-mysql:20150108",
    "source" : "snyk"
},

/* 964 */
{
    "_id" : ObjectId("5a845fecc86da389e17085db"),
    "sourceId" : "20150108",
    "module" : "loopback-connector-oracle",
    "pubDate" : ISODate("2017-01-04T18:22:12.000Z"),
    "attackType" : "Injection Attack",
    "title" : "SQL Injection in loopback-connector-oracle",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:loopback-connector-oracle:20150108",
    "source" : "snyk"
},

/* 965 */
{
    "_id" : ObjectId("5a845fecc86da389e17085dd"),
    "sourceId" : "20150108",
    "module" : "loopback-connector-postgresql",
    "pubDate" : ISODate("2017-01-04T18:22:12.000Z"),
    "attackType" : "Injection Attack",
    "title" : "SQL Injection in loopback-connector-postgresql",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:loopback-connector-postgresql:20150108",
    "source" : "snyk"
},

/* 966 */
{
    "_id" : ObjectId("5a845fecc86da389e17086c8"),
    "sourceId" : "20160106",
    "module" : "sequelize",
    "pubDate" : ISODate("2016-04-01T00:00:00.000Z"),
    "attackType" : "Injection Attack",
    "title" : "SQL Injection in order/limit in sequelize",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:sequelize:20160106",
    "source" : "snyk"
},

/* 967 */
{
    "_id" : ObjectId("5a845fecc86da389e1708595"),
    "sourceId" : "20131221",
    "module" : "pouchdb",
    "pubDate" : ISODate("2017-03-13T08:00:22.000Z"),
    "attackType" : "Injection Attack",
    "title" : "SQL Injection in pouchdb",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:pouchdb:20131221",
    "source" : "snyk"
},

/* 968 */
{
    "_id" : ObjectId("5a845fecc86da389e17085b3"),
    "sourceId" : "20151019",
    "module" : "sequelize",
    "pubDate" : ISODate("2017-02-13T10:26:40.000Z"),
    "attackType" : "Injection Attack",
    "title" : "SQL Injection in sequelize",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:sequelize:20151019",
    "source" : "snyk"
},

/* 969 */
{
    "_id" : ObjectId("5a845fecc86da389e1708684"),
    "sourceId" : "20160804",
    "module" : "waterline-sequel",
    "pubDate" : ISODate("2016-10-31T00:00:00.000Z"),
    "attackType" : "Injection Attack",
    "title" : "SQL Injection in waterline-sequel",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:waterline-sequel:20160804",
    "source" : "snyk"
},

/* 970 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a6c"),
    "sourceId" : 104,
    "module" : "electron-packager",
    "pubDate" : ISODate("2016-04-22T15:56:50.000Z"),
    "attackType" : "Logic Issues",
    "title" : "SSL Validation Defaults to False",
    "severity" : "low",
    "url" : "https://nodesecurity.io/advisories/104",
    "source" : "nsp"
},

/* 971 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475956"),
    "sourceId" : 337,
    "module" : "safe-eval",
    "pubDate" : ISODate("2017-08-30T15:56:22.867Z"),
    "attackType" : "Injection Attack",
    "title" : "Sandbox Breakout",
    "severity" : "critical",
    "url" : "https://nodesecurity.io/advisories/337",
    "source" : "nsp"
},

/* 972 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a70"),
    "sourceId" : 101,
    "module" : "marked",
    "pubDate" : ISODate("2016-04-18T16:45:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "Sanitization bypass using HTML Entities",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/101",
    "source" : "nsp"
},

/* 973 */
{
    "_id" : ObjectId("5a845fecc86da389e1708693"),
    "sourceId" : "20160215",
    "module" : "airbrake",
    "pubDate" : ISODate("2016-10-10T00:00:00.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Sensitive Information Exposure in airbrake",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:airbrake:20160215",
    "source" : "snyk"
},

/* 974 */
{
    "_id" : ObjectId("5a845fecc86da389e1708699"),
    "sourceId" : "20160923",
    "module" : "git-ls-remote",
    "pubDate" : ISODate("2016-09-25T08:53:46.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Shell Command Injection in git-ls-remote",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:git-ls-remote:20160923",
    "source" : "snyk"
},

/* 975 */
{
    "_id" : ObjectId("5a845fecc86da389e17083eb"),
    "sourceId" : "20160311",
    "module" : "traceroute",
    "pubDate" : ISODate("2018-01-23T13:44:46.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Shell Command Injection in traceroute",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:traceroute:20160311",
    "source" : "snyk"
},

/* 976 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564758c8"),
    "sourceId" : 549,
    "module" : "hooka-tools",
    "pubDate" : ISODate("2017-10-25T02:52:40.985Z"),
    "attackType" : "Malicious Package",
    "title" : "Silently Runs Cryptocoin Miner",
    "severity" : "low",
    "url" : "https://nodesecurity.io/advisories/549",
    "source" : "nsp"
},

/* 977 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a52"),
    "sourceId" : 136,
    "module" : "node-krb5",
    "pubDate" : ISODate("2016-08-04T21:27:06.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "Spoofing attack due to unvalidated KDC",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/136",
    "source" : "nsp"
},

/* 978 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a8b"),
    "sourceId" : 57,
    "module" : "tar",
    "pubDate" : ISODate("2015-11-03T07:15:12.900Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Symlink Arbitrary File Overwrite",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/57",
    "source" : "nsp"
},

/* 979 */
{
    "_id" : ObjectId("5a845fecc86da389e17085b1"),
    "sourceId" : "20130708",
    "module" : "npm",
    "pubDate" : ISODate("2017-02-13T13:05:03.000Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Symlink attack due to predictable tmp folder names in npm",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:npm:20130708",
    "source" : "snyk"
},

/* 980 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a71"),
    "sourceId" : 97,
    "module" : "jsrender",
    "pubDate" : ISODate("2016-03-30T22:25:57.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Template Injection",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/97",
    "source" : "nsp"
},

/* 981 */
{
    "_id" : ObjectId("5a845fecc86da389e17083f7"),
    "sourceId" : "20160320",
    "module" : "jsviews",
    "pubDate" : ISODate("2018-01-19T09:35:48.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Template Injection in jsviews",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:jsviews:20160320",
    "source" : "snyk"
},

/* 982 */
{
    "_id" : ObjectId("5a845fecc86da389e170864d"),
    "sourceId" : "20150626",
    "module" : "node-forge",
    "pubDate" : ISODate("2016-12-26T14:45:40.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Timing Attack due to unsafe HMAC comparison in node-forge",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:node-forge:20150626",
    "source" : "snyk"
},

/* 983 */
{
    "_id" : ObjectId("5a845fecc86da389e1708584"),
    "sourceId" : "20151006",
    "module" : "generator-jhipster",
    "pubDate" : ISODate("2017-03-28T07:30:28.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Timing Attack in generator-jhipster",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:generator-jhipster:20151006",
    "source" : "snyk"
},

/* 984 */
{
    "_id" : ObjectId("5a845fecc86da389e170867c"),
    "sourceId" : "20140306",
    "module" : "fernet",
    "pubDate" : ISODate("2016-11-22T17:50:33.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Timing Attack via Non-constant Time Comparison in fernet",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:fernet:20140306",
    "source" : "snyk"
},

/* 985 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475996"),
    "sourceId" : 310,
    "module" : "sync-exec",
    "pubDate" : ISODate("2017-04-14T21:03:34.186Z"),
    "attackType" : "Insecure Access to File System",
    "title" : "Tmp files readable by other users",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/310",
    "source" : "nsp"
},

/* 986 */
{
    "_id" : ObjectId("5a845fecc86da389e17083df"),
    "sourceId" : "20180102",
    "module" : "electron",
    "pubDate" : ISODate("2018-02-06T14:22:50.000Z"),
    "attackType" : "Open Redirection",
    "title" : "URL Spoofing in electron",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:electron:20180102",
    "source" : "snyk"
},

/* 987 */
{
    "_id" : ObjectId("5a845fecc86da389e1708726"),
    "sourceId" : "20130506",
    "module" : "ep_imageconvert",
    "pubDate" : ISODate("2013-05-06T06:33:48.000Z"),
    "attackType" : "Injection Attack",
    "title" : "Unauthenticated Remote Command Injection in ep_imageconvert",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:ep_imageconvert:20130506",
    "source" : "snyk"
},

/* 988 */
{
    "_id" : ObjectId("5a845fecc86da389e17085d9"),
    "sourceId" : "20140514",
    "module" : "mysql",
    "pubDate" : ISODate("2017-01-04T18:36:45.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "Unauthorized SSL Connection due to lack of cert authentication in mysql",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:mysql:20140514",
    "source" : "snyk"
},

/* 989 */
{
    "_id" : ObjectId("5a845fecc86da389e170869d"),
    "sourceId" : "20160119",
    "module" : "bl",
    "pubDate" : ISODate("2016-09-18T17:00:00.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Uninitialized Memory Exposure in bl",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:bl:20160119",
    "source" : "snyk"
},

/* 990 */
{
    "_id" : ObjectId("5a845fecc86da389e170859a"),
    "sourceId" : "20160901",
    "module" : "concat-stream",
    "pubDate" : ISODate("2017-03-09T09:30:46.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Uninitialized Memory Exposure in concat-stream",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:concat-stream:20160901",
    "source" : "snyk"
},

/* 991 */
{
    "_id" : ObjectId("5a845fecc86da389e17084ae"),
    "sourceId" : "20160115",
    "module" : "floody",
    "pubDate" : ISODate("2017-06-21T14:07:50.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Uninitialized Memory Exposure in floody",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:floody:20160115",
    "source" : "snyk"
},

/* 992 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbf0"),
    "sourceId" : "20180406",
    "module" : "http-proxy-agent",
    "pubDate" : ISODate("2018-04-09T15:17:27.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Uninitialized Memory Exposure in http-proxy-agent",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:http-proxy-agent:20180406",
    "source" : "snyk"
},

/* 993 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbf7"),
    "sourceId" : "20180402",
    "module" : "https-proxy-agent",
    "pubDate" : ISODate("2018-04-08T12:56:16.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Uninitialized Memory Exposure in https-proxy-agent",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:https-proxy-agent:20180402",
    "source" : "snyk"
},

/* 994 */
{
    "_id" : ObjectId("5a845fecc86da389e1708531"),
    "sourceId" : "20170304",
    "module" : "ip",
    "pubDate" : ISODate("2017-06-04T13:58:29.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Uninitialized Memory Exposure in ip",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:ip:20170304",
    "source" : "snyk"
},

/* 995 */
{
    "_id" : ObjectId("5a845fecc86da389e1708680"),
    "sourceId" : "20160212",
    "module" : "life_star",
    "pubDate" : ISODate("2016-11-10T00:00:00.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Uninitialized Memory Exposure in life_star",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:life_star:20160212",
    "source" : "snyk"
},

/* 996 */
{
    "_id" : ObjectId("5a845fecc86da389e170845e"),
    "sourceId" : "20170317",
    "module" : "mysql",
    "pubDate" : ISODate("2017-08-08T07:34:47.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Uninitialized Memory Exposure in mysql",
    "severity" : "low",
    "url" : " https://snyk.io/vuln/npm:mysql:20170317",
    "source" : "snyk"
},

/* 997 */
{
    "_id" : ObjectId("5a845fecc86da389e1708490"),
    "sourceId" : "20170302",
    "module" : "openwhisk",
    "pubDate" : ISODate("2017-07-18T13:01:47.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Uninitialized Memory Exposure in openwhisk",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:openwhisk:20170302",
    "source" : "snyk"
},

/* 998 */
{
    "_id" : ObjectId("5a845fecc86da389e17084a4"),
    "sourceId" : "20170305",
    "module" : "tunnel-agent",
    "pubDate" : ISODate("2017-07-05T14:05:50.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Uninitialized Memory Exposure in tunnel-agent",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:tunnel-agent:20170305",
    "source" : "snyk"
},

/* 999 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b5647599a"),
    "sourceId" : 315,
    "module" : "summit",
    "pubDate" : ISODate("2017-04-14T18:35:13.449Z"),
    "attackType" : "Injection Attack",
    "title" : "Unsafe eval()",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/315",
    "source" : "nsp"
},

/* 1000 */
{
    "_id" : ObjectId("5a845fecc86da389e17085a9"),
    "sourceId" : "20130418",
    "module" : "http-signature",
    "pubDate" : ISODate("2017-02-13T15:02:16.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "Unsigned Request Headers in http-signature",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:http-signature:20130418",
    "source" : "snyk"
},

/* 1001 */
{
    "_id" : ObjectId("5a845fecc86da389e1708401"),
    "sourceId" : "20171222",
    "module" : "passport-wsfed-saml2",
    "pubDate" : ISODate("2018-01-03T11:17:20.000Z"),
    "attackType" : "Broken Access Control",
    "title" : "User Impersonation in passport-wsfed-saml2",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:passport-wsfed-saml2:20171222",
    "source" : "snyk"
},

/* 1002 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a9e"),
    "sourceId" : 24,
    "module" : "marked",
    "pubDate" : ISODate("2015-01-22T17:33:48.000Z"),
    "attackType" : "Injection Attack",
    "title" : "VBScript Content Injection",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/24",
    "source" : "nsp"
},

/* 1003 */
{
    "_id" : ObjectId("5a845fecc86da389e170871d"),
    "sourceId" : "20140131-2",
    "module" : "marked",
    "pubDate" : ISODate("2014-01-30T22:33:12.000Z"),
    "attackType" : "Injection Attack",
    "title" : "VBScript Content Injection in marked",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:marked:20140131-2",
    "source" : "snyk"
},

/* 1004 */
{
    "_id" : ObjectId("5a845fecc86da389e1708709"),
    "sourceId" : "20141203",
    "module" : "paypal-ipn",
    "pubDate" : ISODate("2014-12-03T03:00:00.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Validation Bypass in paypal-ipn",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:paypal-ipn:20141203",
    "source" : "snyk"
},

/* 1005 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a9c"),
    "sourceId" : 17,
    "module" : "jsonwebtoken",
    "pubDate" : ISODate("2015-04-01T02:00:00.000Z"),
    "attackType" : "Logic Issues",
    "title" : "Verification Bypass",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/17",
    "source" : "nsp"
},

/* 1006 */
{
    "_id" : ObjectId("5ada7f06368f5c4b8b3cfbfe"),
    "sourceId" : "20171122",
    "module" : "mxgraph",
    "pubDate" : ISODate("2018-03-21T09:26:19.000Z"),
    "attackType" : "Injection Attack",
    "title" : "XML External Entity (XXE) Injection in mxgraph",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:mxgraph:20171122",
    "source" : "snyk"
},

/* 1007 */
{
    "_id" : ObjectId("5a845fecc86da389e17083ed"),
    "sourceId" : "20171002",
    "module" : "express-saml2",
    "pubDate" : ISODate("2018-01-22T12:30:52.000Z"),
    "attackType" : "Injection Attack",
    "title" : "XML Injection in express-saml2",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:express-saml2:20171002",
    "source" : "snyk"
},

/* 1008 */
{
    "_id" : ObjectId("5a845fecc86da389e17083ec"),
    "sourceId" : "20171002",
    "module" : "samlify",
    "pubDate" : ISODate("2018-01-22T12:30:52.000Z"),
    "attackType" : "Injection Attack",
    "title" : "XML Injection in samlify",
    "severity" : "high",
    "url" : " https://snyk.io/vuln/npm:samlify:20171002",
    "source" : "snyk"
},

/* 1009 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a53"),
    "sourceId" : 135,
    "module" : "sanitize-html",
    "pubDate" : ISODate("2016-08-01T18:02:31.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS - Sanitization not applied recursively",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/135",
    "source" : "nsp"
},

/* 1010 */
{
    "_id" : ObjectId("5a845fecc86da389e170870f"),
    "sourceId" : "20130705-1",
    "module" : "validator",
    "pubDate" : ISODate("2014-10-27T06:33:48.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS Filter Bypass via Encoded URL in validator",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:validator:20130705-1",
    "source" : "snyk"
},

/* 1011 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a60"),
    "sourceId" : 123,
    "module" : "swagger-ui",
    "pubDate" : ISODate("2016-07-20T19:01:30.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS in Consumes/Produces Parameter",
    "severity" : "critical",
    "url" : "https://nodesecurity.io/advisories/123",
    "source" : "nsp"
},

/* 1012 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b56475998"),
    "sourceId" : 307,
    "module" : "Morris.js",
    "pubDate" : ISODate("2017-04-14T20:56:20.146Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS in Hover Over Label Names",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/307",
    "source" : "nsp"
},

/* 1013 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a56"),
    "sourceId" : 133,
    "module" : "fuelux",
    "pubDate" : ISODate("2016-07-25T17:04:28.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS in Pillbox",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/133",
    "source" : "nsp"
},

/* 1014 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a5a"),
    "sourceId" : 128,
    "module" : "rendr",
    "pubDate" : ISODate("2016-07-25T16:24:38.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS in client rendered block templates",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/128",
    "source" : "nsp"
},

/* 1015 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a5c"),
    "sourceId" : 127,
    "module" : "jquery-ui",
    "pubDate" : ISODate("2016-07-21T22:21:41.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS in dialog closeText",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/127",
    "source" : "nsp"
},

/* 1016 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a57"),
    "sourceId" : 132,
    "module" : "jqtree",
    "pubDate" : ISODate("2016-07-25T16:25:39.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS in drag and drop node",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/132",
    "source" : "nsp"
},

/* 1017 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a5f"),
    "sourceId" : 124,
    "module" : "bootstrap-tagsinput",
    "pubDate" : ISODate("2016-07-20T21:20:51.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS in itemTitle parameter",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/124",
    "source" : "nsp"
},

/* 1018 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a59"),
    "sourceId" : 129,
    "module" : "emojione",
    "pubDate" : ISODate("2016-07-25T16:25:00.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS in primary functions",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/129",
    "source" : "nsp"
},

/* 1019 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759a8"),
    "sourceId" : 327,
    "module" : "ag-grid",
    "pubDate" : ISODate("2017-03-15T18:51:07.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS via Angular Expression",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/327",
    "source" : "nsp"
},

/* 1020 */
{
    "_id" : ObjectId("5ada7ac4d27ae04b564759a6"),
    "sourceId" : 329,
    "module" : "jquery",
    "pubDate" : ISODate("2017-03-21T18:23:43.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS via improper selector detection",
    "severity" : "high",
    "url" : "https://nodesecurity.io/advisories/329",
    "source" : "nsp"
},

/* 1021 */
{
    "_id" : ObjectId("5a845fecc86da389e17086a4"),
    "sourceId" : "20160817",
    "module" : "c3",
    "pubDate" : ISODate("2016-08-17T15:13:32.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "XSS via tooltips in c3",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:c3:20160817",
    "source" : "snyk"
},

/* 1022 */
{
    "_id" : ObjectId("5a845fecc86da389e1708722"),
    "sourceId" : "20130701",
    "module" : "connect",
    "pubDate" : ISODate("2013-06-30T22:08:59.000Z"),
    "attackType" : "Cross Site Scripting (XSS)",
    "title" : "methodOverride Middleware Reflected Cross-site Scripting (XSS) in connect",
    "severity" : "medium",
    "url" : " https://snyk.io/vuln/npm:connect:20130701",
    "source" : "snyk"
},

/* 1023 */
{
    "_id" : ObjectId("5ada7ac5d27ae04b56475a6f"),
    "sourceId" : 98,
    "module" : "npm",
    "pubDate" : ISODate("2016-04-18T21:16:44.000Z"),
    "attackType" : "Sensitive Data Exposure",
    "title" : "npm Token Leak",
    "severity" : "medium",
    "url" : "https://nodesecurity.io/advisories/98",
    "source" : "nsp"
}
];