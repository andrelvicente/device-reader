export interface MessageRequestModel {
  deviceId: number;
  message: string;
  isSyncedRemotely: boolean;
}

export interface MessageResponseModel {
  id: number;
  deviceId: number;
  message: string;
  isSyncedRemotely: boolean;
}
