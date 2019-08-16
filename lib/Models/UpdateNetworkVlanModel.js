/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkVlanModel
 */
class UpdateNetworkVlanModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.dnsNameservers = this.constructor.getValue(obj.dnsNameservers);
        this.subnet = this.constructor.getValue(obj.subnet);
        this.dhcpHandling = this.constructor.getValue(obj.dhcpHandling);
        this.dhcpOptions = this.constructor.getValue(obj.dhcpOptions);
        this.dhcpBootOptionsEnabled = this.constructor.getValue(obj.dhcpBootOptionsEnabled);
        this.dhcpBootNextServer = this.constructor.getValue(obj.dhcpBootNextServer);
        this.fixedIpAssignments = this.constructor.getValue(obj.fixedIpAssignments);
        this.dhcpLeaseTime = this.constructor.getValue(obj.dhcpLeaseTime);
        this.vpnNatSubnet = this.constructor.getValue(obj.vpnNatSubnet);
        this.dhcpRelayServerIps = this.constructor.getValue(obj.dhcpRelayServerIps);
        this.name = this.constructor.getValue(obj.name);
        this.applianceIp = this.constructor.getValue(obj.applianceIp);
        this.dhcpBootFilename = this.constructor.getValue(obj.dhcpBootFilename);
        this.reservedIpRanges = this.constructor.getValue(obj.reservedIpRanges);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'dnsNameservers', realName: 'dnsNameservers' },
            { name: 'subnet', realName: 'subnet' },
            { name: 'dhcpHandling', realName: 'dhcpHandling' },
            { name: 'dhcpOptions', realName: 'dhcpOptions', array: true, type: 'DhcpOptionModel' },
            { name: 'dhcpBootOptionsEnabled', realName: 'dhcpBootOptionsEnabled' },
            { name: 'dhcpBootNextServer', realName: 'dhcpBootNextServer' },
            { name: 'fixedIpAssignments', realName: 'fixedIpAssignments' },
            { name: 'dhcpLeaseTime', realName: 'dhcpLeaseTime' },
            { name: 'vpnNatSubnet', realName: 'vpnNatSubnet' },
            { name: 'dhcpRelayServerIps', realName: 'dhcpRelayServerIps', array: true },
            { name: 'name', realName: 'name' },
            { name: 'applianceIp', realName: 'applianceIp' },
            { name: 'dhcpBootFilename', realName: 'dhcpBootFilename' },
            {
                name: 'reservedIpRanges',
                realName: 'reservedIpRanges',
                array: true,
                type: 'ReservedIpRangeModel',
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

module.exports = UpdateNetworkVlanModel;
