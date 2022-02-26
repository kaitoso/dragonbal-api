
const logger = require("pino")();

/** 
*Función Encargada de iniciar el servidor
*@PARAM {*} port: Puerto en donde se levantará el api
*@PARAM {*} app: Objeto app de express
*
*/
const serverStart = (port,app) => {
   
    app.listen(port, () => {
      logger.info(`Servidor ejecutandose en el puerto: ${port}`);
    });
  };

  module.exports = { serverStart }