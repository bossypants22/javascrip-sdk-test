/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const UpdateNetworkSyslogServersModel = require('../lib/Models/UpdateNetworkSyslogServersModel');
const ServerModel = require('../lib/Models/ServerModel');
const UpdateNetworkTrafficAnalysisSettingsModel =
  require('../lib/Models/UpdateNetworkTrafficAnalysisSettingsModel');
const CustomPieChartItemModel = require('../lib/Models/CustomPieChartItemModel');
const UpdateOrganizationVpnFirewallRulesModel =
  require('../lib/Models/UpdateOrganizationVpnFirewallRulesModel');
const RuleModel = require('../lib/Models/RuleModel');
const CreateNetworkSwitchStackModel = require('../lib/Models/CreateNetworkSwitchStackModel');
const UpdateNetworkPortForwardingRulesModel =
  require('../lib/Models/UpdateNetworkPortForwardingRulesModel');
const Rule1Model = require('../lib/Models/Rule1Model');
const UpdateNetworkSiteToSiteVpnModel = require('../lib/Models/UpdateNetworkSiteToSiteVpnModel');
const SubnetModel = require('../lib/Models/SubnetModel');
const HubModel = require('../lib/Models/HubModel');
const UpdateNetworkSmAppPolarisModel = require('../lib/Models/UpdateNetworkSmAppPolarisModel');
const ProvisionNetworkClientsModel = require('../lib/Models/ProvisionNetworkClientsModel');
const UpdateNetworkSwitchPortScheduleModel =
  require('../lib/Models/UpdateNetworkSwitchPortScheduleModel');
const PortScheduleModel = require('../lib/Models/PortScheduleModel');
const SundayModel = require('../lib/Models/SundayModel');
const SaturdayModel = require('../lib/Models/SaturdayModel');
const TuesdayModel = require('../lib/Models/TuesdayModel');
const WednesdayModel = require('../lib/Models/WednesdayModel');
const ThursdayModel = require('../lib/Models/ThursdayModel');
const FridayModel = require('../lib/Models/FridayModel');
const MondayModel = require('../lib/Models/MondayModel');
const UpdateOrganizationSamlRoleModel = require('../lib/Models/UpdateOrganizationSamlRoleModel');
const NetworkModel = require('../lib/Models/NetworkModel');
const TagModel = require('../lib/Models/TagModel');
const CreateNetworkGroupPolicyModel = require('../lib/Models/CreateNetworkGroupPolicyModel');
const VlanTaggingModel = require('../lib/Models/VlanTaggingModel');
const ContentFilteringModel = require('../lib/Models/ContentFilteringModel');
const BlockedUrlPatternsModel = require('../lib/Models/BlockedUrlPatternsModel');
const AllowedUrlPatternsModel = require('../lib/Models/AllowedUrlPatternsModel');
const BlockedUrlCategoriesModel = require('../lib/Models/BlockedUrlCategoriesModel');
const BonjourForwardingModel = require('../lib/Models/BonjourForwardingModel');
const Rule2Model = require('../lib/Models/Rule2Model');
const BandwidthModel = require('../lib/Models/BandwidthModel');
const BandwidthLimitsModel = require('../lib/Models/BandwidthLimitsModel');
const SchedulingModel = require('../lib/Models/SchedulingModel');
const FirewallAndTrafficShapingModel = require('../lib/Models/FirewallAndTrafficShapingModel');
const TrafficShapingRuleModel = require('../lib/Models/TrafficShapingRuleModel');
const PerClientBandwidthLimitsModel = require('../lib/Models/PerClientBandwidthLimitsModel');
const BandwidthLimits1Model = require('../lib/Models/BandwidthLimits1Model');
const DefinitionModel = require('../lib/Models/DefinitionModel');
const L3FirewallRuleModel = require('../lib/Models/L3FirewallRuleModel');
const L7FirewallRuleModel = require('../lib/Models/L7FirewallRuleModel');
const UpdateNetworkOneToOneNatRulesModel =
  require('../lib/Models/UpdateNetworkOneToOneNatRulesModel');
