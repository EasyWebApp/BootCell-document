import { observable } from 'mobx';
import { parseURLData } from 'web-utility';

export const { renderMode = 'sync' } = parseURLData() as {
    renderMode?: 'sync';
};

export class MetaModel {
    @observable
    accessor deviceType: 'phone' | 'pad' | 'desktop';

    constructor() {
        this.getDeviceType();
        self.addEventListener('resize', this.getDeviceType);
    }

    getDeviceType = () => {
        const { innerWidth } = self;

        return (this.deviceType =
            innerWidth < 577 ? 'phone' : innerWidth < 769 ? 'pad' : 'desktop');
    };
}
