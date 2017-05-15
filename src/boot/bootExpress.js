import express from 'express';

const app = express();

// HTTP
app.listen(PORT, () => {
    console.log(`Express server running at localhost: ${PORT}, ${new Date()}`);
});

export default app;