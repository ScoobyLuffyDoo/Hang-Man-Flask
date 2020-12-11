from flask import Flask, redirect, url_for, render_template, request,session, send_from_directory, flash, json
from datetime import timedelta


app = Flask(__name__, static_url_path='/static')
app.secret_key ="ThisIs Secret Key" #this needs to be pulled in as a Key From the Root Drive and be Incripted
app.permanent_session_lifetime = timedelta(minutes=30) # time before session data gets Cleared 


@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html") 

@app.route('/GuessWord', methods=["POST"])
def GuessWord():
    data = request.get_json()
    print(data)
    return json.dumps({'result' : 'name'})




  # ===============================
# static_dir
@app.route("/static/<path:path>")
def static_dir(path):
    return send_from_directory("static", path)
#css path
@app.route('/CSS/<path:path>')
def send_css(path):
    return send_from_directory('CSS', path)
#Image path
@app.route('/Images/<path:path>')
def send_images(path):
    return send_from_directory('Images', path)

@app.route('/JS/<path:path>')
def send_JS(path):
    return send_from_directory('JS', path)

@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404 

@app.errorhandler(400)
def bad_request(e):
    # note that we set the 404 status explicitly
    return render_template('404.html'), 400 

@app.errorhandler(500)
def server_error(e):
    # note that we set the 404 status explicitly
    return render_template('404.html'), 500 



if __name__ == "__main__":
    app.debug =True
    app.run(threaded =True)