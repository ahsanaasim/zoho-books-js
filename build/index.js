"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoho = void 0;
const config_1 = require("./config/config");
const Zoho = (clientId, clientSecret) => {
    config_1.zoho.clientId = clientId;
    config_1.zoho.clientSecret = clientSecret;
};
exports.Zoho = Zoho;
