import { MessageRequestModel } from "../../models/message";

export interface CreateMessageUseCase {
    execute(message: MessageRequestModel): void;
}