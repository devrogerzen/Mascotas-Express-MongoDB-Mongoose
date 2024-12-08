import mongoose from "mongoose";
import Usuario from "../schemas/usuarios.js";

class UsuariosModelo {
  async create(usuario) {
    return await Usuario.create(usuario);
  }

  async update(id, Usuario) {
    return await Usuario.findByIdAndUpdate({_id: new mongoose.Types.ObjectId(id)} , Usuario, { new: true });
  }

  async getAll() {
    return await Usuario.find();
  }

  async getOneById(id) {
    return await Usuario.findById({_id: new mongoose.Types.ObjectId(id)});
  }

  async getOne(filtro) {
    return await Usuario.findOne(filtro);
  }

  async delete(id) {
    return await Usuario.findByIdAndDelete({_id: new mongoose.Types.ObjectId(id)});
  }
}

export default new UsuariosModelo();
