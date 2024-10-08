const Joi = require('joi')

const minerSchema = Joi.object({
  chainWsUrl: Joi.string().optional(),
  backupChainWsUrls: Joi.array().optional(),
  port: Joi.number().port().default(15001),
  earningsAcc: Joi.string().optional(),
  incomeAccount: Joi.string().optional(),
  stakingAcc: Joi.string().optional().allow(""),
  stakerAccount: Joi.string().optional().allow(""),
  mnemonic: Joi.string().optional(),
  signPhrase: Joi.string().optional(),
  diskPath: Joi.string().required(),
  UseCpu: Joi.number().optional(),
  useCpuCores: Joi.number().optional(),
  UseSpace: Joi.number().optional(),
  space: Joi.number().port().optional(),
  Boot: Joi.string().optional(),
  bootAddr: Joi.string().optional(),
  extraCmdArgs: Joi.string().optional(),
  reservedTws: Joi.array().optional(),
  TeeList: Joi.array().optional(),
  name: Joi.string().optional()
}).xor('Boot', 'bootAddr') // nodeadm use bootAddr and mineradm use Boot
  .xor('mnemonic', 'signPhrase') // nodeadm use signPhrase and mineradm use mnemonic
  .xor('earningsAcc', 'incomeAccount') // nodeadm use incomeAccount and mineradm use earningsAcc
  .xor('space', 'UseSpace') // nodeadm use space and mineradm use UseSpace
  .xor('UseCpu', 'useCpuCores') // nodeadm use useCpuCores and mineradm use UseCpu
  .xor('stakingAcc', 'signPhrase') // nodeadm use signPhrase and mineradm use stakingAcc
  // For compatibility: there's one item and there's only one item can be true

module.exports = {
  minerSchema,
}
