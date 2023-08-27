import {
  MessageRequestModel,
  MessageResponseModel,
} from "../../models/message";

export interface MessageRepository {
  createMessage(message: MessageRequestModel): Promise<MessageResponseModel>;
  updateSyncedRemotely(
    messageId: number,
    isSyncedRemotely: boolean
  ): Promise<void>;
  getMessages(): Promise<MessageResponseModel[]>;
  getUnsynchronizedMessagesRemotely(): Promise<
    MessageResponseModel[] | undefined
  >;
}
