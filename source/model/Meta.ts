import { observable } from 'mobx';

export class MetaModel {
    @observable
    deviceType: 'phone' | 'pad' | 'desktop';

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
