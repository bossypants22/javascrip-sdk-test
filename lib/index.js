/**
  * @module meraki
  *
  * The Cisco Meraki Dashboard API is a modern REST API based on the [OpenAPI](https://swagger.
  * io/docs/specification/about/) specification.  ## What can the API be used for? The Dashboard
  * API can be used for many purposes. It's meant to be an open-ended tool. Here are some examples
  * of use cases:  * Add new organizations, admins, networks, devices, VLANs, and more * Configure
  * networks at scale * Automatically on-board and off-board new employees' teleworker setups *
  * Build your own dashboard for store managers, field techs, or unique use cases  ## Enabling the
  * Dashboard API 1. Begin by logging into [Meraki Dashboard](https://dashboard.meraki.com) and
  * navigating to **Organization > Settings**  2. Locate the section titled **Dashboard API
  * access** and select **Enable Access**, then **Save** your changes  3. After enabling the API,
  * choose your username at the top-right of the Meraki Dashboard and select **my profile**  4.
  * Locate the section titled **Dashboard API access** and select **Generate new API key**  *Note:
  * The API key is associated with a Dashboard administrator account. You can generate, revoke, and
  * regenerate your API key on your profile.*  **Keep your API key safe as it provides
  * authentication to all of your organizations with the API enabled. If your API key is shared,
  * you can regenerate your API key at any time. This will revoke the existing API key.**  Copy and
  * store your API key in a safe place. Dashboard does not store API keys in plaintext for security
  * reasons, so this is the only time you will be able to record it. If you lose or forget your API
  * key, you will have to revoke it and generate a new one.  Every request must specify an API key
  * via a request header.  The API key must be specified in the URL header. The API will return a
  * 404 (rather than a 403) in response to a request with a missing or incorrect API key in order
  * to prevent leaking the existence of resources to unauthorized users.  `X-Cisco-Meraki-API-Key:
  * <secret key>`  Read more about API [authorization](../api/#/python/getting-started/authorizing-
  * your-client)   ## Versioning Once an API version is released, we will make only backwards-
  * compatible changes to it. Backwards-compatible changes include:  * Adding new API resources  *
  * Adding new optional request parameters to existing API methods  * Adding new properties to
  * existing API responses  * Changing the order of properties in existing API responses  ## Rate
  * Limit * The Dashboard API is limited to **5 calls per second**, per organization. * A burst of
  * 5 additional calls are allowed in the first second, so a maximum of 15 calls in the first 2
  * seconds. * The rate limiting technique is based off of the [token bucket model](https://en.
  * wikipedia.org/wiki/Token_bucket). * An error with a `429` status code will be returned when the
  * rate limit has been exceeded. * Expect to backoff for 1 - 2 seconds if the limit has been
  * exceeded. You may have to wait potentially longer if a large number of requests were made
  * within this timeframe.   ## Additional Details Identifiers in the API are opaque strings. A
  * `{networkId}`, for example, might be the string "126043", whereas an `{orderId}` might contain
  * characters, such as "4S1234567". Client applications must not try to parse them as numbers.
  * Even identifiers that look like numbers might be too long to encode without loss of precision
  * in Javascript, where the only numeric type is IEEE 754 floating point.  Verbs in the API follow
  * the usual REST conventions:  `GET` returns the value of a resource or a list of resources,
  * depending on whether an identifier is specified. For example, a `GET` of `/v0/organizations`
  * returns a list of organizations, whereas a `GET` of `/v0/organizations/{organizationId}`
  * returns a particular organization.  `POST` adds a new resource, as in a `POST` to
  * `/v0/organizations/{organizationId}/admins`, or performs some other non-idempotent change.
  * `PUT` updates a resource. `PUTs` are idempotent; they update a resource, creating it first if
  * it does not already exist. A `PUT` should specify all the fields of a resource; the API will
  * revert omitted fields to their default value.  `DELETE` removes a resource.
  */

'use strict';

