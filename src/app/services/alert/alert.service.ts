import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert, AlertType } from 'src/app/models/alert';

@Injectable({providedIn: "root"})
export class AlertService {

  private subject = new Subject<Alert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event =>{
      if(event instanceof NavigationStart) {
        if(this.keepAfterRouteChange){
          this.keepAfterRouteChange = true;
        }
        else {
          this.clear();
        }
      }
    })
  }

  // subscribe to alerts
  getAlert(alertId?: string): Observable<any> {
    return this.subject.asObservable().pipe(
      filter((x: Alert) => x && x.alertId === alertId)
    )
  }

  // convenience methods
  success(message: string, time?: string) {
    this.alert(new Alert({ message, time, type: AlertType.Success}));
  }

  error(message: string, time?: string) {
    this.alert(new Alert({ message, time, type: AlertType.Error }));
  }

  info(message: string, time?: string) {
    this.alert(new Alert({ message, time, type: AlertType.Info }));
  }

  warn(message: string, time?: string) {
    this.alert(new Alert({ message, time, type: AlertType.Warning }));

  }

  // main alert method
  alert(alert: Alert) {
    this.keepAfterRouteChange = true;
    this.subject.next(alert);
  }

  // clear alerts
  clear(alertId?: string) {
    this.subject.next(new Alert({ alertId }));
  }
}
