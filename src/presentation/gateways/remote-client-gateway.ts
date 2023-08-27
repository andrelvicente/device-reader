import axios from "axios";
import { CallRemoteClientUseCase } from "../../domain/interfaces/use-cases/call-remote-client-use-case";
import "dotenv/config";

export class RemoteClientGateway implements CallRemoteClientUseCase {
  private readonly defaultUrl =
    "https://run.mocky.io/v3/db1692e8-e91c-4e5d-a161-d92310b61e81";

  constructor() {}

  async execute(
    data: CallRemoteClientUseCase.Input
  ): Promise<CallRemoteClientUseCase.Output> {
    try {
      const axiosConfig = {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: process.env.AUTH_HEADER,
        },
      };
      const axiosResponse = await axios.post(
        this.defaultUrl,
        data,
        axiosConfig
      );
      console.log("axios response", axiosResponse);
      return { success: true };
    } catch (err: any) {
      console.log("axios response", err);
      return { success: false };
    }
  }

  async executeBatch(
    data: CallRemoteClientUseCase.Input[]
  ): Promise<CallRemoteClientUseCase.Output> {
    try {
      await axios.post(this.defaultUrl, data, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      return { success: true };
    } catch (err: any) {
      return { success: false };
    }
  }
}
