import { useEffect, useState } from "react";
import api from "../services/api";
import FormUsuario from "./FormUsuario";

function ListaUsuarios({ usuarios, atualizar }) {
  async function deletar(id) {
    await api.delete(`/usuarios/${id}`);
    atualizar();
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3 dark:text-white">
        Usuários Cadastrados
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Nome</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2">Ações</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-2">{u.id}</td>
                <td className="p-2">{u.nome}</td>
                <td className="p-2">{u.email}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => deletar(u.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaUsuarios;
