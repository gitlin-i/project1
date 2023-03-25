import React, { useState, useEffect } from 'react'
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
    box-shadow: 0px 0px 6px #e3e1e1;
    border-radius: 0.5rem;
    background-color: white;
    z-index:10;
    
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
            const handleToggle = (event : React.MouseEvent) => {
                event.stopPropagation();
                setisOpenDropDownMenu(!isOpenDropDownMenu)
            }
            useEffect(() => {
                const element: HTMLElement | null  = document.getElementById("Drop") 

                const handleOutSideClick = (event :MouseEvent) => { 
                    
                    if(!(event.target && element && element.contains(event.target as Node))){
                        setisOpenDropDownMenu(false);
                    }
                }

                if (isOpenDropDownMenu){
                    window.addEventListener("click",handleOutSideClick)
                }
              return () => {
                window.removeEventListener("click",handleOutSideClick)
              }
            }, [isOpenDropDownMenu])
            const {  ...rest} = props;
            return (
                <Div >
                    <WrappedComponent onClick={handleToggle} {...rest }></WrappedComponent>
                    <DropDownMenu isOpenDropDownMenu={isOpenDropDownMenu} id="Drop" >
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
