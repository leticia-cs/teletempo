export const dH = await (await fetch('/dataHorario')).json();
export const d = `${dH.data.dia}/${dH.data.mes}/${dH.data.ano}`;
export const h = `${dH.horario.hora}:${dH.horario.minuto}`;

// preencher na home
document.getElementById('hoje-data').textContent = d;
document.getElementById('hoje-dia').textContent = `(${dH.data.diaSemana})`;