const Rule3Model = require('../lib/Models/Rule3Model');
const CloneOrganizationModel = require('../lib/Models/CloneOrganizationModel');
const UpdateNetworkVlanModel = require('../lib/Models/UpdateNetworkVlanModel');
const DhcpOptionModel = require('../lib/Models/DhcpOptionModel');
const ReservedIpRangeModel = require('../lib/Models/ReservedIpRangeModel');
const CreateOrganizationActionBatchModel =
  require('../lib/Models/CreateOrganizationActionBatchModel');
const ActionModel = require('../lib/Models/ActionModel');
const BlinkNetworkDeviceLedsModel = require('../lib/Models/BlinkNetworkDeviceLedsModel');
const UpdateNetworkSsidTrafficShapingModel =
  require('../lib/Models/UpdateNetworkSsidTrafficShapingModel');
const Rule4Model = require('../lib/Models/Rule4Model');
const UpdateOrganizationActionBatchModel =
  require('../lib/Models/UpdateOrganizationActionBatchModel');
const UpdateOrganizationAdminModel = require('../lib/Models/UpdateOrganizationAdminModel');
const Network1Model = require('../lib/Models/Network1Model');
const Tag1Model = require('../lib/Models/Tag1Model');
const UpdateNetworkL7FirewallRulesModel =
  require('../lib/Models/UpdateNetworkL7FirewallRulesModel');
const Rule5Model = require('../lib/Models/Rule5Model');
const AddNetworkSmProfileUmbrellaModel = require('../lib/Models/AddNetworkSmProfileUmbrellaModel');
const ProviderConfigurationModel = require('../lib/Models/ProviderConfigurationModel');
const UpdateNetworkSmProfileUmbrellaModel =
  require('../lib/Models/UpdateNetworkSmProfileUmbrellaModel');
const UpdateNetworkGroupPolicyModel = require('../lib/Models/UpdateNetworkGroupPolicyModel');
const UpdateNetworkBluetoothSettingsModel =
  require('../lib/Models/UpdateNetworkBluetoothSettingsModel');
const UpdateNetworkL3FirewallRulesModel =
  require('../lib/Models/UpdateNetworkL3FirewallRulesModel');
const Rule7Model = require('../lib/Models/Rule7Model');
const UpdateNetworkSwitchSettingsModel = require('../lib/Models/UpdateNetworkSwitchSettingsModel');
const PowerExceptionModel = require('../lib/Models/PowerExceptionModel');
const UpdateNetworkSecurityMalwareSettingsModel =
  require('../lib/Models/UpdateNetworkSecurityMalwareSettingsModel');
const AllowedUrlModel = require('../lib/Models/AllowedUrlModel');
const AllowedFileModel = require('../lib/Models/AllowedFileModel');
const AddNetworkSmProfileClarityModel = require('../lib/Models/AddNetworkSmProfileClarityModel');
const VendorConfigModel = require('../lib/Models/VendorConfigModel');
const UpdateNetworkSmProfileClarityModel =
  require('../lib/Models/UpdateNetworkSmProfileClarityModel');
const UpdateNetworkAppliancePortModel = require('../lib/Models/UpdateNetworkAppliancePortModel');
const UpdateNetworkFirewalledServiceModel =
  require('../lib/Models/UpdateNetworkFirewalledServiceModel');
const UpdateNetworkSsidsPlashSettingsModel =
  require('../lib/Models/UpdateNetworkSsidsPlashSettingsModel');
const CreateNetworkHttpServerModel = require('../lib/Models/CreateNetworkHttpServerModel');
const UpdateNetworkSmDevicesTagsModel = require('../lib/Models/UpdateNetworkSmDevicesTagsModel');
const UpdateNetworkDeviceModel = require('../lib/Models/UpdateNetworkDeviceModel');
const CombineOrganizationNetworksModel = require('../lib/Models/CombineOrganizationNetworksModel');
const UpdateNetworkCellularFirewallRulesModel =
  require('../lib/Models/UpdateNetworkCellularFirewallRulesModel');
const UpdateNetworkUplinkSettingsModel = require('../lib/Models/UpdateNetworkUplinkSettingsModel');
const BandwidthLimits5Model = require('../lib/Models/BandwidthLimits5Model');
const UpdateNetworkClientPolicyModel = require('../lib/Models/UpdateNetworkClientPolicyModel');
const ClaimNetworkDevicesModel = require('../lib/Models/ClaimNetworkDevicesModel');
const UpdateOrganizationSnmpModel = require('../lib/Models/UpdateOrganizationSnmpModel');
const UpdateNetworkNetflowSettingsModel =
  require('../lib/Models/UpdateNetworkNetflowSettingsModel');
