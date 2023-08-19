export interface MessageRequestModel {
  deviceId: number;
  data: string;
  isSyncedRemotely: boolean;
}

export interface MessageResponseModel {
  id: number;
  deviceId: number;
  data: string;
  isSyncedRemotely: boolean;
}
