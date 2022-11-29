export class Alert{
    type: AlertType={} as AlertType;
    message: string="";
    time: string="";
    alertId: string="";
    readyToClear: boolean=false;
    keepAfterRouteChange: boolean=false;

    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
