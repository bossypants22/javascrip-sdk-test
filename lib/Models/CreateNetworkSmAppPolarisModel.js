/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateNetworkSmAppPolarisModel
 */
class CreateNetworkSmAppPolarisModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.usesVPP = this.constructor.getValue(obj.usesVPP);
        this.preventAutoInstall = this.constructor.getValue(obj.preventAutoInstall);
        this.manifestUrl = this.constructor.getValue(obj.manifestUrl);
        this.scope = this.constructor.getValue(obj.scope);
        this.bundleId = this.constructor.getValue(obj.bundleId);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'usesVPP', realName: 'usesVPP' },
            { name: 'preventAutoInstall', realName: 'preventAutoInstall' },
            { name: 'manifestUrl', realName: 'manifestUrl' },
            { name: 'scope', realName: 'scope' },
            { name: 'bundleId', realName: 'bundleId' },
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

module.exports = CreateNetworkSmAppPolarisModel;
