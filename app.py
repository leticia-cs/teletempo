from datetime import datetime
from flask import Flask, url_for, render_template, jsonify

app = Flask(__name__)

# PAGINAS
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/acoes')
def acoes():
    return render_template('acoes.html')

# API
from zoneinfo import ZoneInfo
TZ = ZoneInfo("America/Sao_Paulo")

@app.get("/dataHorario")
def dataHorario():
    agora = datetime.now(TZ)
    def obter_diaSemana():
        dias = ['Domingo', 'Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']
        return dias[agora.weekday()]

    return jsonify(
        horario={"hora": agora.hour,"minuto": agora.minute},
        data={"ano": agora.year, "mes":agora.month, "dia":agora.day, "diaSemana":obter_diaSemana()},
    )

if __name__ == '__main__':
    app.run(debug=True)