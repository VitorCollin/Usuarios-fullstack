import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import FormUsuario from "./components/FormUsuario";
import ListaUsuarios from "./components/ListaUsuarios";
import ThemeToggle from "./components/ThemeToggle";
import api from "./services/api";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  async function atualizar() {
    const response = await api.get("/usuarios");
    setUsuarios(response.data);
  }

  useEffect(() => {
    atualizar();
  }, []);

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold dark:text-white">
          Painel de Usuários
        </h1>
        <ThemeToggle />
      </div>

      <div className="flex flex-col gap-6">
        <FormUsuario atualizar={atualizar} />
        <ListaUsuarios usuarios={usuarios} atualizar={atualizar} />
      </div>
    </Layout>
  );
}

export default App;
