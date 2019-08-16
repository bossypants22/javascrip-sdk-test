/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkBluetoothSettingsModel
 */
class UpdateNetworkBluetoothSettingsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.major = this.constructor.getValue(obj.major);
        this.minor = this.constructor.getValue(obj.minor);
        this.majorMinorAssignmentMode = this.constructor.getValue(obj.majorMinorAssignmentMode);
        this.scanningEnabled = this.constructor.getValue(obj.scanningEnabled);
        this.uuid = this.constructor.getValue(obj.uuid);
        this.advertisingEnabled = this.constructor.getValue(obj.advertisingEnabled);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'major', realName: 'major' },
            { name: 'minor', realName: 'minor' },
            { name: 'majorMinorAssignmentMode', realName: 'majorMinorAssignmentMode' },
            { name: 'scanningEnabled', realName: 'scanningEnabled' },
            { name: 'uuid', realName: 'uuid' },
            { name: 'advertisingEnabled', realName: 'advertisingEnabled' },
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

module.exports = UpdateNetworkBluetoothSettingsModel;
