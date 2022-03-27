import { createGlobalStyle } from 'styled-components';

import MontserratRegular from './Montserrat-Regular.ttf';
import MontserratLight from './Montserrat-Light.ttf';
import MontserratBold from './Montserrat-Bold.ttf';
import MontserratSemiBold from './Montserrat-SemiBold.ttf';
import MontserratThin from './Montserrat-Thin.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat Thin';
    src: local('Montserrat 100'), local('Montserrat100'),
    url(${MontserratThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }
    @font-face {
        font-family: 'Montserrat Regular';
        src: local('Font Name'), local('FontName'),
        url(${MontserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
      font-family: 'Montserrat Light';
      src: local('Montserrat 300'), local('Montserrat300'),
      url(${MontserratLight}) format('truetype');
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
      font-family: 'Montserrat Semi-Bold';
      src: local('Montserrat Bold'), local('Montserrat500'),
      url(${MontserratSemiBold}) format('truetype');
      font-weight: 500;
      font-style: normal;
    }
    @font-face {
      font-family: 'Montserrat Bold';
      src: local('Montserrat Bold'), local('Montserrat600'),
      url(${MontserratBold}) format('truetype');
      font-weight: 600;
      font-style: normal;
    } 
    

    
`;
