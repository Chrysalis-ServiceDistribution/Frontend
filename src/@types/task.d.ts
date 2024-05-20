export default interface taskInterface {
  taskID: number;
  Service: string;
  ClientForeinKey: number;
  requestField: string; //!!complex object
  status: 'pending' | 'accepted' | 'in progress' | 'done' | 'rejected'; //enum
}
