+++
title = "KEYA CANBUS motor"
linkTitle = "Steering with Keya CANBUS wheel"
weight = 12
+++

You can use this as a guide for installation:
https://discourse.agopengps.com/t/keya-canbus-motor-great-success-many-happy-etc/14174

https://youtu.be/ANboPyvSWBE

To order, the official link for the latest version of the steering wheel - direct from Keya themselves - is [here](
https://www.aliexpress.com/item/1005008796635857.html). PLEASE NOTE: there are imitators on AliExpress selling Keya-lookalike motors. The link here is to their official shop. Please support Keya as they are known to work well, and we have great support from the manufacturer. Other motors are not always known to work correctly, and Keya cannot support them if you come to the channel asking for help.

Keya reference manual: 
[Keya KY170DD01005-08G v2.4.pdf](https://github.com/AgOpenGPS-Official/Boards/files/15389407/Keya.KY170DD01005-08G.v2.4.pdf)


If you're in Europe you might want to check [navisklep.pl](https://navisklep.pl/p/silnik-kierownica-keya/)
They'll supply with the 3 spoked wheel.

## Links

### [The full kit, gen4 motor, deutsch connector](https://www.aliexpress.com/item/1005008796635857.html) <<<< this is what you want

![image](../../img/keya.png)

The full kit (older, round connector: https://www.aliexpress.com/item/1005006800593966.html)

### Additional parts

Just a steering wheel, no motor: https://www.aliexpress.com/item/1005006723020417.html

Adapter type A: https://www.aliexpress.com/item/1005006590788935.html

Adapter type D: https://www.aliexpress.com/item/1005006590913968.html

Adapter type F: https://www.aliexpress.com/item/1005006591675066.html

Adapter type N: https://www.aliexpress.com/item/1005006591480010.html

Adapter type NH40: https://www.aliexpress.com/item/1005006591353337.html


You need to specify when ordering which steering boss you require (and let them know if you require additional ones). Pay attention to the aliexpress link, the "View more" bit will list all the adapter types. NOTE: this list below might be out of date as more models are added, so look for this chart on the aliexpress link!!

![image](../../img/aliexpress-view-more.png)

![image](../../img/keya-adapter-list.png)

![image](../../img/keyatemplate.png)

Download this [Keya template](../../files/KeyaTemplate.pdf), to help with marking out for brackets or this template for the new 1.4 motor.

Replacement connectors: https://www.aliexpress.com/item/1005002498869200.html

![image](../../img/keya-replacement-connector.png)

Connections:

![image](../../img/keya-connector.png)

![image](../../img/keya-connector-pinout.png)

You’ll be powering 12V to pin 1, and GND to pin2 - and don’t power this through the AOG board! Put it on its own supply with a big huge “OFF!” switch for safety.

Pin 6 (CANH) goes to pin 16 on ampseal and pin 7 (CANL) goes to pin 17.

If you have the 4th gen motor that comes with the Deutsch connector, go by this instead:

![image](../../img/keya8pindeutsch.png)

You’ll need a modified firmware and while the hope is that this eventually goes to mainstream, at the moment it’s still considered as in-testing, so I haven’t submitted a PR to the main branch as yet.

You can find my modified firmware [here](https://github.com/lansalot/AgOpenGPS_Boards/blob/Keya/TeensyModules/V4.1/Firmware/AOG-Keya-CANBUS.hex) but make life easier by using [AOG-Config-O-Matic!](https://github.com/lansalot/AOGConfigOMatic/releases)

# Motor types

![image](../../img/keya-auto-steer-motor-types.png)

# Cables

7-pin https://www.aliexpress.com/item/1005007135464376.html

12-pin https://www.aliexpress.com/item/1005007144678100.html


# Known fittings

## Note - you should ALWAYS measure the diameter and count the splines yourself. This is for reference only.

|Type|Tractor|
|-------|-------|
|A|Case 5150<br>Case Puma 160<br>Deutz Agrofarm<br>John Deere 7x30, 6x30, 6300, 8300<br>Landini 6-115H<br>NH T5.120|
|B||
|D|Deutz 5110 TTV<br>Fendt 718 SCR, Favorit 511C|
|F|Bateman, Sands, Knight sprayers|
|K||
|N|Case MX110<br>Claas Axion<br>Fendt 936<br>Massey Ferguson 5413<br>Case Magnum 310 2013|
|NH40|NH T5050
|T|Kubota B3400|
|W||
