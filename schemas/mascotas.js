import mongoose from "mongoose";

const mascotasSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
      enum: ["Perro", "gato", "conejo"]
    },
    raza: {
      type: String,
      required: true,
    },
    edad: {
      type: Number,
      required: true,
      min: [0, "La edad no puede ser menor a 0"],
      max: [30, "La edad no puede ser mayor a 30"],
    },
    descripcion: {
      type: String,
      required: true,
    },
    adoptado: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("mascotas", mascotasSchema);