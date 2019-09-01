import {
    GraphQLBoolean
}
from 'graphql';
import ListingMOdel from '../../../models/listing';
export default {
    type: GraphQLBoolean
    , resolve(root, params, options) {
        return ListingModel.remove({}).exec();
    }
};