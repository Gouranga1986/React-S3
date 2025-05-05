import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@vds/icons';
import Loader from '../loader/loader';
import Details from './Details';
import AccountInformation from './AccountInfo';
import HomeButton from './HomeButton';
import Resources from './Resources';
import HomeInternetTile from './HomeInternetTile';
import HomeInternetActions from './HomeInternetActions';
import HomeInternetModal, { getCTADataTrack } from './HomeInternetModal';
import common from '../../../../../shared/utilities/util';
import {
  getEquipmentStatus, getHomeInternet, setEncryptedMTN, troubleshootingPendingCase, setLineDetailsBackPath,
  initCreateDeviceGroup,
} from '../../actions';
import RestartRouter from '../manage5gHome/restartRouter';
import { onPageLoad } from '../../../../../shared/utilities/tagging';
import { createManageGroup } from '../../actions/createManageGroupAction';
import './HomeInternet.css';

const Header = styled.div`
font-size: 48px;
font-weight: 300;
line-height: 48px;
letter-spacing: 0.25px;
text-align: left;
`;

const StyledDetailsResource = styled.div`
display : flex;
flex-direction: row;
width:100%
`;

export const isHomeInternet = (homeInternetData) => {
  const urlParams = new URLSearchParams(window.location.search);
  const isNewDM = urlParams.get('newdm') === 'y';
  const redesignEnabled = common.getItemValue(homeInternetData?.pageAttributes, 'redesignEnabled');
  return isNewDM || (redesignEnabled && JSON.parse(redesignEnabled));
};

// Get Help Data
let getHelpData = {};

// Resources
const ResourcesData = {};

// Open Link fn
const openLink = (link) => window.open(link, '_self');

// Home Internet Actions
const ActionTilesData = {
  dataUsage: {}, analyser: {}, deviceGroup: {}, healthCheck: {}, isPlusPlan: false, isOnline: false, usageDashboardEnabled: false,
};

// Details
const DetailsData = {
  header: '', networks: { link: '' }, devices: { link: '' }, extenders: [], extenderOffline: '', lineDetailsTitle: '',
};
// System Error Data
let systemErrorData = { isError: false };
/* istanbul ignore next */
const redirectToEquipment = () => navigateTo('/equipment', false, false, false,'?flowType=hil');
const handleSystemError = (systemError, isTanglewood, equipments) => {
  if (systemError) {
    systemErrorData = { isError: true };
    if (systemError === "DECRYPTION_ERROR") {
      redirectToEquipment();
    }
    else {
      const errMsg = 'currently not available,Try troubleshooting. Or please contact customer support';
      onPageLoad('device management', 'message displayed', null, errMsg);
    }
  } else {
    // Line Details Title
    DetailsData.lineDetailsTitle = Array.isArray(equipments) && equipments?.filter((equipment) => isTanglewood || (!isTanglewood && !equipment?.isRouter))?.[0]?.name;
  }
  return (systemErrorData, DetailsData);
};
/* istanbul ignore next */
const navigateTo = (path, tabSelected, data, props, search) => {
  const navObj = {
    pathname: path,
    state: { isHomeInternetRedirect: true },
  };
  if (tabSelected) navObj.tabSelected = tabSelected;
  if (data) navObj.state = { ...navObj.state, ...data };
  if(search) navObj.search = search;
  props?.history?.push(navObj);
};
/* istanbul ignore next */
const notReadyForSetup = (readyForSetup, homeInternet, equipmentStatusFetching, dispatch) => {
  if (!readyForSetup) {
    const hashedMtn = common.getItemValue(homeInternet?.pageAttributes, 'hashedMtn');
    const signalStrengthMockEnabled = common.getItemValue(homeInternet?.pageAttributes, 'signalStrengthMockEnabled');
    let equipmentStatusPayload = { hashedMtn };
    if (/true/.test(signalStrengthMockEnabled)) {
      const queryParams = new URLSearchParams(window.location.search);
      const signalMockObj = {
        mockSignalLevel: queryParams.get('bars'),
        mockStatus: queryParams.get('status'),
        mockCurrentNetwork: queryParams.get('network'),
      };
      equipmentStatusPayload = { ...equipmentStatusPayload, ...signalMockObj };
    }
    if (!equipmentStatusFetching && hashedMtn) dispatch(getEquipmentStatus(equipmentStatusPayload));
  }
};

