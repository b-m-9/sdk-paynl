const Paynl = require('paynl-sdk');
const init = (token, serviceId) => {
    Paynl.Config.setApiToken(token);
    Paynl.Config.setServiceId(serviceId);
    return true;
};
module.exports = {Paynl, init};