const Configuration = require('./configuration');
const APIUsageController = require('./Controllers/APIUsageController');
const ActionBatchesController = require('./Controllers/ActionBatchesController');
const AdminsController = require('./Controllers/AdminsController');
const AlertSettingsController = require('./Controllers/AlertSettingsController');
const BluetoothClientsController = require('./Controllers/BluetoothClientsController');
const CamerasController = require('./Controllers/CamerasController');
const ClientsController = require('./Controllers/ClientsController');
const ConfigTemplatesController = require('./Controllers/ConfigTemplatesController');
const ContentFilteringCategoriesController =
  require('./Controllers/ContentFilteringCategoriesController');
const ContentFilteringRulesController = require('./Controllers/ContentFilteringRulesController');
const DevicesController = require('./Controllers/DevicesController');
const FirewalledServicesController = require('./Controllers/FirewalledServicesController');
const GroupPoliciesController = require('./Controllers/GroupPoliciesController');
const HTTPServersController = require('./Controllers/HTTPServersController');
const IntrusionSettingsController = require('./Controllers/IntrusionSettingsController');
const MRL3FirewallController = require('./Controllers/MRL3FirewallController');
const MVSenseController = require('./Controllers/MVSenseController');
const MX11NATRulesController = require('./Controllers/MX11NATRulesController');
const MX1ManyNATRulesController = require('./Controllers/MX1ManyNATRulesController');
const MXL3FirewallController = require('./Controllers/MXL3FirewallController');
const MXL7ApplicationCategoriesController =
  require('./Controllers/MXL7ApplicationCategoriesController');
const MXL7FirewallController = require('./Controllers/MXL7FirewallController');
const MXVLANPortsController = require('./Controllers/MXVLANPortsController');
const MXVPNFirewallController = require('./Controllers/MXVPNFirewallController');
const MXCellularFirewallController = require('./Controllers/MXCellularFirewallController');
const MXPortForwardingRulesController = require('./Controllers/MXPortForwardingRulesController');
const MalwareSettingsController = require('./Controllers/MalwareSettingsController');
const ManagementInterfaceSettingsController =
  require('./Controllers/ManagementInterfaceSettingsController');
const MerakiAuthUsersController = require('./Controllers/MerakiAuthUsersController');
const NamedTagScopeController = require('./Controllers/NamedTagScopeController');
const NetflowSettingsController = require('./Controllers/NetflowSettingsController');
const NetworksController = require('./Controllers/NetworksController');
const OpenAPISpecController = require('./Controllers/OpenAPISpecController');
const OrganizationsController = require('./Controllers/OrganizationsController');
const PIIController = require('./Controllers/PIIController');
const RadioSettingsController = require('./Controllers/RadioSettingsController');
const SAMLRolesController = require('./Controllers/SAMLRolesController');
const SMController = require('./Controllers/SMController');
const SNMPSettingsController = require('./Controllers/SNMPSettingsController');
const SsidsController = require('./Controllers/SsidsController');
const SecurityEventsController = require('./Controllers/SecurityEventsController');
const SplashLoginAttemptsController = require('./Controllers/SplashLoginAttemptsController');
const SplashSettingsController = require('./Controllers/SplashSettingsController');
const StaticRoutesController = require('./Controllers/StaticRoutesController');
const SwitchPortSchedulesController = require('./Controllers/SwitchPortSchedulesController');
const SwitchPortsController = require('./Controllers/SwitchPortsController');
const SwitchProfilesController = require('./Controllers/SwitchProfilesController');
const SwitchSettingsController = require('./Controllers/SwitchSettingsController');
const SwitchStacksController = require('./Controllers/SwitchStacksController');
const SyslogServersController = require('./Controllers/SyslogServersController');
const TrafficAnalysisSettingsController =
  require('./Controllers/TrafficAnalysisSettingsController');
const TrafficShapingController = require('./Controllers/TrafficShapingController');
const UplinkSettingsController = require('./Controllers/UplinkSettingsController');
const VlansController = require('./Controllers/VlansController');
const WebhookLogsController = require('./Controllers/WebhookLogsController');
const WirelessHealthController = require('./Controllers/WirelessHealthController');
const UpdateNetworkSyslogServersModel = require('./Models/UpdateNetworkSyslogServersModel');
const ServerModel = require('./Models/ServerModel');
const UpdateNetworkTrafficAnalysisSettingsModel =
  require('./Models/UpdateNetworkTrafficAnalysisSettingsModel');
