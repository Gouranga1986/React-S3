import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from '@vds/inputs';
import { Button } from '@vds/buttons';
import { Notification } from '@vds/notifications';
import { getCreateDeviceGroup, updateCreateDeviceGroupObj, createNewDeviceGroup } from '../../actions';
import CancelModal from './CancelModal';
import common from '../../../../../shared/utilities/util';
import Loader from '../loader/loader';
import './CreateDeviceGroup.css';
import RemoveModal from './RemoveModal';
import ReviewDetails from './AllDetails';
import SelectDevices from './SelectDevices';
import SetSchedule from './SetSchedule';
import AddException from './AddException';
import Addkeyword from './AddKeyword';
import {
    Modal, ModalTitle, ModalBody,
} from '@vds/modals';

const getItemValue = common.getItemValue;
const getSectionById = common.getSectionById;
const getContentByComponentId = common.getContentByComponentId;

export const createItemKeyValObj = (items) => {
    const itemKeyValObj = {};
    if (Array.isArray(items)) {
        items?.forEach((item) => {
            const itemKey = item?.itemKey;
            const itemValue = item?.itemValue;
            const itemAttributes = item?.itemAttributes;
            const hasAttributes = itemAttributes && Object.keys(itemAttributes).length > 0;
            if (hasAttributes) {
                itemKeyValObj[itemKey] = { value: itemValue, ...itemAttributes };
            } else
                itemKeyValObj[itemKey] = itemValue;
        });
    }
    return itemKeyValObj;
};

const RightPane = ({ deviceGroupName, groupNamePageData, schedulePageData, devices, websiteExceptionRight }) =>
    <div className='right-pane'>
        {<div className='create-device-group-preview-container'>
            <div className='device-group-name-lg-badge'>{deviceGroupName?.slice(0, 2) || groupNamePageData?.slice(0, 2)}</div>
            <div className='device-group-name-text-value'>{deviceGroupName || groupNamePageData}</div>
        </div>}
    </div>;

