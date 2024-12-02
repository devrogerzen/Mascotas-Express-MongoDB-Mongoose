import dbClient from "../config/dbConfig.js";
import { ObjectId } from "mongodb";

class mascotasModelo {
  async create(mascota) {
    const colMascotas = dbClient.db.collection("mascotas");
    return await colMascotas.insertOne(mascota);
  }

  async update(id, mascota) {
    const colMascotas = dbClient.db.collection("mascotas");
    return await colMascotas.updateOne(
      { _id: new ObjectId(id) },
      { $set: mascota }
    );
  }

  async getAll() {
    const colMascotas = dbClient.db.collection("mascotas");
    return await colMascotas.find({}).toArray();
  }

  async getOne(id) {
    const colMascotas = dbClient.db.collection("mascotas");
    return await colMascotas.findOne({ _id: new ObjectId(id) });
  }

  async delete(id) {
    const colMascotas = dbClient.db.collection("mascotas");
    return await colMascotas.deleteOne({ _id: new ObjectId(id) });
  }
}

export default new mascotasModelo();