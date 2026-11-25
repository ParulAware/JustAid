from flask import Flask, send_from_directory
import os

app = Flask(__name__)
BASE_DIR = r'C:\Users\skawa\OneDrive\Desktop\pbl'

@app.route('/')
def index():
    file_path = os.path.join(BASE_DIR, 'index_new.html')
    if not os.path.exists(file_path):
        return f"File not found at: {file_path}", 404
    return send_from_directory(BASE_DIR, 'index_new.html')

@app.route('/script_new.js')
def serve_script():
    file_path = os.path.join(BASE_DIR, 'script_new.js')
    if not os.path.exists(file_path):
        return f"File not found at: {file_path}", 404
    return send_from_directory(BASE_DIR, 'script_new.js')

if __name__ == '__main__':
    app.run(debug=True)
