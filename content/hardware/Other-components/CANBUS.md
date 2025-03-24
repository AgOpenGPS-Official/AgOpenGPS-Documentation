+++
title = "CANBUS"
linkTitle = "Steering via CAN bus"
weight = 10
+++

CommonRail has written a superb guide on how to investigate the CANbus on your system - give it a good read!

https://discourse.agopengps.com/t/canbus-for-beginners-super-simple/3814/884

https://discourse.agopengps.com/c/hardware/canbus/33

[Here's a success story](https://discourse.agopengps.com/t/steering-a-22-mf-6718s-over-canbus/11955) using the AIO and CANBUS to control an MF 6718S

The Teensy has 3 CANBUS receivers on it, but you still need transceivers. The AIO 2.4 board has space for 2 transceivers and the 4.x boards have space for 1. The part you're looking for is https://www.mouser.co.uk/ProductDetail/579-MCP2562T-E-SN

These are absolutely tiny and you'll be soldering them on here most likely:

![image](../../img/canbus-receivers-pcb.png)

CommonRail has an excellent resource including the code you need [here](https://github.com/MechanicTony/AOG_CAN_Teensy4.1) on how to learn about CANBUS, and control your machine with it.
CAN controllers on Tonys board as per:
# CAN1
Tractor BUS / armrest when the Engage message (button) is one a different bus from the valve.
# CAN2
ISOBUS (not really in use) we can put NMEA2000 position on the bus
# CAN3
V-Bus or Valve Bus this is where we communicate with the valve. (Read the angle, send the desired angle) 


CAN connector pinout:

![image](../../img/can-connector-pinout.png)

# Machines

## Case / New Holland

Activate the necessary in the [HH menu](../../files/NH_H3_Config.pdf)
There's also a CH3 which MUST be NO else you'll have errors.

Maybe you need to [calibrate the WAS as well](../../files/NH_Steering_Cal.pdf)

Locate the pins for the bus this varies from tractor to tractor. Use a CAN Sniffer and the sourcecode (CAN_ALL_Brands) to see if you see those messages. We don't care about their content just the message header. For example: 
> 0x0CACAA08, EXT);  //CaseIH Curve Data & Valve State Message

## Massey Ferguson - steer bus location:

![image](../../img/can-massey-ferguson.png)
(There's also a black DT 3P connector with a CAN terminator on some models.)


## Fendt (V-Bus is for steering):

![image](../../img/can-fendt.png)

![image](../../img/can-fendt2.png)

## Tracked Challengers

Here the WAS can't be sniffed. There's a 4pin DT connector behind the right cover where you want to attach yourself.
There's no engage button by default so wire one for the CAN board.
Put it gear, let it drive slow, move the steering a bit then engage from the tablet.

## Claas

This can only be steered if we break the factory quicksteer.  
You'll have to modify the wiring harness. The necessary connectors can't be easily sourced however there's a similar connector where you can break or grind out the positioning tabs to make it fit.  
Connector for the CAN (buy these in pairs)
* 16pin: 2-963217-1 + 2-964449-1
* 6pin:  5-967241-1 + 2-962349-1

We'll steal the 2 CAN circuits (Tractor -> CAN1 , Steer -> CAN3) + 12V from the 6 pin connector.  
Using the Serial Service tool of Teensy we need to modify the PVED valve settings. 

## Valtra

It has a button to engage but it never worked. Easier to add your own button.
Otherwise it's the same deal: Find the pins with the right can message. Add your controller and off you go.


If you want to learn how to sniff the CANBUS and find out joystick codes etc, watch this: https://youtu.be/O01Fy4dBw6s


Once you have the board assembled and flashed use Arduino IDE or similar tool to do the necessary configuration via the Service menu over Serial.
Usually we set P for Panda mode at 460k (just like the AIO board)
Select the brand we should emulate.


# How to engage steering?

Make sure that: 
 * The tractor is in gear and drives
 * You're not riding the clutch
 * There was movement on the steering wheel in the last 30? or so seconds.
 * Operator is in the seat (yes a faulty seat switch can also give you trouble)
 * sometimes you need to be going forward at speeds greater than 1.5km/h but under 25km/h sometimes you can engage even in reverse
 * Case / New Holland / CNH require the main switch to be turned OFF then ON after every time you start the tractor
 * Road lockout / hydraulic lockout switch is NOT active
 * If Quicsteer / SpeedSteer or similar is present: It works
 * Sometimes it also helps if you set Steer Enable in steer settings to NONE and engage from the tablet. (We'll worry about the presence of the pyhsical button later.)
