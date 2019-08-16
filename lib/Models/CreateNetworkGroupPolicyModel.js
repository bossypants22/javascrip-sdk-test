/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateNetworkGroupPolicyModel
 */
class CreateNetworkGroupPolicyModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.vlanTagging = this.constructor.getValue(obj.vlanTagging);
        this.contentFiltering = this.constructor.getValue(obj.contentFiltering);
        this.bonjourForwarding = this.constructor.getValue(obj.bonjourForwarding);
        this.bandwidth = this.constructor.getValue(obj.bandwidth);
        this.splashAuthSettings = this.constructor.getValue(obj.splashAuthSettings);
        this.name = this.constructor.getValue(obj.name);
        this.scheduling = this.constructor.getValue(obj.scheduling);
        this.firewallAndTrafficShaping = this.constructor.getValue(obj.firewallAndTrafficShaping);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'vlanTagging', realName: 'vlanTagging', type: 'VlanTaggingModel' },
            {
                name: 'contentFiltering',
                realName: 'contentFiltering',
                type: 'ContentFilteringModel',
            },
            {
                name: 'bonjourForwarding',
                realName: 'bonjourForwarding',
                type: 'BonjourForwardingModel',
            },
            { name: 'bandwidth', realName: 'bandwidth', type: 'BandwidthModel' },
            { name: 'splashAuthSettings', realName: 'splashAuthSettings' },
            { name: 'name', realName: 'name' },
            { name: 'scheduling', realName: 'scheduling', type: 'SchedulingModel' },
            {
                name: 'firewallAndTrafficShaping',
                realName: 'firewallAndTrafficShaping',
                type: 'FirewallAndTrafficShapingModel',
            },
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

module.exports = CreateNetworkGroupPolicyModel;
