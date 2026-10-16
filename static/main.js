const dataHorario = await (await fetch('/dataHorario')).json();
const data = `${dataHorario.data.dia}/${dataHorario.data.mes}/${dataHorario.data.ano}`

// preencher na home
document.getElementById('hoje-data').textContent = data;
document.getElementById('hoje-dia').textContent = dataHorario.data.diaSemana;