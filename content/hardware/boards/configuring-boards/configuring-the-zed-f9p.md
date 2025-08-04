+++
title = "Configuring the Ardusimple F9P (a.k.a U-Blox ZED-F9P GPS Receiver)"
linkTitle = "Configuring the F9P"
weight = 1
+++

## AOG-Configomatic method

**Make life easy by using the AOG-Config-O-Matic! Get it here!**

**https://github.com/lansalot/AOGConfigOMatic/releases**

---

## U-Center method

If you want to do it the hard way (or if the above way fails..)

### Prepare for flashing

So, you've a selection of expensive hardware in front of you - what next?

Well, before you plug them in, you did do those board checks first, as mentioned
[here](https://discourse.agopengps.com/t/all-in-one-pcb/10444/233) ?

First, get the firmware and configuration files
[here](https://github.com/AgOpenGPS-Official/Boards/tree/main/Ublox%20F9P), so
go grab them (you can get them all in one zip file
[here](https://github.com/AgOpenGPS-Official/Boards/archive/refs/heads/main.zip).

Unzip them, the 4 text files are the configuration you upload to the F9Ps, and
the .bin file is the firmware.

![image](../img/f9p-configuration-files.png)

### Flash in U-Center

Follow this
[ArduSimple Guide](https://www.ardusimple.com/zed-f9p-firmware-update-with-simplertk2b/)
(except step 1, you already have the firmware) on how to perform a firmware
upgrade, for which you'll need
[U-Center v22.07](https://content.u-blox.com/sites/default/files/2022-09/u-centersetup_v22.07.zip)
installed on your PC. U-Center might need .NET environments. Brute force
[all-in-one installer](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/)

- [MSVCR120.dll fix](https://aka.ms/highdpimfc2013x86enu)
- [MSVCR140.ddl fix](https://aka.ms/vs/17/release/vc_redist.x86.exe)

### Common mistakes

There are two common mistakes that you can easily avoid:

- **Always use 460,000 baud rate.**
- **Always Save Config.**

### Connecting the F9P to PC

If you're using the **Micro F9Ps**, the Ag board will need 12V to power it up,
and use the micro USB jacks to connect to your PC _one at a time!_

If you're using the **Standard F9Ps** that have the USB jack on, use the jack at
the FRONT next to the antenna connector, not the one at the rear. You can flash
the standard ones direct with your PC, you do not need them plugged into the
board.

On the board, and looking at them from the point of "antenna jack at the front",
you'll have a LEFT and a RIGHT socket. Plug one of the Micro F9Ps in and And
PLUG an antenna in, don't power up the F9P without one. Remember, Micros are
powered by the board. It doesn't matter which port you use to flash the
firmware/config, but don't get them mixed up afterwards. Note which is which.

![image](../img/f9p-connections.png)

Open U-Center, and connect to your F9P (there should only be one) and it will
have picked a COM port number (this is why you do one at a time); In the top
left menus, find that COM port and pick a speed of **460800**.
![image](../img/u-center-port.png)![image](../img/u-center-baud.png)

If you have multiple COM ports you might need to keep trying util it connects
successfully to the GPS receiver.

### Upgrading the firmware

Download the latest firmware:

- [v1.32 for single](https://github.com/AgOpenGPS-Official/Boards/blob/main/Ublox%20F9P/UBX_F9_100_HPG113.7e6e899c5597acddf2f5f2f70fdf5fbe.bin)
- [v1.13 for dual](https://github.com/AgOpenGPS-Official/Boards/blob/main/Ublox%20F9P/UBX_F9_100_HPG132.df73486d99374142f3aabf79b7178f48.bin)

Connect to your receiver.

Tools -> Firmware Update

Choose Baud Rate of 460,000 ![image](../img/u-center-firmware-update.png)

Hit Go! at the bottom left wait a minute or two and if there's no error message
you're good.

### Understanding the configuration files

These GPS modules can be used for multiple purposes. There are some
configuration files to assist you. Choose the files according to your needs:

- SingleAntenna -> use this when you have only 1 GPS receiver in your system
  (with or without the AIO board)
- DualAntenna -> use these when you have 2 GPS receiver in your system. Don't
  forget to OFFSET the GPS antenna in AgOpenGPS as 1 antenna is used for the
  position and the other is for the heading/roll to act like the IMU in single
  antenna config. Make sure you don't mix up the antennas when installing them
  on the board. 1.32 firmware has some issues. Roll is not stable it can only do
  8Hz so we recommend using 1.13 for Dual. And don't forget to configure the
  offset for your antenna in AgOpenGPS!
- RadioBaseStation -> use this for the RTK base station

### Configuration details

Open Tools, Receiver Configuration,

![image](../img/u-center-menu-receiver-configuration.png)

and pick your file

- For single:
  [1.13 SingleAntennaRover.txt](https://github.com/AgOpenGPS-Official/Boards/blob/main/Ublox%20F9P/1.13%20SingleAntennaRover.txt)
- For dual left socket we need
  [1.13 DualAntennaHeading_RelPos-Left.txt](https://github.com/AgOpenGPS-Official/Boards/blob/main/Ublox%20F9P/1.13%20DualAntennaHeading_RelPos-Left.txt)

Then click "Transfer File -> GNSS".

![image](../img/u-center-transfer-file.png)

Once that's done, go to Receiver -> Action -> Save Config and SAVE IT!
Alternatively you can do View -> Messages View and SAVE IT! This will be the F9P
that will end up in your left-hand socket.

![image](../img/u-center-save-config.png)

For single board you'll all set. For Dual board: power the board down,
disconnect USB and put the other one in, reconnect USB, power up the board.

Follow the same procedure and this time for Right receiver pick
[1.13 DualAntennaPosition_GGA VTG RTCM-Right.txt](https://github.com/AgOpenGPS-Official/Boards/raw/refs/heads/main/Ublox%20F9P/1.13%20DualAntennaPosition_GGA%20VTG%20RTCM-Right.txt)
This will be the F9P going in the right-hand socket.

As above, save.
