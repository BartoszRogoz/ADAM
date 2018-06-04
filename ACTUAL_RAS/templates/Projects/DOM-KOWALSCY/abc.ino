//#include <wirish/wirish.h>
//#include "libraries/FreeRTOS/MapleFreeRTOS.h"
#include <MapleFreeRTOS900.h>
//#include <RasPi.h>
#include <RTClock.h>

uint32 tt;
uint32 xd;
int i = 0;
char incomingByte;
static void TEST(void *pvParameters) {
  for (;;) {
    digitalWrite(PC13, HIGH);
    vTaskDelay(100);
    digitalWrite(PC13, LOW);
    vTaskDelay(100);
 
  }
}
static void GPIO_SET(void *pvParameters) {
  int x,y=50;
  char b;
  for (;;) {
      while (Serial.available() > 0) {
          b = Serial.read();
      }
      if(b=='A')
      {
        analogWrite(PA5,x+10);
        analogWrite(PA4,y+20);
      }
       if(b=='B')
      {
        analogWrite(PA5,x-10);
        analogWrite(PA4,y-20);
      }
      if(b=='Z')
      {
        digitalWrite(PA0,0);
        digitalWrite(PA1,1);
      }
      if(b=='Y')
      {
        digitalWrite(PA0,1);
        digitalWrite(PA1,0);
      }
     vTaskDelay(200);
    }
   
  
}

static void GPIO_UPDATE(void *pvParameters) {
  RTClock rt (RTCSEL_LSE);
  for (;;) {
    tt = rt.getTime();
    Serial.print("#");
    vTaskDelay(2);
    Serial.print(tt);
    Serial.print("-");
    Serial.print("PA3:");
    Serial.print(digitalRead(PA3));
    Serial.print(">");
    Serial.print("PA2:");
    Serial.print(digitalRead(PA2));
    Serial.print(">");
    Serial.print("PA7:");
    Serial.print(analogRead(PA7));
    Serial.print(">");
    Serial.print("PA6:");
    Serial.print(analogRead(PA6));
    Serial.print("$");
    vTaskDelay(1000);
  }
}

void setup() {
  pinMode(PA6, INPUT_ANALOG);
  pinMode(PA7, INPUT_ANALOG);
  pinMode(PA5, OUTPUT);
  pinMode(PA4, OUTPUT);
  pinMode(PA3, INPUT_PULLUP);
  pinMode(PA2, INPUT_PULLUP);
  pinMode(PA0, OUTPUT);
  pinMode(PA1, OUTPUT);

  pinMode(PC13, OUTPUT);
  Serial.begin(115200);
  // inputString.reserve(200);
  xTaskCreate(TEST,
              "Task1",
              configMINIMAL_STACK_SIZE,
              NULL,
              tskIDLE_PRIORITY + 2,
              NULL);
  xTaskCreate(GPIO_UPDATE,
              "Task2",
              configMINIMAL_STACK_SIZE,
              NULL,
              tskIDLE_PRIORITY + 2,
              NULL);
  xTaskCreate(GPIO_SET,
              "Task3",
              configMINIMAL_STACK_SIZE,
              NULL,
              tskIDLE_PRIORITY + 2,
              NULL);

  vTaskStartScheduler();
}


void loop() {
  // Insert background code here
}


