import { createGlobalStyle } from "styled-components";
import { device, size } from "./device";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-size: 14px;
    font-family: 'Roboto', sans-serif !important;
    font-style: normal;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

    text-decoration: none;
    transition:0.3s;
    
  };
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Georama' !important;
  }

  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 35px;
    line-height: 43px;
  }

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 125%;

    ${device.mobileSmall} {
      font-size: 28px;
    }
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 125%;

    ${device.mobileSmall} {
      font-size: 22px;
    }
  }

  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    
    ${device.mobileSmall} {
      font-size: 20px;
    }
  }

  h5 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
  }

  ul > li, p {
    font-family: 'Roboto', sans-serif !important;   
  }

  ul {
    list-style: unset !important;
  }

  li {
    color: #505050;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
   
  }

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #505050;
  }

  i{
    text-rendering: optimizeLegibility;
  }
  
  th{
    text-align:left;
  }
 
 
  html, body, header, footer, section, nav, a, button{
    text-rendering: optimizeLegibility!important;
    flex-direction: column;
    position:relative;
    display: -webkit-box;
    /* OLD: Safari,  iOS, Android browser, older WebKit browsers.  */
    display: -moz-box;
    /* OLD: Firefox (buggy) */
    display: -ms-flexbox;
    /* MID: IE 10 */
    display: -webkit-flex;
    /* NEW, Chrome 21–28, Safari 6.1+ */
    display: flex;
  }
  body, #root{
    min-height:100vh;
    max-height:100vh;
    -webkit-font-smoothing: antialiased !important
  }
  input, button{
   /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif */
  };

  .container-app {
    padding: 0 5%;
  }

  .container-small{
    width:320px;
    min-height:500px;
  }
  .form-control {
    font-family: 'Roboto', sans-serif !important;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #505050;
    text-align: left !important;
    background: #FFFFFF;
    border: 1px solid #ADADAD;
    border-radius: 3px;
  }

  .form-group {
    width: 100%;
  }

  .loading {
    position: fixed;
  }

  .loading > div {
    width: 100px !important;
    height: 100px !important;
    margin: 0 auto !important;
    margin-top: calc(50vh - 100px) !important;
  }

  *:focus{
    outline:0;
  }

  button {
    cursor: pointer;
  };

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 5px;
    table-layout: fixed;
    thead{
      background-color:transparent;
    }
  };
  th{
    font-weight:normal;
  }
  tbody tr{
    background-color:#fff;
    overflow:hidden;
    i{
      margin-right:15px;
      cursor:pointer;
      opacity:0;
    }
    :hover{
      z-index:100;
      -webkit-box-shadow: 5px 5px 20px -8px #000000; 
      box-shadow: 5px 5px 20px -8px #000000;
      i{
        opacity:1;
      }
    }
  }
  th, td{
    padding:20px;
  }
  .nobreak{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Rules for sizing the icon. */
  .material-icons.md-14 { font-size: 18px; }
  .material-icons.md-18 { font-size: 18px; }
  .material-icons.md-24 { font-size: 24px; }
  .material-icons.md-36 { font-size: 36px; }
  .material-icons.md-48 { font-size: 48px; }

  /* Rules for using icons as black on a light background. */
  .material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
  .material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

  /* Rules for using icons as white on a dark background. */
  .material-icons.md-light { color: rgba(255, 255, 255, 1); }
  .material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

  ${device.mobileSmall} {
    button {
      width: 100%;
      margin-bottom: 10px;
      text-align: center !important;
      display: grid !important;
      color: #fff !important;
    }
  }
`;
