import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loader from '../loader/loader';
import './HomeInternet.css';
import { Button } from '@vds/buttons';
import { useSelector, useDispatch } from "react-redux";
import { getEquipmentList } from '../../actions';
import common from '../../../../../shared/utilities/util';
import Icon from "@vds/icons";
import { Notification } from '@vds/notifications';


const Header = styled.div`
font-size: 32px;
font-weight: 300;
line-height: 48px;
letter-spacing: 0.25px;
text-align: left;
`;
const SkuText = styled.p`
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0.5px;
text-align: left;
color: #6F7171;
`;

const EquipmentSelection = (props) => {
    const queryParams = new URLSearchParams(props.location.search);
    const flowType = queryParams.get('flowType');
    const dispatch = useDispatch();
    //const equipmentListFetching = useSelector(state => state.Router.isEquipmentListFetching);
    const equipmentData = useSelector(state => state.Router.equipmentList);
    const equipmentSections = equipmentData?.sections || [];
    const dataLoaded = Array.isArray(equipmentSections) && equipmentSections?.length > 0;
    let HeaderText = "";

    const staticDataSection = common.getSectionById(equipmentSections, "staticDataSection");
    const staticDataSectionData = staticDataSection?.data;
    const equipmentList = staticDataSectionData?.equipmentList || [];
   const isError = staticDataSectionData?.errorCode === "00" ? false : true;

    const equipmentContentItems = common.getContentByComponentId(staticDataSection?.contents, "equipmentContent")?.items;
    const selectText = common.getItemValue(equipmentContentItems, "selectLineButton");
    const errorBannerText = common.getItemValue(equipmentContentItems, "genericErrorMessage");
    const staticDataSectionActions = staticDataSection?.actions;
    const routerlandingLink = common.getActionByKey(staticDataSectionActions, "landingPageAction");
    const dataUsageDashboardLink = common.getActionByKey(staticDataSectionActions, "dataUsageDashboardPageAction");
 


    const navigateTo = (path, data, search) => {
        const navObj = { pathname: path };
        if (data) navObj.state = data;
        if (search) navObj.search = search;
        props?.history?.push(navObj);
    };

    const deviceName = ((nickName, officalName) => {
        if (nickName) return nickName
        else return officalName
    })
    const selectHandler = (data) => {
        if(flowType ==="dud")
        {
            navigateTo(dataUsageDashboardLink?.actionValue,{ hashedMtn: data.hashedMtn},false);
        }
        else{
            navigateTo(routerlandingLink?.actionValue,{ encMtn: data.encMtnAES},false);

        }
   }

    if (dataLoaded) {
        HeaderText = common.getItemValue(equipmentData?.pageAttributes, 'pageTitle');
    }
    useEffect(() => {
        dispatch(getEquipmentList(flowType));
    }, [flowType]);

    return (
        <>
        <Loader />
           {isError && <Notification type="error" title={errorBannerText} fullBleed={true} hideCloseButton={true} inline={false} disableFocus={true} /> }

           {!isError && <div className="fwa-container">
                <Header>{HeaderText}</Header>
                <div className='internetTiles online repeatTwoPerRow'
                >

                    {Array.isArray(equipmentList) && equipmentList.map(equipmentObj =>
                        <div className='detailHead '>
                            <div className='image-container'><img src={equipmentObj?.deviceImage} /></div>
                            <div className='titleTop'>
                                <div className='equipmentName'>{deviceName(equipmentObj?.nickName, equipmentObj?.equipmentName)}</div>
                                <p className='textSm'>{equipmentObj?.sku}</p> <br />
                                <div className='addressLine'>
                                    {equipmentObj?.lineAddress?.addressLine1}, <br />
                                    {equipmentObj?.lineAddress?.addressLine2}
                                </div>
                            </div>
                            <div className='btn-footer'>
                                <Button data-testid="equipment-select" className="btn-Select" size="large" disabled={false} use="primary" onClick={() => selectHandler(equipmentObj)}>{selectText} </Button>
                            </div>
                        </div>
                    )}
                </div>

            </div>}
        </>
    );
}
export default EquipmentSelection;
