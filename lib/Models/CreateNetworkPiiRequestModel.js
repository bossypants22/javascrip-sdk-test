/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateNetworkPiiRequestModel
 */
class CreateNetworkPiiRequestModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.smDeviceId = this.constructor.getValue(obj.smDeviceId);
        this.datasets = this.constructor.getValue(obj.datasets);
        this.type = this.constructor.getValue(obj.type);
        this.email = this.constructor.getValue(obj.email);
        this.mac = this.constructor.getValue(obj.mac);
        this.smUserId = this.constructor.getValue(obj.smUserId);
        this.username = this.constructor.getValue(obj.username);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'smDeviceId', realName: 'smDeviceId' },
            { name: 'datasets', realName: 'datasets', array: true },
            { name: 'type', realName: 'type' },
            { name: 'email', realName: 'email' },
            { name: 'mac', realName: 'mac' },
            { name: 'smUserId', realName: 'smUserId' },
            { name: 'username', realName: 'username' },
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

module.exports = CreateNetworkPiiRequestModel;
