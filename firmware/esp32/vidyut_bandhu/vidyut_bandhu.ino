// ============================================================================
// ESP32 BLE Firmware for P.E.E.R
// Hardware: ESP32 DevKit, LED, Vibration Motor, Light Sensor (LDR)
// ============================================================================

#include <BLE2902.h>
#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>

// UUIDs for BLE Service and Characteristic
#define SERVICE_UUID "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

// Pin Definitions
#define LED_PIN 2           // Built-in LED
#define VIBRATION_PIN 4     // Vibration motor
#define LIGHT_SENSOR_PIN 34 // LDR analog input

// Global Variables
BLEServer *pServer = NULL;
BLECharacteristic *pCharacteristic = NULL;
bool deviceConnected = false;
bool oldDeviceConnected = false;

// Settings (can be updated via BLE)
struct Settings {
  bool reminderEnabled = true;
  int vibrationIntensity = 128; // 0-255
  int ledBrightness = 128;      // 0-255
  String reminderTimes[3] = {"08:00", "16:00", "20:00"};
} settings;

// BLE Server Callbacks
class MyServerCallbacks : public BLEServerCallbacks {
  void onConnect(BLEServer *pServer) {
    deviceConnected = true;
    Serial.println("Device connected");
    // Blink LED to indicate connection
    blinkLED(3);
  }

  void onDisconnect(BLEServer *pServer) {
    deviceConnected = false;
    Serial.println("Device disconnected");
  }
};

// BLE Characteristic Callbacks
class MyCallbacks : public BLECharacteristicCallbacks {
  void onWrite(BLECharacteristic *pCharacteristic) {
    std::string value = pCharacteristic->getValue();

    if (value.length() > 0) {
      Serial.println("Received command:");
      Serial.println(value.c_str());

      // Parse commands
      String command = String(value.c_str());

      if (command.startsWith("VIBRATE:")) {
        int duration = command.substring(8).toInt();
        vibrate(duration);
      } else if (command.startsWith("LED:")) {
        int brightness = command.substring(4).toInt();
        setLED(brightness);
      } else if (command.startsWith("REMINDER:")) {
        String enabled = command.substring(9);
        settings.reminderEnabled = (enabled == "ON");
      } else if (command == "GET_LIGHT") {
        int lightLevel = readLightSensor();
        String response = "LIGHT:" + String(lightLevel);
        pCharacteristic->setValue(response.c_str());
        pCharacteristic->notify();
      }
    }
  }
};

void setup() {
  Serial.begin(115200);
  Serial.println("P.E.E.R ESP32 Starting...");

  // Initialize pins
  pinMode(LED_PIN, OUTPUT);
  pinMode(VIBRATION_PIN, OUTPUT);
  pinMode(LIGHT_SENSOR_PIN, INPUT);

  // Initialize BLE
  BLEDevice::init("P.E.E.R");

  // Create BLE Server
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  // Create BLE Service
  BLEService *pService = pServer->createService(SERVICE_UUID);

  // Create BLE Characteristic
  pCharacteristic = pService->createCharacteristic(
      CHARACTERISTIC_UUID, BLECharacteristic::PROPERTY_READ |
                               BLECharacteristic::PROPERTY_WRITE |
                               BLECharacteristic::PROPERTY_NOTIFY);

  pCharacteristic->setCallbacks(new MyCallbacks());
  pCharacteristic->addDescriptor(new BLE2902());

  // Start the service
  pService->start();

  // Start advertising
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();

  Serial.println("BLE device is now advertising");
  Serial.println("Waiting for connection...");

  // Initial LED blink to show device is ready
  blinkLED(5);
}

void loop() {
  // Handle disconnection
  if (!deviceConnected && oldDeviceConnected) {
    delay(500);
    pServer->startAdvertising();
    Serial.println("Start advertising again");
    oldDeviceConnected = deviceConnected;
  }

  // Handle new connection
  if (deviceConnected && !oldDeviceConnected) {
    oldDeviceConnected = deviceConnected;
  }

  // Periodic light sensor reading (every 10 seconds)
  static unsigned long lastSensorRead = 0;
  if (millis() - lastSensorRead > 10000) {
    lastSensorRead = millis();

    if (deviceConnected) {
      int lightLevel = readLightSensor();
      String data = "LIGHT:" + String(lightLevel);
      pCharacteristic->setValue(data.c_str());
      pCharacteristic->notify();
      Serial.println("Sent light level: " + String(lightLevel));
    }
  }

  // Check for reminder times (simplified - in production use RTC)
  // This would require adding a real-time clock module

  delay(100);
}

// Helper Functions

void blinkLED(int times) {
  for (int i = 0; i < times; i++) {
    digitalWrite(LED_PIN, HIGH);
    delay(200);
    digitalWrite(LED_PIN, LOW);
    delay(200);
  }
}

void setLED(int brightness) {
  analogWrite(LED_PIN, brightness);
  Serial.println("LED brightness set to: " + String(brightness));
}

void vibrate(int duration) {
  Serial.println("Vibrating for " + String(duration) + "ms");
  analogWrite(VIBRATION_PIN, settings.vibrationIntensity);
  delay(duration);
  analogWrite(VIBRATION_PIN, 0);
}

int readLightSensor() {
  int reading = analogRead(LIGHT_SENSOR_PIN);
  Serial.println("Light sensor reading: " + String(reading));
  return reading;
}

void triggerReminder() {
  // Vibrate and blink LED
  vibrate(500);
  blinkLED(3);
  Serial.println("Reminder triggered!");
}