const ModeEnum = require('./Models/ModeEnum');
const CustomPieChartItemModel = require('./Models/CustomPieChartItemModel');
const TypeEnum = require('./Models/TypeEnum');
const UpdateOrganizationVpnFirewallRulesModel =
  require('./Models/UpdateOrganizationVpnFirewallRulesModel');
const RuleModel = require('./Models/RuleModel');
const CreateNetworkSwitchStackModel = require('./Models/CreateNetworkSwitchStackModel');
const UpdateNetworkPortForwardingRulesModel =
  require('./Models/UpdateNetworkPortForwardingRulesModel');
const Rule1Model = require('./Models/Rule1Model');
const UpdateNetworkSiteToSiteVpnModel = require('./Models/UpdateNetworkSiteToSiteVpnModel');
const SubnetModel = require('./Models/SubnetModel');
const HubModel = require('./Models/HubModel');
const UpdateNetworkSmAppPolarisModel = require('./Models/UpdateNetworkSmAppPolarisModel');
const ProvisionNetworkClientsModel = require('./Models/ProvisionNetworkClientsModel');
const UpdateNetworkSwitchPortScheduleModel =
  require('./Models/UpdateNetworkSwitchPortScheduleModel');
const PortScheduleModel = require('./Models/PortScheduleModel');
const SundayModel = require('./Models/SundayModel');
const SaturdayModel = require('./Models/SaturdayModel');
const TuesdayModel = require('./Models/TuesdayModel');
const WednesdayModel = require('./Models/WednesdayModel');
const ThursdayModel = require('./Models/ThursdayModel');
const FridayModel = require('./Models/FridayModel');
const MondayModel = require('./Models/MondayModel');
const UpdateOrganizationSamlRoleModel = require('./Models/UpdateOrganizationSamlRoleModel');
const NetworkModel = require('./Models/NetworkModel');
const TagModel = require('./Models/TagModel');
const CreateNetworkGroupPolicyModel = require('./Models/CreateNetworkGroupPolicyModel');
const VlanTaggingModel = require('./Models/VlanTaggingModel');
const SettingsEnum = require('./Models/SettingsEnum');
const ContentFilteringModel = require('./Models/ContentFilteringModel');
const BlockedUrlPatternsModel = require('./Models/BlockedUrlPatternsModel');
const Settings1Enum = require('./Models/Settings1Enum');
const AllowedUrlPatternsModel = require('./Models/AllowedUrlPatternsModel');
const BlockedUrlCategoriesModel = require('./Models/BlockedUrlCategoriesModel');
const Settings3Enum = require('./Models/Settings3Enum');
const BonjourForwardingModel = require('./Models/BonjourForwardingModel');
const Settings4Enum = require('./Models/Settings4Enum');
const Rule2Model = require('./Models/Rule2Model');
const ServiceEnum = require('./Models/ServiceEnum');
const BandwidthModel = require('./Models/BandwidthModel');
const Settings5Enum = require('./Models/Settings5Enum');
const BandwidthLimitsModel = require('./Models/BandwidthLimitsModel');
const SplashAuthSettingsEnum = require('./Models/SplashAuthSettingsEnum');
const SchedulingModel = require('./Models/SchedulingModel');
const FirewallAndTrafficShapingModel = require('./Models/FirewallAndTrafficShapingModel');
const Settings6Enum = require('./Models/Settings6Enum');
const TrafficShapingRuleModel = require('./Models/TrafficShapingRuleModel');
const PerClientBandwidthLimitsModel = require('./Models/PerClientBandwidthLimitsModel');
const BandwidthLimits1Model = require('./Models/BandwidthLimits1Model');
const DefinitionModel = require('./Models/DefinitionModel');
const Type1Enum = require('./Models/Type1Enum');
const L3FirewallRuleModel = require('./Models/L3FirewallRuleModel');
const L7FirewallRuleModel = require('./Models/L7FirewallRuleModel');
const Type2Enum = require('./Models/Type2Enum');
const PolicyEnum = require('./Models/PolicyEnum');
const UpdateNetworkOneToOneNatRulesModel = require('./Models/UpdateNetworkOneToOneNatRulesModel');
const Rule3Model = require('./Models/Rule3Model');
const CloneOrganizationModel = require('./Models/CloneOrganizationModel');
const UpdateNetworkVlanModel = require('./Models/UpdateNetworkVlanModel');
const DhcpOptionModel = require('./Models/DhcpOptionModel');
const ReservedIpRangeModel = require('./Models/ReservedIpRangeModel');
const CreateOrganizationActionBatchModel = require('./Models/CreateOrganizationActionBatchModel');
const ActionModel = require('./Models/ActionModel');
const BlinkNetworkDeviceLedsModel = require('./Models/BlinkNetworkDeviceLedsModel');
const UpdateNetworkSsidTrafficShapingModel =
  require('./Models/UpdateNetworkSsidTrafficShapingModel');
