import mongoose from "mongoose";
import Mascota from "../schemas/mascotas.js";

class mascotasModelo {
  async create(mascota) {
    return await Mascota.create(mascota);
  }

  async update(id, mascota) {
    return await Mascota.findByIdAndUpdate({_id: new mongoose.Types.ObjectId(id)} , mascota, { new: true });
  }

  async getAll() {
    return await Mascota.find();
  }

  async getOne(id) {
    return await Mascota.findById({_id: new mongoose.Types.ObjectId(id)});
  }

  async delete(id) {
    return await Mascota.findByIdAndDelete({_id: new mongoose.Types.ObjectId(id)});
  }
}

export default new mascotasModelo();
