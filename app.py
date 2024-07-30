from flask import Flask, flash, jsonify, redirect, render_template, request, url_for
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



@app.route('/experiments', methods=['GET', 'POST'])
def getAll():
    experiments = []
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM experiments ORDER BY 1 DESC" )
    for r in cursor.fetchall():
        experiments.append({"id": r[0], "name": r[1], "status": r[2], "startdate": r[3], "enddate": r[4]})
    
    mysql.connection.commit()
    cursor.close()
    return jsonify(experiments)


@app.route('/startExperiment/<int:id>', methods=['GET', 'POST'])
def startExperiment(id):
    try:
        status = 'Running'
        cursor = mysql.connection.cursor()
        sql = "UPDATE experiments SET status = '{0}' WHERE id={1}".format(status, id)
        cursor.execute(sql)
        mysql.connection.commit()
        cursor.close()
        return redirect('/experiments')
    except Exception as e:
        return str(e) + "There was a problem updating experiment."
    

@app.route('/endExperiment/<int:id>', methods=['GET', 'POST'])
def endExperiment(id):
    try:
        status = 'Stopped'
        cursor = mysql.connection.cursor()
        sql = "UPDATE experiments SET status = '{0}' WHERE id={1}".format(status, id)
        cursor.execute(sql)
        mysql.connection.commit()
        cursor.close()
        return redirect('/experiments')
    except Exception as e:
        return str(e) + "There was a problem updating experiment."



@app.route('/newexperiment/<string:name>/<startdate>/<enddate>', methods=['GET', 'POST'])
def addExperiment(name,startdate,enddate):
    print(request)
    if request.method == 'POST':
        """ if 'files[]' not in request.files:
            flash('No file part')
            return redirect('/newexperiment')
        files = request.files.getlist('files[]') 
        filenames = list()       
        for file in files:
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))          
                filenames.append(filename) """

        status = 'Running'    

        if not name or not startdate or not enddate:
            flash('Please enter all the fields', 'error')
            return redirect('/newexperiment')
        else:              
            try:
                cursor = mysql.connection.cursor()
                sql = "INSERT INTO experiments (name, status, startdate, enddate) VALUES ('{0}', '{1}', '{2}', '{3}')".format(name, status, startdate, enddate)
                print(sql)
                cursor.execute("INSERT INTO experiments (name, status, startdate, enddate) VALUES ('%s', '%s', '%s', '%s')", (name, status, startdate, enddate))
                print(startdate)
                mysql.connection.commit()
                cursor.close()    
                
                return redirect('/experiments')
            except Exception as e:
                return "There was a problem adding the Experimtent."
    else:
        return redirect('/newexperiment')




if __name__ == '__main__':
    app.run(port=5000, debug=True)