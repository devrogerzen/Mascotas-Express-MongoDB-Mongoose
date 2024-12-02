import { MongoClient } from "mongodb";

class dbClient {
  constructor() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=${process.env.NAME_DB}`;
    this.client = new MongoClient(queryString);
    this.connectarBD();
  }

  async connectarBD() {
    try {
      await this.client.connect();
      this.db = this.client.db('adopcion')
      console.log("Conectado a la base de datos");
    } catch (e) {
      console.log(e.message);
    }
  }
}
export default new dbClient();