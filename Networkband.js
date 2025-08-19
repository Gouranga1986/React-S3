import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs, Tab } from '@vds/tabs';
import { Notification } from '@vds/notifications';
import NetworkBandSetting from './NetworkBandSetting';
import NetworkDetailModal from './NetworkDetailModal';
import ReactHtmlParser from "react-html-parser";
import common from '../../../../../shared/utilities/util';
import { dispatchPageView, dispatchVzdlData, onPageLoad } from '../../../../../shared/utilities/tagging';
import { clearSONError, clearEditNetworkError, editNetworkDetails, clearEditNetworkSuccess, clearEditNetworkSuccessData } from '../../actions';
import { getCTADataTrack } from './NetworkDetails';

const getItemValue = common.getItemValue;
const getSectionById = common.getSectionById;
const getContent = common.getContent;
export const pageName = 'Wi-Fi Networks';

const NetworkBand = (props) => {

    const propsNetworkData = props?.networkSection?.data;
    const isWifiNetworksRestructureFFlag = props?.wifiNetworksRestructureFFlag === 'true';
    const [showModal, setShowModal] = useState(false);
    const [networkData, setNetworkData] = useState(propsNetworkData);
    const [showSonDisabledNotif, setSonDisabledNotif] = useState(true);
    const isNetworkDetailsFetching = useSelector((state) => state.Router.isNetworkDetailsFetching);
    const sonStatusAPIError = useSelector((state) => state.Router.sonStatusAPIError);
    const editNetworkDetailAPIError = useSelector((state) => state.Router.editNetworkDetailAPIError);
    const showEditNetworkSuccess = useSelector((state) => state.Router.showEditNetworkSuccess);
    const editNetworkUpdatedData = useSelector((state) => state.Router.editNetworkUpdatedData);
    const dispatch = useDispatch();

    const navigateTo = props?.navigateTo;
    let guestDataObj, iotDataObj = { title: '', band: '', status: '' };
    let primaryDataObj = {
        son: { primarySon: {}, primary6Ghz: {}, is6GHzSupported: false },
        notSon: { primary2dot4Ghz: '', primary5GHz: '',primary5GHzLow:'', primary6GHz: '' }
    };
    let primaryDataFiosObj = {
        son: { primarySon: {}, primary6Ghz: {}, is6GHzSupported: false },
        notSon: ''
    };
    let modalData = {};
    let sonDisabledNotificationData = { title: '', subtitle: '' };
    const statusErroTitle = ' status update failed, Please try after sometime.';
    const sonUpdateErrorTitle = 'SON' + statusErroTitle;
    const editNetworkUpdateErrorTitle = 'Network' + statusErroTitle;

    const clearSuccessData = () => dispatch(clearEditNetworkSuccessData());
    const clearSuccessNotification = () => dispatch(clearEditNetworkSuccess());

    const editNetwork = (data, reloadPage) => dispatch(editNetworkDetails({ ...data, hashedMTN: props?.hashedMtn }, reloadPage));
    /* istanbul ignore next */
    const changeNetworkStatus = (dataObj, sixGHzObj, reloadPage) => {
        let editNetworkObj = { pathID: dataObj?.pathID, id: dataObj?.id };
        if (sixGHzObj) {
            editNetworkObj = { ...editNetworkObj, ...sixGHzObj };
        } else {
            editNetworkObj.enabled = !dataObj?.enabled;
        }
        clearSuccessData();
        editNetwork(editNetworkObj, reloadPage);
    }
    /* istanbul ignore next */
    const openModal = () => setShowModal(true);
    /* istanbul ignore next */
    const closeModal = () => setShowModal(false);
    /* istanbul ignore next */
    const createBandObj = (bandDataObj, band, title, isFFlag) => ({
        title: bandDataObj?.name,
        band: isFFlag ? band + bandDataObj?.label : band,
        status: bandDataObj?.enabled,
        toggleClick: () => changeNetworkStatus(bandDataObj),
        editData: {
            wifiName: bandDataObj?.name, wifiKey: bandDataObj?.key, title: title, id: bandDataObj?.id,
            authmode: bandDataObj?.authmode, protocols: bandDataObj?.protocols, pathID: bandDataObj?.pathID
        }
    });

    const primaryTitle = 'Primary';
    const son = props?.son;
    const networkSection = props?.networkSection;

    /* istanbul ignore next */
    if (networkData) {
        const modalSectionContents = getSectionById(props?.networkSections, 'fwadm_networksdetails_modal')?.contents;
        const networkContentItems = getContent(networkSection?.contents, 'networkdetailbands')?.items;
        //band
        const bandTxt = (getItemValue(networkContentItems, 'bandPrefix') || "Band:" )+ ' ';
        // 2.4 GHz
        const twoDotFourBandTxt = getItemValue(networkContentItems, 'bandtwodotfour');
        // Guest
        const guestData = networkData?.guest || false;
        const guestDataFios = isWifiNetworksRestructureFFlag && networkData?.guest?.networks[0] || false;
        guestDataObj = isWifiNetworksRestructureFFlag ? guestDataFios && createBandObj(guestDataFios,bandTxt, 'Guest', true): guestData && createBandObj(guestData, twoDotFourBandTxt, 'Guest',false);
        //IoT
        const iotData = networkData?.iot || false;
        const iotDataFios = isWifiNetworksRestructureFFlag && networkData?.iot?.networks[0] || false;
        iotDataObj = isWifiNetworksRestructureFFlag ? iotDataFios && createBandObj(iotDataFios,bandTxt, 'IoT',true ) : iotData && createBandObj(iotData, twoDotFourBandTxt, 'IoT',false);
        // Primary
        const primaryData = networkData?.primary;
        const is6GHzSupported = primaryData?.is6GHzSupported;
        const is6GHzEnabled = primaryData?.is6GHzEnabled;
        if (is6GHzSupported && !is6GHzEnabled) {
            const enable6GhzItems = getContent(modalSectionContents, 'networkdetailenable6Ghz')?.items;
            modalData = {
                title: getItemValue(enable6GhzItems, 'header'),
                body: getItemValue(enable6GhzItems, 'body'),
                actionButton: getItemValue(enable6GhzItems, 'confirm'),
                cancel: getItemValue(enable6GhzItems, 'cancel')
            }
        }
        if(!isWifiNetworksRestructureFFlag){
            /* istanbul ignore next */
            if (son) {
                // 6 GHz Supported
                primaryDataObj.son.is6GHzSupported = is6GHzSupported;
                // SON Enabled
                const sonData = primaryData?.son;
                const sonTitle = sonData?.name;
                const sonBandEnabled = sonData?.enabled;
                if (is6GHzSupported && is6GHzEnabled) {
                    // SON Enabled & 6 GHz Enabled
                    const bandAll = getItemValue(networkContentItems, 'bandall');
                    const sixghztext = getItemValue(networkContentItems, 'sixghztext');
                    primaryDataObj.son.primarySon = {
                        band: bandAll, title: sonTitle, status: sonBandEnabled,
                        toggleClick: () => changeNetworkStatus(sonData, { enabled: !sonBandEnabled, enabled6ghz: !is6GHzEnabled })
                    };
                    primaryDataObj.son.primary6Ghz = {
                        subtitle: sixghztext, status: is6GHzEnabled, preventEdit: true, onClick: openModal,
                        toggleClick: () => changeNetworkStatus(sonData, { enabled6ghz: !is6GHzEnabled }, true)
                    };
                    const about6GHzItems = getContent(modalSectionContents, 'networkdetailabout6GHz')?.items;
                    modalData = {
                        title: getItemValue(about6GHzItems, 'header'),
                        body: getItemValue(about6GHzItems, 'body'),
                        close: 'Close'
                    }
                } else {
                    // SON Enabled & 6 GHz Disabled
                    const bandTwoDotFourAndFive = getItemValue(networkContentItems, 'bandtwodotfourandfive');
                    const bandsix = getItemValue(networkContentItems, 'bandsix');
                    primaryDataObj.son.primarySon = {
                        band: bandTwoDotFourAndFive, title: sonTitle, status: sonBandEnabled,
                        toggleClick: () => changeNetworkStatus(sonData)
                    };
                    if (is6GHzSupported) {
                        primaryDataObj.son.primary6Ghz = { band: bandsix, title: sonTitle, status: is6GHzEnabled, toggleClick: openModal };
                        modalData.actionButtonClick = () => {
                            closeModal();
                            changeNetworkStatus(sonData, { enabled6ghz: !is6GHzEnabled }, true);
                        }
                    }
                }
                primaryDataObj.son.primarySon.editData = {
                    wifiName: sonTitle, wifiKey: sonData?.key, title: primaryTitle, id: sonData?.id,
                    authmode: sonData?.authmode, protocols: sonData?.protocols, pathID: sonData?.pathID
                }
            } else {
                // SON Disabled
                const band2Dot4Data = primaryData?.twoPointFourGHz;
                const band5Data = primaryData?.fiveGHz;
                const band6Data = primaryData?.sixGHz;
    
                if (band2Dot4Data) {
                    const bandTwoDot = getItemValue(networkContentItems, 'bandtwodotfour');
                    const band2Dot4Enabled = band2Dot4Data?.enabled;
                    const band2Dot4Name = band2Dot4Data?.name;
                    primaryDataObj.notSon.primary2dot4Ghz = {
                        band: bandTwoDot, title: band2Dot4Name, status: band2Dot4Enabled,
                        toggleClick: () => changeNetworkStatus(band2Dot4Data),
                        editData: {
                            wifiName: band2Dot4Name, wifiKey: band2Dot4Data?.key, title: primaryTitle, band: '2.4 GHz', id: band2Dot4Data?.id,
                            authmode: band2Dot4Data?.authmode, protocols: band2Dot4Data?.protocols, pathID: band2Dot4Data?.pathID
                        }
                    };
                }
                if (band5Data) {
                    const bandFive = getItemValue(networkContentItems, 'bandfive');
                    const band5Enabled = band5Data?.enabled;
                    const band5Name = band5Data?.name;
                    primaryDataObj.notSon.primary5GHz = {
                        band: bandFive, title: band5Name, status: band5Enabled,
                        toggleClick: () => changeNetworkStatus(band5Data),
                        editData: {
                            wifiName: band5Name, wifiKey: band5Data?.key, title: primaryTitle, band: '5 GHz', id: band5Data?.id,
                            authmode: band5Data?.authmode, protocols: band5Data?.protocols, pathID: band5Data?.pathID
                        }
                    };
                }
    
                if (band6Data) {
                    const bandsix = getItemValue(networkContentItems, 'bandsix');
                    const band6Enabled = band6Data?.enabled;
                    const band6Name = band6Data?.name;
                    primaryDataObj.notSon.primary6GHz = {
                        band: bandsix, title: band6Name, status: band6Enabled,
                        editData: {
                            wifiName: band6Name, wifiKey: band6Data?.key, title: primaryTitle, band: '6 GHz', id: band6Data?.id,
                            authmode: band6Data?.authmode, protocols: band6Data?.protocols, pathID: band6Data?.pathID
                        }
                    };
                    if (is6GHzEnabled) {
                        primaryDataObj.notSon.primary6GHz.toggleClick = () => changeNetworkStatus(band6Data)
                    } else {
                        primaryDataObj.notSon.primary6GHz.toggleClick = openModal;
                        modalData.actionButtonClick = () => {
                            closeModal();
                            changeNetworkStatus(band6Data);
                        }
                    }
                }
                // SON Disabled Notification
                const sonDisabledItems = getContent(modalSectionContents, 'networkdetaildisableson')?.items;
                sonDisabledNotificationData = {
                    title: getItemValue(sonDisabledItems, 'header'),
                    subtitle: getItemValue(sonDisabledItems, 'body'),
                }
            }
        }
        else{
            if (son) {
                // 6 GHz Supported
                primaryDataFiosObj.son.is6GHzSupported = is6GHzSupported;
                // SON Enabled
                const sonData = networkData?.primary?.networks[0];
                const sonTitle = sonData?.name;
                const sonBandEnabled = sonData?.enabled;
                const bandName = bandTxt + sonData?.label
                if (is6GHzSupported && is6GHzEnabled) {
                    // SON Enabled & 6 GHz Enabled
                    const sixghztext = getItemValue(networkContentItems, 'sixghztext');
                    primaryDataFiosObj.son.primarySon = {
                        band: bandName, title: sonTitle, status: sonBandEnabled,
                        toggleClick: () => changeNetworkStatus(sonData, { enabled: !sonBandEnabled, enabled6ghz: !is6GHzEnabled })
                    };
                    primaryDataFiosObj.son.primary6Ghz = {
                        subtitle: sixghztext, status: is6GHzEnabled, preventEdit: true, onClick: openModal,
                        toggleClick: () => changeNetworkStatus(sonData, { enabled6ghz: !is6GHzEnabled }, true)
                    };
                    const about6GHzItems = getContent(modalSectionContents, 'networkdetailabout6GHz')?.items;
                    modalData = {
                        title: getItemValue(about6GHzItems, 'header'),
                        body: getItemValue(about6GHzItems, 'body'),
                        close: 'Close'
                    }
                } else {
                    // SON Enabled & 6 GHz Disabled
                    const bandsix = '6 GHz';
                    primaryDataFiosObj.son.primarySon = {
                        band: bandName, title: sonTitle, status: sonBandEnabled,
                        toggleClick: () => changeNetworkStatus(sonData)
                    };
                    if (is6GHzSupported) {
                        primaryDataFiosObj.son.primary6Ghz = { band: bandTxt + bandsix, title: sonTitle, status: is6GHzEnabled, toggleClick: openModal };
                        modalData.actionButtonClick = () => {
                            closeModal();
                            changeNetworkStatus(sonData, { enabled6ghz: !is6GHzEnabled }, true);
                        }
                    }
                }
                primaryDataFiosObj.son.primarySon.editData = {
                    wifiName: sonTitle, wifiKey: sonData?.key, title: primaryTitle, id: sonData?.id,
                    authmode: sonData?.authmode, protocols: sonData?.protocols, pathID: sonData?.pathID
                }
            } else {
                // SON Disabled
                primaryDataFiosObj.notSon = networkData?.primary?.networks?.map((item) => ({
                    band: bandTxt + item?.label, title: item.name, status: item?.enabled,
                    toggleClick: () => changeNetworkStatus(item),
                    editData: {
                        wifiName: item.name, wifiKey: item?.key, title: primaryTitle, band: item.label, id: item?.id,
                        authmode: item?.authmode, protocols: item?.protocols, pathID: item?.pathID
                    }
                }))                
                // SON Disabled Notification
                const sonDisabledItems = getContent(modalSectionContents, 'networkdetaildisableson')?.items;
                sonDisabledNotificationData = {
                    title: getItemValue(sonDisabledItems, 'header'),
                    subtitle: getItemValue(sonDisabledItems, 'body'),
                }
            }
            
        }
        
    }

    const onTabChange = (ele, tabIndex) => {
        const isPrimary = tabIndex === 0;
        props?.tabChange(isPrimary);
    }

    const clearErrorNotification = () => dispatch(clearEditNetworkError());

    useEffect(() => {
        return () => {
            clearErrorNotification();
            clearSuccessData();
        }
    }, []);

    // To handle successful network band status update
    /* istanbul ignore next */
    useEffect(() => {
        const updatedDataKeys = editNetworkUpdatedData && Object.keys(editNetworkUpdatedData);
        if (updatedDataKeys?.length > 0) {
            const pathId = editNetworkUpdatedData?.pathID;
            const networkEnabled = editNetworkUpdatedData?.enabled;
            if (pathId) {
                setNetworkData((prevNetworkData) => {
                    let tempData = JSON.parse(JSON.stringify(prevNetworkData));
                    if (/guest/i.test(pathId)) {
                        tempData.guest.enabled = networkEnabled;
                    } else if (/iot/i.test(pathId)) {
                        tempData.iot.enabled = networkEnabled;
                    } else {
                        if (son) {
                            if (updatedDataKeys.includes('enabled6ghz')) {
                                tempData.primary.is6GHzEnabled = editNetworkUpdatedData?.enabled6ghz;
                            }
                            if (updatedDataKeys.includes('enabled')) {
                                tempData.primary.son.enabled = networkEnabled;
                            }
                        } else {
                            const networkId = editNetworkUpdatedData?.id;
                            let primaryObj = tempData.primary;
                            Object.keys(primaryObj).forEach((primarybandKey) => {
                                const currentPrimaryBand = primaryObj[primarybandKey];
                                if (currentPrimaryBand.pathID === pathId && currentPrimaryBand.id === networkId) {
                                    tempData.primary[primarybandKey].enabled = networkEnabled;
                                }
                            });

                        }
                    }
                    return tempData;
                });
            }
        }
    }, [editNetworkUpdatedData]);

    // Update Network Data state value if new data loaded from api response
    /* istanbul ignore next */
    useEffect(() => {
        const propsDataStr = JSON.stringify(propsNetworkData);
        const networkDataStr = JSON.stringify(networkData);
        if (propsDataStr !== networkDataStr) {
            setNetworkData(propsNetworkData);
        }
    }, [propsNetworkData]);

    // Page load tagging call
    /* istanbul ignore next */
    const pageLoad = (eVar13, sonDisabledSubtitle) => {
        let isSonDisabled = eVar13;
        if (eVar13) onPageLoad('device management', sonDisabledSubtitle, false, eVar13, true);
        else onPageLoad('device management', pageName, false, false, true);

        // tell tagging data is finalized
        if (window.VZTAG_IS_READY) {
            dispatchPageView(pageName, isSonDisabled ? 'message displayed' : pageName);
        } else {
            document.addEventListener('vztagReady', () => {
                dispatchPageView(pageName, isSonDisabled ? 'message displayed' : pageName);
            });
        }
    }

    const isAPICalled = props?.isAPICalled;
    useEffect(() => {
        /* istanbul ignore next */
        if (isAPICalled && !isNetworkDetailsFetching && networkData) {
            dispatchVzdlData(pageName, 'device management', false, true, !son);
            const networkTabs = document.querySelectorAll('.network-details-tab-container ul li button');
            if (networkTabs?.length > 0) {
                networkTabs?.forEach((nwTab) => {
                    nwTab.setAttribute('data-track', getCTADataTrack((nwTab?.innerText || '') + ' Wi-Fi Tab'));
                });
            }
            // SON Disabled Notify - tagging
            if (!son && sonDisabledNotificationData.title) {
                const sonDisabledSubtitle = sonDisabledNotificationData.subtitle.replaceAll(/<p>|<\/p>/g, '');
                const eVar13 = sonDisabledNotificationData.title + ':' + sonDisabledSubtitle;
                pageLoad(eVar13, sonDisabledSubtitle);
            } else {
                // Page load tagging call
                pageLoad();
            }
        }
    }, [isAPICalled, isNetworkDetailsFetching]);

    /* istanbul ignore next */
    return <div className='network-details-tab-container'>
        {showModal && <NetworkDetailModal {...modalData} isOpen={showModal} onClose={closeModal} />}
        {(showEditNetworkSuccess || sonStatusAPIError || editNetworkDetailAPIError) && <div className='son-disabled-notification'>
            {showEditNetworkSuccess && <Notification type='success' title='Your changes have been updated.' onCloseButtonClick={clearSuccessNotification} />}
            {sonStatusAPIError && <Notification type='warning' title={sonUpdateErrorTitle} onCloseButtonClick={() => dispatch(clearSONError())} />}
            {editNetworkDetailAPIError && <Notification type='warning' title={editNetworkUpdateErrorTitle} onCloseButtonClick={clearErrorNotification} />}
        </div>}
        <Tabs onTabChange={onTabChange}>
            <Tab label={primaryTitle}>
                {showSonDisabledNotif && !son && <div className='son-disabled-notification'>
                    <Notification type='info' title={sonDisabledNotificationData.title}
                        subtitle={ReactHtmlParser(sonDisabledNotificationData.subtitle)} onCloseButtonClick={() => setSonDisabledNotif(false)} />
                </div>}
                <div className='primary-setting-container'>
                    <div className='network-band-container'>
                        {!isWifiNetworksRestructureFFlag && <>
                        {son ? <>
                            <NetworkBandSetting {...primaryDataObj.son.primarySon} navigateTo={navigateTo} />
                            {primaryDataObj.son.is6GHzSupported && <NetworkBandSetting {...primaryDataObj.son.primary6Ghz} navigateTo={navigateTo} />}
                        </> : <>
                            {primaryDataObj.notSon.primary2dot4Ghz && <NetworkBandSetting {...primaryDataObj.notSon.primary2dot4Ghz} navigateTo={navigateTo} />}
                            {primaryDataObj.notSon.primary5GHz && <NetworkBandSetting {...primaryDataObj.notSon.primary5GHz} navigateTo={navigateTo} />}
                            {primaryDataObj.notSon.primary6GHz && <NetworkBandSetting {...primaryDataObj.notSon.primary6GHz} navigateTo={navigateTo} />}
                        </>}
                        </>}
                       {isWifiNetworksRestructureFFlag && <>
                        {son ? <>
                            <NetworkBandSetting {...primaryDataFiosObj.son.primarySon} navigateTo={navigateTo} />
                            {primaryDataFiosObj.son.is6GHzSupported && <NetworkBandSetting {...primaryDataFiosObj.son.primary6Ghz} navigateTo={navigateTo} />}
                        </> : <>
                            {primaryDataFiosObj.notSon.map((item)=><NetworkBandSetting {...item} navigateTo={navigateTo} />)}
                        </>}
                        </>}
                    </div>
                    {props?.speedTestTile()}
                </div>
            </Tab>
            <Tab label='Guest' hide={!guestDataObj} >
                {<div className='network-band-container'>
                    <NetworkBandSetting {...guestDataObj} navigateTo={navigateTo} />
                </div>}
            </Tab>
            <Tab label='IoT' hide={!iotDataObj}  >
                <div className='network-band-container'>
                    <NetworkBandSetting {...iotDataObj} navigateTo={navigateTo} />
                </div>
            </Tab>
        </Tabs>
    </div>;
}

export default NetworkBand;
