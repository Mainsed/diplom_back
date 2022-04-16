const express = require('express');
const programingLanguagesRouter = require('./modules/programingLanguages/programingLanguages.router');
const professionListRouter = require('./modules/professionList/professionList.router');
const partnersEmploymentInfoRouter = require('./modules/partnersEmploymentInfo/partnersEmploymentInfo.router');
const faqListRouter = require('./modules/faqList/faqList.router');
const employmentMaterialsRouter = require('./modules/employmentMaterials/employmentMaterials.router');

require('dotenv').config();

const app = express();

app.use((req, res, next) => {
  console.log(req.body, req.url, req.method);

  const authToken = req.headers.authorization;
  if (!authToken || authToken !== process.env.AUTH_TOKEN)
    throw new Error(JSON.stringify({ message: 'Not valid auth token', status: 'Forbidden', code: 403 }));

  next();
});

app.use(express.json());

app.use('/programingLanguages', programingLanguagesRouter);
app.use('/professionList', professionListRouter);
app.use('/partnersEmploymentInfo', partnersEmploymentInfoRouter);
app.use('/faqList', faqListRouter);
app.use('/employmentMaterials', employmentMaterialsRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  let errorContent;
  try {
    errorContent = JSON.parse(err.message);
  }
  catch (e) {
    const isJoiError = !!err?.error?.details;
    const joiMessage = isJoiError ?
      err.error.details.map(detail => detail.message,) : null;

    errorContent = { message: joiMessage || err.message };
  }
  res.status(500).send({ status: 'Internal Server Error', ...errorContent });

  next();
});

app.listen(process.env.PORT || 3000, () => console.log(`Server started at port ${process.env.PORT || 3000}`));