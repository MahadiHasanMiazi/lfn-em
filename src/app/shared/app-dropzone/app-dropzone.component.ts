import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {DropzoneComponent, DropzoneConfigInterface, DropzoneDirective} from 'ngx-dropzone-wrapper';
import { AuthService } from 'src/app/services/common-service/auth.service';
import * as moment from 'moment';
import { TokensService } from 'src/app/services/tokens.service';
import {environment} from "../../../environments/environment";
import {OrganizationApiEndpoint} from "../../helper/api-url.config";

@Component({
  selector: 'app-dropzone',
  templateUrl: './app-dropzone.component.html',
  styleUrls: ['./app-dropzone.component.scss'],
})
export class AppDropzoneComponent implements OnInit, OnChanges {
  @Output() onFileRemoved = new EventEmitter();
  @Output() onFileUpload = new EventEmitter();
  @Input() dropZoneLabel: string = '';
  fileList = [];
  public type: string = 'component';

  public disabled: boolean = false;
  dropzoneMessage: any;
  dropzonefileReset: boolean = false;
  dropzonePlaceholder = '';

  @ViewChild(DropzoneComponent, { static: false }) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;
  @ViewChild('frontDropZone') frontDropZone: any;
  constructor(
    public auth: AuthService,
    private readonly tokenService: TokensService
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.dropzoneMessage =
      '<i class="icon-upload"></i><br/>' + this.dropZoneLabel ;
  }



  // Dropzone Config
  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    maxFilesize: 20,
    headers: {
      Authorization: 'Bearer ' + this.tokenService.getUserToken().access_token,
      // 'Cache-Control': null,
      // 'X-Requested-With': null,
      Accept: 'application/json'
    },
    url: environment.BASE_URL + OrganizationApiEndpoint.uploadContent,
    method: "post",
    acceptedFiles: 'image/*',
    accept: function (file, done) {
      if (file.size == 0) {
        done('Empty files will not be uploaded.');
      } else {
        done();
      }
    },
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    addRemoveLinks: true,
    dictRemoveFile: '<i class="icon-close"></i>',
    dictCancelUpload: '<i class="icon-close"></i>',
    dictCancelUploadConfirmation: 'Do you want to cancel this file?',
  };

  oneUploadError(args: any): void {
    console.log('oneUploadError', args)
    let msg = args[1]
      // .replace('MiB', 'MB').replace('MiB', 'MB');
    // msg = msg.replace('big', 'large');

    if (msg == 'Upload canceled' || msg == 'Upload canceled.') {
      msg = 'File upload has been canceled.';
    } else {
      msg = msg + ' Please remove this file';
    }

    // this.alertService.warn(msg);
  }
  onUploadSuccess(args: any): void {

    this.dropzonefileReset = false;
    this.onFileUpload.emit(args);
    // this.fileList = [];
    //console.log('onUploadSuccess: ', args);
    // this.fileList.push(JSON.parse(args[1]));

    // this.fileList.find((x) => x.name == args[1].name).size = args[0].size;
  }
  fileRemoved(args: any) {
    console.log('fileRemoved', args);
    this.onFileRemoved.emit(args);
  }

  sentParams(event: any){
    console.log('params==========', event)
    const formData = event[2]
    formData.append('ContentType', 'Profile');
    formData.append('File', event[0]);
    formData.append('ContainerName', 'profile-pic-private');
    formData.append('IsItPrivateContainer', true);

  }
}
