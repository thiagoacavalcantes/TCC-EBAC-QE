// produto.contract.js
const Joi = require('joi')

const couponsSchema = Joi.array().items(
  Joi.object({
    id: Joi.number(),
    code: Joi.string(),
    amount: Joi.string(),
    date_created: Joi.date(),
    date_created_gmt: Joi.date(),
    date_modified: Joi.date(),
    date_modified_gmt: Joi.string(),
    date_expires: Joi.string().allow(null),
    date_expires_gmt: Joi.string().allow(null),
    usage_limit: Joi.string().allow(null),
    usage_limit_per_user: Joi.string().allow(null),
    limit_usage_to_x_items: Joi.string().allow(null),
    discount_type: Joi.string(),
    description: Joi.string(),
    usage_count: Joi.number(),
    individual_use: Joi.boolean(),
    product_ids: Joi.array(),
    excluded_product_ids: Joi.array(),
    free_shipping: Joi.boolean(),
    product_categories: Joi.array(),
    excluded_product_categories: Joi.array(),
    exclude_sale_items: Joi.boolean(),
    minimum_amount: Joi.string(),
    maximum_amount: Joi.string(),
    email_restrictions: Joi.array(),
    used_by: Joi.array(),
    meta_data: Joi.array(),
    _links: Joi.object()
  })
)

module.exports = couponsSchema
