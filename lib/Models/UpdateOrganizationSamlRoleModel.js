/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateOrganizationSamlRoleModel
 */
class UpdateOrganizationSamlRoleModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.role = this.constructor.getValue(obj.role);
        this.orgAccess = this.constructor.getValue(obj.orgAccess);
        this.networks = this.constructor.getValue(obj.networks);
        this.tags = this.constructor.getValue(obj.tags);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'role', realName: 'role' },
            { name: 'orgAccess', realName: 'orgAccess' },
            { name: 'networks', realName: 'networks', array: true, type: 'NetworkModel' },
            { name: 'tags', realName: 'tags', array: true, type: 'TagModel' },
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

module.exports = UpdateOrganizationSamlRoleModel;
