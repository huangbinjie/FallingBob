export type Task = () => void

export class Updater {
  private timer?: any
  private tasks: Task[] = []

  constructor(private period?: number) { }

  addTask(task: Task) {
    this.tasks.push(task)
  }

  run() {
    if (this.period) {
      if (this.period >= 10) {
        this.timer = setInterval(() => {
          for (const task of this.tasks) {
            task()
          }
        }, this.period)
      }
    } else {
      const handle = () => {
        for (const task of this.tasks) {
          task()
        }
        this.timer = window.requestAnimationFrame(handle)
      }
      this.timer = window.requestAnimationFrame(handle)
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer)
      window.cancelAnimationFrame(this.timer)
    }
  }
}