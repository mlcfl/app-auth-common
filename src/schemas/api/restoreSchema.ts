import Joi from 'joi';
import {ValidateRequestBodySchema} from 'common/all/utils';

/**
 * Request
 */
export type RestoreReqSchema = {
	login: string;
};

export const restoreReqSchema: ValidateRequestBodySchema<RestoreReqSchema> = {
	body: Joi.object({
		login: Joi
			.string()
			.length(16)
			.pattern(/^[0-9]{16}$/)
			.required(),
	}),
}
