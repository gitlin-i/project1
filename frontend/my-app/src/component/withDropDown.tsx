import React, { useState } from 'react'
import styled from 'styled-components';


interface DropDownProps {
    isOpenDropDownMenu: boolean;
}
const Div = styled.div`
    position: relative;
`
const DropDownMenu = styled.div<DropDownProps>`
    display: ${({isOpenDropDownMenu}) => (isOpenDropDownMenu ? "block" : "none")};
    width:16rem;
    position:absolute;
    top:4rem;
    right:0px;
    box-shadow: 0px 6px 10px #e3e1e1;
    border-radius: 0.5rem;
    background-color: white;
    
`
const DropDownMenuContainer = styled.ul`
    padding: 0.5rem 0  0.5rem 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:0;
    
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
                <Div >
                    <WrappedComponent onClick={handleToggle} {...(rest as P) }></WrappedComponent>
                    <DropDownMenu isOpenDropDownMenu={isOpenDropDownMenu}>
                        <DropDownMenuContainer >
                            {Items}
                        </DropDownMenuContainer>
                    </DropDownMenu>
                </Div>
            )
        }
    }
    
    
    
    
    
    
    
    
}

export default withDropDown;
