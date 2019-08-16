/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateDeviceSwitchPortModel
 */
class UpdateDeviceSwitchPortModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.stpGuard = this.constructor.getValue(obj.stpGuard);
        this.portScheduleId = this.constructor.getValue(obj.portScheduleId);
        this.rstpEnabled = this.constructor.getValue(obj.rstpEnabled);
        this.isolationEnabled = this.constructor.getValue(obj.isolationEnabled);
        this.type = this.constructor.getValue(obj.type);
        this.enabled = this.constructor.getValue(obj.enabled);
        this.tags = this.constructor.getValue(obj.tags);
        this.allowed_vlans = this.constructor.getValue(obj.allowed_vlans || obj.allowedVlans);
        this.accessPolicyNumber = this.constructor.getValue(obj.accessPolicyNumber);
        this.linkNegotiation = this.constructor.getValue(obj.linkNegotiation);
        this.vlan = this.constructor.getValue(obj.vlan);
        this.voiceVlan = this.constructor.getValue(obj.voiceVlan);
        this.poeEnabled = this.constructor.getValue(obj.poeEnabled);
        this.name = this.constructor.getValue(obj.name);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'stpGuard', realName: 'stpGuard' },
            { name: 'portScheduleId', realName: 'portScheduleId' },
            { name: 'rstpEnabled', realName: 'rstpEnabled' },
            { name: 'isolationEnabled', realName: 'isolationEnabled' },
            { name: 'type', realName: 'type' },
            { name: 'enabled', realName: 'enabled' },
            { name: 'tags', realName: 'tags' },
            { name: 'allowed_vlans', realName: 'allowedVlans' },
            { name: 'accessPolicyNumber', realName: 'accessPolicyNumber' },
            { name: 'linkNegotiation', realName: 'linkNegotiation' },
            { name: 'vlan', realName: 'vlan' },
            { name: 'voiceVlan', realName: 'voiceVlan' },
            { name: 'poeEnabled', realName: 'poeEnabled' },
            { name: 'name', realName: 'name' },
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

module.exports = UpdateDeviceSwitchPortModel;
