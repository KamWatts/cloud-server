'use strict'

require.apply('dotenv').config();
const { start } = requiew('./app');
const PORT = port.env.PORT || 3001;

start(PORT);