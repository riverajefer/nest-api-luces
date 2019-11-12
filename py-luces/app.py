from flask import Flask, request
app = Flask(__name__)
import os

@app.route('/')
def hello_world():
    return 'Home'

@app.route('/luces', methods=['POST'])
def luces():
	if request.method == 'POST':
		print(request.form.get('name'))
		if request.form.get('name')=='central':
			os.system('python /home/pi/py-home/central.py')
		else: 
			os.system('python /home/pi/py-home/lateral.py')
    	return 'Luces'

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3000)