class Github {
  constructor() {
    this.client_id = '950f247b20002f20aa77';
    this.client_secret = 'e2845846c70fe4e95c49d0271ab1cc50b10d9cee';
    this.repos_count=5;
    this.repos_sort='created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}