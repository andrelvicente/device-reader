import { PGContactDataSource } from '../../../../src/data/data-sources/postgresql/pg-contact-data-source'
import { SQLDatabaseWrapper } from '../../../../src/data/interfaces/data-sources/sql-database-wrapper';

describe("PG DataSource", () => {

    let mockDatabase: SQLDatabaseWrapper

    beforeAll(async () => {
        mockDatabase = {
            query: jest.fn()
        }
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("getAll", async () => {
        const ds = new PGContactDataSource(mockDatabase);
        jest.spyOn(mockDatabase, "query").mockImplementation(() => Promise.resolve({ rows: [{ name: "Smith", id: "123" }] }))
        const result = await ds.getAll();
        expect(mockDatabase.query).toHaveBeenCalledWith("select * from tb_contact")
        expect(result).toStrictEqual([{ name: "Smith", id: "123" }])
    })


    test("create", async () => {
        const ds = new PGContactDataSource(mockDatabase);
        await ds.create({ name: "Smith", });
        expect(mockDatabase.query).toHaveBeenCalledWith("insert into tb_contact (name) values ($1)", ["Smith"])
    })
})