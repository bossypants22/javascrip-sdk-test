/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Rule3Model
 */
class Rule3Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.protocol = this.constructor.getValue(obj.protocol);
        this.uplink = this.constructor.getValue(obj.uplink);
        this.destinationPorts = this.constructor.getValue(obj.destinationPorts);
        this.allowedIps = this.constructor.getValue(obj.allowedIps);
        this.name = this.constructor.getValue(obj.name);
        this.allowedInbound = this.constructor.getValue(obj.allowedInbound);
        this.publicIp = this.constructor.getValue(obj.publicIp);
        this.lanIp = this.constructor.getValue(obj.lanIp);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'protocol', realName: 'protocol' },
            { name: 'uplink', realName: 'uplink' },
            { name: 'destinationPorts', realName: 'destinationPorts' },
            { name: 'allowedIps', realName: 'allowedIps' },
            { name: 'name', realName: 'name' },
            { name: 'allowedInbound', realName: 'allowedInbound', array: true },
            { name: 'publicIp', realName: 'publicIp' },
            { name: 'lanIp', realName: 'lanIp' },
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

module.exports = Rule3Model;
