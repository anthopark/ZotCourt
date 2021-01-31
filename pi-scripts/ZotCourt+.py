import RPi.GPIO as GPIO #to control pins!
import time #for creating delays in between detection
import requests
import datetime

'''
resources used:

https://www.instructables.com/Vibration-Sensor-SW-420-Raspberry-Pi/

https://www.geeksforgeeks.org/sleep-in-python/

https://www.w3schools.com/python/ref_requests_response.asp

'''

#GPIO SET UP

currentTime = 1

#configure to your preference. Refer to gpio
#pin 16/GPIO 23(pi) -> D0(sensor) 
pin = 23   

#activating broadcom-chip specific pin numbers
#required to work in python
GPIO.setmode(GPIO.BCM)

#pin 23 will recieve the input signal coming from sensor
GPIO.setup(pin, GPIO.IN)
#END OF GPIO SET UP



#When vibration detected, send packet to this url with json body below
vibrationDetectedPost = 'https://zotcourt.herokuapp.com/api/court/occupied'

#json body
courtDetected = {"courtId":1}

#When representing vacant, send packet to this url
vacancyDetectedPost = 'https://zotcourt.herokuapp.com/api/court/vacant'



def callback(pin):
    global currentTime


    #vibration detected
    x = requests.post(vibrationDetectedPost, data = courtDetected)
    print(x)
    currentTime = time.time() #seconds since 1970
    print "Movement Detected at " + time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(currentTime))
       
       

#alerts when pin goes high or low
#adds an event detection for the pin
#enabled pin to trigger an interuption
GPIO.add_event_detect(pin, GPIO.RISING, bouncetime=300)

#adds an event callback function
#function assigned to GPIO pin
GPIO.add_event_callback(pin, callback)



#While on, run
while True:
    time.sleep(1)
    
    #at start of script, this will be vacant
    #if less than 20 seconds, then 
    #time.time keeps updating. currentTime is a snapshot.
    if(currentTime <= (time.time() - 20)) and currentTime != 0:
        x = requests.post(vacancyDetectedPost, data = courtDetected)
        print(x.status_code)
        print "Vacant"
        currentTime = 0


