+++
title = "AIO Board Pinout"
linkTitle = "Ampseal 23 pinout"
weight = 2
+++

So, you'll be needing some Ampseal connectors. Please note that ground pins of
4,21,23 are common and shared, thus they can be interchanged.

| Component       | Pin       | Description                                                                                                                                                                          |
| --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Battery +       | 22        | +12v in, use the appropriate fuse!                                                                                                                                                   |
| Battery -       | 23 (4,21) | Ground                                                                                                                                                                               |
| WAS 5V          | 1         | 5V output for Wheel Angle Sensor                                                                                                                                                     |
| WAS GND         | 4 (21,23) | Ground for WAS                                                                                                                                                                       |
| WAS Low         | 3         | Used for the Differential setup in AgOpenGPS                                                                                                                                         |
| WAS High        | 2         | Used for Single with GND and Differential with WAS Low                                                                                                                               |
| Steerswitch     | 8         | Can be used with a switch or a button to have a physical button to enable / disable autosteer. Basically it allows to disable the steering. Has to be connected to ground. (4,21,23) |
| Workswitch      | 9         | Can be used to turn sections on / off. Has to be connected to ground. (4,21,23)                                                                                                      |
| Remote/Pressure | 10        | Used for pressure sensor in valves or encoder in motor. Ground: (4,21,23)                                                                                                            |
| Left            | 5         | Power output for motor / valves (Danfoss Signal)                                                                                                                                     |
| Right/Lock      | 6         | Power output for motor / valves (Lock was only available on AIO boards v2.5 and lower since V4 board lock is no more present)                                                        |
| Lock            | 7         | Switched 12V output when autosteer is enabled. Can be used to activate the hydraulic valve through a relay or power Danfoss valve.                                                   |
| CanH1           | 16        | Can High for channel 1                                                                                                                                                               |
| CanL1           | 17        | Can Low for channel 1                                                                                                                                                                |
| Speed +         | 14        | Output speed pulse +                                                                                                                                                                 |
| Speed -         | 15        | Output speed pulse -                                                                                                                                                                 |
| A12             | 11        | !Use at your own risk! Unprotected connection to Teensy pin A12                                                                                                                      |
| A13             | 12        | !Use at your own risk! Unprotected connection to Teensy pin A13                                                                                                                      |
| A14             | 13        | !Use at your own risk! Unprotected connection to Teensy pin A14                                                                                                                      |
| +12v out        | 20        | 12V output (use it only for limited load maximum 1A)                                                                                                                                 |
| V2 board:       |           |                                                                                                                                                                                      |
| CanH2           | 18        | Can High for channel 2                                                                                                                                                               |
| CanL2           | 19        | Can Low for channel 2                                                                                                                                                                |
| V4 board:       |           |                                                                                                                                                                                      |
| Cytron IN       | 18        | V4 board: Cytron Input (up to 10A fuse) 12/24V                                                                                                                                       |
| NC              | 19        | NC                                                                                                                                                                                   |

![image](../img/ampseal-connector-pinout.png)

example for motor with external freewheel mod:
![image](../img/ampseal-connector-wiring-diagram.png)