const UpdateDeviceSwitchPortModel = require('../lib/Models/UpdateDeviceSwitchPortModel');
const CreateNetworkStaticRouteModel = require('../lib/Models/CreateNetworkStaticRouteModel');
const CreateNetworkSmProfileClarityModel =
  require('../lib/Models/CreateNetworkSmProfileClarityModel');
const UpdateOrganizationModel = require('../lib/Models/UpdateOrganizationModel');
const CreateOrganizationAdminModel = require('../lib/Models/CreateOrganizationAdminModel');
const GenerateNetworkCameraSnapshotModel =
  require('../lib/Models/GenerateNetworkCameraSnapshotModel');
const CreateNetworkSmAppPolarisModel = require('../lib/Models/CreateNetworkSmAppPolarisModel');
const UpdateNetworkSnmpSettingsModel = require('../lib/Models/UpdateNetworkSnmpSettingsModel');
const UserModel = require('../lib/Models/UserModel');
const CreateNetworkPiiRequestModel = require('../lib/Models/CreateNetworkPiiRequestModel');
const CreateNetworkVlanModel = require('../lib/Models/CreateNetworkVlanModel');
const UpdateNetworkModel = require('../lib/Models/UpdateNetworkModel');
const CreateNetworkSwitchPortScheduleModel =
  require('../lib/Models/CreateNetworkSwitchPortScheduleModel');
const ClaimOrganizationModel = require('../lib/Models/ClaimOrganizationModel');
const LicenseModel = require('../lib/Models/LicenseModel');
const UpdateNetworkSsidL3FirewallRulesModel =
  require('../lib/Models/UpdateNetworkSsidL3FirewallRulesModel');
const Rule9Model = require('../lib/Models/Rule9Model');
const UpdateNetworkDeviceManagementInterfaceSettingsModel =
  require('../lib/Models/UpdateNetworkDeviceManagementInterfaceSettingsModel');
const Wan2Model = require('../lib/Models/Wan2Model');
const Wan1Model = require('../lib/Models/Wan1Model');
const UpdateNetworkSsidModel = require('../lib/Models/UpdateNetworkSsidModel');
const RadiusAccountingServerModel = require('../lib/Models/RadiusAccountingServerModel');
const ApTagsAndVlanIdModel = require('../lib/Models/ApTagsAndVlanIdModel');
const RadiusServerModel = require('../lib/Models/RadiusServerModel');
const CreateOrganizationNetworkModel = require('../lib/Models/CreateOrganizationNetworkModel');
const UpdateNetworkVlansEnabledStateModel =
  require('../lib/Models/UpdateNetworkVlansEnabledStateModel');
const CreateNetworkSmBypassActivationLockAttemptModel =
  require('../lib/Models/CreateNetworkSmBypassActivationLockAttemptModel');
const UpdateNetworkOneToManyNatRulesModel =
  require('../lib/Models/UpdateNetworkOneToManyNatRulesModel');
const Rule10Model = require('../lib/Models/Rule10Model');
const UpdateNetworkSecurityIntrusionSettingsModel =
  require('../lib/Models/UpdateNetworkSecurityIntrusionSettingsModel');
const ProtectedNetworksModel = require('../lib/Models/ProtectedNetworksModel');
const CreateNetworkHttpServersWebhookTestModel =
  require('../lib/Models/CreateNetworkHttpServersWebhookTestModel');
const CheckinNetworkSmDevicesModel = require('../lib/Models/CheckinNetworkSmDevicesModel');
const AddNetworkSwitchStackModel = require('../lib/Models/AddNetworkSwitchStackModel');
const UpdateNetworkHttpServerModel = require('../lib/Models/UpdateNetworkHttpServerModel');
const MoveNetworkSmDevicesModel = require('../lib/Models/MoveNetworkSmDevicesModel');
const UpdateNetworkSmTargetGroupModel = require('../lib/Models/UpdateNetworkSmTargetGroupModel');
const UpdateNetworkSmDeviceFieldsModel = require('../lib/Models/UpdateNetworkSmDeviceFieldsModel');
const DeviceFieldsModel = require('../lib/Models/DeviceFieldsModel');
const CreateOrganizationModel = require('../lib/Models/CreateOrganizationModel');
const UpdateNetworkDeviceWirelessRadioSettingsModel =
  require('../lib/Models/UpdateNetworkDeviceWirelessRadioSettingsModel');
