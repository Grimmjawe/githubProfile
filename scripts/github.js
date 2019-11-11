class GitHub {
    constructor(){
        this.client_id = 'edad779fcb432d9e71d0';
        this.client_secret = '9e4eb01e5f095677d86e2d35677eb4811788db5e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        this.user = 'grimmjawe';
    }
    async getUserData(){
        let urlProfile = `https://api.github.com/${this.user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        let urlRepos = "https://api.github.com/" + this.user + "/repost?per_page=" + this.repos_count + "&sort" + this.repos_sort + "&client_id=" + this.client_id + "&client_secret=" + this.client_secret;
        const profileResponse = await fetch(urlProfile);
        const reposReponse = await fetch(urlRepos)
        
    }
}