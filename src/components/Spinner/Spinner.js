import React from "react";
import styled from "styled-components";

//*********************************************************
// Styles
//*********************************************************
export const SpinnerView = styled.div`
    height: 100vh;
    display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const StyledSpinner = styled.svg`
    animation: rotate 2s linear infinite;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;

    & .path {
        stroke: #5652BF;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`;

//*********************************************************
// Component
//*********************************************************
const Spinner = ({...rest}) => (
    <SpinnerView>
        <StyledSpinner viewBox="0 0 50 50">
            <circle
                {...rest}
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
            />
        </StyledSpinner>
    </SpinnerView>
);

export default Spinner;