const Rule4Model = require('./Models/Rule4Model');
const UpdateOrganizationActionBatchModel = require('./Models/UpdateOrganizationActionBatchModel');
const UpdateOrganizationAdminModel = require('./Models/UpdateOrganizationAdminModel');
const Network1Model = require('./Models/Network1Model');
const Tag1Model = require('./Models/Tag1Model');
const UpdateNetworkL7FirewallRulesModel = require('./Models/UpdateNetworkL7FirewallRulesModel');
const Rule5Model = require('./Models/Rule5Model');
const Type4Enum = require('./Models/Type4Enum');
const Policy1Enum = require('./Models/Policy1Enum');
const AddNetworkSmProfileUmbrellaModel = require('./Models/AddNetworkSmProfileUmbrellaModel');
const ProviderConfigurationModel = require('./Models/ProviderConfigurationModel');
const UpdateNetworkSmProfileUmbrellaModel = require('./Models/UpdateNetworkSmProfileUmbrellaModel');
const UpdateNetworkGroupPolicyModel = require('./Models/UpdateNetworkGroupPolicyModel');
const UpdateNetworkBluetoothSettingsModel = require('./Models/UpdateNetworkBluetoothSettingsModel');
const UpdateNetworkL3FirewallRulesModel = require('./Models/UpdateNetworkL3FirewallRulesModel');
const Rule7Model = require('./Models/Rule7Model');
const UpdateNetworkSwitchSettingsModel = require('./Models/UpdateNetworkSwitchSettingsModel');
const PowerExceptionModel = require('./Models/PowerExceptionModel');
const PowerTypeEnum = require('./Models/PowerTypeEnum');
const UpdateNetworkSecurityMalwareSettingsModel =
  require('./Models/UpdateNetworkSecurityMalwareSettingsModel');
const AllowedUrlModel = require('./Models/AllowedUrlModel');
const AllowedFileModel = require('./Models/AllowedFileModel');
const AddNetworkSmProfileClarityModel = require('./Models/AddNetworkSmProfileClarityModel');
const VendorConfigModel = require('./Models/VendorConfigModel');
const UpdateNetworkSmProfileClarityModel = require('./Models/UpdateNetworkSmProfileClarityModel');
const UpdateNetworkAppliancePortModel = require('./Models/UpdateNetworkAppliancePortModel');
const UpdateNetworkFirewalledServiceModel = require('./Models/UpdateNetworkFirewalledServiceModel');
const AccessEnum = require('./Models/AccessEnum');
const UpdateNetworkSsidsPlashSettingsModel =
  require('./Models/UpdateNetworkSsidsPlashSettingsModel');
const CreateNetworkHttpServerModel = require('./Models/CreateNetworkHttpServerModel');
const UpdateNetworkSmDevicesTagsModel = require('./Models/UpdateNetworkSmDevicesTagsModel');
const UpdateNetworkDeviceModel = require('./Models/UpdateNetworkDeviceModel');
const CombineOrganizationNetworksModel = require('./Models/CombineOrganizationNetworksModel');
const UpdateNetworkCellularFirewallRulesModel =
  require('./Models/UpdateNetworkCellularFirewallRulesModel');
