+++
linkTitle = "IMU for roll compensation"
weight = 4
+++

# IMU (inertial measurement unit)

The IMU's job is to assist with orientation, pitch and roll. It helps immensely with accuracy in a single-GPS configuration, but it's not needed if you're going dual-GPS. You can use it in dual as well tho.

The BNO085 is the one to go for - no other is as good. The Adafruit is popular, but if you look at any kind of alternative, the pins have to be in the same configuration - so play it safe and stick with this. These can be hard to find, so watch the Discourse or Telegram channels as helpful members often post when they see stock at $VENDOR.

![image](../../img/bno085.png)

 * https://www.adafruit.com/product/4754
 * [digikey](https://www.digikey.fr/fr/products/detail/adafruit-industries-llc/4754/13426653)
 * [botland](https://botland.store/9dof-imu-sensors/22113-bno085-9-dof-imu-fusion-breakout-3-axis-accelerometer-magnetometer-and-gyroscope-adafruit-4754.html)

IMU needs to be placed like on the above picture with X or Y matching up with the direction the tractor travels. (you can orient it 0,90,180,270 degrees and configure X / Y + invert accordingly from the software)