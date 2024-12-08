import mongoose from "mongoose";

class dbClient {
  constructor() {
    this.conectarBaseDatos();
  }
  async conectarBaseDatos() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/${process.env.NAME_DB}?retryWrites=true&w=majority`;
    await mongoose.connect(queryString);
    console.log("Database connected");
  }

  async cerrarConexcion() {
    try {
      await mongoose.disconnect();
      console.log("Database disconnected");
    } catch (error) {
      console.log("Error al desconectar la base de datos", error);
    }
  }
}
export default new dbClient();
