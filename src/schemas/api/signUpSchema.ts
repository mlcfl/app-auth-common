import Joi, {type ObjectSchema} from 'joi';
import {ValidateRequestBodySchema} from 'common/all/utils';

/**
 * Request
 */
export type SignUpReqSchema = {
	rules: 'on';
	cookie: 'on';
	personal: 'on';
};

export const signUpReqSchema: ValidateRequestBodySchema<SignUpReqSchema> = {
	body: Joi.object({
		rules: Joi
			.string()
			.equal('on')
			.required(),
		cookie: Joi
			.string()
			.equal('on')
			.required(),
		personal: Joi
			.string()
			.equal('on')
			.required(),
	}),
};

/**
 * Response
 */
export type SignUpResSchema = {
	login: string;
	password: string;
};

export const signUpResSchema: ObjectSchema<SignUpResSchema> = Joi.object({
	login: Joi
		.string()
		.required(),
	password: Joi
		.string()
		.required(),
});
