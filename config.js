const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7847682423:AAFM0gJ_dnzcCUed3oSZmriGq_TIsfcur8k',
  id: isNaN(parsedId) ? 6485907845 ,7667306230 : parsedId // replace 12345.. with your telegram chat id
};
