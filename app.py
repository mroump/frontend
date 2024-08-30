import io
from flask import Flask, flash, json, jsonify, redirect, render_template, request, send_file, url_for
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
import requests
import datetime
import urllib.request

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_DB'] = '6g_bricks'
mysql = MySQL(app)



@app.route('/devices', methods=['GET'])
def getAllDevices():
    try:
        response = requests.get('http://localhost:8081/find_devices')
        return response.json()
    except Exception as e:
        return str(e) + "There was a problem getting the devices."


@app.route('/experiments', methods=['GET'])
def getAllExperiments():
    try:
        response = requests.get('http://localhost:8081/list_experiments')
        return response.json()
    except Exception as e:
        return str(e) + "There was a problem getting the experiments."


@app.route('/experimentsStatus/<exp_name>', methods=['GET'])
def getExperimentsStatus(exp_name):
    try:
        response = requests.get('http://localhost:8081/current_status/<exp_name>')
        return response.json() # response.json()
    except Exception as e:
        return str(e) + "There was a problem getting the experiment's status."


@app.route('/startExperiment/<exp_name>', methods=['GET', 'POST'])
def startExperiment(exp_name):
    try:
        response = requests.get('http://localhost:8081/start/' + exp_name)
        return response.json()
    except Exception as e:
        return str(e) + "There was a problem starting experiment."
    

@app.route('/stopExperiment/<exp_name>', methods=['GET', 'POST'])
def endExperiment(exp_name):
    try:
        response = requests.get('http://localhost:8081/stop/' + exp_name)
        return response.json()
    except Exception as e:
        return str(e) + "There was a problem stopping experiment."


@app.route('/experimentsResults/<exp_name>', methods=['GET', 'POST'])
def experimentsResults(exp_name):
    try:
        response = requests.get('http://localhost:8081/results/' + exp_name)
        return response.json()
    except Exception as e:
        return str(e) + "There was a problem in experimentsResults."


@app.route('/resultsPower/<exp_name>', methods=['GET', 'POST'])
def resultsPower(exp_name):
    try:
        response = requests.get('http://localhost:8081/results/' + exp_name + '/Power')
        response.raise_for_status()  # raises exception when not a 2xx response
        print(response.status_code)
        if (response.status_code == 500):
            response = " = "
        return json.loads(response.content)
    except Exception as e:
        return str(e) + "There was a problem in resultsPower."
   
    
@app.route('/resultsCSI/<exp_name>', methods=['GET', 'POST'])
def resultsCSI(exp_name):
    try:
        response = requests.get('http://localhost:8081/results/' + exp_name + '/CSI')
        return response.json()
    except Exception as e:
        return str(e) + "There was a problem in resultsCSI."
    

@app.route('/resultsPlot/<exp_name>', methods=['GET', 'POST'])
def resultsPlot(exp_name):
    try:
        urllib.request.urlretrieve('http://localhost:8081/results/' + exp_name + '/Plot', "./src/assets/local-filename.jpg")
        return "ok"
    
    except Exception as e:
        return str(e) + "There was a problem in resultsPlot."





if __name__ == '__main__':
    app.run(port=5000, debug=True)