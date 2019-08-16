/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of PeerModel
 */
class PeerModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.networkTags = this.constructor.getValue(obj.networkTags);
        this.ipsecPoliciesPreset = this.constructor.getValue(obj.ipsecPoliciesPreset);
        this.name = this.constructor.getValue(obj.name);
        this.publicIp = this.constructor.getValue(obj.publicIp);
        this.privateSubnets = this.constructor.getValue(obj.privateSubnets);
        this.secret = this.constructor.getValue(obj.secret);
        this.ipsecPolicies = this.constructor.getValue(obj.ipsecPolicies);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'networkTags', realName: 'networkTags', array: true },
            { name: 'ipsecPoliciesPreset', realName: 'ipsecPoliciesPreset' },
            { name: 'name', realName: 'name' },
            { name: 'publicIp', realName: 'publicIp' },
            { name: 'privateSubnets', realName: 'privateSubnets', array: true },
            { name: 'secret', realName: 'secret' },
            { name: 'ipsecPolicies', realName: 'ipsecPolicies', type: 'IpsecPoliciesModel' },
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

module.exports = PeerModel;
