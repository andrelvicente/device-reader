import { MessageRepository } from "../../interfaces/repositories/message-repository";
import { CreateMessageUseCase } from "../../interfaces/use-cases/create-message-use-case";
import {
  MessageRequestModel,
  MessageResponseModel,
} from "../../models/message";

export class CreateMessage implements CreateMessageUseCase {
  messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }

  async execute(message: MessageRequestModel): Promise<MessageResponseModel> {
    return this.messageRepository.createMessage(message);
  }
}
