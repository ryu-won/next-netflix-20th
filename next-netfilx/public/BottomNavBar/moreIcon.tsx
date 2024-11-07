import React from "react";
import { IconProps } from "./IconPropsDto";

const moreIcon: React.FC<IconProps> = ({ color = "white" }) => (
    <svg width="24" height="24" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0V3.4H21V0H0ZM0 6.8V10.2H21V6.8H0ZM0 13.6V17H21V13.6H0Z" fill={color}/>
    </svg>

);

export default moreIcon;