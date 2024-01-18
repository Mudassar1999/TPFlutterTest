let server;
const expressServer = (port, app) => {
  try {
    server = app.listen(port, () => {
      console.info(`Listening to port ${"http://localhost:" + port}`);
    });
  } catch {
    console.info(`Server is not Working : ERROR`);
  }
};
module.exports = { expressServer};
