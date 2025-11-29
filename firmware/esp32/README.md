# ESP32 Firmware for P.E.E.R

## Hardware Requirements

- ESP32 DevKit board
- Vibration motor (or small DC motor)
- LED (built-in LED on pin 2 works)
- Light sensor (LDR with 10kΩ resistor)
- Breadboard and jumper wires
- USB cable for programming

## Wiring Diagram

```
ESP32 Pin    Component
---------    ---------
GPIO 2       LED (built-in)
GPIO 4       Vibration Motor (via transistor)
GPIO 34      Light Sensor (LDR)
GND          Common Ground
3.3V         Power for sensors
```

## Installation

### 1. Install Arduino IDE

Download from: https://www.arduino.cc/en/software

### 2. Add ESP32 Board Support

1. Open Arduino IDE
2. Go to File → Preferences
3. Add this URL to "Additional Board Manager URLs":
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
4. Go to Tools → Board → Boards Manager
5. Search for "ESP32" and install "ESP32 by Espressif Systems"

### 3. Install Required Libraries

Go to Sketch → Include Library → Manage Libraries and install:
- No additional libraries needed (BLE is built-in)

### 4. Upload Firmware

1. Connect ESP32 to computer via USB
2. Select board: Tools → Board → ESP32 Dev Module
3. Select port: Tools → Port → (your ESP32 port)
4. Open `vidyut_bandhu.ino`
5. Click Upload button

## Usage

### Pairing with Mobile App

1. Power on the ESP32
2. Open P.E.E.R mobile app
3. Go to Settings → Pair ESP32 Device
4. Look for "Vidyut-Bandhu" in the list
5. Tap to pair

### BLE Commands

The device accepts these commands via BLE:

- `VIBRATE:500` - Vibrate for 500ms
- `LED:128` - Set LED brightness (0-255)
- `REMINDER:ON` - Enable reminders
- `REMINDER:OFF` - Disable reminders
- `GET_LIGHT` - Get current light sensor reading

### LED Indicators

- **5 quick blinks** - Device powered on and ready
- **3 quick blinks** - Device connected to app
- **Continuous blink** - Reminder triggered

## Troubleshooting

**Device not found:**
- Make sure Bluetooth is enabled on your phone
- Reset ESP32 and try again
- Check if LED is blinking (device is advertising)

**Upload fails:**
- Hold BOOT button while uploading
- Check USB cable and port selection
- Try a different USB port

**Vibration motor not working:**
- Check wiring
- May need a transistor (2N2222 or similar) to drive motor
- Verify GPIO 4 is not used by other components

## Power Consumption

- Active (BLE connected): ~80mA
- Idle (advertising): ~50mA
- Deep sleep: ~10µA (not implemented yet)

For battery operation, use a 3.7V LiPo battery with appropriate protection circuit.

## Future Enhancements

- Add RTC module for accurate reminder times
- Implement deep sleep mode for battery saving
- Add temperature/humidity sensor
- Support for multiple paired devices
