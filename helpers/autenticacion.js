import jsonwebtoken from "jsonwebtoken";
import "dotenv/config";

export function generarToken(email) {
  return jsonwebtoken.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
}

export function verificarToken(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  console.log(token);

  if (!token) {
    return res.status(401).json({ error: "Token requerido" });
  }

  try {
    const dataToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    console.log(dataToken.email);
    req.emailConectado = dataToken.email;
    next();
  } catch (e) {
    res.status(401).json({ error: "Token no valido" });
  }
}
