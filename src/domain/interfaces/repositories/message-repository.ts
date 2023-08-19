// domain/interfaces/repositories/contact-repository.ts

import { MessageRequestModel, MessageResponseModel } from "../../models/message";

export interface MessageRepository {
    createMessage(message: MessageRequestModel): void;
    getMessages(): Promise<MessageResponseModel[]>;
}