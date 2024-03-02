class AppService {
    constructor(database) {
        this.database = database;
    }

    async getTasks() {
        try{
            return await this.database.getTasks();
        }
        catch(e){
            console.error(`Failed to get tasks ${e}`);
        }
    }

    async getTaskById(id) {
        try{
            return await this.database.getTaskById(id);
        }
        catch(e){
            console.error(`Failed to get task by id ${e}`);
        }
    }

    async createTask(request_json) {
        try{
            return await this.database.createTask(request_json);
        }
        catch(e){
            console.error(`Failed to create task ${e}`);
        }
    }

    async updateTask(request_json, id) {
        try{
            return await this.database.updateTask(request_json, id);
        }
        catch(e){
            console.error(`Failed to update task ${e}`);
        }
    }

    async deleteTask(id) {
        try{
            return await this.database.deleteTask(id);
        }
        catch(e){
            console.error(`Failed to delete task ${e}`);
        }
    }
}

module.exports.AppService = AppService;