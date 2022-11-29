import { Component, Input, OnInit } from "@angular/core";
import { Alert, AlertType } from "src/app/models/alert";
import { AlertService } from "src/app/services/alert/alert.service";

@Component({
  selector: "alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent implements OnInit {
  @Input() id: string = "";

  alerts: Alert[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert(this.id).subscribe((alert: Alert) => {
      if (!alert.message) {
        // clear alerts when an empty alert is received
        this.alerts = [];
        return;
      }

      // add alert to array
      this.alerts.push(alert);
      setTimeout(() => {
        alert.readyToClear = true;
      }, 7000);
      setTimeout(() => {
        this.alerts = this.alerts.filter((x) => x !== alert);
      }, 8000);
    });
  }

  removeAlert(alert: Alert) {
    alert.readyToClear = true;
    setTimeout(() => {
      this.alerts = this.alerts.filter((x) => x !== alert);
    }, 1000);

    return false;
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return null;
    }

    // return css class based on alert type
    switch (alert.type) {
      case AlertType.Success:
        return "alert-primary";
      case AlertType.Error:
        return "alert-danger";
      case AlertType.Info:
        return "alert-secondary";
      case AlertType.Warning:
        return "alert-danger";
    }
  }

  iconClass(alert: Alert) {
    if (!alert) {
      return null;
    }
    // return alert icon class based on alert type
    switch (alert.type) {
      case AlertType.Success:
        return "icon-correct";
      case AlertType.Error:
        return "icon-bell";
      case AlertType.Info:
        return "icon-bell";
      case AlertType.Warning:
        return "icon-bell";
    }
  }
}
