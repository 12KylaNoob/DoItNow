import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WaysService {
  constructor() {}
  way = [
    {
      img: '',
      title: 'Set goals',
      content:
        'Setting better goals will help you identify the obstacles you face enabling you to create strategies to overcome procrastination.',
    },
    {
      img: '',
      title: 'Make a schedule',
      content:
        'Schedule distractions, schedule the time in advance when will you use phone or social media. Create and sticking to a schedule is easy to do and will help you win your battle against procrastination.',
    },
    {
      img: '',
      title: 'Prevent multitasking',
      content:
        'Stop multitasking, trying to do multiple things at once hurts productivity.',
    },
    {
      img: '',
      title: 'Refrain from using your phone',
      content:
        'Put your phone to silent mode, hearing your phone buzz distracts you and hurts your performance. To block distractions, put your phone on silent and leave it out of sight.',
    },
    {
      img: '',
      title: 'Motivate yourself with rewards',
      content:
        'Rewarding yourself for every task you finish, rewarding youself with something you enjoy can help you motivate yourself to complete your work and make the process more enjoyable.',
    },
    {
      img: '',
      title: 'Work out WHY you are procrastinating',
      content:
        'You need to understand the reasons why you are procrastinating before you can begin to tackle it. Another major cause of procrastination is poor decision-making. If you can not decide what to do, you will likely put off taking action in case you do the wrong thing.',
    },
    {
      img: '',
      title: 'Practice self-compassion',
      content:
        'Be kind to yourself and avoid negative self-talk. Recognize that procrastination is a common problem, and its okay to make mistakes. Focus on progress not perfection.',
    },
  ];
}
