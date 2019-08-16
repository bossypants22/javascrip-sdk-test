/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Rule4Model
 */
class Rule4Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.perClientBandwidthLimits = this.constructor.getValue(obj.perClientBandwidthLimits);
        this.pcpTagValue = this.constructor.getValue(obj.pcpTagValue);
        this.dscpTagValue = this.constructor.getValue(obj.dscpTagValue);
        this.definitions = this.constructor.getValue(obj.definitions);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'perClientBandwidthLimits',
                realName: 'perClientBandwidthLimits',
                type: 'PerClientBandwidthLimitsModel',
            },
            { name: 'pcpTagValue', realName: 'pcpTagValue' },
            { name: 'dscpTagValue', realName: 'dscpTagValue' },
            { name: 'definitions', realName: 'definitions', array: true, type: 'DefinitionModel' },
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

module.exports = Rule4Model;
