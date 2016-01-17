// Insteon Hub for HomeBridge
//
// Remember to add platform to config.json. Example:
// "platforms": [
//     {
//         "platform": "Insteon",
//         "name": "Insteon Hub",
//         "ip_address": "127.0.0.1"
//     }
// ],
//
// If you do not know the IP address of your Insteon Hub, simply leave it blank and your Hub
// will be discovered automatically.
//
// When you attempt to add a device, it will ask for a "PIN code".
// The default code for all HomeBridge accessories is 031-45-154.
//

/* jslint node: true */
/* globals require: false */
/* globals config: false */

"use strict";

var InsteonAPI = require("insteon-api")
var fs = require('fs');
var path = require('path');

var Service, Characteristic;

module.exports = function(homebridge) {

  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  homebridge.registerPlatform("homebridge-insteon", "Insteon", InsteonPlaftorm);
}


function InsteonPlaftorm(log, config) {
  this.log = log;
  this.ip_address = config["ip_address"];

  this.log("Insteon Hub Plugin Version " + this.getVersion());
}
