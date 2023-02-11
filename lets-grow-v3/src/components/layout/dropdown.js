import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";


const Dropdown = ({ activatorText, items = [] }) => {
    const [isOpen, setIsOpen] = useState(false)
    const activatorRef = useRef()
    const listRef = useRef()

    const handleClickOutside = (event) => {
        if (listRef.current.contains(event.target) || activatorRef.current.contains(event.target)) {
            return
        }
        setIsOpen(false)
    }
    useEffect(() => {
        if (isOpen) {
          document.addEventListener("mousedown", handleClickOutside)
        } else {
          document.removeEventListener("mousedown", handleClickOutside)
        }
        // clean up on unmount
        return function cleanup() {
          document.removeEventListener("mousedown", handleClickOutside)
        }
      }, [isOpen])
    return (
        <StyledWrapper
            className="wrap link dim dark-gray f6 dib mb2 mb0-l w-100 w-auto-ns mr3 mr4-ns"
            
        >
            <button
                ref={activatorRef}
                className="activator center pa0"
                onClick={e => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                  }}
            >
                { activatorText + '' }
            </button>
            <ul 
                aria-label="submenu"
                ref={listRef}
                className={
                    `itemList ` +
                    (isOpen ? 'active' : null)
                }
            >
                {items.map((item, index) => {
                    return <Link 
                            style ={{display:"block", textDecoration:"none", textTransform: "uppercase"}}
                            key={index} 
                            to={`/`+ item.url}>
                         {item.text}
                    </Link>
                })}
            </ul>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`

.wrap {
  position: relative;
}
.activator {
  align-items: center;
  background-color: inherit;
  max-width: 120px;
  color: #333;
  font-size: 0.875rem;
  font-family: 'avenir next', avenir,
  sans-serif;
  line-height: 1.5;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.itemList {
  color: #333;
  font-size: 0.875rem;
  font-family: 'avenir next', avenir,
  sans-serif;
  display: none;
  margin-top: 0.5rem;
  min-width: 120px;
  padding: 0;
  text-align: center;


  @media screen and (min-width: 35em){
    position: absolute;
    text-align: left;
  }



  > * {
    font-size: 0.75rem;
    padding: 0.25rem;
    border-bottom: solid 0.2px black;
    :hover{
      background: #D3D3D3;
    }
    :link{
      color: #333;
    }
    :visited{
      color: #333;
    }

    :focus{
      color:#333;
    }

   
  }

 
  &.active {
      display: block;
  }
  
}

`

export default Dropdown