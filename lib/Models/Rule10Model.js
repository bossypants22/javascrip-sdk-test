/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Rule10Model
 */
class Rule10Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.protocol = this.constructor.getValue(obj.protocol);
        this.portRules = this.constructor.getValue(obj.portRules);
        this.localPort = this.constructor.getValue(obj.localPort);
        this.uplink = this.constructor.getValue(obj.uplink);
        this.allowedIps = this.constructor.getValue(obj.allowedIps);
        this.name = this.constructor.getValue(obj.name);
        this.publicPort = this.constructor.getValue(obj.publicPort);
        this.localIp = this.constructor.getValue(obj.localIp);
        this.publicIp = this.constructor.getValue(obj.publicIp);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'protocol', realName: 'protocol' },
            { name: 'portRules', realName: 'portRules', array: true },
            { name: 'localPort', realName: 'localPort' },
            { name: 'uplink', realName: 'uplink' },
            { name: 'allowedIps', realName: 'allowedIps' },
            { name: 'name', realName: 'name' },
            { name: 'publicPort', realName: 'publicPort' },
            { name: 'localIp', realName: 'localIp' },
            { name: 'publicIp', realName: 'publicIp' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = Rule10Model;
