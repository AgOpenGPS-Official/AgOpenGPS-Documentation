+++
title = "Cytron motor driver"
linkTitle = "Cytron MD13S driver"
weight = 7
+++

## Overview

The **Cytron MD13S** is the motor driver of choice for most AgOpenGPS systems.
It acts as the heavy‑duty link between AgOpenGPS’s brain (the Teensy and
AgOpenGPS software) and the tractor’s steering hardware (e.g., a DIY steering
motor). In practive, the Cytron converts tiny logic pulses from the Teensy into
the amperage that actually turns your motor (or drives a hydraulic valve).

Further details, including full technical specs can be found here:
https://www.cytron.io/p-13amp-6v-30v-dc-motor-driver.

Beware - Cytron make a few different types of motor driver. The **MD13S** is the
one that fits the requirements of the AIO PCBs, so don't just go "for one that
sounds similar".

![Cytron](../../img/cytron-md13s.png)

## Use cases

You will need the Cytron for the following steering setups:

- DIY Steering motor
- Aftermarket Hydraulic valve

You likely won't need the Cytron for:

- Keya Motor setups
- Danfoss valve setups
- Canbus steering setups

## Installation

_Installation information is currently dispersed across the AgOpenGPS community.
Willing to contribute? please reach out via the AgOpenGPS Github._

### Freewheel modification

If using the Cytron with a DIY steering motor, When the motor is not used it
acts as a resistance. When the cytron is connected it acts like a brake. To
avoid this, You have a few options, which can be seen in full on the
[DIY motor documentation page](/hardware/steering-options/diy-motor). Included
here is the option which involves modifying the cytron to allow the motor to
freewheel when not in use.

{{% alert title="Warning"%}} Playing with electronics is risky, so do so at your
own risk. {{% /alert %}}

#### Free wheel mod v2

This new AIO board has the option of connecting pwm2 to the cytron for the
freewheeling mod.

![image](/hardware/img/free-wheel-mod-v2.png)

https://www.youtube.com/watch?v=v6l7rEM7Ldk

## Sample suppliers

Here are some sample suppliers for the Cytron:

- [Robotbits](https://robotbits.co.uk/product/cytron-13amp-6v-30v-dc-motor-driver/)
- [Botland](https://botland.store/motor-drivers-modules/12412-cytron-md13s-single-channel-30v-13a-motor-controller-5904422377090.html)
- [opencircuit](https://opencircuit.shop/product/13amp-6v-30v-dc-motor-driver)
- [kamami](https://kamami.pl/en/DC-motor-controllers/576759-cytron-md13s-dc-motor-driver.html)
