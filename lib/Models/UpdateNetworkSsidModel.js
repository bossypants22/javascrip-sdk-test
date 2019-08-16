/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkSsidModel
 */
class UpdateNetworkSsidModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.bandSelection = this.constructor.getValue(obj.bandSelection);
        this.minBitrate = this.constructor.getValue(obj.minBitrate);
        this.radiusAccountingServers = this.constructor.getValue(obj.radiusAccountingServers);
        this.psk = this.constructor.getValue(obj.psk);
        this.wpaEncryptionMode = this.constructor.getValue(obj.wpaEncryptionMode);
        this.enabled = this.constructor.getValue(obj.enabled);
        this.radiusFailoverPolicy = this.constructor.getValue(obj.radiusFailoverPolicy);
        this.defaultVlanId = this.constructor.getValue(obj.defaultVlanId);
        this.splashPage = this.constructor.getValue(obj.splashPage);
        this.apTagsAndVlanIds = this.constructor.getValue(obj.apTagsAndVlanIds);
        this.encryptionMode = this.constructor.getValue(obj.encryptionMode);
        this.concentratorNetworkId = this.constructor.getValue(obj.concentratorNetworkId);
        this.radiusServers = this.constructor.getValue(obj.radiusServers);
        this.radiusCoaEnabled = this.constructor.getValue(obj.radiusCoaEnabled);
        this.perClientBandwidthLimitDown =
          this.constructor.getValue(obj.perClientBandwidthLimitDown);
        this.radiusAccountingEnabled = this.constructor.getValue(obj.radiusAccountingEnabled);
        this.vlanId = this.constructor.getValue(obj.vlanId);
        this.ipAssignmentMode = this.constructor.getValue(obj.ipAssignmentMode);
        this.authMode = this.constructor.getValue(obj.authMode);
        this.useVlanTagging = this.constructor.getValue(obj.useVlanTagging);
        this.perClientBandwidthLimitUp = this.constructor.getValue(obj.perClientBandwidthLimitUp);
        this.radiusLoadBalancingPolicy = this.constructor.getValue(obj.radiusLoadBalancingPolicy);
        this.name = this.constructor.getValue(obj.name);
        this.walledGardenEnabled = this.constructor.getValue(obj.walledGardenEnabled);
        this.walledGardenRanges = this.constructor.getValue(obj.walledGardenRanges);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'bandSelection', realName: 'bandSelection' },
            { name: 'minBitrate', realName: 'minBitrate' },
            {
                name: 'radiusAccountingServers',
                realName: 'radiusAccountingServers',
                array: true,
                type: 'RadiusAccountingServerModel',
            },
            { name: 'psk', realName: 'psk' },
            { name: 'wpaEncryptionMode', realName: 'wpaEncryptionMode' },
            { name: 'enabled', realName: 'enabled' },
            { name: 'radiusFailoverPolicy', realName: 'radiusFailoverPolicy' },
            { name: 'defaultVlanId', realName: 'defaultVlanId' },
            { name: 'splashPage', realName: 'splashPage' },
            {
                name: 'apTagsAndVlanIds',
                realName: 'apTagsAndVlanIds',
                array: true,
                type: 'ApTagsAndVlanIdModel',
            },
            { name: 'encryptionMode', realName: 'encryptionMode' },
            { name: 'concentratorNetworkId', realName: 'concentratorNetworkId' },
            {
                name: 'radiusServers',
                realName: 'radiusServers',
                array: true,
                type: 'RadiusServerModel',
            },
            { name: 'radiusCoaEnabled', realName: 'radiusCoaEnabled' },
            { name: 'perClientBandwidthLimitDown', realName: 'perClientBandwidthLimitDown' },
            { name: 'radiusAccountingEnabled', realName: 'radiusAccountingEnabled' },
            { name: 'vlanId', realName: 'vlanId' },
            { name: 'ipAssignmentMode', realName: 'ipAssignmentMode' },
            { name: 'authMode', realName: 'authMode' },
            { name: 'useVlanTagging', realName: 'useVlanTagging' },
            { name: 'perClientBandwidthLimitUp', realName: 'perClientBandwidthLimitUp' },
            { name: 'radiusLoadBalancingPolicy', realName: 'radiusLoadBalancingPolicy' },
            { name: 'name', realName: 'name' },
            { name: 'walledGardenEnabled', realName: 'walledGardenEnabled' },
            { name: 'walledGardenRanges', realName: 'walledGardenRanges' },
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

module.exports = UpdateNetworkSsidModel;
