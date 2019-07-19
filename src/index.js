const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});

// app.use((req, res, next) => {
// 	if (req.method === 'GET') {
// 		res.send('GET request are disabled');
// 	} else {
// 		next();
// 	}
// });

// app.use((req, res, next) => {
// 	res.status(503).send('Site is currently down. Check back soon!');
// });

// const multer = require('multer');
// const upload = multer({
// 	dest: 'images',
// 	limits: {
// 		fileSize: 1000000
// 	},
// 	fileFilter(req, file, cb) {
// 		if (!file.originalname.match(/\.(doc|docx)$/)) {
// 			return cb(new Error('Please upload a world document'));
// 		}

// 		cb(undefined, true);

// 		// cb(new Error('File must be a PDF'));
// 		// cb(undefined, true);
// 		// cb(undefined, false);
// 	}
// });

// app.post(
// 	'/upload',
// 	upload.single('upload'),
// 	(req, res) => {
// 		res.send();
// 	},
// 	(error, req, res, next) => {
// 		res.status(400).send({
// 			error: error.message
// 		});
// 	}
// );

// const Task = require('../src/models/task');
// const User = require('../src/models/user');

// const main = async () => {
// 	// const task = await Task.findById('5d2d73551c05f23f04a40e5f');
// 	// await task.populate('owner').execPopulate();

// 	// console.log(task.owner);

// 	const user = await User.findById('5d2d7286691e7741041a9451');
// 	await user.populate('tasks').execPopulate();
// 	console.log(user.tasks);
// };

// main();
