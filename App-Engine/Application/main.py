from flask import Flask, render_template, request
from urllib.parse import quote_plus

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/quote')
def quote():
    text = request.args.get('text', '')
    quoted_text = quote_plus(text)
    return render_template('quote.html', quoted_text=quoted_text)

if __name__ == '__main__':
    app.run(debug=True)