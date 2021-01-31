# Project Submission
Full-stack IoT Application HackUCI 2021
link: https://devpost.com/software/zotcourt

# Steps to make this project (in order)

## Set up Raspberry Pi
- https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up

## Establish Connection: Raspberry Pi <-> SW-420 (<-> denotes a link or connection)(Make sure connection process happens without power)
- VCC (sw-420) <-> 5V pin 2(Raspberry Pi)
- Ground (sw-420) <-> ground pin 39(Raspberry Pi)
- D0 (sw-420) <-> ground pin 16/GPIO 23 (Raspberry Pi) (In the script, it will be noted as : pin = 23 which is just pin 16 on the pi)

## Clone repo
- On the command line/Terminal type: git clone https://github.com/anthopark/ZotCourt.git

## Open client side server (wesite)
- ZotCourt+ front end: https://zotcourt.netlify.app/

## Run script
- access the python script from /ZotCourt/pi-scripts
- enter into terminal: python ZotCourt+.py 

## Demonstrate
- flick or tap sensor
- success code 200 should appear and the website will update with "someone is playing"
- after 20 seconds of inactivity from the sensor, the website will update with "empty"
