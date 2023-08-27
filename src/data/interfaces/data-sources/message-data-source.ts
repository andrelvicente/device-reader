import {
  MessageRequestModel,
  MessageResponseModel,
} from "../../../domain/models/message.js";

export interface MessageDataSource {
  create(contact: MessageRequestModel): Promise<MessageResponseModel>;
  updateSyncedRemotely(
    messageId: number,
    isSyncedRemotely: boolean
  ): Promise<void>;
  getAll(): Promise<MessageResponseModel[]>;
  getUnsynchronizedMessagesRemotely(): Promise<
    MessageResponseModel[] | undefined
  >;
}