const getEquipmentInfo = (equipData) => equipData?.data?.equipmentInfo || equipData?.equipmentInfo;
/* istanbul ignore next */
const getHelpLink = (dispatch) => {
  const defaultUrl = getHelpData?.getHelpDefaultLink;
  const helpMtn = getHelpData?.mtn;
  const helpSku = getHelpData?.skuId;
  if (helpMtn && helpSku) {
    const payload = {
      mdn: helpMtn,
      skuId: helpSku,
    };
    dispatch(troubleshootingPendingCase(payload, defaultUrl, true));
  } else {
    openLink(defaultUrl);
  }
};

const isShowFlag = (homeInternetFetching, dataLoaded, wifiBackupDMSuppressionFFlag) => !(homeInternetFetching && !dataLoaded) && wifiBackupDMSuppressionFFlag;

const isSystemError = (isError, homeInternet, homeInternetFetching) => !homeInternetFetching && (isError || !homeInternet);

/* istanbul ignore next */
const isAccountAEMData = (isTanglewood, hideDisconnectforTanglewood, isAccountMember, hideDisconnectforAccountMember) => ((isTanglewood && !hideDisconnectforTanglewood) || !isTanglewood) && ((isAccountMember && !hideDisconnectforAccountMember) || !isAccountMember);

const isHomeButton = (isOnline, readyForSetup) => isOnline && !readyForSetup;

const addSectionContentData = (homeInternet) => homeInternet?.sections || [];

const setDataLoaded = (sectionContentData) => Array.isArray(sectionContentData) && sectionContentData.length > 0;

const setUsageDashboardEnabled = (isTanglewood, routerInfoData) => !isTanglewood && routerInfoData?.usageDashboardEnabled;

/* istanbul ignore next */
const isEquipmentStatusFetching = (equipmentStatusFetching, routerInfoData, equipmentRouterInfo) => (equipmentStatusFetching ? routerInfoData : equipmentRouterInfo);

const setSkuId = (equipments) => Array.isArray(equipments) && equipments?.length > 0 && equipments?.filter((equipment) => !equipment?.isRouter)?.[0]?.displaySku;

const setSystemErrorObj = (equipmentStatus, signalStrengthSection) => ((equipmentStatus && Object.keys(equipmentStatus).length > 0) ? getEquipmentInfo(equipmentStatus) : getEquipmentInfo(signalStrengthSection));

/* istanbul ignore next */
const setGetExtenders = (equipmentStatusFetching, routerInfoData, equipmentRouterInfo) => (equipmentStatusFetching ? routerInfoData : equipmentRouterInfo);

/* istanbul ignore next */
const setMoversCTA = (ResourcesData, resourcesItems, equipmentActions) => {
  if (ResourcesData.moversTitle) {
    ResourcesData.moversSubtitle = common.getItemValue(resourcesItems, 'moversLaunchText');
    const moversActionLink = common.getActionByKey(equipmentActions, 'moversLaunchAction')?.actionValue || '';
    ResourcesData.moversAction = () => openLink(moversActionLink);
  }
};

const setHealthCheckTitle = (isPlusPlan, ActionTilesData, actionTilesContentItems) => {
  if (isPlusPlan) {
    ActionTilesData.healthCheck.title = common.getItemValue(actionTilesContentItems, 'wifiHealthCheckTitle');
  }
};

const setMvaQrModal = (isPlusPlan, ActionTilesData, actionTilesContentItems, wifiMVARedirectModalContentItems) => {
  if (isPlusPlan) {
    ActionTilesData.healthCheck.subtitle = common.getItemValue(actionTilesContentItems, 'wifiHealthCheckLabel');
    // MVA QR Modal
    ActionTilesData.healthCheck.modalTitle = common.getItemValue(wifiMVARedirectModalContentItems, 'wifiHealthCheckHeader');
  }
};

