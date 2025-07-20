+++
title = "AIO Ampseal Wiring Harness"
linkTitle = "Ampseal-Wiring-Harness example"
weight = 3
+++

For the actual pinout see [here](../AIO-Board-Pinout)

A crimping tool: Yato YT-2255

Let's build a wiring harness that will look like this:
![image](../../img/ampseal-wiring-harness.png)

## Shopping list

For this we need:

- Ampseal 23 female connector + Tail sheath
  https://www.aliexpress.com/item/10000383252937.html
- For test bench or in case you're not fan of crimping you can get Ampseal
  assembled https://www.aliexpress.com/item/1005004890887135.html
- Fuse holder: https://www.aliexpress.com/item/1005005014786356.html
- We also added an extra male + female just in case you want to be able to take
  it apart under the cab https://www.aliexpress.com/item/10000357094249.html
- Main Switch with GPS logo:
  https://www.aliexpress.com/item/1005002668770185.html (Get the switch + plug
  and maybe a holder depending on your tractor _Number 30 is the GPS logo
  (always double check!)_
- Connector for the motor: https://www.aliexpress.com/item/10000298353276.html
  (it comes with pins that you can crimp with a normal crimper)
- Steering: https://www.aliexpress.com/item/4000306602294.html (16mm, Momentary
  Reset + get the socket too!) put a note for _C02 that's heated steering
  (always double check!)_
- Some braiding: https://www.aliexpress.com/item/33046800962.html (16mm will do)
- Shrink tube: https://www.aliexpress.com/item/1005003700916035.html (16mm for
  braiding + maybe 4 and 8mm)

- Connector for the
  [wheel angle sensor](../../Other-components/wheel-angle-sensor) of your choice
  take a look around at [this shop](https://www.aliexpress.com/store/5700126)

### Wiring

Above cable uses YSLY-JZ cable that is heat and oil resistant We'll need:

- 3 wire that is 6meters for the Wheel angle sensor (0.5mm2 is fine that's
  20AWG)
- 2-5 wire that is 2 meters for the push button and some spare for hydraulic
  lift, work switch, etc (0.5mm2 / 20AWG)
- 2 wire that is 3,5meters for the motor (0.75 - 1mm2 that's 19-18AWG)
- 2 wire that is 1+ meters for the main power input (same as above)
- 3 wire that is 2 meters for the main switch (same as above)

Please note that Hydraulic steering will require extra wires: Lock pin 2 wires +
pressure sensor 2 wires + maybe dedicated 12V for the automotive relay.

## Assembly

Crimp and assemble according to the [Pinout](../AIO-Board-Pinout)

### AMPSEAL 23

Here's the [official video](https://www.youtube.com/watch?v=uXTkm_XV2OY) and
here's some [step by step video](https://www.youtube.com/watch?v=24bNFu7a9lc)
Things to watch out for:

- The crimped area can't be bigger than the connector itself as it has to go
  quite deep (try to get a quality crimper choose the head accordingly)
- It has to click when pushed in and from the front it has to be almost flush
- You can disassemble it if that makes it easier

### Main switch

| pin1      | pin2    |
| --------- | ------- |
| ground    | ground  |
| NC        | NC      |
| NC        | 12V In  |
| Backlight | 12V Out |

### Push button

The middle and one of the outer wires can act as either an NO / NC. Choose the
one that connects the wires when pressed. 1 goes steerpin 1 goes ground.

## Validation

Add 12V power to the wiring harness Turn on the main switch -> does the logo
light up?

Connect your sensors, etc and test it in your desk with a spare board
