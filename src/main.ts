import server from './server'
import ContactRouter from './presentation/routers/contact-router'
import { GetAllContacts } from './domain/use-cases/contact/get-all-contacts'
import { ContactRepositoryImpl } from './domain/repositories/contact-repository'
import { CreateContact } from './domain/use-cases/contact/create-contact'

import { PGContactDataSource } from './data/data-sources/postgresql/pg-contact-data-source'
import { Pool } from 'pg'

async function getPGDS() {

    const db = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'CONTACTSDB',
        password: '',
        port: 5432,
    })
    return new PGContactDataSource(db)
}


(async () => {
    const dataSource = await getPGDS();

    const contactMiddleWare = ContactRouter(
        new GetAllContacts(new ContactRepositoryImpl(dataSource)),
        new CreateContact(new ContactRepositoryImpl(dataSource)),
    )

    server.use("/contact", contactMiddleWare)
    server.listen(3000, () => console.log("Running on http://localhost:4000"))
})()