const CreateDeviceGroup = (props) => {

    const dispatch = useDispatch();
    const homeInternet = useSelector((state) => state.Router.homeInternet);
    const hashedMtn = getItemValue(homeInternet?.pageAttributes, 'hashedMtn');
    const createDeviceGroupAPIFetching = useSelector((state) => state.Router.createDeviceGroupAPIFetching);
    const createDeviceGroupAPIData = useSelector((state) => state.Router.createDeviceGroupAPIData);
    const allDevicesList = useSelector((state) => state.Router.allDevicesList);

    const deviceGroupSections = createDeviceGroupAPIData?.sections;
    const dataLoaded = Array.isArray(deviceGroupSections);

    const deviceGroupData = useSelector((state) => state.Router.createDeviceGroupData);
    const cancelPath = useSelector((state) => state.Router.cancelCreateDeviceGroupPath);
    const sourceComp = useSelector((state) => state.Router.createDeviceGroupSource);

    const [deviceGroupName, setDeviceGroupName] = useState('');

    const [devices, setDevices] = useState([]);
    const [selectedDevices, setSelectedDevices] = useState([]);

    const [showSelectDeviceModal, setShowSelectDeviceModal] = useState(false);
    const [showEditScheduleModal, setShowEditScheduleModal] = useState(false);
    const [showAddExceptionModal, setShowAddExceptionModal] = useState(false);
    const [showAddKeywordModal, setShowAddKeywordModal] = useState(false);

    const editHandler = (pageIndex) => {
        closeCreateError();
        let updateObject = {};
        updateObject.devices = selectedDevices;
        updateObject.exception = websiteData;
        updateObject.keyword = keywordData;
        dispatch(updateCreateDeviceGroupObj(updateObject));
    }

    const addDevice = () => {
        setShowSelectDeviceModal(true);
        editHandler();
    };
    const editSchedule = () => {
        setShowEditScheduleModal(true);
        editHandler();
    }
    const addException = () => {
        setShowAddExceptionModal(true);
        editHandler();
    }
    const addKeyword = () => {
        setShowAddKeywordModal(true);
        editHandler();
    }

    const [maxDevices, setMaxDevices] = useState(false);
    const [createDisabled, setCreateDisabled] = useState(false);
    const [devicesNextDisabled, setDevicesNextDisabled] = useState(true);

    // Page Headers
    const [pageHeaderData, setPageHeaderData] = useState({});
    // Cancel Modal Data
    const [cancelModalData, setCancelModalData] = useState({});
    // Group Name Page Data
    const [groupNamePageData, setGroupNamePageData] = useState({});
    // Select Devices Page Data
    const [selectDevicesPageData, setSelectDevicesPageData] = useState({});
    // Set Schedule Page Data
    const [schedulePageData, setSchedulePageData] = useState({});
    // Review Page Data
    const [reviewPageData, setReviewPageData] = useState({});
    //Website Exception Page Data
    const [websiteExceptionPageData, setWebsiteExceptionPageData] = useState({});
    const [websiteExceptionRight, setWebsiteExceptionRight] = useState({});

    //Keyword exception Page Data
    const [keywordPageData, setKeywordPageData] = useState({});
    const [keywordRight, setKeywordRight] = useState({});
    // Remove Modal Data
    const [removeModalData, setRemoveModalData] = useState({});

    //Exception Website Data
    const [websiteData, setWebsiteData] = useState([]);
    const [keywordData,setKeywordData] = useState([]);

    // Cancel Create Device Group Modal
    const [showCancelModal, setCancelModal] = useState(false);
    const openCancelModal = () => setCancelModal(true);
    const closeCancelModal = () => setCancelModal(false);

    const [showRemoveModal, setRemoveModal] = useState(false);
    const [showRemoveSelectedDevices, setRemoveSelectedDevices] = useState('');
    const closeRemoveModal = () => setRemoveModal(false);
    const openRemoveModal = (selectDevice) => {
        setRemoveSelectedDevices(selectDevice)
        setRemoveModal(true);
    }

    const [showRemoveWebsiteModal, setShowRemoveWebsiteModal] = useState(false);
    const [showRemoveKeywordModal, setShowRemoveKeywordModal] = useState(false);
    
    const [showRemoveAllWebsitesModal, setShowRemoveAllWebsitesModal] = useState(false);
    const [showRemoveAllKeywordsModal, setShowRemoveAllKeywordsModal] = useState(false);
    const [removeWebsiteModalData, setRemoveWebsiteModalData] = useState({});
    const [removeKeywordModalData, setRemoveKeywordModalData] = useState({});
    const closeRemoveWebsiteModal = () => setShowRemoveWebsiteModal(false);
    const closeRemoveAllWebsitesModal = () => setShowRemoveAllWebsitesModal(false);
    const closeRemoveKeywordModal = () => setShowRemoveKeywordModal(false);
    const closeRemoveAllKeywordsModal = () => setShowRemoveAllKeywordsModal(false);

    const navigateTo = (path) => props?.history?.push({ pathname: path });
    const redirectToHome = () => navigateTo('/routerlanding');
    const redirectToAllDevicesList = () => navigateTo('/allDevicesList');
    const cancelCreateDeviceGroup = () => navigateTo(cancelPath || '/');

    // Create API Error Notification
    const [showCreateError, setShowCreateError] = useState(false);
    const closeCreateError = () => setShowCreateError(false);

    // No Selected Devices Notification
    const [showNoDevices, setShowNoDevices] = useState(false);

    const confirmRemoveDevice = () => {
        setSelectedDevices(prev => { return prev.filter(selectedDevices => selectedDevices !== showRemoveSelectedDevices) });
        closeRemoveModal();
    }

    const updateDevices = (currentIndex, updateObject, devicesSelected) => {
        if (currentIndex === 0 || currentIndex === 3) {
            setMaxDevices(false);
            updateObject.devices = devicesSelected || selectedDevices;
        }
    }
    
    const updateSchedule = (currentIndex, updateObject, { selectedDays, startHour, startMinute, endHour, endMinute, startPeriod, endPeriod}) => {
        if (currentIndex === 1) {
            updateObject.schedule = (selectedDays?.length > 0) ? {
                    daysOfTheWeek: selectedDays,
                    startTimeHour: startHour,
                    startTimeMinute: startMinute,
                    stopTimeHour: endHour,
                    stopTimeMinute: endMinute,
                    startTimeAmPm: startPeriod,
                    stopTimeAmPm: endPeriod,
            } : {}
            setShowEditScheduleModal(false);
        }
    }


    const nextHandler = (pageData, currentIndex) => {
        let updateObject = {};
        updateDevices(currentIndex, updateObject, pageData);
        setShowSelectDeviceModal(false);
        updateSchedule(currentIndex, updateObject, pageData);
        if (currentIndex === 2) {
            updateObject.exception = pageData;
            setShowAddExceptionModal(false);
        }
        if (currentIndex === 4) {
            updateObject.keyword = pageData;
            setShowAddKeywordModal(false);
        }
        dispatch(updateCreateDeviceGroupObj(updateObject));
    };

    const backHandler = () => {
        closeCreateError();
        let updateObject = {};
        setShowSelectDeviceModal(false);
        setShowEditScheduleModal(false);
        setShowAddExceptionModal(false);
        setShowAddKeywordModal(false);
        dispatch(updateCreateDeviceGroupObj(updateObject));
    }

    const onSelectDeviceModalChange = (flag) => {
        if (!flag) {
            setShowSelectDeviceModal(false);
        }
    }
    //Set Schedule popup section
    const onEditScheduleModalChange = (flag) => {
        if (!flag) {
            setShowEditScheduleModal(false);
        }
    }
    const onAddExceptionModalChange = (flag) => {
        if (!flag) {
            setShowAddExceptionModal(false);
        }
    }
    const onAddKeywordModalChange = (flag) => {
        if (!flag) {
            setShowAddKeywordModal(false);
        }
    }

    const skipHandler = () => {
        let updateObject = {};
        updateObject.schedule = {};
        updateObject.exception = [];
        dispatch(updateCreateDeviceGroupObj(updateObject));
        setShowEditScheduleModal(false);
        setShowAddKeywordModal(false);
        setShowAddExceptionModal(false);
    }

    const createHandler = () => {
        closeCreateError();
        let payloadData = {
            hashedMtn: hashedMtn,
            groupName: deviceGroupName,
            devices: selectedDevices
        };
        if (deviceGroupData?.schedule?.daysOfTheWeek?.length > 0) {
            payloadData = {
                ...payloadData,
                daysOfTheWeek: deviceGroupData?.schedule?.daysOfTheWeek,
                startTimeHour: deviceGroupData?.schedule?.startTimeHour,
                startTimeMinute: deviceGroupData?.schedule?.startTimeMinute,
                startTimePeriod: deviceGroupData?.schedule?.startTimeAmPm,
                stopTimeHour: deviceGroupData?.schedule?.stopTimeHour,
                stopTimeMinute: deviceGroupData?.schedule?.stopTimeMinute,
                stopTimePeriod: deviceGroupData?.schedule?.stopTimeAmPm
            }
            if (websiteData?.length > 0) {
                payloadData = { ...payloadData, websiteExceptions: websiteData?.map(site => ({ type: 0, value: site })) }
            }
            if (keywordData?.length > 0) {
                payloadData = { ...payloadData, keywordExceptions: keywordData?.map(site => ({ type: 1, value: site })) }
            }
        }
        dispatch(createNewDeviceGroup(payloadData, redirectToAllDevicesList, () => setShowCreateError(true)));
    }

    const initLoad = () => {
        const reviewContentsSection = getSectionById(deviceGroupSections, 'reviewGroupSection')?.contents;
        const setNameSection = getContentByComponentId(reviewContentsSection, 'deviceGroupNameSummaryPane');
        let devicesDataSection = {};
        if (sourceComp === 'allDevicesList') {
            const allDevicesListSections = allDevicesList?.sections;
            devicesDataSection = getSectionById(allDevicesListSections, 'connectedDevicesSection');
        } else {
            devicesDataSection = setNameSection;
        }
        const devicesData = devicesDataSection?.data?.connectedDevices;;
        setDevices(devicesData);

        // Page Headers
        setPageHeaderData(createItemKeyValObj(createDeviceGroupAPIData?.pageAttributes));

        // Cancel Modal Section
        const cancelModalSection = getSectionById(deviceGroupSections, 'createDeviceGroupModalSection');
        const cancelModalContent = getContentByComponentId(cancelModalSection?.contents, 'cancelGroupCreationModal');
        setCancelModalData(createItemKeyValObj(cancelModalContent?.items));

        // Remove Modal Section
        const removeModalContent = getContentByComponentId(cancelModalSection?.contents, 'removeDeviceModal');
        const removeModalObj = createItemKeyValObj(removeModalContent?.items);
        setRemoveModalData({
            title: removeModalObj?.removeDeviceHeading, body: removeModalObj?.removeDeviceText,
            confirmBtn: removeModalObj?.removeDeviceConfirmButton?.value,
            cancelBtn: removeModalObj?.removeDeviceCancelButton?.value
        },);

        // Remove website modal section
        const removeWebsiteModalObj = createItemKeyValObj(getContentByComponentId(cancelModalSection?.contents, 'removeWebsiteModal')?.items);
        const removeAllWebsitesModalObj = createItemKeyValObj(getContentByComponentId(cancelModalSection?.contents, 'removeAllWebsitesModal')?.items);
        setRemoveWebsiteModalData({
            website: {
                title: removeWebsiteModalObj?.removeWebsiteHeading,
                confirmBtn: removeWebsiteModalObj?.removeWebsiteConfirmButton?.value,
                cancelBtn: removeWebsiteModalObj?.removeWebsiteCancelButton?.value
            },
            allWebsites: {
                title: removeAllWebsitesModalObj?.removeAllWebsitesHeading,
                confirmBtn: removeAllWebsitesModalObj?.removeAllWebsitesConfirmButton?.value,
                cancelBtn: removeAllWebsitesModalObj?.removeAllWebsitesCancelButton?.value
            }
        });

        //Remove keyword modal section
        const removeKeywordModalObj = createItemKeyValObj(getContentByComponentId(cancelModalSection?.contents, 'removeKeywordModal')?.items);
        const removeAllKeywordModalObj = createItemKeyValObj(getContentByComponentId(cancelModalSection?.contents, 'removeAllKeywordsModal')?.items);
        
        setRemoveKeywordModalData({
            one: {
                title: removeKeywordModalObj?.removeKeywordHeading,
                confirmBtn: removeKeywordModalObj?.removeKeywordConfirmButton?.value,
                cancelBtn: removeKeywordModalObj?.removeKeywordCancelButton?.value
            },
            all: {
                title: removeAllKeywordModalObj?.removeAllKeywordsHeading,
                confirmBtn: removeAllKeywordModalObj?.removeAllKeywordsConfirmButton?.value,
                cancelBtn: removeAllKeywordModalObj?.removeAllKeywordsCancelButton?.value
            }
        });

        // Set Name Component
        setGroupNamePageData(reviewPageData?.defaultValue);

        // Select Devices Component
        const selectDevicesSection = getSectionById(deviceGroupSections, 'selectDevicesSection');
        const selectDevicesContent = getContentByComponentId(selectDevicesSection?.contents, 'groupNameLeft');
        setSelectDevicesPageData(createItemKeyValObj(selectDevicesContent?.items));

        // Set Schedule Component
        const scheduleSection = getSectionById(deviceGroupSections, 'scheduleDowntimeSection');
        const scheduleContents = scheduleSection?.contents;
        const setScheduleContent = getContentByComponentId(scheduleContents, 'setScheduleComponent');
        const setScheduleSummaryContent = getContentByComponentId(scheduleContents, 'setScheduleSummaryPane');
        setSchedulePageData({ input: createItemKeyValObj(setScheduleContent?.items), summary: createItemKeyValObj(setScheduleSummaryContent?.items) });

        //AddWebsite Exception
        const websiteExceptionSection = getSectionById(deviceGroupSections, 'addExceptionsSection');
        const websiteExceptionContent = getContentByComponentId(websiteExceptionSection?.contents, 'addExceptionsComponent');
        setWebsiteExceptionPageData(createItemKeyValObj(websiteExceptionContent?.items));
        const websiteExceptionSummary = getContentByComponentId(websiteExceptionSection?.contents, 'addExceptionsSummaryPane');
        setWebsiteExceptionRight(createItemKeyValObj(websiteExceptionSummary?.items));

        //AddKeyword exception
        const keywordExceptionSection = getSectionById(deviceGroupSections, 'addKeywordsSection');
        const keywordExceptionContent = getContentByComponentId(keywordExceptionSection?.contents, 'addKeywordsComponent');
        setKeywordPageData(createItemKeyValObj(keywordExceptionContent?.items));
        

        // Create Error Notification
        const createDeviceGroupStaticSection = getSectionById(deviceGroupSections, 'createDeviceGroupStaticSection')?.contents;
        const deviceGroupErrorMessagesItems = getContentByComponentId(createDeviceGroupStaticSection, 'deviceGroupErrorMessages')?.items;

        // Review Component
        const reviewContents = getSectionById(deviceGroupSections, 'reviewGroupSection')?.contents;
        const reviewGroupName = getContentByComponentId(reviewContents, 'reviewGroupName');
        const reviewSelectedDevices = getContentByComponentId(reviewContents, 'reviewSelectedDevices');
        const reviewDowntimeSchedule = getContentByComponentId(reviewContents, 'reviewDowntimeSchedule');
        const reviewWebsiteExceptions = getContentByComponentId(reviewContents, 'reviewWebsiteExceptions');
        const reviewKeywordExceptions = getContentByComponentId(reviewContents, 'reviewKeywordExceptions');
        const reviewGroupButtons = getContentByComponentId(reviewContents, 'reviewGroupButtons');
        const reviewDefaultValue = getContentByComponentId(reviewContents, 'deviceGroupNameSummaryPane')?.items;
        setReviewPageData({
            name: createItemKeyValObj(reviewGroupName?.items),
            devices: createItemKeyValObj(reviewSelectedDevices?.items),
            schedule: createItemKeyValObj(reviewDowntimeSchedule?.items),
            exception: createItemKeyValObj(reviewWebsiteExceptions?.items),
            keyword: createItemKeyValObj(reviewKeywordExceptions?.items),
            buttons: createItemKeyValObj(reviewGroupButtons?.items),
            createError: getItemValue(deviceGroupErrorMessagesItems, 'createGroupErrorMessageRouter'),
            noDevicesError: getItemValue(deviceGroupErrorMessagesItems, 'reviewPageNoDevicesErrorMessage'),
            defaultValue: getItemValue(reviewDefaultValue,"groupNameInput")
        });
    };

    useEffect(() => {
        if (dataLoaded) initLoad();
    }, [createDeviceGroupAPIData]);

    useEffect(() => {
        if (!createDeviceGroupAPIFetching) dispatch(getCreateDeviceGroup({ source: sourceComp, hashedMtn: hashedMtn }));
    }, []);

    useEffect(() => {
        const disabledBtn = !deviceGroupName || deviceGroupName?.length > parseInt(groupNamePageData?.groupNameInput?.maximumCharacters)
        setCreateDisabled(disabledBtn || selectedDevices.length === 0);
    }, [deviceGroupName, selectedDevices]);

    useEffect(() => {
        const noDevices = selectedDevices.length === 0;
        setDevicesNextDisabled(noDevices);
        setShowNoDevices(noDevices);
    }, [selectedDevices]);

    useEffect(() => {
        setShowNoDevices(false);
        if (deviceGroupData?.name) setDeviceGroupName(deviceGroupData?.name);
        if (deviceGroupData?.devices) setSelectedDevices(deviceGroupData?.devices);
        if (deviceGroupData?.exception) setWebsiteData(deviceGroupData?.exception);
        if (deviceGroupData?.keyword) setKeywordData(deviceGroupData?.keyword);
    }, [deviceGroupData]);


    const removeWebsiteData = (index) => {
        setWebsiteData((prevExceptions) => prevExceptions?.filter((_, i) => i != index))
    }
    const removeAllExceptionData = () => {
        setWebsiteData([])
    }

    const removeKeywordData = (index) => {
        setKeywordData((prevKeyword) => prevKeyword?.filter((_, i) => i != index))
    }
    const removeAllKeywordData = () => {
        setKeywordData([])
    }

    const confirmRemoveWebsiteModal = () => {
        removeWebsiteData(showRemoveWebsiteModal);
        closeRemoveWebsiteModal();
    }
    const confirmRemoveKeywordModal = () => {
        removeKeywordData(showRemoveKeywordModal);
        closeRemoveKeywordModal();
    }

    const confirmRemoveAllWebsitesModal = () => {
        removeAllExceptionData();
        closeRemoveAllWebsitesModal();
    }
    const confirmRemoveAllKeywordsModal = () => {
        removeAllKeywordData();
        closeRemoveAllKeywordsModal();
    }

    return <>
        <Loader />
        {!createDeviceGroupAPIFetching && createDeviceGroupAPIData && Object.keys(createDeviceGroupAPIData).length > 0 && <>
            {showCancelModal && <CancelModal isOpen={showCancelModal} {...cancelModalData} onClose={closeCancelModal} confirmClick={cancelCreateDeviceGroup} />}
            {showRemoveModal && <RemoveModal isOpen={showRemoveModal} {...removeModalData} onClose={closeRemoveModal} confirmClick={confirmRemoveDevice} />}
            {showRemoveWebsiteModal && <RemoveModal isOpen={showRemoveWebsiteModal} {...removeWebsiteModalData?.website} onClose={closeRemoveWebsiteModal} confirmClick={confirmRemoveWebsiteModal} />}
            {showRemoveKeywordModal && <RemoveModal isOpen={showRemoveKeywordModal} {...removeKeywordModalData?.one} onClose={closeRemoveKeywordModal} confirmClick={confirmRemoveKeywordModal} />}
            {showRemoveAllWebsitesModal && <RemoveModal isOpen={showRemoveAllWebsitesModal} {...removeWebsiteModalData?.allWebsites} onClose={closeRemoveAllWebsitesModal} confirmClick={confirmRemoveAllWebsitesModal} />}
            {showRemoveAllKeywordsModal && <RemoveModal isOpen={showRemoveAllKeywordsModal} {...removeKeywordModalData?.all} onClose={closeRemoveAllKeywordsModal} confirmClick={confirmRemoveAllKeywordsModal} />}
            <div className='fwa-container new-device-group-container'>
                {showCreateError && <div className='device-group-create-api-error-notification-container'>
                    <Notification type='error' title={reviewPageData?.createError} disableFocus hideCloseButton />
                </div>}
                {showNoDevices && <div className='device-group-create-api-error-notification-container'>
                    <Notification type='error' title={reviewPageData?.noDevicesError} disableFocus hideCloseButton />
                </div>}
                <div className='edit-wifi-nav'>
                    <li className='breadcrumb-link' onClick={redirectToHome} data-testid='Home'>Home /</li>
                    <li className='breadcrumb-link' onClick={redirectToAllDevicesList}>All devices /</li>
                    <li className='edit-wifi-nav-select'>{pageHeaderData?.breadCrumbDeviceGroup}</li>
                </div>
                <div className={'device-group-header ' + 'review'}>
                    { <>
                            <h1>{pageHeaderData?.pageTitle}</h1>
                            <h5>{pageHeaderData?.subTitle}</h5>
                        </>}
                </div>
                {maxDevices && <div className='notification-container'>
                    <Notification type='info' title='You’ve reached the maximum amount of devices per group.' onCloseButtonClick={() => setMaxDevices(false)} />
                </div>}
                <div className='device-group-body-container'>
                {showSelectDeviceModal && (
                            <Modal className="" opened={showSelectDeviceModal} onOpenedChange={onSelectDeviceModalChange}>
                                <ModalTitle>
                                    <div className="create-device-group-cancel-modal-title">{selectDevicesPageData?.selectDevicesEditModePageHeading}</div>
                                </ModalTitle>
                                <ModalBody>
                                    <div className='device-group-body-container manage-group-body'>
                                        <div className='left-pane'>
                                            <SelectDevices currentPage={'selectDevices'} title={selectDevicesPageData?.selectDevicesHeading} subtitle={selectDevicesPageData?.selectDevicesText}
                                                sortLabel={selectDevicesPageData?.sortDevices?.value} sortOptions={selectDevicesPageData?.sortDevices?.listItems?.split(',')}
                                                searchLabel={selectDevicesPageData?.searchDevices} devices={devices} devicesSelected={selectedDevices}
                                                deviceGroupName={deviceGroupName} assignToNewGroup={selectDevicesPageData?.selectDevicesSubText?.itemValueOnSelect}
                                                existingGroupName={selectDevicesPageData?.selectDevicesSubText?.value} back={selectDevicesPageData?.selectDevicesCancelButton?.value} backHandler={backHandler}
                                                save={selectDevicesPageData?.selectDevicesAddButton?.value} saveHandler={(devicesSelected) => nextHandler(devicesSelected, 0)} saveDisabled={devicesNextDisabled}
                                                setMaxDevices={setMaxDevices} updateSelectedDevices={setSelectedDevices}
                                                unassignValue={selectDevicesPageData?.selectDevicesUnassignedSubText?.value}
                                                unassignToNewGroup={selectDevicesPageData?.selectDevicesUnassignedSubText?.itemValueOnSelect}
                                            />
                                        </div>
                                    </div>
                                </ModalBody>
                            </Modal>
                        )}
                        {showEditScheduleModal && (
                            <Modal className="" opened={showEditScheduleModal} onOpenedChange={onEditScheduleModalChange}>
                                <ModalTitle>
                                    <div className="create-device-group-cancel-modal-title">{schedulePageData?.input?.setScheduleHeading?.value}</div>
                                </ModalTitle>
                                <ModalBody>
                                <div className='device-group-body-container manage-group-body'>
                                <div className='left-pane'>
                                            <SetSchedule
                                                title={schedulePageData?.input?.setScheduleHeading?.edit}
                                                subtitle={schedulePageData?.input?.setScheduleDesc} currentPage={'setSchedule'} selectDaysTitle={schedulePageData?.input?.setScheduleDayChips?.value}
                                                days={schedulePageData?.input?.setScheduleDayChips?.mdotValues?.split(',')} startTimeTitle={schedulePageData?.input?.startTimeDropDown?.value}
                                                endTimeTitle={schedulePageData?.input?.endTimeDropDown?.value} clearSchedule={schedulePageData?.input?.clearSchedule}
                                                back={schedulePageData?.input?.setScheduleCancelButton?.value} backHandler={backHandler} 
                                                 deviceGroupData={deviceGroupData} nextHandler={(scheduleData) => nextHandler(scheduleData, 1)} skipHandler={skipHandler}
                                                next={schedulePageData?.input?.setScheduleSetButton?.value}
                                                skip={schedulePageData?.input?.setScheduleSkipButton?.value}
                                            />
                                        </div>
                                    </div>
                                </ModalBody>
                            </Modal>
                        )
                        }
                        {showAddExceptionModal &&
                            <Modal className="" opened={showAddExceptionModal} onOpenedChange={onAddExceptionModalChange}>
                                <ModalTitle>
                                    <div className="create-device-group-cancel-modal-title">{websiteExceptionPageData?.addExceptionsHeading?.value}</div>
                                </ModalTitle>
                                <ModalBody>
                                    <div className='device-group-body-container manage-group-body'>
                                        <div className='left-pane'>
                                            <AddException
                                                subtitle={websiteExceptionPageData?.addExceptionsDesc?.value} subheader={websiteExceptionPageData?.addExceptionsText} inputLabel={websiteExceptionPageData?.addExceptionsInput?.value}
                                                helperText={websiteExceptionPageData?.addExceptionsInput?.helperText} removeAll={websiteExceptionPageData?.removeAllExceptionsButton}
                                                backHandler={backHandler} back={websiteExceptionPageData?.addExceptionsCancelButton?.value} nextHandler={(sites) => nextHandler(sites, 2)} skip={websiteExceptionPageData?.addExceptionsSaveButton?.value}
                                                next={websiteExceptionPageData?.addExceptionsSaveButton?.value} errorText={websiteExceptionPageData?.addExceptionsInput?.helperTextOnError} websitesData={deviceGroupData?.exception || []}
                                            />
                                        </div>
                                    </div>
                                </ModalBody>

                            </Modal>
                        }
                    {showAddKeywordModal
                        && 
                            <Modal className="" opened={showAddKeywordModal} onOpenedChange={onAddKeywordModalChange}>
                                <ModalTitle>
                                    <div className="create-device-group-cancel-modal-title">{keywordPageData?.addKeywordsHeading}</div>
                                </ModalTitle>
                                <ModalBody>
                                    <div className='device-group-body-container manage-group-body'>
                                        <div className='left-pane'>
                                            <Addkeyword
                                                isManage
                                                subtitle={keywordPageData?.addKeywordsDesc?.value} inputLabel={keywordPageData?.addKeywordsInput?.value}
                                                errorText={keywordPageData?.addKeywordsInput?.helperTextOnError} removeAll={keywordPageData?.removeAllKeywordsLink}
                                                backHandler={() => setShowAddKeywordModal(false)} back={keywordPageData?.addKeywordsCancelButton?.value} nextHandler={(sites) => nextHandler(sites,4)} skip={keywordPageData?.addKeywordsSaveButton?.value}
                                                next={keywordPageData?.addKeywordsSaveButton?.value} keywordData={deviceGroupData?.keyword || []}
                                            />
                                        </div>
                                    </div>
                                </ModalBody>

                            </Modal>

                        }
                    <div className='left-pane'>
                    <RightPane deviceGroupData={deviceGroupData}  deviceGroupName={deviceGroupName} groupNamePageData={reviewPageData?.defaultValue}
                        schedulePageData={schedulePageData} devices={devices} websiteExceptionRight={websiteExceptionRight} />
                        <ReviewDetails
                            editNameLabel={reviewPageData?.name?.reviewGroupNameInput?.value} nameMaxCharacters={reviewPageData?.name?.reviewGroupNameInput?.maximumCharacters}
                            nameError={deviceGroupName?.length > parseInt(reviewPageData?.name?.reviewGroupNameInput?.maximumCharacters)} nameChangeHandler={(e) => setDeviceGroupName(e?.target?.value)}
                            deviceTitle={reviewPageData?.devices?.reviewSelectedDevicesHeading?.replace(/##DEVICES_NUMBER##/,selectedDevices.length )} removeDevice={reviewPageData?.devices?.removeDeviceLink} addDevice={reviewPageData?.devices?.addDevicesLink}
                            addDeviceHandler={addDevice} noDevicesText={reviewPageData?.devices?.selectedDevicesEmptyStateText} scheduleTitle={reviewPageData?.schedule?.reviewDowntimeScheduleHeading}
                            scheduleDays={['Su','Mo','Tu','We','Th','Fr','Sa']} editSchedule={reviewPageData?.schedule?.scheduleDowntimeLink.value}
                            noScheduleText={reviewPageData?.schedule?.downtimeScheduleEmptyStateText} setSchedule={reviewPageData?.schedule?.scheduleDowntimeLink?.itemValueOnEmpty}
                            websiteTitle={reviewPageData?.exception?.reviewWebsiteExceptionsHeading} websites={websiteData} removeWebsite={reviewPageData?.exception?.removeExceptionLink}
                            addException={reviewPageData?.exception?.addExceptionLink} addExceptionHandler={addException} removeAllWebsite={reviewPageData?.exception?.removeAllExceptionsLink}
                            addKeyword={reviewPageData?.keyword?.addKeywordExceptionLink}
                            addKeywordHandler={addKeyword}
                            keywords={keywordData}
                            keywordTitle={reviewPageData?.keyword?.reviewKeywordExceptionsHeading}
                            setShowRemoveKeywordModal={setShowRemoveKeywordModal}
                            setShowRemoveAllKeywordModal={setShowRemoveAllKeywordsModal}
                            removeKeyword={reviewPageData?.keyword?.removeKeywordExceptionLink}
                            removeAllKeyword={reviewPageData?.keyword?.removeAllKeywordExceptionsLink}
                            noKeywordScheduleText={reviewPageData?.keyword?.keywordExceptionsWithoutScheduleText} noKeywordText={reviewPageData?.keyword?.keywordExceptionsEmptyStateText}
                            noWebsiteScheduleText={reviewPageData?.exception?.websiteExceptionsWithoutScheduleText} noWebsiteText={reviewPageData?.exception?.websiteExceptionsEmptyStateText}
                            deviceGroupName={deviceGroupName} selectedDevices={selectedDevices} devices={devices} openRemoveModal={openRemoveModal} editScheduleHandler={editSchedule}
                            setShowRemoveWebsiteModal={setShowRemoveWebsiteModal} setShowRemoveAllWebsitesModal={setShowRemoveAllWebsitesModal} />
                        <div className='device-group-buttons'>
                            <Button use='primary' onClick={createHandler} disabled={createDisabled} >{reviewPageData?.buttons?.reviewGroupCreateButton?.value}</Button>
                            <Button use='secondary' onClick={openCancelModal}>{reviewPageData?.buttons?.reviewGroupCancelButton?.value}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>}
    </>;
}

export default CreateDeviceGroup;
