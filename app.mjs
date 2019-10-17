import Route from './routes.mjs';

class AenmaAPI {
  constructor(server) {
    this.app = server;
  }
  
  webpage(webpage = []) {
    for (const [page, file] of webpage) {
      this.app.get(`/${page}`, (req, res) => {
        res.status(200).sendFile(`/app/webpage/${file}.html`);
      });
    }
  }
  
  route(route = []) {
    for (const [dir, file] of route) {
      this.app.use(`/${dir}/${file}`, Route[file]);
    }
  }
  
  error404() {
    this.app.use('*', (req, res) => {
      res.status(404).sendFile('/app/webpage/404.html');
    });
  }
}

export default AenmaAPI;
