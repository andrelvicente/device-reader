import server from "./server";

import { Pool } from "pg";
import { PGMessageDataSource } from "./data/data-sources/postgresql/pg-message-data-source";
import MessagesRouter from "./presentation/routers/message-router";
import { GetAllMessages } from "./domain/use-cases/message/get-all-messages";
import { CreateMessage } from "./domain/use-cases/message/create-message";
import { MessageRepositoryImpl } from "./domain/repositories/message-repository";
import { PublishMessage } from "./domain/use-cases/message/publish-message";
import { RemoteClientGateway } from "./presentation/gateways/remote-client-gateway";

async function getPGDS() {
  const db = new Pool({
    user: "postgres",
    host: "localhost",
    database: "device_reader",
    password: "TremDoMundo@2023!",
    port: 5432,
  });
  return new PGMessageDataSource(db);
}

(async () => {
  const dataSource = await getPGDS();

  const messageMiddleWare = MessagesRouter(
    new GetAllMessages(new MessageRepositoryImpl(dataSource)),
    new CreateMessage(new MessageRepositoryImpl(dataSource)),
    new PublishMessage(
      new MessageRepositoryImpl(dataSource),
      new RemoteClientGateway()
    )
  );

  server.use("/message", messageMiddleWare);
  server.listen(3000, () => console.log("Running on http://localhost:3000"));
})();
