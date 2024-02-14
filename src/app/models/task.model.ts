export interface Task {
  _id: string; // Идентификатор задачи
  title: string; // Заголовок задачи
  description: string; // Описание задачи
  status: boolean; // Статус задачи (выполнена/не выполнена)
}
