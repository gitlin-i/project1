import React, { useState } from 'react'
import styled from 'styled-components';


interface DropDownProps {
    isOpenDropDownMenu: boolean;
}

const DropDownMenu = styled.div<DropDownProps>`
    display: ${({isOpenDropDownMenu}) => (isOpenDropDownMenu ? "block" : "none")};
    width:16rem;
    position:absolute;
    z-index: 13;
    box-shadow: 0px 6px 10px #e3e1e1;
    border-radius: 1rem;
`
const DropDownMenuContainer = styled.ul`
    padding: 0.5rem 0  0.5rem 0;
    display:relative;
    flex-direction:column;
    align-items:center;
    
`

const withDropDown  = <P extends object>(
    WrappedComponent : React.ComponentType<P>,
    ) => {
    return function withMenuItem(items : () => React.ReactNode) {
        
        return function WithDropDown(props: P  ) {
            const [isOpenDropDownMenu , setisOpenDropDownMenu] = useState(false)
            const Items = items()
            const handleToggle = () => {
                setisOpenDropDownMenu(!isOpenDropDownMenu)
            }
            const {  ...rest} = props;
            return (
                <div>
                    <WrappedComponent onClick={handleToggle} {...(rest as P) }></WrappedComponent>
                    <DropDownMenu isOpenDropDownMenu={isOpenDropDownMenu}>
                        <DropDownMenuContainer>
                            {Items}
                        </DropDownMenuContainer>
                    </DropDownMenu>
                </div>
            )
        }
    }
    
    
    
    
    
    
    
    
}

export default withDropDown;
