from flask import Flask, jsonify, redirect, render_template, url_for
from flask_mysqldb import MySQL

app = Flask(__name__)



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
    cursor.execute("SELECT name FROM experiments where id =1" )
    data = cursor.fetchall()
    #for r in cursor.fetchall():
    #    experiments.append({"id": r[0], "name": r[1], "status": r[2], "startdate": r[3], "enddate": r[4]})
    
    mysql.connection.commit()
    cursor.close()
    print(data)
    return redirect('/experiments')



if __name__ == '__main__':
    app.run(port=5000, debug=True)