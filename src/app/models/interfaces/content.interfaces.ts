import {ImageType} from "../../enum/company.enum";

export interface IUploadSuccessResponse {
  containerName: string
  fileName: string
  id: string
  isItPrivateContainer: boolean
  privateUrl: string
  storageBaseUrl: string
  thumbnailContainerName: string
  thumbnailUrl: string
  url: string
}

export interface IImageUpload{
  OrganizationId:string
  ImageFor:ImageType,
  fileName:string,
  storageBaseUrl:string,
  containerName:string,
  thumbnailContainerName:string,
  UploadFileId:string,
  UserId:string
}
