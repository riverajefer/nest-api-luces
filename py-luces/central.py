#Luz Central
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

channel = 26
GPIO.setup(channel, GPIO.OUT)

fileR =   open("central.txt")
linea =  fileR.read()
fileR.close()

fileW =   open("central.txt", "w")
if str(linea) == str("1") :
    fileW.write("0")
    GPIO.output(channel, 1)
else:
    fileW.write("1")
    GPIO.output(channel, 0)
    GPIO.cleanup(channel)
fileW.close()


