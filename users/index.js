const main = {
    users: [],
    error: '',

    async  init (){
        const users = await this.fetchUsers();
        if(users){
            this.users = users;
        }
        else{
            this.error = 'An error has occurred';
        }
        this.render();
    },

    async fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(response.ok){
            const data = await response.json();
            return data;
        }
        return null;

    },

    render() {

        const items = this.users.map(user=> `<li>${user.name} &lt;${user.email}&gt;</li>`);
        const list = document.getElementById('list');
        list.innerHTML =items.join('');
  

    }
};