const HomeInternet = (props) => {
  const [showRestart, setRestart] = useState(false);
  const [showAnalyserModal, setAnalyserModal] = useState(false);
  const [showHealthCheckModal, setHealthCheckModal] = useState(false);

  const dispatch = useDispatch();
  const homeInternet = useSelector((state) => state.Router.homeInternet);
  const homeInternetFetching = useSelector((state) => state.Router.isHomeInternetFetching);
  const equipmentStatus = useSelector((state) => state.Router.equipmentStatus);
  const equipmentStatusFetching = useSelector((state) => state.Router.isEquipmentStatusFetching);
  const equipmentRouterInfo = equipmentStatus?.routerInfo;

  const sectionContentData = addSectionContentData(homeInternet);
  const dataLoaded = setDataLoaded(sectionContentData);
  let HeaderText = '';
  // Home Internet Buttons
  const HomeButtonsData = {};

  // Account Information
  const AccountAEMData = {
    accountInfo: 'Account information', disconnectLink: '', planNameLink: '', disconnectBtn: '', accountNum: '', planName: '', equipment: '',
  };
  let AccountData = {};
  // Home Internet Modal Data
  let modalData = { analyser: {}, healthCheck: {} };

  /* istanbul ignore next */
  const isStatusOnline = (statusObj) => statusObj?.routerStatus === 'Online';
  /* istanbul ignore next */
  const getConnectedDevices = (extObj) => extObj?.onlineConnectedDevices;
  /* istanbul ignore next */
  const getExtenders = (extObj) => extObj?.extenderInfo;

  const signalStrengthSection = common.getSectionById(sectionContentData, 'homeInternet_signalStrength');
  const signalStrengthData = getEquipmentInfo(signalStrengthSection);
  const signalStrengthSectionContent = signalStrengthSection?.contents;

  // Wifi Backup
  const signalStrengthSectionLabels = common.getContentByComponentId(signalStrengthSectionContent, 'wifiBackupPage')?.items;
  const wifiBackupHeader = common.getItemValue(signalStrengthSectionLabels, 'header');
  const wifiBackupBody = common.getItemValue(signalStrengthSectionLabels, 'body');
  // wifi backup
  const wifiBackupDMSuppressionFFlag = signalStrengthData?.wifiBackupPlan;
  // Ready for Setup
  const readyForSetup = signalStrengthData?.activationStatus === 'READY_FOR_SETUP';
  // Device Model
  const deviceModel = signalStrengthData?.deviceModel;
  const isTanglewood = deviceModel === 'tanglewood';
  const getTGWFFFlag = (equipmentActionSection) => isTanglewood && equipmentActionSection?.data?.tgwMoversFFlag;
  const getMoversTitle = (moversTitle, tgwMoversFFlag) => ((tgwMoversFFlag || !isTanglewood) ? moversTitle : null);


  /* istanbul ignore next */
  if (dataLoaded) {
    // Header
    HeaderText = common.getItemValue(homeInternet?.pageAttributes, 'pageTitle');

    // homeInternet_equipmentLaunchpoints Section (Middle Section - Details, Resources, Wifi Signal Analyser, Device Group, Health Check)
    const equipmentActionSection = common.getSectionById(sectionContentData, 'homeInternet_equipmentLaunchpoints');
    const equipmentActionContents = equipmentActionSection?.contents;
    const equipmentActions = equipmentActionSection?.actions;
    const routerInfoData = equipmentActionSection?.data?.routerInfo;
    const isPlusPlan = routerInfoData?.isPlusPlan;
    ActionTilesData.isPlusPlan = isPlusPlan;
    ActionTilesData.usageDashboardEnabled = setUsageDashboardEnabled(isTanglewood, routerInfoData);
    const isOnline = isStatusOnline(isEquipmentStatusFetching(equipmentStatusFetching, routerInfoData, equipmentRouterInfo));
    ActionTilesData.isOnline = isOnline;
    const tgwMoversFFlag = getTGWFFFlag(equipmentActionSection);

    // Get Help Data
    const equipments = signalStrengthData?.equipment;
    const mtn = signalStrengthData?.mtn;
    const skuId = setSkuId(equipments);
    const getHelpDefaultLink = common.getActionByKey(equipmentActions, 'getHelpAction')?.actionValue;
    getHelpData = { mtn, skuId, getHelpDefaultLink };

    // Disabled Offline Content
    const disabledStateLabels = common.getContentByComponentId(equipmentActionContents, 'disabledStateLabels')?.items;
    const currentlyOffline = common.getItemValue(disabledStateLabels, 'currentlyOffline');

    // System Error
    const systemErrorObj = getEquipmentInfo(signalStrengthSection);
    const systemError = systemErrorObj?.systemError;
    handleSystemError(systemError, isTanglewood, equipments);
    /* istanbul ignore next */

    // Details
    const detailsItems = common.getContentByComponentId(equipmentActionContents, 'connectionsSection')?.items;
    DetailsData.header = common.getItemValue(detailsItems, 'title');
    DetailsData.networks.title = common.getItemValue(detailsItems, 'wifiNetworksTitle');
    DetailsData.devices.title = common.getItemValue(detailsItems, 'devicesTitle');
    DetailsData.extenders = getExtenders(setGetExtenders(equipmentStatusFetching, routerInfoData, equipmentRouterInfo));
    DetailsData.isOnline = isOnline;
    DetailsData.extenderOffline = currentlyOffline;
    DetailsData.networks.link = common.getActionByKey(equipmentActions, 'openNetworkDetailsAction')?.actionValue;
    DetailsData.devices.link = common.getActionByKey(equipmentActions, 'openDeviceDetailsAction')?.actionValue;

    // Resources
    const resourcesItems = common.getContentByComponentId(equipmentActionContents, 'resourcesSection')?.items;
    ResourcesData.header = common.getItemValue(resourcesItems, 'title');
    ResourcesData.title = common.getItemValue(resourcesItems, 'wpsPairingTitle');
    const moversTitle = common.getItemValue(resourcesItems, 'moversLaunchTitle');
    ResourcesData.moversTitle = getMoversTitle(moversTitle, tgwMoversFFlag);
    ResourcesData.isOnline = isOnline;

    // Movers CTA
    setMoversCTA(ResourcesData, resourcesItems, equipmentActions);

    const actionTilesContent = common.getContentByComponentId(equipmentActionContents, 'tilesSection');
    const actionTilesContentItems = actionTilesContent?.items;
    ActionTilesData.analyser.title = common.getItemValue(actionTilesContentItems, 'wifiAnalyzerTitle');
    const dataUsageItemObj = common.getItem(actionTilesContentItems, 'dataUsageTitle');
    ActionTilesData.dataUsage.title = dataUsageItemObj?.itemValue;
    ActionTilesData.dataUsage.subtitle = dataUsageItemObj?.itemAttributes?.subtitle;
    ActionTilesData.deviceGroup.title = common.getItemValue(actionTilesContentItems, 'deviceGroupsTitle');

    // MVA QR Modal
    const wifiMVARedirectModalContent = common.getContentByComponentId(equipmentActionContents, 'wifiMVARedirectModal');
    const wifiMVARedirectModalContentItems = wifiMVARedirectModalContent?.items;

    const commonModalData = {
      body: common.getItemValue(wifiMVARedirectModalContentItems, 'body'),
      qrImg: routerInfoData?.mvaQRImage,
      qrImgText: routerInfoData?.mvaQRImageAccessbilityText,
    };

    modalData = {
      analyser: { title: common.getItemValue(wifiMVARedirectModalContentItems, 'wifiAnalyzerHeader'), ...commonModalData },
      healthCheck: { title: common.getItemValue(wifiMVARedirectModalContentItems, 'wifiHealthCheckHeader'), ...commonModalData },
    };

    setHealthCheckTitle(isPlusPlan, ActionTilesData, actionTilesContentItems);

    const isHomeButtonFlag = isHomeButton(isOnline, readyForSetup);

    if (isHomeButtonFlag) {
      // Home Button
      HomeButtonsData.isOnline = isOnline;
      // Details
      DetailsData.networks.subtitle = common.getItemValue(detailsItems, 'wifiNetworksText');
      DetailsData.devices.subtitle = getConnectedDevices(equipmentStatusFetching ? routerInfoData : equipmentRouterInfo) + ' online';
      // Resources
      ResourcesData.subtitle = common.getItemValue(resourcesItems, 'wpsPairingText');
      // Home Internet Actions
      ActionTilesData.analyser.subtitle = common.getItemValue(actionTilesContentItems, 'wifiAnalyzerLabel');
      ActionTilesData.deviceGroup.subtitle = common.getItemValue(actionTilesContentItems, 'deviceGroupsLabel');
      ActionTilesData.deviceGroup.link = common.getActionByKey(equipmentActions, 'openCreateDeviceGroupAction').actionValue;
      // MVA QR Modal
      ActionTilesData.analyser.modalTitle = common.getItemValue(wifiMVARedirectModalContentItems, 'wifiAnalyzerHeader');
      setMvaQrModal(isPlusPlan, ActionTilesData, actionTilesContentItems, wifiMVARedirectModalContentItems);
    } else {
      // Offline
      // Details
      DetailsData.networks.subtitle = currentlyOffline;
      DetailsData.devices.subtitle = currentlyOffline;
      // Resources
      ResourcesData.subtitle = currentlyOffline;
      // Home Internet Actions
      ActionTilesData.analyser.subtitle = currentlyOffline;
      ActionTilesData.deviceGroup.subtitle = currentlyOffline;
      if (isPlusPlan) ActionTilesData.healthCheck.subtitle = currentlyOffline;
    }

    // Account Info
    const AccountSection = common.getSectionById(sectionContentData, 'homeInternet_accountInformation');
    const AccountContent = common.getContentByComponentId(AccountSection?.contents, 'accountInformation');
    AccountAEMData.planNameLink = common.getActionValue(AccountContent?.items, AccountSection?.actions, 'planName');
    const disconnectItem = common.getItem(AccountContent?.items, 'disconnectBtn');
    const hideDisconnectforTanglewood = disconnectItem?.itemAttributes?.hideForTanglewood === 'true';
    const hideDisconnectforAccountMember = disconnectItem?.itemAttributes?.hideForAccountMember === 'true';
    AccountData = AccountSection?.data?.accountInformation;
    const isAccountMember = AccountData?.isAccountMember;
    const isAccountAEMDataFlag = isAccountAEMData(isTanglewood, hideDisconnectforTanglewood, isAccountMember, hideDisconnectforAccountMember);

    if (isAccountAEMDataFlag) {
      AccountAEMData.disconnectBtn = disconnectItem?.itemValue;
      AccountAEMData.disconnectLink = common.getActionValue(AccountContent?.items, AccountSection?.actions, 'disconnectBtn');
    }
    AccountAEMData.accountNum = common.getItemValue(AccountContent?.items, 'accountNum');
    AccountAEMData.planName = common.getItemValue(AccountContent?.items, 'planName');
    AccountAEMData.equipment = common.getItemValue(AccountContent?.items, 'equipment');
  }

  // Home Buttons
  const redirectToSpeedTest = () => navigateTo('/routerSpeedTest', false, false, props,false);
  const redirectToRestart = () => setRestart(true);
  const closeRestart = () => setRestart(false);
  const getHelp = () => getHelpLink(dispatch);


  // Details
  /* istanbul ignore next */
  const redirectToNetwork = () => navigateTo(DetailsData.networks.link, false, false, props,false);
  /* istanbul ignore next */
  const redirectToDevices = () => navigateTo(DetailsData.devices.link, { deviceSelected: true, netwrkSelected: false }, false, props,false);
  /* istanbul ignore next */
  const redirectToLineDetails = () => {
    dispatch(setLineDetailsBackPath('/'));
    navigateTo('/linedetails', false, false, props,false);
  };
  /* istanbul ignore next */
  const redirectToExtender = (extender) => navigateTo('/editExtender', false, { data: extender }, props,false);
  const DetailsActions = {
    redirectToNetwork, redirectToDevices, redirectToLineDetails, redirectToExtender,
  };

  // Resources
  const redirectToWPS = () => navigateTo('/addDeviceWPS', false, false, props,false);

  // Home Internet Actions
  /* istanbul ignore next */
  const openAnalyserModal = () => setAnalyserModal(true);
  /* istanbul ignore next */
  const openHealthCheckModal = () => setHealthCheckModal(true);
  /* istanbul ignore next */
  const redirectToDeviceGroup = () => {
    dispatch(initCreateDeviceGroup('/', 'landing'));
    dispatch(createManageGroup('createDeviceGroup'));
    navigateTo(ActionTilesData.deviceGroup.link, false, false, props,false);
  };
  /* istanbul ignore next */
  const redirectToDataUsage = () => navigateTo('/dataUsageDashboard', false, false, props,false);
  const HomeInternetActionsCTA = {
    openAnalyserModal, openHealthCheckModal, redirectToDeviceGroup, redirectToDataUsage,
  };

  /* istanbul ignore next */
  const getEncrpMtn = () => {
    if (window?.location?.hostname === 'localhost') return 'jndkjhasxjkhxhasklj';
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('t');
  };

  // Data Track Attribute Value
  const getDataTrack = (cta) => getCTADataTrack(cta, deviceModel);

  /* istanbul ignore next */
  useEffect(() => {
    let stateVal = props?.history?.location?.state?.encMtn;
    const tValue = getEncrpMtn(); // encrypted mtn
    if (tValue) {
      dispatch(setEncryptedMTN(tValue));
      if (!homeInternetFetching && !props?.history?.location?.state?.isInitialRedirect) dispatch(getHomeInternet(tValue));
    }
    else if(stateVal && !tValue){
      dispatch(setEncryptedMTN(stateVal));
      if (!homeInternetFetching && !props?.history?.location?.state?.isInitialRedirect) dispatch(getHomeInternet(stateVal));
    }
    else {
      redirectToEquipment();
    }
  }, []);
  /* istanbul ignore next */
  useEffect(() => {
    if (homeInternet) {
      const isHomeInt = isHomeInternet(homeInternet);
      let state = {};
      if (isHomeInt && !window?.location?.hash?.includes('/routerlanding')) {
        state.isInitialRedirect = true;
      } else {
        state = {};
        notReadyForSetup(readyForSetup, homeInternet, equipmentStatusFetching, dispatch);
      }
      props?.history?.push({
        pathname: isHomeInt ? '/routerlanding' : '/routerlanding/networks',
        state,
      });
    }
  }, [homeInternet]);

  const showFlag = isShowFlag(homeInternetFetching, dataLoaded, wifiBackupDMSuppressionFFlag);
  const isSystemErrorFlag = isSystemError(systemErrorData.isError, homeInternet, homeInternetFetching);

  /* istanbul ignore next */
  return (
    <>
      <Loader />
      {showRestart && <RestartRouter history={props.history} closeRestart={closeRestart} isHomeInternetRedirect />}
      {showAnalyserModal && <HomeInternetModal show={showAnalyserModal} {...modalData.analyser} onClose={() => setAnalyserModal(false)} />}
      {showHealthCheckModal && <HomeInternetModal show={showHealthCheckModal} {...modalData.healthCheck} onClose={() => setHealthCheckModal(false)} />}
      {(showFlag)
        && (
          <>
            <div className="wifibackup-container">
              <div className="wifibackup-header">{wifiBackupHeader}</div>
              <div className="wifibackup-subtext">{wifiBackupBody}</div>
              <img className="wifibackup-image" src={signalStrengthData?.vhaSetupQRImage} alt="qr-code" />
            </div>
          </>
        )
      }
      {
        ((!showFlag)
          ? (
            <>
              {isSystemErrorFlag
              && (
                <div className="system-error-banner">
                  <div className="system-error-icon">
                    <Icon name="warning" size="medium" />
                  </div>
                  <div>
                    <p className="system-error-title">Currently not available</p>
                    <p>Try troubleshooting. Or please contact customer support</p>
                  </div>
                </div>
              )}
              {(homeInternet && Object.keys(homeInternet).length > 0) && (
              <div className="fwa-container">
                <Header>{HeaderText}</Header>
                {systemErrorData.isError && <p style={{ paddingBottom: 15 }} />}
                <HomeInternetTile readyForSetup={readyForSetup} getHelp={getHelp} getDataTrack={getDataTrack} isTanglewood={isTanglewood} />
                <HomeButton isOnline={HomeButtonsData.isOnline} getHelp={getHelp} redirectToRestart={redirectToRestart} redirectToSpeedTest={redirectToSpeedTest} getDataTrack={getDataTrack} />
                <StyledDetailsResource>
                  <Details data={DetailsData} {...DetailsActions} getDataTrack={getDataTrack} title={HeaderText} />
                  <Resources data={ResourcesData} redirectToWPS={redirectToWPS} getDataTrack={getDataTrack} title={HeaderText} />
                </StyledDetailsResource>
                <StyledDetailsResource>
                  <HomeInternetActions {...ActionTilesData} {...HomeInternetActionsCTA} getDataTrack={getDataTrack} title={HeaderText} />
                </StyledDetailsResource>
                {!systemErrorData.isError && <AccountInformation AccountAEMData={AccountAEMData} AccountData={AccountData} getDataTrack={getDataTrack} />}
              </div>
              )}
            </>
          )
          : <></>)
      }
    </>
  );
};

export default HomeInternet;
