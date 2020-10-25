import styled from "styled-components"

const HamburgerMenuIconWrapper = styled.div`
    z-index: 9;
    div {
        width: 23px;
        height: 15px;
        position: relative;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.5s ease-in-out;
        -moz-transition: 0.5s ease-in-out;
        -o-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        span {
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            background: #2f363d;
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: 0.25s ease-in-out;
            -moz-transition: 0.25s ease-in-out;
            -o-transition: 0.25s ease-in-out;
            transition: 0.25s ease-in-out;

            &:nth-child(1) {
                top: 0px;
            }

            &:nth-child(2) {
                top: 6px;
            }

            &:nth-child(3) {
                top: 12px;
            }
        }

        &.open {
            span {
                &:nth-child(1) {
                    top: 6px;
                    -webkit-transform: rotate(135deg);
                    -moz-transform: rotate(135deg);
                    -o-transform: rotate(135deg);
                    transform: rotate(135deg);
                }

                &:nth-child(2) {
                    opacity: 0;
                    left: -60px;
                }

                &:nth-child(3) {
                    top: 6px;
                    -webkit-transform: rotate(-135deg);
                    -moz-transform: rotate(-135deg);
                    -o-transform: rotate(-135deg);
                    transform: rotate(-135deg);
                }
            }
        }
    }

    
`


function HamburgerMenuIcon(props) {
    return (
        <HamburgerMenuIconWrapper>
            <div
                className={`${props.isOpen ? "open" : ""}`}
                onClick={props.toggleHeader}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </HamburgerMenuIconWrapper>
    )
}
export default HamburgerMenuIcon