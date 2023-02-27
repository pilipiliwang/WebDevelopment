from flask import Flask, request, render_template

app = Flask(__name__)
app.debug = True

@app.route("/")
def index():
    return render_template("index.html")

# add a logout route and function here
@app.route("/logout",methods=["POST"])
def logout():
    return "You have been logged out!"

@app.route("/login", methods=["POST"])
def login():
    nickname = request.form["nickname"]
    age = request.form["age"]
    # Store the information in a database called "users.db" here
    userdata = open("users.db", "a")
    userdata.execute("INSERT INTO users (nickname, age) VALUES (?, ?)", nickname, age)

    # render the login.html template here
    return render_template("login.html")

# add a route and function here for the record page
@app.route("/record", methods=["POST"])
def record():
    # get data from record.html and store it in a database called "records.db, titles are: Subject\Description\URLsources\DDl"
    subject = request.form["subject"]
    description = request.form["description"]
    url = request.form["url"]
    ddl = request.form["ddl"]
    recorddata = open("records.db", "a")
    recorddata.execute("INSERT INTO records (subject, description, url, ddl) VALUES (?, ?, ?, ?)", subject, description, url, ddl)



if __name__ == "__main__":
    app.run()
