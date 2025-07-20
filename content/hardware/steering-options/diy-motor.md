+++
title = "Steering with DIY motor"
linkTitle = "DIY motor"
weight = 6
description = "Instructions for building a DIY steering wheel motor setup. Lists recommended motors (Phidgets, MFA, Aliexpress), mounting ideas, wiring tips, and freewheeling modifications for custom installations."
+++

You have 2 choices here: 24V or 12V

## Phidgets 24V motor

If you're going down the steering-wheel-motor route, the Phidgets is the one to
buy. There are alternatives, but PotatoFarmer has made an excellent 3D-printed
holder that fits it nicely (see below)

Specs: 24V 600RPM 5.1kgcm torque

https://www.phidgets.com/?tier=3&catid=19&pcid=16&prodid=993

![Motor](../../img/phidgets-motor.png)

Note that if you're using a 24V motor as above, you'll need a 12V-24V step-up
converter, sample here.

https://www.ebay.co.uk/itm/334688323208

![24V converter](../../img/step-up-converter.png)

## MFA 12V motor

This is mostly used by the French guys you can source it from a couple places in
europe. You can get roughly a 30% discount from the manufacturer when directly
ordering from them but you need to order 5+.
https://www.mfacomodrills.com/gearboxes/986d_series.html

Specs: 4:1 ratio 12V 1300RPM 3.3kgcm

(you can likely add an extra 10% as the tractors voltage is around 13-14V) which
makes this less powerful than phidgets but good enough for U-Turn

Make sure the v2 AIO board has extra traces as this can easily eat 5-7 amperes
at peak.

## Aliexpress 12V motor

https://www.aliexpress.com/item/1005001644698564.html 5.2 :1 ratio 12V 950RPM

![image](../../img/aliexpress-12v-motor.png)

## Others

We've seen all kind of 12V motors being used from drills to Opel Corsa C
electric servo. Choice is yours.

# Mounting the motor

For some ideas on how to mount the motor to the wheel, check these resources
out:
https://discourse.agopengps.com/c/hardware/stl-file-links-and-bracket-ideas/39

PotatoFarmer has made an awesome 3D printed gearset and motor holder, check that
out here:
https://discourse.agopengps.com/t/universal-fit-gear-system-with-quick-tach-motor-holder/6579
STL for the MFA motors small gear: (don't use PLA for it go with PETG or TPU)
https://discourse.agopengps.com/t/universal-fit-gear-system-with-quick-tach-motor-holder/6579/269

If you prefer steel then check out bricbric -s design here:
https://cults3d.com/en/users/entropiemaximun/creations
![image](../../img/steel-motor-mount.png)

- If you don't have a bender:
  https://cults3d.com/en/3d-model/tool/universal-clutch
- If you have a bender:
  https://cults3d.com/en/3d-model/tool/universal-clutch-v2-bending-steel Forum
  post:
  https://discourse.agopengps.com/t/small-teeth-and-friction-universal-mecanism/9669

There's a useful MF 76-77 mount here: https://www.thingiverse.com/thing:5427025
![image](../../img/mf-76-77-mount.png)

# Wiring the motor

Use at least 0.75mm2 wires. You'll have a hard time putting a 1.5mm2 into the
Ampseal connector. So likely 1mm2 is good enough. Which wire goes where?! You
can invert the direction from AgOpenGPS so don't worry about it. V4 board can
easily handle the 12V motors without extra traces. Use Pin18 on the ampseal as
that's a direct connection to cytron. Add a 10A fuse before it.

## Freewheeling mods

When the motor is not used it acts as a resistance. When the cytron is connected
it acts like a brake. You have a few options. Playing with electronics is risky
so do it at your own risk.

## Free wheel mod v0

Bricbrics holder can physically detach the motor.

## Free wheel mod v1

Get a proper relay such as: Bosch 0332019110 Use the Lock pin which is a
switched 12V output to trigger it. Disconnect one of your motor wires.

## Free wheel mod v2

This new AiO board has the option of connecting pwm2 to the cytron for the
freewheeling mod.

![image](../../img/free-wheel-mod-v2.png)

https://www.youtube.com/watch?v=v6l7rEM7Ldk
