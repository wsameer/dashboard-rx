import { createGlobalStyle } from 'styled-components';
import OpenSansBold from './OpenSans/OpenSans-Bold.ttf';
import OpenSansBoldExtraBold from './OpenSans/OpenSans-ExtraBold.ttf';
import OpenSansLight from './OpenSans/OpenSans-Light.ttf';
import OpenSansRegular from './OpenSans/OpenSans-Regular.ttf';
import OpenSanSemiBold from './OpenSans/OpenSans-SemiBold.ttf';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Open Sans';
        src: local('Open Sans), 
            url('${OpenSansLight}') format('truetype'),
            url('${OpenSansRegular}') format('truetype'),
            url('${OpenSanSemiBold}') format('truetype'),
            url('${OpenSansBold}') format('truetype'),
            url('${OpenSansBoldExtraBold}') format('truetype');
        font-style: normal;
        font-weight: normal;
    }
`;

export default FontStyles;
