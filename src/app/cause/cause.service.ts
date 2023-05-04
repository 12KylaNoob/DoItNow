import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CauseService {
  constructor() {}
  causes = [
    {
      img: '',
      title: 'A lack of focus',
      content:
        'When you do not have a clear idea of what needs to be done, it becomes much easier to put off working on the task.',
    },
    {
      img: '',
      title: 'Lack of motivation',
      content: 'Motivation is what drives you to do what must be done.',
    },
    {
      img: '',
      title: 'Time management issues',
      content:
        'Having poor time management skills can result in missing deadlines and appointments.',
    },
    {
      img: '',
      title: 'Fear',
      content:
        'Fear generally causes procrastination by serving as a powerful emotional deterrent, which makes people more averse to a certain task and causes those people to delay taking action as a way to delay whatever it is that they are afraid of.',
    },
    {
      img: '',
      title: 'Perfectionism',
      content:
        'Perfectionism can increase the negative emotions that people experience when they make mistakes, leading people to delay their work as a way to delay the associated negative emotions.',
    },
    {
      img: '',
      title: 'Preference to short-term tasks',
      content:
        'Prioritizing short-term mood can lead to procrastination by preferring to feel better right now even if this will lead to feeling worse later.',
    },
    {
      img: '',
      title: 'Overwhelmed',
      content:
        'Feeling overwhelmed by what might be required of us, it may feel impossible to take any action toward the task.',
    },
  ];
}
