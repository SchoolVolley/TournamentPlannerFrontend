import React, {ReactNode} from 'react';
import "./popupmenu.css"
import CSS from 'csstype'

interface Props {
    children?: ReactNode,
    width:number,
    height:number,
    dropShadow: boolean
}
const PopUpMenu:React.FC<Props> = ({children,height,width,dropShadow}) => {

    let styleOuter:CSS.Properties = {}
    if (dropShadow) {
         styleOuter = {
            backgroundColor:  'rgba(0, 0, 0, 0.7)',
        }
    }
    else {
        styleOuter ={
            backgroundColor: 'none'
        }
    }

    const styleInner:CSS.Properties ={
        height: height+'rem',
        width: width+'rem',
    }

    return (
        <div className="popupmenu-container-outer">
            <div className="popupmenu-container">
                {children}
            </div>
        </div>
    );
};

export default PopUpMenu;
