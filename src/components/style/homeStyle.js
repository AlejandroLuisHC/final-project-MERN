import styled from "styled-components";
import { color, device } from "./utils/styleConstants";
import { ButtonSecondaryStyle } from "../style/generalStyle"
import { Link } from "react-router-dom";

/* DESKTOP DIV HERO */
export const DivHero = styled.div`
    display: none;
    @media ${device.desktop}{
        display: block; 
    } 
`
/* MOBILE DIV WELCOME NAV BUTTONS  */
export const DivMobileButtons = styled.div`
    margin: 30px 0;
    @media ${device.desktop}{
        display: none; 
    } 
`
export const DivHomeStyle = styled.div`
    padding: 20px 20px 40px 20px;
    width: 100%;
    @media ${device.desktop}{
        padding: 0 0 40px 0;
    } 
`
export const H1Welcome = styled.h1`
    margin-top: 30px;
    font-size:20px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    @media ${device.desktop}{
        font-size:40px;
    } 
`
/* DIV CARDS */

export const DivFavAndPlaylist = styled.div`
    display: flex;
    @media ${device.desktop}{
        display:none; 
    } 
`
export const DivBoxStyle = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom:25px;
`
/* DIV FLEX */
export const DivFlex = styled.div`
    display:flex;
    justify-content:space-between;
`

/* CARDMUSIC */
export const DivDisplayMobile = styled.div`
    display:block;
    @media ${device.desktop}{
        display:none; 
    } 
`
export const DivDisplayDesktop = styled.div`
        display:none;
    @media ${device.desktop}{
        display:block; 
    }
`
   
export const DivStyle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
`
export const DivElementTitles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    margin-bottom: 10px;
`
export const LinkHome = styled(Link)`
    color: ${color.primaryWhite};
    text-decoration: none;
    font-size: 14px;
    &:hover{
        color: ${color.primaryYellow}
    }
`
export const DivSlider = styled.div`
    display: flex;
    width: calc(100vw - 40px );
    height: 196px;
    overflow: auto;
    &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    @media ${device.desktop}{
        width: calc(100vw - 200px);
        height: 291px;  
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
`
export const DivSliderUser = styled.div`
    display:flex;
    width: calc(100vw - 40px );
    height: 155px;
    cursor:pointer;
    overflow: auto;
    gap:20px;
    @media ${device.desktop}{
        width: calc(100vw - 200px);
        height: 235px;  
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
`
export const DivSliderEvents = styled.div`
    display:flex;
    width: calc(100vw - 40px );
    height: 239px;
    cursor:pointer;
    overflow: auto;
    gap:20px;
    @media ${device.desktop}{
        width: calc(100vw - 200px);
        height: 305px;  
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
`

export const DivSliderEvent = styled.div`
    display:none;
    @media ${device.desktop}{
        width: calc(100vw - 200px);
        height: 285px;  
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #3D3D3D77;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: #353535;
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.secondaryBlack};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
`

export const DivCardUser = styled.div`
    position: relative;
    min-width: 140px; 
    max-width: 140px;
    overflow: hidden ;
    @media ${device.desktop}{
        min-width: 220px;
        max-width: 220px;
    } 
`
export const DivCardEvent = styled.div`
    @media ${device.desktop}{
        min-width: 420px;
        height: 300px;
    } 
`

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 140px;
    height: 190px;
    margin-right: 20px;
    background: hsla(0, 0%, 100%, 0.02);
    border-radius: 20px;
    cursor: pointer;
    transition: 300ms;
    &:hover{
        background: rgba(255, 255, 255, .2);
    }
    @media ${device.desktop}{
        min-width: 220px;
        height: 270px;
    } 
`
export const DivCardUsersFol = styled.div`
    display:flex;
`

export const DivPicLists = styled.div`
    display: flex;
    padding: 15px 15px 0 15px;
    justify-content: center;
    align-items: center;
`
export const DivInfoLists = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 15px 15px 15px 15px;
    justify-content: center;
    gap: 7px;
`

/* HERO TITLES */
export const DivHeroTitles = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15vw;
    height: 100%;
    justify-content: center;
`
export const H2StyleHero = styled.h2`
    margin: 0 auto;
    color: ${color.primaryWhite};
    text-transform: uppercase;
    left:100px;
    width: 100%;
    font-size: 2.5em;
    text-shadow: 1px 1px 2px black, 0 0 20px black, 0 0 4px black;
    transition: 300ms;
    @media (max-height: ${'700px'}) {
        font-size: 2em;
    }
`
export const H4StyleHero = styled.h4`
    width: 100%;
    font-size: 1.25em;
    text-shadow: 1px 1px 2px black, 0 0 20px black, 0 0 4px black;
    @media (max-height: ${'700px'}) {
        display: none;
    }
`
export const H6StyleHero = styled.h6`
    font-size:0.80rem;
    font-weight:700;
   
   
    @media ${device.desktop}{
        font-size:1rem;
    }
`
export const PStyleHero = styled.p`
    font-size:0.60rem;

    @media ${device.desktop}{
        font-size:0.87rem;
    }
`

export const DivHomeCarousels =styled.div`
    display:flex;
    flex-direction:column;
    gap:30px;
`

/* BUTTONS  */
export const DivButtonsAction = styled.div`
    display: flex;
    justify-content: space-between;
  
`
export const BtnAction = styled(ButtonSecondaryStyle)`
    width:50%;
    margin: 10px 10px;
`
export const ButtonLogoutStyle = styled(ButtonSecondaryStyle)`
    margin-left: 20px;
    width: 110px;
    height: 30px;
`


/* IMAGE  */
export const ImgCards = styled.img`
    width: 90px;
    height: 90px;
    display: flex;
    border-radius: 10px;
    transition: 300ms;
    &:hover{
        border-radius: 50%;
        /* transform: rotate(360deg); */
    }
    @media ${device.desktop}{
        width: 180px;
        height: 180px;
        border-radius: 15px;
    } 
`
export const ImgAvatarProfile = styled.img`
    width: 50px;
    height: 50px;
    border-radius:50px;
    @media ${device.desktop}{
        display:none;
    } 
`

export const ImgAvatarUser = styled.img`
    min-width: 140px;
    max-width:140px;
    object-fit:cover;
    height: 140px;
    border-radius: 50%;
    transition: 300ms;
    @media ${device.desktop}{
        min-width: 220px;
        max-width:220px;
        height: 220px;
    } 
    &:hover{
        border-radius:15px;
    }
`
export const H3NameUser = styled.h3`
    font-size: 24px;
    position: absolute;
    left: 0;
    top: 90px;
    text-shadow: 1px 1px 2px black, 0 0 20px black, 0 0 4px black;
    @media ${device.desktop}{
        font-size: 34px;
        left: 0;
        top: 140px;
    } 
`
export const H4NameUser = styled.h4`
    font-size: 16px;
    position: absolute;
    left: 5px;
    top: 120px;
    text-shadow: 1px 1px 2px black, 0 0 20px black, 0 0 4px black;
    @media ${device.desktop}{
        font-size: 16px;
        left: 5px;
        top: 180px; 
    } 
`