const CreateNetworkSmTargetGroupModel = require('../lib/Models/CreateNetworkSmTargetGroupModel');
const UpdateNetworkContentFilteringModel =
  require('../lib/Models/UpdateNetworkContentFilteringModel');
const CreateOrganizationSamlRoleModel = require('../lib/Models/CreateOrganizationSamlRoleModel');
const UpdateNetworkStaticRouteModel = require('../lib/Models/UpdateNetworkStaticRouteModel');
const RemoveNetworkSwitchStackModel = require('../lib/Models/RemoveNetworkSwitchStackModel');
const UpdateOrganizationThirdPartyVPNPeersModel =
  require('../lib/Models/UpdateOrganizationThirdPartyVPNPeersModel');
const PeerModel = require('../lib/Models/PeerModel');
const IpsecPoliciesModel = require('../lib/Models/IpsecPoliciesModel');
const BindNetworkModel = require('../lib/Models/BindNetworkModel');
const UpdateNetworkClientSplashAuthorizationStatusModel =
  require('../lib/Models/UpdateNetworkClientSplashAuthorizationStatusModel');
const SsidsModel = require('../lib/Models/SsidsModel');
const WipeNetworkSmDeviceModel = require('../lib/Models/WipeNetworkSmDeviceModel');
const UpdateOrganizationSecurityIntrusionSettingsModel =
  require('../lib/Models/UpdateOrganizationSecurityIntrusionSettingsModel');
const WhitelistedRuleModel = require('../lib/Models/WhitelistedRuleModel');
const CreateNetworkSmProfileUmbrellaModel =
  require('../lib/Models/CreateNetworkSmProfileUmbrellaModel');
const UpdateNetworkAlertSettingsModel = require('../lib/Models/UpdateNetworkAlertSettingsModel');
const AlertModel = require('../lib/Models/AlertModel');
const DefaultDestinationsModel = require('../lib/Models/DefaultDestinationsModel');
const UpdateNetworkTrafficShapingModel = require('../lib/Models/UpdateNetworkTrafficShapingModel');
const Rule11Model = require('../lib/Models/Rule11Model');
const LockNetworkSmDevicesModel = require('../lib/Models/LockNetworkSmDevicesModel');

