from flask import Flask, render_template
app = Flask(__name__)

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

@app.route("/")
def index():
    fig = plt.figure(dpi=2000)
    ax = fig.add_subplot(111)
    ax.plot([-1, -4.5, 16, -2, 23,0,30,3,20])
    fig.savefig("./hbrar.github.io_2.0/static/images/binanceApi.png")
    return render_template("index.html")

@app.route("/binanceApi")
def helloWorld():
    return render_template("binanceApi.html")







if __name__=="__main__":
    app.run()
