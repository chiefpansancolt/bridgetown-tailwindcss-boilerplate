import 'bridgetown-quick-search';
import {Application} from 'stimulus';
import {definitionsFromContext} from 'stimulus/webpack-helpers';
import TabsController from 'stimulus-tabs';

import ';../styles/index.scss';

const application = Application.start();
application.register('tabular', TabsController);
const context = require.context('./controllers', true, /\.js$/);
application.load(definitionsFromContext(context));