const UpdateNetworkUplinkSettingsModel = require('./Models/UpdateNetworkUplinkSettingsModel');
const BandwidthLimits5Model = require('./Models/BandwidthLimits5Model');
const UpdateNetworkClientPolicyModel = require('./Models/UpdateNetworkClientPolicyModel');
const ClaimNetworkDevicesModel = require('./Models/ClaimNetworkDevicesModel');
const UpdateOrganizationSnmpModel = require('./Models/UpdateOrganizationSnmpModel');
const V3AuthModeEnum = require('./Models/V3AuthModeEnum');
const V3PrivModeEnum = require('./Models/V3PrivModeEnum');
const UpdateNetworkNetflowSettingsModel = require('./Models/UpdateNetworkNetflowSettingsModel');
const UpdateDeviceSwitchPortModel = require('./Models/UpdateDeviceSwitchPortModel');
const CreateNetworkStaticRouteModel = require('./Models/CreateNetworkStaticRouteModel');
const CreateNetworkSmProfileClarityModel = require('./Models/CreateNetworkSmProfileClarityModel');
const UpdateOrganizationModel = require('./Models/UpdateOrganizationModel');
const CreateOrganizationAdminModel = require('./Models/CreateOrganizationAdminModel');
const GenerateNetworkCameraSnapshotModel = require('./Models/GenerateNetworkCameraSnapshotModel');
const CreateNetworkSmAppPolarisModel = require('./Models/CreateNetworkSmAppPolarisModel');
const UpdateNetworkSnmpSettingsModel = require('./Models/UpdateNetworkSnmpSettingsModel');
const Access1Enum = require('./Models/Access1Enum');
const UserModel = require('./Models/UserModel');
const CreateNetworkPiiRequestModel = require('./Models/CreateNetworkPiiRequestModel');
const Type7Enum = require('./Models/Type7Enum');
const CreateNetworkVlanModel = require('./Models/CreateNetworkVlanModel');
const UpdateNetworkModel = require('./Models/UpdateNetworkModel');
const CreateNetworkSwitchPortScheduleModel =
  require('./Models/CreateNetworkSwitchPortScheduleModel');
const ClaimOrganizationModel = require('./Models/ClaimOrganizationModel');
const LicenseModel = require('./Models/LicenseModel');
const Mode1Enum = require('./Models/Mode1Enum');
const UpdateNetworkSsidL3FirewallRulesModel =
  require('./Models/UpdateNetworkSsidL3FirewallRulesModel');
const Rule9Model = require('./Models/Rule9Model');
const UpdateNetworkDeviceManagementInterfaceSettingsModel =
  require('./Models/UpdateNetworkDeviceManagementInterfaceSettingsModel');
const Wan2Model = require('./Models/Wan2Model');
const WanEnabledEnum = require('./Models/WanEnabledEnum');
const Wan1Model = require('./Models/Wan1Model');
const UpdateNetworkSsidModel = require('./Models/UpdateNetworkSsidModel');
const BandSelectionEnum = require('./Models/BandSelectionEnum');
const RadiusAccountingServerModel = require('./Models/RadiusAccountingServerModel');
const WpaEncryptionModeEnum = require('./Models/WpaEncryptionModeEnum');
const RadiusFailoverPolicyEnum = require('./Models/RadiusFailoverPolicyEnum');
const SplashPageEnum = require('./Models/SplashPageEnum');
const ApTagsAndVlanIdModel = require('./Models/ApTagsAndVlanIdModel');
const EncryptionModeEnum = require('./Models/EncryptionModeEnum');
const RadiusServerModel = require('./Models/RadiusServerModel');
const IpAssignmentModeEnum = require('./Models/IpAssignmentModeEnum');
const AuthModeEnum = require('./Models/AuthModeEnum');
const RadiusLoadBalancingPolicyEnum = require('./Models/RadiusLoadBalancingPolicyEnum');
const CreateOrganizationNetworkModel = require('./Models/CreateOrganizationNetworkModel');
const UpdateNetworkVlansEnabledStateModel = require('./Models/UpdateNetworkVlansEnabledStateModel');
const CreateNetworkSmBypassActivationLockAttemptModel =
  require('./Models/CreateNetworkSmBypassActivationLockAttemptModel');
const UpdateNetworkOneToManyNatRulesModel = require('./Models/UpdateNetworkOneToManyNatRulesModel');
const Rule10Model = require('./Models/Rule10Model');
const UpdateNetworkSecurityIntrusionSettingsModel =
  require('./Models/UpdateNetworkSecurityIntrusionSettingsModel');
