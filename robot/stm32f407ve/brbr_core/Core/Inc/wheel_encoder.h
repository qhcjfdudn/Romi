/*
 * wheel_encoder.h
 *
 *  Created on: May 27, 2020
 *      Author: multicampus
 */

#ifndef INC_WHEEL_ENCODER_H_
#define INC_WHEEL_ENCODER_H_

#define MOTOR_ENCODER_GPIO_Port 			GPIOC
#define MOTOR_LEFT_ENCODER1_Pin 			GPIO_PIN_0
#define MOTOR_LEFT_ENCODER2_Pin 			GPIO_PIN_1
#define MOTOR_RIGHT_ENCODER1_Pin 			GPIO_PIN_2
#define MOTOR_RIGHT_ENCODER2_Pin 			GPIO_PIN_3

#define UNSIGNED16_MAX	65535
#define WHEEL_NUM		2

#define TICK2RAD		0.1377302392

#include "main.h"
#include "stm32f4xx_hal.h"

extern volatile long long left_encoder_count;
extern volatile long long right_encoder_count;

extern float low_encoder_wrap;
extern float high_encoder_wrap;
extern uint8_t init_encoder;
extern int32_t last_diff_tick[WHEEL_NUM];
extern uint16_t last_tick[WHEEL_NUM];
extern double last_rad[WHEEL_NUM];
extern double last_vel[WHEEL_NUM];

extern char encoder_log[200];

void encoderInit();
void encoderInit1();
void updateEncoderInfo();

#endif /* INC_WHEEL_ENCODER_H_ */
