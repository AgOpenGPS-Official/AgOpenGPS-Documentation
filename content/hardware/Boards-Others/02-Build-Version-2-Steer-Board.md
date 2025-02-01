+++
title = "Build Version 2 Steer Board"
linkTitle = "Brians old board"
weight = 1
+++

## Brian Tischlers PCB v2.

For having the best experience you should make a PCB with all the necessary components for start. I truly understand that a lot of people never touched a soldering station and never did something with electronics.
I can tell you it's pretty simple and with good information here, in the PCB drawing and help from some other contributors you will also accomplish it. 

Here are some Video's how to create your own PCB.

[Creating PCB v2 (Wilbert Talen)](https://www.youtube.com/watch?v=qZR5NlGGiSo)

[Creating PCB v2 (Darren Lobb)](https://www.youtube.com/watch?v=BXys4PYzAFQ)

To get your own PCB, download the gerber and go to [jlcpcb.com](https://jlcpcb.com)
You can upload the complete zipfile to the site. After that you can order it and it will be send out to anywhere in the world. Minimum pieces is 5, so you got some spares if you accidentally destroy one.

The zipfile also contains a BOM list (build of Material) that you can use at Digikey to order all the parts you need. You can also order it at different stores by using that list. 
### NEVER USE ALIEXPRESS MMA OR BNO DEVICES
I can't tell it too much but those are bad copies from the orginal board. It will only give you lots of problems and headache. 

## GNSS Device

### What is it, GNSS or GPS.. 
Well, GNSS stands for Global Navigation Satellite System. It's the Collective name for multi GNSS Satellites like GPS, Glonass, Galileo, Beidou and QZSS. Mostly everyone calls his system a GPS Autosteer System but GPS is the American Satellite system. That's where the confusion often comes from.

The systems work with NMEA strings (data that came from GNSS receivers with actual position, ground speed, heading, and so on.) So, to know where your tractor is you need one. Most used currently are [Ardusimple's SimpleRTK2B](https://www.ardusimple.com/simplertk2b/) F9P receiver boards. They are very good and low priced multi GNSS receivers and also RTK ready. For a good auto steer system you need very high accuracy. with rtk corrections fed into the SimpleRTK2b board it can get to a <2cm precision. I tell more about that in the NTRIP/RTK page.

## Ready for fertilize

For only doing fertilize or spray you're good to go with a GNSS device and a Tablet. You can create fields with boundaries in the software, and create some Guidance lines. In this state you can use it as a Visual Guidance system for spraying or fertilize. 
Also want to drive autonomously? Keep reading!

## WAS (Wheel Angle Sensor)

The software needs your location, but for autosteerring the software also needs to know at which angle your steerings wheel currently are. Here's a list for a few Sensors that might be good for you.

[Delphi ER100031](https://www.amazon.com/Delphi-ER10031-Headlight-Level-Sensor/dp/B0089RT00W)
***
***
