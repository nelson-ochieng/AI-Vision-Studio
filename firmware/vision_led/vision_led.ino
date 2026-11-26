// Arduino / ESP32 LED demonstration; change LED_PIN to suit your board.
#ifndef LED_BUILTIN
#define LED_BUILTIN 2
#endif
const int LED_PIN=LED_BUILTIN;
char line[8]; unsigned int used=0; bool overflow=false;
unsigned long last=0;
void setup(){pinMode(LED_PIN,OUTPUT);digitalWrite(LED_PIN,LOW);Serial.begin(115200);}
void loop(){while(Serial.available()){char c=Serial.read();if(c=='\n'){line[used]=0;if(!overflow && strcmp(line,"ON")==0){digitalWrite(LED_PIN,HIGH);last=millis();}else digitalWrite(LED_PIN,LOW);used=0;overflow=false;}else if(c!='\r'){if(used<sizeof(line)-1)line[used++]=c;else overflow=true;}}if(millis()-last>2000)digitalWrite(LED_PIN,LOW);}
