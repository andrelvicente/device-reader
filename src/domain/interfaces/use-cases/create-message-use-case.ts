import { MessageRequestModel, MessageResponseModel } from "../../models/message";

export interface CreateMessageUseCase {
  execute(message: MessageRequestModel): Promise<MessageResponseModel>;
}