const classMap = {
    UpdateNetworkSyslogServersModel,
    ServerModel,
    UpdateNetworkTrafficAnalysisSettingsModel,
    CustomPieChartItemModel,
    UpdateOrganizationVpnFirewallRulesModel,
    RuleModel,
    CreateNetworkSwitchStackModel,
    UpdateNetworkPortForwardingRulesModel,
    Rule1Model,
    UpdateNetworkSiteToSiteVpnModel,
    SubnetModel,
    HubModel,
    UpdateNetworkSmAppPolarisModel,
    ProvisionNetworkClientsModel,
    UpdateNetworkSwitchPortScheduleModel,
    PortScheduleModel,
    SundayModel,
    SaturdayModel,
    TuesdayModel,
    WednesdayModel,
    ThursdayModel,
    FridayModel,
    MondayModel,
    UpdateOrganizationSamlRoleModel,
    NetworkModel,
    TagModel,
    CreateNetworkGroupPolicyModel,
    VlanTaggingModel,
    ContentFilteringModel,
    BlockedUrlPatternsModel,
    AllowedUrlPatternsModel,
    BlockedUrlCategoriesModel,
    BonjourForwardingModel,
    Rule2Model,
    BandwidthModel,
    BandwidthLimitsModel,
    SchedulingModel,
    FirewallAndTrafficShapingModel,
    TrafficShapingRuleModel,
    PerClientBandwidthLimitsModel,
    BandwidthLimits1Model,
    DefinitionModel,
    L3FirewallRuleModel,
    L7FirewallRuleModel,
    UpdateNetworkOneToOneNatRulesModel,
    Rule3Model,
    CloneOrganizationModel,
    UpdateNetworkVlanModel,
    DhcpOptionModel,
    ReservedIpRangeModel,
    CreateOrganizationActionBatchModel,
    ActionModel,
    BlinkNetworkDeviceLedsModel,
    UpdateNetworkSsidTrafficShapingModel,
    Rule4Model,
    UpdateOrganizationActionBatchModel,
    UpdateOrganizationAdminModel,
    Network1Model,
    Tag1Model,
    UpdateNetworkL7FirewallRulesModel,
    Rule5Model,
    AddNetworkSmProfileUmbrellaModel,
    ProviderConfigurationModel,
    UpdateNetworkSmProfileUmbrellaModel,
    UpdateNetworkGroupPolicyModel,
    UpdateNetworkBluetoothSettingsModel,
    UpdateNetworkL3FirewallRulesModel,
    Rule7Model,
    UpdateNetworkSwitchSettingsModel,
    PowerExceptionModel,
    UpdateNetworkSecurityMalwareSettingsModel,
    AllowedUrlModel,
    AllowedFileModel,
    AddNetworkSmProfileClarityModel,
    VendorConfigModel,
    UpdateNetworkSmProfileClarityModel,
    UpdateNetworkAppliancePortModel,
    UpdateNetworkFirewalledServiceModel,
    UpdateNetworkSsidsPlashSettingsModel,
    CreateNetworkHttpServerModel,
    UpdateNetworkSmDevicesTagsModel,
    UpdateNetworkDeviceModel,
    CombineOrganizationNetworksModel,
    UpdateNetworkCellularFirewallRulesModel,
    UpdateNetworkUplinkSettingsModel,
    BandwidthLimits5Model,
    UpdateNetworkClientPolicyModel,
    ClaimNetworkDevicesModel,
    UpdateOrganizationSnmpModel,
    UpdateNetworkNetflowSettingsModel,
    UpdateDeviceSwitchPortModel,
    CreateNetworkStaticRouteModel,
    CreateNetworkSmProfileClarityModel,
    UpdateOrganizationModel,
    CreateOrganizationAdminModel,
    GenerateNetworkCameraSnapshotModel,
    CreateNetworkSmAppPolarisModel,
    UpdateNetworkSnmpSettingsModel,
    UserModel,
    CreateNetworkPiiRequestModel,
    CreateNetworkVlanModel,
    UpdateNetworkModel,
    CreateNetworkSwitchPortScheduleModel,
    ClaimOrganizationModel,
    LicenseModel,
    UpdateNetworkSsidL3FirewallRulesModel,
    Rule9Model,
    UpdateNetworkDeviceManagementInterfaceSettingsModel,
    Wan2Model,
    Wan1Model,
    UpdateNetworkSsidModel,
    RadiusAccountingServerModel,
    ApTagsAndVlanIdModel,
    RadiusServerModel,
    CreateOrganizationNetworkModel,
    UpdateNetworkVlansEnabledStateModel,
    CreateNetworkSmBypassActivationLockAttemptModel,
    UpdateNetworkOneToManyNatRulesModel,
    Rule10Model,
    UpdateNetworkSecurityIntrusionSettingsModel,
    ProtectedNetworksModel,
    CreateNetworkHttpServersWebhookTestModel,
    CheckinNetworkSmDevicesModel,
    AddNetworkSwitchStackModel,
    UpdateNetworkHttpServerModel,
    MoveNetworkSmDevicesModel,
    UpdateNetworkSmTargetGroupModel,
    UpdateNetworkSmDeviceFieldsModel,
    DeviceFieldsModel,
    CreateOrganizationModel,
    UpdateNetworkDeviceWirelessRadioSettingsModel,
    CreateNetworkSmTargetGroupModel,
    UpdateNetworkContentFilteringModel,
    CreateOrganizationSamlRoleModel,
    UpdateNetworkStaticRouteModel,
    RemoveNetworkSwitchStackModel,
    UpdateOrganizationThirdPartyVPNPeersModel,
    PeerModel,
    IpsecPoliciesModel,
    BindNetworkModel,
    UpdateNetworkClientSplashAuthorizationStatusModel,
    SsidsModel,
    WipeNetworkSmDeviceModel,
    UpdateOrganizationSecurityIntrusionSettingsModel,
    WhitelistedRuleModel,
    CreateNetworkSmProfileUmbrellaModel,
    UpdateNetworkAlertSettingsModel,
    AlertModel,
    DefaultDestinationsModel,
    UpdateNetworkTrafficShapingModel,
    Rule11Model,
    LockNetworkSmDevicesModel,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
