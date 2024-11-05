import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time: number = 0; // Time in seconds
  interval: any;
  isRunning: boolean = false;
  taskLogs: { task: string, time: string }[] = [];

  // Start or Resume the Timer
  startTimer() {
    if (!this.isRunning) {
      this.interval = setInterval(() => {
        this.time++;
      }, 1000);
      this.isRunning = true;
    }
  }

  // Pause the Timer
  pauseTimer() {
    if (this.isRunning) {
      clearInterval(this.interval);
      this.isRunning = false;
    }
  }

  // Reset the Timer
  resetTimer() {
    this.pauseTimer();
    this.time = 0;
  }

  // Log the Task with Time
  logTask(taskName: string) {
    const hours = Math.floor(this.time / 3600);
    const minutes = Math.floor((this.time % 3600) / 60);
    const seconds = this.time % 60;
    const formattedTime = `${hours}h ${minutes}m ${seconds}s`;
    this.taskLogs.push({ task: taskName, time: formattedTime });
    this.resetTimer(); // Reset the timer after logging
  }
}


