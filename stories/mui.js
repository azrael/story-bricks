/*
* All Material UI components are wrapped in `withStyles` decorator.
* And in fact this framework exports `withStyles(Component)` but not just `Component`.
* So in order to beatify JSX output we map Material exported components into simple functional components.
*/

import React from 'react';
import MaterialBadge from '@material-ui/core/Badge';
import MaterialButton from '@material-ui/core/Button';

export const Badge = props => <MaterialBadge {...props} />;
export const Button = props => <MaterialButton {...props} />;
