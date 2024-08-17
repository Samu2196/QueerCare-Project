import 'dotenv/config'
import getAllHCPs from './getAllHCPs.js'
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI)
    .then(() => getAllHCPs('66bb4a56a7f887b177c815ff'))
    .then(healthCareProviders => console.log(healthCareProviders))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
