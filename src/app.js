import { createClient } from "./supabaseClient.js";

const supabase = createClient();

console.log("Supabase conectado");

// Aqui você pode adicionar funcionalidades como captura de pedidos
import { supabase } from "./supabaseClient.js";

document.getElementById("pedidoForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const item = document.getElementById("item").value;
  const observacao = document.getElementById("obs").value;

  const { data, error } = await supabase
    .from("pedidos")
    .insert([
      { nome_cliente: nome, item_pedido: item, observacao: observacao },
    ]);

  if (error) {
    alert("Erro ao enviar pedido");
    console.error(error);
  } else {
    alert("Pedido enviado com sucesso!");
    document.getElementById("pedidoForm").reset();
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => console.log("Service Worker registrado:", reg.scope))
      .catch((err) => console.error("Erro ao registrar Service Worker:", err));
  }
});
