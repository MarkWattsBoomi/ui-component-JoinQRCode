import * as React from 'react';

declare module 'react' {
	interface DeprecatedLifecycle<P, S> {
		context: any;
	}
}

import { QRCode } from 'react-qrcode-logo';
import './css/qrcode.css';
import { FlowComponent } from '/Operational Data/Flow UI Custom Components/2019 Version/FlowComponentModel/src/FlowComponent';
import { IManywho } from '/Operational Data/Flow UI Custom Components/2019 Version/FlowComponentModel/src/interfaces';

declare const manywho: IManywho;

class JoinQRCode extends FlowComponent {
    render() {
        const value: string = this.model.joinUri;
        const ecLevel: string = 'H';
        const size: number = this.model.width > 0 ? this.model.width : 200;
        const padding: number = 10;
        const bgColor: string = '#fefefe';
        const color: string = '#000000';
        const logoImage: string = this.attributes['logo'] ? this.attributes['logo'].value || '' : '';
        const logoWidth: number = this.attributes['logoWidth'] ? parseInt(this.attributes['logoWidth'].value) : 50;
        const logoHeight: number = this.attributes['logoHeight'] ? parseInt(this.attributes['logoHeight'].value) : 50;
        const logoOpacity: number = this.attributes['logoOpacity'] ? parseInt(this.attributes['logoOpacity'].value) : 50;

        return (
            <QRCode
                value={value}
                ecLevel={'M'}
                size={size}
                padding={padding}
                bgColor={bgColor}
                fgColor={color}
                logoImage={logoImage}
                logoWidth={logoWidth}
                logoHeight={logoHeight}
                logoOpacity={logoOpacity}
            />
        );
    }
}

manywho.component.register('JoinQRCode', JoinQRCode);

export default JoinQRCode;
