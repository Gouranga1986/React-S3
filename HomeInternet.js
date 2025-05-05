@@ -62,11 +62,17 @@ const DetailsData = {
// System Error Data
let systemErrorData = { isError: false };
/* istanbul ignore next */
const redirectToEquipment = () => navigateTo('/equipment', false, false, false,'?flowType=hil');
const handleSystemError = (systemError, isTanglewood, equipments) => {
  if (systemError) {
    systemErrorData = { isError: true };
    const errMsg = 'currently not available,Try troubleshooting. Or please contact customer support';
    onPageLoad('device management', 'message displayed', null, errMsg);
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
@@ -74,13 +80,14 @@ const handleSystemError = (systemError, isTanglewood, equipments) => {
  return (systemErrorData, DetailsData);
};
/* istanbul ignore next */
const navigateTo = (path, tabSelected, data, props) => {
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
@@ -248,9 +255,10 @@ const HomeInternet = (props) => {
    const currentlyOffline = common.getItemValue(disabledStateLabels, 'currentlyOffline');

    // System Error
    const systemErrorObj = setSystemErrorObj(equipmentStatus, signalStrengthSection);
    const systemErrorObj = getEquipmentInfo(signalStrengthSection);
    const systemError = systemErrorObj?.systemError;
    handleSystemError(systemError, isTanglewood, equipments);
    /* istanbul ignore next */

    // Details
    const detailsItems = common.getContentByComponentId(equipmentActionContents, 'connectionsSection')?.items;
@@ -350,7 +358,7 @@ const HomeInternet = (props) => {
  }

  // Home Buttons
  const redirectToSpeedTest = () => navigateTo('/routerSpeedTest', false, false, props);
  const redirectToSpeedTest = () => navigateTo('/routerSpeedTest', false, false, props,false);
  const redirectToRestart = () => setRestart(true);
  const closeRestart = () => setRestart(false);
  const getHelp = () => getHelpLink(dispatch);
@@ -358,22 +366,22 @@ const HomeInternet = (props) => {

  // Details
  /* istanbul ignore next */
  const redirectToNetwork = () => navigateTo(DetailsData.networks.link, false, false, props);
  const redirectToNetwork = () => navigateTo(DetailsData.networks.link, false, false, props,false);
  /* istanbul ignore next */
  const redirectToDevices = () => navigateTo(DetailsData.devices.link, { deviceSelected: true, netwrkSelected: false }, false, props);
  const redirectToDevices = () => navigateTo(DetailsData.devices.link, { deviceSelected: true, netwrkSelected: false }, false, props,false);
  /* istanbul ignore next */
  const redirectToLineDetails = () => {
    dispatch(setLineDetailsBackPath('/'));
    navigateTo('/linedetails', false, false, props);
    navigateTo('/linedetails', false, false, props,false);
  };
  /* istanbul ignore next */
  const redirectToExtender = (extender) => navigateTo('/editExtender', false, { data: extender }, props);
  const redirectToExtender = (extender) => navigateTo('/editExtender', false, { data: extender }, props,false);
  const DetailsActions = {
    redirectToNetwork, redirectToDevices, redirectToLineDetails, redirectToExtender,
  };

  // Resources
  const redirectToWPS = () => navigateTo('/addDeviceWPS', false, false, props);
  const redirectToWPS = () => navigateTo('/addDeviceWPS', false, false, props,false);

  // Home Internet Actions
  /* istanbul ignore next */
@@ -384,10 +392,10 @@ const HomeInternet = (props) => {
  const redirectToDeviceGroup = () => {
    dispatch(initCreateDeviceGroup('/', 'landing'));
    dispatch(createManageGroup('createDeviceGroup'));
    navigateTo(ActionTilesData.deviceGroup.link, false, false, props);
    navigateTo(ActionTilesData.deviceGroup.link, false, false, props,false);
  };
  /* istanbul ignore next */
  const redirectToDataUsage = () => navigateTo('/dataUsageDashboard', false, false, props);
  const redirectToDataUsage = () => navigateTo('/dataUsageDashboard', false, false, props,false);
  const HomeInternetActionsCTA = {
    openAnalyserModal, openHealthCheckModal, redirectToDeviceGroup, redirectToDataUsage,
  };
@@ -404,11 +412,19 @@ const HomeInternet = (props) => {

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
