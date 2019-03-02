/**
 * Main application routes
 */

'use strict';

import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/actions', require('./api/action'));
  app.use('/api/games', require('./api/game'));
  app.use('/api/teams', require('./api/team'));
  app.use('/timesync', require('./timesync'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get((req, res) => { res.sendStatus(404) });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
