import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: "User already exists or invalid data" });
  }
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(3000, () => console.log("Server ready at: http://localhost:3000"));
