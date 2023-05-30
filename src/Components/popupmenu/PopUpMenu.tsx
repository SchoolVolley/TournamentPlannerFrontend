import React, {ReactNode} from 'react';
import "./popupmenu.css"
import CSS from 'csstype'
import {GrClose} from "react-icons/gr";

interface Props {
    children?: ReactNode,
    width: number,
    height: number,
    dropShadow: boolean,
    onClose: () => void
}

const PopUpMenu: React.FC<Props> = ({children, height, width, dropShadow,onClose}) => {

    let styleOuter: CSS.Properties = {}
    if (dropShadow) {
        styleOuter = {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }
    } else {
        styleOuter = {
            backgroundColor: 'none'
        }
    }

    const styleInner: CSS.Properties = {
        height: height + 'rem',
        width: width + 'rem',
        marginLeft: 'calc(50vw - ' + width / 2 + 'rem)',
        marginTop: 'calc(50vh - ' + height / 2 + 'rem)'
    }
    const clickOutside = () => {

    }

    return (
        <div className="popupmenu-container-outer" style={styleOuter}>
            <div className="popupmenu-container" style={styleInner}>
                <div className="popupmenu-close">
                    <GrClose onClick={onClose} className="popupmenu-close-icon"></GrClose>
                </div>
                {children}
            </div>
        </div>
    );
};

export default PopUpMenu;
