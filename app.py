from flask import Flask, jsonify, redirect, render_template, url_for
from flask_mysqldb import MySQL

from flask_cors import CORS, cross_origin

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_DB'] = '6g_bricks'
mysql = MySQL(app)



@app.route('/experiments', methods=['GET'])
def getAll():
    experiments = []
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM experiments ORDER BY 1 DESC" )
    for r in cursor.fetchall():
        experiments.append({"id": r[0], "name": r[1], "status": r[2], "startdate": r[3], "enddate": r[4]})
    
    mysql.connection.commit()
    cursor.close()
    return jsonify(experiments)




if __name__ == '__main__':
    app.run(port=5000, debug=True)