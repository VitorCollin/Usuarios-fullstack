import { useState } from "react";
import api from "../services/api";

function FormUsuario({ atualizar }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  async function salvar(e) {
    e.preventDefault();

    try {
      await api.post("/usuarios", { nome, email });

      setNome("");
      setEmail("");

      atualizar();
    } catch (error) {
      console.error(error);
      alert("Falha ao cadastrar usuário");
    }
  }

  return (
    <div>
      <h3 className="dark:text-white">Novo Usuário</h3>

      <form
        onSubmit={salvar}
        className="flex flex-col gap-3 text-black bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md"
      >
        <input
          className="border border-gray-300 dark:border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />

        <input
          className="border border-gray-300 dark:border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <button
          type="submit"
          className="bg-blue-600 dark:bg-blue-950 text-white font-semibold p-2 rounded-lg hover:bg-blue-700 transition"
        >
          Cadastrar Usuário
        </button>
      </form>
    </div>
  );
}

export default FormUsuario;
