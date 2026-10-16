from flask import Flask, url_for, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/acoes')
def acoes():
    return render_template('acoes.html')

if __name__ == '__main__':
    app.run(debug=True)