const ProtectedNetworksModel = require('./Models/ProtectedNetworksModel');
const CreateNetworkHttpServersWebhookTestModel =
  require('./Models/CreateNetworkHttpServersWebhookTestModel');
const CheckinNetworkSmDevicesModel = require('./Models/CheckinNetworkSmDevicesModel');
const AddNetworkSwitchStackModel = require('./Models/AddNetworkSwitchStackModel');
const UpdateNetworkHttpServerModel = require('./Models/UpdateNetworkHttpServerModel');
const MoveNetworkSmDevicesModel = require('./Models/MoveNetworkSmDevicesModel');
const UpdateNetworkSmTargetGroupModel = require('./Models/UpdateNetworkSmTargetGroupModel');
const UpdateNetworkSmDeviceFieldsModel = require('./Models/UpdateNetworkSmDeviceFieldsModel');
const DeviceFieldsModel = require('./Models/DeviceFieldsModel');
const CreateOrganizationModel = require('./Models/CreateOrganizationModel');
const UpdateNetworkDeviceWirelessRadioSettingsModel =
  require('./Models/UpdateNetworkDeviceWirelessRadioSettingsModel');
const CreateNetworkSmTargetGroupModel = require('./Models/CreateNetworkSmTargetGroupModel');
const UpdateNetworkContentFilteringModel = require('./Models/UpdateNetworkContentFilteringModel');
const CreateOrganizationSamlRoleModel = require('./Models/CreateOrganizationSamlRoleModel');
const UpdateNetworkStaticRouteModel = require('./Models/UpdateNetworkStaticRouteModel');
const RemoveNetworkSwitchStackModel = require('./Models/RemoveNetworkSwitchStackModel');
const UpdateOrganizationThirdPartyVPNPeersModel =
  require('./Models/UpdateOrganizationThirdPartyVPNPeersModel');
const PeerModel = require('./Models/PeerModel');
const IpsecPoliciesModel = require('./Models/IpsecPoliciesModel');
const BindNetworkModel = require('./Models/BindNetworkModel');
const UpdateNetworkClientSplashAuthorizationStatusModel =
  require('./Models/UpdateNetworkClientSplashAuthorizationStatusModel');
const SsidsModel = require('./Models/SsidsModel');
const WipeNetworkSmDeviceModel = require('./Models/WipeNetworkSmDeviceModel');
const UpdateOrganizationSecurityIntrusionSettingsModel =
  require('./Models/UpdateOrganizationSecurityIntrusionSettingsModel');
