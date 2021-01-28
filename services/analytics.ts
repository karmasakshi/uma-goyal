import splitbee from '@splitbee/web';

export const logAction = (action: string, data: any): void => {

  splitbee.track(action, data);

};
