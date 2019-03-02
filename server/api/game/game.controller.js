/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/games              ->  index
 * POST    /api/games              ->  create
 * GET     /api/games/:id          ->  show
 * PUT     /api/games/:id          ->  update
 * DELETE  /api/games/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Game from './game.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    if(update.actions) {
      delete update.actions;
    }    
    var updated = _.merge(entity, updates); 
    return updated.save()
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
    console.log(err);
  };
}

// Gets a list of Games
export function index(req, res) {
  Game.find()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Game from the DB
export function show(req, res) {
  Game.findById(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Game in the DB
export function create(req, res) {
  Game.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Game in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  //console.log(req.body);
  Game.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Game from the DB
export function destroy(req, res) {
  Game.findById(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

// Adds a new Action to a Game in the DB
export function addAction(req, res) {
  Game.findById(req.params.id)
    .then(handleEntityNotFound(res))
    .then((game) => {
      game.addAction(req.body);
      return game.save();
    })
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Removes an Action from a Game in the DB
export function removeAction(req, res) {
  Game.findById(req.params.id)
    .then(handleEntityNotFound(res))
    .then((game) => {
      game.removeActionById(req.params.actionId);
      return game.save();
    })
    .then(respondWithResult(res, 204))
    .catch(handleError(res));
}

export function start(req, res) {
  Game.findById(req.params.id)
    .then(handleEntityNotFound(res))
    .then((game) => {
      game.startClock();
      return game.save();
    })
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}

export function stop(req, res) {
  Game.findById(req.params.id)
    .then(handleEntityNotFound(res))
    .then((game) => {
      game.stopClock();
      return game.save();
    })
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}

export function complete(req, res) {
  Game.findById(req.params.id)
    .then(handleEntityNotFound(res))
    .then((game) => {
      game.complete();
      return game.save();
    })
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}