const WhitelistedRuleModel = require('./Models/WhitelistedRuleModel');
const CreateNetworkSmProfileUmbrellaModel = require('./Models/CreateNetworkSmProfileUmbrellaModel');
const UpdateNetworkAlertSettingsModel = require('./Models/UpdateNetworkAlertSettingsModel');
const AlertModel = require('./Models/AlertModel');
const DefaultDestinationsModel = require('./Models/DefaultDestinationsModel');
const UpdateNetworkTrafficShapingModel = require('./Models/UpdateNetworkTrafficShapingModel');
const Rule11Model = require('./Models/Rule11Model');
const LockNetworkSmDevicesModel = require('./Models/LockNetworkSmDevicesModel');
const SsidNumberEnum = require('./Models/SsidNumberEnum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of meraki
    Configuration,
    // controllers of meraki
    APIUsageController,
    ActionBatchesController,
    AdminsController,
    AlertSettingsController,
    BluetoothClientsController,
    CamerasController,
    ClientsController,
    ConfigTemplatesController,
    ContentFilteringCategoriesController,
    ContentFilteringRulesController,
    DevicesController,
    FirewalledServicesController,
    GroupPoliciesController,
    HTTPServersController,
    IntrusionSettingsController,
    MRL3FirewallController,
    MVSenseController,
    MX11NATRulesController,
    MX1ManyNATRulesController,
    MXL3FirewallController,
    MXL7ApplicationCategoriesController,
    MXL7FirewallController,
    MXVLANPortsController,
    MXVPNFirewallController,
    MXCellularFirewallController,
    MXPortForwardingRulesController,
    MalwareSettingsController,
    ManagementInterfaceSettingsController,
    MerakiAuthUsersController,
    NamedTagScopeController,
    NetflowSettingsController,
    NetworksController,
    OpenAPISpecController,
    OrganizationsController,
    PIIController,
    RadioSettingsController,
    SAMLRolesController,
    SMController,
    SNMPSettingsController,
    SsidsController,
    SecurityEventsController,
    SplashLoginAttemptsController,
    SplashSettingsController,
    StaticRoutesController,
    SwitchPortSchedulesController,
    SwitchPortsController,
    SwitchProfilesController,
    SwitchSettingsController,
    SwitchStacksController,
    SyslogServersController,
    TrafficAnalysisSettingsController,
    TrafficShapingController,
    UplinkSettingsController,
    VlansController,
    WebhookLogsController,
    WirelessHealthController,
    // models of meraki
    UpdateNetworkSyslogServersModel,
    ServerModel,
    UpdateNetworkTrafficAnalysisSettingsModel,
    ModeEnum,
    CustomPieChartItemModel,
    TypeEnum,
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
    SettingsEnum,
    ContentFilteringModel,
    BlockedUrlPatternsModel,
    Settings1Enum,
    AllowedUrlPatternsModel,
    BlockedUrlCategoriesModel,
    Settings3Enum,
    BonjourForwardingModel,
    Settings4Enum,
    Rule2Model,
    ServiceEnum,
    BandwidthModel,
    Settings5Enum,
    BandwidthLimitsModel,
    SplashAuthSettingsEnum,
    SchedulingModel,
    FirewallAndTrafficShapingModel,
    Settings6Enum,
    TrafficShapingRuleModel,
    PerClientBandwidthLimitsModel,
    BandwidthLimits1Model,
    DefinitionModel,
    Type1Enum,
    L3FirewallRuleModel,
    L7FirewallRuleModel,
    Type2Enum,
    PolicyEnum,
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
    Type4Enum,
    Policy1Enum,
    AddNetworkSmProfileUmbrellaModel,
    ProviderConfigurationModel,
    UpdateNetworkSmProfileUmbrellaModel,
    UpdateNetworkGroupPolicyModel,
    UpdateNetworkBluetoothSettingsModel,
    UpdateNetworkL3FirewallRulesModel,
    Rule7Model,
    UpdateNetworkSwitchSettingsModel,
    PowerExceptionModel,
    PowerTypeEnum,
    UpdateNetworkSecurityMalwareSettingsModel,
    AllowedUrlModel,
    AllowedFileModel,
    AddNetworkSmProfileClarityModel,
    VendorConfigModel,
    UpdateNetworkSmProfileClarityModel,
    UpdateNetworkAppliancePortModel,
    UpdateNetworkFirewalledServiceModel,
    AccessEnum,
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
    V3AuthModeEnum,
    V3PrivModeEnum,
    UpdateNetworkNetflowSettingsModel,
    UpdateDeviceSwitchPortModel,
    CreateNetworkStaticRouteModel,
    CreateNetworkSmProfileClarityModel,
    UpdateOrganizationModel,
    CreateOrganizationAdminModel,
    GenerateNetworkCameraSnapshotModel,
    CreateNetworkSmAppPolarisModel,
    UpdateNetworkSnmpSettingsModel,
    Access1Enum,
    UserModel,
    CreateNetworkPiiRequestModel,
    Type7Enum,
    CreateNetworkVlanModel,
    UpdateNetworkModel,
    CreateNetworkSwitchPortScheduleModel,
    ClaimOrganizationModel,
    LicenseModel,
    Mode1Enum,
    UpdateNetworkSsidL3FirewallRulesModel,
    Rule9Model,
    UpdateNetworkDeviceManagementInterfaceSettingsModel,
    Wan2Model,
    WanEnabledEnum,
    Wan1Model,
    UpdateNetworkSsidModel,
    BandSelectionEnum,
    RadiusAccountingServerModel,
    WpaEncryptionModeEnum,
    RadiusFailoverPolicyEnum,
    SplashPageEnum,
    ApTagsAndVlanIdModel,
    EncryptionModeEnum,
    RadiusServerModel,
    IpAssignmentModeEnum,
    AuthModeEnum,
    RadiusLoadBalancingPolicyEnum,
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
    SsidNumberEnum,
    // exceptions of meraki
    APIException,
};

module.exports = initializer;
