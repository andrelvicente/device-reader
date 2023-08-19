import { MessageDataSource } from "../../data/interfaces/data-sources/message-data-source";
import { MessageRepository } from "../interfaces/repositories/message-repository";
import { MessageRequestModel, MessageResponseModel } from "../models/message";

export class MessageRepositoryImpl implements MessageRepository {
  messageDataSource: MessageDataSource;
  constructor(messageDataSource: MessageDataSource) {
    this.messageDataSource = messageDataSource;
  }

  async createMessage(message: MessageRequestModel) {
    await this.messageDataSource.create(message);
  }
  
  async getMessages(): Promise<MessageResponseModel[]> {
    const result = await this.messageDataSource.getAll();
    return result;
  }
}
