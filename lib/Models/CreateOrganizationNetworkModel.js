/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateOrganizationNetworkModel
 */
class CreateOrganizationNetworkModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.timeZone = this.constructor.getValue(obj.timeZone);
        this.disableRemoteStatusPage = this.constructor.getValue(obj.disableRemoteStatusPage);
        this.disableMyMerakiCom = this.constructor.getValue(obj.disableMyMerakiCom);
        this.type = this.constructor.getValue(obj.type);
        this.copyFromNetworkId = this.constructor.getValue(obj.copyFromNetworkId);
        this.tags = this.constructor.getValue(obj.tags);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'timeZone', realName: 'timeZone' },
            { name: 'disableRemoteStatusPage', realName: 'disableRemoteStatusPage' },
            { name: 'disableMyMerakiCom', realName: 'disableMyMerakiCom' },
            { name: 'type', realName: 'type' },
            { name: 'copyFromNetworkId', realName: 'copyFromNetworkId' },
            { name: 'tags', realName: 'tags' },
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

module.exports = CreateOrganizationNetworkModel;
