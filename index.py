from flask import Flask, redirect,url_for,render_template,request,session, send_from_directory, flash, json



app = Flask(__name__, static_url_path='/static')